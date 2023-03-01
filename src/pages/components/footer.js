import Image from "next/image";

export default function Footer() {
    return (
        <footer className="hidden lg:flex lg:flex-col gap-9 bg-footer pt-14 pb-10 px-20">
            <div className="flex justify-between">
                <div className="company-details flex flex-col gap-5 w-1/2 text-sm text-footer-text font-normal">
                    <Image 
                        className='mr-10 lg:mr-24'
                        src={'/assets/logo/logo-cubmu.svg'} 
                        width={112}
                        height={36}
                        alt='logo cubmu'
                    />
                    <p className="text-justify">CubMu adalah layanan streaming dari Transvision yang menyediakan berbagai konten VOD menarik dan menghibur. Nikmati semua konten dari CubMu di berbagai platform media Android, IOS, TV, dan Website</p>
                    <div className="flex gap-5">
                        <span className="footer-dot">Syarat Dan Ketentuan</span>
                        <span className="footer-dot">FAQ</span>
                        <span>Tentang Kami</span>
                    </div>
                </div>
                <div className="social-media flex gap-3">
                    <Image 
                        src={'/assets/icons/facebook.svg'} 
                        width={165}
                        height={69}
                        alt='facebook'
                    />
                    <Image 
                        src={'/assets/icons/twitter.svg'} 
                        width={165}
                        height={69}
                        alt='twitter'
                    />
                    <Image 
                        src={'/assets/icons/instagram.svg'} 
                        width={165}
                        height={69}
                        alt='instagram'
                    />
                </div>
            </div>
            <span className="text-center text-sm text-footer-text font-normal">© 2022, CubMu All Rights Reserved</span>
        </footer>
    )
}