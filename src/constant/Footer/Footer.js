import Link from "next/link";
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn";
import { FaPhoneSquareAlt } from "@react-icons/all-files/fa/FaPhoneSquareAlt";
import Image from "next/image";
import image from "../Images/image";

const Footer = () => {
  return (
    <footer className="pt-12 footer-bg relative">
      <div className="mx-auto max-w-7xl p-6 lg:px-8">
        <div className="flex justify-between items-center md:items-start gap-y-8 flex-col sm:flex-row text-center md:text-start">
          <div className="flex-1">
            <h2 className="text-white text-2xl md:text-3xl font-medium">
              Interested To Get Our Amazings Service
            </h2>
          </div>
          <div>
            <a href="tel:+919917680000">
              <button className="primary-btn shadow-lg">Call us Now</button>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 ld:grid-cols-4 gap-y-8 pt-20">
          <div className="lg:pr-8 text-center md:text-start ">
            {/* <Image
              src={image.webdevWhite}
              alt="WebDev"
              className="mx-auto md:mx-0"
              width={150}
              height={150}
            /> */}
            <Image src={image.logo} alt='company logo' width={150}
              height={70}/>
            {/* <h3 className="text-3xl text-white">Digital Service</h3> */}
            <p className="text-base mt-4 text-slate-200 hover:text-white transition-all duration-300">
            2012 we introduced as call center software services provider for domestic and international market. 
            </p>
          </div>
          <div className="mx-auto text-center md:text-start">
            <div>
              <h3 className="text-white text-xl font-medium mb-6">
                Quick Links
              </h3>
            </div>
            <ul className="list-disc list-inside list-none">
              <li className="my-2 text-sm text-slate-200 hover:text-white transition-all duration-300">
                <Link href="/">Home</Link>
              </li>
              <li className="my-2 text-sm text-slate-200 hover:text-white transition-all duration-300">
                <Link href="/about">About Us</Link>
              </li>
              <li className="my-2 text-sm text-slate-200 hover:text-white transition-all duration-300">
                <Link href="/contact">Contact us</Link>
              </li>
              <li className="my-2 text-sm text-slate-200 hover:text-white transition-all duration-300">
                <Link href="/portfolio">Portfolio</Link>
              </li>
            </ul>
          </div>
          <div className="mx-auto text-center md:text-start">
            <div>
              <h3 className="text-white text-capital text-xl font-medium mb-6">
                Our Services
              </h3>
            </div>
            <ul className=" list-disc list-inside list-none">
              <li className="my-2 text-sm text-slate-200 hover:text-white transition-all duration-300">
                <Link href="/services/digital-marketing">
                  Digital Marketing
                </Link>
              </li>
              {/* <li className="my-2 text-sm text-slate-200 hover:text-white transition-all duration-300">
                <Link href="/services/ppc-service">PPC Service</Link>
              </li>
              <li className="my-2 text-sm text-slate-200 hover:text-white transition-all duration-300">
                <Link href="/services/smo-service">SMO Service</Link>
              </li>
              <li className="my-2 text-sm text-slate-200 hover:text-white transition-all duration-300">
                <Link href="/services/seo-service">SEO Service</Link>
              </li>
              <li className="my-2 text-sm text-slate-200 hover:text-white transition-all duration-300">
                <Link href="/services/social-marketing">Social Marketing</Link>
              </li> */}
              <li className="my-2 text-sm text-slate-200 hover:text-white transition-all duration-300">
                <Link href="/services/website-optimization">
                  Website Optimization
                </Link>
              </li>
              <li className="my-2 text-sm text-slate-200 hover:text-white transition-all duration-300">
                <Link href="/services/web-development">Web Development</Link>
              </li>
            </ul>
          </div>

          <div className="mx-auto text-center md:text-start">
            <div>
              <div className="pb-50 pb-md-25 animate get-bottom">
                <h3 className="text-white text-capital text-xl font-medium mb-6">
                  Get In Touch
                </h3>
              </div>
              <ul className="">
                <li className="my-2 text-slate-200 hover:text-white transition-all duration-300">
                  <a
                    className="text-sm text-white text-bold flex items-center justify-center md:justify-start gap-2"
                    href="+91-9917680000"
                  >
                    <FaPhoneSquareAlt /> +91-9917680000
                  </a>
                </li>
                <li className="my-2 text-slate-200 hover:text-white transition-all duration-300">
                  <a
                    className="text-sm text-white text-sbold flex items-center justify-center md:justify-start gap-2"
                    href="mailto:contact@digitalservice.com"
                  >
                    <FaEnvelope /> contact@digitalservice.com
                  </a>
                </li>
                <li className="mt-8">
                  <ul className="flex justify-start gap-4 items-center">
                    <li className="social">
                      <a className="social-icon" href="#">
                        <FaFacebook />
                      </a>
                    </li>
                    <li className="social">
                      <a className="social-icon" href="#">
                        <FaTwitter />
                      </a>
                    </li>
                    <li className="social">
                      <a className="social-icon" href="#">
                        <FaInstagram />
                      </a>
                    </li>
                    <li className="social">
                      <a className="social-icon" href="#">
                        <FaLinkedinIn />
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center py-6 mt-4 md:mt-8 lg:mt-12 mb-[4.5rem] md:mb-0">
        <p className="text-sm text-slate-200 hover:text-white transition-all duration-300">
          © Copyright <a href="#">digitalservice.com</a> 2024. All rights reserved.
        </p>
      </div>

    </footer>
  );
};

export default Footer;
