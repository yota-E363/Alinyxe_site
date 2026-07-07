import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
        <main>
            <Hero />
        </main>
    </div>
  );
}
