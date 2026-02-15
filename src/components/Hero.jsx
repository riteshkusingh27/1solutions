import { motion } from 'framer-motion'
import { hero } from '../data/content'
import RotatingText from './RotatingText'

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.8, ease: 'easeOut' },
}

const Hero = () => {
  return (
    <motion.section
      className="relative overflow-hidden px-6 pb-24 pt-10 sm:pt-16 lg:pt-24"
      {...fadeIn}
    >
      <div className="pointer-events-none absolute -left-12 top-8 h-64 w-64 animate-float rounded-full bg-primary/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 bottom-10 h-64 w-64 animate-float rounded-full bg-teal/15 blur-3xl" />

      <div className="mx-auto flex max-w-6xl flex-col gap-10 lg:flex-row lg:items-center">
        <div className="flex-1 space-y-4 sm:space-y-6">

          <h1 className="font-orbitron text-balance text-4xl  font-extrabold leading-tight tracking-wide text-slate-900 sm:text-5xl lg:text-6xl">
            <span className="block pb-1 sm:pb-0">We design</span>
            <span className="block pb-1 sm:pb-0 font-extrabold text-black">Bold,</span>
            <span className="block pb-1 sm:pb-0">high converting</span>
            <span className="block sm:inline-flex sm:flex-wrap items-baseline gap-1 sm:gap-2">
              <RotatingText
                texts={['experiences.', 'websites.', 'products.']}
                mainClassName="px-1.5 sm:px-2 md:px-2 text-blue-900 overflow-hidden py-1 sm:py-1 md:py-1.5 justify-center rounded-lg"
                staggerFrom="last"
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '-120%', transition: { duration: 0.9, ease: 'easeInOut' } }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: 'spring', damping: 35, stiffness: 120 }}
                rotationInterval={3500}
              />
            </span>
            <p className="font-spacegrotesk max-w-2xl text-lg font-extrabold text-brown-700">{hero.subtitle}</p>
          </h1>
          
        
          <div className="flex flex-wrap items-center gap-3">
            <a className="btn-primary" href="#contact">
              {hero.primaryCta}
            </a>
            <a className="btn-secondary" href="#services">
              {hero.secondaryCta}
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {hero.stats.map((stat) => (
              <div key={stat.label} className="glass card-sheen p-4 shadow-card">
                <p className="text-2xl font-semibold text-slate-900">{stat.value}</p>
                <p className="text-sm text-slate-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        
      </div>
    </motion.section>
  )
}

export default Hero
