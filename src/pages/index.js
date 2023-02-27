import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Mulish } from 'next/font/google'
import Image from 'next/image'
import Navbar from './components/navbar'

const mulish = Mulish({ 
  subsets: ['latin'],
  style: ['normal']
})

export default function Home() {
  return (
    <div className={'w-screen h-screen'} style={{color: '#fff', backgroundColor: '#131417'}}>
      <Navbar />
    </div>
  )
}
