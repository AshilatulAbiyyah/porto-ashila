import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram'; // 1️⃣ Import icon Instagram
import '../assets/styles/Footer.scss';

function Footer() {
  return (
    <footer>
      <div>
        {/* 2️⃣ Ganti tautan GitHub */}
        <a href="https://github.com/AshilatulAbiyyah" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        
        {/* 3️⃣ Ganti tautan LinkedIn */}
        <a href="www.linkedin.com/in/ashilatul-abiyyah-6a7742364" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
        
        {/* 4️⃣ Tambahkan tautan Instagram */}
        <a href="https://www.instagram.com/ashlatulabyyhn_/" target="_blank" rel="noreferrer"><InstagramIcon/></a>
      </div>

      {/* 5️⃣ Ganti nama & link project */}
      <p>
        A portfolio designed & built by 
        <a href="https://github.com/AshilatulAbiyyah/react-portfolio-template" target="_blank" rel="noreferrer">
          Ashilatul

        </a> 
        💜
      </p>
    </footer>
  );
}

export default Footer;
