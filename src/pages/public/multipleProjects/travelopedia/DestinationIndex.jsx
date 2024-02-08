import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { withTranslation } from "react-i18next";
import AddDestination from "./AddDestination";

export function DestinationIndex(props) {

    const { t } = props;

    return (
        <>
            <Container>
                <h1>Travel List </h1>
                <section className="download-discover-section">
                    <AddDestination />

                </section>

            </Container >
        </>
    );
}

export default withTranslation()(DestinationIndex);