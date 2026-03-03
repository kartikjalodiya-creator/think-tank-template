import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Wifi, BookOpen, MapPin, Clock, Volume2, ArrowRight } from "lucide-react";
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
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <img src={heroImage} alt="Kaivalya Library study area" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero" />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 container mx-auto px-6 text-center max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-5 py-2 mb-8"
          >
            <BookOpen className="h-4 w-4 text-gold" />
            <span className="text-sm font-medium text-gold tracking-wide">Kaivalya Library, Dewas</span>
          </motion.div>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-5 leading-[1.1]">
            Focus. Study.{" "}
            <span className="text-gradient-gold italic">Succeed.</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/65 mb-10 max-w-2xl mx-auto font-body font-light leading-relaxed">
            Premium self-study library with WiFi, quiet environment, and professional ambiance — your dedicated study space in Dewas.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="hero" size="lg" asChild>
              <Link to="/facilities">Explore Our Facilities <ArrowRight className="h-4 w-4" /></Link>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/contact">Contact Us Today</Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-primary-foreground/30 text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border border-primary-foreground/20 flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-1.5 rounded-full bg-gold/60" />
          </motion.div>
        </motion.div>
      </section>

      {/* Highlights */}
      <section className="py-24 bg-gradient-section">
        <div className="container mx-auto px-6">
          <ScrollReveal className="text-center mb-16">
            <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">Why Choose Us</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose <span className="text-gradient-gold italic">Kaivalya Library</span>
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto leading-relaxed">
              Everything you need for focused, productive study sessions.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((h, i) => (
              <ScrollReveal key={h.title} delay={i * 0.1}>
                <div className="bg-card rounded-xl p-7 shadow-warm hover:shadow-warm-lg transition-all duration-500 hover:-translate-y-1 border border-border/50 group">
                  <div className="w-12 h-12 rounded-xl bg-gold/8 flex items-center justify-center mb-5 group-hover:bg-gold/15 transition-colors duration-300">
                    <h.icon className="h-5 w-5 text-gold" />
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
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-gold-light blur-3xl" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {stats.map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 0.1}>
                <div className="text-center">
                  <div className="font-display text-4xl md:text-5xl font-bold text-gold mb-2 tracking-tight">{s.value}</div>
                  <div className="text-sm text-primary-foreground/50 tracking-wide uppercase font-medium">{s.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-gradient-section">
        <ScrollReveal className="container mx-auto px-6 text-center max-w-2xl">
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">Get Started</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-5">
            Ready to Start Your Study Journey?
          </h2>
          <p className="text-muted-foreground mb-10 leading-relaxed">
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
