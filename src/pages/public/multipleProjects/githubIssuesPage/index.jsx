import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { withTranslation } from "react-i18next";

export function GithubIssuesPage(props) {

    const { t } = props;

    return (
        <>
            <Container>
                <section className="download-discover-section">
                    <p>My first component Github Issues Page App</p>

                </section>
            </Container >

            <section className="download-discover-cards">
                <p>My second component Github Issues Page App</p>
            </section>
        </>
    );
}
export default withTranslation()(GithubIssuesPage);