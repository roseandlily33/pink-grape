
import React from 'react'
import Link from 'next/link';

export default function Navbar() {
   
  return (
    <nav className="p-5 flex justify-between items-center mb-1">
      <h1 className="font-header">Nextflix</h1>
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
