import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from './bottom.module.css';
import { useTranslation } from "react-i18next";
import { IoSettingsSharp } from "react-icons/io5";
import DarkMode from '../darkMode';


function SettingButton() {
    const { t } = useTranslation('footer');

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className={styles.footerBottom}>
            <Button variant="primary" onClick={handleShow} className="me-2">
                <IoSettingsSharp />
            </Button>

            <Offcanvas show={show} onHide={handleClose} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the elements you
                    have chosen. Like, text, images, lists, etc.
                    
                    <hr />
                    < DarkMode />
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
}

export default SettingButton;