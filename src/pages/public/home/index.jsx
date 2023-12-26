import React, { useState, useEffect } from "react";
import { Container, Row, Col, Carousel, Button, Form, FloatingLabel } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import styles from "./index.module.css";
import HomeContainer from '../../../components/homeContainer'

import { action, fighting, kids, multiplayer, platformer, puzzle, racing, retro, shooting, sport, strategy } from '../../../utils/gameInfo';


export default function Home() {
    const { t } = useTranslation("home");
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    // const [state, setState] = useState({
    //     zipCode: "",
    //     products: [
    //         {
    //             id: "8216d379-9033-4632-bba3-2a657cf85008",
    //             name: "4GB",
    //             price: 15.0,
    //             limited: true,
    //             details: [
    //                 "Conversa e texto ilimitado",
    //                 "Cobertura nacional",
    //                 "Usa 5G ou 4G LTE, o que for mais forte",
    //             ],
    //         },
    //         {
    //             id: "249185c3-8c61-4779-84ce-06fda6c5c2ef",
    //             name: "10GB",
    //             price: 20.0,
    //             limited: true,
    //             details: [
    //                 "Conversa e texto ilimitado",
    //                 "Cobertura nacional",
    //                 "Usa 5G ou 4G LTE, o que for mais forte",
    //             ],
    //         },
    //         {
    //             id: "79e703b4-d1a0-40ae-8e26-728c78d5d7b9",
    //             name: "15GB",
    //             price: 25.0,
    //             limited: true,
    //             details: [
    //                 "Conversa e texto ilimitado",
    //                 "Cobertura nacional",
    //                 "Usa 5G ou 4G LTE, o que for mais forte",
    //             ],
    //         },
    //         {
    //             id: "dd2af07e-22b3-4579-b4ce-b6c2a978597f",
    //             name: "Unlimited",
    //             price: 30.0,
    //             limited: false,
    //             details: [
    //                 "Conversa e texto ilimitado",
    //                 "Cobertura nacional",
    //                 "35GB de 5G + Dados 4G LTE",
    //             ],
    //         },
    //         {
    //             id: "704dcb00-3d43-4a7b-802e-8494f057b311",
    //             name: "6GB",
    //             price: 18.0,
    //             limited: true,
    //             details: [
    //                 "Conversa e texto ilimitado",
    //                 "Cobertura nacional",
    //                 "Usa 5G ou 4G LTE, o que for mais forte",
    //             ],
    //         },
    //         {
    //             id: "3a53de81-a49f-48d9-81ce-db377e04f062",
    //             name: "12GB",
    //             price: 22.0,
    //             limited: true,
    //             details: [
    //                 "Conversa e texto ilimitado",
    //                 "Cobertura nacional",
    //                 "Usa 5G ou 4G LTE, o que for mais forte",
    //             ],
    //         },
    //         {
    //             id: "ef832762-7f9a-4748-a6a2-966f12f7199a",
    //             name: "12GB",
    //             price: 22.0,
    //             limited: true,
    //             details: [
    //                 "Conversa e texto ilimitado",
    //                 "Cobertura nacional",
    //                 "Usa 5G ou 4G LTE, o que for mais forte",
    //             ],
    //         },
    //     ],
    // });





    const [muted, setMuted] = useState(true);
    const changeMuted = () => {
        setMuted(state => !state)
    }
    const [categories, setCategories] = useState([]);
    
    const categoriesObjs = [
            {
                title: "games.actionAdventure",
                details: [
                    "Click & Play",
                    "No Download required!",
                ],
                description: "games.descriptionSubcategory",
                Games: action,
            },
            {
                title: "games.sportRacing",
                details: [
                    "Click & Play",
                    "No Download required!",
                ],
                description: "games.descriptionSubcategory",
                Games: racing,
            },
            {
                title: "games.sports",
                details: [
                    "Click & Play",
                    "No Download required!",
                ],
                description: "games.descriptionSubcategory",
                Games: sport,
            },
            {
                title: "games.fightingArcade",
                details: [
                    "Click & Play",
                    "No Download required!",
                ],
                description: "games.descriptionSubcategory",
                Games: fighting,
            },
            {
                title: "games.kid",
                details: [
                    "Click & Play",
                    "No Download required!",
                ],
                description: "games.descriptionSubcategory",
                Games: kids,
            },
            {
                title: "games.logicPuzzle",
                details: [
                    "Click & Play",
                    "No Download required!",
                ],
                description: "games.descriptionSubcategory",
                Games: puzzle,
            },
            {
                title: "games.multi",
                details: [
                    "Click & Play",
                    "No Download required!",
                ],
                description: "games.descriptionSubcategory",
                Games: multiplayer,
            },
            {
                title: "games.platform",
                details: [
                    "Click & Play",
                    "No Download required!",
                ],
                description: "games.descriptionSubcategory",
                Games: platformer,
            },
            {
                title: "games.retroClassic",
                details: [
                    "Click & Play",
                    "No Download required!",
                ],
                description: "games.descriptionSubcategory",
                Games: retro,
            },
            {
                title: "games.strategy",
                details: [
                    "Click & Play",
                    "No Download required!",
                ],
                description: "games.descriptionSubcategory",
                Games: strategy,
            },
            {
                title: "games.fpsShoot",
                details: [
                    "Click & Play",
                    "No Download required!",
                ],
                description: "games.descriptionSubcategory",
                Games: shooting,
            }
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
                        {/* <HomeContainer products={state.products} /> */}
                        <HomeContainer categories={categories} />
                    </Col>
                </Row>
            </Container>
        </>

    );
}