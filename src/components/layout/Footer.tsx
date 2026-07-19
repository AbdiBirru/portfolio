import { socialLinks } from "@/lib/socials";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full mt-24 border-t" style={{ borderColor: "var(--border)" }}>
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col items-center gap-6 text-center">
        <p className="text-lg font-semibold">
          <span style={{ color: "var(--text-primary)" }}>Abdi</span>
          <span className="gradient-text">Builds</span>
        </p>
        <p className="text-sm max-w-md" style={{ color: "var(--text-secondary)" }}>
          Full-stack developer, building fast and reliable products from idea to deployment.
        </p>

        <div className="flex items-center gap-4">
          {socialLinks.map(({ label, href, icon: Icon }) => {
            const isExternal = href.startsWith("http");
            const linkProps = isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {};
            return (
              <a key={label} href={href} aria-label={label} {...linkProps} className="w-10 h-10 flex items-center justify-center rounded-full border hover:opacity-80" style={{ borderColor: "var(--border)" }}>
                <Icon size={18} />
              </a>
            );
          })}
        </div>

        <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
          © {year} AbdiBuilds. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
