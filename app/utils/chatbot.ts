// Rate limiting for API calls
class RateLimiter {
  private requests: number[] = [];
  private readonly maxRequests = 15;
  private readonly windowMs = 60000; // 1 minute

  canMakeRequest(): boolean {
    const now = Date.now();
    this.requests = this.requests.filter((time) => now - time < this.windowMs);
    return this.requests.length < this.maxRequests;
  }

  recordRequest(): void {
    this.requests.push(Date.now());
  }
}

const rateLimiter = new RateLimiter();

// Helper function to handle natural conversation patterns
function handleNaturalConversation(input: string): string | null {
  const lowerInput = input.toLowerCase().trim();

  // Hiring-related questions
  if (
    lowerInput.match(
      /(will you hire him|would you hire him|should i hire him|should we hire him|hire him|hiring him|recommend him|would you recommend him)/
    )
  ) {
    return "I'm an AI assistant, so I can't make hiring decisions, but if I were you, I'd definitely hire Jaival! 😉 His skills in Python, C++, data engineering, and ML systems speak for themselves.";
  }

  // Greetings
  if (
    lowerInput.match(
      /^(hi|hello|hey|good morning|good afternoon|good evening|howdy|howdy hey)\.?$/
    )
  ) {
    return "Hi there! I'm here to help you learn about Jaival Patel's background. What would you like to know about his skills or experience?";
  }

  // Thanks
  if (
    lowerInput.match(/^(thank you|thanks|thank you so much|thanks a lot)\.?$/)
  ) {
    return "You're welcome! Feel free to ask me anything else about Jaival's projects, skills, or experience.";
  }

  // How are you
  if (lowerInput.match(/^(how are you|how's it going|how are things)\.?\??$/)) {
    return "I'm doing well, thanks for asking! I'm here to help you learn about Jaival's professional background. What interests you most?";
  }

  // Goodbye
  if (
    lowerInput.match(/^(bye|goodbye|see you|take care|have a good day)\.?$/)
  ) {
    return "Thanks for chatting! Hope you learned something useful about Jaival's background.";
  }

  // Positive responses
  if (
    lowerInput.match(
      /^(ok|okay|sure|great|awesome|cool|nice|interesting|wow|amazing)\.?$/
    )
  ) {
    return "Great! What else would you like to know about Jaival's experience or projects?";
  }

  // Affirmative responses
  if (lowerInput.match(/^(yes|yeah|yep|yup|yee)\.?$/)) {
    return "Perfect! What specific aspect of Jaival's background would you like to explore?";
  }

  return null; // No natural conversation pattern detected
}

// Generate AI response using Server-Side Proxy
export async function generateAIResponse(userInput: string): Promise<string> {
  // Check for natural conversation patterns first
  const naturalResponse = handleNaturalConversation(userInput);
  if (naturalResponse) {
    return naturalResponse;
  }

  // Check rate limiting
  if (!rateLimiter.canMakeRequest()) {
    return "I'm receiving too many requests right now. Please try again in a minute.";
  }

  try {
    rateLimiter.recordRequest();

    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: userInput }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      if (response.status === 503) {
        return "AI assistant is not initialized. Please check your API key configuration.";
      }
      throw new Error(errorData.error || "Failed to fetch response");
    }

    const data = await response.json();
    return (
      data.response ||
      "I'm having trouble generating a response right now. Please try again."
    );
  } catch (error) {
    console.error("Chat API error:", error);
    return "I'm having trouble connecting to the AI service right now. Please try again in a moment.";
  }
}

// Helper function to check if input is resume-related
export function isResumeRelated(input: string): boolean {
  const resumeKeywords = [
    // Natural conversation patterns (always allowed)
    "hello",
    "hi",
    "hey",
    "thank you",
    "thanks",
    "bye",
    "goodbye",
    "how are you",
    "how's it going",
    "nice to meet you",
    "good morning",
    "good afternoon",
    "good evening",
    "please",
    "sorry",
    "excuse me",
    "ok",
    "okay",
    "yes",
    "no",
    "sure",
    "great",
    "awesome",
    "cool",
    "nice",
    "interesting",
    "wow",
    "amazing",

    // Hiring-related questions
    "hire",
    "hiring",
    "hire him",
    "hiring him",
    "will you hire",
    "would you hire",
    "should i hire",
    "should we hire",
    "recommend",
    "would you recommend",
    "recommend him",
    "employment",
    "recruiting",
    "recruit",

    // Basic resume topics
    "skill",
    "skills",
    "experience",
    "project",
    "projects",
    "education",
    "work",
    "job",
    "career",
    "programming",
    "development",
    "developer",
    "university",
    "degree",
    "leadership",
    "organization",
    "technology",
    "technologies",
    "built",
    "created",
    "developed",
    "studied",
    "studies",

    // Technical skills
    "javascript",
    "typescript",
    "python",
    "swift",
    "ruby",
    "golang",
    "sql",
    "java",
    "html",
    "css",
    "react",
    "next.js",
    "node.js",
    "flask",
    "tailwind",
    "angular",
    "bootstrap",
    "firebase",
    "postgresql",
    "mysql",
    "git",
    "github",
    "figma",
    "unity",
    "vercel",
    "postman",
    "aws",
    "azure",
    "ec2",
    "s3",
    "jinja2",
    "sqlalchemy",

    // Specific references
    "jaival",
    "patel",
    "usc",
    "los angeles",
    "glennium",
    "gino",
    "roombae",
    "pheme",
    "gcp",
    "cloud run",
    "bigquery",
    "rag",
    "fastapi",
    "azure",
    "sagemaker",

    // Pronouns and natural language
    "he",
    "his",
    "him",
    "what does",
    "tell me about",
    "what is",
    "who is",
    "what are",
    "how does",
    "where did",
    "when did",
    "why did",
    "can you",
    "could you",

    // Professional terms
    "engineer",
    "student",
    "full-stack",
    "fullstack",
    "backend",
    "frontend",
    "web",
    "mobile",
    "software",
    "computer science",
    "cs",
    "app",
    "application",
    "website",
    "system",
    "platform",

    // Common question patterns
    "background",
    "about",
    "do",
    "does",
    "working",
    "major",
    "field",
    "area",
    "expertise",
    "specialization",
    "focus",
    "accomplishment",
    "accomplishments",
    "achievement",
    "achievements",
    "responsible",
    "responsibilities",
    "role",
    "roles",
    "position",
    "positions",

    // Company/organization names
    "computer science and engineering",
    "cse department",
    "innovative data intelligence",
    "research lab",
    "libraries",
    "print",
    "design",
    "studios",
    "queue",
    "management",
    "inventory",
    "vendor",
    "grade",
    "distribution",
    "gpa",

    // Project-related terms
    "tool",
    "tools",
    "database",
    "schema",
    "crud",
    "api",
    "ui",
    "ux",
    "responsive",
    "dashboard",
    "real-time",
    "intrusion",
    "detection",
    "llm",
    "embeddings",
    "retrieval",
    "vector",

    // Education-related
    "coursework",
    "machine learning",
    "deep learning",
    "cloud computing",
    "object oriented",
    "database systems",
    "master",
    "bachelor",
    "degree",
    "gpa",

    // Leadership and achievements
    "team",
    "officer",
    "officers",
    "events",
    "sponsorship",
    "sponsorships",
    "member",
    "members",
    "committee",
    "director",
    "advisor",
    "senior",
    "engagement",
    "incubators",
    "workshops",

    // Contact and social
    "contact",
    "email",
    "linkedin",
    "github",
    "website",
    "portfolio",
    "reach",
    "connect",
  ];

  const lowerInput = input.toLowerCase();
  return resumeKeywords.some((keyword) => lowerInput.includes(keyword));
}
