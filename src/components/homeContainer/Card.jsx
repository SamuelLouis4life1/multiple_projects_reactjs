import React, { useEffect, useRef, useState } from "react";
import { Button, Card, CloseButton, Modal } from "react-bootstrap";
import { withTranslation } from "react-i18next";
import "./cards.css";
import "./cardsSubcategoryContents.css";
import Video from "./bufferedVideo";

export default withTranslation()(({ t, item }) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card
        key={item.id}
        onClick={handleShow}
        className="cardBorder-subcategory"
      >
        <Video
          className="card-video-subcategory"
          src={item.video}
          muted
          loop
          cover
          preload="none"
          type="video/mp4"
        />
        <Card.Body className="text-title-subcategory gtm_click_game">
          <img className="img-games-subcategory" src={item.img} alt="" />
        </Card.Body>
      </Card>
    </>
  )
});