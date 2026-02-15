import { motion } from 'framer-motion'

const FinalCTA = () => (
  <motion.section
    className="px-6 pb-16"
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.7, ease: 'easeOut' }}
  >
    <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-white/80 bg-gradient-to-r from-primary/20 via-teal/15 to-pink/15 p-[1px] shadow-neon">
      <div className="relative rounded-[22px] bg-transparent p-10 sm:p-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(37,99,235,0.12),transparent_40%)]" aria-hidden />
        <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-2xl space-y-3">
            <p className="section-heading">Let&apos;s build</p>
            <h3 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Ready for a site or product that actually moves metrics?</h3>
            <p className="text-slate-600">Tell us about your launch, and we will design the experience end-to-end.</p>
          </div>
          <div className="flex flex-col gap-3 sm:min-w-[220px]">
            <a className="btn-primary" href="#contact">
              Start a project
            </a>
            <a className="btn-secondary" href="#services">
              See services
            </a>
          </div>
        </div>
      </div>
    </div>
  </motion.section>
)

export default FinalCTA
