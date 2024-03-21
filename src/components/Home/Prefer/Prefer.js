import image from '@/constant/Images/image'
import Image from 'next/image'

const Prefer = () => {
  return (
    <section className='py-24 sm:py-32 bg-slate-50'>
    <div className='app__container grid grid-cols-1 lg:grid-cols-2 gap-8'>
    <div className='mx-auto'>
    <Image src={image.bannerMan} alt='digital marketing'/>
    </div>
    <div>
    <h1 className='primary-heading'>Do you remember the story of <span className='highlight'>the rabbit and turtle?</span></h1>
    <p className='pt-12 pb-6 app__text'>Kids believe that the turtle was hardworking, but the truth is that if the rabbit had not  been distracted, the turtle would have lost the race. You alone, looking after investment and creativity along with your business, will make you the distracted rabbit. Digital Services Private Limited comes into the story now, follows the rabbit through the race, and then reminds him of his self-worth and power. The rabbit stays the fastest and smartest in the jungle!</p>
    <ul className='list-inside list-disc app__text'>
    <li>We have a team of graphic designers who create the best and most suitable templates and promotional videos for you. These won’t just attract customers; they will also make them pay a visit and buy something. Looks and presentation are our jobs.</li>
    <li>We prepare the best for you so that when you represent yourself, you feel proud of who you are and have always been, and the same confidence may be seen by the customers.</li>
    <li>Our graphic design experts use tools like Canva, Adobe Premium, and Lightroom Premium. All that is hot in the market is what we provide.</li>
    </ul>
    </div>

    </div>
    </section>
  )
}

export default Prefer