import React from 'react'
import phone from '@/images/image-hero-portrait.png'
import phoneMobile from '@/images/image-hero-landscape.png'
import curve from "@/images/pattern-curved-line-1.svg"
import Image from 'next/image'

type Props = {}

export default function Main({}: Props) {
  return (
    <main className='my-5'>
        <div className='flex flex-col px-2 sm:px-5 gap:0 lg:gap-24 lg:flex-row my-auto' >
            <div className='flex flex-col lg:flex-row relative basis-full items-start px-4'>
                <div className='flex-col gap-6 sm:gap-10 inline-flex items-start z-10 relative pt-3 pb-10 sm:py-32 title-div  w-full '>
                    <p className='inline text-4xl sm:text-6xl lg:text-7xl sm:max-w-xl lg:max-w-2xl'> 
                        A <b>super&nbsp;
                        <span className='inline-flex flex-col relative' >
                            <Image src={curve} alt={'curve'} className='hidden sm:inline ml-auto absolute bottom-full inset-x-0'/>
                            solution
                        </span>
                        </b>  for your <b>business</b> 
                    </p>
                    <p className='text-blue4D sm:max-w-xs' >Our marketing and sales automations help you scale your outreach to get more leads for your company.</p>
                    <button className="button  text-creamF6 bg-blue19 linear-bg-1">Request Beta Access</button>
                    <Image src={phoneMobile} alt={'phone'} className='inline sm:hidden lg:absolute w-full mt-2'/>
                </div>
                <Image src={phone} alt={'phone'} className='hidden sm:inline absolute top-1/2 transform sm:-translate-y-1/2 left-auto right-0 bg-img'/>
            </div>
            <div className='mx-auto sm:mx-0 flex flex-col gap-8 sm:gap-5 justify-around sm:flex-row lg:flex-col py-5 lg:py-16 text-center sm:text-start'>
                <p className='text-5xl font-bold'> 2K+ <span className='text-gray4D text-base font-normal block mt-1'>COMPANIES</span></p>
                <p className='text-5xl font-bold'> 8 <span className='text-gray4D text-base font-normal block mt-1'>LANGUAGES</span> </p>
                <p className='text-5xl font-bold'> 1.2M <span className='text-gray4D text-base font-normal block mt-1'>LEADS</span> </p>
            </div>
        </div>
    </main>
  )
}