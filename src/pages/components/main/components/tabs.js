import Image from "next/image";
import { useState } from "react";

export default function Tabs() {
    const [activeTab, setActiveTab] = useState(0)

    return (
        <nav className="fixed inset-x-0 bottom-0 lg:relative flex flex-nowrap items-center overflow-scroll lg:overflow-auto scrollbar-hide" style={{backgroundColor: '#1E1F26'}}>
            <div className="flex justify-evenly basis-full">
                <button 
                    className={`flex justify-center items-center py-4 w-20 md:w-52 lg:w-auto lg:basis-1/6 border-b-4 ${activeTab === 0 ? 'border-tab-active' : 'border-tab-inactive'}`}
                    onClick={() => setActiveTab(0)}
                >
                    <Image 
                        className='mr-3 hidden lg:inline'
                        src={'/assets/icons/spoon-fork.svg'} 
                        width={10}
                        height={14}
                        alt='spoon'
                    />
                    Item A
                </button>
                <button 
                    className={`flex justify-center items-center py-4 w-20 md:w-52 lg:basis-1/6 border-b-4 ${activeTab === 1 ? 'border-tab-active' : 'border-tab-inactive'}`}
                    onClick={() => setActiveTab(1)}
                >
                    <Image 
                        className='mr-3 hidden lg:inline'
                        src={'/assets/icons/spoon-fork.svg'} 
                        width={10}
                        height={14}
                        alt='spoon'
                    />
                    Item B
                </button>
                <button 
                    className={`flex justify-center items-center py-4 w-20 md:w-52 lg:basis-1/6 border-b-4 ${activeTab === 2 ? 'border-tab-active' : 'border-tab-inactive'}`}
                    onClick={() => setActiveTab(2)}
                >
                    <Image 
                        className='mr-3 hidden lg:inline'
                        src={'/assets/icons/spoon-fork.svg'} 
                        width={10}
                        height={14}
                        alt='spoon'
                    />
                    Item C
                </button>
                <button 
                    className={`flex justify-center items-center py-4 w-20 md:w-52 lg:basis-1/6 border-b-4 ${activeTab === 3 ? 'border-tab-active' : 'border-tab-inactive'}`}
                    onClick={() => setActiveTab(3)}
                >
                    <Image 
                        className='mr-3 hidden lg:inline'
                        src={'/assets/icons/spoon-fork.svg'} 
                        width={10}
                        height={14}
                        alt='spoon'
                    />
                    Item D
                </button>
                <button 
                    className={`flex justify-center items-center py-4 w-20 md:w-52 lg:basis-1/6 border-b-4 ${activeTab === 4 ? 'border-tab-active' : 'border-tab-inactive'}`}
                    onClick={() => setActiveTab(4)}
                >
                    <Image 
                        className='mr-3 hidden lg:inline'
                        src={'/assets/icons/spoon-fork.svg'} 
                        width={10}
                        height={14}
                        alt='spoon'
                    />
                    Item E
                </button>
                <button 
                    className={`flex justify-center items-center py-4 w-20 md:w-52 lg:basis-1/6 border-b-4 ${activeTab === 5 ? 'border-tab-active' : 'border-tab-inactive'}`}
                    onClick={() => setActiveTab(5)}
                >
                    <Image 
                        className='mr-3 hidden lg:inline'
                        src={'/assets/icons/spoon-fork.svg'} 
                        width={10}
                        height={14}
                        alt='spoon'
                    />
                    Item F
                </button>
            </div>
        </nav>
    )
}

