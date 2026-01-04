import { 
  Phone, 
  Calendar, 
  Bell, 
  Star, 
  Search, 
  TrendingUp 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Phone,
    title: "AI Voice Receptionist",
    subtitle: "Under 60 Seconds",
    highlight: "You Never Miss a New Patient Call",
    description: "Patients expect instant answers. Our AI receptionist answers every call, handles FAQs, qualifies patients, and books appointments — even after hours.",
    bullets: ["24/7 call answering", "Insurance & service questions", "Appointment booking & rescheduling", "Overflow & after-hours coverage"],
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Calendar,
    title: "AI Calendar Management",
    subtitle: "Always On",
    highlight: "Your Calendar Runs Itself",
    description: "No more double bookings or empty chair time. AI manages your schedule in real time.",
    bullets: ["Smart scheduling rules", "Cancellations & reschedules handled automatically", "Chair utilization optimization"],
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Bell,
    title: "Automated Appointment Follow-Ups",
    subtitle: "91% Higher Show-Up Rate",
    highlight: "Fewer No-Shows, More Revenue",
    description: "Patients forget. AI doesn't. Automated SMS and email reminders keep your schedule full.",
    bullets: ["Confirmation texts", "Pre-visit instructions", "Post-visit follow-ups", "Recall & reactivation campaigns"],
    color: "text-lavender",
    bgColor: "bg-lavender/10",
  },
  {
    icon: Star,
    title: "Review & Reputation Management",
    subtitle: "4.8+ Star Practices Win More Patients",
    highlight: "Build Instant Trust Online",
    description: "Turn happy patients into 5-star reviews automatically.",
    bullets: ["Google review requests", "Smart timing after visits", "Reputation monitoring & alerts"],
    color: "text-mint",
    bgColor: "bg-mint/10",
  },
  {
    icon: Search,
    title: "SEO / GEO / AEO for Dental Practices",
    subtitle: "Be Found Where Patients Search",
    highlight: "Dominate Local Search Results",
    description: "AI-optimized content that ranks your practice on Google, Maps, and voice search.",
    bullets: ["Google Business Profile optimization", "Local SEO & map ranking", "AI-driven content & authority building"],
    color: "text-coral",
    bgColor: "bg-coral/10",
  },
  {
    icon: TrendingUp,
    title: "AI Advertising Management",
    subtitle: "Lower Costs. Better Patients.",
    highlight: "Ads That Actually Convert",
    description: "We run and optimize ads that attract high-intent dental patients.",
    bullets: ["Google Ads", "Facebook & Instagram Ads", "Local TV Advertising", "Continuous AI optimization"],
    color: "text-foreground",
    bgColor: "bg-secondary",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary mb-6">
            <span className="text-sm font-medium text-secondary-foreground">
              AI-Powered Dental Practice Solutions
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            The 6 Revenue Leaks We{" "}
            <span className="text-gradient">Eliminate With AI</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Every missed call, slow response, and manual task costs your practice real money. 
            Our AI systems run 24/7 so your schedule stays full — automatically.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="group border-border hover:border-primary/30 transition-all duration-300 hover:shadow-soft bg-card"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <CardContent className="p-6 lg:p-8">
                <div className={`w-12 h-12 rounded-xl ${feature.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <div className="text-xs font-medium text-primary mb-1">{feature.subtitle}</div>
                <h3 className="text-lg font-bold mb-2 text-card-foreground">
                  {feature.highlight}
                </h3>
                <p className="text-sm font-medium text-muted-foreground mb-3">
                  {feature.title}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {feature.description}
                </p>
                <ul className="space-y-1">
                  {feature.bullets.map((bullet, i) => (
                    <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Marketing Automation Section */}
        <div className="mt-16 max-w-3xl mx-auto">
          <Card className="border-border bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">
                Marketing Automation for Dental Practices
              </h3>
              <p className="text-lg font-medium text-primary mb-6">Done-For-You Patient Growth</p>
              <div className="grid sm:grid-cols-2 gap-4 text-left max-w-lg mx-auto mb-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="text-primary">•</span>
                  Google Business Profile management
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="text-primary">•</span>
                  Automated social media posting
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="text-primary">•</span>
                  Review & referral campaigns
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="text-primary">•</span>
                  AI-driven patient reactivation
                </div>
              </div>
              <p className="text-muted-foreground font-medium">
                Your marketing runs daily — without staff effort.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Features;
