import Image from 'next/image'
import React from 'react'
import {AiOutlineSearch, AiOutlineShoppingCart, AiOutlineMenu} from 'react-icons/ai'

export default function Header() {
  return (
    <header>
        <div className="flex items-center bg-amazon_blue-default p-1 flex-grow py-2">
            <div className="mt-2 mx-1 sm:mx-6 flex items-center flex-grow sm:flex-grow-0" >
                <Image src='https://links.papareact.com/f90' width={150} height={40} alt="logo" objectFit='contain' className=" cursor-pointer" />
                
            </div>
            <div className=" hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
              <input className="p-2 h-full flex-grow w-6 flex-shrink rounded-l-md focus:outline-none px-4" type="text" />
              <AiOutlineSearch className="text-3xl text-white" />
            </div>
            <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
              <div className="link">
                <p>Hello Shahjalal Khan</p>
                <p className="font-extrabold md:text-sm">Account & List</p>
              </div>
              <div className="link">
              <p className="font-extrabold md:text-sm">Returns</p>
              <p className="font-extrabold md:text-sm">& Orders</p>

              </div>
              <div className=" flex items-center relative link">
                <span className=" absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">0</span>
              <AiOutlineShoppingCart className=" text-4xl" />
              <p className="font-extrabold md:text-sm hidden md:inline mt-2">Basket</p>

              </div>
            </div>
        </div>
        <div className=" flex items-center space-x-3 bg-amazon_blue-light text-white text-sm pl-6 p-2">
        <p className="link flex items-center">
          <AiOutlineMenu className="text-3xl" />
          All
          </p>
          <p className="link">Prime Video</p>
          <p className="link">Amazon Business</p>
          <p className="link">Today's Deals</p>
          <p className="link hidden lg:inline-flex">Electronics</p>
          <p className="link hidden lg:inline-flex">Food & Grocery</p>
          <p className="link hidden lg:inline-flex">Prime</p>
          <p className="link hidden lg:inline-flex">Buy Again</p>
          <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
          <p className="link hidden lg:inline-flex">Health & Personal Care</p>
          
        </div>
    </header>
  )
}