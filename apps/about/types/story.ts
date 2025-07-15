export type Chapter = {
  id: string;
  title: string;
  subtitle?: string;
  period: string;
  location: string;
  message: { label: string; content: string };
  content: string[];
  image?: string;
  imageAlt?: string;
  bgColor: string;
};

export type Introduction = {
  quote: string;
  content: string[];
};

export type Epilogue = {
  title: string;
  content: string[];
};
