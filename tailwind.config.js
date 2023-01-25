module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: 'class',
    theme: {
      fontFamily: {
        display: ['Open Sans', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
      //additional
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      //end
      extend: {
        fontSize: {
          14: '14px',
        },
        backgroundColor: {
          'main-bg': '#FAFBFB',
          'main-dark-bg': '#20232A',
          'secondary-dark-bg': '#33373E',
          'light-gray': '#F7F7F7',
          'half-transparent': 'rgba(0, 0, 0, 0.5)',
        },
        //additional
        colors: {
          clrText: '#1d1f22',
          clrTextMedium: '#b8b6b6',
          clrGreyLight: '#ccc',
          clrGreyFaint: '#f8f8f8',
          clrWhite: '#fff',
          clrPrimaryWeak: '#3e40a535',
          clrPrimaryMedium: '#3e40a5b5',
          clrPrimary: '#3e40a5',
          clrSecondary: '#e5333c',
          clrAmber: 'rgb(247, 247, 6)',
          clrSuccess: '#5ece7b',
          clrNeutral: 'rgb(30, 177, 221)',
          clrFailure: 'rgb(235, 85, 85)',
          clrPortalPrimary: '#1f1f21',
          clrPortalSecondary: '#2982eb',
        },
        //end
        borderWidth: {
          1: '1px',
        },
        borderColor: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
        width: {
          400: '400px',
          760: '760px',
          780: '780px',
          800: '800px',
          1000: '1000px',
          1200: '1200px',
          1400: '1400px',
        },
        height: {
          80: '80px',
        },
        minHeight: {
          590: '590px',
        },
        backgroundImage: {
          'hero-pattern':
            "url('https://i.ibb.co/MkvLDfb/Rectangle-4389.png')",
        },
      },
    },
    plugins: [],
  };




// module.exports = {
//   content: ['./src/**/*.{js,jsx,ts,tsx}'],
//   theme: {
//     screens: {
//       sm: '480px',
//       md: '768px',
//       lg: '976px',
//       xl: '1440px',
//     },
//     extend: {
//       colors: {
//         clrText: '#1d1f22',
//         clrTextMedium: '#b8b6b6',
//         clrGreyLight: '#ccc',
//         clrGreyFaint: '#f8f8f8',
//         clrWhite: '#fff',
//         clrPrimaryWeak: '#3e40a535',
//         clrPrimaryMedium: '#3e40a5b5',
//         clrPrimary: '#3e40a5',
//         clrSecondary: '#e5333c',
//         clrAmber: 'rgb(247, 247, 6)',
//         clrSuccess: '#5ece7b',
//         clrNeutral: 'rgb(30, 177, 221)',
//         clrFailure: 'rgb(235, 85, 85)',
//         clrPortalPrimary: '#1f1f21',
//         clrPortalSecondary: '#2982eb',
//       }
//     },
//   }
// }
