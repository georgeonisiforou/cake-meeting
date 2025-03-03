import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="h-screen">
      <Component {...pageProps} />
    </div>
  );
}
