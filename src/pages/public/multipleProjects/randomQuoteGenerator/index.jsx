import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { withTranslation } from "react-i18next";

export function RandomQuoteGenerator(props) {

    const { t } = props;

    return (
        <>
            <Container>
                <section className="download-discover-section">
                    <p>My first Real Time Random Quote Generator app</p>

                </section>
            </Container >

            <section className="download-discover-cards">
                <p>My second Real Time Random Quote Generator app</p>
            </section>
        </>
    );
}

export default withTranslation()(RandomQuoteGenerator);