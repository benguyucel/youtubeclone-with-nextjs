import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import CollectionIcon from '../assets/CollectionIcon'
import ContentInfoPassIcon from '../assets/ContentInfoPassIcon'
import ContentStudioIcon from '../assets/ContentStudioIcon'
import DotIcon from '../assets/DotIcon'
import FeedbackIcon from '../assets/FeedbackIcon'
import GameIcon from '../assets/GameIcon'
import HelpIcon from '../assets/HelpIcon'
import HomeIcon from '../assets/HomeIcon'
import LibraryIcon from '../assets/LibraryIcon'
import LikedVideosIcon from '../assets/LikedVideosIcon'
import LiveIcon from '../assets/LiveIcon'
import MusicIcon from '../assets/MusicIcon'
import OptionsIcon from '../assets/OptionsIcon'
import PassIcon from '../assets/PassIcon'
import ShortsIcon from '../assets/ShortsIcon'
import ShowLessIcon from '../assets/ShowLessIcon'
import ShowMoreIcon from '../assets/ShowMoreIcon'
import SportIcon from '../assets/SportIcon'
import SubsIcon from '../assets/SubsIcon'
import TrendsIcon from '../assets/TrendsIcon'
import WatchLaterIcon from '../assets/WatchLaterIcon'
import YourVideosIcon from '../assets/YourVideosIcon'
import YoutubeIcon from '../assets/YoutubeIcon'
import YoutubeKidsIcon from '../assets/YoutubeKidsIcon'
import YoutubeMusicIcon from '../assets/YoutubeMusicIcon'
import YoutubeTvIcon from '../assets/YoutubeTvIcon'
import Footer from './Footer'

function Sidebar() {
    const [show, setShow] = useState(false)
    const [showChannel, setShowChannel] = useState(false)
    const handleShowChannel = () => {
        setShowChannel(!showChannel)
    }
    const handleShowLibrary = () => {
        setShow(!show)
    }
    return (
        <>
            <div id="sidebar" className='default-scrooll'>
                <div className="sidebar-group">
                    <div className="sidebar-item active">
                        <Link href={'/'}>
                            <HomeIcon />
                            <span>Ana Sayfa</span>
                        </Link>
                    </div>
                    <div className="sidebar-item">
                        <Link href={'/'}>
                            <ShortsIcon />
                            <span>Shorts</span>
                        </Link>
                    </div>
                    <div className="sidebar-item">
                        <Link href={'/'}>
                            <SubsIcon />
                            <span>Abonelikler</span>
                        </Link>
                    </div>
                    <div className="sidebar-item when-menu-opened">
                        <Link href={'/'}>
                            <LibraryIcon />
                            <span>Kitaplık</span>
                        </Link>
                    </div>
                </div>
                {/* Sidebar Group Start */}
                <div className="sidebar-group open-tab-menu">
                    <div className="sidebar-item">
                        <Link href={'/'}>
                            <LibraryIcon />
                            <span>Kitaplık</span>
                        </Link>
                    </div>
                    <div className="sidebar-item">
                        <Link href={'/'}>
                            <PassIcon />
                            <span>Geçmiş</span>
                        </Link>
                    </div>
                    <div className="sidebar-item">
                        <Link href={'/'}>
                            <YourVideosIcon />
                            <span>Videolarınız</span>
                        </Link>
                    </div>
                    <div className="sidebar-item">
                        <Link href={'/'}>
                            <WatchLaterIcon />
                            <span>Daha sonra izle</span>
                        </Link>
                    </div>
                    <div className="sidebar-item">
                        <Link href={'/'}>
                            <LikedVideosIcon />
                            <span>Beğendiğim videolar</span>
                        </Link>
                    </div>
                    {!show && (
                        <>
                            <div className="sidebar-item">
                                <a className='show-more-less' onClick={handleShowLibrary}>
                                    <ShowMoreIcon />
                                    <span>Daha fazla göster</span>
                                </a>
                            </div>
                        </>
                    )}

                    {/* Show more start */}
                    {show && (
                        <>
                            <div className="sidebar-item">
                                <Link href={'/'}>
                                    <CollectionIcon />
                                    <span>Motivasyon</span>
                                </Link>
                            </div>
                            <div className="sidebar-item">
                                <Link href={'/'}>
                                    <CollectionIcon />
                                    <span>TEDX</span>
                                </Link>
                            </div>
                            <div className="sidebar-item">
                                <Link href={'/'}>
                                    <CollectionIcon />
                                    <span>Music List</span>
                                </Link>
                            </div>
                            <div className="sidebar-item">
                                <Link href={'/'}>
                                    <CollectionIcon />
                                    <span>Javascript</span>
                                </Link>
                            </div>
                            <div className="sidebar-item">
                                <Link href={'/'}>
                                    <CollectionIcon />
                                    <span>Education List</span>
                                </Link>
                            </div>
                            <div className="sidebar-item">
                                <Link href={'/'}>
                                    <CollectionIcon />
                                    <span>Sport List</span>
                                </Link>
                            </div>
                            <div className="sidebar-item">
                                <Link href={'/'}>
                                    <CollectionIcon />
                                    <span>Play List</span>
                                </Link>
                            </div>
                            <div className="sidebar-item">
                                <Link href={'/'}>
                                    <CollectionIcon />
                                    <span>Meditasyon List</span>
                                </Link>
                            </div>
                            <div className="sidebar-item">
                                <Link href={'/'}>
                                    <CollectionIcon />
                                    <span>Meditasyon List</span>
                                </Link>
                            </div>
                            <div className="sidebar-item">
                                <Link href={'/'}>
                                    <CollectionIcon />
                                    <span>Meditasyon List</span>
                                </Link>
                            </div>
                            <div className="sidebar-item">
                                <Link href={'/'}>
                                    <CollectionIcon />
                                    <span>Meditasyon List</span>
                                </Link>
                            </div>
                            <div className="sidebar-item">
                                <Link href={'/'}>
                                    <CollectionIcon />
                                    <span>Meditasyon List</span>
                                </Link>
                            </div>
                            <div className="sidebar-item">
                                <Link href={'/'}>
                                    <CollectionIcon />
                                    <span>Meditasyon List</span>
                                </Link>
                            </div>
                        </>
                    )}
                    {show && (
                        <>
                            <div className="sidebar-item">
                                <a className='show-more-less' onClick={handleShowLibrary}>
                                    <ShowLessIcon />
                                    <span>Daha az göster</span>
                                </a>
                            </div>
                        </>
                    )}
                    {/* Show more end */}

                </div>
                {/* Sidebar Group Start  Subs*/}
                <div className="sidebar-group open-tab-menu subs-channel">
                    <h5 className="title">Abonelikler</h5>
                    <div className="sidebar-item">
                        <Link href={''}>
                            <Image src="https://randomuser.me/api/portraits/men/14.jpg" alt="Channel" width={'24'} height={'24'} />
                            <span>Kodluyoruz</span>
                            <LiveIcon />
                        </Link>
                    </div>
                    <div className="sidebar-item">
                        <Link href={''}>
                            <Image src="https://randomuser.me/api/portraits/men/14.jpg" alt="Channel" width={'24'} height={'24'} />
                            <span>Patikadev</span>
                            <LiveIcon />
                        </Link>
                    </div>
                    <div className="sidebar-item">
                        <Link href={''}>
                            <Image src="https://randomuser.me/api/portraits/men/14.jpg" alt="Channel" width={'24'} height={'24'} />
                            <span>Bilgisayar Genetiği</span>
                            <DotIcon />
                        </Link>
                    </div>
                    <div className="sidebar-item">
                        <Link href={''}>
                            <Image src="https://randomuser.me/api/portraits/men/14.jpg" alt="Channel" width={'24'} height={'24'} />
                            <span>Deniz Akademi</span>
                            <DotIcon />
                        </Link>
                    </div>
                    <div className="sidebar-item">
                        <Link href={''}>
                            <Image src="https://randomuser.me/api/portraits/men/14.jpg" alt="Channel" width={'24'} height={'24'} />
                            <span>Dave Gray</span>
                            <DotIcon />
                        </Link>
                    </div>
                    {/* Show More start */}
                    {!showChannel && (
                        <>
                            <div className="sidebar-item">
                                <a className='show-more-less' onClick={handleShowChannel}>
                                    <ShowLessIcon />
                                    <span>100 tane daha göster</span>
                                </a>
                            </div>
                        </>
                    )}
                    {showChannel && (
                        <>
                            <div className="sidebar-item">
                                <Link href={''}>
                                    <Image src="https://randomuser.me/api/portraits/men/14.jpg" alt="Channel" width={'24'} height={'24'} />
                                    <span>Patikadev</span>
                                    <LiveIcon />
                                </Link>
                            </div>
                            <div className="sidebar-item">
                                <Link href={''}>
                                    <Image src="https://randomuser.me/api/portraits/men/14.jpg" alt="Channel" width={'24'} height={'24'} />
                                    <span>Bilgisayar Genetiği</span>
                                    <DotIcon />
                                </Link>
                            </div>
                            <div className="sidebar-item">
                                <Link href={''}>
                                    <Image src="https://randomuser.me/api/portraits/men/14.jpg" alt="Channel" width={'24'} height={'24'} />
                                    <span>Deniz Akademi</span>
                                    <DotIcon />
                                </Link>
                            </div>
                            <div className="sidebar-item">
                                <Link href={''}>
                                    <Image src="https://randomuser.me/api/portraits/men/14.jpg" alt="Channel" width={'24'} height={'24'} />
                                    <span>Dave Gray</span>
                                    <DotIcon />
                                </Link>
                            </div>
                        </>
                    )}
                    {showChannel && (
                        <>
                            <div className="sidebar-item">
                                <a className='show-more-less' onClick={handleShowChannel}>
                                    <ShowLessIcon />
                                    <span>Daha az göster</span>
                                </a>
                            </div>
                        </>
                    )}
                    {/* Show More start */}
                </div>
                {/* Sidebar Group End  Subs*/}
                {/* Sidebar Group Start  Explore*/}
                <div className="sidebar-group open-tab-menu">
                    <h5 className="title">Keşfet</h5>
                    <div className="sidebar-item">
                        <Link href={''}>
                            <TrendsIcon />
                            <span>Trendler</span>
                        </Link>
                    </div>
                    <div className="sidebar-item">
                        <Link href={''}>
                            <MusicIcon />
                            <span>Müzik</span>
                        </Link>
                    </div>
                    <div className="sidebar-item">
                        <Link href={''}>
                            <LiveIcon explore={"true"} />
                            <span>Canlı</span>
                        </Link>
                    </div>
                    <div className="sidebar-item">
                        <Link href={''}>
                            <GameIcon />
                            <span>Oyun</span>
                        </Link>
                    </div>
                    <div className="sidebar-item">
                        <Link href={''}>
                            <SportIcon />
                            <span>Spor</span>
                        </Link>
                    </div>
                </div>
                {/* Sidebar Group End  Explore*/}
                {/* Sidebar Group start  More Content*/}
                <div className="sidebar-group open-tab-menu">
                    <h5 className="title">YouTubedan daha fazla içerik
                    </h5>
                    <div className="sidebar-item">
                        <Link href={''}>
                            <YoutubeIcon />
                            <span>Youtube Premium</span>
                        </Link>
                    </div>
                    <div className="sidebar-item">
                        <Link href={''}>
                            <ContentStudioIcon />
                            <span>İçerik Stüdyosu</span>
                        </Link>
                    </div>
                    <div className="sidebar-item">
                        <Link href={''}>
                            <YoutubeMusicIcon />
                            <span>Youtube Müzik</span>
                        </Link>
                    </div>
                    <div className="sidebar-item">
                        <Link href={''}>
                            <YoutubeKidsIcon />
                            <span>Youtube Kids</span>
                        </Link>
                    </div>
                    <div className="sidebar-item">
                        <Link href={''}>
                            <YoutubeTvIcon />
                            <span>Youtube TV</span>
                        </Link>
                    </div>

                </div>
                {/* Sidebar Group End  More Contennt*/}
                {/* Sidebar Group start  General*/}
                <div className="sidebar-group open-tab-menu">
                    <div className="sidebar-item">
                        <Link href={''}>
                            <OptionsIcon />
                            <span>Ayarlar</span>
                        </Link>
                    </div>
                    <div className="sidebar-item">
                        <Link href={''}>
                            <ContentInfoPassIcon />
                            <span>İçerik bildirme geçmişi</span>
                        </Link>
                    </div>
                    <div className="sidebar-item">
                        <Link href={''}>
                            <HelpIcon />
                            <span>Yardım</span>
                        </Link>
                    </div>
                    <div className="sidebar-item">
                        <Link href={''}>
                            <FeedbackIcon />
                            <span>Geri bildirim gönder</span>
                        </Link>
                    </div>
                </div>
                {/* Sidebar Group End  General*/}
                <div className="sidebar-group open-tab-menu">
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Sidebar