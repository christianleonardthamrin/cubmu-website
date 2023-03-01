import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ 
  subsets: ['latin'],
  style: ['normal']
})

export default function Modal({setShowModal}) {
    return (
        <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50"
            >
                <div className="my-6 w-full mx-auto max-w-3xl">
                    <div className="rounded-32px shadow-lg flex bg-white">
                        <Image
                            className='rounded-tl-32px rounded-bl-32px w-150px h-150px lg:w-305px lg:h-305px'
                            src={'/assets/contoh_gambar.jpeg'} 
                            width={305}
                            height={305}
                            alt='spoon'
                        />              
                        <div className="flex flex-col justify-between px-8 py-6" style={{width: '100%'}}>
                            <div className="header flex justify-between">
                                <div className="title flex flex-col">
                                    <h2 className="text-black text-base lg:text-xl font-bold">Bakso Boedjangan</h2>
                                    <span className="text-10px lg:text-xs font-normal text-promo mt-2">Promo Sampai 31 Desember 2022</span>
                                </div>
                                <span className={`${inter.className} text-2xl text-discount font-semibold flex items-center`}>
                                    20%
                                </span>
                            </div>
                            <div className="detail flex flex-col items-center">
                                <span className={`${inter.className} text-2xl text-discount font-semibold flex items-center w-4/5 text-center`}>
                                    Coupon Successfully Redeemed
                                </span>
                                <span className="text-10px lg:text-xs font-normal text-promo mt-2">12:30 PM</span>
                            </div>
                            <button 
                                className="mt-2 bg-discount w-161px py-14px lg:py-2 lg:w-full text-xs lg:text-base font-bold self-center rounded-xl"
                                onClick={() => setShowModal(false)}
                            >
                                DONE
                            </button>
                        </div>
                    </div>

                </div>
            </div>
            <div className="opacity-80 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}