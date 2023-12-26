import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { withTranslation } from "react-i18next";
//import { HashLink } from "react-router-hash-link";
import appleImg from "../imgs/apple.png"

export function Download(props) {

  const { t } = props;

  const [readMore, setReadMore] = useState(false);
  const extraContent = <div>
    <p className="extra-content">{t("download.listDevices.smartTv.detailsReadMore")}</p>
  </div>

  return (
    <>
      <Container>
        <section className="download-discover-section">
        <p>My first component</p>

        </section>
      </Container >

      <section className="download-discover-cards">
        <p>My second component</p>
      </section>
    </>
  );
}
export default withTranslation()(Download);