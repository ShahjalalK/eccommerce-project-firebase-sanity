import Image from "next/image";
import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import Currency from "react-currency-formatter";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { useProductState } from "../app/state";

const MAX_RATING = 5;
const MIN_RATING = 1;

export default function Product({
  id,
  title,
  price,
  image,
  description,
  category,
}) {
  const { addProduct } = useProductState();

  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1) + MIN_RATING)
  );

  const [hashPrime] = useState(Math.random() < 0.5);

  const addItemToBasket = () => {
    addProduct(
      id,
      title,
      price,
      image,
      description,
      category,
      hashPrime,
      rating
    );
  };
  return (
    <div className="relative flex flex-col bg-white p-10 m-5 z-30">
      <p className="absolute top-2 right-2 text-gray-400 text-xs italic">
        {category}
      </p>
      <Image
        src={image}
        alt={category}
        width={200}
        height={200}
        objectFit="contain"
      />
      <h4 className="my-3">{title}</h4>
      <div className="flex items-center text-yellow-500">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <AiFillStar className="text-xl" key={i} />
          ))}
      </div>
      <p className="line-clamp-2 my-2 text-xs">{description}</p>
      <div className="mb-2">
        <Currency quantity={price} currency="USD" />
      </div>
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
      <button className="mt-auto button" onClick={() => addItemToBasket()}>
        Add to Basket
      </button>
    </div>
  );
}
