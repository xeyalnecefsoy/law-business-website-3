import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Expertise from "@/components/Expertise";
import Team from "@/components/Team";
import CaseResults from "@/components/CaseResults";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-blue-600 selection:text-white">
      <Navbar />
      <Hero />
      <Expertise />
      <CaseResults />
      <Team />
      <Contact />
    </main>
  );
}
