import Image from "next/image";
import { Inter } from "next/font/google";
import { getLocaleDateString } from "helper/general_helper";

const inter = Inter({ 
  subsets: ['latin'],
  style: ['normal']
})

export default function Modal({setShowModal, coupon, isTnc, setIsTnc}) {
    return (
        <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50"
            >
                <div className="my-6 w-305px lg:w-auto mx-auto lg:max-w-3xl">
                    {isTnc && coupon ? (
                        <>
                            <div className="rounded-32px shadow-lg p-10 bg-white text-black" dangerouslySetInnerHTML={{__html: coupon.couponTnc}} onClick={() => {setShowModal(false); setIsTnc(false)}}></div>
                        </>
                    ) : (
                        <>
                            <div className="rounded-32px shadow-lg flex flex-col lg:flex-row bg-white">
                                {coupon ? (
                                    <Image
                                        className='rounded-t-32px lg:rounded-tl-32px lg:rounded-tr-none lg:rounded-bl-32px w-305px h-305px'
                                        src={coupon.couponBrandLogo} 
                                        width={343}
                                        height={343}
                                        alt='spoon'
                                    />       
                                ) : null}       
                                <div className="flex flex-col justify-between -mt-8 lg:mt-0 px-5 lg:px-8 py-6 rounded-32px shadow-lg lg:shadow-none bg-white" style={{width: '100%'}}>
                                    <div className="header flex justify-between">
                                        <div className="title flex flex-col">
                                            <h2 className="text-black text-base lg:text-xl font-bold">{coupon && coupon.couponName}</h2>
                                            <span className="text-10px lg:text-xs font-normal text-promo mt-2">Promo Sampai {coupon ? getLocaleDateString(coupon.couponEndDate) : null}</span>
                                        </div>
                                        <span className={`${inter.className} text-xl lg:text-2xl text-discount font-semibold flex items-center`}>
                                            {coupon && coupon.couponBenefitType === 'Cashback' ? (
                                                'Rp. '
                                            ) : null}
                                            {coupon && coupon.couponBenefitValue}
                                        </span>
                                    </div>
                                    <div className="detail flex flex-col items-center mt-3 lg:mt-0">
                                        <span className={`${inter.className} text-lg text-discount font-semibold flex items-center w-4/5 text-center`}>
                                            Coupon Successfully Redeemed
                                        </span>
                                        <span className="text-10px lg:text-xs font-normal text-promo mt-2">12:30 PM</span>
                                    </div>
                                    <button 
                                        className="mt-2 bg-discount w-full py-14px lg:py-2 text-xs lg:text-base font-bold self-center rounded-xl"
                                        onClick={() => setShowModal(false)}
                                    >
                                        DONE
                                    </button>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
            <div className="opacity-80 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}