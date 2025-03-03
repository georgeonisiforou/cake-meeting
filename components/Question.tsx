import { motion } from "framer-motion";
import React from "react";

const Question = ({ quotes, currentPage }) => {
  return (
    <div className="flex flex-col max-w-[50%] min-w-[50%] gap-6 p-4 max-h-[600px] overflow-hidden">
      <span>Quote:</span>
      <motion.div
        key={currentPage} // Ensures animation runs when the quote changes
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{ fontSize: "clamp(16px, 1.5vw, 4vw)" }}
        className="text-justify p-4"
      >
        {`"${quotes[currentPage - 1].quote}"`}
      </motion.div>
    </div>
  );
};

export default Question;
