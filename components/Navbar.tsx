import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Create from '../assets/Create'
import Hamburger from '../assets/Hamburger'
import Logo from '../assets/Logo'
import PassIcon from '../assets/PassIcon'
import Search from '../assets/Search'
import NotificationIcon from '../assets/NotificationIcon'
import Notification from './Notification'
import Profile from './Profile'




function Navbar() {
    const [showInfo, setShowInfo] = useState(false)
    const [showProfileMenu, setShowProfileMenu] = useState(false)
    const lastSearch: String[] = ['patikadev', 'kodluyoruz', 'kodlama.io',
        'engin demirog', 'natural music', 'React lessons']
    const handleSideBar = () => {
        const sidebarLeftMenu = document.querySelector('.container .left-side')
        sidebarLeftMenu?.classList.toggle('open-menu')
    }
    const handleFocus = (e: any) => {
        const search = document.querySelector('.show-search-pass')
        search?.classList.add('show')

    }
    const handleBlur = (e: any) => {
        const search = document.querySelector('.show-search-pass')
        search?.classList.remove('show')
    }
    const handleBlurInfo = () => {
        setShowInfo(false)
    }
    const handleFocusProfile = () => {
        setShowProfileMenu(true)

    }
    const handleBlurProfile = () => {
        setShowProfileMenu(false)

    }
    return (
        <div id="header">
            <div className="left">
                <div className="haburger-menu" onClick={handleSideBar}>
                    <Hamburger />
                </div>
                <div className="logo">
                    <Link href={'/'}><Logo /></Link>
                </div>
            </div>
            <div className="middle">
                <div className="search-form" onFocus={handleFocus} onBlur={handleBlur} >
                    <input type="text" placeholder='Ara' className='search-text' />
                    <button className='search-button'>
                        <Search />
                    </button>
                </div>

                <div className="show-search-pass">
                    <ul>
                        {lastSearch.map((search, idx) =>
                        (

                            <li key={idx}>
                                <PassIcon type="search" />
                                <span>{search}</span>
                                <button>kaldır</button>
                            </li>

                        )
                        )}
                    </ul>
                </div>
            </div>
            <div className="right">
                <div className="create-item">
                    <Create />
                </div>
                <div className="information">
                    <div className="info-icon" onClick={() => { setShowInfo(!showInfo) }} onBlur={handleBlurInfo} tabIndex={-1}><NotificationIcon /></div>
                    {showInfo && (
                        <Notification />
                    )}
                </div>
                <div className="profile">
                    <div className="profile-image" tabIndex={1} onFocus={handleFocusProfile} onBlur={handleBlurProfile}>
                        <Image src="https://randomuser.me/api/portraits/women/23.jpg" width="88" height="88" alt="profile" />
                    </div>
                    {showProfileMenu && (
                        <Profile />
                    )}
                </div>
            </div>
        </div >
    )
}

export default Navbar