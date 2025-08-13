import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram'; // Tambahan Icon Instagram
import '../assets/styles/Main.scss';

// Import foto dari folder lokal
import myPhoto from '../assets/images/shila.jpg';

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={myPhoto} alt="Ashilatul Abiyyah" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/AshilatulAbiyyah" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/ashilatul-abiyyah-6a7742364/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://www.instagram.com/ashlatulabyyhn_/" target="_blank" rel="noreferrer"><InstagramIcon/></a>
          </div>

          <h1>Ashilatul Abiyyah</h1>
          <p>Software Engineer | Mobile & Web Developer | AI & Data Analytics</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/AshilatulAbiyyah" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/ashilatul-abiyyah-6a7742364/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://www.instagram.com/ashlatulabyyhn_/" target="_blank" rel="noreferrer"><InstagramIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
