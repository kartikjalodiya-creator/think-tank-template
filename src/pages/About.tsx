import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, Award, Heart, Users, ArrowRight, Quote } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import galleryAmbiance from "@/assets/gallery-ambiance.jpg";
import galleryStudy from "@/assets/gallery-study-area.jpg";

const values = [
  { icon: BookOpen, title: "Quality Environment", desc: "We invest in the best furniture, lighting, and technology to create the ideal study atmosphere." },
  { icon: Award, title: "Professional Standards", desc: "Cleanliness, discipline, and professionalism are at the core of everything we do." },
  { icon: Heart, title: "Student-First Approach", desc: "Every decision we make is focused on helping our members study better and achieve more." },
  { icon: Users, title: "Growing Community", desc: "Join a supportive community of focused learners, students, and professionals." },
];

const testimonials = [
  { quote: "The best study environment in Dewas. I cleared my exam thanks to the focused atmosphere here.", name: "Rahul S.", role: "UPSC Aspirant" },
  { quote: "Clean, quiet, and well-maintained. The WiFi is fast and the staff is friendly. Highly recommend!", name: "Priya M.", role: "Medical Student" },
  { quote: "Affordable pricing and great facilities. Kaivalya Library is now my daily study routine.", name: "Amit K.", role: "CA Student" },
];

const milestones = [
  { year: "2022", event: "Kaivalya Library founded by Dharmendra Sir" },
  { year: "2023", event: "Expanded to 100+ seating capacity with upgraded facilities" },
  { year: "2024", event: "Became the most trusted study space in Dewas" },
];

const About = () => (
  <div>
    {/* Header */}
    <section className="relative py-28 bg-primary text-center overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-20 w-72 h-72 rounded-full bg-gold blur-3xl" />
        <div className="absolute bottom-10 left-20 w-56 h-56 rounded-full bg-gold-light blur-3xl" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold/20 text-gold text-sm font-semibold mb-5 tracking-wide uppercase">
            Our Story
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
            About <span className="text-gradient-gold">Kaivalya Library</span>
          </h1>
          <p className="text-primary-foreground/70 max-w-xl mx-auto text-lg">
            A vision to provide Dewas with a world-class self-study environment.
          </p>
        </ScrollReveal>
      </div>
    </section>

    {/* Owner Section */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-14 items-center max-w-5xl mx-auto">
          <ScrollReveal direction="left">
            <div className="relative">
              <img src={galleryAmbiance} alt="Library atmosphere" className="rounded-2xl shadow-warm-lg w-full" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-gold rounded-2xl flex items-center justify-center shadow-lg">
                <Quote className="h-10 w-10 text-primary-foreground" />
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <span className="inline-block px-3 py-1 rounded-full bg-gold/10 text-gold text-xs font-semibold mb-4 tracking-wide uppercase">
              Founder's Message
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-5">
              A Message from <span className="text-gradient-gold">Dharmendra Sir</span>
            </h2>
            <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
              <p className="text-lg italic border-l-4 border-gold pl-4">
                "I started Kaivalya Library with a simple belief — every student deserves access to a quiet, professional, and affordable study space."
              </p>
              <p>Growing up in Dewas, I saw the challenges students face when trying to focus at home or in noisy environments. Kaivalya Library is my commitment to providing the best study environment in Dewas.</p>
              <p>From high-speed WiFi and comfortable seating to clean facilities and a disciplined atmosphere — every detail is designed to help you succeed.</p>
            </div>
            <p className="mt-6 font-display font-semibold text-foreground text-lg">— Dharmendra Sir, Founder</p>
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* Story Timeline */}
    <ScrollReveal>
      <section className="py-16 bg-gradient-section">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
            Our <span className="text-gradient-gold">Journey</span>
          </h2>
          <div className="space-y-0">
            {milestones.map((m, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className="flex gap-6 items-start pb-8 last:pb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center text-primary-foreground font-bold text-sm shadow-lg shrink-0">
                      {m.year}
                    </div>
                    {i < milestones.length - 1 && <div className="w-0.5 h-full bg-gold/20 mt-2 min-h-[2rem]" />}
                  </div>
                  <div className="bg-card rounded-xl p-5 shadow-warm flex-1 mt-1">
                    <p className="text-foreground font-medium">{m.event}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-muted-foreground font-body leading-relaxed max-w-2xl mx-auto">
              The name <span className="font-semibold text-foreground">"Kaivalya"</span> — meaning liberation or enlightenment — reflects our core belief that education and focused study are the path to personal freedom and success.
            </p>
          </div>
        </div>
      </section>
    </ScrollReveal>

    {/* Values */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-3">
            What Makes Us <span className="text-gradient-gold">Different</span>
          </h2>
          <p className="text-muted-foreground text-center mb-10 max-w-lg mx-auto">
            We're not just a library — we're a community built around focus and success.
          </p>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {values.map((v, i) => (
            <ScrollReveal key={v.title} delay={i * 0.1}>
              <div className="text-center bg-card rounded-2xl p-7 shadow-warm h-full border border-border hover:-translate-y-1 transition-transform duration-300">
                <div className="w-14 h-14 rounded-2xl bg-gradient-gold flex items-center justify-center mx-auto mb-5 shadow-lg">
                  <v.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="font-display font-bold text-foreground mb-2 text-lg">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <ScrollReveal>
      <section className="relative py-20 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold blur-3xl" />
        </div>
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground text-center mb-3">
            What Our Members Say
          </h2>
          <p className="text-primary-foreground/50 text-center mb-12">
            Real stories from real students
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 0.1}>
                <div className="bg-primary-foreground/5 backdrop-blur-sm border border-gold/20 rounded-2xl p-7 h-full flex flex-col">
                  <Quote className="h-8 w-8 text-gold/40 mb-4" />
                  <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6 flex-1">
                    "{t.quote}"
                  </p>
                  <div className="border-t border-gold/10 pt-4">
                    <p className="text-gold font-display font-bold text-sm">{t.name}</p>
                    <p className="text-primary-foreground/40 text-xs">{t.role}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>

    {/* CTA */}
    <ScrollReveal>
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-card rounded-2xl p-10 shadow-warm-lg border border-border">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
              Come See for Yourself
            </h2>
            <p className="text-muted-foreground mb-8">
              Walk-ins are always welcome. Visit us anytime during operating hours and experience the Kaivalya difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Get Directions <ArrowRight className="h-4 w-4 ml-1" /></Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/pricing">View Plans</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  </div>
);

export default About;
