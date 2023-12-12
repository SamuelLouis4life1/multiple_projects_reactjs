import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Formik } from "formik";
import * as yup from "yup";

import InputCurrency from "../../../components/elements/inputCurrency";
import InputList from "../../../components/inputList";

export default function ProductForm({
	handleSubmit = (values) => {
		console.log(values);
	},
	product = {
		name: "",
		dataPackage: "",
		price: 0.0,
		details: [],
		isRecurrency: false,
		recurrencyDays: ""
	},
}) {
	const { t } = useTranslation("productForm");

	const schema = yup.object().shape({
		MvnoProductId: yup.string().required(),
		name: yup.string().required(),
		dataPackage: yup.string().required(),
		price: yup.number().min(0.01),
		isRecurrency: yup.boolean(),
		recurrencyDays: yup.number().integer().nullable(true),
	});

	console.log(product);

	return (
		<Formik
			enableReinitialize={true}
			validationSchema={schema}
			onSubmit={handleSubmit}
			initialValues={product}
		>
			{({ handleSubmit, handleChange, values, touched, errors }) => (
				<Form noValidate onSubmit={handleSubmit}>
					<Form.Group as={Row} className="mb-2">
						<Form.Label column md={3}>
							Mvno Id:{" "}
							<span style={{ color: "var(--tc-red)" }}>*</span>
						</Form.Label>
						<Col>
							<Form.Control
								type="text"
								name="MvnoProductId"
								defaultValue=""
								value={values.MvnoProductId}
								onChange={handleChange}
								isValid={touched.MvnoProductId && !errors.MvnoProductId}
								isInvalid={touched.MvnoProductId && errors.MvnoProductId}
							/>
						</Col>
					</Form.Group>
					<Form.Group as={Row} className="mb-2">
						<Form.Label column md={3}>
							{t("labelName")}:{" "}
							<span style={{ color: "var(--tc-red)" }}>*</span>
						</Form.Label>
						<Col>
							<Form.Control
								type="text"
								name="name"
								defaultValue=""
								value={values.name}
								onChange={handleChange}
								isValid={touched.name && !errors.name}
								isInvalid={touched.name && errors.name}
							/>
						</Col>
					</Form.Group>
					<Form.Group as={Row} className="mb-2">
						<Form.Label column md={3}>
							{t("labelDataPackage")}:{" "}
							<span style={{ color: "var(--tc-red)" }}>*</span>
						</Form.Label>
						<Col>
							<Form.Control
								type="text"
								name="dataPackage"
								value={values.dataPackage}
								onChange={handleChange}
								isValid={touched.dataPackage && !errors.dataPackage}
								isInvalid={touched.dataPackage && errors.dataPackage}
							/>
						</Col>
					</Form.Group>
					<Form.Group as={Row} className="mb-2">
						<Form.Label column md={3}>
							{t("labelPrice")}:{" "}
							<span style={{ color: "var(--tc-red)" }}>*</span>
						</Form.Label>
						<Col>
							<InputCurrency
								type="tel"
								name="price"
								value={values.price}
								onChange={handleChange}
								isValid={touched.price && !errors.price}
								isInvalid={touched.price && errors.price}
							/>
						</Col>
					</Form.Group>
					<Form.Group as={Row} className="mb-2">
						<Form.Label column md={3} />
						<Col>
						<Form.Check>
							<Form.Check.Input
										type="checkbox"
										name="isRecurrency"
										value={values.isRecurrency}
										checked={values.isRecurrency}
										onChange={handleChange}
										isInvalid={errors.isRecurrency} />
								<Form.Check.Label>{t("labelIsRecurrency")}</Form.Check.Label>
							</Form.Check>
						</Col>
					</Form.Group>
					<Form.Group as={Row} className="mb-2">
						<Form.Label column md={3}>
							{t("labelRecurrencyDays")}:{" "}
							<span style={{ color: "var(--tc-red)" }}>*</span>
						</Form.Label>
						<Col>
						<Form.Control
								type="number"
								min="1" step="1"
								name="recurrencyDays"
								value={values.recurrencyDays}
								onChange={handleChange}
								isValid={touched.recurrencyDays && !errors.recurrencyDays && values.isRecurrency}
								isInvalid={touched.recurrencyDays && errors.recurrencyDays && values.isRecurrency}
								disabled={!values.isRecurrency}
							/>

						</Col>
					</Form.Group>
					<Row className="mb-2">
						<Col md={3}>
							<Form.Label>{t("labelDetails")}:</Form.Label>
						</Col>
						<Col>
							<InputList
								type="text"
								name="details"
								values={values.details}
								onChange={handleChange}
							/>
						</Col>
					</Row>

					<Row className="mt-5">
						<Col className="d-flex justify-content-center">
						{
							product?.id === undefined
							? (<Button 
									type="submit"
									variant="primary">
								{t("labelBtnCreate")}
							</Button>)
							: (<Button 
									type="submit"
									variant="warning">
								{t("labelBtnUpdate")}
							</Button>)
						}
							
						</Col>
					</Row>
				</Form>
			)}
		</Formik>
	);
}