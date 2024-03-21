'use client'
import { motion } from 'framer-motion'
import image from "@/constant/Images/image"
import { ComputerDesktopIcon } from "@heroicons/react/20/solid"
import { ArrowPathIcon, ArrowTrendingUpIcon } from "@heroicons/react/24/outline"
import Image from "next/image"

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const items = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const BestFeature = () => {
    const feature = [{
        name: "Link Building",
        description: "To represent all the aspects of your product, you need to keep designing it in different ways according to the demands of time and customers.",
        icon: ArrowTrendingUpIcon
    },{
        name: "Monthly SEO Task",
        description: "Customers do visit the website, but what makes them buy is how irresistible and relatable it is to them.",
        icon: ArrowPathIcon
    },{
        name: "On Page SEO",
        description: "A website is the essence and the personality of the company, and unlike humans, this personality can change and can very profitably affect people around the world.",
        icon: ComputerDesktopIcon
    },]
  return (
    <div>
      <div className="app__container py-16 sm:py-32">    
      <div className="grid grid-cols-1 lg:grid-cols-2">
      <motion.div variants={variants} initial="hidden" whileInView="show" className="my-auto">
      <h1 className="primary-heading mb-8">Our Best <span className="highlight">Features</span></h1>
       {
        feature.map((i,k) => {
            return (
                <motion.div variants={items} key={k} className="flex gap-4 my-6 shadow-lg py-10 px-6">
                <div className="flex h-16 w-16 mb-4 items-center justify-center rounded-full bg-white">
                <div className="absolute half-circle rounded-full animate-[spin_3s_linear_infinite] z-1">
                <div className="half-circle-child rounded-full"></div>
                </div>
                </div>
                <div className="flex-1">
                <h1 className="text-xl font-bold mb-4">{i.name}</h1>
                <p className='app__text'>{i.description}</p>
                </div>
                </motion.div>
            )
        })
       }
      </motion.div>
      <div className="my-auto">
      <Image src={image.aboutAni} alt="about"/>
      </div>
      </div>
      </div>
    </div>
  )
}

export default BestFeature