import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from './pages/home';
import Projects from './pages/projects';
import About from './pages/about';
import DiceCalculator from './pages/diceCalculator';
import MarylandFlag from './pages/marylandFlag';
import NomaiWriting from './pages/nomaiWriting';
import Simon from './pages/simon';
import SlitherlinkSolver from './pages/slitherlinkSolver';
import Website from './pages/website';
import CreatureCreator from "./pages/creatureCreator";
import CreatureCreator2 from "./pages/creatureCreator2.jsx";
import ColorContrast from "./pages/colorContrast";

import Header from './components/header';
import Footer from './components/footer';

import './css/general.css'
import SkipLink from "./components/skipLink";

export default function App() {
  return (
    <div>
      <SkipLink />
      <Header />
      <main id="main">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/diceCalculator" element={<DiceCalculator />} />
            <Route path="/marylandFlag" element={<MarylandFlag />} />
            <Route path="/nomaiWriting" element={<NomaiWriting />} />
            <Route path="/simon" element={<Simon />} />
            <Route path="/slitherlinkSolver" element={<SlitherlinkSolver />} />
            <Route path="/website" element={<Website />} />
            <Route path="/creatureCreator" element={<CreatureCreator />} />
            <Route path="/creatureCreator2" element={<CreatureCreator2 />} />
            <Route path="/colorContrast" element={<ColorContrast />} />
          </Routes>
        </Router>
      </main>
      <Footer />
    </div>
  );
};
