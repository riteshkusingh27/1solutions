import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const RotatingText = ({
  texts = [],
  rotationInterval = 2000,
  mainClassName = '',
  splitLevelClassName = '',
  staggerFrom = 'last',
  initial = { y: '100%' },
  animate = { y: 0 },
  exit = { y: '-120%' },
  staggerDuration = 0.025,
  transition = { type: 'spring', damping: 30, stiffness: 400 },
}) => {
  const safeTexts = useMemo(() => (Array.isArray(texts) && texts.length ? texts : ['']), [texts])
  const longestText = useMemo(
    () => safeTexts.reduce((long, txt) => (txt.length > long.length ? txt : long), ''),
    [safeTexts]
  )
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (safeTexts.length <= 1) return undefined
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % safeTexts.length)
    }, rotationInterval)
    return () => clearInterval(id)
  }, [rotationInterval, safeTexts])

  const current = safeTexts[index]
  const characters = current.split('')

  const containerVariants = {
    initial,
    animate: {
      ...animate,
      transition: {
        ...transition,
        staggerChildren: staggerDuration,
        staggerDirection: staggerFrom === 'last' ? -1 : 1,
      },
    },
    exit: {
      ...exit,
      transition: {
        ...transition,
        staggerChildren: staggerDuration,
        staggerDirection: staggerFrom === 'last' ? -1 : 1,
      },
    },
  }

  const letterVariants = {
    initial: { y: '100%' },
    animate: { y: 0 },
    exit: { y: '-120%' },
  }

  return (
    <span className={`inline-flex relative items-center ${mainClassName}`}>
      <span className="invisible whitespace-pre">
        {longestText || current}
      </span>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={`${current}-${index}`}
          className="absolute inset-0 inline-flex items-center"
          variants={containerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {characters.map((char, i) => (
            <motion.span key={`${char}-${i}`} className={splitLevelClassName} variants={letterVariants}>
              {char === ' ' ? '\u00a0' : char}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

export default RotatingText
