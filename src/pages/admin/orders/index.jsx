import React, { useState, useEffect } from "react";
import {
	Container,
	Row,
	Col,
	Form,
	Button,
    Pagination
} from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Formik } from "formik";
import * as yup from "yup";
import { FaSpinner, FaFilter } from "react-icons/fa";

import { usePageSidebar } from "../../../hooks/page";
import OrderList from '../../../components/order/list/item';

export default function AdminOrders() {
	usePageSidebar(true);
	const { t } = useTranslation("adminOrders");

	const mock = [
		{
			id: 5,
			date: new Date(),
			status: 0,
			invoices: [
				{
					id: 856,
					items: [
						{
							quantity: 4,
							operationalCost: 8.5,
							product: { id: 185, name: "Fone de ouvido", price: 19.9 },
						},
						{
							quantity: 4,
							operationalCost: 5.5,
							product: {
								id: 2645,
								name: "Adaptador P2 femea USB-C macho",
								price: 2.5,
							},
						},
					],
				},
			],
			shippingAddress: {
				name: "Fulano de Tal",
				country: "Brasil",
				zipCode: "24030-091",
				state: "Rio de Janeiro",
				city: "Rio de Janeiro",
				neighborhood: "Niterói",
				street: "Rua Visconde de Itaboraí",
				number: 134,
				details: "Casa",
				phone: "(21) 99999-9999",
			},
			billAddress: {
				name: "Fulano de Tal",
				country: "Brasil",
				zipCode: "24030-091",
				state: "Rio de Janeiro",
				city: "Rio de Janeiro",
				neighborhood: "Niterói",
				street: "Rua Visconde de Itaboraí",
				number: 134,
				details: "Casa",
				phone: "(21) 99999-9999",
			},
			shippingMethod:
				"Opções de envio - Arca Express - Em média 12 dia(s) úteis",
			paymentMethod: "Cartão de crédito",
		},
		{
			id: 4,
			date: new Date(new Date().setDate(-1)),
			status: 1,
			invoices: [
				{
					id: 761,
					items: [
						{
							quantity: 2,
							operationalCost: 10.97,
							product: {
								id: 256,
								name: "Adaptador P2 para USB-C",
								price: 15.5,
							},
						},
					],
				},
			],
			shippingAddress: {
				name: "Fulano de Tal",
				country: "Brasil",
				zipCode: "24030-091",
				state: "Rio de Janeiro",
				city: "Rio de Janeiro",
				neighborhood: "Niterói",
				street: "Rua Visconde de Itaboraí",
				number: 134,
				details: "Casa",
				phone: "(21) 99999-9999",
			},
			billAddress: {
				name: "Fulano de Tal",
				country: "Brasil",
				zipCode: "24030-091",
				state: "Rio de Janeiro",
				city: "Rio de Janeiro",
				neighborhood: "Niterói",
				street: "Rua Visconde de Itaboraí",
				number: 134,
				details: "Casa",
				phone: "(21) 99999-9999",
			},
			shippingMethod:
				"Opções de envio - Arca Express - Em média 12 dia(s) úteis",
			paymentMethod: "Cartão de crédito",
		},
		{
			id: 3,
			date: new Date(new Date().setDate(-2)),
			status: 2,
			invoices: [
				{
					id: 695,
					items: [
						{
							quantity: 3,
							operationalCost: 20.64,
							product: {
								id: 16476,
								name: "Carregador de celular USB",
								price: 55.9,
							},
						},
					],
				},
			],
			shippingAddress: {
				name: "Fulano de Tal",
				country: "Brasil",
				zipCode: "24030-091",
				state: "Rio de Janeiro",
				city: "Rio de Janeiro",
				neighborhood: "Niterói",
				street: "Rua Visconde de Itaboraí",
				number: 134,
				details: "Casa",
				phone: "(21) 99999-9999",
			},
			billAddress: {
				name: "Fulano de Tal",
				country: "Brasil",
				zipCode: "24030-091",
				state: "Rio de Janeiro",
				city: "Rio de Janeiro",
				neighborhood: "Niterói",
				street: "Rua Visconde de Itaboraí",
				number: 134,
				details: "Casa",
				phone: "(21) 99999-9999",
			},
			shippingMethod:
				"Opções de envio - Arca Express - Em média 12 dia(s) úteis",
			paymentMethod: "Cartão de crédito",
		},
		{
			id: 2,
			date: new Date(new Date().setDate(-5)),
			status: 3,
			invoices: [
				{
					id: 525,
					items: [
						{
							quantity: 1,
							operationalCost: 5.6,
							product: {
								id: 4678,
								name: "Adaptador P2 para plug Apple",
								price: 18.9,
							},
						},
					],
				},
			],
			shippingAddress: {
				name: "Fulano de Tal",
				country: "Brasil",
				zipCode: "24030-091",
				state: "Rio de Janeiro",
				city: "Rio de Janeiro",
				neighborhood: "Niterói",
				street: "Rua Visconde de Itaboraí",
				number: 134,
				details: "Casa",
				phone: "(21) 99999-9999",
			},
			billAddress: {
				name: "Fulano de Tal",
				country: "Brasil",
				zipCode: "24030-091",
				state: "Rio de Janeiro",
				city: "Rio de Janeiro",
				neighborhood: "Niterói",
				street: "Rua Visconde de Itaboraí",
				number: 134,
				details: "Casa",
				phone: "(21) 99999-9999",
			},
			shippingMethod:
				"Opções de envio - Arca Express - Em média 12 dia(s) úteis",
			paymentMethod: "Cartão de crédito",
		},
		{
			id: 1,
			date: new Date(new Date().setDate(-10)),
			status: 4,
			invoices: [
				{
					id: 469,
					items: [
						{
							quantity: 4,
							operationalCost: 9.89,
							product: {
								id: 185,
								name: "Plug USB-C femea plug Apple macho",
								price: 19.9,
							},
						},
					],
				},
			],
			shippingAddress: {
				name: "Fulano de Tal",
				country: "Brasil",
				zipCode: "24030-091",
				state: "Rio de Janeiro",
				city: "Rio de Janeiro",
				neighborhood: "Niterói",
				street: "Rua Visconde de Itaboraí",
				number: 134,
				details: "Casa",
				phone: "(21) 99999-9999",
			},
			billAddress: {
				name: "Fulano de Tal",
				country: "Brasil",
				zipCode: "24030-091",
				state: "Rio de Janeiro",
				city: "Rio de Janeiro",
				neighborhood: "Niterói",
				street: "Rua Visconde de Itaboraí",
				number: 134,
				details: "Casa",
				phone: "(21) 99999-9999",
			},
			shippingMethod:
				"Opções de envio - Arca Express - Em média 12 dia(s) úteis",
			paymentMethod: "Cartão de crédito",
		},
	];

	const [orders, setOrders] = useState([]);
    const [pagination, setPagination] = useState({
        itensPerPage: 5,
        totalItens: 0,
        active: 1,
        items: []
    });
	const [submiting, setSubmiting] = useState(false);

	const form = {
		orderId: "",
		customerId: "",
	};

	useEffect(() => {
		setTimeout(() => {
			setOrders(mock);

            let items = [];
            let totalPages = Math.ceil(mock.length / pagination.itensPerPage) <= 10 ? Math.ceil(mock.length / pagination.itensPerPage) : 10;
            if(totalPages > 1){
                items.push(<Pagination.First />);
                items.push(<Pagination.Prev />);
            }
            for (let page = 1; page <= totalPages; page++){
                items.push(<Pagination.Item key={page} active={page === pagination.active}>
                    {page}
                </Pagination.Item>);
            }

            if(totalPages > 1){
                items.push(<Pagination.Next  />);
                items.push(<Pagination.Last  />);
            }

            setPagination(prev => ({...prev, items: items}));
        
		}, 1000);
	}, []);

	const handleSubmitThis = (values) => {
		console.log(values);
		setSubmiting(true);

		setTimeout(() => {
			setSubmiting(false);
		}, 1000);
	};

	return (
		<Container>
			<Row>
				<Col>
					<Formik
						enableReinitialize={true}
						onSubmit={handleSubmitThis}
						initialValues={form}
					>
						{({ handleSubmit, handleChange, values, touched, errors }) => (
							<Form noValidate onSubmit={handleSubmit}>
								<Row>
									<Form.Group as={Col} className="mb-2">
										<Form.Label column md={3}>
											{t("form.orderIdLabel")}
										</Form.Label>
										<Col>
											<Form.Control
												type="text"
												name="orderId"
												value={values.orderId}
												onChange={handleChange}
												isValid={touched.orderId && !errors.orderId}
												isInvalid={touched.orderId && errors.orderId}
											/>
										</Col>
									</Form.Group>
									<Form.Group as={Col} className="mb-2">
										<Form.Label column md={3}>
											{t("form.customerIdLabel")}
										</Form.Label>
										<Col>
											<Form.Control
												type="text"
												name="customerId"
												value={values.customerId}
												onChange={handleChange}
												isValid={touched.customerId && !errors.customerId}
												isInvalid={touched.customerId && errors.customerId}
											/>
										</Col>
									</Form.Group>
								</Row>
								<Row>
									<Col className="text-center">
										<Button type="submit" className="btn-tc-blue">
											{t("form.submitLabel")}{" "}
											{submiting ? (
												<FaSpinner className="animate-spin" />
											) : (
												<FaFilter />
											)}
										</Button>
									</Col>
								</Row>
							</Form>
						)}
					</Formik>
				</Col>
			</Row>
			<Row className="mt-5">
				<Col>
					<OrderList orders={orders}/>
				</Col>
			</Row>
            <Row>
                <Col className="mt-3">
                    <div className="d-flex justify-content-center">
                        <Pagination>{pagination.items}</Pagination>    
                    </div>
                </Col>
            </Row>
		</Container>
	);
}