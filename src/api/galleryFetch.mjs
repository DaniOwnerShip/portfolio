 
import fs from 'fs-extra';
import path from 'path';
// Define la función para obtener las rutas de las imágenesconst path = require('path');
export async function obtenerRutasDeImagenes() {
    try {
      const carpetaImagenes = path.join(process.cwd(), 'public', 'gallery');
      const archivos = await fs.readdir(carpetaImagenes);
      
      // Utiliza map para generar un array de rutas
      const rutasDeImagenes = archivos.map(archivo => `${carpetaImagenes}/${archivo}`);
      
      return rutasDeImagenes;
    } catch (error) {
      console.error('Error al leer la carpeta de imágenes:', error);
      return [];
    }
  }