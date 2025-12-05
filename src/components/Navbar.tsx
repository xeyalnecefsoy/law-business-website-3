"use client";

import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { AnimatePresence, motion } from "framer-motion";
import { List, X } from "@phosphor-icons/react";
import Link from "next/link";
import { clsx } from "clsx";

const links = [
  { label: "Expertise", href: "#expertise" },
  { label: "The Team", href: "#team" },
  { label: "Case Results", href: "#results" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <header className="fixed top-0 left-0 w-full z-50 mix-blend-difference px-6 py-6 flex justify-between items-center text-white">
        <Link href="/" className="uppercase font-bold tracking-tighter text-2xl z-50 relative">
          VANGUARD <span className="font-light text-zinc-400">LEGAL</span>
        </Link>

        <Dialog.Trigger asChild>
          <button className="z-50 uppercase text-sm font-bold tracking-widest flex items-center gap-2 hover:text-blue-400 transition-colors">
            Menu <List size={22} />
          </button>
        </Dialog.Trigger>
      </header>

      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              />
            </Dialog.Overlay>
            <Dialog.Content asChild>
              <motion.div
                initial={{ y: "-100%" }}
                animate={{ y: "0%" }}
                exit={{ y: "-100%" }}
                transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }} // smooth quart easing
                className="fixed inset-0 z-50 bg-zinc-950 flex flex-col items-center justify-center"
              >
                <VisuallyHidden.Root>
                  <Dialog.Title>Navigation Menu</Dialog.Title>
                </VisuallyHidden.Root>
                
                <div className="absolute top-6 right-6">
                  <Dialog.Close asChild>
                    <button className="uppercase text-sm font-bold tracking-widest flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
                      Close <X size={22} />
                    </button>
                  </Dialog.Close>
                </div>

                <nav className="flex flex-col gap-6 text-center">
                  {links.map((link, i) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 40 }}
                      transition={{ duration: 0.5, delay: 0.2 + i * 0.1, ease: "easeOut" }}
                    >
                      <Dialog.Close asChild>
                        <Link
                          href={link.href}
                          className="font-sans text-5xl md:text-7xl font-bold uppercase tracking-tight hover:text-blue-600 transition-colors text-outline hover:text-outline-none"
                        >
                          {link.label}
                        </Link>
                      </Dialog.Close>
                    </motion.div>
                  ))}
                </nav>
                
                <div className="absolute bottom-10 left-0 w-full text-center text-zinc-500 uppercase text-xs tracking-widest">
                  &copy; 2024 Vanguard Legal Steps
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}
