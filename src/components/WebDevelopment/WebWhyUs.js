import image from '@/constant/Images/image'
import { CheckCircleIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

const WebWhyUs = () => {
  return (
    <section className="we-are-area py-16 md:py-32 flex items-center bg-slate-50">
    <div className="app__container grid grid-cols-1 md:grid-cols-2 gap-8 relative">
      <div className="we-are-img">
        <div className="we-are-banner-img">
          <Image src={image.ppcTrend} alt="PPC Trend" />
        </div>
      </div>
        <div className="my-auto">
          <div className="we-are-content">
            <div className="section-title">
              <h2 className="pb-12 text-3xl primary-heading">50 times more Business Leads: Make more in <span className='highlight'>2023!</span></h2>
            </div>

            <p className='app__text'>Kids believe that the turtle was hardworking, but the truth is that if the rabbit had not been distracted, the turtle would have lost the race. You alone, looking after investment and creativity along with your business, will make you the distracted rabbit. Digital Services Private Limited comes into the story now, follows the rabbit through the race, and then reminds him of his self-worth and power. The rabbit stays the fastest and smartest in the jungle!</p>

            <ul role="list" className="mt-8 space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
              <p className='app__text'>
              We have a team of graphic designers and web developers (all experienced) who create the best and most suitable designs and code them for you. These will not just attract customers but also make them pay a visit and buy something. Looks and presentation are our jobs. You get 50 times more potential business customers.
              </p>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
              <p className='app__text'>
              We are working on all the latest technologies available on the market today. You do not have to worry about this; through our conversation with you, you will get to know what is the best technology for you.
              </p>
            </li>
            <li className="flex gap-x-3">
            <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
            <p className='app__text'>
            We are working on all the latest technologies available on the market today. You do not have to worry about this; through our conversation with you, you will get to know what is the best technology for you.
            </p>
          </li>
          </ul>
          </div>
        </div>
      </div>
  </section>
  )
}

export default WebWhyUs