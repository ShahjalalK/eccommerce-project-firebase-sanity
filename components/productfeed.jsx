import Porduct from './product'

export default function ProductFeed({products}) {        
  return (
    <div className=" grid grid-flow-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-5 md:-mt-52">
        {products.slice(0, 4).map(({id, title, price, image, description, category}) => (
            <Porduct id={id} title={title} price={price} image={image} description={description} category={category} />
        ))}
        <img src="https://Links.papareact.com/dyz" alt="banner" className="md:col-span-full" />
        <div className="md:col-span-2">
        {products.slice(4, 5).map(({id, title, price, image, description, category}) => (
            <Porduct id={id} title={title} price={price} image={image} description={description} category={category} />
        ))}
        </div>
        {products.slice(5, products.length).map(({id, title, price, image, description, category}) => (
            <Porduct id={id} title={title} price={price} image={image} description={description} category={category} />
        ))}
    </div>
  )
}
