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

                        <h1 style={{ display: "inline" }}>+15</h1>
                        <span>
                            Años de experiencia en el sector. Especialista en sistemas de control y soporte al ingeniero de software en Nextera Energy y SaetaYield. Con un Postgrado en Automatización Industrial y una curiosidad inagotable, soy autodidacta en programación desde la infancia.
                        </span>
                        <p>
                            Mi historia comenzó con un ZX Spectrum. Juegos que tardaban una eternidad en cargar para terminar en error y un manual con códigos extraños fueron mi primer contacto con la computación. Analizar y modificar los ejemplos del manual terminó siendo mucho más divertido que jugar. Ese espíritu exploratorio de los primeros entornos informáticos despertó en mí la necesidad de descifrar cómo funcionan realmente los sistemas.
                        </p>
                        <p>
                            A lo largo de mi trayectoria he trabajado en automatización industrial y sistemas de control, incluyendo programación de PLCs (ABB, Siemens, Schneider) y desarrollo de sistemas SCADA/HMI (ABB, WinCC, Ignition).
                        </p>
                        <p>
                            En paralelo, he explorado un amplio abanico de tecnologías: desde microcontroladores y manipulación de bits en C/C++, hasta POO, desarrollo de videojuegos, aplicaciones de escritorio, ecosistemas web full-stack, inteligencia artificial, e incluso algunos ejercicios con qubits. Esta trayectoria me ha permitido desarrollar una visión completa del software: desde el hardware más cercano al sensor hasta soluciones escalables e integradas, aplicando siempre principios de Industria 4.0 y digitalización.
                        </p>

                        <h3>- Cerrando la brecha entre lo físico y lo digital - </h3>

                    </section>

                    <br />
                </>}
            </div >
        </>

    );
};


