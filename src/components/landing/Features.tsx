import { 
  MessageSquare, 
  Heart, 
  Bell, 
  Sparkles, 
  TrendingUp, 
  Shield 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: MessageSquare,
    title: "AI Conversation Assistant",
    description: "Get real-time suggestions to make your messages more engaging, warm, and meaningful.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Heart,
    title: "Emotion Detection",
    description: "Understand the emotional tone of messages to respond with empathy and insight.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Bell,
    title: "Smart Follow-ups",
    description: "Never miss important conversations with intelligent reminders and prompts.",
    color: "text-lavender",
    bgColor: "bg-lavender/10",
  },
  {
    icon: Sparkles,
    title: "Personalized Suggestions",
    description: "AI learns your communication style and adapts suggestions to match your voice.",
    color: "text-mint",
    bgColor: "bg-mint/10",
  },
  {
    icon: TrendingUp,
    title: "Engagement Analytics",
    description: "Track how your communication improves over time with detailed insights.",
    color: "text-coral",
    bgColor: "bg-coral/10",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Your conversations stay private. We never store or share your personal messages.",
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
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-secondary-foreground">
              Powerful Features
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Everything You Need to{" "}
            <span className="text-gradient">Connect Better</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Loveable AI gives you the tools to enhance every conversation, 
            understand emotions, and build stronger relationships.
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
                <div className={`w-12 h-12 rounded-xl ${feature.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
