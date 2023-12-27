import { Button, Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";
import FooterBottom from "../footer/bottom"
import styles from './index.module.css';


function Footer() {
    const { t } = useTranslation('footer');

    return (
        <footer>
            <div className={styles.wrapper}>
                <div>
                    <Link to="/" className={styles.logoLink}>
                        <img src="/imgs/Ecommerce App-logo.svg" alt="Ecommerce App" />
                    </Link>
                </div>
                <div className={styles.socialMedias}>
                    <a target="_blank" rel="noreferrer" href="https://github.com/SamuelLouis4life1"><BsGithub /></a>
                    <a target="_blank" rel="noreferrer" href="https://www.instagram.com/samuel.louis1991/"><BsInstagram /></a>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/louis-samuel-544082110/"><BsLinkedin /></a>
                </div>
            </div>
            <FooterBottom/>
        </footer>
    );
}

export default Footer;