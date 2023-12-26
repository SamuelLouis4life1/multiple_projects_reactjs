import React, { useEffect, useRef, useState } from "react";
import { Button, Card, CloseButton, Modal } from "react-bootstrap";
import { withTranslation } from "react-i18next";
import "./cards.css";
import "./cardsSubcategoryContents.css";
// import Video from "../bufferedVideo";
// import Footer from "../footer";
// import {
//   MultiPlayes,
//   SinglePlayer,
//   PlayabilityTwo,
//   PlayabilityThree,
//   PlayabilityFour,
//   AvailabilityTwo,
//   AvailabilityThree,
//   AvailabilityFour
// } from "../../utils/availabilityIcons"

export default withTranslation()(({ t, item }) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const multiPlayes = item.players
  const playability = item.playability
  const availability = item.availability

  return (
    <>
      <Card
        key={item.id}
        onClick={handleShow}
        className="cardBorder-subcategory"
      >
        {/* <Video
          className="card-video-subcategory"
          src={item.video}
          muted
          loop
          cover
          preload="none"
          type="video/mp4"
        /> */}
        <Card.Body className="text-title-subcategory gtm_click_game">
          <img className="img-games-subcategory" src={item.img} alt="" />
        </Card.Body>
      </Card>

      <Modal
        size="lg"
        show={show}
        onHide={handleClose}>
        <Modal.Header className="subcategory-modal-header">
          <CloseButton className="close-button-header" onClick={handleClose} />
          {/* <Video
            src={item.modalVideo}
            autoPlay
            muted={true}
            audioButton={true}
            loop
            type="video/mp4"
          /> */}
          <Modal.Title className="modal-title">{t(item.title)}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{t(item.description)}</p>
          <div className="modal-body-container">
            <div className="modal-body-content">
              <div className="modal-body-subcontent">
                <div className="d-flex">
                  <img className="img-modal-body-subcontent" src={item.img} alt="" />
                  <p className="moda-pre-wrap">{t(item.title)}</p>
                </div>
                <Button className="play-now" href="/plans" variant="secondary">{t("games.playNow")}</Button>
              </div>
              <div className="modal-body-subcontent2">

                <div >
                  <div className="">
                    <img className="img-modal-body-subcontent" src={item.imgAvailableAge} alt="" />
                  </div>
                </div>

                {/* <div className="details"> */}
                <div >
                  <div >
                    <p> {/* "{availability == "Computer&TV&Cell" ? <AvailabilityThree /> : <AvailabilityTwo />}" */}</p>
                  </div>
                  <p className="modal-body-subcontent-centered">{t("games.availability")}</p>
                </div>

                <div align="center">
                    <p>{/* {multiPlayes == "Multi" ? <MultiPlayes /> : <SinglePlayer />} */}</p>
                  <p className="modal-body-subcontent-centered">{t("games.players")}</p>
                </div>

                <div>
                  <div>
                    <p>{/* {playability == "Keyboard&Controle&Touch" ? <PlayabilityThree /> : <PlayabilityTwo />} */}</p>
                  </div>
                  <p className="modal-body-subcontent-centered">{t("games.playability")}</p>
                </div>
                {/* </div> */}
              </div>
              <div className="modal-body-subcontent-details">
                <div>
                  <input type="checkbox" class="read-more-state" id="post-2" />

                  <ul class="read-more-wrap">
                    <li><p><span className="bold-text">{t("games.developer")}</span>{t(item.developer)}</p></li>
                    <li><p><span className="bold-text">{t("games.publisher")}</span>{t(item.publisher)}</p></li>
                    <li class="read-more-target"><p><span className="bold-text">{t("games.duration")}</span> {t(item.duration)}</p></li>
                    <li class="read-more-target"><p><span className="bold-text">{t("games.difficulty")}</span> {t(item.difficulty)}</p></li>
                    <li class="read-more-target"><p><span className="bold-text">{t("games.audio")}</span> {t(item.audio)}</p></li>
                    <li class="read-more-target"><p><span className="bold-text">{t("games.interface")}</span> {t(item.interface)}</p></li>
                    <li class="read-more-target"><p className="moda-pre-wrap">{t(item.littleDes)}</p></li>
                  </ul>

                  <label for="post-2" class="read-more-trigger"></label>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <p className="moda-pre-wrap">{t(item.description1)}</p>
            <div className="imgs-games-modal">
              <img className="img-games-modal" src={item.imgModal1} alt="" />
              <img className="img-games-modal" src={item.imgModal2} alt="" />
              <img className="img-games-modal" src={item.imgModal3} alt="" />
              <img className="img-games-modal" src={item.imgModal4} alt="" />
            </div>

            <div className="modal-body-subcontent modal-marginAjust">
              <div className="d-flex">
                <img className="img-modal-body-subcontent" src={item.img} alt="" />
                <p className="moda-pre-wrap">{t(item.title)}</p>
              </div>
              <Button className="play-now" href="/plans" variant="secondary">{t("games.playNow")}</Button>
            </div>

          </div>

        </Modal.Body>
        <Modal.Footer className="modal-footer">
          <Button variant="secondary" onClick={handleClose} className="modal-button">{t("games.close")}</Button>
          {/* <Footer /> */}
        </Modal.Footer>
      </Modal>
    </>
  )
});