export interface Education {
  year: string; institution: string; degree: string; advisor?: string; thesis?: string; thesisUrl?: string;
}

export const educationData: Education[] = [
  { year: "2025—Present", institution: "University of Pittsburgh", degree: "PhD in Intelligent Systems", advisor: "Dr. Shandong Wu" },
  { year: "2023—2025", institution: "University of Arizona", degree: "M.S. in Information Science: Machine Learning (GPA: 4.00/4.00)", advisor: "Dr. Gondy Leroy" },
  { year: "2019—2023", institution: "Indian Institute of Technology(IIT) Tirupati", degree: "B.Tech. in Electrical Engineering (GPA: 8.84/10.00)", advisor: "Dr. Rama Krishna Sai Gorthi", thesis: "Efficient Data Augmentation for Tiny Drone Detection System" },
];
