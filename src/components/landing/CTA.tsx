import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Heart, ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CTA = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      toast({
        title: "Please enter your email",
        variant: "destructive",
      });
      return;
    }

    // Simulate submission
    setIsSubmitted(true);
    toast({
      title: "Welcome to Loveable!",
      description: "Check your inbox for next steps.",
    });
  };

  return (
    <section id="cta" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-coral-light/20 via-transparent to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-8 shadow-glow">
            <Heart className="w-8 h-8 text-primary-foreground" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Build{" "}
            <span className="text-gradient">Meaningful Connections</span>?
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Join thousands of people using Loveable AI to enhance their communication 
            and build stronger relationships. Start for free today.
          </p>

          {/* Email Form */}
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 px-4 flex-1"
                />
                <Button
                  type="submit"
                  className="gradient-primary text-primary-foreground h-12 px-6 shadow-soft hover:opacity-90 transition-opacity"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </form>
          ) : (
            <div className="max-w-md mx-auto mb-8 p-6 rounded-xl bg-mint-light/30 border border-mint/30 animate-scale-in">
              <div className="flex items-center justify-center gap-3">
                <CheckCircle className="w-6 h-6 text-mint" />
                <span className="font-semibold text-foreground">You're on the list!</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Check your inbox for your welcome email.
              </p>
            </div>
          )}

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>Free to start</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>Privacy first</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
