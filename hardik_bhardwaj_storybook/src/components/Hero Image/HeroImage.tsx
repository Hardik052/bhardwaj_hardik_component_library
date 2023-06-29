import React from 'react';
import './HeroImage.css';

interface HeroImageProps {
  imageUrl: string;
  altText: string;
  caption: string;
}

const HeroImage: React.FC<HeroImageProps> = ({ imageUrl, altText, caption }) => {
  return (
    <div className="hero-image">
      <img src={imageUrl} alt={altText} />
      <div className="caption">{caption}</div>
    </div>
  );
};

export default HeroImage;
