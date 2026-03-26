import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import ScrollReveal from "@/components/ScrollReveal";

type Seat = {
  id: string;
  partition_number: number;
  seat_number: number;
  is_occupied: boolean;
  occupant_name: string | null;
};

const SeatMap = () => {
  const [seats, setSeats] = useState<Seat[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchSeats = async () => {
    const { data } = await supabase
      .from("seats")
      .select("*")
      .order("seat_number", { ascending: true });
    if (data) setSeats(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchSeats();

    const channel = supabase
      .channel("seats-realtime")
      .on("postgres_changes", { event: "*", schema: "public", table: "seats" }, () => {
        fetchSeats();
      })
      .subscribe();

    return () => { supabase.removeChannel(channel); };
  }, []);

  const partition1 = seats.filter((s) => s.partition_number === 1);
  const partition2 = seats.filter((s) => s.partition_number === 2);

  const occupied1 = partition1.filter((s) => s.is_occupied).length;
  const occupied2 = partition2.filter((s) => s.is_occupied).length;

  if (loading) {
    return (
      <section className="py-24 bg-gradient-section">
        <div className="container mx-auto px-6 text-center">
          <div className="animate-pulse text-muted-foreground">Loading seat availability...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-gradient-section">
      <div className="container mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">Live Availability</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Seat <span className="text-gradient-gold italic">Availability</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto leading-relaxed">
            Check real-time seat availability across both study zones.
          </p>
        </ScrollReveal>

        {/* Legend */}
        <div className="flex items-center justify-center gap-6 mb-10">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-sm bg-emerald-500/20 border border-emerald-500/40" />
            <span className="text-sm text-muted-foreground">Available</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-sm bg-destructive/20 border border-destructive/40" />
            <span className="text-sm text-muted-foreground">Occupied</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Partition 1 */}
          <ScrollReveal>
            <div className="bg-card rounded-xl border border-border/50 shadow-warm p-6">
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-display text-xl font-semibold text-foreground">Zone A</h3>
                <span className="text-sm font-medium text-muted-foreground">
                  {occupied1}/{partition1.length} occupied
                </span>
              </div>
              <div className="grid grid-cols-6 gap-2">
                {partition1.map((seat) => (
                  <div
                    key={seat.id}
                    className={`aspect-square rounded-md flex items-center justify-center text-xs font-semibold transition-colors ${
                      seat.is_occupied
                        ? "bg-destructive/15 border border-destructive/30 text-destructive"
                        : "bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400"
                    }`}
                    title={seat.is_occupied ? `Occupied${seat.occupant_name ? ` - ${seat.occupant_name}` : ""}` : "Available"}
                  >
                    {seat.seat_number}
                  </div>
                ))}
              </div>
              <div className="mt-4 h-1.5 rounded-full bg-muted overflow-hidden">
                <div
                  className="h-full rounded-full bg-gold transition-all duration-500"
                  style={{ width: `${(occupied1 / partition1.length) * 100}%` }}
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Partition 2 */}
          <ScrollReveal delay={0.1}>
            <div className="bg-card rounded-xl border border-border/50 shadow-warm p-6">
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-display text-xl font-semibold text-foreground">Zone B</h3>
                <span className="text-sm font-medium text-muted-foreground">
                  {occupied2}/{partition2.length} occupied
                </span>
              </div>
              <div className="grid grid-cols-5 gap-2">
                {partition2.map((seat) => (
                  <div
                    key={seat.id}
                    className={`aspect-square rounded-md flex items-center justify-center text-xs font-semibold transition-colors ${
                      seat.is_occupied
                        ? "bg-destructive/15 border border-destructive/30 text-destructive"
                        : "bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400"
                    }`}
                    title={seat.is_occupied ? `Occupied${seat.occupant_name ? ` - ${seat.occupant_name}` : ""}` : "Available"}
                  >
                    {seat.seat_number}
                  </div>
                ))}
              </div>
              <div className="mt-4 h-1.5 rounded-full bg-muted overflow-hidden">
                <div
                  className="h-full rounded-full bg-gold transition-all duration-500"
                  style={{ width: `${(occupied2 / partition2.length) * 100}%` }}
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default SeatMap;
