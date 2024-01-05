import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { withTranslation } from "react-i18next";

export function ChatApp(props) {

    const { t } = props;

    return (
        <>
            <Container>
                <section className="download-discover-section">
                    <p>My first component Video Call App</p>

                </section>
            </Container >

            <section className="download-discover-cards">
                <p>Chat app with WebSockets: This project is a bit more challenging than the note-taking app, but it is a great way to learn about real-time communication in React.</p>
            </section>
        </>
    );
}

export default withTranslation()(ChatApp);