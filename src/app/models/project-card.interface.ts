export interface TechStackItem {
  logoUrl: string;
}

export interface ProjectCard {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  techStack: TechStackItem[];
  websiteUrl: string;
  githubUrl: string;
}
