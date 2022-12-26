import React from 'react'
import { NavLink } from 'react-router-dom'

 export default function Menu() {
  return (
    <div className="bg-red-100 py-6">
      <nav className='flex gap-2 justify-end'>
        <NavLink to={'/'}  className="py-2 px-4  hover:text-black hover:border-b-2  hover:border-black">Home</NavLink>
        <NavLink to={'cars'} className="py-2 px-4  hover:text-black hover:border-b-2  hover:border-black">Cars</NavLink>
      </nav>
    </div>

  )
}


