import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from 'assets/image/bannerimg.jpg';
import img2 from 'assets/image/bannerimg2.jpg';
import img3 from 'assets/image/bannerimg3.jpg';
import img4 from 'assets/image/bannerimg4.jpg';

const Banner = () => {
  const bannerData = [
    {
      imageUrl: img1,
      description: 'Descripción de la imagen 1',
    },
    {
      imageUrl: img2,
      description: 'Descripción de la imagen 2',
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
        <h2 className="text-4xl font-extrabold mb-4">Nombre de tu Empresa</h2>
        <Slider {...settings}>
          {bannerData.map((item, index) => (
            <div key={index} className="relative">
              <img
                src={item.imageUrl}
                alt={`Banner ${index + 1}`}
                className="w-full h-auto max-h-96 max-w-full object-cover object-center"
              />
              <p className="text-sm mt-4">{item.description}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
