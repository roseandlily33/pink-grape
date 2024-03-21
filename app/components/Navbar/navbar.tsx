
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../../public/NEXTFLIX.svg'

export default function Navbar() {
   
  return (
    <nav className="p-5 flex justify-between items-center z-10">
      <Image src={Logo} alt="nextflix logo" className='logo' width={10} height={20} />
      <div className="flex gap-3 items-center">
      <Link href="/movies" style={{color: 'white', fontSize: '1.2em'}}>Home</Link>
      <Link href="/movies/favorites" style={{color: 'white', fontSize: '1.2em'}}>Favorites</Link>
      <button>
      <Link href="/login">Sign Out</Link>
      </button>
      </div>
      </nav>
  )
}
