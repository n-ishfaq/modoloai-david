import { Search, Settings, Rocket, CalendarCheck, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Free AI Practice Audit",
    description: "We identify exactly where your practice is losing patients.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    number: "02",
    icon: Settings,
    title: "Custom AI Setup",
    description: "We deploy AI tailored to your services, staff, and schedule.",
    color: "text-lavender",
    bgColor: "bg-lavender/10",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Go Live in Days",
    description: "No disruption. No complex training.",
    color: "text-mint",
    bgColor: "bg-mint/10",
  },
  {
    number: "04",
    icon: CalendarCheck,
    title: "Watch Patients Book Automatically",
    description: "Calls answered. Appointments booked. Reviews generated.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary mb-6">
            <span className="text-sm font-medium text-secondary-foreground">
              How It Works
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            From Overworked to <span className="text-gradient">Fully Automated</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            4 Simple Steps to Transform Your Dental Practice
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-16 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-primary via-lavender via-mint to-accent" />

            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative text-center"
              >
                {/* Step number with icon */}
                <div className="relative inline-block mb-6">
                  <div className={`w-20 h-20 rounded-2xl ${step.bgColor} flex items-center justify-center mx-auto shadow-soft`}>
                    <step.icon className={`w-8 h-8 ${step.color}`} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-card border-2 border-border flex items-center justify-center shadow-sm">
                    <span className="text-xs font-bold text-muted-foreground">{step.number}</span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>

                {/* Arrow (except last) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 -right-3 translate-x-1/2">
                    <ArrowRight className="w-5 h-5 text-muted-foreground/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
