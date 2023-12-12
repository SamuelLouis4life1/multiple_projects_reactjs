import { Formik } from "formik";
import React, { useContext, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { FaSignInAlt, FaSpinner } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { AuthContext } from "../../../../context/AuthContext";
import useAlert from "../../../../hooks/alert";
import { signInRequest } from "../../../../services/auth";
import styles from "./index.module.css";

export default function SignIn() {
	const [submiting, setSubmiting] = useState(false);

	const navigate = useNavigate();
	const { signIn, getUserAreaPath } = useContext(AuthContext);
	const { state } = useLocation();
	const { t } = useTranslation("signIn");
	const alert = useAlert();

	const form = {
		userName: "samuel.louis@EcommerceApp.com",
		password: "@Senha123",
	};

	const handleSubmitThis = (values) => {
		setSubmiting(true);

		signInRequest(values)
			.then(({ data }) => {
				signIn(data.user, data.accessToken, data.expiresIn);
				setSubmiting();
				redirect();
			})
			.catch((error) => {
				setSubmiting(false);
				console.error("error sign in", error);
				alert.fireRequestError(error);
			});
	};

	function redirect() {
		if (state && state.from) {
			navigate(state.from);
			return;
		} else {
			navigate(getUserAreaPath());
		}
	}

	const schema = yup.object().shape({
		userName: yup.string().email().required(),
		password: yup.string().required().min(8),
	});

	return (
		<div className={`${styles.loginContainer} position-relative`}>
			<div className={`${styles.leftBar}`}>
				<div className={`${styles.ball}`}></div>
				<img src="/imgs/Ecommerce App-logo.svg" alt="Ecommerce App" />
			</div>

			<div className="position-absolute top-50 start-50 translate-middle">
				<h3 className={`${styles.title} mb-3`}>{t("SignIn")}</h3>
				<Formik
					enableReinitialize={true}
					validationSchema={schema}
					onSubmit={handleSubmitThis}
					initialValues={form}
				>
					{({ handleSubmit, handleChange, values, touched, errors }) => (
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
											name="userName"
											value={values.userName}
											onChange={handleChange}
											autoFocus
											isValid={touched.userName && !errors.userName}
											isInvalid={touched.userName && errors.userName}
										/>
									</Form.Group>
								</Col>
							</Row>
							<Row>
								<Col>
									<Form.Group className="mb-3" controlId="formBasicPassword">
										<Form.Label>{t("Password")}</Form.Label>
										<Form.Control
											required
											type="password"
											placeholder={t("Password")}
											name="password"
											value={values.password}
											onChange={handleChange}
											isValid={touched.password && !errors.password}
											isInvalid={touched.password && errors.password}
										/>
									</Form.Group>
								</Col>
							</Row>
							<Row className="mb-4">
								<Col>
									<Link
										to={`/auth/passwordreset`}
										className={`text-uppercase ${styles.link}`}
									>
										{t("FORGOT MY PASSWORD")}
									</Link>
								</Col>
							</Row>
							<Row>
								<Col>
									<Button type="submit" variant="danger" className="btn-tc-red">
										{t("Sign in")}{" "}
										{submiting ? (
											<FaSpinner className="animate-spin" />
										) : (
											<FaSignInAlt />
										)}
									</Button>
								</Col>
							</Row>
						</Form>
					)}
				</Formik>
			</div>
		</div>
	);
}