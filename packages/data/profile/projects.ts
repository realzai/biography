import { Project } from "./types";

const YUME: Project = {
  projectId: "yume",
  title: "Yume (夢)",
  image: "/placeholder.svg",
  pin: false,
  techStack: ["Python", "PyTorch", "HuggingFace", "LLMs"],
  description:
    "A GPT-style Japanese language model trained on anime and manga dialogues, built from scratch with PyTorch. Implements self-attention with Flash Attention support, top-k sampling, and model configurations scaling from 100M to 1B parameters. My very first deep learning project — inspired by Andrej Karpathy's nanoGPT at a time when building your own LLM from scratch was still a novel idea. This project laid the foundation for Burmese-GPT.",
  info: [
    {
      label: "text",
      content:
        "Yume was the project that started it all. In early 2023, large language models were just beginning to capture mainstream attention — ChatGPT had only been out for a few months and was still running on GPT-3.5. I wanted to understand how these models actually worked, not just use them through an API. Inspired by Karpathy's nanoGPT, I built a full transformer implementation from the ground up: self-attention, layer normalization, positional embeddings, and a training loop — all in raw PyTorch.",
    },
    {
      label: "text",
      content:
        "I chose Japanese anime and manga dialogues as the training corpus partly because I was fascinated by the language, and partly because it was a creative way to explore low-resource language modeling. The model could generate surprisingly coherent anime-style dialogue even at smaller scales. Yume taught me everything about how transformers work internally — and that understanding directly fed into Burmese-GPT, where I applied the same principles to a language that truly needed it.",
    },
  ],
  duration: "3 months",
  startedDate: "2023",
  category: "generative-ai",
  status: "Finished",
  links: [
    {
      label: "Source Code",
      href: "https://github.com/realzai/yume",
    },
    {
      label: "Opensourced Model",
      href: "https://huggingface.co/zaibutcooler/yume",
    },
    {
      label: "HuggingFace Space",
      href: "https://huggingface.co/spaces/zaibutcooler/yume",
    },
    {
      label: "Japanese Dataset",
      href: "https://huggingface.co/datasets/zaibutcooler/nihon-wiki",
    },
    {
      label: "Animanga Dataset",
      href: "https://huggingface.co/datasets/zaibutcooler/animanga-dialogs",
    },
  ],
};

const PREMERLY: Project = {
  projectId: "premerly",
  title: "Premerly",
  image: "/placeholder.svg",
  pin: false,
  techStack: ["Next.js", "TypeScript", "OpenAI", "Replicate", "Prisma", "Stripe"],
  description:
    "A full-stack AI-powered SaaS platform built for real estate professionals. Generates property descriptions, marketing content, and client communications using OpenAI, redraws floor plans and virtually stages vacant rooms through Replicate's image models, and includes an AI chat assistant, market analysis dashboard, and lead generation tools — all behind Stripe-powered subscription tiers. My first startup project, built during 2023 while simultaneously learning how LLMs worked from the inside out.",
  info: [
    {
      label: "text",
      content:
        "Premerly was my first real product — a platform that brought generative AI into real estate at a time when most agents had barely heard of ChatGPT. The idea was simple: real estate professionals spend an enormous amount of time writing property descriptions, creating marketing content, staging photos, and redrawing floor plans. AI could handle all of that in seconds.",
    },
    {
      label: "text",
      content:
        "I built the entire platform end-to-end: Clerk authentication, a PlanetScale database with Prisma, Stripe subscription billing across three tiers, OpenAI integrations for text generation, Replicate for image processing, and UploadThing for file management. It was the project that taught me how to ship a real product — not just write code, but think about user experience, billing, API rate limits, and everything in between.",
    },
  ],
  duration: "6 months",
  startedDate: "2023",
  category: "saas",
  status: "Finished",
  links: [
    {
      label: "Live App",
      href: "https://premerly.com",
    },
  ],
};

const BURMESE_GPT: Project = {
  projectId: "burmese-gpt",
  title: "Burmese-GPT",
  image: "/placeholder.svg",
  pin: true,
  techStack: ["Python", "PyTorch", "HuggingFace", "Transformers"],
  description:
    "An open-source transformer language model for the Burmese language, built from scratch with PyTorch during 2023 — back when ChatGPT was still on GPT-3.5 and building your own LLM was far from mainstream. One of the earliest efforts to bring large language model research to a low-resource Southeast Asian language, complete with a custom-curated Burmese Wikipedia dataset, a training pipeline, and a live demo on HuggingFace.",
  info: [
    {
      label: "text",
      content:
        "I started this project with a simple question: why does no open-source language model exist for Burmese? In 2023, while most of the AI world was focused on English-language models, low-resource languages like Burmese were completely left behind. There was no organization in Myanmar maintaining datasets, no research lab training models — so I decided to do it myself.",
    },
    {
      label: "text",
      content:
        "The hardest part was the data. Burmese text on the internet is scarce, inconsistently encoded, and rarely cleaned. I curated a dataset from Burmese Wikipedia, built a training pipeline on top of HuggingFace's ecosystem, and trained a transformer model using the architecture foundations I had developed in Yume. The model and datasets are fully open-sourced on HuggingFace — because if this work is going to matter, it needs to be accessible to everyone working on Burmese NLP.",
    },
  ],
  duration: "7 months",
  startedDate: "2023",
  category: "generative-ai",
  status: "Finished",
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
      label: "HuggingFace Space",
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

const UMI: Project = {
  projectId: "umi",
  title: "Umi (海)",
  image: "/placeholder.svg",
  pin: false,
  techStack: ["Python", "PyTorch", "Diffusers", "HuggingFace Accelerate"],
  description:
    "A diffusion-based image generator implementing Denoising Diffusion Probabilistic Models (DDPM) from scratch. Uses a UNet2D architecture with attention blocks, trains on CIFAR-10 with HuggingFace Accelerate for distributed training, and implements the full DDPM noise scheduling pipeline. Built to understand how diffusion models generate images from pure noise — the same fundamental technique behind Stable Diffusion and DALL-E.",
  info: [
    {
      label: "text",
      content:
        "After spending 2023 deep in language models, I wanted to understand the other side of generative AI: image generation. Diffusion models had just overtaken GANs as the state of the art, and I wanted to know why. Umi implements the full DDPM pipeline — forward noising, reverse denoising, a UNet with attention blocks, and the noise scheduler that ties it all together.",
    },
    {
      label: "text",
      content:
        "The name Umi (海, 'sea' in Japanese) reflects the idea of images emerging from a sea of noise. Training on CIFAR-10 with HuggingFace Accelerate kept things practical while still producing real results. Like my other projects, this was about building from the ground up to truly understand how the technology works.",
    },
  ],
  duration: "2 months",
  startedDate: "2024",
  category: "generative-ai",
  status: "Finished",
  links: [
    {
      label: "Source Code",
      href: "https://github.com/realzai/umi",
    },
  ],
};

const DEEPMINE: Project = {
  projectId: "deepmine",
  title: "Deepmine",
  image: "/placeholder.svg",
  pin: false,
  techStack: ["Ruby", "Deep Learning", "Autograd", "Neural Networks"],
  description:
    "A PyTorch-style deep learning framework written from scratch in Ruby. Implements tensors with gradient tracking, backpropagation, neural network layers (Linear, Conv2D, ReLU, Sigmoid, Tanh), an SGD optimizer, and loss functions (MSE, CrossEntropy). Built to deeply understand how frameworks like PyTorch work under the hood — by reimplementing one in a language with no existing deep learning ecosystem.",
  info: [
    {
      label: "text",
      content:
        "After building multiple models on top of PyTorch, I realized I was still treating the framework as a black box. I understood transformers and diffusion models, but what about the autograd engine itself? How does backpropagation actually flow through a computational graph? What does a convolution look like when you write every nested loop by hand?",
    },
    {
      label: "text",
      content:
        "I chose Ruby deliberately — a language with zero deep learning ecosystem — because it forced me to implement everything from raw math. Every tensor operation, every gradient computation, every optimizer step is written from scratch. The Conv2D layer alone implements full stride and padding support through six nested loops. It's not fast, and it's not meant to be. It's meant to make the invisible visible.",
    },
  ],
  duration: "2 months",
  startedDate: "2024",
  category: "tools",
  status: "Finished",
  links: [
    {
      label: "Source Code",
      href: "https://github.com/realzai/deepmine",
    },
  ],
};

const COMMITO: Project = {
  projectId: "commito",
  title: "Commito",
  image: "/placeholder.svg",
  pin: false,
  techStack: ["Go", "Cobra", "Groq", "CLI"],
  description:
    "A lightweight CLI tool that analyzes git diffs and uses LLMs to suggest meaningful commit messages or answer questions about code changes. Built with Go and Cobra, with a pluggable AI provider system supporting Groq and OpenAI.",
  info: [
    {
      label: "text",
      content:
        "A small developer tool born out of daily frustration — writing good commit messages takes thought, and after a long coding session, that thought is in short supply. Commito reads your staged changes, sends the diff to an LLM, and suggests a commit message that actually describes what you did. You can also ask it freeform questions about your changes.",
    },
  ],
  duration: "1 month",
  startedDate: "2025",
  category: "tools",
  status: "Finished",
  links: [
    {
      label: "Source Code",
      href: "https://github.com/realzai/commito",
    },
  ],
};

export const projects: Project[] = [
  BURMESE_GPT,
  YUME,
  PREMERLY,
  UMI,
  DEEPMINE,
  COMMITO,
];

export default projects;
