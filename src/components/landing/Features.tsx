import { 
  Phone, 
  ClipboardList, 
  Megaphone,
  Star, 
  Search, 
  TrendingUp,
  Tv,
  Instagram,
  Share2,
  Award,
  FileText,
  Calendar,
  MessageSquare,
  Info,
  HelpCircle,
  
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const advertisingServices = [
  {
    icon: Tv,
    title: "TV Advertising",
    description: "Local TV campaigns connected to AI call handling and booking.",
    bullets: ["Local TV campaign setup", "Appointment booking from ads", "Instant engagement with prospects"],
  },
  {
    icon: TrendingUp,
    title: "Google Ads",
    description: "High-intent search traffic with instant AI response.",
    bullets: ["High-intent keyword targeting", "Landing page optimization", "Call answering and appointment booking"],
  },
  {
    icon: Instagram,
    title: "Facebook / Instagram Ads",
    description: "Automated lead qualification and follow-ups.",
    bullets: ["Local audience targeting", "Offer & lead campaigns", "Automated Follow-up & Message Handling"],
  },
];

const marketingServices = [
  {
    icon: Award,
    title: "Practice Brand",
    description: "Build authority and trust in your local market.",
    bullets: ["Brand positioning", "Reputation monitoring", "Creative Assets Production"],
  },
  {
    icon: Share2,
    title: "Social Media Exposure",
    description: "Consistent visibility on Facebook & Instagram.",
    bullets: ["Scheduled content", "AI-generated captions", "Engagement tracking"],
  },
  {
    icon: Search,
    title: "Search Optimization (SEO / AEO / GEO)",
    description: "Get found first on Google, Maps, and web search.",
    bullets: ["Local SEO optimization", "Google Maps ranking", "Voice with Web"],
  },
];

const receptionistServices = [
  {
    icon: Info,
    title: "Provides Information",
    bullets: ["Services & pricing details", "Insurance & coverage guidance", "Office hours & locations", "Treatment / case process explanation"],
  },
  {
    icon: HelpCircle,
    title: "Answers Questions",
    bullets: ["Common patient & client inquiries", "Appointment availability", "Preparation instructions", "Follow-up questions"],
  },
];

const assistantServices = [
  {
    icon: FileText,
    title: "Fills Out Forms",
    bullets: ["Intake forms", "Patient & client profiles", "CRM updates", "Case documentation"],
  },
  {
    icon: Calendar,
    title: "Books Appointment",
    bullets: ["Real-time scheduling", "Calendar syncing", "Reschedules & cancellations", "Confirmation messages"],
  },
  {
    icon: MessageSquare,
    title: "Conducts Follow-Ups",
    bullets: ["SMS & email reminders", "No-show recovery", "Lead nurturing", "Post-visit check-ins"],
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary mb-4">
            <span className="text-sm font-medium text-muted-foreground">
              MODOLO AI DRIVEN SOLUTIONS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Demand Generation & Office Automations
          </h2>
          <p className="text-lg text-muted-foreground">
            Specialized AI for medical, dental, and law offices — more leads, smarter follow-ups, higher bookings, and less staff effort, fully compliant with industry rules.
          </p>
        </div>

        {/* DEMAND GENERATION */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              <span className="text-gradient">DEMAND GENERATION</span>
            </h3>
          </div>

          {/* Advertising */}
          <div className="mb-12">
            <h4 className="text-xl font-bold text-center mb-8 text-foreground">Advertising</h4>
            <div className="grid md:grid-cols-3 gap-6">
              {advertisingServices.map((service) => (
                <Card key={service.title} className="border-border hover:border-accent/30 transition-all duration-300 hover:shadow-soft bg-card">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-accent" />
                    </div>
                    <h5 className="text-lg font-bold mb-2 text-card-foreground">{service.title}</h5>
                    <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                    <ul className="space-y-1">
                      {service.bullets.map((bullet, i) => (
                        <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Marketing */}
          <div>
            <h4 className="text-xl font-bold text-center mb-8 text-foreground">Marketing</h4>
            <div className="grid md:grid-cols-3 gap-6">
              {marketingServices.map((service) => (
                <Card key={service.title} className="border-border hover:border-primary/30 transition-all duration-300 hover:shadow-soft bg-card">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h5 className="text-lg font-bold mb-2 text-card-foreground">{service.title}</h5>
                    <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                    <ul className="space-y-1">
                      {service.bullets.map((bullet, i) => (
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
          </div>
        </div>

        {/* OFFICE AUTOMATION */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              <span className="text-gradient">OFFICE AUTOMATION</span>
            </h3>
          </div>

          {/* Receptionist */}
          <div className="mb-12">
            <h4 className="text-xl font-bold text-card-foreground text-center mb-8">Receptionist</h4>
            <div className="grid md:grid-cols-3 gap-6">
              {receptionistServices.map((service) => (
                <Card key={service.title} className="border-border hover:border-primary/30 transition-all duration-300 hover:shadow-soft bg-card">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <service.icon className="w-5 h-5 text-primary" />
                      <h5 className="font-semibold text-card-foreground">{service.title}</h5>
                    </div>
                    <ul className="space-y-1">
                      {service.bullets.map((bullet, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Executive Assistant */}
          <div>
            <h4 className="text-xl font-bold text-card-foreground text-center mb-8">Executive Assistant</h4>
            <div className="grid md:grid-cols-3 gap-6">
              {assistantServices.map((service) => (
                <Card key={service.title} className="border-border hover:border-accent/30 transition-all duration-300 hover:shadow-soft bg-card">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <service.icon className="w-5 h-5 text-accent" />
                      <h5 className="font-semibold text-card-foreground">{service.title}</h5>
                    </div>
                    <ul className="space-y-1">
                      {service.bullets.map((bullet, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
