import Image from "next/image";
import { Inter } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  style: ['normal']
})

export default function Card({setShowModal}) {
    return (
        <div className="card flex lg:flex-col rounded w-fit h-150px lg:h-475px bg-white">
            <div className="image-wrapper">
                <Image
                    className='rounded-tl rounded-bl lg:rounded-t lg:rounded-bl-none w-150px h-150px lg:w-305px lg:h-305px'
                    src={'/assets/contoh_gambar.jpeg'} 
                    width={305}
                    height={305}
                    alt='spoon'
                />
            </div>
            <div className="p-4 flex flex-col">
                <h2 className="text-black text-base lg:text-xl font-bold">Bakso Boedjangan</h2>
                <div className="flex justify-between items-center">
                    <span className={`${inter.className} text-2xl text-discount font-semibold flex items-center`}>
                        20%
                        <span className="text-off text-base font-medium ml-6px">Off</span>
                    </span>
                    <button 
                        className="text-xs font-semibold px-14px py-2 rounded-20px hidden" 
                        style={{color: 'rgba(0, 0, 0, 0.5)', border: 'solid 1px rgba(0, 0, 0, 0.2)'}}>
                        T&C {' >'}
                    </button>
                </div>
                <span className="text-10px lg:text-xs font-normal text-promo mt-2">Promo Sampai 31 Desember 2022</span>
                <button 
                    className="mt-2 bg-discount w-161px py-1 lg:py-2 lg:w-full text-xs lg:text-base font-bold self-center rounded"
                    onClick={() => setShowModal(true)}
                >
                    Tukarkan
                </button>
            </div>
        </div>
    )
}