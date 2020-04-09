const presetEnv = require("postcss-preset-env")
module.exports = () => ({
  plugins: [
    presetEnv({
      autoprefixer: true,
      stage: 3,
      features: {
        "custom-properties": true,
        "nesting-rules": true,
      },
    }),
  ],
})
