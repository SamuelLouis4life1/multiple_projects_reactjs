import React from 'react';
import { useTranslation } from "react-i18next";
export default function AdminArea() {
    const { t } = useTranslation("adminArea");

    return (
        <div>
            <h1 className="ms-2">{t("title")}</h1>
        </div>
    )
}