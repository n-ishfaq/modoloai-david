import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Marketing Director",
    avatar: "SC",
    content: "Loveable has completely transformed how I communicate with my team. My messages are more thoughtful, and I've noticed a real improvement in team morale.",
    rating: 5,
  },
  {
    name: "Michael Torres",
    role: "Relationship Coach",
    avatar: "MT",
    content: "I recommend Loveable to all my clients. The emotion detection feature helps people understand their communication patterns and improve their relationships.",
    rating: 5,
  },
  {
    name: "Emily Watson",
    role: "Small Business Owner",
    avatar: "EW",
    content: "As someone who struggles with professional communication, this tool has been a game-changer. My client emails are now warm and engaging.",
    rating: 5,
  },
  {
    name: "David Park",
    role: "Software Engineer",
    avatar: "DP",
    content: "I used to overthink every message. Loveable gives me confidence that my communication is clear and comes across the way I intend.",
    rating: 5,
  },
  {
    name: "Lisa Johnson",
    role: "HR Manager",
    avatar: "LJ",
    content: "The AI suggestions are remarkably natural. It enhances my messages without making them sound robotic or impersonal.",
    rating: 5,
  },
  {
    name: "Alex Rivera",
    role: "Content Creator",
    avatar: "AR",
    content: "From captions to DMs, Loveable helps me connect authentically with my audience. It's like having a communication coach in my pocket.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 gradient-soft">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border mb-6">
            <Star className="w-4 h-4 text-primary fill-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              Loved by Thousands
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            What Our <span className="text-gradient">Users Say</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of people who are already building better connections with Loveable AI.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className="border-border hover:border-primary/30 transition-all duration-300 hover:shadow-soft bg-card"
            >
              <CardContent className="p-6">
                {/* Quote icon */}
                <Quote className="w-8 h-8 text-primary/20 mb-4" />

                {/* Content */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
                    <span className="text-sm font-semibold text-primary-foreground">
                      {testimonial.avatar}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-card-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
