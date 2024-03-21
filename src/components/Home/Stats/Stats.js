"use client"
import Cta from '@/components/CTA/Cta'
import './Stats.css'
import ScrollTrigger from 'react-scroll-trigger'
import { useState } from 'react'
  

  export default function Stats({stats, heading, para}) {
    const [countingOn, setCountingOn] = useState(false)
    return (
      <div className="bg-white app__stats py-24 sm:py-32 flex items-center flex-col gap-y-12">
      <Cta heading={heading} para={para}/>
        <div className="app__container">
        <ScrollTrigger  onEnter={() => setCountingOn(true)} onExit={() => setCountingOn(false)}>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, k) => {
              return (
                <div key={k} className="single-counter-two mx-auto flex w-full flex-col gap-y-4 py-10 px-5">
                <div className="flex justify-center items-center text-[#ff6a00]">
                    <stat.icon className="h-12 w-12 " aria-hidden="true" />
                </div>
                <dd className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {
                  countingOn && <>{stat.value}</>
                }
                </dd>
                <dt className="text-base leading-7 app__text">{stat.name}</dt>
              </div>
              )
            })}
          </dl>
          </ScrollTrigger>
        </div>
      </div>
    )
  }