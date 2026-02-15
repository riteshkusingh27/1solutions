import { motion } from 'framer-motion'
import { process } from '../data/content'

const Process = () => (
  <motion.section
    className="px-6 py-16"
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.7, ease: 'easeOut' }}
  >
    <div className="mx-auto max-w-6xl space-y-6">
      <div className="flex flex-col gap-3">
        <p className="section-heading">Process</p>
        <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">A clear path from brief to launch</h2>
        <p className="max-w-2xl text-slate-600">
          Weekly milestones, async updates, and collaborative reviews to keep momentum high without sacrificing craft.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {process.map((step, index) => (
          <article
            key={step.title}
            className="glass card-sheen relative flex flex-col gap-3 p-5 shadow-card"
          >
            <div className="flex items-center justify-between text-sm text-slate-600">
              <span>Step {index + 1}</span>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">{step.time}</span>
            </div>
            <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
            <p className="text-sm text-slate-600">{step.detail}</p>
          </article>
        ))}
      </div>
    </div>
  </motion.section>
)

export default Process
