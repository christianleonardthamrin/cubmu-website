import Image from "next/image";
import { Inter } from 'next/font/google'
import { getLocaleDateString } from '../../../../../helper/general_helper'

const inter = Inter({ 
  subsets: ['latin'],
  style: ['normal']
})

export default function Card({selectCouponHandler, coupon, setIsTnc}) {
    
    return (
        <div className="card flex lg:flex-col rounded w-full h-150px lg:h-475px bg-white">
            <div className="image-wrapper">
                {coupon ? (
                    <img
                        className='rounded-tl rounded-bl lg:rounded-t lg:rounded-bl-none w-150px h-150px lg:w-305px lg:h-305px'
                        src={coupon.couponBrandLogo} 
                        width={305}
                        height={305}
                        alt='spoon'
                    />
                ) : null }
                
            </div>
            <div className="p-4 flex flex-col">
                <h2 className="text-black text-base lg:text-xl font-bold">{coupon && coupon.couponName}</h2>
                <div className="flex justify-between items-center">
                    <span className={`${inter.className} text-lg lg:text-2xl text-discount font-semibold flex items-center`}>
                        {coupon && coupon.couponBenefitType === 'Cashback' ? (
                            'Rp. '
                        ) : null}
                        {coupon && coupon.couponBenefitValue}
                        {coupon && coupon.couponBenefitType === 'Discount' ? (
                            <span className="text-off text-base font-medium ml-6px">Off</span>
                        ) : null}
                    </span>
                    <button 
                        className="text-xs font-semibold px-14px py-2 rounded-20px hidden lg:inline" 
                        style={{color: 'rgba(0, 0, 0, 0.5)', border: 'solid 1px rgba(0, 0, 0, 0.2)'}}
                        onClick={() => {selectCouponHandler(coupon);setIsTnc(true)}}
                    >
                        T&C {' >'}
                    </button>
                </div>
                <span className="text-10px lg:text-xs font-normal text-promo mt-2">Promo Sampai {coupon ? getLocaleDateString(coupon.couponEndDate) : null}</span>
                <button 
                    className="mt-2 bg-discount w-161px py-1 lg:py-2 lg:w-full text-xs lg:text-base font-bold self-center rounded"
                    onClick={() => selectCouponHandler(coupon)}
                >
                    Tukarkan
                </button>
            </div>
        </div>
    )
}