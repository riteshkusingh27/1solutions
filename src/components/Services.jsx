import { motion } from 'framer-motion'
import { services } from '../data/content'

const Services = () => (
  <motion.section
    id="services"
    className="px-6 py-16"
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.7, ease: 'easeOut' }}
  >
    <div className="mx-auto max-w-6xl space-y-6">
      <div className="flex flex-col gap-3">
        <p className="section-heading">Services</p>
        <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Everything you need to launch and scale</h2>
        <p className="max-w-2xl text-slate-600">
          Strategy, storytelling, UI/UX, and motion design delivered with systems thinking and development-ready detail.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {services.map((service) => (
          <article
            key={service.title}
            className="glass card-sheen group relative overflow-hidden p-6 shadow-card transition hover:-translate-y-1"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-transparent to-slate-100 opacity-0 transition group-hover:opacity-100" />
            <div className="relative space-y-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-teal text-2xl drop-shadow-glow">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
              <p className="text-slate-600">{service.description}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </motion.section>
)

export default Services
