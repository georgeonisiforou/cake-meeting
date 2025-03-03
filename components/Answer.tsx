import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Answer = ({ isRevealed, currentPage, quotes }) => {
  return (
    <div className="p-4 flex flex-col max-w-[50%] gap-6">
      <span>Movie / Tv show:</span>
      {isRevealed && (
        <>
          {/* Image Reveal Animation */}
          <motion.div
            key={currentPage} // Re-run animation when page changes
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative aspect-video w-[30vw] rounded-md overflow-hidden"
          >
            <Image
              alt=""
              src={`/images/${quotes[currentPage - 1].picture}`}
              fill
              style={{ objectFit: "cover" }}
            />
          </motion.div>

          {/* Text Reveal Animation */}
          <motion.div
            key={currentPage} // Ensures animation runs when answer changes
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="text-center p-4"
          >
            {quotes[currentPage - 1].from}
          </motion.div>
        </>
      )}
    </div>
  );
};

export default Answer;
