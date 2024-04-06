import About from "@/app/components/about"
import ProyectsDisplay from "@/app/components/proyectsDisplay"
import Navbar from "@/app/components/navbar"
import Footer from "@/app/components/footer"
import Logo from "@/app/components/logo"
import styles from "./page.module.css";
import "@/styles/animations.css";
import "@/styles/scrollbar.css"


export default function Home() {

  return ( 
    <div className="main">
      <Navbar />
      <Logo />
      <main className={styles.main}>
        <div className="lineAnim"></div>
        <About />
        <ProyectsDisplay />
      </main>
      <Footer />
    </div>
  );

}
