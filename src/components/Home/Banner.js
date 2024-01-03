import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from 'assets/image/bannerimg.jpg';
import img2 from 'assets/image/bannerimg2.jpg';
import img3 from 'assets/image/bannerimg3.jpg';
import img4 from 'assets/image/bannerimg4.jpg';

const CustomBanner = () => {
  const bannerData = [
    {
      imageUrl: img4,
      description: 'Descripción de la imagen 1',
      width:30,
      height:30,

    },
    {
      imageUrl: img2,
      description: 'Descripción de la imagen 2',
      width:30,
      height:30,
    },
    {
      imageUrl: img3,
      description: 'Descripción de la imagen 2',
      width:30,
      height:30,
    },
    // Agrega más objetos según sea necesario
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // Cambia la imagen cada 5 segundos
  };

  return (
    <div className="bg-gray-800 text-white py-16">
      <div className="container mx-auto">
        
        <Slider {...settings}>
          {bannerData.map((item, index) => (
            <div key={index} className="relative">
              <img
                src={item.imageUrl}
                alt={`Banner ${index + 1}`}
                className="object-center mx-auto"
                style={{ maxHeight: '80vh' }} // Limitar la altura al 80% de la altura visible
              />
              
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CustomBanner;
