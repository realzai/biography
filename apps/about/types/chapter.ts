// types/chapter.ts
export type Chapter = {
  id: string;
  title: string;
  subtitle?: string;
  period: string;
  location: string;
  keyMemory?: string;
  lessonLearned?: string;
  reflection?: string;
  keyInsight?: string;
  philosophy?: string;
  content: string[];
  image?: string;
  imageAlt?: string;
  bgColor: "light" | "dark" | "default";
};
