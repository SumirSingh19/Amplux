// src/components/IsometricCard.js
import PHOTO1 from "../assets/images/3d1.png";
import PHOTO2 from "../assets/images/3d2.png";
import PHOTO3 from "../assets/images/3d3.png";

const IsometricCard = () => {
  const images = [PHOTO1, PHOTO2, PHOTO3];

  return (
    <div className="isometric-container">
      {images.map((src, index) => (
        <div key={index} className="isometric-card">
          <img src={src} alt={`Card ${index}`} className="card-image" />
        </div>
      ))}
    </div>
  );
};

export default IsometricCard;
