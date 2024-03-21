'use client'
import { BriefcaseIcon, ChevronDownIcon, Cog6ToothIcon, EnvelopeIcon, HomeIcon, UserGroupIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import {
    SpeakerWaveIcon,
    CurrencyDollarIcon,
    ChartBarIcon,
    ComputerDesktopIcon,
    RocketLaunchIcon,
    CommandLineIcon,
    CodeBracketIcon,
  } from "@heroicons/react/24/outline";
  const products = [
    {
      name: "Digital Marketing",
      description: "Maximizing online presence through strategic promotion.",
      href: "/services/digital-marketing",
      icon: SpeakerWaveIcon,
    },
    {
      name: "Website Optimization",
      description: "Maximizing website performance for optimal results.",
      href: "/services/website-optimization",
      icon: CommandLineIcon,
    },
    {
      name: "Web Development",
      description: "Creating dynamic websites with coding expertise.",
      href: "/services/web-development",
      icon: CodeBracketIcon,
    },
  ];

const BottomBar = () => {
    const activeSegment = useSelectedLayoutSegment();
    const [toggle, setToggle] = useState(false);
    const dropdownRef = useRef(null);
  
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setToggle(false);
        }
      };
  
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [dropdownRef]);

  return (
    <nav ref={dropdownRef} className='app__bottom-bar w-full bg-white fixed bottom-0 py-4 rounded-tr-xl rounded-tl-xl px-6 z-99 shadow-2xl md:hidden border-[1px] border-t-slate-100'>
    <div className='flex justify-between items-center'>
    <Link href='/' onClick={() => setToggle(false)} className={`flex items-center justify-center flex-col gap-y-2 transition-all duration-300 ease ${activeSegment === null ? 'activeMenu' : 'text-gray-400'}`}>
    <HomeIcon
     className={`h-5 w-5 flex-none ${activeSegment === null ? 'h-6 w-6' : ''}`}
     aria-hidden="true"/>
     <span className='text-xs'>Home</span>
    </Link>
    <Link href='/about' onClick={() => setToggle(false)} className={`flex items-center justify-center flex-col gap-y-2 transition-all duration-300 ease ${activeSegment === 'about' ? 'activeMenu' : 'text-gray-400'}`}>
    <UserGroupIcon
     className={`h-5 w-5 flex-none ${activeSegment === 'about' ? 'h-6 w-6' : ''}`}
     aria-hidden="true"/>
     <span className='text-xs'>About</span>
    </Link>
    <button onClick={() => setToggle(!toggle)} className={`flex items-center justify-center flex-col gap-y-2 transition-all duration-300 ease ${activeSegment === 'services' || toggle ? 'activeMenu' : 'text-gray-400'}`}>
    <Cog6ToothIcon
     className={`h-5 w-5 flex-none  ${activeSegment === 'services' || toggle ? 'h-6 w-6 animate-[spin_4s_linear_infinite]' : ''}`}
     aria-hidden="true"/>
     <span className='text-xs'>Services</span>
    </button>
     <div className={`p-2 absolute w-full z-99 bottom-[4.5rem] left-0 right-0 bg-white rounded-lg drop-shadow-sm grid grid-cols-2 border-[1px] border-t-slate-100 transition-all duration-300 ease-in-out ${
          toggle ? "opacity-100 visible mb-2" : "opacity-0 invisible"
        }`}>
        {products.map((item) => {
           return(
          <div
            key={item.name}
            className="group relative flex items-center gap-x-2 rounded-lg p-4 text-xs leading-4 hover:bg-indigo-50 "
          >
            <div className="flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
              <item.icon
                className="h-5 w-5 text-gray-600 group-hover:text-indigo-600"
                aria-hidden="true"
              />
            </div>
            <div className="flex-auto">
              <Link
                href={item.href}
                className="block font-bold text-gray-900"
                onClick={() => setToggle(false)}
              >
                {item.name}
                <span className="absolute inset-0" />
              </Link>
            </div>
          </div>
     )})}

     <button
     className="absolute animate-[bounce_1s_linear_infinite] -top-4 gradient-bg p-2 rounded-full place-self-center text-sm font-base leading-6 border-[0px] border-slate-100 shadow-sm"
     onClick={() => setToggle(!toggle)}
   >
     <ChevronDownIcon
       className="h-5 w-5 flex-none text-white transition-all duration-300"
       aria-hidden="true"
     />
   </button>
      </div>
    <Link href='/portfolio' onClick={() => setToggle(false)} className={`flex items-center justify-center flex-col gap-y-2 transition-all duration-300 ease ${activeSegment === 'portfolio' ? 'activeMenu' : 'text-gray-400'}`}>
    <BriefcaseIcon
     className={`h-5 w-5 flex-none ${activeSegment === 'portfolio' ? 'h-6 w-6' : ''}`}
     aria-hidden="true"/>
     <span className='text-xs'>Portfolio</span>
    </Link>
    <Link href='/contact' onClick={() => setToggle(false)} className={`flex items-center justify-center flex-col gap-y-2 transition-all duration-300 ease ${activeSegment === 'contact' ? 'activeMenu' : ' text-gray-400'}`}>
    <EnvelopeIcon
     className={`h-5 w-5 flex-none ${activeSegment === 'contact' ? 'h-6 w-6' : ''}`}
     aria-hidden="true"/>
     <span className='text-xs'>Contact</span>
    </Link>
    </div>
    </nav>
  )
}

export default BottomBar