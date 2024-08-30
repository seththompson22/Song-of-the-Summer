import Image from "next/image";
import styles from "./page.module.css";
import NavigationBar from "./components/NavigationBar";

export default function Home() {
  return (
    <main>
      <NavigationBar/>
      <div>
        Hello World
      </div>
    </main>
  );
}
