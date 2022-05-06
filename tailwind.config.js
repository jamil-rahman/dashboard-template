module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'sm': '280px',
      'md': '540px',
      'lg': '1000px',
    },
    colors: {
      background: "#F2F2F3",
      border: '#E5E5E6',
      primary: "#00C614",
      neutral: {
        100: "#6B6C72",
        500: '#B2B2B6',
        800: "#88898E",
        900: "#3E3F48",
      },
      white:"#FFFFFF",
      warning: {
        100: "#FDF4ED",
        200: "#F58A28",
      },
      success: "#44C776",
      error: "#F52828",
    },
    fontFamily: {
      body: ["Inter"]
    },
    extend: {},
  },
  plugins: [],
};
