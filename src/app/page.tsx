import Featured from "@/Components/Featured";
import Footer from "@/Components/Footer";
import Hero from "@/Components/Hero";
import Navbar from "@/Components/Navbar";
import Recents from "@/Components/Recents";


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
