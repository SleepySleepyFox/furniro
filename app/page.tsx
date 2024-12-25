import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductSection from "./components/ProductSection";

export default function Home() {
  return (
    <div className="h-screen w-full">
      <Header />
      <Hero />
      <ProductSection/>
    </div>
  );
}
