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
                            Mi curiosidad técnica nació con un Load "" enter en un ZX Spectrum. Mientras esperaba la carga eterna de los juegos, comencé a leer los códigos del manual, modificarlos y ejecutarlos. Entender cómo funcionaban ese código pronto se hizo más divertido que los propios juegos.
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





                        {/* 

                        <p>
                            Especialista en convergencia <strong>OT/IT</strong> con más de 15 años de experiencia en entornos industriales críticos, desde la operación de planta hasta el desarrollo de <strong>software industrial</strong>. Integro sistemas de control (<strong>PLC/SCADA</strong>) con ecosistemas IT modernos (<strong>Fullstack/Cloud/Desktop</strong>) para la <strong>digitalización</strong> y <strong>automatización de procesos</strong>.
                        </p>

                        <p>
                            Mi curiosidad técnica nació con un <strong>ZX Spectrum</strong>: mientras esperaba la eterna carga de los juegos, empecé a leer los códigos del manual, hacer modificaciones y aprender cómo funcionaban los sistemas por dentro.
                        </p>

                        <p>
                            Durante todo este tiempo he explorado un amplio abanico de tecnologías: desde <strong>microcontroladores</strong> y manipulación de bits en <strong>C/C++</strong>, pasando por <strong>C#</strong>, <strong>VB</strong> y <strong>Electron</strong>, hasta ecosistemas web como <strong>Node.js</strong> y <strong>Next.js</strong>, <strong>inteligencia artificial</strong> e incluso algunos ejercicios con <strong>qubits</strong>.
                        </p>

                        <p>
                            Tras un <strong>postgrado en Automatización Industrial</strong> en 2010, evolucioné del hardware puro a una visión completa del software, aplicando siempre principios de <strong>Industria 4.0</strong>, <strong>SOLID</strong> y patrones de diseño.
                        </p>

                        <p>
                            Actualmente investigo sobre <strong>agentes de IA especializados</strong> y el potencial del stack completo con <strong>servidores MCP</strong>.
                        </p>



        <p>
                            Con más de 15 años de experiencia en entornos industriales críticos, mi trabajo abarca desde la operación de planta hasta el desarrollo de software industrial. Integro sistemas de control (PLC/SCADA) con ecosistemas IT modernos (Fullstack/Cloud/Desktop) para la digitalización, análisis y automatización de procesos industriales.
                        </p>

                        <p>
                            Mi pasión comenzó con un ZX Spectrum: juegos que tardaban una eternidad en cargar y un manual con códigos que empecé a modificar. Pronto, entender los sistemas resultó más divertido que los propios juegos.
                        </p><p>
                            En 2010 cursé un Postgrado en Automatización Industrial, profundizando en sistemas de control. Durante este tiempo he explorado desde microcontroladores y manipulación de bits en C/C++, hasta POO, desarrollo de videojuegos, ecosistemas web full-stack e inteligencia artificial.
                        </p><p>
                            Esta trayectoria me ha permitido desarrollar una visión completa del software: desde el hardware más cercano al sensor hasta soluciones escalables e integradas, aplicando siempre principios de Industria 4.0, SOLID y patrones de diseño.
                        </p><p>
                            Actualmente investigo sobre agentes de IA especializados y el potencial del stack completo con servidores MCP.</p>



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

                        <h3>- Cerrando la brecha entre lo físico y lo digital - </h3> */}

                    </section>

                    <br />
                </>}
            </div >
        </>

    );
};


