"use client";
import image from "@/constant/Images/image";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useEffect, useState } from "react";

const Test = () => {
  const testimonials = [
    {
      id: 1,
      name: "Google",
      message:
        "We have a great business relationship with Digital Service. We had worked with several other marketing companies in the past who did not deliver results and I am happy to say Digital Service is doing that for us. They help bring our vision to life in a way that makes sense",
      imgUrl: image.client,
    },
    {
      id: 2,
      name: "Amazon",
      message:
        "Digital Service has done a wonderful job redesigning our website to take it from plain and functional to amazingly professional. We would highly recommend Digital Service to any business that needs a hand improving their internet traffic or their business.",
      imgUrl: image.client,
    },
    {
      id: 3,
      name: "Adobe",
      message:
        "Today we work with statistics and more accurate data and realize the digital space is an essential tool for Clinica da Mama to position itself in an increasingly competitive field",
      imgUrl: image.client,
    },
    {
      id: 4,
      name: "Netflix",
      message:
        "It really met my requirements. You guys were very patient even though there were delays from my side. The price was competitive and all our requirements were met. If somebody were to ask me for something similar, I would definitely recommend you guys!",
      imgUrl: image.client,
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevState) => (prevState + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-24 sm:py-32 bg-[#FAF1F2]">
      <div className="app__container grid grid-cols-1 md:grid-cols-2">
        <div className="relative left-[5%] right-[5%] h-80">
          <ChatBubbleLeftRightIcon className="absolute h-60 w-60 md:bottom-12 right-12 text-[#ffdbc2]" />
          <div className="absolute md:top-12 pr-8">
            <h4 className="highlight z-2">Testimonials</h4>
            <h1 className="mt-2 text-4xl font-extrabold">
              See What Our <br />
              <span className="highlight">Client</span> Says
            </h1>
            <p className="mt-4 app__text">
            Discover what our clients are saying about our digital marketing solutions. Read testimonials from satisfied customers and learn how Digital Service has helped businesses like yours achieve their marketing goals.
            </p>
          </div>
        </div>
        <div className="relative bg-white h-80 shadow-lg px-6 py-12 rounded-xl">
          <Image
            src={image.quote}
            className="absolute bottom-0 right-2"
            height={150}
            width={150}
            alt=""
          />
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`slide-test app__text ${
                activeSlide === index ? "activeSlider-test" : ""
              }`}
            >
              <p>&ldquo; {testimonial.message} &rdquo;</p>
              <div className="flex items-center justify-start gap-4 mt-6">
                <Image src={testimonial.imgUrl} height={50} width={50} alt="" />
                <h3 className="text-xl font-semibold">{testimonial.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Test;
