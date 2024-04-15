import About from "@/app/components/about"
import ProyectsDisplay from "@/app/components/proyectsDisplay"
import Navbar from "@/app/components/navbar"
import Footer from "@/app/components/footer"
import Logo from "@/app/components/logo"
import styles from "./page.module.css";
import "@/styles/animations.css";
import "@/styles/scrollbar.css"
import {run} from "@/api/mongoClient.mjs"

async function getData() { 
  try {
    const res = await run(); 
    return res[0].data; 
  } catch (error) {
    window.alert(`❌ ${error.message}`);
    return null; // Otra opción es lanzar el error para manejarlo más adelante
  }
}

export default async function Home() {
  const data = await getData();
  
  return (
    <main className={styles.main}>
      <Navbar data={data}/>
      <Logo />
      <div className="lineAnim"></div>
      <About />
      <ProyectsDisplay />
      <Footer />
    </main>
  );
}