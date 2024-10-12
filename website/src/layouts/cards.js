import React from 'react';
import image1 from '../assets/image1.webp';
import image2 from '../assets/image2.jpeg';
import image3 from '../assets/image3.jpg';

const Cards = () => {
  const cardData = [
    { 
      title: "L’Homme perfume Men 100 ML", 
      description: "L’Homme is a sophisticated and elegant fragrance that captures the essence of modern masculinity. It is a fragrance that exudes ...",
      price: "Rs3,350 PKR", 
      imageUrl: image1
    },
    { 
      title: "Jerald EDT Perfume – Men", 
      description: "HEMANI Fragrances JERALD Perfume is a fine masculine scent 💡 Inspired by the famous John Robert’s Gambit",
      price: "Rs1,500 PKR", 
      imageUrl: image2
    },
    { 
      title: "Calvin Klein Eternity For Men", 
      description: "A classic scent from the perfume industry is Eternity for Men EDT 100ml. Spices, fruits, and exotic flowers are among the amazing array of notes that ...",
      price: "Rs13,800 PKR", 
      imageUrl: image3
    },
  ];

  return (
    <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      {cardData.map((card, index) => (
        <div key={index} className="bg-white p-6 shadow-md rounded-md flex flex-col justify-between"> 
          <div>
            <img src={card.imageUrl} alt={card.title} className="w-full h-auto object-contain rounded-md mb-4" />
            <h2 className="text-xl font-bold mb-2">{card.title}</h2>
            <p className="text-gray-700 mb-2">{card.description}</p>
          </div>
          <div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold text-green-600">{card.price}</span>
            </div>
            <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;