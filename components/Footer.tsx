import { quotes } from "@/quotes";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";

const Footer = ({
  handleNext,
  handleReveal,
  counter,
  handlePause,
  isRunning,
  setIsRunning,
  currentPage,
}) => {
  const [key, setKey] = useState(0); // Force re-render
  const controls = useAnimation();

  useEffect(() => {
    if (isRunning) {
      startProgress(counter);
    } else {
      controls.stop(); // Stop animation when paused
    }
  }, [isRunning, key]); // Restart when isRunning or key changes

  const startProgress = (duration) => {
    controls.start({
      width: "0px",
      transition: { duration, ease: "linear" }, // Restart animation with new duration
    });
  };

  const resetProgress = () => {
    controls.set({ width: "1000px" }); // Instantly reset to full width
    setKey((prev) => prev + 1); // Change key to force restart
  };

  const togglePause = () => {
    if (isRunning) {
      startProgress(counter); // Resume
    } else {
      controls.stop(); // Pause
    }
    setIsRunning(!isRunning);
  };

  return (
    <div className="flex flex-col gap-3 justify-center items-center w-full">
      <div className="w-[1000px] h-7 rounded-xl border-1 p-1 border-gray-500 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-green-400 to-green-600 rounded-xl"
          initial={{ width: "1000px" }} // Start full width
          animate={controls} // Controlled animation
        />
      </div>
      <div className="flex gap-12">
        <span className=" text-white">Timer:</span>
        <span className=" text-white">{`${counter} seconds`}</span>
      </div>
      <div className="flex gap-4">
        <button
          onClick={() => {
            handlePause();
            togglePause();
          }}
          className="bg-indigo-400 w-[140px] rounded-2xl p-2 text-4xl cursor-pointer hover:bg-indigo-500 transition-all
          shadow-[0px_4px_10px_rgba(75,0,130,0.7)] hover:shadow-[0px_6px_15px_rgba(75,0,130,1)]"
        >
          {isRunning ? "Pause" : "Resume"}
        </button>
        <button
          onClick={() => {
            handleReveal();
            togglePause();
          }}
          className="bg-green-400 w-[140px] rounded-2xl p-2 text-4xl cursor-pointer hover:bg-green-500 transition-all
          shadow-[0px_4px_10px_rgba(34,197,94,0.7)] hover:shadow-[0px_6px_15px_rgba(34,197,94,1)]"
        >
          Reveal
        </button>
        <button
          disabled={currentPage >= quotes.length}
          onClick={() => {
            handleNext();
            resetProgress();
          }}
          className="bg-blue-400 w-[140px] rounded-2xl p-2 text-4xl cursor-pointer hover:bg-blue-500 transition-all
          shadow-[0px_4px_10px_rgba(59,130,246,0.7)] hover:shadow-[0px_6px_15px_rgba(59,130,246,1)]"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Footer;
