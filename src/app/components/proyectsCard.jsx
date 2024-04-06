import stylePD from "@/styles/proyectsDisplay.module.css"
import Image from "next/image";
import { useState } from 'react';

export default function ProyectsCard({ card }) {
 
    const [isExpanded, setIsExpanded] = useState(true);

    return (
        <>

            <div className={stylePD.cardTittle} >
                <h4>{card.tittle}</h4>
            </div>

            <button type="button" className={stylePD.buttonExpand} onClick={() => setIsExpanded(!isExpanded)}>  {`${isExpanded ? "➖" : "➕"}`}</button>

            {isExpanded &&

                <div className={stylePD.cardContent} >

                    <div className={stylePD.cardBody}>

                        <Image
                            className={stylePD.cardImage}
                            src={card.image.url}
                            alt={card.image.alt}
                            width={card.image.size.w}
                            height={card.image.size.h}
                        />
                        <div className={stylePD.description} >
                            <p>{card.description}</p>
                        </div>

                    </div>

                    <div className={stylePD.cardLogos} >
                        {card.icons.map((icon, ic) => (
                            <Image key={`card-icon-${ic}`}
                                src={icon.url}
                                alt={icon.alt}
                                width={icon.size.w}
                                height={icon.size.h}
                            />
                        ))}
                    </div>

                </div>
            }

        </>




    )

}