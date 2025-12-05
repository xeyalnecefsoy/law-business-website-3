"use client";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 bg-zinc-950">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-6xl md:text-8xl font-bold uppercase tracking-tighter mb-16">
          Initiate <span className="text-blue-600">Counsel</span>
        </h2>
        
        <form className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-2">
              <label htmlFor="name" className="text-xs uppercase tracking-widest text-zinc-500">Full Name</label>
              <input 
                type="text" 
                id="name"
                className="w-full bg-transparent border-b border-zinc-800 py-4 text-xl focus:outline-none focus:border-blue-600 transition-colors"
                placeholder="Ex. John Doe" 
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-xs uppercase tracking-widest text-zinc-500">Email Address</label>
              <input 
                type="email" 
                id="email"
                className="w-full bg-transparent border-b border-zinc-800 py-4 text-xl focus:outline-none focus:border-blue-600 transition-colors"
                placeholder="Ex. john@company.com" 
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="inquiry" className="text-xs uppercase tracking-widest text-zinc-500">Inquiry Details</label>
            <textarea 
              id="inquiry"
              rows={4}
              className="w-full bg-transparent border-b border-zinc-800 py-4 text-xl focus:outline-none focus:border-blue-600 transition-colors resize-none"
              placeholder="Describe your legal matter..." 
            />
          </div>

          <div className="pt-8">
            <button type="submit" className="group flex items-center gap-4 text-xl uppercase tracking-widest hover:text-blue-600 transition-colors">
              <span>Submit Inquiry</span>
              <span className="block h-[1px] w-12 bg-zinc-700 group-hover:bg-blue-600 transition-colors" />
            </button>
          </div>
        </form>
      </div>

      <footer className="mt-32 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-start md:items-center text-zinc-500 text-sm">
        <div className="uppercase tracking-widest">
          Vanguard Legal Steps &copy; {new Date().getFullYear()}
        </div>
        <div className="flex gap-6 mt-4 md:mt-0 uppercase tracking-widest text-xs">
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
        </div>
      </footer>
    </section>
  );
}
