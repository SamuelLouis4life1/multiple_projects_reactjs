import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { withTranslation } from "react-i18next";

export function VideoStreaming(props) {

    const { t } = props;

    return (
        <>
            <Container>
                <section className="download-discover-section">
                    <p>My first component Video streaming App</p>

                </section>
            </Container >

            <section className="download-discover-cards">
                <p>Video streaming app with RTMP: This project is a great way to learn about video streaming APIs in React.</p>
            </section>
        </>
    );
}

export default withTranslation()(VideoStreaming);