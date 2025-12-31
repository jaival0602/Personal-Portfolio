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
      company: "Kopacetic, Inc.",
      period: "May 2025 – Present",
      description:
        "Built a multimodal LLM service for a meeting-intelligence platform that ingests vocal and facial data.",
      achievements: [
        "Built a multimodal LLM service for a meeting-intelligence platform that ingests vocal and facial data and auto-annotates, scores behaviors from 0 to 100, streams results to BigQuery and is deployed on GCP Cloud Run, improving annotation accuracy by 35%",
        "Led a team of 3 to build an Agenda-Checker Natural Language Processing (NLP) pipeline using LLMs plus rule-based checks to extract agenda items and completion signals, and delivered a Node.js REST API and a React dashboard for agenda tracking",
        "Designed GKE Autopilot to cut cold-start tails and enable fine-grained autoscaling with Terraform + Helm, Workload Identity, NetworkPolicies, and HPA, and a staging cluster via Argo CD",
      ],
    },
    {
      title: "Data Scientist",
      company: "Gino Corporation",
      period: "Oct 2023 – Aug 2024",
      description:
        "Automated weekly sales and inventory reporting for ops leadership by replacing manual spreadsheets.",
      achievements: [
        "Automated weekly sales and inventory reporting for ops leadership by replacing manual spreadsheets with a Python plus MySQL program and a scheduled validation, cutting report generation time by 96%",
        "Built an Extract, Transform, Load (ETL) pipeline to migrate 2,000+ products into Odoo with field mapping, deduplication, and pre and post-load checks for reliability, plus batched, incremental loads and indexed queries for scalability",
        "Developed an inventory-forecasting Machine Learning (ML) module on AWS SageMaker using XGBoost with a custom ARIMA baseline, achieving 12% lower WAPE and 3% bias than baseline on 2 to 4 week horizons across top SKUs",
      ],
    },
    {
      title: "Software Developer Intern",
      company: "Pheme Software Pvt. Ltd.",
      period: "Jun 2021 – Jul 2021",
      description:
        "Engineered a FastAPI REST backend in Python for online workspace platform using SQLAlchemy and PostgreSQL.",
      achievements: [
        "Engineered a FastAPI REST backend in Python for online workspace platform using SQLAlchemy and PostgreSQL while implementing JWT auth, RBAC, and input validation, achieving 350 RPS (requests per second) and zero downtime",
        "Shipped a React and TypeScript dashboard with WebSockets for real-time workflow updates for 300 concurrent users",
      ],
    },
  ],
  skills: {
    languages: [
      "Python",
      "C++/C#",
      "HTML/CSS",
      "JavaScript",
      "TypeScript",
      "SQL",
      "Java",
    ],
    frameworks: [
      "FastAPI",
      "React",
      "Angular",
      "Airflow",
      "SQLAlchemy",
      "PyTorch",
      "scikit-learn",
      "TensorFlow",
      "NLTK",
      "JAX",
      "LangChain",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Hibernate ORM"
    ],
    techTools: [
      "PostgreSQL",
      "MongoDB",
      "Spark",
      "Redis",
      "BigQuery",
      "Tableau",
      "Power BI",
      "Git",
      "GitHub",
      "DVC",
      "AWS",
      "GCP",
      "Jira",
      "MLFlow",
      "Docker",
      "Jenkins",
      "Kubernetes",
      "Spring Boot",
    ],
  },
  projects: [
    {
      name: "Smart Supply Chain Planner – Agentic Logistics System",
      description:
        "Built a multi-agent AI system using the Model Context Protocol (MCP) to automate demand forecasting, routing, and procurement decisions.",
      technologies: [
        "MCP",
        "FastAPI",
        "LangGraph",
        "Python OR-Tools",
        "AWS ECS",
        "Lambda",
        "RDS",
        "S3",
        "Next.js",
      ],
      period: "Jul 2025 – Sep 2025",
      achievements: [
        "Built a multi-agent AI system using the Model Context Protocol (MCP) to automate demand forecasting, routing, and procurement decisions in a simulated logistics network spanning 80+ orders and 2 distribution centers",
        "Implemented autonomous agents for Demand, Inventory, Procurement with FastAPI, LangGraph, and Python OR-Tools, deployed via AWS ECS, Lambda, and RDS with S3 for data storage and a Next.js dashboard for human-in-the-loop approvals",
        "Delivered a scalable orchestration platform that reduced total route distance by 40%, cut stockouts by 30%, and lowered simulated logistics costs by 20%, while enabling real-time replanning through agentic coordination",
      ],
    },
    {
      name: "Retrieval-Augmented Generation Based Mental Health Chatbot",
      description:
        "Built a supportive mental-health chatbot with a FastAPI and Uvicorn service integrating LangChain and OpenAI to deliver fast, grounded answers.",
      technologies: [
        "FastAPI",
        "Uvicorn",
        "LangChain",
        "OpenAI",
        "Azure PostgreSQL",
        "Docker",
        "Azure App Service",
      ],
      period: "Dec 2024 – Feb 2025",
      achievements: [
        "Built a supportive mental-health chatbot with a FastAPI and Uvicorn service integrating LangChain and OpenAI to deliver fast, grounded answers, reducing median response time to 1.1s",
        "Optimized a RAG pipeline on Azure PostgreSQL with OpenAI embeddings, deployed via Docker on Azure App Service, achieving 98.33% unique document retrieval",
      ],
    },
    {
      name: "E-Commerce Management System",
      description:
        "Implemented RESTful APIs with Spring Boot for product, order, and user management, handling up to 10,000 RPS.",
      technologies: ["Spring Boot", "Java", "Hibernate ORM", "MySQL"],
      period: "Jul 2024 – Sep 2024",
      achievements: [
        "Implemented RESTful APIs with Spring Boot for product, order, and user management, handling up to 10,000 RPS",
        "Devised a shopping cart and order system with real-time inventory validation, reducing inventory update errors by 25%",
        "Designed database models using Hibernate ORM and MySQL to ensure data consistency and optimized query performance",
      ],
    },
  ],
  leadership: [],
};
