import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-screen bg-gray-900 flex flex-col gap-4 p-4 pb-12 items-center justify-between relative">
      <iframe
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1&mute=1&loop=1&playlist=QVuBFQ_qstc"
        frameborder="0"
        allow="autoplay"
      ></iframe>
      <div class="absolute top-0 left-0 w-full h-full bg-black/50"></div>
      <span className="text-[4vw] z-10">Welcome to the movie quote quiz</span>
      <div className="flex flex-col z-10">
        <span className="text-[3vw]">Description:</span>
        <ul className="list-disc">
          <li>43 quotes from movies or tv series to guess</li>
          <li>90 seconds timer</li>
          <li>Questions will become more difficult as the game progresses</li>
          <li>Each guess is 1 point for the team</li>
        </ul>
      </div>

      <Link
        href="/gameScreen"
        className="z-10 w-[200px] h-[60px] bg-lime-700 hover:bg-lime-800 hover:scale-105 transition-all flex justify-center items-center rounded-md"
      >
        START GAME
      </Link>
    </div>
  );
}
