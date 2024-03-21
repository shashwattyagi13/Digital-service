import image from '@/constant/Images/image'
import { CheckCircleIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

const Powerful = () => {
  return (
    <section className="we-are-area py-16 md:py-32 flex items-center bg-slate-50">
    <div className="app__container grid grid-cols-1 md:grid-cols-2 gap-8 relative">

        <div className="my-auto">
          <div className="we-are-content">
            <div className="section-title">
              <h2 className="pb-12 text-3xl primary-heading">Powerful Attractive Informative <span className='highlight'>website Development</span></h2>
            </div>

            <p className='app__text'>The amount of effort our mothers put into decorating the showcase of our drawing room is immense. From dusting every showpiece, award, and souvenir to placing them in their correct place, for them to shine the good memories, achievements, and travel of the house whenever the guests come, is something very similar to what our developer team does with your requirements. Not only a website is not enough; you are missing a lot. We will fill the gaps!</p>

            <ul role="list" className="mt-8 space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
              <span app__text>Fully Responsive Website</span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
              <span app__text>100% attractive website development</span>
            </li>
            <li className="flex gap-x-3">
            <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
            <span app__text>Clean and modern UI design</span>
          </li>
          <li className="flex gap-x-3">
          <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
          <span app__text>Only built using the latest technologies</span>
        </li>
          </ul>
          </div>
        </div>

        <div className="we-are-img">
        <div className="we-are-banner-img">
          <Image src={image.webStrategy} alt="Web Strategy" />
        </div>
      </div>
      </div>
  </section>
  )
}

export default Powerful