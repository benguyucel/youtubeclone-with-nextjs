import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Image from 'next/image';
import React, { Key } from 'react'
import { videos } from '../data/data'

export const HomeContent = () => {
    const countViews = (number: Number) => {
        if (number.toString().length === 4) {
            return number.toString().slice(0, 1) + 'K'
        }
        if (number.toString().length === 5) {
            return number.toString().slice(0, 2) + 'K'
        }
        if (number.toString().length === 6) {
            return number.toString().slice(0, 3) + 'K'
        }
        if (number.toString().length === 7) {
            return number.toString().slice(0, 1) + 'M'
        }
        if (number.toString().length === 8) {
            return number.toString().slice(0, 2) + 'M'
        }
    }
    return (
        <div className="video-content">
            {videos?.map((video: any, idx: any) => (
                <div className="video-item" key={idx}>
                    <div className="image-container" >
                        <Image className='image' src={video.image} layout="fill" alt='video' />
                        <span className="video-duration">{video.duration}</span>
                    </div>
                    <div className="video-item-bottom">
                        <div className="channel-logo">
                            <Image className='image' src={video.logo} width="35" height="35" alt='video' />
                        </div>
                        <div className="video-item-bottom-middle">
                            <div className="title">
                                {video.title.length >= 50 ? video.title.slice(0, 50) + '...' : video.title}
                            </div>
                            <div className="channel">
                                {video.channel}
                            </div>
                            <div className="see-time">
                                <span>{countViews(video.views)} Görüntüleme </span>
                                <span className='time'>{video.uploadTime} </span>
                            </div>
                        </div>
                    </div>
                </div>

            ))}
        </div>
    )
}

export default HomeContent