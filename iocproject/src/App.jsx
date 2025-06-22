import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Timeline from "./components/Timeline";
import ExpandedCard from "./components/ExpandedCard";
import Footer from "./components/Footer";
import { concepts } from "./data/concepts";
import "./styles/main.css";

export default function App() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="app">
      <Header />
      <Hero />
      <Timeline concepts={concepts} selected={selected} setSelected={setSelected} />
      {selected !== null && (
  <ExpandedCard concept={concepts[selected]} onClose={() => setSelected(null)} />
)}
      <Footer />
    </div>
  );
}
