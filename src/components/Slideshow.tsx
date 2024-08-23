import React, { useState, useEffect } from 'react';
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';

const Slideshow = () => {
  const folders = ['Andi', 'Juliana', 'Magda'];
  const [currentFolder, setCurrentFolder] = useState('');
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const randomFolder = folders[Math.floor(Math.random() * folders.length)];
    setCurrentFolder(randomFolder);

    // Fetch images from the selected folder
    const folderImages = [];
    const importAll = (r) => r.keys().map(r);
    const imagesInFolder = importAll(require.context(`../images/${randomFolder}`, false, /\.(jpg|jpeg|png|gif|svg)$/));

    imagesInFolder.forEach((image, index) => {
      folderImages.push({
        id: index,
        path: image.default,
      });
    });

    setImages(folderImages);

    // Reset slideshow after 3 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === folderImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  if (!images || images.length === 0) {
    return <div>No images found</div>;
  }

  const currentImage = images[currentImageIndex];

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <GatsbyImage image={currentImage.path} alt="Slideshow Image" />
    </div>
  );
};

export default Slideshow;
