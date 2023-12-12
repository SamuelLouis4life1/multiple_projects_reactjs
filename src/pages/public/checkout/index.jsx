import React, { useEffect, useState } from "react";
import {
	Container,
	Row,
	Col,
	Form,
	Table,
	Button,
	Modal,
} from "react-bootstrap";
import InputMask from "react-input-mask";
import { useTranslation } from "react-i18next";
import { Formik } from "formik";
import * as yup from "yup";
import { cpf, cnpj } from "cpf-cnpj-validator";
import { FaSpinner, FaAngleDoubleRight } from "react-icons/fa";

import { PersonTypeEnum as PersonType } from "../../../enums/perssonTypeEnum";
import { CountryEnum as Country } from "../../../enums/countryEnum";

import { onlyNumbers } from "../../../utils/helpers";
import Creditcard from "../../../components/creaditcard";

import styles from "./index.module.css";

export default function Checkout() {
	const [initialForm, setInitialForm] = useState({
		country: Country.Brazil,
		personType: PersonType.PHYSICAL,
		document: "",
		name: "",
		email: "",
		phone: "",
		stadualSubscripton: "",

		billingZipCode: "",
		billingState: "",
		billingCity: "",
		billingNeighborhood: "",
		billingStreet: "",
		billingNumber: "",
		billingDetails: "",

		shippingZipCode: "",
		shippingState: "",
		shippingCity: "",
		shippingNeighborhood: "",
		shippingStreet: "",
		shippingNumber: "",
		shippingDetails: "",
		cardHolderName: "",
		cardNumber: "",
		cardGoodThruMonth: "",
		cardGoodThruYear: [],
		cardCvv: "",
		cardDueDate: [],
		shippingId: 1,
		acceptTerms: true,
		acceptNewsletter: true,
	});
	const [submiting, setSubmiting] = useState(false);

	const [showTerm, setShowTerm] = useState(false);

	const handleCloseTerm = () => setShowTerm(false);
	const handleShowTerm = () => setShowTerm(true);

	useEffect(() => {
		setInitialForm({
			country: Country.Brazil,
			personType: PersonType.PHYSICAL,
			document: "",
			name: "",
			email: "",
			phone: "",
			stadualSubscripton: "",

			billingZipCode: "",
			billingState: "",
			billingCity: "",
			billingNeighborhood: "",
			billingStreet: "",
			billingNumber: "",
			billingDetails: "",

			shippingZipCode: "",
			shippingState: "",
			shippingCity: "",
			shippingNeighborhood: "",
			shippingStreet: "",
			shippingNumber: "",
			shippingDetails: "",
			cardHolderName: "",
			cardNumber: "",
			cardGoodThruMonth: new Date().getMonth() + 1,
			cardGoodThruYear: getYears()[0],
			cardCvv: "",
			cardDueDate: getDueDates()[0],
			shippingId: 1,
			acceptTerms: true,
			acceptNewsletter: true,
		});
	}, []);

	const { t, i18n } = useTranslation(["checkout", "common"]);

	const getMonths = () => {
		let months = [];
		for (let i = 1; i <= 12; i++) {
			months.push(i);
		}
		return months;
	};

	const getYears = () => {
		let years = [];
		for (
			let i = new Date().getFullYear();
			i <= new Date().getFullYear() + 10;
			i++
		) {
			years.push(parseInt(i));
		}
		return years;
	};

	const getDueDates = () => {
		return [5, 10, 15, 20];
	};

	//#region Validations

	const isValidDocument = (document, context) => {
		let vals = context.from[0].value;

		switch (vals.country) {
			case Country.Brazil:
				return vals.personType === PersonType.PHYSICAL
					? cpf.isValid(document)
					: cnpj.isValid(document);
			default:
				return true;
		}
	};

	const isValidPhone = (phone) => {
		return onlyNumbers(phone)?.length === 11;
	};

	const isValidZip = (zipCode) => {
		return onlyNumbers(zipCode)?.length === 8;
	};

	const isValidCardNumber = (number) => {
		return onlyNumbers(number)?.length === 16;
	};

	//#endregion

	const schema = yup.object().shape({
		country: yup.string().required().oneOf([Country.Brazil]),
		personType: yup
			.string()
			.required()
			.oneOf([PersonType.PHYSICAL, PersonType.LEGALENTITY]),
		document: yup
			.string()
			.required()
			.test("test-document", t("errors.invalidDocument"), (value, context) =>
				isValidDocument(value, context)
			),
		name: yup.string().required().min(10),
		email: yup.string().required().email(),
		phone: yup
			.string()
			.required()
			.test("test-phone", t("errors.invalidPhone"), (value, context) =>
				isValidPhone(value)
			),

		billingZipCode: yup
			.string()
			.required()
			.test(
				"test-stadualSubscripton",
				t("errors.invalidSS"),
				(value, context) => isValidZip(value)
			),
		billingState: yup.string().required(),
		billingCity: yup.string().required(),
		billingNeighborhood: yup.string().required(),
		billingStreet: yup.string().required(),
		billingNumber: yup.number().required().min(1),

		shippingZipCode: yup
			.string()
			.required()
			.test(
				"test-stadualSubscripton",
				t("errors.invalidSS"),
				(value, context) => isValidZip(value)
			),
		shippingState: yup.string().required(),
		shippingCity: yup.string().required(),
		shippingNeighborhood: yup.string().required(),
		shippingStreet: yup.string().required(),
		shippingNumber: yup.number().required().min(1),

		cardHolderName: yup.string().required(),
		cardNumber: yup
			.string()
			.required()
			.test(
				"test-cardNumber",
				t("errors.invalidCardNumber"),
				(value, context) => isValidCardNumber(value)
			),
		cardGoodThruMonth: yup.number().required().oneOf(getMonths()),
		cardGoodThruYear: yup.number().required().oneOf(getYears()),
		cardCvv: yup.number().required().min(100).max(999),
		cardDueDate: yup.number().required().oneOf(getDueDates()),
		acceptTerms: yup
			.bool()
			.required()
			.oneOf([true], "Os termos devem ser aceitos"),
	});

	const handleSubmitThis = (values) => {
		console.log(values);
		setSubmiting(true);
		setTimeout(() => {
			setSubmiting(false);
		}, 1000);
	};

	return (
		<>
			<Modal 
				show={showTerm} 
				onHide={handleCloseTerm}
				backdrop="static"
				keyboard={false}
				size="lg"
				centered>
				<Modal.Header closeButton>
					<Modal.Title>{t("Termos de uso")}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{t("Conteúdo do termo de uso.")}
				</Modal.Body>
			</Modal>

			<Container className="mb-3">
				<h1 className={`${styles.title} mb-2`}>{t("title")}</h1>
				<Formik
					enableReinitialize={true}
					validationSchema={schema}
					onSubmit={handleSubmitThis}
					initialValues={initialForm}
				>
					{({ handleSubmit, handleChange, values, touched, errors }) => (
						<Form noValidate onSubmit={handleSubmit}>
							<Row>
								<Col lg={7}>
									<h2 className={`${styles.title2} mb-3`}>{"\u00A0"}</h2>
									<Form.Group as={Row} className="mb-2">
										<Form.Label column md={3}>
											{t("Pais")}
											<span className={styles.required}>*</span>
										</Form.Label>
										<Col>
											<Form.Select
												required
												name="country"
												value={values.country}
												onChange={handleChange}
												isValid={!errors.country}
												isInvalid={touched.country && errors.country}
											>
												<option value={Country.Brazil}>
													{t(`countries.${Country.Brazil}`)}
												</option>
											</Form.Select>
										</Col>
									</Form.Group>
									<Form.Group as={Row} className="mb-2">
										<Form.Label column md={3}>
											{t("Tipo pessoa")}
											<span className={styles.required}>*</span>
										</Form.Label>
										<Col>
											<Form.Select
												required
												name="personType"
												value={values.personType}
												onChange={handleChange}
												isValid={!errors.personType}
												isInvalid={touched.personType && errors.personType}
											>
												<option value={PersonType.PHYSICAL}>
													{t(`personTypes.${PersonType.PHYSICAL}`)}
												</option>
												<option value={PersonType.LEGALENTITY}>
													{t(`personTypes.${PersonType.LEGALENTITY}`)}
												</option>
											</Form.Select>
										</Col>
									</Form.Group>
									<Form.Group as={Row} className="mb-2">
										<Form.Label column md={3}>
											{t(
												`labelDocument${
													i18n.language.startsWith("pt")
														? `.${values.personType}`
														: ""
												}`
											)}
											<span className={styles.required}>*</span>
										</Form.Label>
										<Col>
											{values.country === Country.Brazil ? (
												<InputMask
													className={`form-control 
											${touched.document && !errors.document ? "is-valid" : ""}
											${touched.document && errors.document ? "is-invalid" : ""}`}
													mask={
														values.personType === PersonType.PHYSICAL
															? "999.999.999-99"
															: "99.999.999/9999-99"
													}
													placeholder={
														values.personType === PersonType.PHYSICAL
															? "000.000.000-00"
															: "00.000.000/0000-00"
													}
													value={values.document}
													onChange={handleChange}
													type="tel"
													name="document"
												/>
											) : (
												<Form.Control
													type="text"
													name="document"
													value={values.document}
													onChange={handleChange}
													isValid={touched.document && !errors.document}
													isInvalid={touched.document && errors.document}
												/>
											)}
										</Col>
									</Form.Group>
									{values.personType == PersonType.LEGALENTITY ? (
										<Form.Group as={Row} className="mb-2">
											<Form.Label column md={3}>
												{t("Inscrição estadual")}
												<span>{` (${t("common:optional")})`}</span>
											</Form.Label>
											<Col>
												<Form.Control
													type="text"
													name="stadualSubscripton"
													value={values.stadualSubscripton}
													onChange={handleChange}
													isValid={
														touched.stadualSubscripton &&
														!errors.stadualSubscripton
													}
													isInvalid={
														touched.stadualSubscripton &&
														errors.stadualSubscripton
													}
												/>
											</Col>
										</Form.Group>
									) : null}
									<Form.Group as={Row} className="mb-2">
										<Form.Label column md={3}>
											{t(`labelName.${`${values.personType}`}`)}
											<span className={styles.required}>*</span>
										</Form.Label>
										<Col>
											<Form.Control
												type="text"
												name="name"
												placeholder={t(`phName.${`${values.personType}`}`)}
												value={values.name}
												onChange={handleChange}
												isValid={touched.name && !errors.name}
												isInvalid={touched.name && errors.name}
											/>
										</Col>
									</Form.Group>
									<Form.Group as={Row} className="mb-2">
										<Form.Label column md={3}>
											{t("Email")}
											<span className={styles.required}>*</span>
										</Form.Label>
										<Col>
											<Form.Control
												type="email"
												name="email"
												placeholder={t("Enter email")}
												value={values.email}
												onChange={handleChange}
												isValid={touched.email && !errors.email}
												isInvalid={touched.email && errors.email}
											/>
										</Col>
									</Form.Group>
									<Form.Group as={Row} className="mb-2">
										<Form.Label column md={3}>
											{t("Celular")}
											<span className={styles.required}>*</span>
										</Form.Label>
										<Col>
											<InputMask
												className={`form-control 
											${touched.phone && !errors.phone ? "is-valid" : ""}
											${touched.phone && errors.phone ? "is-invalid" : ""}`}
												mask="(99) 99999-9999"
												type="tel"
												name="phone"
												placeholder={t("phPhone")}
												value={values.phone}
												onChange={handleChange}
											/>
										</Col>
									</Form.Group>
									<h2 className={`${styles.title2} mt-5 mb-2`}>
										{t("Billing Details")}
									</h2>
									<Form.Group as={Row} className="mb-2">
										<Form.Label column md={3}>
											{t("CEP")}
											<span className={styles.required}>*</span>
										</Form.Label>
										<Col>
											<InputMask
												className={`form-control 
											${touched.billingZipCode && !errors.billingZipCode ? "is-valid" : ""}
											${touched.billingZipCode && errors.billingZipCode ? "is-invalid" : ""}`}
												mask="99999-999"
												placeholder="00000-000"
												type="tel"
												name="billingZipCode"
												value={values.billingZipCode}
												onChange={handleChange}
											/>
										</Col>
									</Form.Group>
									<Form.Group as={Row} className="mb-2">
										<Form.Label column md={3}>
											{t("Estado")}
											<span className={styles.required}>*</span>
										</Form.Label>
										<Col>
											<Form.Control
												type="text"
												name="billingState"
												value={values.billingState}
												onChange={handleChange}
												isValid={touched.billingState && !errors.billingState}
												isInvalid={touched.billingState && errors.billingState}
											/>
										</Col>
									</Form.Group>
									<Form.Group as={Row} className="mb-2">
										<Form.Label column md={3}>
											{t("Cidade")}
											<span className={styles.required}>*</span>
										</Form.Label>
										<Col>
											<Form.Control
												type="text"
												name="billingCity"
												value={values.billingCity}
												onChange={handleChange}
												isValid={touched.billingCity && !errors.billingCity}
												isInvalid={touched.billingCity && errors.billingCity}
											/>
										</Col>
									</Form.Group>
									<Form.Group as={Row} className="mb-2">
										<Form.Label column md={3}>
											{t("Bairro")}
											<span className={styles.required}>*</span>
										</Form.Label>
										<Col>
											<Form.Control
												type="text"
												name="billingNeighborhood"
												value={values.billingNeighborhood}
												onChange={handleChange}
												isValid={
													touched.billingNeighborhood &&
													!errors.billingNeighborhood
												}
												isInvalid={
													touched.billingNeighborhood &&
													errors.billingNeighborhood
												}
											/>
										</Col>
									</Form.Group>
									<Form.Group as={Row} className="mb-2">
										<Form.Label column md={3}>
											{t("Logradouro")}
											<span className={styles.required}>*</span>
										</Form.Label>
										<Col>
											<Form.Control
												type="text"
												name="billingStreet"
												value={values.billingStreet}
												onChange={handleChange}
												isValid={touched.billingStreet && !errors.billingStreet}
												isInvalid={
													touched.billingStreet && errors.billingStreet
												}
											/>
										</Col>
									</Form.Group>
									<Form.Group as={Row} className="mb-2">
										<Form.Label column md={3}>
											{t("Número")}
											<span className={styles.required}>*</span>
										</Form.Label>
										<Col>
											<Form.Control
												type="text"
												name="billingNumber"
												value={values.billingNumber}
												onChange={handleChange}
												isValid={touched.billingNumber && !errors.billingNumber}
												isInvalid={
													touched.billingNumber && errors.billingNumber
												}
											/>
										</Col>
									</Form.Group>
									<Form.Group as={Row} className="mb-2">
										<Form.Label column md={3}>
											{t("Complemento")}
											<span>{` (${t("common:optional")})`}</span>
										</Form.Label>
										<Col>
											<Form.Control
												type="text"
												name="Billing Details"
												value={values.billingDetails}
												onChange={handleChange}
											/>
										</Col>
									</Form.Group>
									<h2 className={`${styles.title2} mt-5 mb-2`}>
										{t("Shipping Details")}
									</h2>
									<Form.Group as={Row} className="mb-2">
										<Form.Label column md={3}>
											{t("CEP")}
											<span className={styles.required}>*</span>
										</Form.Label>
										<Col>
											<InputMask
												className={`form-control 
											${touched.shippingZipCode && !errors.shippingZipCode ? "is-valid" : ""}
											${touched.shippingZipCode && errors.shippingZipCode ? "is-invalid" : ""}`}
												mask="99999-999"
												placeholder="00000-000"
												type="tel"
												name="shippingZipCode"
												value={values.shippingZipCode}
												onChange={handleChange}
											/>
										</Col>
									</Form.Group>
									<Form.Group as={Row} className="mb-2">
										<Form.Label column md={3}>
											{t("Estado")}
											<span className={styles.required}>*</span>
										</Form.Label>
										<Col>
											<Form.Control
												type="text"
												name="shippingState"
												value={values.shippingState}
												onChange={handleChange}
												isValid={touched.shippingState && !errors.shippingState}
												isInvalid={
													touched.shippingState && errors.shippingState
												}
											/>
										</Col>
									</Form.Group>
									<Form.Group as={Row} className="mb-2">
										<Form.Label column md={3}>
											{t("Cidade")}
											<span className={styles.required}>*</span>
										</Form.Label>
										<Col>
											<Form.Control
												type="text"
												name="shippingCity"
												value={values.shippingCity}
												onChange={handleChange}
												isValid={touched.shippingCity && !errors.shippingCity}
												isInvalid={touched.shippingCity && errors.shippingCity}
											/>
										</Col>
									</Form.Group>
									<Form.Group as={Row} className="mb-2">
										<Form.Label column md={3}>
											{t("Bairro")}
											<span className={styles.required}>*</span>
										</Form.Label>
										<Col>
											<Form.Control
												type="text"
												name="shippingNeighborhood"
												value={values.shippingNeighborhood}
												onChange={handleChange}
												isValid={
													touched.shippingNeighborhood &&
													!errors.shippingNeighborhood
												}
												isInvalid={
													touched.shippingNeighborhood &&
													errors.shippingNeighborhood
												}
											/>
										</Col>
									</Form.Group>
									<Form.Group as={Row} className="mb-2">
										<Form.Label column md={3}>
											{t("Logradouro")}
											<span className={styles.required}>*</span>
										</Form.Label>
										<Col>
											<Form.Control
												type="text"
												name="shippingStreet"
												value={values.shippingStreet}
												onChange={handleChange}
												isValid={
													touched.shippingStreet && !errors.shippingStreet
												}
												isInvalid={
													touched.shippingStreet && errors.shippingStreet
												}
											/>
										</Col>
									</Form.Group>
									<Form.Group as={Row} className="mb-2">
										<Form.Label column md={3}>
											{t("Número")}
											<span className={styles.required}>*</span>
										</Form.Label>
										<Col>
											<Form.Control
												type="text"
												name="shippingNumber"
												value={values.shippingNumber}
												onChange={handleChange}
												isValid={
													touched.shippingNumber && !errors.shippingNumber
												}
												isInvalid={
													touched.shippingNumber && errors.shippingNumber
												}
											/>
										</Col>
									</Form.Group>
									<Form.Group as={Row} className="mb-2">
										<Form.Label column md={3}>
											{t("Complemento")}
											<span>{` (${t("common:optional")})`}</span>
										</Form.Label>
										<Col>
											<Form.Control
												type="text"
												name="Shipping Details"
												value={values.shippingDetails}
												onChange={handleChange}
											/>
										</Col>
									</Form.Group>
								</Col>
								<Col>
									<h2 className={`${styles.title3} mt-3`}>{t("Seu pedido")}</h2>
									<Table className={`${styles.orderTable}`}>
										<tbody>
											<tr className={`${styles.orderTableHighlight}`}>
												<td>{t("Produto")}</td>
												<td>{t("Total")}</td>
											</tr>
											<tr>
												<td>
													<p>3 MESES, PLANO DE 4GB - SIM KIT x 1</p>
												</td>
												<td>
													<p>R$ 45,00</p>
												</td>
											</tr>
											<tr>
												<td>
													<p>3 MESES, PLANO DE 10GB - SIM KIT x 1</p>
												</td>
												<td>
													<p>R$ 60,00</p>
												</td>
											</tr>
											<tr
												className={["table-secondary", styles.trSecondary].join(
													" "
												)}
											>
												<td>
													<p className="fw-bold">{t("Subtotal")}</p>
												</td>
												<td>
													<p>R$ 105,00</p>
												</td>
											</tr>
											<tr
												className={["table-secondary", styles.trSecondary].join(
													" "
												)}
											>
												<td>
													<p className="fw-bold">{t("Envio")}</p>
												</td>
												<td>
													<Form.Group>
														{[
															{
																id: 1,
																name: "Envio de 3 a 5 dias",
																price: 15.0,
															},
														].map((shipping, i) => (
															<Form.Check key={i} id={`shipping-${i}`}>
																<Form.Check.Input
																	type="radio"
																	name="shippingId"
																	value={shipping.id}
																	checked={values.shippingId === shipping.id}
																	onChange={handleChange}
																	isValid={
																		touched.shippingId &&
																		values.shippingId !== ""
																	}
																	isInvalid={
																		touched.shippingId &&
																		values.shippingId === ""
																	}
																/>
																<Form.Check.Label>{`${
																	shipping?.price > 0
																		? `$${shipping.price.toFixed(2)}`
																		: ""
																}`}</Form.Check.Label>
															</Form.Check>
														))}
													</Form.Group>
												</td>
											</tr>
											<tr className={`${styles.orderTableHighlight}`}>
												<td>
													<p className="fw-bold fs-5">{t("Total")}</p>
												</td>
												<td>
													<p className="fw-bold fs-5">R$ 120,00</p>
												</td>
											</tr>
										</tbody>
									</Table>
									<div className={styles.acceptArea}>
										<Form.Group>
											<Form.Check>
												<Form.Check.Input
													type="checkbox"
													name="acceptTerms"
													value={values.acceptTerms}
													checked={values.acceptTerms}
													onChange={handleChange}
													isInvalid={errors.acceptTerms}
												/>
												<Form.Check.Label 
													className={`${styles.cursorPointer}`}
													onClick={handleShowTerm}>
													{t("Aceito os termos de uso")}
												</Form.Check.Label>
											</Form.Check>
										</Form.Group>
										<Form.Group>
											<Form.Check>
												<Form.Check.Input
													type="checkbox"
													onChange={handleChange}
													name="acceptNewsletter"
													checked={values.acceptNewsletter}
												/>
												<Form.Check.Label>
													{t("Desejo receber informações sobre novidades e promoções")}
												</Form.Check.Label>
											</Form.Check>
										</Form.Group>
									</div>
									<Creditcard
										handleChange={handleChange}
										values={values}
										touched={touched}
										errors={errors}
										goodThruMonths={getMonths()}
										goodThruYears={getYears()}
										dueDates={getDueDates()}
										iptHolderField="cardHolderName"
										iptNumberFiled="cardNumber"
										iptGoodThruMonth="cardGoodThruMonth"
										iptGoodThruYear="cardGoodThruYear"
										iptCvvField="cardCvv"
										iptDueDate="cardDueDate"
									/>
									<Row className="mt-4">
										<Col className="d-grid gap-2">
											<Button type="submit" size="lg" className="btn-tc-blue">
												{t("Shipping Details")}{" "}
												{submiting ? (
													<FaSpinner className="animate-spin" />
												) : (
													<FaAngleDoubleRight />
												)}
											</Button>
										</Col>
									</Row>
								</Col>
							</Row>
						</Form>
					)}
				</Formik>
			</Container>
		</>
	);
}