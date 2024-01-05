import { Button, Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { Link } from "react-router-dom";
import styles from './index.module.css';
import './index.css';


function Footer() {
    const { t } = useTranslation('footer');

    return (
        <>
            <footer className="footer">
                <div className="waves">
                    <div className="wave" id="wave1"></div>
                    <div className="wave" id="wave2"></div>
                    <div className="wave" id="wave3"></div>
                    <div className="wave" id="wave4"></div>
                </div>
                <ul className="social-icon">
                    <li className="social-icon__item">
                        <a className="social-icon__link" target="_blank" rel="noreferrer" href="https://github.com/SamuelLouis4life1"> <BsGithub /> </a>
                    </li>
                    <li className="social-icon__item">
                        <a className="social-icon__link" target="_blank" rel="noreferrer" href="https://www.instagram.com/samuel.louis1991/"> <BsInstagram /> </a>
                    </li>
                    <li className="social-icon__item">
                        <a className="social-icon__link" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/louis-samuel-544082110/"> <BsLinkedin /> </a>
                    </li>
                    <li className="social-icon__item">
                        <a className="social-icon__link" target="_blank" rel="noreferrer" href="https://samuellouis4life1.github.io/portfolio/"> <CgWebsite /> </a>
                    </li>
                </ul>
                <ul className="menu">
                    <li className="menu__item"><a className="menu__link" href="/">Home</a></li>
                    <li className="menu__item"><a className="menu__link" href="/">About</a></li>
                    <li className="menu__item"><a className="menu__link" href="/">Services</a></li>
                    <li className="menu__item"><a className="menu__link" href="/">Team</a></li>
                    <li className="menu__item"><a className="menu__link" href="/">Contact</a></li>
                </ul>
                <p>&copy;2021 Samuel Louis | All Rights Reserved</p>
            </footer>
        </>
    );
}

export default Footer;