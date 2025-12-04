import React from 'react'
 import FacebookIcon from '@mui/icons-material/Facebook';
 import InstagramIcon from "@mui/icons-material/Instagram";
 import YouTubeIcon from "@mui/icons-material/YouTube";
 import "./Footer.css"
function Footer() {
  return (
    <div className="footer-outer-container">
      <div className="footer-inner-container">
        <div className="footer-icones">
          <FacebookIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </div>
        <div className="footer-data">
          <div>
            <ul>
              <li>Audio Description</li>
              <li>Invester Relations</li>
              <li>Legal Notice</li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cookies Prefernce</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Gift Cards</li>
              <li>Terms of Uses</li>
              <li>Corporate Information</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Media Center</li>
              <li>Privacy</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className="service-code">
          <p>Service Code</p>
        </div>
        <div className="copy-write">&copy; 1977-2004 Netflix,Inc.</div>
      </div>
    </div>
  );
}

export default Footer