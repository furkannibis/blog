'use client';

import Image from "next/image";
import Link from "next/link";
import NavbarComp from "./navbar";

export function Header() {
    return (
        <header className="top-6 z-40 w-full">
            <div className="mx-auto flex max-w-screen-xl items-center justify-center px-8 py-4">
                <NavbarComp/>
            </div>
        </header>
    );
}