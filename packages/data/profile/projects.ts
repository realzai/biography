import { Project } from "./types";

const BUREMSE_GPT: Project = {
  projectId: "burmese-gpt",
  title: "Burmese-GPT",
  image: "/placeholder.svg",
  pin: true,
  techStack: ["python", "llms", "pytorch", "generative-ai", "open-sourced"],
  description:
    "Opensourced LLM (120M-500M parameters) model for Burmese Language with low level pytorch implementation. ",
  info: [
    {
      label: "text",
      content:
        "Started this project at December to make the first LLM for the Burmese Language. I was the one who started the project but it was also the time when I had a lot of issues in my head. I was still refugee, working on my own startup, had to move to anther city and didn't have enough electricity and internet to work on the project. For that reason, one of my friend has done it first. I am really happy for him too. He got also interviewed and he got the best opportunities that I didn't get.",
    },
    {
      label: "image",
      content: "",
    },
    {
      label: "text",
      content:
        "What would it take to get the first GPT for the Burmese Language. It's kinda obvious, the data. It's very rare to collect data especially when there is no organization in Burma who wants to maintain the language.",
    },
    { label: "text", content: "" },
  ],
  duration: "7 months",
  startedDate: "December 2023",
  category: "generative-ai",
  status: "In Progress",
  links: [
    {
      label: "Source Code",
      href: "https://github.com/realzai/burmese-gpt",
    },
    {
      label: "Opensourced Model",
      href: "https://huggingface.co/zaibutcooler/burmese-gpt",
    },
    {
      label: "Huggingface Space",
      href: "https://huggingface.co/spaces/zaibutcooler/burmese-gpt",
    },
    {
      label: "Wiki Dataset",
      href: "https://huggingface.co/datasets/zaibutcooler/wiki-burmese",
    },
    {
      label: "Mini Dataset",
      href: "https://huggingface.co/datasets/zaibutcooler/mini-burmese",
    },
  ],
};

export const projects: Project[] = [BUREMSE_GPT];

export default projects;
