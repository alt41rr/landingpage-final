import React from 'react'
import about from '../../assets/img/abaout.png';

const index = () => {
    return (
        <section id="about">
            <div className="about-wrapper container">
                <div className="about-text">
                <p className="small">About Us</p>
                <h2>ABONKU</h2>
                <p>
                    Abonku merupakan produk yang disediakan untuk anda yang sedang mencari oleh-oleh atau sekedar ingin makan makanan siap santap. Kami hadir dengan VISI MISI yang jelas yaitu Menjadikan Abonku sebagai oleh-oleh khas utama dari kota
                    Bitung di tahun 2022, dengan memproduksi makanan yang murah, higenis, bermutu tinggi serta mudah di jangkau
                </p>
                </div>
                <div className="about-img">
                <img src={about} alt="food" />
                </div>
            </div>
        </section>
    )
}

export default index