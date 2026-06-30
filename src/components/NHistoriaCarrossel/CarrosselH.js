import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import caminhao from "../../assets/images/caminhao.jpg"
import caminhao2 from "../../assets/images/caminhao2.jpg"
import caminhao3 from "../../assets/images/caminhao3.jpg"
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs"

const images = [
  caminhao,
  caminhao2,
  caminhao3,
];

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [opacityIMG, SetopacityIMG] = useState(1);

  const nextImage = () => {
    SetopacityIMG(0); 
    setTimeout(() => {
        SetopacityIMG(1)
      setCurrentImage((prevImage) =>
        prevImage === images.length - 1 ? 0 : prevImage + 1
      );
    }, 400); 
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 4000); 
    return () => clearInterval(interval); 
  }, []);

  return (
    <CarouselContainer>
      <Image opc={opacityIMG}>
        <img src={images[currentImage]} alt={`Image ${currentImage}`} />
      </Image>
    </CarouselContainer>
  );
};

export default Carousel;

const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 40vw;

  @media (max-width: 1200px) {
    width: 82vw;
    margin-top: 0;
  }
`;

const Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    box-shadow: rgba(0, 0, 0, 0.5) 0px 12px 28px;
    width: 28vw;
    max-height: 340px;
    object-fit: cover;
    border-radius: 8px;
    opacity: ${(props) => props.opc};
    transition: opacity 0.4s;
  }
  @media (max-width: 1200px) {
    img {
      width: 82vw;
      max-height: 220px;
    }
  }
`;

