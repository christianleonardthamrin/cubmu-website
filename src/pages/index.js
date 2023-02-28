import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Mulish } from 'next/font/google'
import Image from 'next/image'
import Navbar from './components/navbar'
import Content from './components/main/content'

const mulish = Mulish({ 
  subsets: ['latin'],
  style: ['normal']
})

export default function Home() {
  return (
    <div className={mulish.className} style={{color: '#fff', backgroundColor: '#131417'}}>
      <Navbar />
      <main className='relative h-screen lg:px-156px pt-66px pb-97px'>
        <h1 className='text-2xl'>Benefit Kupon Untuk Kamu</h1>
        <Content />
      </main>
    </div>
  )
}
