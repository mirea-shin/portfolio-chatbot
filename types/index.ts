export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

export interface Project {
  name: string;
  description: string;
  tech: string[];
  role: string;
  links?: {
    client?: string;
    server?: string;
    demo?: string;
  };
  status: 'active' | 'in-progress' | 'planned';
  details?: {
    period?: string;
    highlights: string[];
    techStack?: {
      category: string;
      items: string[];
    }[];
  };
}

export interface Experience {
  company: string;
  position: string;
  period: string;
  team: string;
  tasks: string[];
}

export interface PortfolioData {
  name: string;
  title: string;
  location: string;
  intro: string;
  contact: {
    email: string;
    github: string;
    phone: string;
  };
  skills: {
    category: string;
    items: {
      level: 'main' | 'experienced';
      names: string[];
    }[];
  }[];
  projects: Project[];
  experience: Experience[];
}
