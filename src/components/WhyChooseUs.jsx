import { motion } from 'framer-motion'
import { reasons } from '../data/content'

const WhyChooseUs = () => (
  <motion.section
    className="px-6 py-16"
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.7, ease: 'easeOut' }}
  >
    <div className="mx-auto max-w-6xl space-y-6">
      <div className="flex flex-col gap-3">
        <p className="section-heading">Why choose us</p>
        <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Craft, clarity, and momentum</h2>
        <p className="max-w-2xl text-slate-600">
          We combine product thinking, bold visuals, and hands-on collaboration to ship experiences that feel intentional.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {reasons.map((reason) => (
          <article key={reason.title} className="glass card-sheen p-6 shadow-card">
            <h3 className="text-xl font-semibold text-slate-900">{reason.title}</h3>
            <p className="mt-2 text-slate-600">{reason.description}</p>
          </article>
        ))}
      </div>
    </div>
  </motion.section>
)

export default WhyChooseUs
