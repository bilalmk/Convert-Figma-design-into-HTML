import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Recents from "@/components/Recents";


export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Recents/>
      <Featured/>
      <Footer/>
    </div>
  );
}
