export default function TestPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 bg-background text-foreground p-6">
      
      <h1 className="text-4xl font-bold font-heading">
        ALINYXE Test Page
      </h1>

      <p className="text-lg text-muted-foreground font-sans">
        Si tu vois cette page correctement stylée, ton setup Next.js + Tailwind est OK.
      </p>

      <div className="flex gap-4">
        <button className="px-4 py-2 rounded-full bg-primary text-primary-foreground">
          Primary Button
        </button>
        <button className="px-4 py-2 rounded-full border border-border">
          Secondary Button
        </button>
      </div>

      <div className="text-sm text-muted-foreground font-mono">
        Test fonts : Clash Display / DM Sans / JetBrains Mono
      </div>

    </main>
  );
}