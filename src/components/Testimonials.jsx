import { motion } from 'framer-motion'
import { testimonials } from '../data/content'

const Testimonials = () => (
  <motion.section
    id="testimonials"
    className="px-6 py-16"
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.7, ease: 'easeOut' }}
  >
    <div className="mx-auto max-w-6xl space-y-6">
      <div className="flex flex-col gap-3">
        <p className="section-heading">Testimonials</p>
        <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Teams we partner with</h2>
        <p className="max-w-2xl text-slate-600">
          Feedback from leaders who trusted us to design their next launch, campaign, or product milestone.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {testimonials.map((item) => (
          <article key={item.name} className="glass card-sheen flex flex-col gap-4 p-6 shadow-card">
            <p className="text-lg text-slate-900">“{item.quote}”</p>
            <div className="text-sm text-slate-600">
              <p className="font-semibold text-slate-900">{item.name}</p>
              <p>{item.role}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </motion.section>
)

export default Testimonials
