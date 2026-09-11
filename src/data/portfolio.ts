export interface Portfolio {
  title: string; description: string; technologies?: string[]; imageUrl?: string;
  projectUrl?: string; codeUrl?: string;
}

export const portfolioData: Portfolio[] = [
  {
    title: "ReasonLLM: Enhancing Mathematical Reasoning with GRPO",
    description: "A GRPO training pipeline for Gemma 3 on GSM8K with composite rewards for format, reasoning, and answer correctness, improving zero-shot accuracy while reducing response errors.",
    technologies: ["PyTorch", "Transformers", "Unsloth", "Reinforcement Learning"],
  },
  {
    title: "Biomedical Knowledge Agent",
    description: "An agentic RAG system over PubMed Central that routes between domain-specific vector search and external retrieval while preserving scientific-document structure.",
    technologies: ["LangGraph", "LangChain", "Weaviate", "PubMedBERT"],
  },
  {
    title: "AI Hedge Fund",
    description: "A multi-agent trading simulator with specialized valuation, sentiment, and technical-analysis agents, a vectorized backtester, and quantitative risk controls. Awarded third place at Hack Arizona.",
    technologies: ["Python", "FastAPI", "LangGraph", "Amazon Bedrock"],
  },
];
