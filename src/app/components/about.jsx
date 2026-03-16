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
                        <p>
                            Especialista en convergencia OT/IT con más de 15 años de experiencia en entornos industriales críticos, desde la operación de planta hasta el desarrollo de software industrial. Integro sistemas de control (PLC/SCADA) con ecosistemas IT modernos (Fullstack/Cloud/Desktop) para la digitalización y automatización de procesos.
                        </p>

                        <p>
                            Mi historia comenzó con un ZX Spectrum, mientras esperaba la carga eterna de los juegos, comencé a leer los códigos del manual, modificarlos y ejecutarlos. Entender cómo funcionaban ese código pronto se hizo más divertido que los propios juegos.
                        </p>

                        <p>
                            En 2010 cursé un postgrado en Automatización Industrial, profundizando en los sistemas de control. Durante todo este tiempo he explorado un amplio abanico de tecnologías: desde microcontroladores y
                            manipulación de bits en C/C++, hasta POO, desarrollo de videojuegos, aplicaciones de escritorio, ecosistemas web full-stack, inteligencia artificial,
                            e incluso algunos ejercicios con qubits.
                        </p>

                        <p>
                            Esta trayectoria me ha permitido desarrollar una visión completa del software:
                            desde el hardware más cercano al sensor hasta soluciones escalables e integradas, aplicando siempre principios de Industria 4.0, SOLID y patrones de diseño.
                        </p>

                        <p>
                            Actualmente investigo sobre agentes y sub-agentes de IA especializados, SDD (Spec-Driven Development) y el potencial del stack completo con servidores MCP.
                        </p>

                        <h3>- Cerrando la brecha entre lo físico y lo digital - </h3>


                    </section>

                    <br />
                </>}
            </div >
        </>

    );
};


