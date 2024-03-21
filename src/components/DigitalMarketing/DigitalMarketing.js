import image from "@/constant/Images/image";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function DigitalMarketing() {
  return (
    <section>
      <div className="app__container relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden"></div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-base font-semibold leading-7 highlight">
                  Digital Marketing
                </p>
                <h1 className="mt-2 primary-heading">
                  IMPORTANCE OF DIGITAL MARKETING FOR{" "}
                  <span className="highlight">YOUR BRAND</span>
                </h1>
                <p className="mt-6 text-xl leading-8 text-gray-700">
                  A brand without digital marketing is just like your choice of
                  sweet but with salt.
                </p>
              </div>
            </div>
          </div>
          <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 ">
            <Image className="w-full max-w-none" src={image.banner} alt="" />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 lg:max-w-lg">
                <p className="app__text">
                  When you start a brand, your focus is often on how to get the
                  first customers through the door. They may rely on traditional
                  forms of advertising, such as print ads, coupon mailers, or
                  even outdoor advertising. Businesses may believe that since
                  they offer a good product or service, it is just a matter of
                  time until customers find their way to them. But in this
                  world, one must know the convenience of combining traditional
                  and modern marketing methods to attract customers. Digital
                  marketing will act as rocket fuel for your race car. At Digital Service
                  Pvt. Ltd., with the help of digital marketing, we provide:
                </p>
                <ul role="list" className="mt-8 space-y-8 app__text">
                  <li className="flex gap-x-3">
                    <CheckCircleIcon
                      className="mt-1 h-5 w-5 flex-none text-indigo-600"
                      aria-hidden="true"
                    />
                    <span>
                      The ability to reach out to anyone and anywhere, as there
                      are no geographical boundaries with digital
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <CheckCircleIcon
                      className="mt-1 h-5 w-5 flex-none text-indigo-600"
                      aria-hidden="true"
                    />
                    <span>
                      The ability to target the right audience at the right time
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <CheckCircleIcon
                      className="mt-1 h-5 w-5 flex-none text-indigo-600"
                      aria-hidden="true"
                    />
                    <span>
                      Assistance to know your audience and drive engagement to
                      create brand loyalty. Get some inspiration from the power
                      of customer loyalty programmes.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <CheckCircleIcon
                      className="mt-1 h-5 w-5 flex-none text-indigo-600"
                      aria-hidden="true"
                    />
                    <span>
                      The ability to track and monitor responses to your
                      marketing efforts easily and instantly
                    </span>
                  </li>
                </ul>
                <p className="mt-8 app__text">
                  Businesses believe they don&apos;t have the time or money to
                  compete online. As a result, many prefer to take things slowly
                  and stick with one or two forms of traditional advertising,
                  assuming that their business will evolve as time passes. But
                  that&apos;s not true; the market is a competitive place, and
                  you must stay ahead of others. The best way to ensure success
                  is to promote your business on a global scale and use
                  targeting to attract customers that are interested in your
                  service or product. We, the team of biolabs, provide you with
                  what is known as the golden opportunity.
                </p>
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                  THE MAJOR FACILITIES INCLUDE-
                </h2>
                <ul role="list" className="mt-8 space-y-8 app__text">
                  <li className="flex gap-x-3">
                    <CheckCircleIcon
                      className="mt-1 h-5 w-5 flex-none text-indigo-600"
                      aria-hidden="true"
                    />
                    <span>We help your customers realise your presence.</span>
                  </li>
                  <li className="flex gap-x-3">
                    <CheckCircleIcon
                      className="mt-1 h-5 w-5 flex-none text-indigo-600"
                      aria-hidden="true"
                    />
                    <span>
                      Find out what your competitors are doing online.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <CheckCircleIcon
                      className="mt-1 h-5 w-5 flex-none text-indigo-600"
                      aria-hidden="true"
                    />
                    <span>Be accessible to your niche.</span>
                  </li>
                  <li className="flex gap-x-3">
                    <CheckCircleIcon
                      className="mt-1 h-5 w-5 flex-none text-indigo-600"
                      aria-hidden="true"
                    />
                    <span>We do more marketing for less money.</span>
                  </li>
                  <li className="flex gap-x-3">
                    <CheckCircleIcon
                      className="mt-1 h-5 w-5 flex-none text-indigo-600"
                      aria-hidden="true"
                    />
                    <span>
                      Transform the marketing capabilities of your small
                      business.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
