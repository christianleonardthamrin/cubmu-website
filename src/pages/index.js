import { Mulish } from 'next/font/google'
import Navbar from './components/navbar'
import Content from './components/main/content'
import Footer from './components/footer'

const mulish = Mulish({ 
  subsets: ['latin'],
  style: ['normal']
})

export default function Home() {
  return (
    <div className={mulish.className} style={{color: '#fff', backgroundColor: '#131417'}}>
      <Navbar />
      <main className='relative min-h-screen md:px-10 lg:px-156px pt-66px pb-97px'>
        <h1 className='text-2xl text-center md:text-left mb-11'>Benefit Kupon Untuk Kamu</h1>
        <Content />
      </main>
      <Footer />
    </div>
  )
}
