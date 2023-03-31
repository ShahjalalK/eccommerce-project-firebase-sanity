import Head from 'next/head'
import React from 'react'
import Header from '../components/header'
import Banner from '../components/banner'

export default function Home() {
  
  return (
    <div>
      <Head>
        <title>Amazon 2.0</title>
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon"></link>
      </Head>
      <div>
       <Header />
       <Banner />
        <div>
          <h1 className="text-5xl">Hello s</h1>
        </div>
      </div>
    </div>
  )
}
