import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent, type ChartConfig } from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts";
import { ExternalLink, FileText, Database, Layers, Sparkles } from "lucide-react";

const ARXIV_URL = "https://arxiv.org/abs/2610.28641v1";

// Headline numbers from the paper: TFM vs. size-matched generic text embedders
const resultsData = [
  { metric: "Recall@5", tfm: 81, generic: 39 },
  { metric: "Answer accuracy", tfm: 66.7, generic: 27.5 },
];

const chartConfig = {
  tfm: { label: "Transaction Foundation Model (29M)", color: "hsl(var(--chart-1))" },
  generic: { label: "Size-matched text embedders", color: "hsl(var(--chart-2))" },
} satisfies ChartConfig;

const keyStats = [
  { icon: Database, value: "1,026", label: "Benchmark questions with gold-document labels" },
  { icon: Layers, value: "5M+", label: "AML transactions, with 161 gold-labeled documents" },
  { icon: Sparkles, value: "2.1×", label: "Recall@5 gain of TFM over the best size-matched embedder" },
];

export default function ResearchSection() {
  return (
    <section id="research" className="py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading text-3xl lg:text-4xl font-bold tracking-tight mb-4">Research</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Retrieval, embeddings and RAG systems for structured financial data
          </p>
        </div>

        <Card className="p-6 lg:p-10" data-testid="research-tfm-rag">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <Badge className="bg-chart-1 text-primary-foreground">arXiv 2026</Badge>
            <Badge variant="secondary">cs.IR</Badge>
            <Badge variant="secondary">Sole author</Badge>
          </div>

          <h3 className="text-2xl lg:text-3xl font-semibold leading-tight mb-4">
            Transaction Foundation Models for Retrieval-Augmented Generation over Financial
            Transaction Data: A Comparative Evaluation with Text Embeddings
          </h3>
          <p className="text-muted-foreground mb-8">Snehal Pal · arXiv:2610.28641</p>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-5">
              <p className="text-muted-foreground leading-relaxed">
                Built a 1,026-question RAG benchmark over IBM's 5M+ synthetic AML transactions, with 161
                gold-labeled documents, and compared NVIDIA's 29M-parameter Transaction Foundation Model (TFM)
                against five text embedding models plus a hand-aggregated summary-text baseline. Regex-based entity
                resolution routes queries to the TFM, and a field-mapping tokenizer translates AML rows into its
                schema, lifting QA accuracy from 28% to 67%.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                TFM clearly beats size-matched generic embedders. But a simple pipeline that embeds an
                engineered aggregated summary matches or exceeds TFM overall, and does better on
                low-cardinality categories such as bank, currency and payment format. The advantage of a
                transaction-native model is category-dependent: careful feature aggregation can substitute
                for domain-specific pretraining in several regimes.
              </p>

              <div className="grid sm:grid-cols-3 gap-4 pt-2">
                {keyStats.map(({ icon: Icon, value, label }) => (
                  <div key={label} className="rounded-lg border bg-background/60 p-4">
                    <Icon className="h-5 w-5 text-primary mb-2" />
                    <div className="text-2xl font-bold text-primary">{value}</div>
                    <div className="text-xs text-muted-foreground leading-snug">{label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <Button onClick={() => window.open(ARXIV_URL, "_blank")} data-testid="button-arxiv">
                  <FileText className="h-4 w-4 mr-2" />
                  Read on arXiv
                </Button>
                <Button
                  variant="outline"
                  onClick={() => window.open("https://arxiv.org/pdf/2610.28641v1", "_blank")}
                  data-testid="button-arxiv-pdf"
                >
                  PDF
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-1">Headline results</h4>
              <p className="text-xs text-muted-foreground mb-4">
                % · generic bar shows the best size-matched embedder (Recall@5 range 25–39%)
              </p>
              <ChartContainer config={chartConfig} className="aspect-auto h-72 w-full">
                <BarChart data={resultsData} margin={{ top: 24, right: 8, left: -16, bottom: 0 }}>
                  <CartesianGrid vertical={false} />
                  <XAxis dataKey="metric" tickLine={false} axisLine={false} tickMargin={8} />
                  <YAxis domain={[0, 100]} tickLine={false} axisLine={false} tickFormatter={(v) => `${v}`} />
                  <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                  <ChartLegend content={<ChartLegendContent />} />
                  <Bar dataKey="tfm" fill="var(--color-tfm)" radius={[6, 6, 0, 0]}>
                    <LabelList dataKey="tfm" position="top" className="fill-foreground" fontSize={12} />
                  </Bar>
                  <Bar dataKey="generic" fill="var(--color-generic)" radius={[6, 6, 0, 0]}>
                    <LabelList dataKey="generic" position="top" className="fill-foreground" fontSize={12} />
                  </Bar>
                </BarChart>
              </ChartContainer>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
