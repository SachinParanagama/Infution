import React from "react";
import { AiOutlineDingding } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import "./Footer.css";
import { Nav } from "react-bootstrap";

// Material UI
import SpaIcon from '@mui/icons-material/Spa';
import Typography from '@mui/material/Typography';

function Footer() {
  return (
    <div className="footer-container" style={{backgroundColor: '#212A3E'}}>
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join with us to receive our best products
        </p>
        <p className="footer-subscription-text">
        Your Centre for Wellness Expertise
        </p>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Service</Link>
          </div>

          <Link to="/add-feedback">
            <button className="feedback_btn"> Give Us Feedbacks </button>
          </Link>

          <div class="footer-link-items">
            <h2>Contact</h2>
            <Link to="/">Support</Link>
            <Link to="/">Destinations</Link>
            <Link to="/">Sponsorships</Link>
          </div>
        </div>
      </div>

      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 1000,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >    
            <Link to="/" className="social-logo">
              INFUTION <SpaIcon sx={{ display: { xl: 'none', md: 'flex' }, ml: 3 }} />
            </Link> </Typography>
          </div>
          <small class="website-rights"> Infution © 2022</small>
          <div class="social-icons">
            <Link
              class="social-icon-link facebook"
              to="https://www.facebook.com/Happy-Paws-100716186000033/"
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebook />
            </Link>
            <Link
              class="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram />
            </Link>
            <Link
              class="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <FaYoutube />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <FaTwitter />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
