import React, { useState } from "react";
import {
	Container,
	Row,
	Col,
	Carousel,
	Button,
	Form,
	FloatingLabel,
} from "react-bootstrap";
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
			<Container>
				<section className={styles.howItWorksSection}>
					<h3>{t("HOW IT WORKS")}</h3>
					<div>
						<HowItWorksCard
							n="1"
							img="https://via.placeholder.com/80"
							text={t("CHECK COVERAGE IN YOUR AREA")}
							color="#ff9e1a"
						/>
						<HowItWorksCard
							n="2"
							img="https://via.placeholder.com/80"
							text={t("BRING CURRENT PHONE OR GET A NEW ONE")}
							color="#3b664a"
						/>
						<HowItWorksCard
							n="3"
							img="https://via.placeholder.com/80"
							text={t("PICK A PLAN, ANY PLAN")}
							color="#5abdc3"
						/>
						<HowItWorksCard
							n="4"
							img="https://via.placeholder.com/80"
							text={t("PLACE YOUR ORDER & ACTIVATE YOUR PLAN")}
							color="#68af85"
						/>
					</div>
				</section>
			</Container>
			<Container>
				<section className={styles.ourSecretSection}>
					<h3>{t("OUR SECRET SAUCE")}</h3>
					<p>{t("Lorem Ipsum Neque porro quisquam est qui dolorem ipsum quia dolor sit amet")}</p>
					<div>
						<OurSecretSectionCard
							img="https://via.placeholder.com/60"
							title={t("Lorem ipsum")}
						>
							{t("Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus, leo id tristique tempus, ligula erat faucibus odio, in iaculis.")}
						</OurSecretSectionCard>
						<OurSecretSectionCard
							img="https://via.placeholder.com/60"
							title={t("Lorem ipsum dolor")}
						>
							{t("Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus, leo id tristique tempus, ligula erat faucibus odio, in iaculis.")}
						</OurSecretSectionCard>
						<OurSecretSectionCard
							img="https://via.placeholder.com/60"
							title={t("consectetur adipiscing")}
						>
							{t("Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus, leo id tristique tempus, ligula erat faucibus odio, in iaculis.")}
						</OurSecretSectionCard>
						<OurSecretSectionCard
							img="https://via.placeholder.com/60"
							title={t("leo id tristique tempus")}
						>
							{t("Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus, leo id tristique tempus, ligula erat faucibus odio, in iaculis.")}
						</OurSecretSectionCard>
					</div>
				</section>
			</Container>
		</Container>
	);
}

function HowItWorksCard({ n, img, text, color }) {
	return (
		<div className={styles.howItWorksCard} style={{ backgroundColor: color }}>
			<span>{n}</span>
			<img src={img} alt={text} />
			<p>{text}</p>
		</div>
	);
}

function OurSecretSectionCard({img, title, children}) {
	return (
		<div className={styles.ourSecretSectionCard}>
			<img src={img} alt={title}/>
			<span>{title}</span>
			<p>{children}</p>
		</div>
	);	
}