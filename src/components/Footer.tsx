import { Link } from "react-router-dom";
import { BookOpen, MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="h-6 w-6 text-gold" />
            <span className="font-display text-xl font-bold">
              Kaivalya <span className="text-gold">Library</span>
            </span>
          </div>
          <p className="text-primary-foreground/70 text-sm leading-relaxed">
            Your dedicated study space in Dewas. Premium self-study library with WiFi, quiet environment, and professional ambiance.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display font-semibold text-gold mb-4">Quick Links</h4>
          <div className="space-y-2">
            {["Facilities", "Pricing", "About", "Gallery", "Contact"].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="block text-sm text-primary-foreground/70 hover:text-gold transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display font-semibold text-gold mb-4">Contact</h4>
          <div className="space-y-3 text-sm text-primary-foreground/70">
            <div className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-gold/70" />
              <span>141, Bhopal Square, AB Road, Dewas, MP, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-gold/70" />
              <span>Contact us for details</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-gold/70" />
              <span>info@kaivalyalibrary.com</span>
            </div>
          </div>
        </div>

        {/* Hours */}
        <div>
          <h4 className="font-display font-semibold text-gold mb-4">Hours</h4>
          <div className="space-y-2 text-sm text-primary-foreground/70">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 shrink-0 text-gold/70" />
              <span>Mon–Fri: 7 AM – 10 PM</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 shrink-0 text-gold/70" />
              <span>Sat–Sun: 8 AM – 8 PM</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gold/20 mt-10 pt-6 text-center text-xs text-primary-foreground/50">
        © {new Date().getFullYear()} Kaivalya Library by Dharmendra Sir. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
