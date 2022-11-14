import Link from 'next/link'
import React from 'react'

function Footer() {
    return (
        <>
            <div id="footer">
                <div className="footer-item">
                    <Link href=''>Hakkında</Link>
                    <Link href=''>Basın</Link>
                    <Link href=''>Telif Hakkı</Link>
                    <Link href=''>Bize Ulaşın</Link>
                    <Link href=''>İçerik Üreticiler</Link>
                    <Link href=''>Reklam verme</Link>
                    <Link href=''>Geliştiriciler</Link>
                </div>
                <div className="footer-item">
                    <Link href=''>Şartlar</Link>
                    <Link href=''>Gizlilik</Link>
                    <Link href=''>Politika ve Güvenlik</Link>
                    <Link href=''>Youtube nasıl çalışıyor</Link>
                    <Link href=''>Yeni Özellikleri Deneyin</Link>
                </div>
                <span className='copyrights'>© 2022 Google LLC</span>
            </div>
        </>
    )
}

export default Footer