import * as React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { Navbar } from './navbar';
import { NavbarMobile } from './navbar-mobile';

function Logo(){
    return (
        <Link href='/' className='mr-8 flex items-center gap-2' aria-label='Homepage'>
            <Image src='/images/favicon/icon.webp' height={60} width={60} alt='logo' className='hidden'/>
            {/* <Image src='/images/favicon/icon.webp' height={60} width={60} alt='logo' className='hidden'/> */}
        </Link>
    );
} 

function NavBar(){
    return (
        <div className='bg-ghost border-ghost nav-border relative mx-auto hidden h-[48px] w-full bg-background/50 px-8 shadow-lg saturate-100 backdrop-blur-2xl transition-colors md:flex'>
            <div className='flex w-full items-center justify-between'>
                <div className='z-50 flex items-center'>
                    <Logo/>
                </div>
                <div className='flex items-center'>
                    <Navbar/>
                </div>
            </div>
        </div>
    );
}

function MobileNavBar() {
    return (
        <div className='z-11 fixed right-6 top-6'>
            <div className='flex items-center gap-2'>
                <NavbarMobile/>
            </div>
        </div>
    );
}

export function Header() {
    return (
        <header className='top-6 z-40 w-full'>
            <div className="mx-auto flex max-w-screen-xl items-center justify-between  py-6 text-[#999999]">
                <NavBar/>
                <MobileNavBar/>
            </div>
        </header>
    );
}
