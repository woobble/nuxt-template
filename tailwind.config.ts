import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "Roboto fallback", "'sans-serif'"],
      },
    },
  },
};
