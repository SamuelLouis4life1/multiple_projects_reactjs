import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
	Container,
	Row,
	Col,
	Pagination,
	Table,
	ButtonGroup,
	Button,
	DropdownButton,
	Dropdown,
} from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { FaTrash } from "react-icons/fa";

import { ProductStatusEnum } from "../../../enums/productStatusEnum";
import { useAuth } from "../../../hooks/auth";
import { USER_ROLES } from "../../../utils/userRoles";

export default function AdminProducts() {
	const { t } = useTranslation("adminProducts");
	const navigate = useNavigate();
	const { user, hasRoles } = useAuth();

	const [products, setProducts] = useState([]);

	const mock = [
		{
			id: 1,
			name: "Produto 1",
			image: "",
			status: 0,
		},
		{
			id: 2,
			name: "Produto 2",
			image: "",
			status: 1,
		},
		{
			id: 3,
			name: "Produto 3",
			image: "",
			status: 1,
		},
	];

	useEffect(() => {
		setTimeout(() => {
			setProducts(mock);
		}, 1000);
	}, []);

	const goToEdit = (productId) => {
		navigate(`${productId}`);
	};

	const deletePrd = (productId) => {
		if (window.confirm(t("messages.confirmDelete"))) {
			window.alert(t("messages.success.deleProduct"));
		}
	};

	const bindPrdAndSeller = (userId, productId) => {
		window.alert(`userId ${userId} => productId ${productId}`);
	}

	return (
		<Container>
			{
				hasRoles([USER_ROLES.ADMIN])
				? (<Row>
					<Col className="d-flex justify-content-end">
						<Link to="add" className="btn btn-primary btn-tc-blue">
							{t("labelBtnAdd")}
						</Link>
					</Col>
				</Row>)
				: null
			}
			<Row>
				<Col className="d-flex justify-content-center">
					<Pagination>
						<Pagination.First />
						<Pagination.Prev />
						<Pagination.Item active>1</Pagination.Item>
						<Pagination.Next />
						<Pagination.Last />
					</Pagination>
				</Col>
			</Row>
			<Row>
				<Col>
					<Table responsive striped>
						<thead>
							<tr>
								<th style={{ width: "20%" }}>{t("table.header.image")}</th>
								<th>{t("table.header.name")}</th>
								<th style={{ width: "15%" }}>{t("table.header.status")}</th>
								<th style={{ width: "15%" }}>{t("table.header.edit")}</th>
							</tr>
						</thead>
						<tbody>
							{products.map((product) => (
								<tr key={product.id}>
									<td>
										<svg
											className="img-fluid img-thumbnail"
											width="100"
											height="100"
											xmlns="http://www.w3.org/2000/svg"
											role="img"
											preserveAspectRatio="xMidYMid slice"
											focusable="false"
										>
											<rect width="100%" height="100%" fill="#868e96"></rect>
											<text x="20%" y="50%" fill="#dee2e6" dy=".3em">
												100x100
											</text>
										</svg>
									</td>
									<td>
										<p>{product.name}</p>
										{product.status == ProductStatusEnum.ACTIVE ? (
											<Link to={`/products/${product.id}`}>
												{t("table.body.labelSeeIt")}
											</Link>
										) : null}
									</td>
									<td>
										<p>{t(`status.${product.status}`)}</p>
									</td>
									<td>
										{
											hasRoles([USER_ROLES.ADMIN]) 
											? (<ButtonGroup>
												<Button onClick={() => goToEdit(product.id)}>
													{t("table.body.labelBtnEdit")}
												</Button>
	
												<DropdownButton 
													as={ButtonGroup} 
													id="bg-nested-dropdown"
													title="">
													<Dropdown.Item
														eventKey="1"
														onClick={() => deletePrd(product.id)}
													>
														<p className="text-danger m-0">
															<FaTrash className="me-1" />
															{t("table.body.labelBtnDelete")}
														</p>
													</Dropdown.Item>
												</DropdownButton>
											</ButtonGroup>)
											:  hasRoles([USER_ROLES.SELLER]) 
												? (<Button onClick={() => bindPrdAndSeller(user.id, product.id)}>
														{t("table.body.labelBtnBindPrdAndSeller")}
													</Button>)
												: null
										}
									</td>
								</tr>
							))}
						</tbody>
					</Table>
				</Col>
			</Row>
		</Container>
	);
}