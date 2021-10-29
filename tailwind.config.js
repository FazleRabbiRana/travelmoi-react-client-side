module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
		container: {
      center: true,
			padding: '1rem',
    },
    extend: {
			colors: {
        'my-primary': {
          light: 'var(--clr-primary-light)',
          DEFAULT: 'var(--clr-primary)',
          dark: 'var(--clr-primary-dark)'
        },
        'my-secondary': {
          light: 'var(--clr-secondary-light)',
          DEFAULT: 'var(--clr-secondary)',
          dark: 'var(--clr-secondary-dark)'
        },
				'my-yellow': 'var(--clr-yellow)',
      },
      fontFamily: {
        'my-primary': ['var(--font-primary)'],
      },
      maxWidth: {
        'clear': 'calc(100% - 2rem)',
      },
      letterSpacing: {
        'tiny': '1px',
      },
		},
  },
  variants: {
    extend: {
			scale: ['group-hover'],
      visibility: ['hover', 'focus', 'group-hover', 'group-focus'],
		},
  },
  plugins: [
		// function ({ addComponents }) {
    //   addComponents({
    //     '.container': {
    //       maxWidth: '100%',
    //       paddingLeft: '1rem',
    //       paddingRight: '1rem',
    //       marginLeft: 'auto',
    //       marginRight: 'auto',
    //       '@screen sm': {
    //         maxWidth: '720px',
    //       },
    //       '@screen md': {
    //         maxWidth: '980px',
    //       },
    //       '@screen lg': {
    //         maxWidth: '1200px',
    //       },
    //       '@screen xl': {
    //         maxWidth: '1500px',
    //       },
    //     },
    //   })
    // }
	],
}