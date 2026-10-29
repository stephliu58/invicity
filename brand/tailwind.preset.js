// Invicity Tailwind preset — v3.0
// tailwind.config.js:  module.exports = { presets: [require('./tailwind.preset.js')], content: [...] }
// Load invicity-brand.css first: the preset maps to its CSS variables, so tokens stay single-source.
module.exports = {
  theme: {
    extend: {
      colors: {
        forest: { DEFAULT: 'var(--forest)', deep: 'var(--deep-forest)' },
        ivory: 'var(--ivory)',
        sage: { DEFAULT: 'var(--sage)', dim: 'var(--sage-dim)' },
        champagne: 'var(--champagne)',
        muted: { dark: 'var(--text-muted-dark)', light: 'var(--text-muted-light)' },
        steel: { dark: 'var(--steel-text-dark)', light: 'var(--steel-text-light)' },
        hairline: { dark: 'var(--hairline-dark)', light: 'var(--hairline-light)' },
        control: { dark: 'var(--control-border-dark)', light: 'var(--control-border-light)' },
      },
      fontFamily: {
        display: 'var(--font-display)',
        sans: 'var(--font-ui)',
        mono: 'var(--font-mono)',
      },
      fontSize: {
        meta: ['12px', { lineHeight: '1.4', letterSpacing: '0.16em' }],
        'display-sm': ['28px', { lineHeight: '1.25' }],
        'display-md': ['clamp(32px,3.6vw,52px)', { lineHeight: '1.1' }],
        display: ['clamp(40px,6.4vw,104px)', { lineHeight: '1.04' }],
      },
      borderRadius: { DEFAULT: '2px', sm: '2px', md: '3px' },
      minHeight: { tap: '44px' },
      minWidth: { tap: '44px' },
      transitionTimingFunction: { brand: 'cubic-bezier(0.22,1,0.36,1)' },
      boxShadow: { none: 'none' },
    },
  },
};
