import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Button, Carousel, Card } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { FaAngleUp, FaAngleDown, FaPlusCircle, FaMinusCircle } from "react-icons/fa";

import styles from "./detail.module.css";

export default function ProductDetail() {
	const params = useParams();
	const navigate = useNavigate();
	const { t } = useTranslation("productDetail");

	const [state, setState] = useState({
		product: undefined,
		moreDetails: false,
		details: [],
		maxQuantity: 4,
		quantity: 1,
		includeSms: false,
	});

	useEffect(() => {
		//getProductById(params.id);
		var product = {
			id: "5bd285f3-7ba8-4c53-8dde-8a99c5e110da",
			name: "4GB",
			price: 15.0,
			limited: true,
			details: [
				"Unlimited Nationwide Talk & Text",
				"4GB of 5G • 4G LTE per month",
				"3-in-1 SIM Card Kit or eSIM (for eligible devices)",
				"FREE international calls to Mexico and Canada",
				"FREE Mobile HotSpot",
				"WiFi Calling & Text",
				"Data speeds reduce after 4GB but data is unlimited",
				"With our BYOP program, bring your own unlocked 4G LTE and VoLTE-friendly phone (you love it, cracks and all)",
				"Long story short: we offer awesome wireless service at the lowest monthly price. Period.",
			],
		};

		setState((prevState) => ({
			...prevState,
			product: product,
			details: prevState.moreDetails
				? product.details
				: product.details.slice(0, 3),
		}));
	}, []);

	const toggleDetails = () => {
		setState((prevState) => ({
			...prevState,
			moreDetails: !prevState.moreDetails,
			details: !prevState.moreDetails
				? prevState.product?.details
				: prevState.product?.details.slice(0, 3),
		}));
	};

	const addQty = () => {
		if (state.quantity < state.maxQuantity) {
			setState((prevState) => ({
				...prevState,
				quantity: prevState.quantity + 1,
			}));
		}
	};

	const removeQty = () => {
		if (state.quantity > 1) {
			setState((prevState) => ({
				...prevState,
				quantity: prevState.quantity - 1,
			}));
		}
	};

	const handleChange = (event) => {
		const { value, name, type, checked } = event.target;

		let newValue = type !== "checkbox" ? value : checked;

		setState(prev => ({ ...prev, [name]: newValue }));
	};

	const addToCart = () => {
		navigate("/cart");
	};

	return (
		<Container fluid className="mb-5">
			{
				//Remover
				<h1 className="text-center">Product {params.id}</h1>
			}
			<Row className={styles.rowTop}>
				<Col className="d-flex">
					<div className={`${styles.leftBox} p-5`}>
						<table>
							<tbody>
								<tr>
									<td className="align-middle">
										<Carousel controls={false}>
											<Carousel.Item>
												<div className="d-flex justify-content-center w-100">
													<svg
														className="bd-placeholder-img rounded float-center"
														width="200"
														height="200"
														xmlns="http://www.w3.org/2000/svg"
														role="img"
														aria-label="Placeholder: IMG 1"
														preserveAspectRatio="xMidYMid slice"
														focusable="false"
													>
														<title>Placeholder</title>
														<rect
															width="100%"
															height="100%"
															fill="#868e96"
														></rect>
														<text x="50%" y="50%" fill="#dee2e6" dy=".3em">
															IMG 1
														</text>
													</svg>
												</div>
											</Carousel.Item>
											<Carousel.Item className="text-center">
												<div className="d-flex justify-content-center w-100">
													<svg
														className="bd-placeholder-img rounded float-center"
														width="200"
														height="200"
														xmlns="http://www.w3.org/2000/svg"
														role="img"
														aria-label="Placeholder: IMG 2"
														preserveAspectRatio="xMidYMid slice"
														focusable="false"
													>
														<title>Placeholder</title>
														<rect
															width="100%"
															height="100%"
															fill="#868e96"
														></rect>
														<text x="50%" y="50%" fill="#dee2e6" dy=".3em">
															IMG 2
														</text>
													</svg>
												</div>
											</Carousel.Item>
											<Carousel.Item className="text-center">
												<div className="d-flex justify-content-center w-100">
													<svg
														className="bd-placeholder-img rounded float-center"
														width="200"
														height="200"
														xmlns="http://www.w3.org/2000/svg"
														role="img"
														aria-label="Placeholder: IMG 3"
														preserveAspectRatio="xMidYMid slice"
														focusable="false"
													>
														<title>Placeholder</title>
														<rect
															width="100%"
															height="100%"
															fill="#868e96"
														></rect>
														<text x="50%" y="50%" fill="#dee2e6" dy=".3em">
															IMG 3
														</text>
													</svg>
												</div>
											</Carousel.Item>
										</Carousel>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div className={`${styles.rightBox}`}>
						<Row>
							<Col>
								<p className={`${styles.coverage}`}>3 Month Plan</p>
							</Col>
						</Row>
						<hr className={styles.hrBlue} />
						<Row>
							<Col>
								{state.product?.limited ? (
									<p className={`${styles.tcBlueMediumLight}`}>
										5G • 4G LTE DATA
									</p>
								) : (
									"\u00A0"
								)}
								<div className={`d-flex flex-row ${styles.tcBlueDark}`}>
									<p
										className={`fs-1 fw-bold ${styles.textMiddle} ${styles.emphasize} text-uppercase`}
									>
										{state.product?.name}
									</p>
									<p
										className={`fw-bold ${styles.textBottom} ${styles.emphasize}`}
									>
										/MO
									</p>
								</div>
							</Col>
							<Col className="justify-content-end">
								<p
									className={`${styles.tcBlueMediumLight} text-end text-uppercase`}
								>
									New Customer Offer
								</p>
								<div
									className={`d-flex flex-row justify-content-end pe-5 ${styles.tcBlueDark}`}
								>
									<p
										className={`fw-bold ${styles.textTop} ${styles.emphasize}`}
									>
										$
									</p>
									<p
										className={`fs-1 fw-bold ${styles.textMiddle} ${styles.emphasize} text-uppercase`}
									>
										{state.product?.price}
									</p>
									<p
										className={`fw-bold ${styles.textBottom} ${styles.emphasize}`}
									>
										/MO
									</p>
								</div>
							</Col>
						</Row>
						<hr />
						<Row>
							<Col>
								<p className={`${styles.tcBlueMediumLight} text-uppercase`}>
									Includes
								</p>
								<ul>
									{state.details.map((item, i) => (
										<li key={i}>{item}</li>
									))}
								</ul>
								<p className="btn mb-0" onClick={toggleDetails}>
									<span>{t(state.moreDetails ? "Veja Menos" : "Veja Mais")}</span>{" "}
									<span>
										{state.moreDetails ? <FaAngleUp /> : <FaAngleDown />}
									</span>
								</p>
							</Col>
						</Row>
						<Row className="mt-3 mb-3">
							<Col>
								<div className="form-check">
									<input
										className="form-check-input"
										id="includeSms"
										type="checkbox"
										name="includeSms"
										checked={state.includeSms}
										onChange={handleChange}
									/>
									<label className={`form-check-label m-0`} for="includeSms">
										{t("Include SMS?")}
									</label>
								</div>
							</Col>
							<Col className="text-end">
								<p className={`fw-bold m-0`}>
									<span>R$ 4,99</span>
								</p>
							</Col>
						</Row>
						<Row>
							<Col className="d-flex">
								<p className={`fw-bold ${styles.tcBlueDark}`}>{t("qty")}</p>
								<Button
									className={`${styles.btnQty}`}
									disabled={state.quantity <= 1}
									onClick={removeQty}
								>
									<FaMinusCircle />
								</Button>
								<p className={`fw-bold ${styles.tcBlueDark}`}>
									{state.quantity}
								</p>
								<Button
									className={`${styles.btnQty}`}
									disabled={state.quantity >= state.maxQuantity}
									onClick={addQty}
								>
									<FaPlusCircle />
								</Button>
							</Col>
							<Col className="text-end">
								<p className={`fw-bold m-0 ${styles.tcBlueDark}`}>
									<span>{t("Subtotal")}</span>{" "}
									<span>${state.product?.price * 3 * state.quantity}</span>
								</p>
							</Col>
						</Row>
						<Row className="mt-4">
							<Col className="d-grid gap-2">
								<Button variant="primary" onClick={addToCart}>
									{t("Buy Now")}
								</Button>
							</Col>
						</Row>
					</div>
				</Col>
			</Row>
			<Row>
				<Col className={styles.plansFeatures}>

					<div className={styles.plansTexts}>
						<h3 className="text-left">Beneficios do Ecommerce App total individual</h3>
						<p className="text-left">Beneficios do Ecommerce App total individual</p>
					</div>

					<div className={styles.cardsFeatures}>
						<Card className={styles.cards}>
							<img className={styles.cardImgTop} variant="top" src="https://via.placeholder.com/16" />
							<Card.Body>
								<Card.Title className={styles.cardsTitle}>Ecommerce App passaporte</Card.Title>
								<Card.Text>
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
								</Card.Text>
							</Card.Body>
						</Card>
						<Card className={styles.cards}>
							<img className={styles.cardImgTop} variant="top" src="https://via.placeholder.com/16" />
							<Card.Body>
								<Card.Title className={styles.cardsTitle}>Ligações nationais</Card.Title>
								<Card.Text>
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
								</Card.Text>
							</Card.Body>
						</Card>
						<Card className={styles.cards}>
							<img className={styles.cardImgTop} variant="top" src="https://via.placeholder.com/16" />
							<Card.Body>
								<Card.Title className={styles.cardsTitle}>Internet rapida</Card.Title>
								<Card.Text>
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
								</Card.Text>
							</Card.Body>
						</Card>

						<Card className={styles.cards}>
							<img className={styles.cardImgTop} variant="top" src="https://via.placeholder.com/16" />
							<Card.Body>
								<Card.Title className={styles.cardsTitle}>Gestor Online</Card.Title>
								<Card.Text>
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
								</Card.Text>
							</Card.Body>
						</Card>
					</div>
				</Col>
			</Row>
		</Container>

	);
}