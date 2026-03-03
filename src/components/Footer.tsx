import { Link } from "react-router-dom";
import { BookOpen, MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container mx-auto px-6 pt-16 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        {/* Brand */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-2.5 mb-5">
            <div className="w-9 h-9 rounded-lg bg-gold/10 flex items-center justify-center">
              <BookOpen className="h-5 w-5 text-gold" />
            </div>
            <span className="font-display text-xl font-bold tracking-tight">
              Kaivalya <span className="text-gold">Library</span>
            </span>
          </div>
          <p className="text-primary-foreground/50 text-sm leading-relaxed">
            Your dedicated study space in Dewas. Premium self-study library with WiFi, quiet environment, and professional ambiance.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display font-semibold text-sm tracking-widest uppercase text-gold/80 mb-5">Quick Links</h4>
          <div className="space-y-2.5">
            {["Facilities", "Pricing", "About", "Gallery", "Contact"].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="block text-sm text-primary-foreground/50 hover:text-gold transition-colors duration-300"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display font-semibold text-sm tracking-widest uppercase text-gold/80 mb-5">Contact</h4>
          <div className="space-y-3.5 text-sm text-primary-foreground/50">
            <div className="flex items-start gap-3">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-gold/50" />
              <span>141, Bhopal Square, AB Road, Dewas, MP, India</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-4 w-4 shrink-0 text-gold/50" />
              <span>Contact us for details</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-4 w-4 shrink-0 text-gold/50" />
              <span>info@kaivalyalibrary.com</span>
            </div>
          </div>
        </div>

        {/* Hours */}
        <div>
          <h4 className="font-display font-semibold text-sm tracking-widest uppercase text-gold/80 mb-5">Hours</h4>
          <div className="space-y-2.5 text-sm text-primary-foreground/50">
            <div className="flex items-center gap-3">
              <Clock className="h-4 w-4 shrink-0 text-gold/50" />
              <span>Mon–Fri: 7 AM – 10 PM</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="h-4 w-4 shrink-0 text-gold/50" />
              <span>Sat–Sun: 8 AM – 8 PM</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-primary-foreground/30">
          © {new Date().getFullYear()} Kaivalya Library by Dharmendra Sir. All rights reserved.
        </p>
        <p className="text-xs text-primary-foreground/20">Crafted with care in Dewas</p>
      </div>
    </div>
  </footer>
);

export default Footer;
