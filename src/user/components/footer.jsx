import React from 'react';
import facebook from "../../images/facebook.png"
import search from "../../images/search.png"
import linkedin from "../../images/linkedin.png"
import twitter from "../../images/twitter.png"

function Footer() {
    return (
        <div className="footer-wrpr">
            <div className="social-icon-center">
                <div className="footer-socialicon">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src={facebook} alt="Facebook" />
                    </a>
                </div>
                <div className="footer-socialicon">
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <img src={twitter} alt="Twitter" />
                    </a>
                </div>
              
                <div className="footer-socialicon">
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <img src={linkedin} alt="LinkedIn" />
                    </a>
                </div>
                <div className="footer-socialicon">
                    <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                        <img src={search} alt="Search Icon" />
                    </a>
                </div>
            </div>
            <div className="footertext">
                <p className="bold-text">Example@gmail.com</p>
                <p className="bold-text">Copyright © 2020 Name. All rightd received </p>
            </div>
        </div>
    )
}

export default Footer;