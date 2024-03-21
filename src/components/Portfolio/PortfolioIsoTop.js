'use client';
import image from "@/constant/Images/image";
import Image from "next/image";
import './PortfolioIsoTop.css'
import { Suspense, useState } from "react";
import loading from "@/app/loading";
import { ArrowSmallLeftIcon, ArrowSmallRightIcon, XMarkIcon } from "@heroicons/react/24/outline";

const images = [
  {
    imgUrl: image.portfolio1,
  },
  {
    imgUrl: image.portfolio2,
  },
  {
    imgUrl: image.portfolio3,
  },
  {
    imgUrl: image.portfolio4,
  },
  {
    imgUrl: image.portfolio5,
  },
  {
    imgUrl: image.portfolio6,
  },
  {
    imgUrl: image.portfolio7,
  },
  {
    imgUrl: image.portfolio8,
  },
  {
    imgUrl: image.portfolio9,
  },
  {
    imgUrl: image.portfolio10,
  },
  {
    imgUrl: image.portfolio11,
  },
  {
    imgUrl: image.portfolio12,
  },
  {
    imgUrl: image.portfolio13,
  },
  {
    imgUrl: image.portfolio14,
  },
  {
    imgUrl: image.portfolio15,
  },
  {
    imgUrl: image.portfolio16,
  },
  {
    imgUrl: image.portfolio17,
  },
  {
    imgUrl: image.portfolio18,
  },
  {
    imgUrl: image.portfolio19,
  },
  {
    imgUrl: image.portfolio20,
  },
  {
    imgUrl: image.p1,
  },
  {
    imgUrl: image.p2,
  },
  {
    imgUrl: image.p3,
  },
  {
    imgUrl: image.p4,
  },
  {
    imgUrl: image.p5,
  },
  {
    imgUrl: image.p6,
  },
  {
    imgUrl: image.p7,
  },
  {
    imgUrl: image.p8,
  },
  {
    imgUrl: image.p9,
  },
  {
    imgUrl: image.p10,
  },
  {
    imgUrl: image.p11,
  },
  {
    imgUrl: image.p12,
  },
  {
    imgUrl: image.p13,
  },
  {
    imgUrl: image.p14,
  },
  {
    imgUrl: image.p15,
  },
  {
    imgUrl: image.p16,
  },
  {
    imgUrl: image.p17,
  },
  {
    imgUrl: image.p18,
  },
  {
    imgUrl: image.p19,
  },
  {
    imgUrl: image.p20,
  },
  {
    imgUrl: image.p21,
  },
  {
    imgUrl: image.p22,
  },
  {
    imgUrl: image.p23,
  },
  {
    imgUrl: image.p24,
  },
];
const PortfolioIsoTop = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };


  return (
    <section className="py-12">
      <div className="app__container">
        <div
          className="section-title animate"
          style={{
            opacity: "1",
            visibility: "inherit",
            transform: "translate(0px, 0px)",
          }}
        >
          <h2 className="text-3xl font-semibold text-center">
            We Have Done Many Others Work <br/>Let’s See Our Works
          </h2>
        </div>
        <Suspense fallback={loading}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">
          {images.map((i, k) => {
            return (
              <div key={k}>
                <div className="isotop-wrapper relative">
                  <div className="full-width">
                    <div
                      className="example-image-link"
                      data-lightbox="example-1"
                      
                    >
                      <Image
                        className="example-image"
                        src={i.imgUrl}
                        alt="gallery"
                        title="gallery"
                        onClick={() => handleImageClick(k)}
                      />
                      {selectedImage === k && (
                        <div className="fixed z-10 inset-0 overflow-y-auto">
                          <div className="flex items-center justify-center min-h-screen text-center sm:block">
                            <div className="fixed inset-0 transition-opacity">
                              <div className="absolute inset-0 bg-black opacity-60"></div>
                            </div>
                            <span
                              className="hidden sm:inline-block sm:align-middle sm:h-screen"
                              aria-hidden="true"
                            >
                              &#8203;
                            </span>
                            <div className="inline-block align-bottom rounded-lg text-left shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                              <div>
                                <div className="text-center">
                                  <Image
                                    src={images[k].imgUrl}
                                    alt="portfolio"
                                    width={800}
                                    height={800}
                                    onClick={() => setSelectedImage(null)}
                                  />
                                  <button onClick={() => setSelectedImage(null)} className="absolute animate-[spin_4s_linear_infinite] -bottom-4 bg-black text-white p-2 rounded-full transition-all duration-300 ease-in-out hover:rotate-90"><XMarkIcon className="h-5 w-5 flex-none"
                                  aria-hidden="true"/></button>
                                  <button onClick={() => handleImageClick(k+1)} className="absolute right-0 sm:-right-4 top-1/2 bg-white text-indigo-600 shadow-lg p-2 rounded-full transition-all duration-300 ease-in-out"><ArrowSmallRightIcon className="h-5 w-5 flex-none"
                                  aria-hidden="true"/></button>
                                  <button onClick={() => handleImageClick(k-1)} className="absolute left-0 sm:-left-4 top-1/2 bg-white text-indigo-600 shadow-lg p-2 rounded-full transition-all duration-300 ease-in-out"><ArrowSmallLeftIcon className="h-5 w-5 flex-none"
                                  aria-hidden="true"/></button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        </Suspense>
      </div>
    </section>
  );
};

export default PortfolioIsoTop;
