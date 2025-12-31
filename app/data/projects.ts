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
    status: "completed",
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
    status: "completed",
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
    status: "completed",
  },
];
