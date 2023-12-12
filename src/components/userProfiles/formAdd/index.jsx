import { Formik } from "formik";
import React from "react";
import { Button, Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { FaPlus } from "react-icons/fa";
import * as yup from "yup";
import css from "./index.module.css";

export default function FormAddUserProfile({ form, onSubmit }) {
	const { t } = useTranslation("adminUserProfiles");
	const schema = yup.object().shape({
		name: yup.string().required(),
		nomarlized: yup.string().required(),
		abbreviation: yup.string().required(),
		type: yup.string().required(),
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
					<div className={css.form}>
						<Form.Group>
							<Form.Label>{t("formAdd.name")}:</Form.Label>
							<Form.Control
								type="text"
								name="name"
								value={values.name}
								onChange={handleChange}
								isValid={touched.name && !errors.name}
								isInvalid={touched.name && errors.name}
							/>
						</Form.Group>
						<Form.Group>
							<Form.Label>{t("formAdd.nomarlized")}:</Form.Label>
							<Form.Control
								type="text"
								name="nomarlized"
								value={values.nomarlized}
								onChange={handleChange}
								isValid={touched.nomarlized && !errors.nomarlized}
								isInvalid={touched.nomarlized && errors.nomarlized}
							/>
						</Form.Group>
						<Form.Group>
							<Form.Label>{t("formAdd.abbreviation")}:</Form.Label>
							<Form.Control
								type="text"
								name="abbreviation"
								value={values.abbreviation}
								onChange={handleChange}
								isValid={touched.abbreviation && !errors.abbreviation}
								isInvalid={touched.abbreviation && errors.abbreviation}
							/>
						</Form.Group>
						<Form.Group>
							<Form.Label>{t("formAdd.type")}:</Form.Label>
							<Form.Control
								type="text"
								name="type"
								value={values.type}
								onChange={handleChange}
								isValid={touched.type && !errors.type}
								isInvalid={touched.type && errors.type}
							/>
						</Form.Group>
						<div>
							<Button type="submit" variant="success" style={{ width: "100%" }}>
								<FaPlus />
							</Button>
						</div>
					</div>
				</Form>
			)}
		</Formik>
	);
}