type ContentLabel = "text" | "video" | "image" | "code";

type ProjectStatus = "In Progress" | "Finished";

export interface Project {
  projectId: string;
  title: string;
  duration: string;
  image: string;
  status: ProjectStatus;
  techStack: string[];
  category: string;
  description: string;
  startedDate: string;
  links: {
    label: string;
    href: string;
  }[];
  pin: boolean;
  info: { label: ContentLabel; content: string }[];
}
