import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, TrendingUp, Users, DollarSign, Target, Bot, Zap, Shield, Video } from "lucide-react";

export default function HodosSection() {
  const openHodosWebsite = () => {
    window.open('https://www.hodosindia.com', '_blank');
  };

  const openHiCapyWebsite = () => {
    window.open('https://www.hicapy.com', '_blank');
  };

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading text-3xl lg:text-4xl font-bold tracking-tight mb-4">Entrepreneurship</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Products I have built from zero, from AI meeting bots to corporate travel auditing
          </p>
        </div>

        {/* HiCapy Section - Closed */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-4">
                <img src="/hicapy.png" alt="HiCapy Logo" className="w-12 h-12" />
                <div>
                  <h3 className="text-2xl font-semibold">HiCapy - Meeting Bot for Google Meet</h3>
                  <span className="text-sm bg-muted text-muted-foreground px-3 py-1 rounded-full">Closed · Jan 2026 - Feb 2026</span>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                An AI meeting bot for Google Meet that joins, records and talks back in real time. A Pipecat voice
                pipeline (Deepgram ASR/TTS, Groq LLM, WebRTC) drives a headless Meet bot running on AWS ECS.
              </p>
              <Button 
                onClick={openHiCapyWebsite}
                className="hover-elevate"
                data-testid="button-hicapy-website"
              >
                Visit HiCapy
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 text-center hover-elevate transform transition-all duration-300 hover:scale-105">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Bot className="h-5 w-5 text-primary" />
                </div>
                <h4 className="font-semibold text-sm">p50 1.5s</h4>
                <p className="text-xs text-muted-foreground">Voice AI response latency</p>
              </Card>
              <Card className="p-4 text-center hover-elevate transform transition-all duration-300 hover:scale-105">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                <h4 className="font-semibold text-sm">-70% DOM CPU</h4>
                <p className="text-xs text-muted-foreground">MutationObserver in the headless bot</p>
              </Card>
              <Card className="p-4 text-center hover-elevate transform transition-all duration-300 hover:scale-105">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <h4 className="font-semibold text-sm">2GB RAM saved</h4>
                <p className="text-xs text-muted-foreground">Per session, via auto-shutdown</p>
              </Card>
              <Card className="p-4 text-center hover-elevate transform transition-all duration-300 hover:scale-105">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Video className="h-5 w-5 text-primary" />
                </div>
                <h4 className="font-semibold text-sm">AWS ECS</h4>
                <p className="text-xs text-muted-foreground">Dual-Docker CI/CD with ECR versioning</p>
              </Card>
            </div>
          </div>
        </div>

        {/* Hodos Section */}
        <div className="border-t pt-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Hodos - Previous Venture</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  B2B SaaS that audits corporate travel expenses against company policy. Selected for AWS Activate
                  and Microsoft for Startups, and featured on G2 and Product Hunt.
                </p>
                <Button 
                  onClick={openHodosWebsite}
                  className="hover-elevate"
                  variant="outline"
                  data-testid="button-hodos-website"
                >
                  Visit Hodos Website
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <Card className="p-6">
                <h4 className="text-xl font-semibold mb-4">Role: Co-Founder · Mar 2025 - Jul 2025</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <Target className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Built a multi-tenant RAPTOR retrieval engine with isolated policy trees, validated across 3 companies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Built a 4-hop reasoning pipeline with confidence-gated aggregation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <TrendingUp className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Secured and declined a Rs. 11L angel offer for 15% equity on a $1M–$2M raise</span>
                  </li>
                </ul>
              </Card>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 text-center hover-elevate">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">95%+ Accuracy</h4>
                <p className="text-sm text-muted-foreground">
                  Verdict accuracy on pilot insurance claims
                </p>
              </Card>
              
              <Card className="p-6 text-center hover-elevate">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Zero Leakage</h4>
                <p className="text-sm text-muted-foreground">
                  Isolated policy trees across 3 tenant companies
                </p>
              </Card>
              
              <Card className="p-6 text-center hover-elevate">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">AWS & Microsoft</h4>
                <p className="text-sm text-muted-foreground">
                  Selected for AWS Activate and Microsoft for Startups
                </p>
              </Card>
              
              <Card className="p-6 text-center hover-elevate">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">G2 & Product Hunt</h4>
                <p className="text-sm text-muted-foreground">
                  Featured launches that validated product-market fit
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}