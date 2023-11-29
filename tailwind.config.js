module.exports = {
  content: [
    "./src/**/*.html",
    "./src/**/*.vue",
    // Add other file types if needed
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["SF Pro Display", "sans-serif"],
      },
      spacing: {
        48: "48px",
      },
      width: {
        1260: "1260px",
      },
      colors: {
        blueColor: "#2F80ED",
        grayColor: {
          100: "#F2F2F2",
          200: "#EBEBEB",
          300: "#4F4F4F",
        },
        warning: "#FCEFCA",
      },
    },
  },
  plugins: [],
};
