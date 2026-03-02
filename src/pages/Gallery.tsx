import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

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
      <section className="py-24 bg-primary text-center">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-3">Photo Gallery</h1>
          <p className="text-primary-foreground/80 max-w-xl mx-auto">Take a virtual tour of Kaivalya Library and see our facilities firsthand.</p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === cat ? "bg-gradient-gold text-primary-foreground shadow-warm" : "bg-card text-muted-foreground hover:text-foreground border border-border"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((img, i) => (
              <button
                key={`${img.src}-${i}`}
                onClick={() => setLightbox(i)}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden shadow-warm hover:shadow-warm-lg transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <img src={img.src} alt={img.caption} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/50 transition-colors duration-300 flex items-end p-4">
                  <span className="text-primary-foreground text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {img.caption}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-50 bg-primary/90 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <div className="max-w-4xl w-full animate-fade-in">
            <img src={filtered[lightbox].src} alt={filtered[lightbox].caption} className="w-full rounded-lg shadow-2xl" />
            <p className="text-center text-primary-foreground/80 mt-4">{filtered[lightbox].caption}</p>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="py-16 bg-gradient-section text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">Ready to Visit?</h2>
          <p className="text-muted-foreground mb-6">Come experience Kaivalya Library in person.</p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
