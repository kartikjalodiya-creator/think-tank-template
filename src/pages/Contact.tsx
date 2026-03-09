import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, Navigation, ArrowRight, CheckCircle, Loader2 } from "lucide-react";
import { toast } from "sonner";
import ScrollReveal from "@/components/ScrollReveal";
import galleryEntrance from "@/assets/gallery-entrance.jpg";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSubmitted(true);
    toast.success("Message sent! We'll get back to you soon.");
  };

  return (
    <div>
      {/* Header */}
      <section className="relative py-32 bg-primary text-center overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]">
          <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-gold blur-3xl" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal>
            <p className="text-gold/70 text-sm font-semibold tracking-widest uppercase mb-4">Contact</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
              Get In <span className="text-gradient-gold italic">Touch</span>
            </h1>
            <p className="text-primary-foreground/50 max-w-lg mx-auto leading-relaxed font-light">
              We'd love to hear from you. Visit us, call us, or send a message.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 max-w-5xl mx-auto">
            {/* Contact Info */}
            <ScrollReveal direction="left">
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-8">Contact Information</h2>
                <div className="space-y-6 mb-12">
                  {[
                    { icon: MapPin, title: "Address", text: "141, Bhopal Square, AB Road, Dewas, Madhya Pradesh, India" },
                    { icon: Phone, title: "Phone", text: "Contact us for details" },
                    { icon: Mail, title: "Email", text: "info@kaivalyalibrary.com" },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl bg-gold/8 flex items-center justify-center shrink-0">
                        <item.icon className="h-5 w-5 text-gold" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                      </div>
                    </div>
                  ))}
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-gold/8 flex items-center justify-center shrink-0">
                      <Clock className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Operating Hours</h3>
                      <p className="text-sm text-muted-foreground">Monday–Friday: 7 AM – 10 PM</p>
                      <p className="text-sm text-muted-foreground">Saturday–Sunday: 8 AM – 8 PM</p>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="rounded-xl overflow-hidden shadow-warm h-64 border border-border/50">
                  <iframe
                    title="Kaivalya Library Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.5!2d76.05!3d22.96!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBhopal+Square%2C+AB+Road%2C+Dewas!5e0!3m2!1sen!2sin!4v1709000000000"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                <div className="mt-6 bg-card rounded-xl p-6 shadow-warm border border-border/50">
                  <div className="flex items-center gap-2.5 mb-2">
                    <Navigation className="h-4 w-4 text-gold" />
                    <h3 className="font-semibold text-foreground">Visit Us</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2 leading-relaxed">Located on the main AB Road, easily accessible from all parts of Dewas. Parking available on premises.</p>
                  <p className="text-sm font-medium text-gold">Walk-ins are always welcome!</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Contact Form */}
            <ScrollReveal direction="right">
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-8">Send a Message</h2>
                {submitted ? (
                  <div className="bg-card rounded-2xl p-12 shadow-warm text-center animate-fade-in border border-border/50">
                    <CheckCircle className="h-14 w-14 text-gold mx-auto mb-5" />
                    <h3 className="font-display text-xl font-bold text-foreground mb-3">Thank You!</h3>
                    <p className="text-muted-foreground mb-8 leading-relaxed">Your message has been received. We'll get back to you shortly.</p>
                    <Button variant="outline" onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", subject: "", message: "" }); }}>
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5 bg-card rounded-2xl p-8 shadow-warm border border-border/50">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Name *</label>
                      <Input placeholder="Your full name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required maxLength={100} />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Email *</label>
                      <Input type="email" placeholder="you@example.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required maxLength={255} />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Phone *</label>
                      <Input type="tel" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required maxLength={15} />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Subject</label>
                      <Select value={form.subject} onValueChange={(v) => setForm({ ...form, subject: v })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="membership">Membership Inquiry</SelectItem>
                          <SelectItem value="facility">Facility Question</SelectItem>
                          <SelectItem value="booking">Booking</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Message *</label>
                      <Textarea placeholder="How can we help you?" rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required maxLength={1000} />
                    </div>
                    <Button type="submit" variant="hero" size="lg" className="w-full">
                      Send Message <ArrowRight className="h-4 w-4" />
                    </Button>
                  </form>
                )}

                {/* Quick Links */}
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/pricing">View Pricing</Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/facilities">See Facilities</Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/">Go Home</Link>
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
