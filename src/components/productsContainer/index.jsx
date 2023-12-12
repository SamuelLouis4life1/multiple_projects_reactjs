import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import ProductCard from "../productCard";

export default function ProductsContainer({ groupLimit = 4, products = [] }) {
	const groupProducts = (products = []) => {
		let grouped = [[]];

		let count = 0;
		let i = 0;

		groupLimit = groupLimit >= 1 && groupLimit <= 12 ? groupLimit : 4;

		while (count < products.length) {
			if (count > 0 && count % groupLimit === 0) {
				i++;
				grouped[i] = [];
			}

			grouped[i].push(products[count]);

			count++;
		}

		return grouped;
	};
  
  	const [state] = useState({
		grouped: groupProducts(products),
	});

	return state.grouped.map((group, i) => (
		<Row
			key={i}
			className={group.length < groupLimit ? "justify-content-md-center" : ""}
		>
			{group.map((product) => (
				<Col 
					md={12 / groupLimit} 
					key={product.id}>
					<ProductCard
						id={product.id}
						limited={product.limited}
						title={product.name}
						price={product.price}
						details={product.details}
						footerText={`$${product.price * 3} por 3 meses de serviço`}
					/>
				</Col>
			))}
		</Row>
	));
}