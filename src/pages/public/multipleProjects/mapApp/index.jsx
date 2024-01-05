import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { withTranslation } from "react-i18next";

export function MapApp(props) {

    const { t } = props;

    return (
        <>
            <Container>
                <section className="download-discover-section">
                    <p>My first Map app with Google Maps API</p>

                </section>
            </Container >

            <section className="download-discover-cards">
                <p>My second Map app with Google Maps API</p>
            </section>
        </>
    );
}

export default withTranslation()(MapApp);