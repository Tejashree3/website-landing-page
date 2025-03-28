import React from "react";
import img1 from "../../assets/Rectangle_4.png";

const About = () => {
  return (
    <div className="dark:bg-dark bg-slate-100 sm:min-h-[600px] sm:grid sm:place-items-center duration-300">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div data-aos="slide-right" data-aos-duration="1500" className="grid grid-cols-1 lg:grid-cols-3 ">
            <img
              src={img1}
              alt=""
              className="sm:scale-125 sm:-translate-x-11
                flex justify-center 
                items-start hidden lg:flex flex
                max-w-[200px] max-h-[200px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]"
            />
                 <img
              src={img1}
              alt=""
              className="sm:scale-125 hidden lg:flex flex
              sm:-translate-x-11 max-w-[200px] max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]"
            />
                <img
              src={img1}
              alt=""
              className="sm:scale-125 sm:-translate-x-11  flex justify-center items-start max-w-[300px] max-h-[400px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]"
            />
          </div>
          <div>
            <div className="space-y-5 sm:p-16 pb-6">
              <h1
                data-aos="fade-up"
                className="text-3xl sm:text-4xl font-bold"
              >
                About us
              </h1>
              <p data-aos="fade-up" className="leading-8 tracking-wide">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur, magnam! Tenetur odio quo et maxime?
              </p>
              <p data-aos="fade-up">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
                tempora.
              </p>
              <button data-aos="fade-up" className="button-outline">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
