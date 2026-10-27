import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent, type ChartConfig } from "@/components/ui/chart";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import { Github, Play, FileText, GitBranch, Network, Database, ScanLine, ArrowRight } from "lucide-react";
import gcReport from "@assets/Data_Analytics_Report_compressed.pdf";

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  youtubeUrl?: string;
  reportUrl?: string;
  category: 'AI/ML' | 'Business Analytics' | 'Automation' | 'GenAI';
}

// RAGAS scores on the frozen 40-question policy QA set (hodos_microservice_rag/metrics)
const ragasData = [
  { stage: "Simple RAG", recall: 0.61, precision: 0.74, faithfulness: 0.88, relevancy: 0.79 },
  { stage: "+ Multi-hop", recall: 0.83, precision: 0.69, faithfulness: 0.9, relevancy: 0.85 },
  { stage: "+ RAPTOR", recall: 0.91, precision: 0.77, faithfulness: 0.93, relevancy: 0.88 },
];

const ragasConfig = {
  recall: { label: "Context recall", color: "hsl(var(--chart-1))" },
  precision: { label: "Context precision", color: "hsl(var(--chart-2))" },
  faithfulness: { label: "Faithfulness", color: "hsl(var(--chart-3))" },
  relevancy: { label: "Answer relevancy", color: "hsl(var(--chart-4))" },
} satisfies ChartConfig;

const hodosPipeline = [
  { icon: ScanLine, label: "Bill OCR / VLM routing" },
  { icon: GitBranch, label: "RAPTOR tree (GMM + BIC)" },
  { icon: Network, label: "Multi-hop retrieval" },
  { icon: Database, label: "Tuple cache + audit log" },
];

export default function ProjectsSection() {
  //todo: remove mock functionality - project data will come from props or API
  const projects: Project[] = [
    {
      id: "5",
      title: "Agentic GenAI Analytics Dashboard",
      description: "Bronze at the General Championship Data Analytics Competition (Frammer.com), as Vice Captain. Co-architected a dashboard combining NLQ, a KPI Lab and an Insight Narrator on a star schema. A 9-stage LangGraph KPI agent with a 3-layer evaluator cut noise 40–50%, and a Text-to-SQL RAG over 3 ChromaDB stores lifted accuracy from 64% to 91% with 30% fewer tokens.",
      technologies: ["LangGraph", "Text-to-SQL", "ChromaDB", "RAG", "Star Schema"],
      githubUrl: "https://github.com/2004Snehal/Ekta",
      category: "GenAI"
    },
    {
      id: "1",
      title: "Business Revenue Optimization",
      description: "Comprehensive data analytics project for ElectroMart analyzing marketing effectiveness, customer behavior, and revenue optimization. Led market analysis using advanced ML models including XGBoost and LightGBM with SHAP analysis for actionable business insights.",
      technologies: ["Python", "XGBoost", "LightGBM", "SHAP", "Data Analytics", "Business Intelligence"],
      reportUrl: "#gc-report", // Links to GC Data Analytics Report PDF
      category: "Business Analytics"
    },
    {
      id: "2", 
      title: "Text-to-3D Model Generation",
      description: "Advanced 3D model generation system using OpenAI's SHAP-E framework. Built an intuitive interface for converting text descriptions into detailed 3D models with real-time rendering and export capabilities.",
      technologies: ["OpenAI SHAP-E", "Python", "3D Modeling", "Machine Learning", "Computer Graphics"],
      githubUrl: "https://github.com/2004Snehal/3d-model-generation-shape",
      youtubeUrl: "https://youtu.be/ym_xpzOyj_8",
      category: "AI/ML"
    },
    {
      id: "3",
      title: "Automated Book Publication System", 
      description: "End-to-end automation system for book publishing workflow including manuscript processing, formatting, cover generation, and distribution management. Streamlined the entire publishing pipeline for efficiency and quality.",
      technologies: ["Python", "Automation", "Publishing Workflow", "Document Processing", "API Integration"],
      githubUrl: "https://github.com/2004Snehal/AutomatedBookPublicationWorkflow",
      youtubeUrl: "https://youtu.be/TUT97ng8cmk",
      category: "Automation"
    },
    {
      id: "4",
      title: "Rag Latency Optimization", 
      description: "Created a base rag and optimizsed that for better latency using  embedding caching,parallel processing and other optimization strategies",
      technologies: ["Python", "Gen-AI", "RAG"],
      githubUrl: "https://github.com/2004Snehal/RAG_Optimization",
      reportUrl: "https://github.com/2004Snehal/RAG_Optimization/blob/main/README.md#structured-report",
      category: "AI/ML"
    }
  ];

  const openLink = (url: string) => {
    if (url === "#gc-report") {
      // Open the GC report PDF in a new tab
      window.open(gcReport, '_blank');
      return;
    }
    window.open(url, '_blank');
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI/ML':
        return 'bg-chart-1 text-primary-foreground';
      case 'Business Analytics':
        return 'bg-chart-2 text-primary-foreground';
      case 'Automation':
        return 'bg-chart-3 text-primary-foreground';
      case 'GenAI':
        return 'bg-chart-4 text-primary-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading text-3xl lg:text-4xl font-bold tracking-tight mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Recent work in RAG systems and applied AI, plus earlier analytics and automation projects
          </p>
        </div>

        {/* Featured: Hodos RAG microservice */}
        <Card className="p-6 lg:p-10 mb-12" data-testid="project-hodos-rag">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <Badge className="bg-chart-1 text-primary-foreground">Latest</Badge>
            <Badge variant="secondary">FastAPI</Badge>
            <Badge variant="secondary">RAPTOR</Badge>
            <Badge variant="secondary">Multi-hop RAG</Badge>
            <Badge variant="secondary">Ollama · Redis</Badge>
          </div>
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-5">
              <h3 className="text-2xl lg:text-3xl font-semibold leading-tight">
                Hodos RAG Microservice: RAPTOR + Multi-Hop Policy Audit
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Enterprise RAG service that reads corporate travel policies and audits expense bills against
                them. Policies become hierarchical RAPTOR trees; multi-hop retrieval gathers multi-clause rules;
                bills are routed by a CNN to OCR or a local VLM, and each claim gets a pass / fail / needs-review
                verdict with exact citations and a confidence score.
              </p>

              <div className="flex flex-wrap items-center gap-2">
                {hodosPipeline.map(({ icon: Icon, label }, i) => (
                  <div key={label} className="flex items-center gap-2">
                    <div className="flex items-center gap-2 rounded-full border bg-background/60 px-3 py-1.5 text-xs">
                      <Icon className="h-3.5 w-3.5 text-primary" />
                      {label}
                    </div>
                    {i < hodosPipeline.length - 1 && <ArrowRight className="h-3.5 w-3.5 text-muted-foreground" />}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="rounded-lg border bg-background/60 p-4">
                  <div className="text-xl font-bold text-primary whitespace-nowrap">0.61→0.91</div>
                  <div className="text-xs text-muted-foreground">Context recall</div>
                </div>
                <div className="rounded-lg border bg-background/60 p-4">
                  <div className="text-xl font-bold text-primary whitespace-nowrap">0.93</div>
                  <div className="text-xs text-muted-foreground">Faithfulness</div>
                </div>
                <div className="rounded-lg border bg-background/60 p-4">
                  <div className="text-xl font-bold text-primary whitespace-nowrap">340→106ms</div>
                  <div className="text-xs text-muted-foreground">Avg latency with cache (70% hit rate)</div>
                </div>
              </div>

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => openLink("https://github.com/2004Snehal/hodos_microservice_rag")}
                  data-testid="button-github-hodos-rag"
                >
                  <Github className="h-4 w-4 mr-2" />
                  Code
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => openLink("https://github.com/2004Snehal/hodos_microservice_rag/blob/main/docs/benchmarks.md")}
                  data-testid="button-report-hodos-rag"
                >
                  <FileText className="h-4 w-4 mr-2" />
                  Benchmarks
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-1">RAGAS scores by pipeline stage</h4>
              <p className="text-xs text-muted-foreground mb-4">40-question frozen policy QA set</p>
              <ChartContainer config={ragasConfig} className="aspect-auto h-72 w-full">
                <LineChart data={ragasData} margin={{ top: 8, right: 16, left: -16, bottom: 0 }}>
                  <CartesianGrid vertical={false} />
                  <XAxis dataKey="stage" tickLine={false} axisLine={false} tickMargin={8} />
                  <YAxis domain={[0.5, 1]} tickLine={false} axisLine={false} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <ChartLegend content={<ChartLegendContent />} />
                  {Object.keys(ragasConfig).map((key) => (
                    <Line
                      key={key}
                      dataKey={key}
                      type="monotone"
                      stroke={`var(--color-${key})`}
                      strokeWidth={2}
                      dot={{ r: 4 }}
                    />
                  ))}
                </LineChart>
              </ChartContainer>
            </div>
          </div>
        </Card>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="p-6 glow-card" data-testid={`project-${project.id}`}>
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold leading-tight">{project.title}</h3>
                  <Badge className={getCategoryColor(project.category)}>
                    {project.category}
                  </Badge>
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge variant="secondary" className="text-xs">
                      +{project.technologies.length - 4}
                    </Badge>
                  )}
                </div>
                
                <div className="flex gap-2 pt-4">
                  {project.githubUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => openLink(project.githubUrl!)}
                      data-testid={`button-github-${project.id}`}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  )}
                  {project.youtubeUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => openLink(project.youtubeUrl!)}
                      data-testid={`button-youtube-${project.id}`}
                    >
                      <Play className="h-4 w-4 mr-2" />
                      Demo
                    </Button>
                  )}
                  {project.reportUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => openLink(project.reportUrl!)}
                      data-testid={`button-report-${project.id}`}
                    >
                      <FileText className="h-4 w-4 mr-2" />
                      Report
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}