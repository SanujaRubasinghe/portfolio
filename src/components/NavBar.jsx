import React, { useEffect, useState } from 'react'
import { navLinks } from '../constants'

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10
            setScrolled(isScrolled)
        }

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    })

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    }

    return (
        <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
            <div className="inner">
                <a href="#hero" className="logo">
                    Sanuja Rubasinghe
                </a>

                <nav className="desktop">
                    <ul>
                        {navLinks.map(({ link, name }) => (
                            <li key={name} className="group">
                                <a href={link}>
                                    <span>{name}</span>
                                    <span className="underline"></span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="flex items-center gap-4">
                    <a href="https://linkedin.com/in/sanuja-rubasinghe" target="_blank" rel="noopener noreferrer" className="linkedin-btn group hidden lg:flex">
                        <div className="inner">
                            <img src="/images/linkedin.png" alt="LinkedIn" className="w-5 h-5" />
                        </div>
                    </a>

                    <a href="/documents/sanuja-rubasinghe-cv.pdf" download="sanuja-rubasinghe-cv.pdf" className="resume-btn group hidden lg:flex">
                        <div className="inner">
                            <span>Download Resume</span>
                        </div>
                    </a>

                    <a href="#contact" className="contact-btn group hidden lg:flex">
                        <div className="inner">
                            <span>Contact me</span>
                        </div>
                    </a>

                    {/* Mobile Menu Toggle */}
                    <button className="lg:hidden flex items-center justify-center p-2" onClick={toggleMenu}>
                        <img src={isOpen ? "/images/close.svg" : "/images/menu.svg"} alt="menu" className="w-8 h-8" />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`fixed top-0 right-0 h-screen w-2/3 bg-black z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden`}>
                <div className="flex flex-col h-full p-5">
                    <div className="flex justify-end">
                        <button onClick={toggleMenu} className="p-2">
                            <img src="/images/close.svg" alt="close" className="w-8 h-8" />
                        </button>
                    </div>

                    <nav className="flex flex-col gap-5 mt-10">
                        {navLinks.map(({ link, name }) => (
                            <a
                                key={name}
                                href={link}
                                className="text-white-50 text-xl font-medium hover:text-white transition-colors"
                                onClick={toggleMenu}
                            >
                                {name}
                            </a>
                        ))}
                    </nav>

                    <div className="flex flex-col gap-5 mt-10">
                        <a href="https://linkedin.com/in/sanuja-rubasinghe" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white-50 hover:text-white">
                            <img src="/images/linkedin.png" alt="LinkedIn" className="w-6 h-6" />
                            <span>LinkedIn</span>
                        </a>

                        <a href="/documents/sanuja-rubasinghe-cv.pdf" download="sanuja-rubasinghe-cv.pdf" className="flex items-center gap-3 text-white-50 hover:text-white">
                            <span className='bg-white text-black p-1 rounded-sm text-xs font-bold'>CV</span>
                            <span>Download Resume</span>
                        </a>

                        <a href="#contact" className="contact-btn" onClick={toggleMenu}>
                            <div className="px-5 py-2 rounded-lg bg-white text-black w-fit">
                                <span>Contact me</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            {/* Overlay */}
            {isOpen && (
                <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={toggleMenu}></div>
            )}
        </header>
    )
}

export default NavBar