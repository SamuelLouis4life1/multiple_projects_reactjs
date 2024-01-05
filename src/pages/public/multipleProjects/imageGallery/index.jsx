import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { withTranslation } from "react-i18next";

export function ImageGallery(props) {

    const { t } = props;

    return (
        <>
            <Container>
                <section className="download-discover-section">
                    <p>My first component Image gallery App with Cloudinary</p>

                </section>
            </Container >

            <section className="download-discover-cards">
                <p>My second component Image gallery App with Cloudinary</p>
            </section>
        </>
    );
}

export default withTranslation()(ImageGallery);