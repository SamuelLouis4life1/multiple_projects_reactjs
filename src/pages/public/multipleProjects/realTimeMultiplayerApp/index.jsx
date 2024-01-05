import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { withTranslation } from "react-i18next";

export function RealTimeMultiplayerApp(props) {

    const { t } = props;

    return (
        <>
            <Container>
                <section className="download-discover-section">
                    <p>My first Real Time Multiplayer app</p>

                </section>
            </Container >

            <section className="download-discover-cards">
                <p>My second Real Time Multiplayer app</p>
                <p>https://github.com/menard-codes/snakes-game?ref=reactjsexample.com</p>
            </section>
        </>
    );
}

export default withTranslation()(RealTimeMultiplayerApp);