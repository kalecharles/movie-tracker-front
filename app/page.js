'use client'
// import Image from "next/image";

// export default function Home() {
//   return (
//   );
// }
import { useEffect, useState } from "react";

const Home = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/api/")
      .then((response) => response.text()) // Since API returns plain text
      .then((data) => setMessage(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start"><h1>Movie Tracker</h1>
      <p>{message || "Loading..."}</p>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
};

export default Home;
