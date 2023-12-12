import { Button, Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
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
                <div className={styles.linksSections}>
                    <div className={styles.footerLeft}>
                        <div>
                            <h3>{t("section1.title")}</h3>
                            <ul>
                                <li><Link to="#">{t("section1.link1")}</Link></li>
                                <li><Link to="#">{t("section1.link2")}</Link></li>
                                <li><Link to="#">{t("section1.link3")}</Link></li>
                                <li><Link to="#">{t("section1.link4")}</Link></li>
                                <li><Link to="#">{t("section1.link5")}</Link></li>
                                <li><Link to="#">{t("section1.link6")}</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h6>{t("section2.title")}</h6>
                            <ul>
                                <li><Link to="#">{t("section2.link1")}</Link></li>
                                <li><Link to="#">{t("section2.link2")}</Link></li>
                                <li><Link to="#">{t("section2.link3")}</Link></li>
                                <li><Link to="#">{t("section2.link4")}</Link></li>
                                <li><Link to="#">{t("section2.link5")}</Link></li>
                                <li><Link to="#">{t("section2.link6")}</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.footerRight}>
                        <div>
                            <h3>{t("section3.title")}</h3>
                            <ul>
                                <li><Link to="#">{t("section3.link1")}</Link></li>
                                <li><Link to="#">{t("section3.link2")}</Link></li>
                                <li><Link to="#">{t("section3.link3")}</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3>{t("section4.title")}</h3>
                            <ul>
                                <li><Link to="#">{t("section4.link1")}</Link></li>
                                <li><Link to="#">{t("section4.link2")}</Link></li>
                                <li><Link to="#">{t("section4.link3")}</Link></li>
                                <li><Link to="#">{t("section4.link4")}</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3>{t("section5.title")}</h3>
                            <ul>
                                <li><Link to="#">{t("section5.link1")}</Link></li>
                                <li><Link to="#">{t("section5.link2")}</Link></li>
                                <li><Link to="#">{t("section5.link3")}</Link></li>
                                <li><Link to="#">{t("section5.link4")}</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3>{t("section6.title")}</h3>
                            <ul>
                                <li><Link to="#">{t("section6.link1")}</Link></li>
                                <li><Link to="#">{t("section6.link2")}</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3>{t("section7.title")}</h3>
                            <ul>
                                <li><Link to="#">{t("section7.link1")}</Link></li>
                                <li><Link to="#">{t("section7.link2")}</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles.socialMedias}>
                    <p>{t("section4.title")}</p>
                    <a target="_blank" rel="noreferrer" href="https://www.facebook.com/Ecommerce AppBr"><BsFacebook /></a>
                    <a target="_blank" rel="noreferrer" href="https://www.instagram.com/Ecommerce Appbr/"><BsInstagram /></a>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/Ecommerce App/"><BsLinkedin /></a>
                </div>
            </div>
            <FooterBottom/>
        </footer>
    );
}

export default Footer;