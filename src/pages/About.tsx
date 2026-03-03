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
    <section className="relative py-32 bg-primary text-center overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute top-10 right-20 w-80 h-80 rounded-full bg-gold blur-3xl" />
        <div className="absolute bottom-10 left-20 w-64 h-64 rounded-full bg-gold-light blur-3xl" />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <p className="text-gold/70 text-sm font-semibold tracking-widest uppercase mb-4">Our Story</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-5">
            About <span className="text-gradient-gold italic">Kaivalya Library</span>
          </h1>
          <p className="text-primary-foreground/50 max-w-lg mx-auto text-lg leading-relaxed font-light">
            A vision to provide Dewas with a world-class self-study environment.
          </p>
        </ScrollReveal>
      </div>
    </section>

    {/* Owner Section */}
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
          <ScrollReveal direction="left">
            <div className="relative">
              <img src={galleryAmbiance} alt="Library atmosphere" className="rounded-2xl shadow-warm-lg w-full" />
              <div className="absolute -bottom-5 -right-5 w-20 h-20 bg-gradient-gold rounded-2xl flex items-center justify-center shadow-lg">
                <Quote className="h-8 w-8 text-primary-foreground" />
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-4">Founder's Message</p>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
              A Message from <span className="text-gradient-gold italic">Dharmendra Sir</span>
            </h2>
            <div className="space-y-5 text-muted-foreground font-body leading-relaxed">
              <p className="text-lg italic border-l-2 border-gold/40 pl-5 text-foreground/70">
                "I started Kaivalya Library with a simple belief — every student deserves access to a quiet, professional, and affordable study space."
              </p>
              <p>Growing up in Dewas, I saw the challenges students face when trying to focus at home or in noisy environments. Kaivalya Library is my commitment to providing the best study environment in Dewas.</p>
              <p>From high-speed WiFi and comfortable seating to clean facilities and a disciplined atmosphere — every detail is designed to help you succeed.</p>
            </div>
            <p className="mt-8 font-display font-semibold text-foreground text-lg tracking-tight">— Dharmendra Sir, Founder</p>
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* Story Timeline */}
    <ScrollReveal>
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-12">
            <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">Milestones</p>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              Our <span className="text-gradient-gold italic">Journey</span>
            </h2>
          </div>
          <div className="space-y-0">
            {milestones.map((m, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className="flex gap-6 items-start pb-8 last:pb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center text-primary-foreground font-bold text-sm shadow-lg shrink-0">
                      {m.year}
                    </div>
                    {i < milestones.length - 1 && <div className="w-px h-full bg-gold/15 mt-2 min-h-[2rem]" />}
                  </div>
                  <div className="bg-card rounded-xl p-6 shadow-warm flex-1 mt-1 border border-border/50">
                    <p className="text-foreground font-medium">{m.event}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground font-body leading-relaxed max-w-2xl mx-auto">
              The name <span className="font-semibold text-foreground">"Kaivalya"</span> — meaning liberation or enlightenment — reflects our core belief that education and focused study are the path to personal freedom and success.
            </p>
          </div>
        </div>
      </section>
    </ScrollReveal>

    {/* Values */}
    <section className="py-24">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">Our Values</p>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              What Makes Us <span className="text-gradient-gold italic">Different</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-lg mx-auto leading-relaxed">
              We're not just a library — we're a community built around focus and success.
            </p>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {values.map((v, i) => (
            <ScrollReveal key={v.title} delay={i * 0.1}>
              <div className="text-center bg-card rounded-2xl p-8 shadow-warm h-full border border-border/50 hover:-translate-y-1 transition-all duration-500 group">
                <div className="w-14 h-14 rounded-2xl bg-gradient-gold flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-105 transition-transform duration-300">
                  <v.icon className="h-6 w-6 text-primary-foreground" />
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
      <section className="relative py-24 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold blur-3xl" />
        </div>
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <div className="text-center mb-14">
            <p className="text-gold/60 text-sm font-semibold tracking-widest uppercase mb-3">Testimonials</p>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground">
              What Our Members Say
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 0.1}>
                <div className="bg-primary-foreground/[0.04] backdrop-blur-sm border border-gold/10 rounded-2xl p-8 h-full flex flex-col">
                  <Quote className="h-7 w-7 text-gold/25 mb-5" />
                  <p className="text-primary-foreground/70 text-sm leading-relaxed mb-7 flex-1 italic">
                    "{t.quote}"
                  </p>
                  <div className="border-t border-gold/8 pt-5">
                    <p className="text-gold font-display font-bold text-sm">{t.name}</p>
                    <p className="text-primary-foreground/35 text-xs mt-0.5">{t.role}</p>
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
      <section className="py-24 text-center">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto bg-card rounded-2xl p-12 shadow-warm-lg border border-border/50">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Come See for Yourself
            </h2>
            <p className="text-muted-foreground mb-10 leading-relaxed">
              Walk-ins are always welcome. Visit us anytime during operating hours and experience the Kaivalya difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
