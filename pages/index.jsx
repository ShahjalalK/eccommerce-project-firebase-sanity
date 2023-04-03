import React from 'react'
import Header from '../components/header'
import Banner from '../components/banner'
import ProductFeed from '../components/productfeed'

export default function Home({products}) {
  return (
    <div>
      <Header />
      <main className="max-w-screen-2xl mx-auto bg-gray-100">
        <Banner />
        <ProductFeed products={products} />
      </main>
    </div>
  )
}


export async function getServerSideProps(context) {
  const products = await fetch('https://fakestoreapi.com/products').then(res=>res.json())
  return {
    props: {products}, // will be passed to the page component as props
  }
}