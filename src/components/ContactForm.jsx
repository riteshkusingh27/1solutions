import { motion } from 'framer-motion'
import { contact } from '../data/content'

const ContactForm = () => (
  <motion.section
    id="contact"
    className="px-6 pb-20 pt-4"
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.7, ease: 'easeOut' }}
  >
    <div className="mx-auto max-w-6xl grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="glass card-sheen p-8 shadow-card">
        <p className="section-heading">Contact</p>
        <h2 className="font-orbitron text-3xl font-semibold text-slate-900 sm:text-4xl">Share your goals</h2>
        <p className="mt-3 max-w-xl text-slate-600">{contact.headline}</p>

        <form className="mt-8 grid gap-4 sm:grid-cols-2">
          <label className="flex flex-col gap-2 text-sm text-slate-700">
            Name
            <input
              className="rounded-2xl border border-slate-200 bg-transparent px-4 py-3 text-slate-900 outline-none transition focus:border-primary/60"
              type="text"
              name="name"
              placeholder="Your name"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-slate-700">
            Email
            <input
              className="rounded-2xl border border-slate-200 bg-transparent px-4 py-3 text-slate-900 outline-none transition focus:border-primary/60"
              type="email"
              name="email"
              placeholder="you@company.com"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-slate-700">
            Project type
            <input
              className="rounded-2xl border border-slate-200 bg-transparent px-4 py-3 text-slate-900 outline-none transition focus:border-primary/60"
              type="text"
              name="project"
              placeholder="Product UI, marketing site, system"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-slate-700">
            Budget
            <input
              className="rounded-2xl border border-slate-200 bg-transparent px-4 py-3 text-slate-900 outline-none transition focus:border-primary/60"
              type="text"
              name="budget"
              placeholder="$10k-$30k"
            />
          </label>
          <label className="sm:col-span-2 flex flex-col gap-2 text-sm text-slate-700">
            What do you need?
            <textarea
              className="min-h-[140px] rounded-2xl border border-slate-200 bg-transparent px-4 py-3 text-slate-900 outline-none transition focus:border-primary/60"
              name="details"
              placeholder="Goals, timelines, links..."
            />
          </label>
          <div className="sm:col-span-2 flex flex-wrap items-center gap-3">
            <button type="submit" className="btn-primary">
              Send message
            </button>
            <p className="text-sm text-slate-600">We reply within one business day.</p>
          </div>
        </form>
      </div>

      <aside className="glass card-sheen flex flex-col gap-4 p-8 shadow-card">
        <h3 className="font-orbitron text-xl font-semibold text-slate-900">What to expect</h3>
        <ul className="space-y-3 text-slate-700">
          {contact.highlights.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-primary to-teal" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="rounded-2xl border border-slate-100 bg-transparent p-4 text-sm text-slate-700">
          <p className="font-semibold text-slate-900">Prefer async?</p>
          <p>Share a Loom or Figma link and we&apos;ll respond with a tailored plan and timeline.</p>
        </div>
      </aside>
    </div>
  </motion.section>
)

export default ContactForm
