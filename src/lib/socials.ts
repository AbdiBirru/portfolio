import { SiGithub, SiLinkedin, SiX, SiBluesky } from "react-icons/si";
import { Mail } from "lucide-react";

export interface SocialLink {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
}

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/abdibirru", icon: SiGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/abdibirru", icon: SiLinkedin },
  { label: "X", href: "https://x.com/DevAbdiBirru", icon: SiX },
  { label: "Bluesky", href: "https://bsky.app/profile/abdibirru.bsky.social", icon: SiBluesky },
  { label: "Email", href: "mailto:dev.abdibirru@gmail.com", icon: Mail },
];
