"use client"

import styleAbout from "@/styles/about.module.css"
import Image from "next/image";
import { useState } from 'react';



export default function About() {
    
    const [isExpanded, setIsExpanded] = useState(true);

    return (

        <>
            <div className={styleAbout.main} >

                <h3>👋 Presentación{!isExpanded && ` Daniel Orcha` }</h3>

                <button type="button" className={styleAbout.buttonExpand} onClick={() => setIsExpanded(!isExpanded)}>  {`${isExpanded ? "➖" : "➕"}`}</button>
             
                {isExpanded && <>


                    <section className={styleAbout.container} >

                        <h2>¡Hola! Soy Daniel Orcha, desarrollador de software, hardware y sistemas automatizados.</h2>

  
                            <Image
                                className={styleAbout.circleImage}
                                src="/me.jpg"
                                alt="me"
                                width={130}
                                height={130}
                            /> 
                        <p>
                            Titulado como Técnico Especialista en Electricidad y Electrónica (FPII) con Postgrado en Automatización Industrial (UCAV), mi interés por la tecnología despertó desde muy pequeño,
                            cuando comencé a explorar la programación en un ZX Spectrum, copiando y modificando ejemplos de códigos del manual.
                        </p>
                        <p>
                            A lo largo de mi carrera, he trabajado en proyectos personales y como freelance, abarcando áreas como el desarrollo web full-stack, diseño de prototipos electrónicos,
                            sistemas automatizados, desarrollo de videojuegos, cuentas de trading automáticas (mt4) y el tokenizado mediante Smart Contracts Ethereum. También he
                            desarrollado algunas aplicaciones de escritorio para Windows y de Inteligencia Artificial para cálculos de proceso y de reconocimiento de imágenes. Me adapto fácilmente a diferentes 
                            tipos de tecnologías y lenguajes de programación.
                        </p>
                        <p>
                            Profesionalmente, me desempeño como operador en sala de control y mantenimiento en entornos industriales; también aplico mis habilidades de programación en mejoras de lógica, diseño de pantallas PI
                            y administrador de bases de datos. Además, he desarrollado herramientas como libros Excel para seguimiento de equipos con grandes volúmenes de datos, reportes automáticos
                            y aplicaciones web cliente-servidor para digitalización de informes y recopilación de datos de campo.
                        </p>
                        <p>
                            Estoy emocionado por la oportunidad de seguir creciendo y contribuir con mi experiencia y pasión por la tecnología en futuros proyectos. ¡Espero tener la oportunidad de trabajar juntos!
                        </p> 

                    </section>

                    <br />
                </>}
            </div>
        </>

    );
};


