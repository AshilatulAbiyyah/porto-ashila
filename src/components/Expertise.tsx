import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython, faAndroid, } from '@fortawesome/free-brands-svg-icons';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Flask",
    "Python",
    "SQL",
    "PostgreSQL",
    "Flutter",
    "Kotlin",
];

const labelsSecond = [
    "Git",
    "Docker",
    "AWS",
    "Linux",
    "Pandas",
];

const labelsThird = [
    "OpenAI",
];

const labelsFourth = [
    "Flutter",
    "Kotlin",
    "Dart",
    "Android Studio",
    "Firebase",
];

const labelsFifth = [
    "Tableau",
    "Looker Studio",
    "Pandas",
    "Excel",
    "Data Visualization",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise - Ashilatul Abiyyah</h1>
            <div className="skills-grid">
                
                {/* Full Stack Web Development */}
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Web Development</h3>
                    <p>Saya, <strong>Ashilatul Abiyyah</strong>, telah membangun berbagai aplikasi web dari nol menggunakan teknologi modern seperti React dan Flask. Menguasai proses pengembangan software (SDLC), termasuk frontend dan backend development dengan integrasi database.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                {/* DevOps & Automation */}
                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>DevOps & Automation</h3>
                    <p>Berpengalaman dalam setup DevOps, CI/CD pipelines, dan deployment automation untuk memastikan aplikasi berjalan lancar hingga proses Go-Live.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                {/* GenAI & LLM */}
                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>GenAI & LLM</h3>
                    <p>Memanfaatkan teknologi AI terbaru untuk mendukung pengambilan keputusan cerdas. Berpengalaman membangun solusi enterprise yang terintegrasi dengan model AI modern.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                {/* Mobile App Development */}
                <div className="skill">
                    <FontAwesomeIcon icon={faAndroid} size="3x"/>
                    <h3>Mobile App Development</h3>
                    <p>Memiliki pengalaman membangun aplikasi mobile menggunakan Flutter dan Kotlin, mulai dari desain UI, integrasi API, hingga koneksi database. Menguasai pengembangan aplikasi Android native maupun multiplatform.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFourth.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                {/* Data Analytics & Visualization */}
                <div className="skill">
                    <FontAwesomeIcon icon={faChartLine} size="3x"/>
                    <h3>Data Analytics & Visualization</h3>
                    <p>Pernah menggunakan Tableau dan Looker Studio untuk mengolah dan menganalisis data. Berpengalaman membuat visualisasi data yang interaktif dan mudah dipahami untuk mendukung pengambilan keputusan berbasis data.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFifth.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    </div>
    );
}

export default Expertise;
