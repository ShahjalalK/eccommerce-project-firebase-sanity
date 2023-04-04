import React from "react";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import Currency from "react-currency-formatter";
import {useProductState } from "../app/state";

export default function CheckoutProduct({
  id,
  title,
  price,
  image,
  description,
  category,
  hashPrime,
  rating,
}) {
  const { addProduct, deletProduct } = useProductState();

  return (
    <div className="grid grid-cols-5 items-center">
      <Image
        src={image}
        width={200}
        height={200}
        alt="product"
        objectFit="contain"
      />
      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex items-center text-yellow-500">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <AiFillStar key={i} />
            ))}
        </div>
        <p className="text-xs my-2 line-clamp-2">{description}</p>
        <Currency quantity={price} currency="GBP" />
        {hashPrime && (
          <div className="flex items-center space-x-2">
            <Image
              src="https://links.papareact.com/fdw"
              alt="prime"
              width={80}
              height={15}
              className="w-12"
            />
            <p className="text-xs text-gray-500">Free Next-day Delivery</p>
          </div>
        )}
      </div>
      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button
          className="button"
          onClick={() =>
            addProduct(
              id,
              title,
              price,
              image,
              description,
              category,
              hashPrime,
              rating
            )
          }
        >
          Add to Basket
        </button>
        <button className="button" onClick={() => deletProduct(id)}>Remove to Basket</button>
      </div>
    </div>
  );
}
