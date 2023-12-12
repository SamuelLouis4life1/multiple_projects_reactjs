import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { FaSpinner } from "react-icons/fa";

import styles from "./index.module.css";
import { requestPasswordResetRequest } from "../../../../services/auth";
import useAlert from "../../../../hooks/alert";

export default function PasswordReset() {
	const { t } = useTranslation("passwordReset");
	const navigate = useNavigate();
	const alert = useAlert();

	const [email, setEmail] = useState("");
	const [submiting, setSubmiting] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		setSubmiting(true);
		requestPasswordResetRequest(email)
		.then(res => res.data)
		.then(data => alert.fireSuccess(data.message.value))
		.then(() => navigate("/"))
		.catch(err => alert.fireRequestError(err))
		.finally(() => setSubmiting(false));
	};

	const handleChange = (event) => {
		setEmail(event.target.value);
	};

	return (
		<div className={`${styles.loginContainer} position-relative`}>
			<div className={`${styles.leftBar}`}>
				<div className={`${styles.ball}`}></div>
				<img src="/imgs/Ecommerce App-logo.svg" alt="Ecommerce App" />
			</div>

			<div className="position-absolute top-50 start-50 translate-middle">
				<h3 className={`${styles.title} mb-3`}>{t("Alterar senha")}</h3>
				<Form
					className={`${styles.formContainer} mb-0`}
					onSubmit={handleSubmit}
				>
					<Row>
						<Col>
							<Form.Group className="mb-3" controlId="formBasicEmail">
								<Form.Label>{t("Email")}</Form.Label>
								<Form.Control
									required
									type="email"
									placeholder={t("Enter email")}
									name="email"
									value={email}
									onChange={handleChange}
									autoFocus
								/>
							</Form.Group>
						</Col>
					</Row>
					<Row>
						<Col>
							<Button type="submit" variant="danger" className="btn-tc-red">
								{t("Enviar")}{" "}
								{submiting ? (
									<FaSpinner className="animate-spin" />
								) : null}
							</Button>
						</Col>
					</Row>
				</Form>
			</div>
		</div>
	);
}