import React from "react";
import { Container, Row, Col, Form, InputGroup } from "react-bootstrap";
import InputMask from "react-input-mask";
import { useTranslation } from "react-i18next";
import {FaLock, FaRegCreditCard, FaCcVisa, FaCcMastercard, FaCcDiscover, FaCcJcb, FaCcDinersClub, FaCcAmex} from 'react-icons/fa'

import styles from "./index.module.css";

export default function Creditcard({
    title,
	handleChange = ()=>{},
	values = [],
	touched = [],
	errors = [],
    goodThruMonths = [],
    goodThruYears = [],
    dueDates = [],
	iptHolderField = "",
	iptNumberFiled = "",
	iptGoodThruMonth = "",
    iptGoodThruYear = "",
	iptCvvField = "",
	iptDueDate = "",
}) {
	const { t } = useTranslation("creaditcard");

    const creditCardIcon = (cc) => {
        let amex = new RegExp('^3[47][0-9]{13}$');
        let visa = new RegExp('^4[0-9]{12}(?:[0-9]{3})?$');
        
        let mastercard = new RegExp('^5[1-5][0-9]{14}$');
        let mastercard2 = new RegExp('^2[2-7][0-9]{14}$');
        
        let disco1 = new RegExp('^6011[0-9]{12}[0-9]*$');
        let disco2 = new RegExp('^62[24568][0-9]{13}[0-9]*$');
        let disco3 = new RegExp('^6[45][0-9]{14}[0-9]*$');
        
        let diners = new RegExp('^3[0689][0-9]{12}[0-9]*$');
        let jcb =  new RegExp('^35[0-9]{14}[0-9]*$');
        
        
        if (visa.test(cc)) {
            return (<FaCcVisa/>);
        }
        if (amex.test(cc)) {
            return (<FaCcAmex/>);
        }
        if (mastercard.test(cc) || mastercard2.test(cc)) {
            return (<FaCcMastercard/>);
        }
        if (disco1.test(cc) || disco2.test(cc) || disco3.test(cc)) {
            return (<FaCcDiscover/>);
        }
        if (diners.test(cc)) {
            return (<FaCcDinersClub/>);
        }
        if (jcb.test(cc)) {
            return <FaCcJcb/>;
        }

        return (<FaRegCreditCard/>);
    }
    
	return (
		<Container className={`${styles.container}`}>
            <div className="d-flex flex-row mb-3">
                <h3 className={`${styles.title} me-auto`}>
                    {
                        title !== undefined ? title : t("Pagamento")
                    }
                </h3>
                <img src="/imgs/badge.png"/>
            </div>
			<Form.Group as={Row} className="mb-2">
				<Form.Label column  lg={4}>
					{t("Nome no cartão")}
					<span className={styles.required}>*</span>
				</Form.Label>
				<Col>
					<Form.Control
                        className="text-uppercase"
						type="text"
                        max={20}
                        placeholder={t("Nome no cartão")}
						name={iptHolderField}
						value={values[iptHolderField]}
						onChange={handleChange}
						isValid={touched[iptHolderField] && !errors[iptHolderField]}
						isInvalid={touched[iptHolderField] && errors[iptHolderField]}
					/>
				</Col>
			</Form.Group>
            <Form.Group as={Row} className="mb-2">
				<Form.Label column lg={4}>
					{t("Número do cartão")}
					<span className={styles.required}>*</span>
				</Form.Label>
				<Col>
                    <InputGroup>
                        <InputGroup.Text className={`${styles.inptIcon}`}>
                            {creditCardIcon(values[iptNumberFiled])}
                        </InputGroup.Text>
                        <InputMask
                            className={`form-control 
                            ${touched[iptNumberFiled] && !errors[iptNumberFiled] ? "is-valid" : ""}
                            ${touched[iptNumberFiled] && errors[iptNumberFiled] ? "is-invalid" : ""}`}
                            mask="9999-9999-9999-9999"
                            placeholder="0000-0000-0000-0000"
                            type="tel"
                            name={iptNumberFiled}
                            value={values[iptNumberFiled]}
                            onChange={handleChange}/>
                        <InputGroup.Text className={`${styles.inptIcon}`}>
                            <FaLock/>
                        </InputGroup.Text>
                    </InputGroup>
				</Col>
			</Form.Group>
            <Form.Group as={Row} className="mb-2">
				<Form.Label column lg={4}>
					{t("Validade")}
					<span className={styles.required}>*</span>
				</Form.Label>
				<Col>
                    <InputGroup>
                        <Form.Select
                            name={iptGoodThruMonth}
                            value={values[iptGoodThruMonth]}
                            onChange={handleChange}
                            isValid={touched[iptGoodThruMonth] && !errors[iptGoodThruMonth]}
                            isInvalid={touched[iptGoodThruMonth] && errors[iptGoodThruMonth]}>
                        {
                            goodThruMonths.map((month) => (
                                <option value={month} key={month}>{month.toString().padStart(2, "0")}</option>
                            ))
                        }
                        </Form.Select>
                        <Form.Select
                            name={iptGoodThruYear}
                            value={values[iptGoodThruYear]}
                            onChange={handleChange}
                            isValid={touched[iptGoodThruYear] && !errors[iptGoodThruYear]}
                            isInvalid={touched[iptGoodThruYear] && errors[iptGoodThruYear]}>
                        {
                            goodThruYears.map((year) => (
                                <option value={year} key={year}>{year}</option>
                            ))
                        }
                        </Form.Select>
                    </InputGroup>
				</Col>
			</Form.Group>
            <Form.Group as={Row} className="mb-2">
				<Form.Label column lg={4}>
					{t("Código de segurança")}
					<span className={styles.required}>*</span>
				</Form.Label>
				<Col>
                    <InputGroup>
                        <InputMask
                            className={`form-control 
                            ${touched[iptCvvField] && !errors[iptCvvField] ? "is-valid" : ""}
                            ${touched[iptCvvField] && errors[iptCvvField] ? "is-invalid" : ""}`}
                            mask="999"
                            placeholder="000"
                            type="tel"
                            name={iptCvvField}
                            value={values[iptCvvField]}
                            onChange={handleChange}/>
                        <InputGroup.Text className={`${styles.inptIcon}`}>
                            <FaLock/>
                        </InputGroup.Text>
                    </InputGroup>
				</Col>
			</Form.Group>
            <Row>
                <Col>
                    <img src="/imgs/cvv.png" alt=""/>
                </Col>
            </Row>
            {
                dueDates?.length > 0
                ? (
                    <Form.Group as={Row} className="mb-2">
                        <Form.Label column lg={4}>
                            {t("Vencimento Fatura")}
                            <span className={styles.required}>*</span>
                        </Form.Label>
                        <Col>
                        <Form.Select
                            name={iptDueDate}
                            value={values[iptDueDate]}
                            onChange={handleChange}
                            isValid={touched[iptDueDate] && !errors[iptDueDate]}
                            isInvalid={touched[iptDueDate] && errors[iptDueDate]}>
                        {
                            dueDates.map((dueDate) => (
                                <option value={dueDate} key={dueDate}>
                                {t("Todo dia ").replace("#DayNum", dueDate.toString().padStart(2, "0"))}
                                </option>
                            ))
                        }
                        </Form.Select>
                        </Col>
                    </Form.Group>
                )
                : null
            }
		</Container>
	);
}