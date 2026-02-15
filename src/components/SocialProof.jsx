import { motion } from 'framer-motion'
import { socialProof } from '../data/content'

const SocialProof = () => {
  return (
    <motion.section
      className="px-6 py-16"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="mx-auto max-w-6xl space-y-8 rounded-3xl border border-white/70  p-8 shadow-card">
        <p className="section-heading">Trusted partners</p>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <h2 className="max-w-2xl text-2xl font-semibold text-slate-900 sm:text-3xl">
            {socialProof.headline}
          </h2>
          <div className="flex flex-wrap gap-3 text-sm text-slate-700">
            {socialProof.logos.map((logo) => (
              <span
                key={logo.name}
                className="glass px-4 py-2 text-slate-800 shadow-card transition hover:-translate-y-0.5 hover:shadow-neon"
              >
                {logo.name} · {logo.tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default SocialProof
