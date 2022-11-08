import { BellIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import {useState, useEffect} from 'react'

function Header() {
  const [isScrolled, setScrolled]=useState(false)
   useEffect(()=> {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true)
      }else{
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
   }, [])

  return (
    <header className= {`${isScrolled && 'bg-[#141414]'}`}>
      <div className=" flex items-center space-x-2 md:space-x-10">
        <img src="https://rb.gy/ulxxee" width={100} height={100} className="cursor-pointer object-contain" />
        <ul className=" hidden space-x-4 md:flex md:items-center ">
          <li className=" headerLink">Home</li>
          <li className=" headerLink">Tv Shows</li>
          <li className=" headerLink">Movies</li>
          <li className=" headerLink">New & Poplurs</li>
          <li className=" headerLink">My List</li>
        </ul>
      </div>

      <div className=" flex items-center space-x-4 text-sm font-light">
        <MagnifyingGlassIcon className=" hidden h-6 w-6 sm:inline text-gray-200" />
        <p className=" hidden lg:inline">kids</p>
        <BellIcon className=" h-6 w-6 text-gray-200" />
        <Link href={'account'}>
        <img
            src="https://rb.gy/g1pwyx"
            alt=""
            className="cursor-pointer rounded"
          />
        </Link>
      </div>
    </header>
  );
}

export default Header;
