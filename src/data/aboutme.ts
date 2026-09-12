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
  description: "I am a second year PhD student in the Intelligent Systems program at the University of Pittsburgh's School of Computing and Information. My research primarily focuses on developing AI models that use multimodal healthcare data to improve patient care. Broadly, I work on <strong>multimodal learning</strong>, <strong> multi-agent systems</strong>, <strong>vision and vision-language models</strong>. I am fortunate to be advised by <a href='https://www.aimi.pitt.edu/people/ant-26'>Dr. Shandong Wu</a>. In addition to this, I also work on visual reasoning agent systems that can understand and interpret medical images. <br/><br />Some research questions I am exploring are: <ul style=\"list-style-type:disc; margin-left:20px;\"><li>How can multimodal data be integrated to build robust models to improve patient care?</li><li>How to optimally adapt foundation model representations for healthcare domain?</li><li>How to effectively fuse information from multiple modalities?</li></ul><br /> I did my Master's in Information Scince: Machine Learning from University of Arizona and worked in the Deep Target NLP research group led by <a href='https://sites.arizona.edu/deeptarget-nlp-lab/'>Dr. Gondy Leroy</a>. During this time, I developed an automated feedback loop to tackle information loss in generative-AI text simplification. <br /><br /> I did my Bachelor's in Electrical Engineering at the Indian Institute of Technology(IIT), Tirupati with a focus on machine learning and computer vision. During this time, I researched data augmentation techniques and developed edge models for real-time drone detection under the guidance of <a href='https://ee.iittp.ac.in/Faculty_Rkg.html'>Dr. Rama Krishna Sai Gorthi</a>.",
  email: "abn80 [AT] pitt [DOT] edu",
  imageUrl: "/images/abhay.png",
  cvUrl: "/files/abhay-nandiraju-resume.pdf",
  googleScholarUrl: "https://scholar.google.com/citations?user=uoechdIAAAAJ",
  githubUsername: "srikrish2812",
  linkedinUsername: "abhaynandiraju",
  twitterUsername: "capabhay",
  institutionUrl: "https://www.pitt.edu",
};
