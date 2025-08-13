import React from "react";
import flutter from '../assets/images/app.png';
import kotlinMap from '../assets/images/kotlin.map.png';
import tableau from '../assets/images/tableau.png';
import webTa from '../assets/images/web.Ta.jpg';
import '../assets/styles/Project.scss';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>My Projects</h1>
            <div className="projects-grid">
                
                {/* Project 1 */}
                <div className="project">
                    <img src={flutter} className="zoom" alt="Period Tracking App" width="100%" />
                    <h2>Period Tracking App</h2>
                    <p>
                        Aplikasi mobile berbasis Flutter untuk membantu pengguna memantau siklus menstruasi,
                        mencatat gejala, dan memberikan prediksi periode berikutnya dengan antarmuka modern
                        dan mudah digunakan.
                    </p>
                </div>

                {/* Project 2 */}
                <div className="project">
                    <img src={kotlinMap} className="zoom" alt="Padang City Mapping" width="100%" />
                    <h2>Padang City Mapping</h2>
                    <p>
                        Aplikasi Android berbasis Kotlin untuk menampilkan peta interaktif Kota Padang,
                        dilengkapi penanda lokasi penting, navigasi, dan informasi deskriptif untuk membantu
                        eksplorasi kota.
                    </p>
                </div>

                {/* Project 3 */}
                <div className="project">
                    <img src={tableau} className="zoom" alt="Interactive Data Dashboard" width="100%" />
                    <h2>Interactive Data Dashboard</h2>
                    <p>
                        Dashboard visualisasi data menggunakan Tableau untuk menyajikan analisis mendalam
                        secara interaktif, membantu pengambilan keputusan berbasis data secara lebih cepat
                        dan akurat.
                    </p>
                </div>

                {/* Project 4 */}
                <div className="project">
                    <img src={webTa} className="zoom" alt="Final Project Website" width="100%" />
                    <h2>Final Project Website</h2>
                    <p>
                        Website tugas akhir dengan desain responsif, UI modern, dan fitur interaktif,
                        dibangun menggunakan teknologi web terbaru untuk pengalaman pengguna yang optimal.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Project;
