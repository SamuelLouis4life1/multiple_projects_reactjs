import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";


import styles from "./index.module.css";

export default function Account() {

	return (
		<Container>
			<Row>
				<Col>
					<h1 className="text-center">Account</h1>
				</Col>
			</Row>
		</Container>
	);
}