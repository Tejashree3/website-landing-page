import React from "react";
import whiteCar from "../../assets/Rectangle_3.png";
import car2 from "../../assets/Rectangle_3.png";
import car3 from "../../assets/Rectangle_3.png";

const carList = [
  {
    name: "Lorem",
    price: 100,
    image: whiteCar,
    aosDelay: "0",
  },
  {
    name: "Lorem",
    price: 140,
    image: car2,
    aosDelay: "500",
  },
  {
    name: "Lorem ",
    price: 100,
    image: car3,
    aosDelay: "1000",
  },
];

const CarList = () => {
  return (
    <div className="pb-24">
      <div className="container">
        {/* Heading */}
        <h1
          data-aos="fade-up"
          className="text-3xl sm:text-4xl text-center font-semibold mb-3"
        >
          Lorem ipsum dolor
        </h1>
        <p data-aos="fade-up" aos-delay="400" className="text-center text-sm pb-10">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor iure
          nemo ab?
        </p>
        {/* Car listing */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
            {carList.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                className="space-y-3 border-2 border-gray-300 hover:border-primary p-3 rounded-xl relative group"
              >
                <div className="w-full h-[300px]">
                  <img
                    src={data.image}
                    alt=""
                    className="w-full h-[300px] object-cover sm:translate-x-0 group-hover:sm:translate-x-10 duration-700"
                  />
                </div>
                <div className="space-y-2">
                  <h1 className="text-primary font-semibold">{data.name}</h1>
                  <div className="flex justify-between items-center text-xl font-semibold">
                  <p> Lorem ipsum dolor sit amet</p>
                  </div>
                </div>
                
              </div>
            ))}
          </div>
        </div>
        {/* End of car listing */}
        <div className="grid place-items-center mt-8">
          <button data-aos="fade-up" className="button-outline">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarList;
