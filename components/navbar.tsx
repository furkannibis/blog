import { useState } from "react";
import Image from "next/image";
import { useTheme } from "@/app/functions";
import Link from "next/link";

export default function NavbarComp() {
  const [menuVisible, setMenuVisible] = useState(false);
  const toggleMenu = () => setMenuVisible((prev) => !prev);

  const menuItems = [
    { title: 'Vulnhub Machines', href: '/vulnhub'},
    { title: 'Projects', href: '/projects'},
    { title: 'Blog', href: '/blog'},
    { title: 'Certification', href: '/certification'},
    { title: 'Contact Me', href: '/connection'},

  ];

  return (
    <nav className="relative w-full">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image
            src={useTheme() ? '/images/logo_dark.svg' : '/images/logo_light.svg'}
            height={40}
            width={40}
            alt="logo"
          />
          <h1 className="self-center text-3xl font-semibold whitespace-nowrap">Furkan İBİŞ</h1>
        </Link>

        {/* Mobil menü açma butonu */}
        <button 
          onClick={toggleMenu}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2" 
          aria-expanded={menuVisible}
          aria-controls="navbar-default"
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>

        {/* Desktop menüsü (md ve üstü için) */}
        <div className="hidden md:flex items-center space-x-8 list-none">
          {menuItems.map(({ title, href }) => (
            <li key={title}>
              <Link href={href} className="block py-2 px-3 rounded text-lg">
                {title}
              </Link>
            </li>
          ))}
        </div>
      </div>

      {/* Mobil menü */}
      {menuVisible && (
        <div className="absolute w-full left-0 top-full z-10 shadow-md md:hidden">
          <ul className="flex flex-col p-4 border rounded-lg list-none">
            {menuItems.map(({ title, href }) => (
              <li key={title}>
                <Link href={href} className="block py-2 px-3 rounded">
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
