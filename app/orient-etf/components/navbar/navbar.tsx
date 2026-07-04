"use client"
import { Suspense, useState } from 'react'
import './navbar.css'
import Image from 'next/image'
import Link from 'next/link'
import { ChangeLanguageButton } from '../change_language_button/change_language_button'

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)


    return (
        <nav className={`navbar ${isOpen ? 'open' : ''}`}>
            <Link className="logo" href="/orient-etf">
                <Image src="/run_logo.webp" alt="Regalo Appunti logo" fetchPriority="high" width="50" height="50" />
            </Link>
            <button
                className={`menu-toggle ${isOpen ? 'open' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
            >
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>
            <ul className="nav-links">
                <li>
                    <Suspense fallback={<div style={{ width: '60px', height: '30px' }}></div>}>
                        <ChangeLanguageButton />
                    </Suspense>
                </li>
            </ul>
        </nav>
    );
}
