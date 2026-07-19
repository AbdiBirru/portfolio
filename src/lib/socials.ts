import { GithubIcon, LinkedinIcon, XIcon, BlueskyIcon } from "@/components/icons/BrandIcons";
import { Mail } from "lucide-react";

export interface SocialLink {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
}

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/abdibirru", icon: GithubIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/abdibirru", icon: LinkedinIcon },
  { label: "X", href: "https://x.com/DevAbdiBirru", icon: XIcon },
  { label: "Bluesky", href: "https://bsky.app/profile/abdibirru.bsky.social", icon: BlueskyIcon },
  { label: "Email", href: "mailto:dev.abdibirru@gmail.com", icon: Mail },
];
