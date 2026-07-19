export interface Project {
  title: string;
  tagline: string;
  problem: string;
  solution: string;
  features: string[];
  stack: string[];
  github?: string;
  demo?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    title: "AbdiXMeet",
    tagline: "Real-time messaging platform for instant communication.",
    problem: "People need fast, reliable ways to communicate online in real time.",
    solution: "Built a real-time chat application with live message delivery and presence tracking.",
    features: ["Instant messaging", "Authentication", "Online status", "Message history"],
    stack: ["React", "Node.js", "Socket.io", "PostgreSQL", "Prisma"],
  },
  {
    title: "Eonex",
    tagline: "Lightweight social platform for sharing content and connecting users.",
    problem: "Users need simple, focused spaces to build online communities.",
    solution: "Built a mini social networking experience covering the full content loop — posting, engaging, and following.",
    features: ["User profiles", "Posts", "Likes & comments", "Following system"],
    stack: ["React", "Node.js", "PostgreSQL", "Socket.io"],
  },
  {
    title: "Abdi Market",
    tagline: "Full-stack e-commerce platform for online shopping.",
    problem: "Businesses need simple, reliable digital platforms to sell online.",
    solution: "Built an online store covering the full commerce flow, from browsing to order management.",
    features: ["Product catalog", "Authentication", "Shopping cart", "Order management"],
    stack: ["React", "Node.js", "Express", "PostgreSQL", "Prisma"],
  },
  {
    title: "Ethiopian Universities Platform",
    tagline: "Platform for discovering Ethiopian university information.",
    problem: "Students lack a centralized source for university details.",
    solution: "Built a searchable platform that organizes university data into one clean interface.",
    features: ["University profiles", "Search & filter", "Program information", "Responsive design"],
    stack: ["React", "Tailwind CSS", "JavaScript"],
  },
  {
    title: "Mini Calculator",
    tagline: "Responsive calculator with real-time calculations and keyboard support.",
    problem: "Basic calculators often lack a modern UI and accessibility.",
    solution: "Built a fast, interactive calculator with keyboard support and theme switching.",
    features: ["Real-time calculations", "Keyboard support", "Light/dark themes", "Error handling"],
    stack: ["HTML", "CSS", "JavaScript"],
  },
];
