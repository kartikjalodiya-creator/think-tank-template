import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Wifi, Monitor, Droplets, Car, Clock, Armchair, ShieldCheck, Lightbulb, Plug, Cctv } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import galleryStudy from "@/assets/gallery-study-area.jpg";
import galleryTech from "@/assets/gallery-tech.jpg";
import galleryEntrance from "@/assets/gallery-entrance.jpg";
import galleryQuiet from "@/assets/gallery-quiet-zone.jpg";
import gallerySeating from "@/assets/gallery-seating.jpg";
import galleryAmenities from "@/assets/gallery-amenities.jpg";
import galleryAmbiance from "@/assets/gallery-ambiance.jpg";
import heroImage from "@/assets/hero-library.jpg";
import { useState } from "react";

const facilities = [
  {
    category: "Study Environment",
    items: [
      { icon: Armchair, label: "Comfortable Seating", desc: "Ergonomic chairs and spacious desks for long study sessions" },
      { icon: ShieldCheck, label: "Quiet Zones", desc: "Strict noise policy ensures a distraction-free environment" },
      { icon: Lightbulb, label: "Professional Ambiance", desc: "Well-lit spaces with warm, focused lighting" },
      { icon: Clock, label: "Climate Control", desc: "Air-conditioned for comfort in all seasons" },
      { icon: Cctv, label: "CCTV Surveillance", desc: "Round-the-clock CCTV monitoring for safety and security" },
    ],
  },
  {
    category: "Technology",
    items: [
      { icon: Wifi, label: "High-Speed WiFi", desc: "Fast, reliable internet at every desk" },
      { icon: Plug, label: "Power Outlets", desc: "Charging points at every seat for your devices" },
      { icon: Monitor, label: "Charging Stations", desc: "Dedicated device charging areas" },
    ],
  },
  {
    category: "Amenities",
    items: [
      { icon: Droplets, label: "Clean Washrooms", desc: "Well-maintained, hygienic washroom facilities" },
      { icon: Droplets, label: "Water Cooler", desc: "RO purified drinking water available" },
      { icon: Car, label: "Parking", desc: "Convenient parking space for visitors" },
    ],
  },
];

const galleryImages = [
  { src: galleryStudy, caption: "Spacious study area with modern furniture" },
  { src: gallerySeating, caption: "Individual desk arrangements with reading lamps" },
  { src: galleryTech, caption: "WiFi and technology infrastructure" },
  { src: galleryQuiet, caption: "Cozy quiet reading zone" },
  { src: galleryEntrance, caption: "Welcoming reception and entrance" },
  { src: galleryAmenities, caption: "Clean washroom and water facilities" },
  { src: galleryAmbiance, caption: "Warm ambient atmosphere" },
];

const Facilities = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <div>
      {/* Header */}
      <section className="relative py-28 overflow-hidden">
        <img src={heroImage} alt="Facilities" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative z-10 container mx-auto px-6 text-center">
          <ScrollReveal>
            <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-4">What We Offer</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">Our Facilities</h1>
            <p className="text-primary-foreground/60 max-w-lg mx-auto leading-relaxed">
              Everything you need for productive, comfortable study sessions — all under one roof.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Facility Categories */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          {facilities.map((cat, ci) => (
            <ScrollReveal key={cat.category} delay={ci * 0.1} className="mb-20 last:mb-0">
              <div className="flex items-center gap-4 mb-10">
                <span className="w-10 h-[2px] bg-gradient-gold rounded-full" />
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                  {cat.category}
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {cat.items.map((item) => (
                  <div
                    key={item.label}
                    className="bg-card rounded-xl p-7 shadow-warm hover:shadow-warm-lg transition-all duration-500 hover:-translate-y-1 border border-border/50 group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-gold/8 flex items-center justify-center mb-4 group-hover:bg-gold/15 transition-colors duration-300">
                      <item.icon className="h-5 w-5 text-gold" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2">{item.label}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">Virtual Tour</p>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                Take a <span className="text-gradient-gold italic">Look Inside</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((img, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <button
                  onClick={() => setLightbox(i)}
                  className="group relative aspect-square rounded-xl overflow-hidden shadow-warm hover:shadow-warm-lg transition-all duration-500 w-full"
                >
                  <img src={img.src} alt={img.caption} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/50 transition-colors duration-500 flex items-end">
                    <span className="text-primary-foreground text-xs p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 font-medium">{img.caption}</span>
                  </div>
                </button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-50 bg-primary/92 backdrop-blur-sm flex items-center justify-center p-6" onClick={() => setLightbox(null)}>
          <div className="max-w-4xl w-full animate-fade-in">
            <img src={galleryImages[lightbox].src} alt={galleryImages[lightbox].caption} className="w-full rounded-xl shadow-2xl" />
            <p className="text-center text-primary-foreground/70 mt-5 font-medium">{galleryImages[lightbox].caption}</p>
          </div>
        </div>
      )}

      {/* Why Choose */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-3xl">
          <ScrollReveal>
            <div className="text-center mb-10">
              <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">Our Promise</p>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                Why Choose <span className="text-gradient-gold italic">Kaivalya Library</span>
              </h2>
            </div>
            <div className="space-y-5 text-muted-foreground font-body leading-relaxed text-center">
              <p>At Kaivalya Library, we believe that the right environment is half the battle won. Our professionally maintained study space is designed to help students and professionals achieve their best — free from distractions and full of focus.</p>
              <p>Unlike crowded cafes or noisy public libraries, every aspect of our space — from ergonomic seating to warm ambient lighting — is curated for deep work and sustained concentration.</p>
              <p>Conveniently located on AB Road in the heart of Dewas, we offer affordable membership plans without compromising on quality. Join a growing community of focused learners today.</p>
            </div>
            <div className="text-center mt-12">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Visit Us Today</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Facilities;
