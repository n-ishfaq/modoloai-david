import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sparkles, Heart, MessageSquare, Loader2, ArrowRight, Smile, Frown, Meh, AlertCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface EmotionResult {
  primary_emotion: string;
  confidence: number;
  secondary_emotions: string[];
  tone: string;
  suggestion: string;
}

const AIDemo = () => {
  const [enhanceInput, setEnhanceInput] = useState("");
  const [enhanceResult, setEnhanceResult] = useState("");
  const [emotionInput, setEmotionInput] = useState("");
  const [emotionResult, setEmotionResult] = useState<EmotionResult | null>(null);
  const [isEnhancing, setIsEnhancing] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const { toast } = useToast();

  const handleEnhance = async () => {
    if (!enhanceInput.trim()) {
      toast({
        title: "Please enter a message",
        description: "Type a message you'd like to enhance.",
        variant: "destructive",
      });
      return;
    }

    setIsEnhancing(true);
    setEnhanceResult("");

    try {
      const { data, error } = await supabase.functions.invoke("enhance-message", {
        body: { message: enhanceInput, type: "enhance" },
      });

      if (error) throw error;

      if (data?.error) {
        toast({
          title: "Error",
          description: data.error,
          variant: "destructive",
        });
        return;
      }

      setEnhanceResult(data.result);
    } catch (error) {
      console.error("Error enhancing message:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again in a moment.",
        variant: "destructive",
      });
    } finally {
      setIsEnhancing(false);
    }
  };

  const handleAnalyzeEmotion = async () => {
    if (!emotionInput.trim()) {
      toast({
        title: "Please enter a message",
        description: "Type a message to analyze its emotion.",
        variant: "destructive",
      });
      return;
    }

    setIsAnalyzing(true);
    setEmotionResult(null);

    try {
      const { data, error } = await supabase.functions.invoke("enhance-message", {
        body: { message: emotionInput, type: "emotion" },
      });

      if (error) throw error;

      if (data?.error) {
        toast({
          title: "Error",
          description: data.error,
          variant: "destructive",
        });
        return;
      }

      const parsed = JSON.parse(data.result);
      setEmotionResult(parsed);
    } catch (error) {
      console.error("Error analyzing emotion:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again in a moment.",
        variant: "destructive",
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  const getEmotionIcon = (emotion: string) => {
    const lowerEmotion = emotion.toLowerCase();
    if (lowerEmotion.includes("happy") || lowerEmotion.includes("joy") || lowerEmotion.includes("excite")) {
      return <Smile className="w-6 h-6 text-mint" />;
    } else if (lowerEmotion.includes("sad") || lowerEmotion.includes("disappoint") || lowerEmotion.includes("frustrat")) {
      return <Frown className="w-6 h-6 text-accent" />;
    } else if (lowerEmotion.includes("neutral") || lowerEmotion.includes("calm")) {
      return <Meh className="w-6 h-6 text-lavender" />;
    }
    return <Heart className="w-6 h-6 text-primary" />;
  };

  const exampleMessages = {
    enhance: [
      "Thanks for the meeting",
      "Can we talk later?",
      "Happy birthday",
    ],
    emotion: [
      "I'm so excited about our trip next week!",
      "I've been feeling a bit overwhelmed lately",
      "The project went well, but I think we could do better",
    ],
  };

  return (
    <section id="demo" className="py-24 gradient-soft">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              Live AI Demo
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Try <span className="text-gradient">Loveable AI</span> Right Now
          </h2>
          <p className="text-lg text-muted-foreground">
            Experience the power of AI-enhanced communication. Type any message below 
            and see how Loveable transforms it.
          </p>
        </div>

        {/* Demo Tabs */}
        <Tabs defaultValue="enhance" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8 h-14 bg-card">
            <TabsTrigger value="enhance" className="text-base gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <MessageSquare className="w-4 h-4" />
              Message Enhancer
            </TabsTrigger>
            <TabsTrigger value="emotion" className="text-base gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Heart className="w-4 h-4" />
              Emotion Detector
            </TabsTrigger>
          </TabsList>

          {/* Enhance Tab */}
          <TabsContent value="enhance">
            <Card className="border-border shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-primary" />
                  Message Enhancer
                </CardTitle>
                <CardDescription>
                  Type a casual message and watch AI make it more engaging and thoughtful.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">Your Message</label>
                  <Textarea
                    placeholder="Type your message here... (e.g., 'Thanks for the meeting')"
                    value={enhanceInput}
                    onChange={(e) => setEnhanceInput(e.target.value)}
                    className="min-h-[100px] resize-none"
                  />
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="text-xs text-muted-foreground">Try:</span>
                    {exampleMessages.enhance.map((msg) => (
                      <button
                        key={msg}
                        onClick={() => setEnhanceInput(msg)}
                        className="text-xs px-2 py-1 rounded-full bg-secondary hover:bg-secondary/80 text-secondary-foreground transition-colors"
                      >
                        {msg}
                      </button>
                    ))}
                  </div>
                </div>

                <Button
                  onClick={handleEnhance}
                  disabled={isEnhancing || !enhanceInput.trim()}
                  className="w-full gradient-primary text-primary-foreground h-12"
                >
                  {isEnhancing ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Enhancing...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 mr-2" />
                      Enhance Message
                    </>
                  )}
                </Button>

                {enhanceResult && (
                  <div className="p-6 rounded-xl bg-mint-light/30 border border-mint/30 animate-scale-in">
                    <div className="flex items-center gap-2 mb-3">
                      <Sparkles className="w-5 h-5 text-mint" />
                      <span className="font-semibold text-foreground">Enhanced Version</span>
                    </div>
                    <p className="text-foreground leading-relaxed">{enhanceResult}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Emotion Tab */}
          <TabsContent value="emotion">
            <Card className="border-border shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-accent" />
                  Emotion Detector
                </CardTitle>
                <CardDescription>
                  Paste any text and discover the emotional undertones with AI analysis.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">Text to Analyze</label>
                  <Textarea
                    placeholder="Paste a message, email, or any text here..."
                    value={emotionInput}
                    onChange={(e) => setEmotionInput(e.target.value)}
                    className="min-h-[100px] resize-none"
                  />
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="text-xs text-muted-foreground">Try:</span>
                    {exampleMessages.emotion.map((msg) => (
                      <button
                        key={msg}
                        onClick={() => setEmotionInput(msg)}
                        className="text-xs px-2 py-1 rounded-full bg-secondary hover:bg-secondary/80 text-secondary-foreground transition-colors"
                      >
                        {msg.substring(0, 30)}...
                      </button>
                    ))}
                  </div>
                </div>

                <Button
                  onClick={handleAnalyzeEmotion}
                  disabled={isAnalyzing || !emotionInput.trim()}
                  className="w-full gradient-primary text-primary-foreground h-12"
                >
                  {isAnalyzing ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Heart className="w-4 h-4 mr-2" />
                      Analyze Emotion
                    </>
                  )}
                </Button>

                {emotionResult && (
                  <div className="p-6 rounded-xl bg-lavender-light/30 border border-lavender/30 animate-scale-in">
                    <div className="flex items-center gap-3 mb-4">
                      {getEmotionIcon(emotionResult.primary_emotion)}
                      <div>
                        <span className="font-semibold text-foreground capitalize text-lg">
                          {emotionResult.primary_emotion}
                        </span>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="w-20 h-2 bg-secondary rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-lavender rounded-full transition-all"
                              style={{ width: `${emotionResult.confidence * 100}%` }}
                            />
                          </div>
                          <span className="text-xs text-muted-foreground">
                            {Math.round(emotionResult.confidence * 100)}% confidence
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3 text-sm">
                      <div>
                        <span className="font-medium text-muted-foreground">Tone: </span>
                        <span className="text-foreground">{emotionResult.tone}</span>
                      </div>
                      {emotionResult.secondary_emotions.length > 0 && (
                        <div>
                          <span className="font-medium text-muted-foreground">Also detected: </span>
                          <span className="text-foreground">{emotionResult.secondary_emotions.join(", ")}</span>
                        </div>
                      )}
                      <div className="mt-4 p-3 rounded-lg bg-card border border-border">
                        <div className="flex items-start gap-2">
                          <AlertCircle className="w-4 h-4 text-primary mt-0.5" />
                          <div>
                            <span className="font-medium text-foreground text-xs">Suggestion</span>
                            <p className="text-muted-foreground text-xs mt-1">{emotionResult.suggestion}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default AIDemo;
