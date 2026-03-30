import { motion } from 'framer-motion';
import { Utensils, Stethoscope, Gamepad2, Layers3 } from 'lucide-react';
import image from '../assets/image.png';
import po from  '../assets/imag2.png';
import dd from '../assets/dd.png';
import chim from '../assets/chim.png';
import dsd from '../assets/dsd.png';

// Portfolio data with real project content only
const projects = [
  {
    id: 1,
    image: image,
    title: 'eggslut.uk',
    category: 'Restaurant',
    description: 'Crafted a visually rich, conversion-focused website that reflects Eggslut’s bold identity while enhancing ordering flow and user engagement.',
    href: 'https://www.eggslut.uk/',
    icon: Utensils,
  },
  {
    id: 2,
    image: po,
    title: 'Real Taste',
    category: 'Restaurant',
    description: 'Transformed a traditional menu into a dynamic digital experience with intuitive navigation and engaging visuals.Focused on improving usability and elevating the overall food discovery journey.',
    href: 'https://real-taste.menu-world.com/',
    icon: Utensils,
  },
  {
    id: 3,
    image: dd,
    title: 'Dunkin Donuts',
    category: 'Restaurant',
    description: 'Built to reflect Dunkin’s identity as a beverage-led, high-volume brand, optimizing navigation, ordering flow, and mobile-first interactions.',
    href: 'https://dunkindonuts.com',
    icon: Stethoscope,
  },
  {
    id: 4,
    image: chim,
    title: 'Mr. Chimi ',
    category: 'Restaurant',
    description: 'Designed a vibrant, food-first website for a Dominican street food brand, highlighting rich flavors, signature chimis, and diverse menu offerings.Focused on seamless online ordering, fast delivery experience, and visually engaging menu navigation to enhance customer interaction.',
    href: 'https://mrchiminyc.com',
    icon: Gamepad2,
  },
  {
    id: 5,
    image: dsd,
    title: 'DSD Premium Gaming',
    category: 'Gaming Cafe Management',
    description: 'We transformed DSD Gaming Cafe into a full-scale digital esports platform, focused on tournament control and community engagement. Instead of a basic site, we built a system that enables seamless tournament creation, management, and participation.',
    href: 'https://dsdpremiumgaming.com',
    icon: Layers3,
  },
];



// Framer Motion animation variants for alternating rows
const getRowVariants = (isEven) => ({
  hidden: { opacity: 0, x: isEven ? 100 : -100 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
});

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-20 px-2 sm:px-6 bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="mb-10 text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-2 drop-shadow-lg">Selected Work</h2>
          <p className="text-lg text-slate-600 mb-6">Real products. Real results.</p>
        </div>
        <div className="flex flex-col gap-16">
          {projects.map((project, idx) => {
            const Icon = project.icon;
            const isEven = idx % 2 === 1;
            return (
              <motion.div
                key={project.id}
                variants={getRowVariants(isEven)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className={`flex flex-col md:flex-row ${isEven ? 'md:flex-row-reverse' : ''} items-center gap-8 md:gap-16`}
              >
                {/* Image Section */}
                <div className="w-full md:w-1/2 flex-shrink-0">
                  {project.href ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block relative w-full h-56 md:h-72 cursor-pointer"
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        className="object-contain w-full h-full rounded-2xl shadow-xl transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                      />
                      {/* Hover Overlay - only button, no dark background */}
                      <span className="absolute inset-0 flex items-center justify-center rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                        <span className="text-white text-lg font-semibold bg-cyan-600/90 px-6 py-2 rounded-full shadow-lg select-none">View Website →</span>
                      </span>
                    </a>
                  ) : (
                    <div className="relative w-full h-56 md:h-72 flex items-center justify-center">
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        className="object-contain w-full h-full rounded-2xl shadow-xl"
                      />
                    </div>
                  )}
                </div>
                {/* Content Section */}
                <div className="w-full md:w-1/2 flex flex-col items-start">
                  <span className="mb-2 px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500/80 to-blue-500/80 text-white text-xs font-semibold shadow-md">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{project.title}</h3>
                  <p className="text-slate-700 text-base mb-4 max-w-xl">{project.description}</p>
                  {project.href && (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary bg-cyan-50 text-cyan-700 hover:bg-cyan-500 hover:text-white shadow-lg px-5 py-2 rounded-full font-semibold text-base transition-all duration-200"
                    >
                      View Live Site →
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

