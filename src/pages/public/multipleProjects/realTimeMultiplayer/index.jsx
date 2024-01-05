import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { withTranslation } from "react-i18next";

export function RealTimeMultiplayer(props) {

    const { t } = props;

    return (
        <>
            <Container>
                <section className="download-discover-section">
                    <p>My first Real Time Multiplayer</p>

                </section>
            </Container >

            <section className="download-discover-cards">
                <p>My second Real Time Multiplayer</p>
            </section>
        </>
    );
}

export default withTranslation()(RealTimeMultiplayer);