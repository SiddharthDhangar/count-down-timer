export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  corePlugins: {
    preflight: false, // ✅ disables reset
  },
  theme: {
    extend: {},
  },
  plugins: [],
};
