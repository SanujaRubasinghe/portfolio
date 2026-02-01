import React from 'react'
import TitleHeader from '../components/TitleHeader'
import { expCards } from '../constants'
import GlowCard from '../components/GlowCard'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ExperienceSection = () => {

    useGSAP(() => {
        gsap.utils.toArray('.timeline-card').forEach((card) => {
            gsap.from(card,
                {
                    xPercent: -100,
                    opacity: 0,
                    transformOrigin: 'left left',
                    duration: 1,
                    ease: 'power2.inOut',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 80%'
                    }
                })
        })

        gsap.to('.timeline',
            {
                transformOrigin: 'bottom bottom',
                ease: 'power1.inOut',
                scrollTrigger: {
                    trigger: '.timeline',
                    start: 'top center',
                    end: '70% center',
                    onUpdate: (self) => {
                        gsap.to('.timeline', {
                            scaleY: 1 - self.progress
                        })
                    }
                }
            }
        )

        gsap.utils.toArray('.expText').forEach((text) => {
            gsap.from(text,
                {
                    xPercent: 0,
                    opacity: 0,
                    duration: 1,
                    ease: 'power2.inOut',
                    scrollTrigger: {
                        trigger: text,
                        start: 'top 60%'
                    }
                })
        })
    }, [])

    return (
        <section id="experience" className="w-full md:mt-40 mt-20 section-padding xl:px-0">
            <div className="w-full h-full md:px-20 px-5">
                <TitleHeader
                    title="Academic Journey & Certifications"
                    sub="🎓 Professional Blockchain Development Credentials"
                />

                <div className="mt-32 relative">
                    <div className="relative z-50 xl:space-y-32 space-y-10">
                        {expCards.map((card, index) => (
                            <div key={card.title} className="exp-card-wrapper">
                                <div className="xl:w-2/6">
                                    <GlowCard card={card} index={index}>
                                        <div>
                                            <img src={card.imgPath} alt={card.title} className="w-full h-64 object-cover rounded-lg" />
                                        </div>
                                    </GlowCard>
                                </div>

                                <div className="xl:w-4/6">
                                    <div className="flex items-start">
                                        <div className="timeline-wrapper">
                                            <div className='timeline' />
                                            <div className='gradient-line w-1 h-full' />
                                        </div>

                                        <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                                            <div className="timeline-logo">
                                                <img src={card.logoPath} alt="logo" />
                                            </div>
                                            <div>
                                                <h1 className='font-semibold text-3xl'>{card.title}</h1>
                                                <p className="my-5 text-white-50">{card.date}</p>
                                                <p className="text-blue-50 italic mb-4">
                                                    Certification Overview
                                                </p>
                                                <p className="text-lg text-white-50 leading-relaxed">
                                                    {card.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="w-full flex justify-center mt-20 relative z-50">
                        <a
                            href="https://www.linkedin.com/in/sanuja-rubasinghe/details/certifications/"
                            target="_blank"
                            rel="noreferrer"
                            className="bg-black-200 border border-white-800 text-white-500 font-bold py-4 px-8 rounded-full hover:bg-black-300 transition duration-300 flex items-center gap-2"
                        >
                            View All Certificates
                            <img src="/images/arrow-right-white.svg" alt="arrow" className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ExperienceSection