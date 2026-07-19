import ThemeToggle from "@/components/layout/ThemeToggle";

export default function Navbar() {
  return (
    <header className="w-full py-4 px-6 flex items-center justify-between">
      <nav aria-label="Primary" className="flex-1">
        <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
          Navbar — built out on Day 3
        </p>
      </nav>
      <ThemeToggle />
    </header>
  );
}
