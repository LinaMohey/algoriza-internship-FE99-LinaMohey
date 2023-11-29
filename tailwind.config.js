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
        40: "40px",
        48: "48px",
        50: "50px",
        55: "55px",
        60: "60px",
        90: "90px",
        100: "100px",
      },
      width: {
        103: "103px",
        200: "200px",
        285: "285px",
        295: "295px",
        400: "400px",
        1350: "1350px",
      },
      height: {
        200: "200px",

        119: "119px",
        374: "374px",
      },
      minWidth: {
        400: "400px",
      },
      maxWidth: {
        1350: "1350px",
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
          600: "#333333",
        },
        warning: "#FCEFCA",
      },
    },
  },
  plugins: [],
};
