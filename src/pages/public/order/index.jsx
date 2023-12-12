import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

import {formatDate} from '../../../utils/helpers';

function OrderPage(props) {
    const { id } = useParams()
    const [order, setOrder] = useState(null)
    const  { t, i18n } = useTranslation("order");
    const [formattedDate, setFormattedDate] = useState(null)

    useEffect(() => {
        setOrder({
            Number: "TC145765",
            Date: "2022-05-03T03:00:00.000Z",
            Total: "R$ 350,00",
            Payment: "Cartão de crédito **********0010",
        })
    }, [id])

    useEffect(() => {
        if (order && order.Date) {
            const options = {year: 'numeric', month: 'long', day: 'numeric'}
            setFormattedDate(formatDate(new Date(order.Date), i18n.language, options))
        }
    }, [order, t, setFormattedDate])
    

    return ( 
        <Container>
            { order && (
                <ul>
                    <li>{t("number")}: <strong>{order.Number}</strong></li>
                    <li>{t("date")}: <strong>{formattedDate}</strong></li>
                    <li>{t("total")}: <strong>{order.Total}</strong></li>
                    <li>{t("payment")}: <strong>{order.Payment}</strong></li>
                </ul>
            )}
        </Container>
     );    
}

export default OrderPage;