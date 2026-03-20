import fs from 'fs';
import path from 'path';
import GalleryGrid from '@/components/GalleryGrid';

async function getGalleryImages() {
  const galleryDir = path.join(process.cwd(), 'public', 'gallery');

  try {
    const files = await fs.promises.readdir(galleryDir);

    const images = files
      .filter(file => /\.(jpg|jpeg|png|webp|gif)$/i.test(file))
      .sort((a, b) =>
        a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' })
      )
      .map((file, index) => ({
        id: index,
        src: `/gallery/${file}`,
        alt: `Gallery image ${index + 1}`
      }));

    return images;
  } catch (error) {
    console.error('Error reading gallery directory:', error);
    return [];
  }
}

export const metadata = {
  title: 'Gallery | Daniel Orcha',
  description: 'Photo gallery showcasing projects and work',
};

export default async function GalleryPage() {
  const images = await getGalleryImages();

  return (
    <>
      <GalleryGrid images={images} />
    </>
  );
}
