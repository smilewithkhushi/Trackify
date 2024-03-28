import Link from 'next/link'
import React from 'react'
import {AiFillBug} from 'react-icons/ai';


const NavBar = () => {

    const links = [
        {  label: 'Dashboard', href: '/' },
        {  label: 'Issues', href:'/issues'}
    ]

    return (
    <nav className='w-full flex flex-row space-x-6 border-b mb-5 px-5 h-14 items-center text-black'>
        <Link href="/"><AiFillBug /></Link>
        <ul className='w-full flex flex-row space-x-6'>
            {links.map((link) => (
                <Link key={link.href} className='text-zinc-500 transition-colors hover:text-zinc-800' href={link.href}>{link.label}</Link>
            ))}
        </ul>
    </nav>
  )
}

export default NavBar