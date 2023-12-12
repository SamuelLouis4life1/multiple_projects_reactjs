import { Formik } from "formik";
import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import * as yup from "yup";
import RequiredSpan from "../../elements/requiredSpan";

const profilesMock = [
	{
		id: "1",
		name: "Operador",
	},
	{
		id: "2",
		name: "Admin",
	},
	{
		id: "3",
		name: "SuperAdmin",
	},
];

export default function FormAddUser({ form, onSubmit }) {
	const { t } = useTranslation("adminUsers");
	const schema = yup.object().shape({
		name: yup.string().required(),
		email: yup.string().email().required(),
		profile: yup
			.string()
			.required()
			.oneOf(profilesMock.map(({ id }) => id)),
	});

	return (
		<Formik
			enableReinitialize={true}
			validationSchema={schema}
			onSubmit={onSubmit}
			initialValues={form}
		>
			{({ handleSubmit, handleChange, values, touched, errors }) => (
				<Form noValidate onSubmit={handleSubmit}>
					<Row className="mb-3">
						<Col md={7}>
							<Form.Group>
								<Form.Label>
									{t("formAdd.name")} <RequiredSpan />
								</Form.Label>
								<Form.Control
									type="text"
									name="name"
									value={values.name}
									onChange={handleChange}
									isValid={touched.name && !errors.name}
									isInvalid={touched.name && errors.name}
								/>
							</Form.Group>
						</Col>
						<Col md={5}>
							<Form.Group>
								<Form.Label>
									{t("formAdd.email")} <RequiredSpan />
								</Form.Label>
								<Form.Control
									type="email"
									name="email"
									value={values.email}
									onChange={handleChange}
									isValid={touched.email && !errors.email}
									isInvalid={touched.email && errors.email}
								/>
							</Form.Group>
						</Col>
					</Row>
					<Row className="mb-3">
						<Col md={7}>
							<Form.Group>
								<Form.Label>
									{t("formAdd.profile")} <RequiredSpan />
								</Form.Label>
								<Form.Select
									name="profile"
									value={values.profile}
									onChange={(e) => {
										console.log(e.target.value);
										console.log(errors);
										handleChange(e);
									}}
									isInvalid={errors.profile}
								>
									<option value={""}>{t("formAdd.profilePlaceholder")}</option>
									{profilesMock.map(({ id, name }) => (
										<option key={id} value={id}>
											{name}
										</option>
									))}
								</Form.Select>
							</Form.Group>
						</Col>
					</Row>
					<Row className="mb-3">
						<div>
							<Button type="submit" variant="success">
								{t("formAdd.submit")}
							</Button>
						</div>
					</Row>
				</Form>
			)}
		</Formik>
	);
}