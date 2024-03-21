import image from "@/constant/Images/image";
import Image from "next/image";
import "./WeAre.css";
import Link from "next/link";

const WeAre = () => {
  return (
    <section className="we-are-area flex items-center bg-slate-50 py-24 md:py-32">
      <div className="app__container grid grid-cols-1 md:grid-cols-2 gap-8 relative">
        <div className="we-are-img">
          <div className="we-are-banner-img">
            <Image src={image.banner} alt="" />
          </div>
          <div className="we-are-animation">
            <Image src={image.like} alt="" className="h2-like" />
            <Image src={image.heart} alt="" className="h2-heart" />
            <Image src={image.message} alt="" className="h2-message" />
            <Image src={image.square} alt="" className="h2-square" />
            <Image src={image.circle} alt="" className="moving-circle" />
            <Image src={image.circle2} alt="" className="moving-circle-right" />
          </div>
        </div>
        <div>
          <div className="">
            <div className="we-are-content">
              <div className="section-title">
                <h2 className="pb-12 primary-heading">
                  We Are Digital <span className="highlight">Explorers</span>
                </h2>
              </div>

              <p className="app__text pb-10">
                Everyone has gone digital with this era and so has gone the ways
                of promoting your work, business, and lifestyle. Digital
                Marketing is the boon we are talking about. Digital Services provides such convenience to you. Now that you know
                about digital marketing do you have the time and energy to make
                attractive slogans, digital posters, and attention-seeking
                layouts?
              </p>
              <div>
                <Link href="/about">
                  <button className="primary-btn shadow-lg">Read More</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeAre;
