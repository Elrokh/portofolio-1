import { Route, Routes } from "react-router-dom";

import Builder from "./pages/Builder";
import Dashboard from "./pages/Dashboard";
import Landing from "./pages/Landing";
import NotFound from "./pages/NotFound";
import PublicPortfolio from "./pages/PublicPortfolio";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/builder" element={<Builder />} />
      <Route path="/portfolio/:slug" element={<PublicPortfolio />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
