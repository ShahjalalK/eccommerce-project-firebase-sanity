import Image from 'next/image'
import {useRouter} from 'next/router'
import {AiOutlineSearch, AiOutlineMenu, AiOutlineShoppingCart} from 'react-icons/ai'
import { useSession, signIn, signOut } from "next-auth/react"
import {useRecoilValue} from 'recoil'
import { productState } from '@/app/state'

export default function Header() {
    const router = useRouter()
    const {data:session} = useSession()
    const productValue = useRecoilValue(productState)
   const signOutHandler = () => {
        signOut({redirect : false})
   }
   console.log(productValue)
  return (
    <div>
        <div className=" bg-amazon_blue-default py-2 p-1 flex items-center flex-grow">
            <div className="mt-2 flex-grow sm:flex-grow-0 mx-1 md:mx-6">
                <Image onClick={() => router.push("/") } src="https://links.papareact.com/f90" width={150} height={50} alt='amazon' objectFit='contain' className=" cursor-pointer" />
            </div>
            <div className=" hidden flex-grow sm:flex bg-yellow-400 flex-shrink rounded-md h-10 cursor-pointer hover:bg-yellow-500">
                <input type="text" className="h-full flex-grow w-10 focus:outline-none rounded-l-md p-2 px4" />
                <div className="flex justify-center items-center">
                <AiOutlineSearch className="text-3xl text-white" />
                </div>
            </div>
            <div className="text-white flex items-center whitespace-nowrap text-xs space-x-6 mx-6">
                <div className="link" onClick={!session ? signIn : signOutHandler}>
                    <p>{session?`Hello ${session.user.name}` : "Sign in"}</p>
                    <p className="md:text-sm font-extrabold">Account & List</p>
                </div>
                <div className="link flex flex-col -space-y-1">
                    <p className="md:text-sm font-extrabold">Returns</p>
                    <p className="md:text-sm font-extrabold">& Orders</p>
                </div>
                <div className=" flex items-center relative link" onClick={() => router.push("/checkout")}>
                    <span className="absolute -top-1 right-0 md:right-10 h-5 w-5 rounded-full bg-yellow-400 flex items-center justify-center font-semibold text-xs text-black">{productValue.length}</span>
                    <AiOutlineShoppingCart className="text-4xl" />
                    <p className="font-extrabold md:text-sm hidden md:inline mt-2">Basket</p>
                </div>
            </div>
        </div>
        <div className="bg-amazon_blue-light flex items-center space-x-3 whitespace-nowrap flex-grow pl-6 p-2 text-sm text-white">
           <p className="link flex items-center space-x-1">
            <AiOutlineMenu />
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
  )
}
