import Image from "next/image";
import Header from "../components/header";
import { productState, useProductState, totalPriceState } from "../app/state";
import { useRecoilValue } from "recoil";
import CheckoutProduct from "../components/checkoutporduct";
import { useSession } from "next-auth/react";
import Currency from "react-currency-formatter";

export default function Checkout() {
  const porductItem = useRecoilValue(productState);
  const totalPrice = useRecoilValue(totalPriceState);
  // let totalPrice = 0
  // if (porductItem) {
  //   const price = porductItem.map((item) => item.price);
  //    totalPrice = price.reduce((total, price) => total + price);
  // }

  const { data: session } = useSession();

  return (
    <div>
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto bg-gray-100">
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src="https://Links.papareact.com/ikj"
            alt="banner"
            objectFit="contain"
            width={1020}
            height={250}
          />
          <div className="flex flex-col space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4">
              {porductItem.length === 0
                ? "Your Amazon Basket is Empty"
                : "Shopping Basket"}{" "}
            </h1>
            {porductItem.map((item, i) => (
              <CheckoutProduct
                key={i}
                id={item.id}
                title={item.title}
                price={item.price}
                image={item.image}
                description={item.description}
                category={item.category}
                hashPrime={item.hashPrime}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col bg-white p-10 shadow-md">
          {porductItem.length > 0 && (
            <>
              <h2 className=" whitespace-nowrap">
                Subtotal ({porductItem.length} items)
                <span className=" font-bold">
                <Currency quantity={totalPrice} currency="USD" />
                </span>
              </h2>
              <button
                disabled={!session}
                className={`button mt-2 ${
                  !session && "from-gray-300 to-gray-200 cursor-not-allowed"
                }`}
              >
                {!session ? "Sign in to checkout" : "Proceed to checkout"}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
