import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Wifi, Monitor, Droplets, Car, Clock, Users, Armchair, ShieldCheck, Lightbulb, Plug } from "lucide-react";
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
      <section className="relative py-24 overflow-hidden">
        <img src={heroImage} alt="Facilities" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-3">Our Facilities</h1>
          <p className="text-primary-foreground/80 max-w-xl mx-auto">
            Everything you need for productive, comfortable study sessions — all under one roof.
          </p>
        </div>
      </section>

      {/* Facility Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {facilities.map((cat, ci) => (
            <ScrollReveal key={cat.category} delay={ci * 0.1} className="mb-16 last:mb-0">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
                <span className="w-8 h-1 bg-gradient-gold rounded-full" />
                {cat.category}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {cat.items.map((item, i) => (
                  <div
                    key={item.label}
                    className="bg-card rounded-lg p-6 shadow-warm hover:shadow-warm-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center mb-3">
                      <item.icon className="h-5 w-5 text-gold" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-1">{item.label}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-gradient-section">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
              Take a <span className="text-gradient-gold">Look Inside</span>
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((img, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <button
                  onClick={() => setLightbox(i)}
                  className="group relative aspect-square rounded-lg overflow-hidden shadow-warm hover:shadow-warm-lg transition-all duration-300 w-full"
                >
                  <img src={img.src} alt={img.caption} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors duration-300 flex items-end">
                    <span className="text-primary-foreground text-xs p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{img.caption}</span>
                  </div>
                </button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-50 bg-primary/90 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <div className="max-w-4xl w-full animate-fade-in">
            <img src={galleryImages[lightbox].src} alt={galleryImages[lightbox].caption} className="w-full rounded-lg shadow-2xl" />
            <p className="text-center text-primary-foreground/80 mt-4">{galleryImages[lightbox].caption}</p>
          </div>
        </div>
      )}

      {/* Why Choose */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <ScrollReveal>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
              Why Choose <span className="text-gradient-gold">Kaivalya Library</span>
            </h2>
            <div className="prose prose-lg mx-auto text-muted-foreground space-y-4 font-body">
              <p>At Kaivalya Library, we believe that the right environment is half the battle won. Our professionally maintained study space is designed to help students and professionals achieve their best — free from distractions and full of focus.</p>
              <p>Unlike crowded cafes or noisy public libraries, every aspect of our space — from ergonomic seating to warm ambient lighting — is curated for deep work and sustained concentration.</p>
              <p>Conveniently located on AB Road in the heart of Dewas, we offer affordable membership plans without compromising on quality. Join a growing community of focused learners today.</p>
            </div>
            <div className="text-center mt-10">
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
