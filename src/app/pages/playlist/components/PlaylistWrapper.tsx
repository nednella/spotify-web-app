import React, { useRef } from 'react'

import { PlaylistSimplified } from '../../../../types/Playlist'
import { Track } from '../../../../types/Track'

import PlaylistHeader from './PlaylistHeader'
import Header from '../../../../components/Header'
import PlayButton from '../../../../components/PlayButton'
import ScrollWrapper from '../../../../components/wrappers/ScrollWrapper'
import BackgroundGradient from '../../../../components/BackgroundGradient'

interface PlaylistWrapperProps {
    playlist: PlaylistSimplified
    tracks: Track[]
    children: React.ReactNode
}

const PlaylistWrapper: React.FC<PlaylistWrapperProps> = ({ playlist, tracks, children }) => {
    const contentRef = useRef(null)

    return (
        <>
            <Header>
                <PlayButton
                    contentId={playlist.id}
                    size={24}
                    className="absolute"
                />
                <span className="truncate pl-14 text-2xl font-bold">{playlist.name}</span>
            </Header>
            <ScrollWrapper contentRef={contentRef}>
                <PlaylistHeader
                    playlist={playlist}
                    tracks={tracks}
                />
                {/* Content container */}
                <div className="relative z-[1] h-fit w-full">
                    <BackgroundGradient
                        className="z-[-1]"
                        size="large"
                    />
                    {/* Content */}
                    <section
                        ref={contentRef}
                        className="mx-auto h-fit w-full max-w-[1400px] p-4"
                    >
                        {children}
                    </section>
                </div>
            </ScrollWrapper>
        </>
    )
}

export default PlaylistWrapper
