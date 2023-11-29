module.exports = {
  content: [
    "./src/**/*.html",
    "./src/**/*.vue",
    // Add other file types if needed
  ],
  theme: {
    extend: {
      fontFamily: {
        body: [" SF Pro Display", "sans-serif"],
      },
      spacing: {
        10: "10px",
        15: "15px",
        18: "18px",
        20: "20px",
        25: "25px",
        30: "30px",
        35: "35px",
        48: "48px",
        50: "200px",
      },
      width: {
        1260: "1260px",
        285: "285px",
      },
      colors: {
        blueColor: {
          100: "#2F80ED",
          200: "#2969BF",
          300: "#144E9D",
        },
        grayColor: {
          100: "#F2F2F2",
          200: "#EBEBEB",
          300: "#4F4F4F",
          400: "#E0E0E0",
          500: "#D9D9D9",
        },
        warning: "#FCEFCA",
      },
    },
  },
  plugins: [],
};
