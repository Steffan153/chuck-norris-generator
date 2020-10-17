require("dotenv").config();

module.exports = {
  purge: {
    enabled: process.env.PURGE_ENABLED === "true",
    content: ["./src/**/*.html", "./src/**/*.scss"],
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
