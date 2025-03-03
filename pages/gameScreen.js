import Answer from "@/components/Answer";
import Footer from "@/components/Footer";
import Question from "@/components/Question";
import Image from "next/image";
import { useState, useEffect } from "react";
import { quotes } from "@/quotes";

export default function GameScreen() {
  const [isRevealed, setIsRevealed] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [counter, setCounter] = useState(90);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (!isRunning || counter <= 0) return; // Stop countdown at 0

    const timer = setTimeout(() => {
      setCounter(counter - 1);
    }, 1000);

    return () => clearTimeout(timer); // Cleanup timeout on unmount or re-render
  }, [counter, isRunning]);

  const handlePause = () => {
    setIsRunning((prev) => !prev);
  };

  const handleNext = () => {
    setCurrentPage((prev) => prev + 1);
    setIsRevealed(false);
    setCounter(90); // Reset timer
    setIsRunning(true); // Restart timer
  };

  const handleReveal = () => {
    setIsRevealed(true);
    setIsRunning(false); // Only pause if running
  };

  return (
    <div className="flex flex-col gap-2 p-4 justify-center items-center h-full w-full bg-gray-900">
      <span className="text-[3vw] text-slate-300">
        Where is this quote from?
      </span>
      <div className="flex w-full h-full">
        <Question currentPage={currentPage} quotes={quotes} />
        <div className="h-[400px] w-[1px] bg-gray-800"></div>
        <Answer
          isRevealed={isRevealed}
          currentPage={currentPage}
          quotes={quotes}
        />
      </div>
      <Footer
        currentPage={currentPage}
        handleNext={handleNext}
        handleReveal={handleReveal}
        counter={counter}
        handlePause={handlePause}
        isRunning={isRunning}
        setIsRunning={setIsRunning}
      />
      <div>Page: {currentPage}</div>
    </div>
  );
}
