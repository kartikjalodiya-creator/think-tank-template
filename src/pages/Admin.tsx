import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LogOut, Lock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type Seat = {
  id: string;
  partition_number: number;
  seat_number: number;
  is_occupied: boolean;
  occupant_name: string | null;
  description: string | null;
  fees: string | null;
};

const Admin = () => {
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);
  const [seats, setSeats] = useState<Seat[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setLoading(false);
    });
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });
    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (session) fetchSeats();
  }, [session]);

  const fetchSeats = async () => {
    const { data } = await supabase
      .from("seats")
      .select("*")
      .order("partition_number")
      .order("seat_number");
    if (data) setSeats(data);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      toast({ title: "Login failed", description: error.message, variant: "destructive" });
    }
    setLoginLoading(false);
  };

  const toggleSeat = async (seat: Seat) => {
    const { error } = await supabase
      .from("seats")
      .update({
        is_occupied: !seat.is_occupied,
        occupant_name: !seat.is_occupied ? seat.occupant_name : null,
        updated_at: new Date().toISOString(),
      })
      .eq("id", seat.id);

    if (error) {
      toast({ title: "Error", description: "Failed to update seat", variant: "destructive" });
    } else {
      fetchSeats();
    }
  };

  const updateSeatDetails = async (seat: Seat, fields: Partial<Pick<Seat, 'occupant_name' | 'description' | 'fees'>>) => {
    await supabase
      .from("seats")
      .update({ ...fields, updated_at: new Date().toISOString() })
      .eq("id", seat.id);
    fetchSeats();
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  if (loading) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Loading...</div>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-gradient-section">
        <div className="bg-card rounded-xl border border-border/50 shadow-warm p-8 w-full max-w-sm">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
              <Lock className="h-5 w-5 text-gold" />
            </div>
          </div>
          <h1 className="font-display text-2xl font-bold text-foreground text-center mb-2">Owner Login</h1>
          <p className="text-sm text-muted-foreground text-center mb-6">Sign in to manage seat availability</p>
          <form onSubmit={handleLogin} className="space-y-4">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button type="submit" className="w-full" variant="hero" disabled={loginLoading}>
              {loginLoading ? "Signing in..." : "Sign In"}
            </Button>
          </form>
        </div>
      </div>
    );
  }

  const partition1 = seats.filter((s) => s.partition_number === 1);
  const partition2 = seats.filter((s) => s.partition_number === 2);

  return (
    <div className="min-h-[80vh] bg-gradient-section py-12">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-display text-3xl font-bold text-foreground">Seat Management</h1>
            <p className="text-sm text-muted-foreground mt-1">Click a seat to toggle occupied/available</p>
          </div>
          <Button variant="outline" size="sm" onClick={handleLogout}>
            <LogOut className="h-4 w-4 mr-2" /> Logout
          </Button>
        </div>

        {[{ title: "Zone A", seats: partition1, cols: "grid-cols-5 sm:grid-cols-6" },
          { title: "Zone B", seats: partition2, cols: "grid-cols-4 sm:grid-cols-5" }].map((zone) => (
          <div key={zone.title} className="bg-card rounded-xl border border-border/50 shadow-warm p-6 mb-6">
            <h2 className="font-display text-xl font-semibold text-foreground mb-4">{zone.title} ({zone.seats.length} seats)</h2>
            <div className={`grid ${zone.cols} gap-3`}>
              {zone.seats.map((seat) => (
                <div key={seat.id} className="space-y-1.5">
                  <button
                    onClick={() => toggleSeat(seat)}
                    className={`w-full aspect-square rounded-lg flex items-center justify-center text-sm font-bold transition-all duration-200 cursor-pointer hover:scale-105 ${
                      seat.is_occupied
                        ? "bg-destructive/20 border-2 border-destructive/40 text-destructive hover:bg-destructive/30"
                        : "bg-emerald-500/15 border-2 border-emerald-500/35 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-500/25"
                    }`}
                  >
                    {seat.seat_number}
                  </button>
                  {seat.is_occupied && (
                    <div className="space-y-1">
                      <Input
                        key={`name-${seat.id}-${seat.occupant_name}`}
                        className="h-7 text-xs"
                        placeholder="Name"
                        defaultValue={seat.occupant_name || ""}
                        onBlur={(e) => updateSeatDetails(seat, { occupant_name: e.target.value || null })}
                      />
                      <Input
                        key={`desc-${seat.id}-${seat.description}`}
                        className="h-7 text-xs"
                        placeholder="Description"
                        defaultValue={seat.description || ""}
                        onBlur={(e) => updateSeatDetails(seat, { description: e.target.value || null })}
                      />
                      <Input
                        key={`fees-${seat.id}-${seat.fees}`}
                        className="h-7 text-xs"
                        placeholder="Fees (₹)"
                        defaultValue={seat.fees || ""}
                        onBlur={(e) => updateSeatDetails(seat, { fees: e.target.value || null })}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;
