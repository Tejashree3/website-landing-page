import React, { useEffect, useState } from "react";
import carPng from "../../assets/Rectangle_3.png";
import yellowCar from "../../assets/Rectangle_3.png";
import AOS from "aos";

const Hero = ({ theme }) => {
  useEffect(() => {
    AOS.refresh();
  });
  return (
    <div className="dark:bg-black dark:text-secondary bg-primary duration-300 ">
      <div className="container min-h-[620px] flex">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-once="false"
            className="order-1 sm:order-2"
          >
            <img
              src={theme === "dark" ? carPng : yellowCar}
              alt=""
              className="sm:scale-125 relative -z-10 max-h-[500px] drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]"
            />
          </div>
          <div className="space-y-5 order-2 sm:order-1 sm:pr-32 pb-10 ">
            <p data-aos="fade-up" className="text-secondary text-2xl">
            Lorem ipsum  
            </p>
            <h1
              data-aos="fade-up"
              data-aos-delay="600"
              className="text-4xl lg:text-6xl font-semibold"
            >
             Website Name
            </h1>
            <p data-aos="fade-up" data-aos-delay="1000" className="text-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              veritatis explicabo quibusdam quae reprehenderit ab{" "}
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="1500"
              onClick={() => {
                AOS.refreshHard();
              }}
              className="dark:button-outline rounded-md bg-white hover:text-black transition duration-500 py-2 px-6 text-primary"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
