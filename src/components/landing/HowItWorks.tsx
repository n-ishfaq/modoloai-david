import { MessageSquare, Sparkles, Heart, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Type Your Message",
    description: "Write your message as you normally would. It can be casual, short, or even a bit rough around the edges.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    number: "02",
    icon: Sparkles,
    title: "AI Enhancement",
    description: "Our AI analyzes your message, understands your intent, and suggests improvements while keeping your authentic voice.",
    color: "text-lavender",
    bgColor: "bg-lavender/10",
  },
  {
    number: "03",
    icon: Heart,
    title: "Connect Meaningfully",
    description: "Send your enhanced message and watch your relationships flourish with more engaging, thoughtful communication.",
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
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-secondary-foreground">
              Simple Process
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            How <span className="text-gradient">Loveable</span> Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Three simple steps to transform your communication and build stronger connections.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-primary via-lavender to-accent" />

            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative text-center"
              >
                {/* Step number with icon */}
                <div className="relative inline-block mb-6">
                  <div className={`w-24 h-24 rounded-2xl ${step.bgColor} flex items-center justify-center mx-auto shadow-soft`}>
                    <step.icon className={`w-10 h-10 ${step.color}`} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-card border-2 border-border flex items-center justify-center shadow-sm">
                    <span className="text-xs font-bold text-muted-foreground">{step.number}</span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>

                {/* Arrow (except last) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 -right-4 translate-x-1/2">
                    <ArrowRight className="w-6 h-6 text-muted-foreground/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Demo preview */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden bg-card border border-border shadow-soft p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="text-sm text-muted-foreground mb-2">Before</div>
                <div className="p-4 rounded-xl bg-secondary/50 border border-border">
                  <p className="text-foreground">"Thanks for the meeting"</p>
                </div>
              </div>
              <div>
                <div className="text-sm text-primary mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  After Loveable AI
                </div>
                <div className="p-4 rounded-xl bg-mint-light/30 border border-mint/30">
                  <p className="text-foreground">
                    "Thank you for taking the time to meet today! I really appreciated 
                    your insights and look forward to putting our ideas into action."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
