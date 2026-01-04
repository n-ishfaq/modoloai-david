import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Dr. Sarah Khan",
    role: "Cosmetic Dentist",
    avatar: "SK",
    content: "The AI receptionist books more appointments than our old front desk system ever did.",
    metric: "87% booking rate",
  },
  {
    name: "Dr. James Lee",
    role: "Family Dentistry",
    avatar: "JL",
    content: "Our Google reviews exploded and new patients trust us instantly.",
    metric: "+1.1 star rating in 60 days",
  },
  {
    name: "Multi-location Dental Group",
    role: "Enterprise Client",
    avatar: "DG",
    content: "Ad costs dropped while patient quality went up.",
    metric: "42% lower cost per lead",
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
              Real Results
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Real Results From <span className="text-gradient">Dental Practices</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.name}
              className="border-border hover:border-primary/30 transition-all duration-300 hover:shadow-soft bg-card"
            >
              <CardContent className="p-6">
                {/* Quote icon */}
                <Quote className="w-8 h-8 text-primary/20 mb-4" />

                {/* Content */}
                <p className="text-muted-foreground leading-relaxed mb-4">
                  "{testimonial.content}"
                </p>

                {/* Metric */}
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-mint-light/30 border border-mint/30 mb-4">
                  <span className="text-sm font-semibold text-mint">{testimonial.metric}</span>
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
