import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";

import galleryStudy from "@/assets/gallery-study-area.jpg";
import galleryTech from "@/assets/gallery-tech.jpg";
import galleryEntrance from "@/assets/gallery-entrance.jpg";
import galleryQuiet from "@/assets/gallery-quiet-zone.jpg";
import gallerySeating from "@/assets/gallery-seating.jpg";
import galleryAmenities from "@/assets/gallery-amenities.jpg";
import galleryAmbiance from "@/assets/gallery-ambiance.jpg";
import heroImage from "@/assets/hero-library.jpg";

const categories = ["All", "Study Areas", "Facilities", "Ambiance", "Entrance"];

const images = [
  { src: galleryStudy, caption: "Modern study area with comfortable seating", category: "Study Areas" },
  { src: gallerySeating, caption: "Individual desk arrangements with reading lamps", category: "Study Areas" },
  { src: heroImage, caption: "Overview of the main study hall", category: "Study Areas" },
  { src: galleryTech, caption: "WiFi and charging infrastructure", category: "Facilities" },
  { src: galleryAmenities, caption: "Clean washroom and water facilities", category: "Facilities" },
  { src: galleryQuiet, caption: "Cozy quiet reading zone", category: "Ambiance" },
  { src: galleryAmbiance, caption: "Warm ambient evening atmosphere", category: "Ambiance" },
  { src: galleryEntrance, caption: "Welcoming reception area", category: "Entrance" },
];

const Gallery = () => {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = filter === "All" ? images : images.filter((img) => img.category === filter);

  return (
    <div>
      {/* Header */}
      <section className="relative py-32 bg-primary text-center overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]">
          <div className="absolute top-1/2 left-1/4 w-72 h-72 rounded-full bg-gold blur-3xl" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal>
            <p className="text-gold/70 text-sm font-semibold tracking-widest uppercase mb-4">Gallery</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
              Photo <span className="text-gradient-gold italic">Gallery</span>
            </h1>
            <p className="text-primary-foreground/50 max-w-lg mx-auto leading-relaxed font-light">
              Take a virtual tour of Kaivalya Library and see our facilities firsthand.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filters & Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="flex flex-wrap gap-2 justify-center mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    filter === cat
                      ? "bg-gradient-gold text-primary-foreground shadow-warm"
                      : "bg-card text-muted-foreground hover:text-foreground border border-border/50 hover:border-border"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((img, i) => (
              <ScrollReveal key={`${img.src}-${i}`} delay={i * 0.06}>
                <button
                  onClick={() => setLightbox(i)}
                  className="group relative aspect-[4/3] rounded-xl overflow-hidden shadow-warm hover:shadow-warm-lg transition-all duration-500 w-full"
                >
                  <img src={img.src} alt={img.caption} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/50 transition-colors duration-500 flex items-end p-5">
                    <span className="text-primary-foreground text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {img.caption}
                    </span>
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
            <img src={filtered[lightbox].src} alt={filtered[lightbox].caption} className="w-full rounded-xl shadow-2xl" />
            <p className="text-center text-primary-foreground/70 mt-5 font-medium">{filtered[lightbox].caption}</p>
          </div>
        </div>
      )}

      {/* CTA */}
      <ScrollReveal>
        <section className="py-20 bg-gradient-section text-center">
          <div className="container mx-auto px-6">
            <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">Visit Us</p>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-5">Ready to Visit?</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">Come experience Kaivalya Library in person.</p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
};

export default Gallery;
