export interface Publication {
  year: string; conference: string; title: string; authors: string; paperUrl?: string;
  codeUrl?: string; bibtex?: string; tldr?: string; imageUrl?: string; award?: string;
}

export const publicationData: Publication[] = [
  {
    year: "2025",
    conference: "Intelligent Systems Conference (IntelliSys)",
    title: "Automated Feedback Loops to Protect Text Simplification with Generative AI from Information Loss",
    authors: "Abhay Kumara Sri Krishna Nandiraju, Gondy Leroy, David Kauchak, Arif Ahmed",
    paperUrl: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=uoechdIAAAAJ&citation_for_view=uoechdIAAAAJ:u5HHmVD_uO8C",
    tldr: "An automated feedback-loop framework that identifies and restores missing biomedical information in generative-AI text simplification.",
  },
];
