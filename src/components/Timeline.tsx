import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faCertificate } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>

          {/* 2022 - Red Hat Academy */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="2022"
            iconStyle={{ background: '#ff9800', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faCertificate} />}
          >
            <h3 className="vertical-timeline-element-title">Peserta Pelatihan Red Hat Academy</h3>
            <h4 className="vertical-timeline-element-subtitle">Red Hat Academy</h4>
            <p>
              Mengikuti pelatihan resmi dari Red Hat Academy yang berfokus pada sistem operasi berbasis Linux dan teknologi open-source. 
              Berhasil menyelesaikan pelatihan dengan sertifikat sebagai bukti kompetensi.
            </p>
          </VerticalTimelineElement>

          {/* 2023 - AWS Academy */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="2023"
            iconStyle={{ background: '#232f3e', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faCertificate} />}
          >
            <h3 className="vertical-timeline-element-title">Peserta Kursus AWS Academy</h3>
            <h4 className="vertical-timeline-element-subtitle">AWS Academy</h4>
            <p>
              Mengikuti kursus resmi AWS Academy yang membahas layanan komputasi awan (cloud computing) dan implementasinya pada berbagai solusi IT. 
              Mendapatkan sertifikat resmi setelah menyelesaikan program pelatihan.
            </p>
          </VerticalTimelineElement>

          {/* 2023 - 2024 Anggota Humas */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="2023 - 2024"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Anggota Divisi Humas</h3>
            <h4 className="vertical-timeline-element-subtitle">HMJ Teknologi Informasi</h4>
            <p>
              Mendukung kegiatan publikasi dan komunikasi HMJ, membuat konten kreatif, menyebarkan informasi, serta menjaga hubungan baik dengan mahasiswa dan pihak luar. 
              Berperan dalam perencanaan dan pelaksanaan berbagai acara kampus.
            </p>
          </VerticalTimelineElement>

          {/* 2024 - sekarang Kepala Humas */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="2024 - 2025"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Kepala Divisi Humas</h3>
            <h4 className="vertical-timeline-element-subtitle">HMJ Teknologi Informasi</h4>
            <p>
              Memimpin divisi Humas untuk membangun citra positif organisasi, menjalin komunikasi strategis dengan pihak internal dan eksternal, serta mengelola publikasi informasi. 
              Bertanggung jawab dalam koordinasi tim untuk meningkatkan engagement mahasiswa dan publik.
            </p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
