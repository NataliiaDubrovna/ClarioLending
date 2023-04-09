/** @type {import('tailwindcss').Config} */
const pxToRem = (px) => `${px / 16}rem`;

module.exports = {
  content: ["./src/UI/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      ghostWhite: "#EFF1FF",
      neonBlue: "#483FDD",
      luckyPoint: "#151D51",
      white: "#ffffff",
      panache: "#EAF5E4",
      downy: "#5CD6C0",
      pictonBlue: "#6C96CE",
      sorbus: "#DF723A",
      blue: "#E6F2FE",
      violet: "#3D317C",
      green: "#305938",
      darkBlue: "#1D367C",
      orange: "#FFF2EB",
      lightBlue: "#FFEFE1",
    },
    boxShadow: {
      none: "none",
      standard: "0px 3px 17px rgba(96, 148, 227, 0.21)",
      shadow2: "0px 6px 12px rgba(0, 0, 0, 0.1)",
    },
    backgroundImage: {
      "light-blue": "linear-gradient(180deg, #FFFFFF 29.01%, #F4F9FF 80.52%)",
      "light-purple":
        "linear-gradient(180deg, rgba(239, 241, 255, 0) 0%, rgba(239, 241, 255, 0.9) 82.13%, #EFF1FF 100%);",
      "gradient-purple":
        "linear-gradient(180deg, rgba(246, 237, 250, 0) 0%, rgba(246, 237, 250, 0.9) 82.13%, #F6EDFA 100%);",
      "light-violet":
        "linear-gradient(180deg, rgba(230, 242, 254, 0) 0%, rgba(230, 242, 254, 0.9) 82.13%, #E6F2FE 100%);",
      "light-green":
        "linear-gradient(180deg, rgba(234, 245, 228, 0) 0%, rgba(234, 245, 228, 0.9) 82.13%, #EAF5E4 100%);",
      purple:
        "linear-gradient(180deg, rgba(239, 241, 255, 0) 0%, rgba(239, 241, 255, 0.9) 82.13%, #EFF1FF 100%);",
    },
    borderRadius: {
      none: "0",
      xs: "0.25rem", //4px
      sm: "0.875rem", //14px
      lg: "1rem", //16px
      xl: "1.25rem", //20px
      xxl: "4.375rem", //70px
      full: "9999px",
    },
    spacing: {
      1: pxToRem(2),
      2: pxToRem(4),
      3: pxToRem(4),
      4: pxToRem(4),
      5: pxToRem(4),
      6: pxToRem(4),
      7: pxToRem(4),
    },
  },
  plugins: [],
};
