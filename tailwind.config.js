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
        10: "10px",
        18: "18px",
        30: "30px",
        35: "35px",
        48: "48px",
        50: "200px",
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
