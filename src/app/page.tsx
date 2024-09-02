import Image from "next/image";
import styles from "./page.module.css";
import NavigationBar from "./components/NavigationBar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";

export default function Home() {
  return (<>
    <NavigationBar/>
    <HeroSection></HeroSection>
    <Footer/>
    </>);
}
