export interface TechStackItem {
  logoUrl: string;
}

export interface ProjectCard {
  id: string;
  title: string;
  description: string;
  techStack: TechStackItem[];
  websiteUrl: string;
  githubUrl: string;
}
