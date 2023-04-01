import Head from 'next/head'
import React from 'react'
import Header from '../components/header'
import Banner from '../components/banner'
import ProductFeed from '../components/productfeed'

export default function Home({products}) {
 
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon 2.0</title>
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon"></link>
      </Head>
      <div>
       <Header />
        <main className="max-w-screen-2xl mx-auto">
          <Banner />
          <ProductFeed products={products} />
        </main>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then((res) => res.json())
  return {
    props: {
      products
    }, 
  }
}
