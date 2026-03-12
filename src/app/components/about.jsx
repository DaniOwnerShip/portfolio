"use client"

import styleAbout from "@/styles/about.module.css"
import Image from "next/image";
import { useState } from 'react';



export default function About() {

    const [isExpanded, setIsExpanded] = useState(true);

    return (

        <>
            <div className={styleAbout.main} >

                <h3>👋 Presentación{!isExpanded && ` Daniel Orcha`}</h3>

                <button type="button" className={styleAbout.buttonExpand} onClick={() => setIsExpanded(!isExpanded)}>  {`${isExpanded ? "➖" : "➕"}`}</button>

                {isExpanded && <>


                    <section className={styleAbout.container} >

                        <h2>¡Hola! Soy Daniel Orcha, especialista en software, hardware y digitalización de procesos industriales.</h2>


                        <Image
                            className={styleAbout.circleImage}
                            src="/me.jpg"
                            alt="me"
                            width={130}
                            height={130}
                        />
                        <h2>💻 ADN Tecnológico: Del Bit al Cloud.</h2>

                        <h1 style={{ display: "inline" }}>+15</h1>  <span>  Años de experiencia en el sector. Backup ingeniero de software y desarrollador en Nextera Energy España. Postgrado en Automatización Industrial.
                            Autodidacta en programación desde la infancia.
                        </span>
                        <p>
                            Un ZX Spectrum, juegos eternos de cargar para lanzar error y un manual con códigos extraños fue mi primer contacto con la computación. Analizar y modificar los códigos de
                            ejemplos se convirtió más divertido que los juegos, entendiendo cada vez más los programas e influenciado por el espíritu exploratorio de los primeros entornos informáticos y películas de hackers de la época, despertaron en mí el interés por descifrar los secretos de la computación.
                        </p>
                        <p>
                            Desde entonces, he explorado un amplio abanico de tecnologías: <strong>microcontroladores y manipulación de bits en C/C++, POO, desarrollo de videojuegos, aplicaciones de escritorio
                            </strong>, y <strong>ecosistemas web full-stack</strong>, inteligencia artificial, incluso algunos ejercicios con Qbits. Esta trayectoria me ha permitido desarrollar una visión completa del software,
                            desde el hardware más cercano al sensor hasta soluciones escalables e integradas, aplicando principios de <strong>Industria 4.0 </strong>
                            y digitalización de procesos industriales.
                        </p>

                        <h3>-Cerrando la brecha entre lo físico y lo digital-</h3>
                    </section>

                    <br />
                </>}
            </div >
        </>

    );
};


