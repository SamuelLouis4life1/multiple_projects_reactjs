import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { withTranslation } from "react-i18next";

export function BlogApp(props) {

    const { t } = props;

    return (
        <>
            <Container>
                <section className="download-discover-section">
                    <p>My first Blog app</p>

                </section>
            </Container >

            <section className="download-discover-cards">
                <p>My second Blog app</p>
            </section>
        </>
    );
}

export default withTranslation()(BlogApp);