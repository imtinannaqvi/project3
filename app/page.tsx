import Image from "next/image";
import Tech from "./Components/Tech";
import Footer from "./Components/Footer";
import Doc from "./Components/Doc";
import News from "./Components/News";
import Oral from "./Components/Oral";
import Ubmrela from "./Components/Ubmrela";
import Services from "./Components/Services";
import Navbar from "./Components/Navbar";
import Sliders from "./Components/Sliders";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Sliders/>
    <Services/>
     <Ubmrela/>
      <Tech/>
      <Doc/>
       <Oral/>
      <News/>
      <Footer/>
    </>
  );
}