import { useState, useEffect } from "react";

// Importation des images
import img1 from "assets/img/football-field.jpg";
import img2 from "assets/img/pools-page.jpg";
import img3 from "assets/img/basketball-court.jpg";
import img4 from "assets/img/tennis-field.jpg";

// Tableau contenant les images
const images = [img1, img2, img3, img4];

const ImageCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Changement automatique d'image toutes les 3 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // 3 secondes

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-10 flex justify-center gap-2">
      {images.map((_, index) => (
        <div
          key={index}
          className={`h-8 w-5 rounded-full border-2 transition-all duration-500${
            index === currentImageIndex
              ? "bg-yellow-500 scale-125 border-yellow-500 shadow-lg shadow-yellow-500"
              : "bg-white border-gray-400 opacity-50 scale-100"
          }`}
        ></div>
      ))}
    </div>
  );
};

export default ImageCarousel;
