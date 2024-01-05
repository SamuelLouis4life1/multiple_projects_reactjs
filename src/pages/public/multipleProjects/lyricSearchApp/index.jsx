import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { withTranslation } from "react-i18next";

export function LyricSearchApp(props) {

    const { t } = props;

    return (
        <>
            <Container>
                <section className="download-discover-section">
                    <p>My first component Lyric Search App</p>

                </section>
            </Container >

            <section className="download-discover-cards">
                <p>My second component Lyric Search App</p>
            </section>
        </>
    );
}

export default withTranslation()(LyricSearchApp);