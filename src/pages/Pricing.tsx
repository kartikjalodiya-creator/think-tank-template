import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Star, Zap, Clock, Crown } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ScrollReveal from "@/components/ScrollReveal";

const plans = [
  {
    name: "Hourly",
    price: "₹50",
    period: "/hour",
    icon: Clock,
    description: "Perfect for quick study sessions",
    features: ["WiFi Access", "Any available seat", "Power outlets", "Washroom access"],
    popular: false,
  },
  {
    name: "Daily Pass",
    price: "₹200",
    period: "/day",
    icon: Zap,
    description: "Full day of focused studying",
    features: ["Full day access", "WiFi Access", "Reserved seat", "All amenities", "Water & refreshments"],
    popular: false,
  },
  {
    name: "Weekly",
    price: "₹800",
    period: "/week",
    icon: Star,
    description: "Ideal for exam preparation",
    features: ["7-day access", "WiFi Access", "Reserved seat", "All amenities", "Priority seating", "Water & refreshments"],
    popular: false,
  },
  {
    name: "Monthly",
    price: "₹2,500",
    period: "/month",
    icon: Crown,
    description: "Best value for serious learners",
    features: ["30-day access", "WiFi Access", "Dedicated seat", "All amenities", "Priority seating", "Locker access", "Water & refreshments"],
    popular: true,
  },
];

const faqs = [
  { q: "Can I upgrade my plan?", a: "Yes! You can upgrade from any plan to a higher one at any time. The remaining balance from your current plan will be adjusted." },
  { q: "Is there a registration fee?", a: "There is a nominal one-time registration fee. Please contact us for the current details." },
  { q: "Can I get a refund?", a: "Refunds are available within the first 3 days of a monthly membership. Hourly and daily passes are non-refundable." },
  { q: "Are there student discounts?", a: "Yes, we offer special rates for students with valid ID cards. Contact us to learn more." },
  { q: "Can I bring my own food?", a: "Light snacks are allowed, but we request that food with strong odors be consumed in the designated refreshment area." },
];

const Pricing = () => (
  <div>
    {/* Header */}
    <section className="relative py-28 bg-primary text-center overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-gold blur-3xl" />
        <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-gold-light blur-3xl" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold/20 text-gold text-sm font-semibold mb-5 tracking-wide uppercase">
            Pricing Plans
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
            Simple, <span className="text-gradient-gold">Transparent</span> Pricing
          </h1>
          <p className="text-primary-foreground/70 max-w-xl mx-auto text-lg">
            Choose a plan that fits your study schedule. No hidden fees, no surprises.
          </p>
        </ScrollReveal>
      </div>
    </section>

    {/* Pricing Cards */}
    <section className="py-20 -mt-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <ScrollReveal key={plan.name} delay={i * 0.1}>
              <div
                className={`relative rounded-2xl p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-warm-lg h-full flex flex-col ${
                  plan.popular
                    ? "bg-primary text-primary-foreground shadow-warm-lg ring-2 ring-gold scale-[1.02]"
                    : "bg-card shadow-warm border border-border"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-gold text-primary-foreground text-xs font-bold px-5 py-1.5 rounded-full shadow-lg">
                    ⭐ Most Popular
                  </div>
                )}

                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  plan.popular ? "bg-gold/20" : "bg-secondary"
                }`}>
                  <plan.icon className={`h-6 w-6 ${plan.popular ? "text-gold" : "text-gold"}`} />
                </div>

                <h3 className={`font-display text-xl font-bold mb-1 ${plan.popular ? "text-gold" : "text-foreground"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-4 ${plan.popular ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                  {plan.description}
                </p>

                <div className="mb-5 pb-5 border-b border-border/30">
                  <span className={`text-4xl font-bold font-display ${plan.popular ? "text-primary-foreground" : "text-foreground"}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm ml-1 ${plan.popular ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                    {plan.period}
                  </span>
                </div>

                <ul className="space-y-3 mb-7 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className={`flex items-start gap-2.5 text-sm ${plan.popular ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                        plan.popular ? "bg-gold/20" : "bg-gold/10"
                      }`}>
                        <Check className="h-3 w-3 text-gold" />
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>

                <Button variant={plan.popular ? "hero" : "outline"} className="w-full mt-auto" size="lg" asChild>
                  <Link to="/contact">
                    Get Started <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </Button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* All Plans Include */}
    <ScrollReveal>
      <section className="py-16 bg-gradient-section">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">
            Every Plan Includes
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {[
              { icon: "📶", label: "High-Speed WiFi" },
              { icon: "🔌", label: "Power Outlets" },
              { icon: "🚿", label: "Clean Washrooms" },
              { icon: "💧", label: "Drinking Water" },
              { icon: "❄️", label: "Climate Control" },
              { icon: "🤫", label: "Quiet Environment" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-2 bg-card rounded-xl p-5 shadow-warm">
                <span className="text-2xl">{item.icon}</span>
                <span className="text-sm font-medium text-foreground">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>

    {/* FAQ */}
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-2xl">
        <ScrollReveal>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-center mb-10">
            Everything you need to know about our plans
          </p>
        </ScrollReveal>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <AccordionItem value={`faq-${i}`} className="bg-card rounded-xl px-6 shadow-warm border-none">
                <AccordionTrigger className="font-display font-semibold text-foreground hover:text-gold hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            </ScrollReveal>
          ))}
        </Accordion>
      </div>
    </section>

    {/* CTA */}
    <ScrollReveal>
      <section className="relative py-20 bg-primary text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gold blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Still Have Questions?
          </h2>
          <p className="text-primary-foreground/60 mb-8 max-w-md mx-auto">
            We're happy to help you find the perfect plan for your study needs.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Contact Us <ArrowRight className="h-4 w-4 ml-1" /></Link>
          </Button>
        </div>
      </section>
    </ScrollReveal>
  </div>
);

export default Pricing;
