import { atom, selector, useRecoilState } from "recoil";
export const productState = atom({
  key: "productstate",
  default: [],
});

export const totalPriceState = selector({
  key: "totalprice",
  get : ({get}) => {
    if(get(productState).length === 0){
      return 0
    }else{
      const price = get(productState).map((item) => (item.price))
      const totalPrice =  price.reduce((item, price) => item + price)
       return totalPrice
    }
    
  },
});


const productClone = (items, id) => {
  return {
    cloned: items.map((item) => ({ ...item })),
    index: items.findIndex((item) => item.id == id),
    price : items.map((item) => (item.price))
  };
};

export const useProductState = () => {
  const [productItem, setProductItem] = useRecoilState(productState); 
  return {
    addProduct: (
      id,
      title,
      price,
      image,
      description,
      category,
      hashPrime,
      rating
    ) =>
      setProductItem((prev) => [
        ...prev,
        { id, title, price, image, description, category, hashPrime, rating },
      ]),
    deletProduct: (id) => {
      const { cloned, index } = productClone(productItem, id);
      cloned.splice(index, 1);
      setProductItem(cloned);
    }    
  };
};
