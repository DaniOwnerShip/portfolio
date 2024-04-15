import About from "@/app/components/about"
import ProyectsDisplay from "@/app/components/proyectsDisplay"
import Navbar from "@/app/components/navbar"
import Footer from "@/app/components/footer"
import Logo from "@/app/components/logo"
import styles from "./page.module.css";
import "@/styles/animations.css";
import "@/styles/scrollbar.css"
import {getdbdata} from "@/api/mongoClient.mjs"

async function getData() { 
  try {
    const res = await getdbdata(); 
    return res[0].data; 
  } catch (e) {
    return window.alert(`❌ ${e.message}`); 
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