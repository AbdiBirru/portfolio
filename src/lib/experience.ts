export interface ExperienceEntry {
  role: string;
  org: string;
  dates: string;
  category: "Internship" | "Freelance" | "Open Source" | "Team Project";
  status: "Ongoing" | "Upcoming" | "Completed";
  bullets: string[];
}

export const experience: ExperienceEntry[] = [
  {
    role: "Frontend Development Intern",
    org: "CodeAlpha",
    dates: "Jul 2026 – Aug 2026",
    category: "Internship",
    status: "Ongoing",
    bullets: [
      "Building responsive, accessible user interfaces with HTML, CSS, JavaScript, and React",
      "Translating design requirements into clean, reusable frontend components",
      "Collaborating remotely with a distributed team using Git and GitHub",
    ],
  },
  {
    role: "Full-Stack Development Intern",
    org: "CodeAlpha",
    dates: "Jul 2026 – Aug 2026",
    category: "Internship",
    status: "Ongoing",
    bullets: [
      "Working across the stack with React on the frontend and Node.js/Express on the backend",
      "Contributing to feature development and debugging within an existing codebase",
      "Applying REST API integration and database fundamentals in a real-world team setting",
    ],
  },
  {
    role: "Full-Stack Development Intern",
    org: "CodVeda",
    dates: "Aug 2026 – Sept 2026",
    category: "Internship",
    status: "Upcoming",
    bullets: [
      "Set to work on full-stack feature development using React, Node.js, and PostgreSQL",
      "Will collaborate with a development team on real-world software projects",
      "Expected to gain hands-on experience with production-level engineering workflows",
    ],
  },
  {
    role: "Frontend Development",
    org: "Exelia Technologies Solutions",
    dates: "Oct 2026 – Dec 2026",
    category: "Freelance",
    status: "Upcoming",
    bullets: [
      "Set to build responsive frontend interfaces using React and Tailwind CSS",
      "Will work directly with a client to translate requirements into a functional product",
      "Expected to manage the engagement independently, from scope to delivery",
    ],
  },
];
