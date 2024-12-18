import Image from "next/image";
import Header from "./components/header";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="h-screen">
      <Header />
      <Hero />
    </div>
  );
}
