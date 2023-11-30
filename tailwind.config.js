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
        11: "11px",
        12: "12px",
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
        150: "150px",
        240: "240px",
        338: "338px",
      },
      height: {
        200: "200px",

        119: "119px",
        374: "374px",
      },
      minWidth: {
        150: "150px",
        240: "240px",
        338: "338px",
        400: "400px",
        500: "500px",
      },
      maxWidth: {
        60: "60px",
        1350: "1350px",
        810: "810px",
      },

      colors: {
        green: {
          100: "#85E0AB",
        },
        blueColor: {
          100: "#2F80ED",
          200: "#2969BF",
          300: "#144E9D",
        },
        yellow: {
          100: "#F2C94C",
        },
        grayColor: {
          100: "#F2F2F2",
          200: "#EBEBEB",
          300: "#4F4F4F",
          400: "#E0E0E0",
          500: "#D9D9D9",
          600: "#333333",
          700: "#F4F4F4",
        },
        warning: "#FCEFCA",
      },
    },
  },
  plugins: [],
};
