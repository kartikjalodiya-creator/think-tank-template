import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Wifi, BookOpen, MapPin, Clock, Users, Volume2, Zap, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import heroImage from "@/assets/hero-library.jpg";

const highlights = [
  { icon: Wifi, title: "High-Speed WiFi", desc: "Stay connected with 24/7 high-speed internet access at every desk." },
  { icon: Volume2, title: "Quiet Study Zones", desc: "Dedicated silent zones for focused, distraction-free studying." },
  { icon: MapPin, title: "Prime Location", desc: "Conveniently located on AB Road, Dewas — easy to reach from anywhere." },
  { icon: Clock, title: "Flexible Hours", desc: "Open early morning to late night with flexible membership plans." },
];

const stats = [
  { value: "24/7", label: "WiFi Access" },
  { value: "50+", label: "Study Seats" },
  { value: "15+", label: "Hours Daily" },
  { value: "100%", label: "Quiet Guarantee" },
];

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <img src={heroImage} alt="Kaivalya Library study area" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 container mx-auto px-4 text-center max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/30 rounded-full px-4 py-1.5 mb-6">
            <BookOpen className="h-4 w-4 text-gold" />
            <span className="text-sm font-medium text-gold">Kaivalya Library, Dewas</span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-4 leading-tight">
            Focus. Study. <span className="text-gradient-gold">Succeed.</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto font-body">
            Premium self-study library with WiFi, quiet environment, and professional ambiance — your dedicated study space in Dewas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/facilities">Explore Our Facilities <ArrowRight className="h-4 w-4" /></Link>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Highlights */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
              Why Choose <span className="text-gradient-gold">Kaivalya Library</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Everything you need for focused, productive study sessions.</p>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((h, i) => (
              <ScrollReveal key={h.title} delay={i * 0.1}>
                <div className="bg-card rounded-lg p-6 shadow-warm hover:shadow-warm-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                    <h.icon className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">{h.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{h.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 0.1}>
                <div className="text-center">
                  <div className="font-display text-3xl md:text-4xl font-bold text-gold mb-1">{s.value}</div>
                  <div className="text-sm text-primary-foreground/70">{s.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-section">
        <ScrollReveal className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Start Your Study Journey?
          </h2>
          <p className="text-muted-foreground mb-8">
            Visit us today or get in touch to learn about our membership plans and reserve your seat.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/pricing">View Pricing Plans</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default Index;
