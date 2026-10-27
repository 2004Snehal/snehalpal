import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building2, GraduationCap, ArrowRight, CheckCircle2 } from "lucide-react";

interface TimelineItem {
  id: string;
  title: string;
  organization: string;
  period: string;
  location?: string;
  description: string;
  type: 'startup' | 'research' | 'internship';
  isUpcoming?: boolean;
  highlights?: string[];
  pipeline?: { title: string; steps: string[] };
}

export default function TimelineSection() {
  const timelineData: TimelineItem[] = [
    {
      id: "1",
      title: "Generative AI & Data Science Intern",
      organization: "Founders Office, Purplle.com",
      period: "May 2026 - Jul 2026",
      location: "Mumbai, India",
      description: "Built a verification-first Text-to-SQL agent that answers financial P&L questions directly from the data warehouse.",
      type: "internship",
      highlights: [
        "Built a verification-first Text-to-SQL agent (LangGraph), automating 40+ financial P&L metrics across 8 domains.",
        "Built a pgvector-based metadata retrieval layer, narrowing 120+ tables to 6 relevant tables and 70 columns per query.",
        "Built a SQLGlot validator reconciled against Metabase totals, achieving a 96%+ pass rate within 0.25% error tolerance.",
      ],
      pipeline: { title: "Agent flow", steps: ["Question", "pgvector table retrieval", "LangGraph SQL agent", "SQLGlot validation", "Metabase reconciliation"] }
    },
    {
      id: "5",
      title: "AI Engineer Intern",
      organization: "CoralComp",
      period: "Mar 2026 - May 2026",
      description: "Maintained the company's AWS server, shipped an AI chatbot feature, and re-architected the data layer so updates ran much faster.",
      type: "internship",
      highlights: [
        "Maintained and operated the AWS server infrastructure.",
        "Built and integrated an AI chatbot feature into the product.",
      ],
      pipeline: { title: "Data layer optimization", steps: ["Star schema", "Smaller databases", "Compressed Parquet on S3", "DynamoDB"] }
    },
    {
      id: "4",
      title: "Co-Founder",
      organization: "Hodos – B2B SaaS, Corporate Travel Auditing",
      period: "Mar 2025 - Jul 2025",
      location: "Remote",
      description: "Built the AI auditing engine behind a corporate travel expense platform and took it to market.",
      type: "startup",
      highlights: [
        "Built a multi-tenant RAPTOR retrieval engine with isolated policy trees; validated across 3 companies with zero leakage.",
        "Built a 4-hop reasoning pipeline with confidence-gated aggregation: 95%+ verdict accuracy on pilot insurance claims.",
        "Selected for AWS Activate & Microsoft for Startups; featured on G2 and Product Hunt.",
      ]
    },
    {
      id: "2",
      title: "Computer Vision Research Intern",
      organization: "Signal Processing & AI Group, IIT Kharagpur",
      period: "Jan 2025 - Mar 2025",
      location: "Kharagpur, India",
      description: "Complex-valued deep learning for PolSAR land-use classification from satellite radar imagery.",
      type: "research",
      highlights: [
        "Built a complex-valued CNN (complexPyTorch): 68.0% accuracy, 0.60 kappa.",
        "Added complex Squeeze-and-Excitation attention: 73.8% accuracy, 72.1% macro-F1.",
        "Designed a multiscale complex Vision Transformer (CV-MsAtViT): 78.2% accuracy, +10.2pp over baseline.",
      ],
      pipeline: { title: "Accuracy progression", steps: ["CV-CNN 68.0%", "+ SE attention 73.8%", "CV-MsAtViT 78.2%"] }
    },
    {
      id: "3",
      title: "NLP Research Intern",
      organization: "Mehdie.org, Aalborg University",
      period: "Dec 2024 - Jan 2025",
      location: "Denmark (Remote)",
      description: "Entity matching across noisy, multilingual historical records for the MEHDIE project.",
      type: "research",
      highlights: [
        "Implemented MFI-based blocking across 10M+ historical records, avoiding 100 trillion pairwise comparisons.",
        "Fine-tuned XLM-RoBERTa (LoRA) to generate multilingual entity embeddings for noisy biographical records.",
        "Trained XGBoost on XLM-R pairwise embeddings plus 48 features; used SHAP to select the top 10.",
      ]
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'startup':
        return <Building2 className="h-5 w-5" />;
      case 'research':
        return <GraduationCap className="h-5 w-5" />;
      case 'internship':
        return <Building2 className="h-5 w-5" />;
      default:
        return <Calendar className="h-5 w-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'startup':
        return 'bg-primary text-primary-foreground';
      case 'research':
        return 'bg-chart-1 text-primary-foreground';
      case 'internship':
        return 'bg-chart-2 text-primary-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section id="timeline" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading text-3xl lg:text-4xl font-bold tracking-tight mb-4">Experience</h2>
          <p className="text-lg text-muted-foreground">
            Generative AI engineering, startup building, and research across vision and NLP
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>

          <div className="space-y-8">
            {timelineData.map((item) => (
              <div key={item.id} className="relative flex gap-8 items-start">
                {/* Timeline dot */}
                <div className={`flex-shrink-0 w-16 h-16 rounded-full border-4 border-background flex items-center justify-center z-10 ${
                  item.isUpcoming ? 'bg-muted text-muted-foreground' : 'bg-primary text-primary-foreground'
                }`}>
                  {getIcon(item.type)}
                </div>

                {/* Content card */}
                <Card className={`flex-1 min-w-0 p-6 glow-card ${
                  item.isUpcoming ? 'border-dashed' : ''
                }`} data-testid={`timeline-item-${item.id}`}>
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        {item.title}
                        {item.isUpcoming && (
                          <Badge variant="secondary" className="ml-2">
                            Upcoming
                          </Badge>
                        )}
                      </h3>
                      <p className="text-primary font-medium">{item.organization}</p>
                    </div>
                    <Badge className={getTypeColor(item.type)}>
                      {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                    </Badge>
                  </div>

                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{item.period}</span>
                    </div>
                    {item.location && (
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{item.location}</span>
                      </div>
                    )}
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>

                  {item.highlights && (
                    <ul className="mt-4 space-y-2">
                      {item.highlights.map((text) => (
                        <li key={text} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{text}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {item.pipeline && (
                    <div className="mt-5 rounded-lg border bg-muted/40 p-4">
                      <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground mb-3">
                        {item.pipeline.title}
                      </div>
                      <div className="flex flex-wrap items-center gap-2">
                        {item.pipeline.steps.map((step, i) => (
                          <div key={step} className="flex items-center gap-2">
                            <span className="rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-medium">
                              {step}
                            </span>
                            {i < item.pipeline!.steps.length - 1 && <ArrowRight className="h-3.5 w-3.5 text-muted-foreground" />}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
