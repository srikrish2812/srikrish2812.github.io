export interface News { date: string; title: string; description: string; link?: string; }

export const newsData: News[] = [
  { date: "August 2025", title: "Started my Ph.D. at the University of Pittsburgh", description: "I joined the Intelligent Systems program to work on multimodal learning, foundation models, and reinforcement learning with Dr. Shandong Wu." },
  { date: "April 2025", title: "Paper accepted at IntelliSys 2025", description: "Our work on automated feedback loops for protecting generative-AI text simplification from information loss was accepted at the Intelligent Systems Conference.", link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=uoechdIAAAAJ&citation_for_view=uoechdIAAAAJ:u5HHmVD_uO8C" },
  { date: "August 2023", title: "Started my M.S. at the University of Arizona", description: "I joined the Information Science: Machine Learning program and later conducted NLP research in the Deep Target research group." },
];
