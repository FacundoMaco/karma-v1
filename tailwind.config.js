module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: { brand: { teal: '#155e75', dark: '#083344', light: '#f8fafc', accent: '#0ea5e9', gold: '#f59e0b' } },
      fontFamily: {
        serif: ['"Instrument Serif"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
        display: ['"Inter"', 'sans-serif'],
        mono: ['"Space Grotesk"', 'sans-serif'],
        quote: ['"Newsreader"', 'serif'],
      },
      spacing: { '13': '3.25rem', '15': '3.75rem' },
      borderRadius: { '4xl': '2rem', '5xl': '2.5rem', '6xl': '4rem' }
    }
  }
}
