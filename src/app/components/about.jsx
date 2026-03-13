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
                            Años de experiencia en el sector. Especialista en sistemas de control y backup del ingeniero de software en Nextera Energy España y SaetaYield. Postgrado en Automatización Industrial. Autodidacta en programación desde la infancia.
                        </span>

                        <p>
                            Mi historia con la programación comenzó de niño con un ZX Spectrum. Juegos cargando eternamente para terminar en error y un manual con códigos extraños fueron mi primer contacto con la computación. Analizar y modificar los ejemplos del manual terminó siendo más divertido que los propios juegos. A medida que entendía mejor los programas, el espíritu exploratorio de los primeros entornos informáticos y la cultura tecnológica de la época despertaron en mí el interés por descifrar cómo funcionan realmente los sistemas.
                        </p>

                        <p>
                            A lo largo de mi trayectoria profesional he trabajado en <strong>automatización industrial y sistemas de control</strong>, incluyendo
                            <strong>programación de PLCs (ABB, Siemens, Schneider)</strong> y desarrollo de <strong>sistemas SCADA/HMI</strong> con tecnologías como
                            <strong>ABB, WinCC e Ignition</strong>.
                        </p>

                        <p>
                            En paralelo, he explorado un amplio abanico de tecnologías:
                            <strong>microcontroladores y manipulación de bits en C/C++, POO, desarrollo de videojuegos, aplicaciones de escritorio</strong>,
                            <strong>ecosistemas web full-stack</strong>, inteligencia artificial, e incluso algunos ejercicios con <strong>qubits</strong>.
                            Esta trayectoria me ha permitido desarrollar una visión completa del software, desde el hardware más cercano al sensor hasta soluciones escalables e integradas, aplicando principios de <strong>Industria 4.0</strong> y digitalización de procesos industriales.
                        </p>

                        <h3>- Cerrando la brecha entre lo físico y lo digital -</h3>
                    </section>

                    <br />
                </>}
            </div >
        </>

    );
};


