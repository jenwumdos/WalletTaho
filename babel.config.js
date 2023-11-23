// Global config for all babel-affected Taho packages.
module.exports = {
  plugins: ["styled-jsx/babel"],
  presets: [
    [
      "@babel/env",
      {
        targets: {
          browsers: ["chrome >= 90", "firefox >= 89"],
        },
