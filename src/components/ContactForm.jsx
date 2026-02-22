import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { contact } from '../data/content'

const ContactForm = () => {
  const initialFormData = {
    name: '',
    email: '',
    project: '',
    budget: '',
    details: '',
  }

  const [formData, setFormData] = useState(initialFormData)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const isInvalid = Object.values(formData).some((value) => !String(value).trim())

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (isInvalid) {
      toast.error('Please fill in all fields.')
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('https://serpbackend-dzuq.vercel.app/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const payloadText = await response.text()
      let payload

      try {
        payload = JSON.parse(payloadText)
      } catch (parseError) {
        payload = null
      }

      const successMessage = payload?.success || payload?.message || payloadText || 'Message sent!'

      if (!response.ok) {
        toast.error('Something went wrong. Please try again.')
        return
      }
      toast.success(String(successMessage))
      setFormData(initialFormData)
    } catch (error) {
      toast.error('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <ToastContainer
        position="top-center"
        className="toastify-container"
        toastClassName={() => 'toastify-toast'}
        bodyClassName="toastify-body"
      />

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

          <form className="mt-8 grid gap-4 sm:grid-cols-2" onSubmit={handleSubmit}>
            <label className="flex flex-col gap-2 text-sm text-slate-700">
              Name
              <input
                className="rounded-2xl border border-slate-200 bg-transparent px-4 py-3 text-slate-900 outline-none transition focus:border-primary/60"
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
              />
            </label>
            <label className="flex flex-col gap-2 text-sm text-slate-700">
              Email
              <input
                className="rounded-2xl border border-slate-200 bg-transparent px-4 py-3 text-slate-900 outline-none transition focus:border-primary/60"
                type="email"
                name="email"
                placeholder="you@company.com"
                value={formData.email}
                onChange={handleChange}
              />
            </label>
            <label className="flex flex-col gap-2 text-sm text-slate-700">
              Project type
              <select
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-primary/60"
                name="project"
                value={formData.project}
                onChange={handleChange}
              >
                <option value="">Select a request type</option>
                <option value="website">Website</option>
                <option value="static website">Static website</option>
                <option value="dynamic website">Dynamic website</option>
                <option value="crm tool">CRM tool</option>
                <option value="portfolio website">Portfolio website</option>
                <option value="catalog website">Catalog website</option>
                <option value="ecommerce website">Ecommerce website</option>
              </select>
            </label>
            <label className="flex flex-col gap-2 text-sm text-slate-700">
              Budget
              <input
                className="rounded-2xl border border-slate-200 bg-transparent px-4 py-3 text-slate-900 outline-none transition focus:border-primary/60"
                type="text"
                name="budget"
                placeholder="Starting with 6K"
                value={formData.budget}
                onChange={handleChange}
              />
            </label>
            <label className="sm:col-span-2 flex flex-col gap-2 text-sm text-slate-700">
              What do you need?
              <textarea
                className="min-h-[140px] rounded-2xl border border-slate-200 bg-transparent px-4 py-3 text-slate-900 outline-none transition focus:border-primary/60"
                name="details"
                placeholder="Goals, timelines, links..."
                value={formData.details}
                onChange={handleChange}
              />
            </label>
            <div className="sm:col-span-2 flex flex-wrap items-center gap-3">
              <button
                type="submit"
                className="btn-primary"
                disabled={isSubmitting || isInvalid}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span
                      className="h-4 w-4 rounded-full border-2 border-white/70 border-t-transparent animate-spin"
                      aria-hidden
                    />
                    Sending...
                  </span>
                ) : (
                  'Send message'
                )}
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
    </>
  )
}

export default ContactForm
