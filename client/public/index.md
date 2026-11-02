---
title: "Snehal Pal – Generative AI Engineer & Researcher | IIT Kharagpur"
description: "Snehal Pal is a Generative AI engineer and researcher at IIT Kharagpur. Built Text-to-SQL agents at Purplle, multi-hop RAPTOR RAG at Hodos (co-founder), and authored an arXiv paper on transaction foundation models for RAG."
url: https://snehalpal.vercel.app/
author: Snehal Pal
last_updated: 2026-11-02
---

# Snehal Pal

**Generative AI Engineer | Researcher | Founder**

IIT Kharagpur · B.Tech. (Hons.) · AI & Applications

I build RAG systems, LLM agents and voice AI that hold up in production. IIT Kharagpur, ex-Purplle and CoralComp, co-founder of Hodos, and author on arXiv.

- 1 arXiv paper
- 4 internships
- Y Combinator Startup School

Links:

- Website: https://snehalpal.vercel.app/
- Email: [palsnehal004@gmail.com](mailto:palsnehal004@gmail.com)
- GitHub: [2004Snehal](https://github.com/2004Snehal)
- LinkedIn: [snehal-pal-8274403aa](https://www.linkedin.com/in/snehal-pal-8274403aa/)
- Resume: [Google Drive](https://drive.google.com/drive/folders/1NgWxgX4_aqREwa1f92m1Jmgd-SprJUI3?usp=drive_link)
- Book a meeting: [Calendly](https://calendly.com/palsnehal004/30min)

## About Me

I build AI systems that have to be right: verified Text-to-SQL agents, multi-hop RAG over policy documents, and real-time voice agents.

### My Journey

I'm pursuing a B.Tech. (Hons.) in Chemical Engineering with a Micro Specialization in AI & Applications at IIT Kharagpur. I work at the intersection of generative AI, data and product.

As Co-Founder of Hodos, I built a multi-tenant RAPTOR retrieval engine for corporate travel auditing. Since then I've built a Text-to-SQL agent for P&L metrics at Purplle's Founders Office, worked as an AI Engineer at CoralComp, and published research on transaction foundation models for RAG on arXiv.

### Education

- **B.Tech. (Hons.), Chemical Engineering**, Micro Specialization in AI & Applications
- Indian Institute of Technology Kharagpur
- 2023 – 2027 · CGPA 8.25/10

### Academic Excellence

Top 1% in JEE Advanced 2023. INMO Camp 2021, Codeforces Specialist (1400+), and 13th in state-level NTSE Stage 1.

## Experience

Generative AI engineering, startup building, and research across vision and NLP.

### Generative AI & Data Science Intern — Founders Office, Purplle.com

*Internship · May 2026 – Jul 2026 · Mumbai, India*

Built a verification-first Text-to-SQL agent that answers financial P&L questions directly from the data warehouse.

- Built a verification-first Text-to-SQL agent (LangGraph), automating 40+ financial P&L metrics across 8 domains.
- Built a pgvector-based metadata retrieval layer, narrowing 120+ tables to 6 relevant tables and 70 columns per query.
- Built a SQLGlot validator reconciled against Metabase totals, achieving a 96%+ pass rate within 0.25% error tolerance.

Agent flow: Question → pgvector table retrieval → LangGraph SQL agent → SQLGlot validation → Metabase reconciliation.

### AI Engineer Intern — CoralComp

*Internship · Mar 2026 – May 2026*

Maintained the company's AWS server, shipped an AI chatbot feature, and re-architected the data layer so updates ran much faster.

- Maintained and operated the AWS server infrastructure.
- Built and integrated an AI chatbot feature into the product.
- Data layer optimization: star schema, smaller databases, compressed Parquet on S3, and DynamoDB.

### Co-Founder — Hodos (B2B SaaS, Corporate Travel Auditing)

*Startup · Mar 2025 – Jul 2025 · Remote*

Built the AI auditing engine behind a corporate travel expense platform and took it to market.

- Built a multi-tenant RAPTOR retrieval engine with isolated policy trees; validated across 3 companies with zero leakage.
- Built a 4-hop reasoning pipeline with confidence-gated aggregation: 95%+ verdict accuracy on pilot insurance claims.
- Selected for AWS Activate & Microsoft for Startups; featured on G2 and Product Hunt.

### Computer Vision Research Intern — Signal Processing & AI Group, IIT Kharagpur

*Research · Jan 2025 – Mar 2025 · Kharagpur, India*

Complex-valued deep learning for PolSAR land-use classification from satellite radar imagery.

- Built a complex-valued CNN (complexPyTorch): 68.0% accuracy, 0.60 kappa.
- Added complex Squeeze-and-Excitation attention: 73.8% accuracy, 72.1% macro-F1.
- Designed a multiscale complex Vision Transformer (CV-MsAtViT): 78.2% accuracy, +10.2pp over baseline.

| Model | Accuracy |
| --- | --- |
| CV-CNN | 68.0% |
| + SE attention | 73.8% |
| CV-MsAtViT | 78.2% |

### NLP Research Intern — Mehdie.org, Aalborg University

*Research · Dec 2024 – Jan 2025 · Denmark (Remote)*

Entity matching across noisy, multilingual historical records for the MEHDIE project.

- Implemented MFI-based blocking across 10M+ historical records, avoiding 100 trillion pairwise comparisons.
- Fine-tuned XLM-RoBERTa (LoRA) to generate multilingual entity embeddings for noisy biographical records.
- Trained XGBoost on XLM-R pairwise embeddings plus 48 features; used SHAP to select the top 10.

## Research

Retrieval, embeddings and RAG systems for structured financial data.

### Transaction Foundation Models for Retrieval-Augmented Generation over Financial Transaction Data: A Comparative Evaluation with Text Embeddings

*Snehal Pal (sole author) · arXiv:2610.28641 · cs.IR · 2026*

[Read on arXiv](https://arxiv.org/abs/2610.28641v1) · [PDF](https://arxiv.org/pdf/2610.28641v1)

Built a 1,026-question RAG benchmark over IBM's 5M+ synthetic AML transactions, with 161 gold-labeled documents, and compared NVIDIA's 29M-parameter Transaction Foundation Model (TFM) against five text embedding models plus a hand-aggregated summary-text baseline. Regex-based entity resolution routes queries to the TFM, and a field-mapping tokenizer translates AML rows into its schema, lifting QA accuracy from 28% to 67%.

TFM clearly beats size-matched generic embedders. But a simple pipeline that embeds an engineered aggregated summary matches or exceeds TFM overall, and does better on low-cardinality categories such as bank, currency and payment format. The advantage of a transaction-native model is category-dependent: careful feature aggregation can substitute for domain-specific pretraining in several regimes.

- **1,026** benchmark questions with gold-document labels
- **5M+** AML transactions, with 161 gold-labeled documents
- **2.1×** Recall@5 gain of TFM over the best size-matched embedder

Headline results (generic = best size-matched embedder; Recall@5 range 25–39%):

| Metric | Transaction Foundation Model (29M) | Size-matched text embedders |
| --- | --- | --- |
| Recall@5 | 81% | 39% |
| Answer accuracy | 66.7% | 27.5% |

## Entrepreneurship

Products I have built from zero, from AI meeting bots to corporate travel auditing.

### HiCapy — Meeting Bot for Google Meet

*Closed · Jan 2026 – Feb 2026 · [hicapy.com](https://www.hicapy.com)*

An AI meeting bot for Google Meet that joins, records and talks back in real time. A Pipecat voice pipeline (Deepgram ASR/TTS, Groq LLM, WebRTC) drives a headless Meet bot running on AWS ECS.

- **p50 1.5s** voice AI response latency
- **−70% DOM CPU** via MutationObserver in the headless bot
- **2GB RAM saved** per session, via auto-shutdown
- **AWS ECS** with dual-Docker CI/CD and ECR versioning

### Hodos — Previous Venture

*Co-Founder · Mar 2025 – Jul 2025 · [hodosindia.com](https://www.hodosindia.com)*

B2B SaaS that audits corporate travel expenses against company policy. Selected for AWS Activate and Microsoft for Startups, and featured on G2 and Product Hunt.

- Built a multi-tenant RAPTOR retrieval engine with isolated policy trees, validated across 3 companies.
- Built a 4-hop reasoning pipeline with confidence-gated aggregation.
- Secured and declined a Rs. 11L angel offer for 15% equity on a $1M–$2M raise.

Results:

- **95%+ accuracy**: verdict accuracy on pilot insurance claims
- **Zero leakage**: isolated policy trees across 3 tenant companies
- **AWS & Microsoft**: selected for AWS Activate and Microsoft for Startups
- **G2 & Product Hunt**: featured launches that validated product-market fit

## Featured Projects

Recent work in voice AI, RAG systems and applied AI, plus earlier analytics and automation projects.

### voicedecide: Training-Free Decisions on Audio

*Latest · Open source · PyPI · EmbeddingGemma 2 · Voice AI · Apache 2.0*

[Code](https://github.com/2004Snehal/voicedecide) · [PyPI](https://pypi.org/project/voicedecide/) · [Kaggle notebook](https://www.kaggle.com/code/palsnehal004/embeddinggemma-2-as-a-training-free-voice-jev?scriptVersionId=363227677)

Python library for call routing and spoken language identification on Google DeepMind's EmbeddingGemma 2. A clip is embedded once and compared with every option, either written descriptions (zero-shot) or prototypes averaged from about 10 labeled clips (few-shot). It returns a probability per option and an act / confirm / escalate action a voice pipeline can branch on. No fine-tuning and no text generation. Grew out of my Kaggle experiment on the model as a voice decision layer.

Pipeline: Audio clip → EmbeddingGemma 2 (frozen) → Cosine → τ → softmax → act / confirm / escalate.

- **One embedding, many questions**: route and language from a single pass, with per-stage latency.
- **Calibrated actions**: `fit()` picks τ and act / confirm thresholds on held-out clips.
- **Built-in language-ID pack**: English, Hindi, Bengali, Tamil, Telugu, Marathi tested; untested languages warn.

### Hodos RAG Microservice: RAPTOR + Multi-Hop Policy Audit

*FastAPI · RAPTOR · Multi-hop RAG · Ollama · Redis*

[Code](https://github.com/2004Snehal/hodos_microservice_rag) · [Benchmarks](https://github.com/2004Snehal/hodos_microservice_rag/blob/main/docs/benchmarks.md)

Enterprise RAG service that reads corporate travel policies and audits expense bills against them. Policies become hierarchical RAPTOR trees; multi-hop retrieval gathers multi-clause rules; bills are routed by a CNN to OCR or a local VLM, and each claim gets a pass / fail / needs-review verdict with exact citations and a confidence score.

Pipeline: Bill OCR / VLM routing → RAPTOR tree (GMM + BIC) → Multi-hop retrieval → Tuple cache + audit log.

- **0.61 → 0.91** context recall
- **0.93** faithfulness
- **340 → 106ms** average latency with cache (70% hit rate)

RAGAS scores by pipeline stage (40-question frozen policy QA set):

| Stage | Context recall | Context precision | Faithfulness | Answer relevancy |
| --- | --- | --- | --- | --- |
| Simple RAG | 0.61 | 0.74 | 0.88 | 0.79 |
| + Multi-hop | 0.83 | 0.69 | 0.90 | 0.85 |
| + RAPTOR | 0.91 | 0.77 | 0.93 | 0.88 |

### Agentic GenAI Analytics Dashboard

*GenAI · LangGraph, Text-to-SQL, ChromaDB, RAG, Star Schema · [Code](https://github.com/2004Snehal/Ekta)*

Bronze at the General Championship Data Analytics Competition (Frammer.com), as Vice Captain. Co-architected a dashboard combining NLQ, a KPI Lab and an Insight Narrator on a star schema. A 9-stage LangGraph KPI agent with a 3-layer evaluator cut noise 40–50%, and a Text-to-SQL RAG over 3 ChromaDB stores lifted accuracy from 64% to 91% with 30% fewer tokens.

### Business Revenue Optimization

*Business Analytics · Python, XGBoost, LightGBM, SHAP, Data Analytics, Business Intelligence*

Comprehensive data analytics project for ElectroMart analyzing marketing effectiveness, customer behavior, and revenue optimization. Led market analysis using advanced ML models including XGBoost and LightGBM with SHAP analysis for actionable business insights.

### Text-to-3D Model Generation

*AI/ML · OpenAI SHAP-E, Python, 3D Modeling, Machine Learning, Computer Graphics · [Code](https://github.com/2004Snehal/3d-model-generation-shape) · [Demo](https://youtu.be/ym_xpzOyj_8)*

Advanced 3D model generation system using OpenAI's SHAP-E framework. Built an intuitive interface for converting text descriptions into detailed 3D models with real-time rendering and export capabilities.

### Automated Book Publication System

*Automation · Python, Automation, Publishing Workflow, Document Processing, API Integration · [Code](https://github.com/2004Snehal/AutomatedBookPublicationWorkflow) · [Demo](https://youtu.be/TUT97ng8cmk)*

End-to-end automation system for book publishing workflow including manuscript processing, formatting, cover generation, and distribution management. Streamlined the entire publishing pipeline for efficiency and quality.

### RAG Latency Optimization

*AI/ML · Python, Gen-AI, RAG · [Code](https://github.com/2004Snehal/RAG_Optimization) · [Report](https://github.com/2004Snehal/RAG_Optimization/blob/main/README.md#structured-report)*

Built a baseline RAG pipeline and optimized it for latency using embedding caching, parallel processing and other optimization strategies.

## Major Achievements

Competitions, olympiads and startup programs.

- **Y Combinator Startup School** (Top 20K): selected out of 20,000 applicants; won $5,000 AWS and $1,000 Azure credits.
- **GC Data Analytics Bronze**: Bronze at the General Championship Data Analytics Competition (Frammer.com) as Vice Captain.
- **Codeforces Specialist** (1400+): peak rating above 1400 in competitive programming.
- **INMO Camp 2021**: cleared regional-level IOQM 2021 (RMO equivalent) and attended the Indian National Maths Olympiad camp.
- **Open IIT Supply Chain** (2× Bronze): won Bronze twice; Vice Captain for Inter-Hall Data Analytics 2026.
- **NTSE Stage 1** (Rank 13): ranked 13th in the state-level NTSE Stage 1 exam; also part of NSO Table Tennis.

At a glance: 1 arXiv paper · 1 startup founded · 4 internships · Top 1% in JEE Advanced 2023.

## Resume

[View the CV on Google Drive](https://drive.google.com/drive/folders/1NgWxgX4_aqREwa1f92m1Jmgd-SprJUI3?usp=drive_link) (updated 2026).

- **Education**: IIT Kharagpur
- **Experience**: GenAI, startup & research
- **Skills**: LLM agents, RAG, ML, backend
- **Languages**: English, Hindi, Bengali

Includes: complete academic background; Purplle, CoralComp and Hodos experience; research internships and arXiv publication; technical skills and competencies; leadership positions and awards.

## Let's Connect

Interested in collaboration, opportunities, or just want to chat about tech and entrepreneurship?

- **Email**: [palsnehal004@gmail.com](mailto:palsnehal004@gmail.com)
- **LinkedIn**: [snehal-pal-8274403aa](https://www.linkedin.com/in/snehal-pal-8274403aa/)
- **GitHub**: [2004Snehal](https://github.com/2004Snehal)
- **Schedule a meeting**: [Calendly, 30 min](https://calendly.com/palsnehal004/30min)

What I'm looking for:

- Product management and analytics opportunities
- AI research collaborations and projects
- Startup mentorship and entrepreneurship discussions
- Speaking opportunities at tech events

---

© 2026 Snehal Pal. This is the Markdown version of https://snehalpal.vercel.app/ for LLMs and AI answer engines. A short summary is at [/llms.txt](https://snehalpal.vercel.app/llms.txt).
