import React, { useEffect, useState } from 'react'
import { navLinks } from '../constants'

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10
            setScrolled(isScrolled)
        }

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    })
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
                    <a href="https://linkedin.com/in/sanuja-rubasinghe" target="_blank" rel="noopener noreferrer" className="linkedin-btn group">
                        <div className="inner">
                            <img src="/images/linkedin.png" alt="LinkedIn" className="w-5 h-5" />
                        </div>
                    </a>

                    <a href="/documents/sanuja-rubasinghe-cv.pdf" download="sanuja-rubasinghe-cv.pdf" className="resume-btn group">
                        <div className="inner">
                            <span>Download Resume</span>
                        </div>
                    </a>

                    <a href="#contact" className="contact-btn group">
                        <div className="inner">
                            <span>Contact me</span>
                        </div>
                    </a>
                </div>
            </div>
        </header>
    )
}

export default NavBar