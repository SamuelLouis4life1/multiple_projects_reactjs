import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

import OrderList from "../../../components/order/list/item";

export default function CustomerOrders() {

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
			id: 3,
			date: new Date(new Date().setDate(-2)),
			status: 1,
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
			id: 1,
			date: new Date(new Date().setDate(-10)),
			status: 2,
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

	useEffect(() => {
		setTimeout(() => {
			setOrders(mock);
		}, 1000);
	}, []);

	return (
		<Container>
			<OrderList orders={orders} />
		</Container>
	);
}