"use client"

import stylePD from "@/styles/proyectsDisplay.module.css" 
import cardsData from '../../../public/data/cards.json';
import ProyectsCard from './proyectsCard';
import { useState } from 'react';


export default function ProyectsDisplay() {
 
    const [isExpanded, setIsExpanded] = useState(true);

    return (

        <div className={stylePD.main}>

            <h3>⚙️ Proyectos y habilidades </h3>

            <button type="button" className={stylePD.mainb} onClick={() => setIsExpanded(!isExpanded)}>  {`${isExpanded ? "➖" : "➕"}`}</button>

            {isExpanded && 
            
            <section className={stylePD.container}>

                <p>
                Resumen de habilidades y proyectos destacados, junto con una lista de las principales tecnologías utilizadas. 
                Algunos proyectos no pueden mostrarse debido a restricciones de confidencialidad o pérdida de estos al dañarse el disco.
                Próximamente, se añadirán páginas detalladas para cada sección:
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


