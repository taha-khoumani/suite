import React from 'react'
import logo from "@/images/logo.svg"
import Image from 'next/image'

type Props = {}

export default function Navbar({}: Props) {
  return (
    <div className='flex items-center justify-between px-7'>
        <Image alt={'logo-picture'} src={logo} />
        <button className="border-blue19 border-solid border text-blue19 hover:bg-blue19 hover:text-creamF6  button text-center">
          <span className='hidden sm:inline' >Request&nbsp;</span> 
          Beta Access
        </button>
    </div>
  )
}