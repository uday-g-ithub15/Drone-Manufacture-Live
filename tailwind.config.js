module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    // colors: {
    //   'myPrimary': '#FE5A0E',
    //   'white': '#ffffff'
    // },
    extend: {
      backgroundImage: {
        portfolioBG: "url('/src/pages/MyPortfolio/img/uday.jpg')"
      }
    },
  },
  daisyui: {
    // themes: false,
    themes: [
      {
        theme: {
          primary: "#FE5A0E",
          secondary: "#f35314",
          accent: '#262626',
          info: '#3600f96b'
        },
      },
    ]
  },
  plugins: [require("daisyui")],
}
