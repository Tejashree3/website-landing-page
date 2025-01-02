import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


import { Pagination } from 'swiper/modules';
const testimonialData = [
  {
    name: "Dilshad",
    image: "",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    aosDelay: "0",
  },
  {
    name: "Satya",
    image: "",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    aosDelay: "300",
  },
  {
    name: "Sabir",
    image: "",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    aosDelay: "1000",
    
  },
  {
    name: "Dilshad",
    image: "",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    aosDelay: "0",
  },
  {
    name: "Dilshad",
    image: "",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    aosDelay: "0",
  },  {
    name: "Dilshad",
    image: "",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    aosDelay: "0",
  },
];

const Testimonial = () => {
  return (
    <>
      <span id="about"></span>
      <div className="dark:bg-black dark:text-white py-14 sm:pb-24">
        <div className="container">
          {/* Header */}
          <div className="space-y-4 pb-12">
            <p
              data-aos="fade-up"
              className="text-3xl font-semibold text-center sm:text-4xl"
            >
              What Our Clients Say About Us
            </p>
            <p data-aos="fade-up" className="text-center sm:px-44">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis iure consectetur tempora amet.
            </p>
          </div>

          {/* Swiper Slider */}
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            pagination={true} modules={[Pagination]}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
            }}
            className="mySwiper"
          >
            {testimonialData.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div
                  data-aos="fade-up"
                  data-aos-delay={testimonial.aosDelay}
                  className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-12 dark:bg-white/20 bg-gray-100 duration-300 rounded-lg"
                >
                  <div className="grid place-items-center">
                    <img
                      src="https://picsum.photos/200"
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <p>{testimonial.description}</p>
                  <p className="text-center font-semibold">{testimonial.name}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
