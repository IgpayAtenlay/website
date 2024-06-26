import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from './pages/home';
import About from './pages/about';
import DiceCalculator from './pages/diceCalculator';
import MarylandFlag from './pages/marylandFlag';
import NomaiWriting from './pages/nomaiWriting';
import Simon from './pages/simon';
import SlitherlinkSolver from './pages/slitherlinkSolver';
import Website from './pages/website';
import CreatureCreator from "./pages/creatureCreator";

import Header from './components/header';
import Footer from './components/footer';

import './css/general.css'

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/diceCalculator" element={<DiceCalculator />} />
            <Route path="/marylandFlag" element={<MarylandFlag />} />
            <Route path="/nomaiWriting" element={<NomaiWriting />} />
            <Route path="/simon" element={<Simon />} />
            <Route path="/slitherlinkSolver" element={<SlitherlinkSolver />} />
            <Route path="/website" element={<Website />} />
            <Route path="/creatureCreator" element={<CreatureCreator />} />
          </Routes>
        </Router>
      </main>
      <Footer />
    </div>
  );
};
