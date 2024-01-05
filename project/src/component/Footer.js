import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
// import fb from '../assets/fbimg.png';
// import twitter from '../assets/twitterimg.png';
// import linkedin from '../assets/linkedinimg.png';
// import insta from '../assets/instaimg.png';
const Footer=()=>{
    return(
        <div className="footer">
<div className="sb_footer section_padding">
    <div className="sb__footer-links">
        <div className="sb__footer-links_div">
            <h4>For Business</h4>
            <a href="/employer">
                <p>Employer</p>
            </a>
            <a href="/healthplan">
                <p>Health Plan</p>
            </a>
            <a href="/individual">
                <p>Individual</p>
            </a>
        </div>
        <div className="sb__footer-links_div">
            <h4>Resources</h4>
            <a href="/resource">
                <p>Resource center</p>
            </a>
            <a href="/healthplan">
                <p>Testimonials</p>
            </a>
            <a href="/individual">
                <p>STV</p>
                </a>
    </div><div className="sb__footer-links_div">
            <h4>Partners</h4>
            <a href="/employer">
                <p>Swing Tech</p>
            </a>
            </div>
            <div className="sb__footer-links_div">
            <h4>Company</h4>
            <a href="/about">
                <p>About</p>
            </a>
            <a href="/press">
                <p>Press</p>
            </a>
            <a href="/career">
                <p>Career</p>
                </a>
                <Link to="/contact">
            <p>Contact</p>
          </Link>
            </div>
            {<div className="sb__footer-links_div">
            <h4>Coming soon on</h4>
            <div className="socialmedia">
                <p><img src={'https://static-00.iconduck.com/assets.00/facebook-icon-512x512-seb542ju.png'} alt=""/></p>
                <p><img src={'https://static01.nyt.com/images/2014/08/10/magazine/10wmt/10wmt-superJumbo-v4.jpg'} alt=""/></p>
                <p><img src={'https://static-00.iconduck.com/assets.00/linkedin-icon-2048x2048-ya5g47j2.png'} alt=""/></p>
                <p><img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png'} alt=""/></p>
            </div>
          </div> }
</div>
<hr></hr>
<div className="sb__footer-below">
    <div className="sb__footer-copyright">
        <p>@{new Date().getFullYear()} CodeInn. All right reserved.</p>
    </div>
    <div className="sb__footer-below-links">
        <a href="/terms"><div><p>Terms & Conditions</p></div></a>
        <a href="/privacy"><div><p>Privacy</p></div></a>
        <a href="/security"><div><p>Security</p></div></a>
        
    </div>
</div>
        </div>
        </div>
        
    )
}
export default Footer;