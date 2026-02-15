import { motion } from 'framer-motion'
import { pricing } from '../data/content'

const Pricing = () => (
  <motion.section
    id="pricing"
    className="px-6 py-16"
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.7, ease: 'easeOut' }}
  >
    <div className="mx-auto max-w-6xl space-y-6">
      <div className="flex flex-col gap-3">
        <p className="section-heading">Pricing snapshot</p>
        <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Flexible models for different stages</h2>
        <p className="max-w-2xl text-slate-600">
          Sprint-based projects or embedded partnerships. Clear scope, weekly updates, and delivery that meets your roadmap.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {pricing.map((plan) => (
          <article key={plan.name} className="glass card-sheen flex flex-col gap-4 p-6 shadow-card">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-slate-900">{plan.name}</h3>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">{plan.badge}</span>
            </div>
            <div className="text-3xl font-semibold text-slate-900">{plan.price}</div>
            <p className="text-sm text-slate-600">{plan.cadence}</p>
            <ul className="space-y-2 text-slate-700">
              {plan.items.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-primary to-teal" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="pt-2">
              <a className="btn-secondary" href="#contact">
                Start this plan
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  </motion.section>
)

export default Pricing
