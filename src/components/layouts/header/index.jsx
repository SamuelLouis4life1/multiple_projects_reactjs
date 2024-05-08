import { useContext, useEffect, useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { BsCart3, BsPhone } from "react-icons/bs";
import { GoSignOut } from "react-icons/go";
import { RiUserLine, RiUserShared2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import { USER_ROLES } from "../../../utils/userRoles";
import styles from "./index.module.css";
import { withTranslation } from "react-i18next";
import Darkmode from "../darkMode"

export function Header(props) {
	const [scrollY, setScrollY] = useState(0);
	const [borderStyle, setBorderStyle] = useState("none");

	const [value, setValue] = useState(props.language || props.i18n.language);

	useEffect(() => {
		console.log('--->' + props.language);
	}, [props.language]);

	const onLanguageHandle = (lang) => {
		console.log(lang);
		setValue(lang);
		props.i18n.changeLanguage(lang);
	};
	const { t } = props;

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
	const logoutRedirect = "/multiple_projects_reactjs";
	const accountUrl = user?.roles.some(role => [USER_ROLES.ADMIN, USER_ROLES.SELLER].includes(role)) ? "/admin/orders" : "/account";

	return (
		<>
			<div className={styles.headerTop}>
				<Container fluid="xxl" className={styles.headerTopCointainer}>
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
					<Navbar.Brand className={styles.logo} href="/multiple_projects_reactjs">
						<img src="/imgs/Multiple Projects-logo.svg" alt="Multiple Projects" />
					</Navbar.Brand>
					<Navbar.Collapse
						className={styles.collapseArea}
						id="basic-navbar-nav"
					>
						<Nav className={styles.navCenter}>
							<Nav.Link href="#home">{t("navbar_header.home")}</Nav.Link>
							<Nav.Link href="#link">{t("navbar_header.project")}</Nav.Link>
							<Nav.Link href="#link">{t("navbar_header.contact")}</Nav.Link>
						</Nav>
						<Nav>
							<NavDropdown
								title={t("navbar_header.dropdown_menu.languages")}
								id="basic-nav-dropdown"
							>
								<NavDropdown.Item onClick={() => onLanguageHandle('pt-BR')}>
									{t("navbar_header.dropdown_menu.languagePt")}
								</NavDropdown.Item>
								<NavDropdown.Item onClick={() => onLanguageHandle('en-US')} >
									{t("navbar_header.dropdown_menu.languageEn")}
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
export default withTranslation()(Header)