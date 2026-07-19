export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6">
      <h1 className="text-3xl font-bold gradient-text">Design system test</h1>
      <button className="btn-glow px-6 py-3 rounded-full text-white font-medium">
        Sample button
      </button>
      <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
        Sections will go here — Hero, About, Skills, Projects...
      </p>
    </div>
  );
}
