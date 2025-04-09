'use client'
import BrowseSection from "./components/BrowseSection";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProductSection from "./components/ProductSection";
import SliderSection from "./components/SliderSection";
import FurniroFurniture from "./components/FurniroFurniture"
import Footer from "./components/Footer"
import StoreProvider from "./StoreProvider";


export default function Home() {
  return (
    <div className="h-screen w-full">
      <Navbar />
      <Hero/>
      <BrowseSection />
      <StoreProvider>
        <ProductSection isOnHero={true} sliceTo={10}/>
      </StoreProvider>
      <SliderSection/> 
      <FurniroFurniture/>
      <hr/>
      <Footer/>
    </div>

  );
}
