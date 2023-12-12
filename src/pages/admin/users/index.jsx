import React from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { FaBan, FaTrash } from "react-icons/fa";
import FormAddUser from "../../../components/adminUser/formAdd";
import Table from "../../../components/table";
import css from "./index.module.css";

const usersMock = [
	{
		id: 1,
		name: "ADMIN Desenvolvimento",
		date: "11/01/2020",
		email: "emais2@email.com",
		profile: "SuperAdmin",
		status: 0,
	},
	{
		id: 2,
		name: "Alessandra Sagaz",
		date: "02/02/2020",
		email: "email@email.com",
		profile: "Operador",
		status: 1,
	},
	{
		id: 3,
		name: "Alexandre Ferreira",
		date: "07/03/2020",
		email: "email@email.com",
		profile: "Admin",
		status: 1,
	},
];

const types = {
	id: "number",
	name: "string",
	date: "date",
	email: "string",
	profile: "string",
	status: "bool",
};

const actions = [
	{
		name: "Delete",
		icon: <FaTrash />,
		onClick: (item) => {
			console.log("Delete", item);
		},
	},
	{
		name: "deactivate",
		icon: <FaBan />,
		show: (item) => item.status === 1,
		onClick: (item) => {
			console.log("Deactivate", item);
		},
	},
];

export default function AdminUsers() {
	const { t } = useTranslation("adminUsers");

	const tableCols = {
		name: t("table.name"),
		date: t("table.date"),
		email: t("table.email"),
		profile: t("table.profile"),
		status: t("table.status"),
	};

	return (
		<div className={css.wrapper}>
			<Container>
				<h2>{t("title")}</h2>
			</Container>
			<div className={css.addWrapper}>
				<Container>
					<div className={css.addHeader}>
						<h3>{t("add.title")}</h3>
					</div>
				</Container>
				<div className={css.addMain}>
					<Container>
						<FormAddUser
							form={{
								name: "",
								email: "",
								profile: "",
							}}
							onSubmit={(e) => console.log(e)}
						/>
					</Container>
				</div>
			</div>
			<Container>
				<Table
					collumns={tableCols}
					items={usersMock}
					actions={actions}
					types={types}
				/>
			</Container>
		</div>
	);
}