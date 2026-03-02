import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, Award, Heart, Users } from "lucide-react";
import galleryAmbiance from "@/assets/gallery-ambiance.jpg";
import galleryStudy from "@/assets/gallery-study-area.jpg";

const values = [
  { icon: BookOpen, title: "Quality Environment", desc: "We invest in the best furniture, lighting, and technology to create the ideal study atmosphere." },
  { icon: Award, title: "Professional Standards", desc: "Cleanliness, discipline, and professionalism are at the core of everything we do." },
  { icon: Heart, title: "Student-First Approach", desc: "Every decision we make is focused on helping our members study better and achieve more." },
  { icon: Users, title: "Growing Community", desc: "Join a supportive community of focused learners, students, and professionals." },
];

const About = () => (
  <div>
    {/* Header */}
    <section className="py-24 bg-primary text-center">
      <div className="container mx-auto px-4">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-3">About Kaivalya Library</h1>
        <p className="text-primary-foreground/80 max-w-xl mx-auto">A vision to provide Dewas with a world-class self-study environment.</p>
      </div>
    </section>

    {/* Owner Section */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div>
            <img src={galleryAmbiance} alt="Library atmosphere" className="rounded-xl shadow-warm-lg w-full" />
          </div>
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              A Message from <span className="text-gradient-gold">Dharmendra Sir</span>
            </h2>
            <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
              <p>
                "I started Kaivalya Library with a simple belief — every student deserves access to a quiet, professional, and affordable study space. Growing up in Dewas, I saw the challenges students face when trying to focus at home or in noisy environments."
              </p>
              <p>
                "Kaivalya Library is my commitment to providing the best study environment in Dewas. From high-speed WiFi and comfortable seating to clean facilities and a disciplined atmosphere — every detail is designed to help you succeed."
              </p>
              <p>
                "Whether you're preparing for competitive exams, college studies, or professional certifications, Kaivalya Library is your home for focused learning."
              </p>
            </div>
            <p className="mt-6 font-display font-semibold text-foreground">— Dharmendra Sir, Founder</p>
          </div>
        </div>
      </div>
    </section>

    {/* Story */}
    <section className="py-16 bg-gradient-section">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">Our Story</h2>
        <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
          <p>Kaivalya Library was established with the mission to fill a genuine need in Dewas — a professional, distraction-free study space that students and professionals could rely on daily.</p>
          <p>Starting with a modest setup, the library has grown into a fully equipped facility with high-speed WiFi, ergonomic furniture, climate control, and all essential amenities. We continue to invest in improvements based on feedback from our members.</p>
          <p>The name "Kaivalya" — meaning liberation or enlightenment — reflects our core belief that education and focused study are the path to personal freedom and success.</p>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
          What Makes Us <span className="text-gradient-gold">Different</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {values.map((v, i) => (
            <div key={v.title} className="text-center bg-card rounded-lg p-6 shadow-warm animate-fade-in-up" style={{ animationDelay: `${i * 100}ms` }}>
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                <v.icon className="h-6 w-6 text-gold" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground text-center mb-10">What Our Members Say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { quote: "The best study environment in Dewas. I cleared my exam thanks to the focused atmosphere here.", name: "Rahul S." },
            { quote: "Clean, quiet, and well-maintained. The WiFi is fast and the staff is friendly. Highly recommend!", name: "Priya M." },
            { quote: "Affordable pricing and great facilities. Kaivalya Library is now my daily study routine.", name: "Amit K." },
          ].map((t) => (
            <div key={t.name} className="bg-primary-foreground/5 border border-gold/20 rounded-lg p-6">
              <p className="text-primary-foreground/80 text-sm italic mb-4">"{t.quote}"</p>
              <p className="text-gold font-semibold text-sm">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 text-center">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-2xl font-bold text-foreground mb-4">Come See for Yourself</h2>
        <p className="text-muted-foreground mb-6">Walk-ins are always welcome. Visit us anytime during operating hours.</p>
        <Button variant="hero" size="lg" asChild>
          <Link to="/contact">Get Directions</Link>
        </Button>
      </div>
    </section>
  </div>
);

export default About;
