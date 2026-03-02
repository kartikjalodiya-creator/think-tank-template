import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, HelpCircle, ArrowRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const plans = [
  { name: "Hourly", price: "₹50", period: "/hour", features: ["WiFi Access", "Any available seat", "Power outlets", "Washroom access"], popular: false },
  { name: "Daily Pass", price: "₹200", period: "/day", features: ["Full day access", "WiFi Access", "Reserved seat", "All amenities", "Water & refreshments"], popular: false },
  { name: "Weekly", price: "₹800", period: "/week", features: ["7-day access", "WiFi Access", "Reserved seat", "All amenities", "Priority seating", "Water & refreshments"], popular: false },
  { name: "Monthly", price: "₹2,500", period: "/month", features: ["30-day access", "WiFi Access", "Dedicated seat", "All amenities", "Priority seating", "Locker access", "Water & refreshments"], popular: true },
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
    <section className="py-24 bg-primary text-center">
      <div className="container mx-auto px-4">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-3">Simple, Transparent Pricing</h1>
        <p className="text-primary-foreground/80 max-w-xl mx-auto">Choose a plan that fits your study schedule. All plans include access to WiFi and all amenities.</p>
      </div>
    </section>

    {/* Pricing Cards */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`relative rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 animate-fade-in-up ${
                plan.popular
                  ? "bg-primary text-primary-foreground shadow-warm-lg ring-2 ring-gold"
                  : "bg-card shadow-warm"
              }`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-gold text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <h3 className={`font-display text-lg font-semibold mb-2 ${plan.popular ? "text-gold" : "text-foreground"}`}>{plan.name}</h3>
              <div className="mb-4">
                <span className={`text-3xl font-bold ${plan.popular ? "text-primary-foreground" : "text-foreground"}`}>{plan.price}</span>
                <span className={`text-sm ${plan.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{plan.period}</span>
              </div>
              <ul className="space-y-2 mb-6">
                {plan.features.map((f) => (
                  <li key={f} className={`flex items-center gap-2 text-sm ${plan.popular ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                    <Check className={`h-4 w-4 shrink-0 ${plan.popular ? "text-gold" : "text-gold"}`} />
                    {f}
                  </li>
                ))}
              </ul>
              <Button variant={plan.popular ? "hero" : "outline"} className="w-full" asChild>
                <Link to="/contact">Get Started</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* All Plans Include */}
    <section className="py-16 bg-gradient-section">
      <div className="container mx-auto px-4 text-center max-w-2xl">
        <h2 className="font-display text-2xl font-bold text-foreground mb-6">All Plans Include</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {["High-Speed WiFi", "Power Outlets", "Clean Washrooms", "Drinking Water", "Climate Control", "Quiet Environment"].map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
              <Check className="h-4 w-4 text-gold shrink-0" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-lg px-6 shadow-warm border-none">
              <AccordionTrigger className="font-display font-semibold text-foreground hover:text-gold hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 bg-primary text-center">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-4">Have Questions About Pricing?</h2>
        <p className="text-primary-foreground/70 mb-6">We're happy to help you find the right plan.</p>
        <Button variant="hero" size="lg" asChild>
          <Link to="/contact">Contact Us <ArrowRight className="h-4 w-4" /></Link>
        </Button>
      </div>
    </section>
  </div>
);

export default Pricing;
