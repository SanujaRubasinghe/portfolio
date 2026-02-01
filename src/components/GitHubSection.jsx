import React from 'react'
import { GitHubCalendar } from 'react-github-calendar'

const GitHubSection = () => {
    return (
        <section className="w-full section-padding">
            <div className="w-full md:px-20 px-5 flex flex-col items-center gap-10">
                <h1 className="head-text">
                    My <span className="text-blue_gradient">Coding Activity</span>
                </h1>

                <div className="w-full flex justify-center text-white-800">
                    <GitHubCalendar
                        username="SanujaRubasinghe"
                        blockSize={15}
                        blockMargin={5}
                        colorScheme="dark"
                        fontSize={16}
                    />
                </div>
            </div>
        </section>
    )
}

export default GitHubSection
