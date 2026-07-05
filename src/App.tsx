import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { HomePage } from "./pages/HomePage";
import { PantheonPage } from "./pages/PantheonPage";
import { GodPage } from "./pages/GodPage";
import { ComparePage } from "./pages/ComparePage";
import { AboutPage } from "./pages/AboutPage";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="pantheon/:pantheonId" element={<PantheonPage />} />
        <Route path="god/:godId" element={<GodPage />} />
        <Route path="compare" element={<ComparePage />} />
        <Route path="about" element={<AboutPage />} />
      </Route>
    </Routes>
  );
}
