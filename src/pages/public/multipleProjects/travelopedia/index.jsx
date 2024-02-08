import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { withTranslation } from "react-i18next";
import DestinationIndex from "./DestinationIndex";

export function Travelopedia(props) {

    const { t } = props;

    return (
        <>
            <Container>
                <section className="download-discover-section">
                    <DestinationIndex />
                </section>
            </Container >
        </>
    );
}
export default withTranslation()(Travelopedia);

// ===============project references ==============

// 1) https://redux-toolkit.js.org/rtk-query/overview
// 2) https://www.npmjs.com/package/json-server 
// 3) 