export interface ResumeData {
  name: string;
  role: string;
  email: string;
  linkedin: string;
  github: string;
  website: string;
  summary: string;
  education: {
    degree: string;
    institution: string;
    year: string;
    gpa: string;
    coursework: string[];
  }[];
  experience: {
    title: string;
    company: string;
    period: string;
    description: string;
    achievements: string[];
  }[];
  skills: {
    languages: string[];
    frameworks: string[];
    techTools: string[];
  };
  projects: {
    name: string;
    description: string;
    technologies: string[];
    period: string;
    achievements: string[];
    link?: string;
  }[];
  leadership: {
    organization: string;
    role: string;
    period: string;
    description: string;
    achievements: string[];
  }[];
}

export const resume: ResumeData = {
  name: "Jaival Patel",
  role: "Software Engineer | Data Scientist",
  email: "jaival.patel602@gmail.com",
  linkedin: "linkedin.com/in/jaival-patel602",
  github: "github.com/jaival0602",
  website: "",
  summary:
    "Software Engineer with an M.S. in Electrical and Computer Engineering (Machine Learning & Data Science) from USC. Experience training and fine-tuning multimodal LLMs, building data/ML pipelines, and deploying scalable systems on GCP and AWS.",
  education: [
    {
      degree:
        "Master of Science in Electrical and Computer Engineering (Machine Learning and Data Science)",
      institution: "University of Southern California",
      year: "Aug 2022 – May 2024",
      gpa: "3.4/4.0",
      coursework: [
        "Machine Learning",
        "Deep Learning",
        "Cloud Computing",
        "Object Oriented Programming",
        "Database Systems",
      ],
    },
    {
      degree:
        "Bachelor of Engineering in Electronics and Telecommunication Engineering",
      institution: "University of Mumbai",
      year: "Aug 2018 – May 2022",
      gpa: "3.7/4.0",
      coursework: [
        "Artificial Intelligence and Machine Learning (IBM) – Minor GPA 3.9/4.0",
      ],
    },
  ],
  experience: [
    {
      title: "Software Engineer",
      company: "Glennium, LLC",
      period: "May 2025 – Present",
      description:
        "Building multimodal LLM annotation and response systems with scalable Cloud Run services on GCP.",
      achievements: [
        "Trained and fine-tuned a custom multimodal LLM for text, vocal and facial data annotation and chatbot responses, improving annotation throughput and accuracy by 35%",
        "Developed an LLM-based scoring system that rates different facial behavior from 0 to 100, stores segment results in BigQuery, and filters top emotions via SQL",
        "Deployed two GCP Cloud Run services for annotation and response generation, enabling scalable, low-latency experimentation",
      ],
    },
    {
      title: "Data Scientist",
      company: "Gino Corporation",
      period: "Oct 2023 – Aug 2024",
      description:
        "Built automations, ETL pipelines, and analytics to improve e-commerce reporting and inventory forecasting.",
      achievements: [
        "Engineered an automation program using Pandas, cutting report generation time by 96% and enhancing system efficiency by 30%",
        "Built an ETL pipeline to migrate 2000+ products from a legacy database to Odoo, improving data reliability and scalability",
        "Developed a Python + MySQL module to analyze top-selling products and forecast inventory, integrated with Odoo, reducing task runtime by 40%",
      ],
    },
    {
      title: "Data Scientist Intern",
      company: "Roombae",
      period: "Jul 2021 – Sep 2021",
      description:
        "Implemented a recommendation system and NLP-based matching for overseas study flatmates.",
      achievements: [
        "Implemented an advanced recommendation system using Python and PostgreSQL for matching overseas study flatmates",
        "Applied TF-IDF and Word Embeddings to capture 90%+ of user intent categories for a hybrid filtering system",
        "Delivered 91% testing accuracy using regression algorithms and a small neural network in PyTorch",
      ],
    },
    {
      title: "Software Developer Intern",
      company: "Pheme Software Pvt. Ltd",
      period: "Jun 2021 – Jul 2021",
      description:
        "Led a small team to build a virtual workspace platform with a scalable backend.",
      achievements: [
        "Led a team of 5 to design a Virtual Workspace business platform; achieved a score of 88/100 using Agile methodology",
        "Built and integrated the backend using Django REST Framework for scalable data communication",
      ],
    },
  ],
  skills: {
    languages: [
      "Python",
      "C++",
      "SQL",
      "R",
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
    ],
    frameworks: [
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "LangChain",
      "FastAPI",
      "JAX",
    ],
    techTools: [
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Airflow",
      "Apache Spark",
      "DVC",
      "MLflow",
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "BigQuery",
      "AWS",
      "GCP",
      "Docker",
      "Kubernetes",
      "Jenkins",
      "Excel",
      "Tableau",
      "Power BI",
      "Looker",
      "Mixpanel",
      "Git",
      "DagsHub",
      "JIRA",
    ],
  },
  projects: [
    {
      name: "RAG-Based Mental Health Chatbot",
      description:
        "Optimized a RAG system using Azure PostgreSQL and OpenAI embeddings with strong retrieval metrics and low latency.",
      technologies: [
        "FastAPI",
        "Azure PostgreSQL",
        "OpenAI Embeddings",
        "LangChain",
        "Docker",
        "Azure App Service",
      ],
      period: "Dec 2024 – Feb 2025",
      achievements: [
        "Achieved 98.33% unique document retrieval and 0.8127 semantic coherence score",
        "Reduced response latency to ~1.1s through FastAPI and optimized chunking/embeddings",
        "Deployed on Azure App Service with Docker; measured 76% retrieval precision and 100% consistency",
      ],
    },
    {
      name: "Real-Time Network Security Intrusion Detection",
      description:
        "Built and deployed ML-based IDS with automated training/testing and CI/CD on AWS SageMaker.",
      technologies: [
        "Python",
        "Scikit-learn",
        "AWS SageMaker",
        "Pandas",
      ],
      period: "Sep 2024 – Nov 2024",
      achievements: [
        "Built Logistic Regression and Random Forest detectors; reached 95% detection accuracy",
        "Automated training/testing/deployment with a CI/CD pipeline on AWS SageMaker",
      ],
    },
    {
      name: "E-Commerce Management System",
      description:
        "Designed high-throughput services for product, order, and user flows with robust data integrity.",
      technologies: ["Java", "Hibernate ORM", "MySQL", "Docker"],
      period: "Jul 2024 – Sep 2024",
      achievements: [
        "Handled up to 10,000 req/s across product, order, and user services",
        "Reduced checkout errors by 25% with real-time inventory validation",
        "Optimized queries and models using Hibernate ORM + MySQL",
      ],
    },
    {
      name: "Fall Detection Device (Research)",
      description:
        "Combined wearable sensing with computer vision (YOLOv2) for fall detection.",
      technologies: [
        "NodeMCU",
        "ADXL345",
        "Python",
        "PyTorch YOLOv2",
        "OpenCV",
        "C++",
      ],
      period: "Jul 2021 – May 2022",
      achievements: [
        "Combined sensor orientation (NodeMCU + ADXL345) with YOLOv2 video detection for improved accuracy",
      ],
    },
  ],
  leadership: [],
};
