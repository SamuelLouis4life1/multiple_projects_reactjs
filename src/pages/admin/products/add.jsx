import React from "react";
import { Container } from "react-bootstrap";

import ProductForm from "./form";

export default function AdminAddProduct() {
	const handleSubmit = (values) => {
		console.log(values);
	};

	return (
		<Container>
			<h3>Adicionar Produto</h3>
			<ProductForm handleSubmit={handleSubmit} />
		</Container>
	);
}