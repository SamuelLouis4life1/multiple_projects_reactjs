import React from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import FormAddUserProfile from "../../../../components/userProfiles/formAdd";
import css from "./index.module.css";
import TableUserProfile from "../../../../components/userProfiles/table";

const profilesMock = [
    {
        id:1,
        name: "Admin",
        normalized: "ADMIN",
        abbreviation: "ADM",
        type: "Global-Security",
    },
    {
        id:2,
        name: "Operador",
        normalized: "OPERADOR",
        abbreviation: "OPE",
        type: "Global-Security",
    },
]


export default function AdminUserProfiles() {
	const { t } = useTranslation("adminUserProfiles");

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
                    <FormAddUserProfile form={{
                        name:"",
                        nomarlized: "",
                        abbreviation: "",
                        type: ""
                    }} onSubmit={(e) => console.log(e)}/>
                </Container>
                </div>
            </div>
            <Container>
                <TableUserProfile profiles={profilesMock} />
            </Container>
		</div>
	);
}