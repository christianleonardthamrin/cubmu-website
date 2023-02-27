import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Navbar() {
    const router = useRouter()
    const [activeNav, setActiveNav] = useState(router.asPath)

    useEffect(() => {
        console.log(router.asPath, 'router')
        console.log(activeNav, 'active')
    }, [activeNav])
    return (
        <div className='navbar-wrapper py-6 flex justify-around lg:justify-center items-center tracking-navlink' style={{backgroundColor: '#1E1F26'}}>
            <Image 
                className='mr-10 lg:mr-24'
                src={'/assets/logo/logo-cubmu.svg'} 
                width={112}
                height={36}
                alt='logo cubmu'
            />
            <ul className="hidden lg:flex lg:gap-12" style={{color: '#B1B2B3'}}>
                <li onClick={() => setActiveNav(router.asPath)}>
                    <Link className={activeNav === '/' ? 'font-bold' : 'font-normal'} href={'/'}>HOME</Link>
                </li>
                <li onClick={() => setActiveNav(router.asPath)}>
                    <Link className={activeNav === '/#live-tv' ? 'font-bold' : 'font-normal'} href={'#live-tv'}>LIVE TV</Link>
                </li>
                <li>
                    <Link className="flex gap-2 focus:font-bold" href={'#kategori'}>
                        KATEGORI
                        <Image 
                            src={'/assets/icons/dropdown.svg'}
                            width={10}
                            height={5}
                            alt='dropdown'
                        />
                    </Link>
                </li>
                <li onClick={() => setActiveNav(router.asPath)}>
                    <Link className={activeNav === '/#catch-up' ? 'font-bold' : 'font-normal'} href={'#catch-up'}>CATCH UP</Link>
                </li>
                <li onClick={() => setActiveNav(router.asPath)}>
                    <Link className={activeNav === '/#my-list' ? 'font-bold' : 'font-normal'} href={'#my-list'}>MY LIST</Link>
                </li>
            </ul>
            <div className="flex items-center gap-6 lg:gap-7 lg:mx-9">
                <Image 
                    src={'/assets/icons/search.svg'}
                    width={24}
                    height={24}
                    alt='search'
                />
                <Image 
                    src={'/assets/icons/notification.svg'}
                    width={24}
                    height={24}
                    alt='notification'
                />
                <div className="profile flex items-center gap-2">
                    <Image 
                        src={'/assets/icons/avatar.svg'}
                        width={32}
                        height={32}
                        alt='avatar'
                    />
                    <span className="hidden lg:inline">BERUANGAIR</span>
                    <Image 
                        className="ml-1"
                        src={'/assets/icons/dropdown-bold.svg'}
                        width={10}
                        height={5}
                        alt='dropdown bold'
                    />
                </div>
            </div>

        </div>
    )
}