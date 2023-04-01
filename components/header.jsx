import Image from "next/image";
import React from "react";
import {
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineMenu,
} from "react-icons/ai";

export default function Header() {
  return (
    <header>
      <div>
        <div className="flex items-center bg-amazon_blue-default flex-grow py-2 p-1">
          <div className="mt-2 mx-1 sm:mx-6 flex items-center flex-grow sm:flex-grow-0">
            <Image
              src="https://links.papareact.com/f90"
              width={150}
              height={40}
              alt="logo"
              objectFit="contain"
            />
          </div>
          <div className="flex-grow hidden sm:flex items-center bg-yellow-400 hover:bg-yellow-500 cursor-pointer h-10 rounded-md">
            <input
              type="text"
              className="h-full flex-grow flex-shrink focus:outline-none rounded-l-md w-6 p-2 px-4"
            />
            <AiOutlineSearch className="text-3xl text-white" />
          </div>
          <div className=" flex items-center space-x-6 mx-6 text-xs text-white whitespace-nowrap">
            <div className="link">
              <p>Hello Shahhajal Khan</p>
              <p className=" font-extrabold md:text-sm">Account & List</p>
            </div>
            <div className="link">
              <p className=" font-extrabold md:text-sm">Returns</p>
              <p className=" font-extrabold md:text-sm">& Orders</p>
            </div>
            <div className="flex items-center relative link ">
              <span className=" absolute -right-1 md:right-8 -top-2 text-black flex items-center justify-center bg-yellow-400 rounded-full w-5 h-5 text-center">
                0
              </span>
              <AiOutlineShoppingCart className="text-4xl" />
              <p className=" font-extrabold md:text-sm mt-2 hidden md:inline">
                Basket
              </p>
            </div>
          </div>
        </div>
        <div className="flex pl-6 py-2 text-sm items-center space-x-3 flex-row bg-amazon_blue-light text-white">
          <p className="flex items-center space-x-2 link">
            <AiOutlineMenu className="text-2xl" />
            <span>All</span>
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
      </div>
    </header>
  );
}
