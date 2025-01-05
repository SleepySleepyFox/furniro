import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductSection from "./components/ProductSection";
import BrowseSection from "./components/BrowseSection";

export default function Home() {
  return (
    <div className="h-screen w-full">
      <Header />
      <Hero />
      <BrowseSection />
      <ProductSection isOnHero={true} sliceTo={10}/>
    </div>
  );
}
