import React from "react";
import { useTranslation } from "react-i18next";
import { FaTrash } from "react-icons/fa";
import ButtonIcon from "../../elements/buttonIcon";
import css from "./index.module.css";

export default function TableUserProfile({ profiles }) {
	const { t } = useTranslation("userProfiles");
	return (
		<table className={css.table}>
			<thead>
				<tr>
					<th>{t("table.name")}</th>
					<th>{t("table.nomarlized")}</th>
					<th>{t("table.abbreviation")}</th>
					<th>{t("table.type")}</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				{profiles?.map(({ id, name, normalized, abbreviation, type }) => (
					<tr key={id}>
						<td>{name}</td>
						<td>{normalized}</td>
						<td>{abbreviation}</td>
						<td>{type}</td>
						<td>
                            <ButtonIcon>
                                <FaTrash />
                            </ButtonIcon>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}