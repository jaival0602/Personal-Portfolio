export interface Project {
  name: string;
  description: string;
  technologies: string[];
  period: string;
  achievements: string[];
  link?: string;
  githubUrl?: string;
  status: "completed" | "in-progress" | "planned";
}

export const projects: Project[] = [
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
    status: "completed",
  },
  {
    name: "Real-Time Network Security Intrusion Detection",
    description:
      "Built and deployed ML-based IDS with automated training/testing and CI/CD on AWS SageMaker.",
    technologies: ["Python", "Scikit-learn", "AWS SageMaker", "Pandas"],
    period: "Sep 2024 – Nov 2024",
    achievements: [
      "Built Logistic Regression and Random Forest detectors; reached 95% detection accuracy",
      "Automated training/testing/deployment with a CI/CD pipeline on AWS SageMaker",
    ],
    status: "completed",
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
    status: "completed",
  },
];
