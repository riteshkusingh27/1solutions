import { motion } from 'framer-motion';
import { Utensils, Stethoscope, Gamepad2, Layers3 } from 'lucide-react';

const projects = [
  {
    icon: Utensils,
    title: 'Custom Restaurant Websites',
    description:
      'We design high-converting restaurant websites with curated digital menus, seamless ordering, and premium UI tailored for international clients.',
    highlights: [
      'Interactive menu design',
      'Online ordering integration',
      'Mobile-first UX',
    ],
    tag: 'Global Clients',
    accent: 'amber',
  },
  {
    icon: Stethoscope,
    title: 'Dental Clinic CRM System',
    description:
      'Built a custom CRM tool to manage patient records, appointments, and automate clinic workflows efficiently.',
    highlights: [
      'Appointment management',
      'Patient data handling',
      'Admin dashboard',
    ],
    tag: 'Healthcare Tech',
    accent: 'blue',
  },
  {
    icon: Gamepad2,
    title: 'Esports Gaming Cafe Platform',
    description:
      'Developed a booking and management platform for gaming cafes including slot reservations, pricing, and user engagement features.',
    highlights: [
      'Slot booking system',
      'Real-time availability',
      'Tournament integration',
    ],
    tag: 'Gaming & Experience',
    accent: 'purple',
  },
  {
    icon: Layers3,
    title: 'And More…',
    description:
      'We’ve built solutions across multiple niches including booking platforms, landing pages, and custom business tools.',
    highlights: [],
    tag: 'Multi-Niche Expertise',
    accent: 'gray',
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.13,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-12 px-2 sm:px-6 bg-white dark:bg-neutral-900">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-2">Portfolio</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">Selected Projects & Solutions</p>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project, idx) => {
            const Icon = project.icon;
            // Accent color classes
            let accentBg = 'bg-white dark:bg-neutral-900';
            let accentText = 'text-slate-500';
            let tagBg = 'bg-white dark:bg-neutral-900';
            let tagText = 'text-slate-500';
            if (project.accent === 'amber') {
              accentText = 'text-amber-500';
            } else if (project.accent === 'blue') {
              accentText = 'text-blue-500';
            } else if (project.accent === 'purple') {
              accentText = 'text-purple-500';
            }
            return (
              <motion.div
                key={project.title}
                variants={cardVariants}
                whileHover={{ scale: 1.02, boxShadow: '0 2px 16px 0 rgba(30,41,59,0.07)' }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="flex items-center gap-6 rounded-2xl bg-white dark:bg-neutral-900 shadow-sm hover:shadow-md border border-slate-100 dark:border-neutral-700 px-6 py-6 md:py-8 mb-6 w-full max-w-full"
                style={{ minHeight: '120px' }}
              >
                <div className={`flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-xl ${accentBg}`}>
                  <Icon className={`w-8 h-8 ${accentText}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-xs font-semibold uppercase tracking-wider px-2 py-1 rounded-full ${tagBg} ${tagText}`}>
                      {project.tag}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300 mb-2 text-base line-clamp-3">{project.description}</p>
                  {project.highlights.length > 0 && (
                    <ul className="mb-2 ml-4 list-disc text-slate-600 dark:text-slate-400 text-sm space-y-1">
                      {project.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
