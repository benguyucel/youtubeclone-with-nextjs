import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ChangeAccount from '../assets/ChangeAccount'
import ChannelIcon from '../assets/ChannelIcon'
import FeedbackIcon from '../assets/FeedbackIcon'
import HelpIcon from '../assets/HelpIcon'
import KeyboardShortcutIcon from '../assets/KeyboardShortcutIcon'
import LanguageIcon from '../assets/LanguageIcon'
import LimitetIcon from '../assets/LimitetIcon'
import LocationIcon from '../assets/LocationIcon'
import OptionsIcon from '../assets/OptionsIcon'
import PurchasedMembershipsIcon from '../assets/PurchasedMembershipsIcon'
import SignOutIcon from '../assets/SignOutIcon'
import ThemeIcon from '../assets/ThemeIcon'
import YourDataIcons from '../assets/YourDataIcons'
import YoutuStudionIcon from '../assets/YoutuStudionIcon'

function Profile() {
    return (
        <div className='profile-content'>
            <div className="profile-content-item">
                <div className="profile-header">
                    <Image src="https://randomuser.me/api/portraits/women/23.jpg" width="100" height="100" alt="profile" />
                    <div className='header-middle'>
                        <span>Yücel Bengü</span>
                        <a href=":;">Google Hesabınızı Yönetin</a>
                    </div>
                </div>
            </div>
            {/* Start */}
            <div className="profile-content-bottom">
                <div className="profile-content-bottom default-scrooll">
                    <div className="profile-content-item">
                        <div className="profile-content-list">
                            <Link href={''} className="profile-content-list-item">
                                <ChannelIcon />
                                <span>Kanalınız</span>
                            </Link>
                            <Link href={''} className="profile-content-list-item">
                                <YoutuStudionIcon />
                                <span>Youtube Studio</span>
                            </Link>
                            <Link href={''} className="profile-content-list-item">
                                <ChangeAccount />
                                <span>Hesabı Değiştir</span>
                            </Link>
                            <Link href={''} className="profile-content-list-item">
                                <SignOutIcon />
                                <span>Oturumu Kapat</span>
                            </Link>
                        </div>
                    </div>
                    {/* End */}
                    {/* Start */}
                    <div className="profile-content-item">
                        <div className="profile-content-list">
                            <Link href={''} className="profile-content-list-item">
                                <PurchasedMembershipsIcon />
                                <span>Satın Alınanlar ve Üyelikler</span>
                            </Link>
                            <Link href={''} className="profile-content-list-item">
                                <YourDataIcons />
                                <span>Yotube Verileriniz</span>
                            </Link>
                        </div>
                    </div>

                    <div className="profile-content-item">
                        <div className="profile-content-list">
                            <Link href={''} className="profile-content-list-item">
                                <ThemeIcon />
                                <span>Görünüm: Açık</span>
                            </Link>
                            <Link href={''} className="profile-content-list-item">
                                <LanguageIcon />
                                <span>Dil:Türkçe</span>
                            </Link>
                            <Link href={''} className="profile-content-list-item">
                                <LimitetIcon />
                                <span>Kısıtlı Mod:Kapalı</span>
                            </Link>
                            <Link href={''} className="profile-content-list-item">
                                <LocationIcon />
                                <span>Konum:Türkiye</span>
                            </Link>
                            <Link href={''} className="profile-content-list-item">
                                <KeyboardShortcutIcon />
                                <span>Klavye Kısayolları</span>
                            </Link>
                        </div>
                    </div>

                    {/* End */}
                    {/* Start */}
                    <div className="profile-content-item">
                        <div className="profile-content-list">
                            <Link href={''} className="profile-content-list-item">
                                <OptionsIcon />
                                <span>Ayarlar</span>
                            </Link>
                        </div>
                       
                    </div>
                    <div className="profile-content-item">
                        <div className="profile-content-list">
                            <Link href={''} className="profile-content-list-item">
                                <HelpIcon />
                                <span>Yardım</span>
                            </Link>
                        </div>
                        <div className="profile-content-list">
                            <Link href={''} className="profile-content-list-item">
                                <FeedbackIcon />
                                <span>Geri Bildirim</span>
                            </Link>
                        </div>
                       
                    </div>
                    {/* End */}
                </div>
            </div>
        </div>
    )
}

export default Profile