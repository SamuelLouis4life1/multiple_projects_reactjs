import React, { useState } from "react";
import { Container, Row, Col, Carousel, Button, Form, FloatingLabel } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import styles from "./index.module.css";
import ProductsContainer from "../../../components/productsContainer";


export default function Home() {
    const { t } = useTranslation("home");
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const [state, setState] = useState({
        zipCode: "",
        products: [
            {
                id: "5bd285f3-7ba8-4c53-8dde-8a99c5e110da",
                name: "4GB",
                price: 15.0,
                limited: true,
                details: [
                    "Conversa e texto ilimitado",
                    "Cobertura nacional",
                    "Usa 5G ou 4G LTE, o que for mais forte",
                ],
            },
            {
                id: "e17e6418-d81a-4d0a-a723-93088289a71d",
                name: "10GB",
                price: 20.0,
                limited: true,
                details: [
                    "Conversa e texto ilimitado",
                    "Cobertura nacional",
                    "Usa 5G ou 4G LTE, o que for mais forte",
                ],
            },
            {
                id: "228abeac-fa8e-4110-8010-4059533d1bb5",
                name: "15GB",
                price: 25.0,
                limited: true,
                details: [
                    "Conversa e texto ilimitado",
                    "Cobertura nacional",
                    "Usa 5G ou 4G LTE, o que for mais forte",
                ],
            },
            {
                id: "2c6ff17f-aad2-49b2-ab39-851dc38c1d9f",
                name: "Unlimited",
                price: 30.0,
                limited: false,
                details: [
                    "Conversa e texto ilimitado",
                    "Cobertura nacional",
                    "35GB de 5G + Dados 4G LTE",
                ],
            },
            {
                id: "5bd285f3-7ba8-4c53-8dde-8a99c5e110da",
                name: "6GB",
                price: 18.0,
                limited: true,
                details: [
                    "Conversa e texto ilimitado",
                    "Cobertura nacional",
                    "Usa 5G ou 4G LTE, o que for mais forte",
                ],
            },
            {
                id: "e17e6418-d81a-4d0a-a723-93088289a71d",
                name: "12GB",
                price: 22.0,
                limited: true,
                details: [
                    "Conversa e texto ilimitado",
                    "Cobertura nacional",
                    "Usa 5G ou 4G LTE, o que for mais forte",
                ],
            },
        ],
    });

    return (
        <>
            <Container fluid>
                <Row className="mt-2">
                    <Col className="d-flex justify-content-center">
                        <Carousel activeIndex={index} onSelect={handleSelect}>
                            <Carousel.Item>
                                <div className="d-flex justify-content-center w-100">
                                    <svg width="96vw" height="400">
                                        <rect
                                            width="100%"
                                            height="100%"
                                            style={{
                                                fill: "rgb(55, 57, 64)",
                                                strokeWidth: 3,
                                                stroke: "rgb(0,0,0)",
                                            }}
                                        />
                                    </svg>
                                </div>
                                <Carousel.Caption>
                                    <h3>Primeiro Banner</h3>
                                    <p>Texto 1º Banner</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="d-flex justify-content-center w-100">
                                    <svg width="96vw" height="400">
                                        <rect
                                            width="100%"
                                            height="100%"
                                            style={{
                                                fill: "rgb(55, 57, 64)",
                                                strokeWidth: 3,
                                                stroke: "rgb(0,0,0)",
                                            }}
                                        />
                                    </svg>
                                </div>
                                <Carousel.Caption>
                                    <h3>Segundo Banner</h3>
                                    <p>Texto 2º Banner</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="d-flex justify-content-center w-100">
                                    <svg width="96vw" height="400">
                                        <rect
                                            width="100%"
                                            height="100%"
                                            style={{
                                                fill: "rgb(55, 57, 64)",
                                                strokeWidth: 3,
                                                stroke: "rgb(0,0,0)",
                                            }}
                                        />
                                    </svg>
                                </div>
                                <Carousel.Caption>
                                    <h3>Terceiro Banner</h3>
                                    <p>Texto 3º Banner</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
                <Row className={styles.offersBg + " mt-2 pt-2"}>
                    <Col>
                        <Row>
                            <Col className="text-center">
                                <p>{t("Our new offer allows you to try us for 3 months at our lowest possible price.")}</p>
                            </Col>
                        </Row>
                        <ProductsContainer products={state.products} />
                    </Col>
                </Row>
            </Container>
        </>

    );
}