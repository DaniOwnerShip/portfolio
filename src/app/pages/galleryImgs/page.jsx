
import galleryImgs from "@/styles/galleryImg.module.css"
// import {obtenerRutasDeImagenes} from "@/api/galleryFetch.mjs" 
import fs from 'fs-extra';
import path from 'path';

import Image from "next/image";
async function obtenerRutasDeImagenes() {
    try {
        const carpetaImagenes = path.join(process.cwd(), 'public', 'gallery');
        const archivos = await fs.readdir(carpetaImagenes);

        // Utiliza map para generar un array de rutas

        const rutasDeImagenes = archivos.map(archivo => {
            // return `${carpetaImagenes}/${archivo}`.replace(/\\/g, '/'); 
            return `/gallery/${archivo}`.replace(/\\/g, '/');
        });

        // Retorna el array de rutas de imágenes
        return rutasDeImagenes;
    } catch (error) {
        console.error('Error al leer la carpeta de imágenes:', error);
        return [];
    }
}


export default async function GalleryImgs() {

    const rutasDeImagenes = await obtenerRutasDeImagenes();  

    return (

        <div className={galleryImgs.main} >

            {rutasDeImagenes.map((ruta, index) => (
                <Image
                    className={galleryImgs.galleryImg}
                    key={index}
                    src={ruta}
                    alt={`Imagen ${index + 1}`}
                    width={170}
                    height={130}
                    placeholder='empty' // "empty" | "blur" | "data:image/..."
                />
            ))}

        </div>


    );
};


