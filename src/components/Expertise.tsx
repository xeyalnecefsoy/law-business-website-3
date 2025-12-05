"use client";

import { forwardRef } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { Plus, Minus } from "@phosphor-icons/react";
import { clsx } from "clsx";

const areas = [
  { id: "item-1", title: "Corporate Litigation", description: "Navigating complex commercial disputes with strategic precision and aggressive advocacy." },
  { id: "item-2", title: "Intellectual Property", description: "Safeguarding your innovations and brand identity through robust enforcement and defense strategies." },
  { id: "item-3", title: "Mergers & Acquisitions", description: "Facilitating transformative deals with meticulous due diligence and seamless execution." },
  { id: "item-4", title: "Private Equity", description: "Counseling funds and portfolio companies on structuring, financing, and exit strategies." },
];

export default function Expertise() {
  return (
    <section id="expertise" className="py-32 px-6 bg-zinc-950">
      <div className="container mx-auto">
        <h2 className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-12">Area of Expertise</h2>
        
        <Accordion.Root type="single" collapsible className="w-full border-t border-zinc-800">
          {areas.map((area) => (
            <AccordionItem key={area.id} value={area.id} title={area.title}>
              {area.description}
            </AccordionItem>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}

const AccordionItem = forwardRef<HTMLDivElement, { children: React.ReactNode; value: string; title: string }>(
  ({ children, value, title, ...props }, forwardedRef) => (
    <Accordion.Item
      value={value}
      className="group overflow-hidden border-b border-zinc-800 focus-within:relative z-10"
      {...props}
      ref={forwardedRef}
    >
      <Accordion.Header className="flex">
        <Accordion.Trigger className="flex flex-1 items-center justify-between py-10 text-left text-3xl md:text-5xl font-medium transition-colors hover:text-white group-data-[state=open]:text-white text-zinc-400 cursor-pointer outline-none">
          <span>{title}</span>
          <div className="relative w-8 h-8 rounded-full border border-zinc-700 flex items-center justify-center transition-transform duration-300 group-data-[state=open]:rotate-180">
            <Plus className="absolute transition-opacity duration-300 group-data-[state=open]:opacity-0" size={16} />
            <Minus className="absolute opacity-0 transition-opacity duration-300 group-data-[state=open]:opacity-100" size={16} />
          </div>
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content className="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
        <div className="pb-10 pt-2 text-lg text-zinc-400 max-w-2xl font-light leading-relaxed">
          {children}
        </div>
      </Accordion.Content>
    </Accordion.Item>
  )
);

AccordionItem.displayName = "AccordionItem";
