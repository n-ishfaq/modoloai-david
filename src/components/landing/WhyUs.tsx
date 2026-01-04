import { Check } from "lucide-react";

const reasons = [
  "Built specifically for dental & medical offices",
  "Healthcare-compliant AI systems",
  "No long-term contracts",
  "Results typically in 2–4 weeks",
  "Human-like AI — patients love it",
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12">
            Why Dental Practices Choose{" "}
            <span className="text-gradient">MODO AI Technology</span>
          </h2>

          <div className="grid sm:grid-cols-2 gap-4 text-left max-w-xl mx-auto">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
              >
                <div className="w-6 h-6 rounded-full bg-mint-light/30 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-mint" />
                </div>
                <span className="text-foreground font-medium">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
