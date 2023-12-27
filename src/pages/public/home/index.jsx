import React, { useState, useEffect } from "react";
import { Container, Row, Col, Carousel, Button, Form, FloatingLabel } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import styles from "./index.module.css";
import HomeContainer from '../../../components/homeContainer'
import { action, racing, strategy, retro, sport, fighting, kids,  } from '../../../utils/gameInfo';

export default function Home() {
    const { t } = useTranslation("home");
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const [muted, setMuted] = useState(true);
    const changeMuted = () => {
        setMuted(state => !state)
    }
    const [categories, setCategories] = useState([]);
    
    const categoriesObjs = [
            {
                id: "f1b7543c-590e-4949-b25c-5ac0ef3f6889",
                title: "games.actionAdventure",
                details: [
                    "Click & Play",
                    "No Download required!",
                ],
                description: "games.descriptionSubcategory",
                Games: action,
            },
            {
                id: "843762dc-8779-4624-9d1f-a54b3837b61f",
                title: "games.sportRacing",
                details: [
                    "Click & Play",
                    "No Download required!",
                ],
                description: "games.descriptionSubcategory",
                Games: racing,
            },
            {
                id: "df1a5874-042c-499b-acfd-5a74334bdf3d",
                title: "games.sports",
                details: [
                    "Click & Play",
                    "No Download required!",
                ],
                description: "games.descriptionSubcategory",
                Games: sport,
            },
            {
                id: "bbbb5cd3-230e-4b20-bc8a-76274bfef7e8",
                title: "games.fightingArcade",
                details: [
                    "Click & Play",
                    "No Download required!",
                ],
                description: "games.descriptionSubcategory",
                Games: fighting,
            },
            {
                id: "0eac3ede-9347-49af-be62-036b6ac1f77c",
                title: "games.kid",
                details: [
                    "Click & Play",
                    "No Download required!",
                ],
                description: "games.descriptionSubcategory",
                Games: kids,
            },
            {
                id: "72d3bd33-9ce6-43a6-8ec1-b17b2b3c1452",
                title: "games.retroClassic",
                details: [
                    "Click & Play",
                    "No Download required!",
                ],
                description: "games.descriptionSubcategory",
                Games: retro,
            },
            {
                id: "925f5059-89a0-4dd0-9f40-1099992ae70c",
                title: "games.strategy",
                details: [
                    "Click & Play",
                    "No Download required!",
                ],
                description: "games.descriptionSubcategory",
                Games: strategy,
            },
        ]
        useEffect(() => {
            setCategories (
                categoriesObjs.map(item => ({
                    ...item, title: item.title
                })).sort( (a, b) => a.title.localeCompare(b.title))
            )
        },[t])

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
                        <HomeContainer categories={categories} />
                    </Col>
                </Row>
            </Container>
        </>

    );
}