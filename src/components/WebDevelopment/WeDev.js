"use client"
import { motion } from 'framer-motion'
import { CodeBracketIcon, CodeBracketSquareIcon, PencilSquareIcon, UserGroupIcon } from '@heroicons/react/24/outline'

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
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};
const features = [
  {
    name: 'Website Optimization FREE',
    description:
      'To represent all the aspects of your product, you need to keep designing your website in different ways to meet the demands of time and customers. Customers do visit the website, but what makes them buy is how irresistible and relatable it is to them.',
    icon: CodeBracketIcon,
  },
  {
    name: 'Unique Content Included',
    description:
      '70% of consumers would learn about products through content mediums rather than traditional advertising. It is not easy to get people to spend money on something they have never heard of before. So, you will need content that will educate your audience about your product. Use infographics and maps to talk about your product.',
    icon: PencilSquareIcon,
  },
  {
    name: 'Free Website Maintenance',
    description:
      'From creating a relatable template to designing your whole website, we create everything you need. We manage your website server and website architecture. It will be operational 24 hours a day, 365 days a year.',
    icon: CodeBracketSquareIcon,
  },
  {
    name: 'Targeted Audience, SEO FREE',
    description:
      'We market you to not just your target audience but also your potential audience. Come join us on the journey to making you an influence. Our SEO team makes it possible.',
    icon: UserGroupIcon,
  },
]

export default function WeDev() {
  return (
    <div className="py-24 sm:py-32 bg-slate-50">
      <div className="app__container">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 primary-heading text-gray-900 text-center">
          Beautiful / Fast Loading Website<span className='highlight'> Development</span>
          </p>
          <p className="mt-6 text-lg leading-8 app__text text-center">
          We handle everything, from developing websites to content writing and SEO, for free! You get the following :-
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <motion.dl variants={variants} initial="hidden" whileInView="show" className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
        {features.map((feature) => (
          <motion.div variants={items} key={feature.name} className="relative pl-24">
            <dt className="text-xl font-bold leading-7 text-gray-900">
              <div className="absolute left-0 top-0 flex h-16 w-16 items-center justify-center rounded-full shadow-lg bg-white hover:bg-indigo-600 text-indigo-600 hover:text-white">
                <feature.icon className="h-6 w-6 " aria-hidden="true" />
              </div>
              {feature.name}
            </dt>
            <dd className="mt-2 text-base leading-7 app__text">{feature.description}</dd>
          </motion.div>
        ))}
      </motion.dl>
        </div>
      </div>
    </div>
  )
}