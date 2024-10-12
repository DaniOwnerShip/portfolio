"use client"

import stylePD from "@/styles/proyectsDisplay.module.css"
import cardsData from '../../../public/data/cards.json';
import ProyectsCard from './proyectsCard';
import { useState } from 'react';
import Link from 'next/link';

export default function ProyectsDisplay() {

    const [isExpanded, setIsExpanded] = useState(true);

    return (

        <div className={stylePD.main}>

            <h3>⚙️ Proyectos y habilidades </h3>

            <button type="button" className={stylePD.buttonExpandM} onClick={() => setIsExpanded(!isExpanded)}>  {`${isExpanded ? "➖" : "➕"}`}</button>

            {isExpanded &&

                <section className={stylePD.container}>

                    <p>
                        Resumen de algunos proyecto y habilidades, junto con las principales tecnologías utilizadas.
                        Algunos proyectos interesantes se perdieron, si deseas más detalles puede usar el botón de contacto en la parte superior, también
                        puede ver algunas imágenes <Link href="/pages/galleryImgs"> aquí</Link>.
                    </p> 

                    <div className={stylePD.containerCards}>

                        {cardsData.map((card, i) => (


                            <div key={`card-${i}`} className={stylePD.card}>

                                <ProyectsCard card={card} />

                            </div>
                        ))}

                    </div>

                </section>}

        </div>

    );
};


