module.exports = {
  content: ['storyblok/**/*.{vue,js}', 'components/**/*.{vue,js}', 'pages/**/*.vue'],
  theme: {
    extend: {
      fontFamily: {
        arimo: ['Arimo', 'system-ui'],
        arima: ['Arima', 'system-ui'],
      },
      screens: {
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      fontSize: {
        // Define responsive typography sizes with `xs` included
        display: ['6.25rem', { lineHeight: '1', screens: { xs: '3.5rem', sm: '4.5rem', md: '5.5rem', lg: '6.25rem' } }],
        headline1: ['4.6875rem', { lineHeight: '1', screens: { xs: '2.5rem', sm: '3.5rem', md: '4rem', lg: '4.6875rem' } }],
        headline2: ['3.125rem', { lineHeight: '1.25', screens: { xs: '2rem', sm: '2.5rem', md: '2.75rem', lg: '3.125rem' } }],
        headline3: ['2.1875rem', { lineHeight: '1.25', screens: { xs: '1.5rem', sm: '1.75rem', md: '2rem', lg: '2.1875rem' } }],
        headline4: ['1.5625rem', { lineHeight: '1.5', screens: { xs: '1rem', sm: '1.25rem', md: '1.375rem', lg: '1.5625rem' } }],
        paragraph1: ['1.25rem', { lineHeight: '1.75', screens: { xs: '1rem', sm: '1.125rem', md: '1.1875rem', lg: '1.25rem' } }],
        paragraph2: ['1rem', { lineHeight: '1.5', screens: { xs: '0.75rem', sm: '0.875rem', md: '0.9375rem', lg: '1rem' } }],
        paragraph3: ['0.875rem', { lineHeight: '1.75', screens: { xs: '0.625rem', sm: '0.75rem', md: '0.8125rem', lg: '0.875rem' } }],
        paragraphIcon: ['1rem', { lineHeight: '1.5', screens: { xs: '0.75rem', sm: '0.875rem', md: '0.9375rem', lg: '1rem' } }],
        button: ['0.875rem', { lineHeight: '1.75', screens: { xs: '0.625rem', sm: '0.75rem', md: '0.8125rem', lg: '0.875rem' } }],
        overline: ['0.625rem', { lineHeight: '1.75', screens: { xs: '0.4rem', sm: '0.5rem', md: '0.5625rem', lg: '0.625rem' } }],
        caption: ['0.75rem', { lineHeight: '1.75', screens: { xs: '0.5rem', sm: '0.625rem', md: '0.6875rem', lg: '0.75rem' } }],
      
},
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        whiteLavender: '#f6f6ff',
        carloGreen: '#b7ffc3',
        carloGreenMed: '#81f499',
        darkGreyRed: '#231f20',
        medGreen: '#005b2b',
        darkGreen: '#002810',
        medPinkGrey: '#b6b6bf',
        medPink: '#fb909d',
        lightPink: '#ffeef0',
        darkRed: '#b2001e',
        lightBlue: '#66ccff',
        lightCyan: '#E1FBFF',
        medBlue: '#006699',
      },
    },
  },
  plugins: [],
};
