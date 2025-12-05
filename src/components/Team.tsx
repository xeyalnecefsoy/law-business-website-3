"use client";

import Image from "next/image";

const team = [
  { name: "Victoria Sterling", role: "Managing Partner", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop" },
  { name: "James Caldwell", role: "Head of Litigation", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop" },
  { name: "Elena Rodriguez", role: "Senior Associate", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop" },
  { name: "Morgan Vance", role: "Legal Consultant", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop" },
];

export default function Team() {
  return (
    <section id="team" className="py-32 px-6">
      <div className="container mx-auto">
        <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-12">The Counsel</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {team.map((member) => (
            <div key={member.name} className="group relative aspect-[3/4] overflow-hidden bg-zinc-900">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                <p className="text-sm text-blue-400 uppercase tracking-wider">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
