/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        app: {
          bg: "#020617",
          card: "#0F172A",
          primary: "#06B6D4",
          secondary: "#2563EB",
          accent: "#38BDF8",
          text: "#F1F5F9",
        },
      },
      boxShadow: {
        glow: "0 0 60px rgba(6, 182, 212, 0.18)",
        panel: "0 24px 80px rgba(2, 6, 23, 0.45)",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #06B6D4, #2563EB, #1E3A8A)",
      },
    },
  },
  plugins: [],
};
