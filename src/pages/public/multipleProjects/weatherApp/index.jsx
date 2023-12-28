import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { withTranslation } from "react-i18next";

export function WeatherApp (props) {

  const { t } = props;

  return (
    <>
      <Container>
        <section className="download-discover-section">
        <p>My first component WeatherApp</p>

        </section>
      </Container >

      <section className="download-discover-cards">
        <p>My second component WeatherApp</p>
      </section>
    </>
  );
}
export default withTranslation()(WeatherApp);