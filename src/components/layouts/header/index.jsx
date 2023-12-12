import { useContext, useEffect, useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useTranslation } from 'react-i18next';
import { BsCart3, BsPhone } from "react-icons/bs";
import { GoSignOut } from "react-icons/go";
import { RiUserLine, RiUserShared2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import { USER_ROLES } from "../../../utils/userRoles";
import styles from "./index.module.css";

export default function Header() {
    const [scrollY, setScrollY] = useState(0);
    const [ borderStyle, setBorderStyle ] = useState("none");
  
    const { t } = useTranslation('header');

    const { user, signOut } = useContext(AuthContext);

    function handleScroll() {
        setScrollY(window.scrollY);
    }

    useEffect(() => {
        function watchScroll() {
          window.addEventListener("scroll", handleScroll);
        }
        watchScroll();
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      });

    useEffect(() => {
        if (scrollY > 30) {
            setBorderStyle("1px solid var(--tcColor1)");
        } else {
            setBorderStyle("none");
        }
    }, [scrollY, setBorderStyle]);


    const activeUrl = "#";
    const loginUrl = "/auth/signIn";
    const logoutRedirect = "/";
    const accountUrl = user?.roles.some(role => [USER_ROLES.ADMIN, USER_ROLES.SELLER].includes(role)) ? "/admin/orders" :  "/account";

    return (
			<>
				<div className={styles.headerTop}>
					<Container fluid="xxl" className={styles.headerTopCointainer}>
						<div>
							{t("6 MONTHS FREE SERVICE When You Buy a Phone + 6 Month Plan")} <Link to="/">{t("Learn More")}</Link>
						</div>
						<div>
							<Link to={activeUrl}>
								{t("Activate")} <BsPhone />
							</Link>
							{user ? (
								<span>
									<Link to={accountUrl}>{user.name ? user.name : user.userName}</Link>,{" "}
									<Link to={logoutRedirect} onClick={signOut} style={{ marginLeft: 0 }}>
										{t("signOut")} <GoSignOut />
									</Link>
								</span>
							) : (
								<Link to={loginUrl}>
									{t("Log In")} <RiUserShared2Line />
								</Link>
							)}
						</div>
					</Container>
				</div>
				<Navbar
					expand="lg"
					sticky="top"
					className={styles.headerMain}
					style={{ padding: "1.5rem 0", borderBottom: borderStyle }}
				>
					<Container>
						<Navbar.Toggle aria-controls="basic-navbar-nav" />
						<Navbar.Brand className={styles.logo} href="/">
							<img src="/imgs/Ecommerce App-logo.svg" alt="Ecommerce App" />
						</Navbar.Brand>
						<Navbar.Collapse
							className={styles.collapseArea}
							id="basic-navbar-nav"
						>
							<Nav className={styles.navCenter}>
								<Nav.Link href="#home">{t("Mobility")}</Nav.Link>
								<Nav.Link href="#link">{t("Fixed Phone")}</Nav.Link>
								<Nav.Link href="#link">{t("Other Solutions")}</Nav.Link>
							</Nav>
							<Nav>
								<NavDropdown
									title={t("Help")}
									id="basic-nav-dropdown"
								>
									<NavDropdown.Item href="#action/3.1">
										{t("dropdownHelp.item1")}
									</NavDropdown.Item>
								</NavDropdown>
							</Nav>
							<Nav className={styles.navTopHiddenLinks}>
								<NavDropdown.Divider />
								<Nav.Link to={activeUrl}>
									{t("headerTop.active")} <BsPhone />
								</Nav.Link>
								{user ? (
                                    <>
                                        <Nav.Link href={accountUrl}>
                                            {user.name} <RiUserLine />
                                        </Nav.Link>
                                        <Nav.Link href={logoutRedirect} onClick={signOut}>
                                            {t("signOut")} <GoSignOut />
                                        </Nav.Link>
                                    </>
								) : (
									<Nav.Link to={loginUrl}>
										{t("Log In")} <RiUserShared2Line />
									</Nav.Link>
								)}
							</Nav>
						</Navbar.Collapse>
						<Link to="cart" className={styles.linkIcon}>
							<BsCart3 size="1.5rem" />
						</Link>
					</Container>
				</Navbar>
			</>
		);
}