import { Card } from "@/components/ui/card";
import { GraduationCap, MapPin } from "lucide-react";
import iitKgpImage from "@assets/image_1758046521081.png";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading text-3xl lg:text-4xl font-bold tracking-tight mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I build AI systems that have to be right: verified Text-to-SQL agents, multi-hop RAG over
            policy documents, and real-time voice agents.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm pursuing a B.Tech. (Hons.) in Chemical Engineering with a Micro Specialization in AI &
                Applications at IIT Kharagpur. I work at the intersection of generative AI, data and product.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                As Co-Founder of Hodos, I built a multi-tenant RAPTOR retrieval engine for corporate travel
                auditing. Since then I've built a Text-to-SQL agent for P&L metrics at Purplle's Founders Office,
                worked as an AI Engineer at CoralComp, and published research on transaction foundation models
                for RAG on arXiv.
              </p>
            </div>
            
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Education</h4>
                  <div className="space-y-2">
                    <div>
                      <p className="font-medium">B.Tech. (Hons.), Chemical Engineering</p>
                      <p className="text-muted-foreground">Micro Specialization in AI & Applications</p>
                      <p className="text-muted-foreground">Indian Institute of Technology Kharagpur</p>
                      <p className="text-sm text-muted-foreground">2023 - 2027 · CGPA 8.25/10</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Academic Excellence</h4>
                  <p className="text-muted-foreground">
                    Top 1% in JEE Advanced 2023. INMO Camp 2021, Codeforces Specialist (1400+), and 13th in
                    state-level NTSE Stage 1.
                  </p>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              <img
                src={iitKgpImage}
                alt="IIT Kharagpur Campus"
                className="rounded-lg shadow-2xl w-full max-w-lg"
                data-testid="img-campus"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}