import image from '@/constant/Images/image'
import Image from 'next/image'

const FeaturedService = () => {
  return (
    <section className="we-are-area h-screen flex items-center">
    <div className="app__container grid grid-cols-1 md:grid-cols-2 gap-8 relative">
        <div className="my-auto">
          <div className="we-are-content">
            <div className="section-title">
            <p className="text-base font-semibold leading-7 highlight">Give Your Web Presence Fuel</p>
              <h2 className="pb-12 primary-heading">Our Featured <span className="highlight">Services</span></h2>
            </div>

            <p className='app__text'>
            Digital marketing is a way to connect with and influence your potential customers. We, the best in the advertising and promotion market (WebDev Private Limited), advertise your brand, product, or service on digital channels such as search engines, social media, email, and mobile apps. We follow a well-planned strategy for your brand to reach new heights. Anything and everything can be influential. But most of it is entertainment. Then how do you promote your business in a way that makes it look entertaining?
            </p>
          </div>
      </div>
      <div className="we-are-img">
      <div className="we-are-banner-img">
        <Image src={image.aboutAni} alt="" />
      </div>
    </div>
    </div>
  </section>
  )
}

export default FeaturedService