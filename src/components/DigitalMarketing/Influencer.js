import image from "@/constant/Images/image"
import { CheckCircleIcon } from "@heroicons/react/24/outline"
import Image from "next/image"

const Influencer = () => {
  return (
    <section className="we-are-area h-screen flex items-center bg-slate-50">
    <div className="app__container grid grid-cols-1 md:grid-cols-2 gap-8 relative">
      <div className="we-are-img">
        <div className="we-are-banner-img">
          <Image src={image.aboutAni} alt="" />
        </div>
      </div>
      <div>
        <div className="">
          <div className="we-are-content">
            <div className="section-title">
              <h2 className="pb-12 primary-heading">THE <span className="highlight">INFLUENCER</span></h2>
            </div>

            <p className="app__text">
            Social media has all kinds of content these days: The most popular of them are the entertainment ones.
            </p>
            <ul role="list" className="mt-8 space-y-8 app__text">
            <li className="flex gap-x-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
              <span>
              The ability to reach out to anyone and anywhere, as there are no geographical boundaries with digital
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
              <span>
              The ability to target the right audience at the right time
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
              <span>
              Assistance to know your audience and drive engagement to create brand loyalty. Get some inspiration from the power of customer loyalty programmes.
              </span>
            </li>
            <li className="flex gap-x-3">
            <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
            <span>
            The ability to track and monitor responses to your marketing efforts easily and instantly
            </span>
          </li>
          </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Influencer