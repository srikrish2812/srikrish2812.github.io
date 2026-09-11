export interface Experience {
  date: string; title: string; company: string; description?: string;
  advisor?: string; manager?: string; companyUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "Aug 2025—Present",
    title: "Ph.D. Graduate Student Researcher",
    company: "Intelligent Computing for Clinical Imaging Lab, University of Pittsburgh",
    description: "Researching multimodal representation learning and modeling temporal DCE-MRI, spatial mammography, and inter-modal interactions for breast cancer recurrence prediction.",
    advisor: "Dr. Shandong Wu",
    companyUrl: "https://www.aimi.pitt.edu/",
  },
  {
    date: "Sep 2024—May 2025",
    title: "Graduate Research Assistant — NLP Researcher",
    company: "University of Arizona",
    description: "Developed an automated feedback loop that restores missing biomedical entities in generative-AI text simplification, improving content overlap and semantic alignment.",
    advisor: "Dr. Gondy Leroy",
    companyUrl: "https://eller.arizona.edu/people/gondy-leroy",
  },
  {
    date: "Aug 2023—Apr 2024",
    title: "Associate Consultant — AI Engineer",
    company: "WML IT Solutions Pvt Ltd",
    description: "Engineered a multi-source RAG system and a natural-language-to-SQL agent across relational databases, non-relational databases, and PDF documents.",
  },
  {
    date: "Oct 2022—Aug 2023",
    title: "Chanakya Fellow — Computer Vision Engineer",
    company: "IIT Tirupati Navavishkar I-Hub Foundation",
    description: "Built and deployed a portable real-time tiny-drone detection system using an optimized YOLOv8-nano model and Raspberry Pi 4.",
  },
  {
    date: "May 2022—Aug 2023",
    title: "Computer Vision Researcher",
    company: "Visual Information and Signal Analysis Lab, IIT Tirupati",
    description: "Studied data augmentation and super-resolution for tiny-object detection, culminating in a B.Tech. thesis and a synthetic drone-data pipeline.",
    advisor: "Dr. Rama Krishna Sai Gorthi",
  },
];
