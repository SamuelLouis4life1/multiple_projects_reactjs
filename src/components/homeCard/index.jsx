import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import styles from "./index.module.css";

export default function ProductCard({
	id,
	limited = true,
	title,
	subtitle = "5G • 4G LTE DATA",
	price = 0.0,
	details = [],
	footerText = "",
}) {
	const { t } = useTranslation("productCard");

	return (
		<Card className={styles.cardBorder + " text-center mb-3"}>
			<div className={styles.header}>
				<Card.Subtitle className="text-uppercase">
					{limited ? subtitle : '\u00A0'}
				</Card.Subtitle>
				<Card.Title className="d-flex flex-row justify-content-center">
					<p className={`fs-2 ${styles.bold} ${styles.textMiddle} ${styles.emphasize} text-uppercase`}>{title}</p>
					{ limited ? (<p className={`${styles.textBottom} ${styles.bold}`}>/months</p>) : null }
				</Card.Title>
			</div>
			<Card.Body>
				<Card.Text>
					<div className="d-flex flex-row justify-content-center">
						<p className={`${styles.textTop} ${styles.bold}`}>$</p>
						<p className={`fs-2 ${styles.bold} ${styles.textMiddle} ${styles.emphasize} text-uppercase`}>{price}</p>
						<p className={`${styles.textBottom} ${styles.bold}`}>/MONTHS</p>
					</div>
					<ul className="text-start">
						{details.map((item, i) => (
							<li key={i}>{item}</li>
						))}
					</ul>
				</Card.Text>
				<div className="d-grid gap-2">
					<Link className="btn btn-primary lg" to={`/products/${id}`}>
						{t("See Details")}
					</Link>
				</div>
				<small>{footerText}</small>
			</Card.Body>
		</Card>
	);
}