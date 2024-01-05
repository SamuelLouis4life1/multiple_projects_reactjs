import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { withTranslation } from "react-i18next";

export function WeatherApp (props) {

  //https://codesandbox.io/p/sandbox/sidebar-y1js2?file=%2Fsrc%2FComponents%2FHeader%2FHeader.js%3A43%2C10-43%2C20
  // https://codesandbox.io/p/sandbox/task-manager-x87vjr
  // https://codesandbox.io/p/sandbox/react-admin-0lp1zw
  // https://codesandbox.io/p/sandbox/react-d6h40z
  // https://codesandbox.io/p/sandbox/react-dashboard-pnm6fh
  // https://medium.com/@modularcoder/reactjs-multi-level-sidebar-navigation-menu-with-typescrip-materialui-251943c12dda
  // https://www.upgrad.com/blog/react-project-ideas-topics-beginners/ Multi project link
  //




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