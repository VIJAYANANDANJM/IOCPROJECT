import React from "react";
import { motion } from "framer-motion";

export default function Timeline({ concepts, selected, setSelected }) {
  return (
    <section className="timeline">
      {concepts.map((concept, index) => (
        <motion.div
          key={index}
          className={`card ${selected === index ? "active" : ""}`}
          whileHover={{ scale: 1.05 }}
          onClick={() => setSelected(index)}
        >
          <div className="card-header">
            <img src={concept.icon} alt={concept.title} className="icon" />
            <h3>{concept.title}</h3>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
