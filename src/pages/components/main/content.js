import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./components/card";
import Modal from "./components/modal";
import Tabs from "./components/tabs";
import { fetchCategories } from "@/redux/features/category/categorySlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchCoupons, selectCoupon } from "@/redux/features/coupon/couponSlice";

export default function Content() {
    const arr = [0, 1, 2, 3, 4]
    const [showModal, setShowModal] = useState(false)
    const [isTnc, setIsTnc] = useState(false)
 
    const dispatch = useDispatch()
    const coupons = useSelector((state) => state.coupon.values)
    const selectedCoupon = useSelector((state) => state.coupon.selected)

    const selectCouponHandler = async (coupon) => {
        await dispatch(selectCoupon(coupon))
        setShowModal(true)
    }

    useEffect(() => {
        dispatch(fetchCategories())
        dispatch(fetchCoupons())
    }, [])

    return (
        <div className="">
            <Tabs />
            <div className="mt-6 flex justify-center">
                <div className="flex flex-col flex-wrap gap-6 lg:grid lg:grid-cols-3 justify-around">
                    {coupons.map((coupon, index) => (
                        <Card key={index} coupon={coupon} selectCouponHandler={selectCouponHandler} setIsTnc={setIsTnc} />
                    ))}
                </div>
            </div>
            {showModal ? <Modal setShowModal={setShowModal} coupon={selectedCoupon} isTnc={isTnc} setIsTnc={setIsTnc} /> : null}
        </div>
    )
}