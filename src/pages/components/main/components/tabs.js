import Image from "next/image";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function Tabs() {
    const [activeTab, setActiveTab] = useState(0)
    const categories = useSelector((state) => state.category.categories)
    return (
        <nav className="fixed inset-x-0 bottom-0 lg:relative flex flex-nowrap items-center overflow-scroll lg:overflow-auto scrollbar-hide" style={{backgroundColor: '#1E1F26'}}>
            <div className="flex justify-evenly basis-full">
                {categories.length > 0 ? (
                    <button 
                    className={`flex justify-center items-center py-4 w-20 md:w-52 lg:w-auto lg:basis-1/7 border-b-4 ${activeTab === 0 ? 'border-tab-active' : 'border-tab-inactive'}`}
                    onClick={() => setActiveTab(0)}
                >
                    <Image 
                        className='mr-3 hidden lg:inline'
                        src={'/assets/icons/spoon-fork.svg'} 
                        width={10}
                        height={14}
                        alt='spoon'
                    />
                    All
                </button>
                ) : null}
                {categories.length > 0 ? categories.map((category) => (
                    <button 
                        key={category.categoryId}
                        className={`flex justify-center items-center py-4 w-20 md:w-52 lg:w-auto lg:basis-1/7 border-b-4 ${activeTab === category.categoryId ? 'border-tab-active' : 'border-tab-inactive'}`}
                        onClick={() => setActiveTab(category.categoryId)}
                    >
                        <Image 
                            className='mr-3 hidden lg:inline'
                            src={'/assets/icons/spoon-fork.svg'} 
                            width={10}
                            height={14}
                            alt='spoon'
                        />
                        {category.categoryName}
                    </button>
                )): null}
            </div>
        </nav>
    )
}

