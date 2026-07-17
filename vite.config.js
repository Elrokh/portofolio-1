import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Relative assets keep the build portable on Vercel, GitHub Pages and
  // ordinary static hosting instead of tying it to one repository path.
  base: "./",
});
