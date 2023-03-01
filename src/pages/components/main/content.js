import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./components/card";
import Modal from "./components/modal";
import Tabs from "./components/tabs";
import { fetchCategories } from "@/redux/features/category/categorySlice";
import { useDispatch, useSelector } from "react-redux";

export default function Content() {
    const arr = [0, 1, 2, 3, 4]
    const [showModal, setShowModal] = useState(false)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCategories())
    }, [])

    return (
        <div className="">
            <Tabs />
            <div className="mt-6 flex justify-center">
                <div className="flex flex-col flex-wrap gap-6 lg:grid lg:grid-cols-3 justify-around">
                    {arr.map((a, index) => (
                        <Card key={index} setShowModal={setShowModal} />
                    ))}
                </div>
                {showModal ? <Modal setShowModal={setShowModal} /> : null}
            </div>
        </div>
    )
}