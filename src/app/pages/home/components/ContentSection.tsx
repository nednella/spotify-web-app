import React from 'react'
import ContentCard from './ContentCard'

interface ContentSectionProps {
    title: string
    content?: null // TODO: content type
}

const ContentSection: React.FC<ContentSectionProps> = ({ title }) => {
    // TODO: href link

    return (
        <section className="flex flex-col">
            <div className="mt-6 flex items-center justify-between pb-1">
                <p className="text-2xl font-bold">
                    <a href={''}>{title}</a>
                </p>
                <a
                    className="text-sm font-bold text-neutral-400"
                    href={''}
                >
                    Show all
                </a>
            </div>
            <div
                className="
                    grid
                    grid-cols-2
                    grid-rows-1
                    gap-x-3
                    overflow-hidden
                    xsm:grid-cols-3
                    lg:grid-cols-4
                    xl:grid-cols-5
                "
                style={{ gridAutoRows: 0 }}
            >
                <ContentCard
                    image={'src/assets/images/mac.png'}
                    title={'Title'}
                    subtitle={'Description'}
                />
                <ContentCard
                    image={'src/assets/images/liked.png'}
                    title={'Title'}
                    subtitle={'Description'}
                />
                <ContentCard
                    image={'src/assets/images/liked.png'}
                    title={'Title'}
                    subtitle={'Description'}
                />
                <ContentCard
                    image={'src/assets/images/liked.png'}
                    title={'Title'}
                    subtitle={'Description'}
                />
                <ContentCard
                    image={'src/assets/images/liked.png'}
                    title={'Title'}
                    subtitle={'Description'}
                />
            </div>
        </section>
    )
}

export default ContentSection
