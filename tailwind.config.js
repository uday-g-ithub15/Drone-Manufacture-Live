module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    // colors: {
    //   'myPrimary': '#FE5A0E',
    //   'white': '#ffffff'
    // },
    extend: {},
  },
  daisyui: {
    // themes: false,
    themes: [
      {
        theme: {
          primary: "#FE5A0E",
          secondary: "#f35314",
          accent: '#262626'
        },
      },
    ]
  },
  plugins: [require("daisyui")],
}
