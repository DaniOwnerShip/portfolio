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
                        Algunos proyectos no pueden mostrarse debido a confidencialidad o pérdida.
                        Puede ver más imágenes <Link href="/pages/galleryImgs"> aquí</Link>
                        . Si desea más información, puede obtener el contacto en la barra superior.
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


