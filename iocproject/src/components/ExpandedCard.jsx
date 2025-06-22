import React from "react";
import { motion } from "framer-motion";

export default function ExpandedCard({ concept, onClose }) {
  return (
    <motion.div
      className="overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="expanded-card floating"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        transition={{ duration: 0.3 }}
      >
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>{concept.title}</h2>
        {concept.description.split("\n").map((para, index) => (
          <p key={index}>{para}</p>
        ))}
      </motion.div>
    </motion.div>
  );
}
