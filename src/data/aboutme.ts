export interface AboutMe {
  name: string; title: string; institution: string; description: string; email: string;
  imageUrl?: string; blogUrl?: string; cvUrl?: string; googleScholarUrl?: string;
  twitterUsername?: string; githubUsername?: string; linkedinUsername?: string;
  funDescription?: string; secretDescription?: string; altName?: string; institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Abhay Nandiraju",
  title: "Ph.D. Student in Intelligent Systems",
  institution: "University of Pittsburgh",
  description: "I work on <strong>multimodal learning</strong> and <strong>foundation models</strong> with <a href='https://www.aimi.pitt.edu/people/ant-26'>Dr. Shandong Wu</a>. I am interested in adapting reinforcement learning techniques to my research, decomposing complex problems into tractable sub-problems, and understanding deep learning architectures from both their theoretical foundations and practical implementations.",
  email: "abn80@pitt.edu",
  imageUrl: "/images/abhay.png",
  cvUrl: "/files/abhay-nandiraju-resume.pdf",
  googleScholarUrl: "https://scholar.google.com/citations?user=uoechdIAAAAJ",
  githubUsername: "srikrish2812",
  linkedinUsername: "abhaynandiraju",
  twitterUsername: "capabhay",
  institutionUrl: "https://www.pitt.edu",
  funDescription: "Be Polymath, Be Multi-Dimensional.",
};
