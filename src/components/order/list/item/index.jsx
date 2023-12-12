import React from "react";
import { Placeholder, Accordion, Tabs, Tab, Button, Table } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { formatCurrency, formatDate } from "../../../../utils/helpers";
import styles from "./index.module.css";

export default function OrderListItem({ order = {}, placeholder = false }) {
	const { t, i18n } = useTranslation("orderListItem");

	const calcInvoiceSubTotal = (invoice) => {
		let subTotal = 0.0;
		invoice.items.map((item) => {
			subTotal += item.product.price * item.quantity;
		});
		return subTotal;
	};

	const calcInvoiceOpCost = (invoice) => {
		let cost = 0.0;
		invoice.items.map((item) => {
			cost += item.operationalCost;
		});
		return cost;
	};

	const calcInvoiceTotal = (invoice) => {
		let subTotal = calcInvoiceSubTotal(invoice);
		let opCost = calcInvoiceOpCost(invoice);
		let total = subTotal + opCost;
		return total;
	};

	const hasComercialInvoice = order?.status > 0;

	return (
		<Accordion.Item eventKey={order?.id ?? 0}>
			{
				!placeholder
					? (
						<>
							<Accordion.Header className="d-flex">
								<div>
									<h5>
										{t("order")} #{order.id}
									</h5>
									<p className="mb-0">{formatDate(order.date, i18n.language, { year: 'numeric', month: 'long', day: 'numeric' })}</p>
								</div>
								<div className={`${styles.pill} ${styles[`pill${order.status}`]} ms-3`}>
									{t(`statuses.${order.status}`)}
								</div>
							</Accordion.Header>
							<Accordion.Body>
								<div className="d-flex justify-content-between mb-3">
									<div className="p-2">
										<Button
											variant="light"
											onClick={() => {
												window.alert(t("reorder"));
											}}
										>
											{t("reorder")}
										</Button>
									</div>
									<div className="p-2"></div>
									<div className="p-2 d-flex" style={{ gap: "0.5rem" }}>
										{hasComercialInvoice && (
											<Link
												to={`${order.id}/invoice`}
												className="btn btn-light"
												target="_blank"
												rel="noopener noreferrer"
											>
												{t("comercialInvoice")}
											</Link>
										)}
										<Button
											variant="light"
											onClick={() => {
												window.alert(t("printOrder"));
											}}
										>
											{t("printOrder")}
										</Button>
									</div>
								</div>
								<Tabs
									defaultActiveKey="invoice"
									id="uncontrolled-tab-example"
									className="mb-3"
								>
									<Tab eventKey="invoice" title={t("invoicesTab.title")}>
										<div className="d-flex justify-content-between mb-3">
											<div className="p-2">
												<Button
													variant="light"
													onClick={() => {
														window.alert(t("invoicesTab.pritnAllInvoices"));
													}}
												>
													{t("invoicesTab.pritnAllInvoices")}
												</Button>
											</div>
											<div className="p-2"></div>
											<div className="p-2"></div>
										</div>
										{order.invoices.map((invoice) => (
											<div key={invoice.id}>
												<Table>
													<thead>
														<tr>
															<th colSpan={5}>
																<div className="d-flex mb-3">
																	<h3>{`${t("invoicesTab.invoice")} #${invoice.id
																		}`}</h3>
																	<Button
																		variant="light"
																		className="ms-3"
																		onClick={() => {
																			window.alert(t("invoicesTab.pritnInvoice"));
																		}}
																	>
																		{t("invoicesTab.pritnInvoice")}
																	</Button>
																</div>
															</th>
														</tr>
														<tr>
															<th>{t("invoicesTab.productName")}</th>
															<th>{t("invoicesTab.productCode")}</th>
															<th>{t("invoicesTab.productPrice")}</th>
															<th>{t("invoicesTab.quantity")}</th>
															<th>{t("invoicesTab.subTotal")}</th>
														</tr>
													</thead>
													<tbody>
														{invoice.items.map((invoiceItem, i) => (
															<tr key={i}>
																<td>{invoiceItem.product.name}</td>
																<td>{invoiceItem.product.id}</td>
																<td>{formatCurrency(invoiceItem.product.price)}</td>
																<td>{invoiceItem.quantity}</td>
																<td>
																	{formatCurrency(
																		invoiceItem.product.price * invoiceItem.quantity
																	)}
																</td>
															</tr>
														))}
													</tbody>
												</Table>
												<div
													className={`${styles.invoiceTotal} d-flex justify-content-end`}
												>
													<Table className="mb-0">
														<tbody>
															<tr>
																<td className="text-end">
																	{t("invoicesTab.subTotal")}
																</td>
																<td>{formatCurrency(calcInvoiceSubTotal(invoice))}</td>
															</tr>
															<tr>
																<td className="text-end">
																	{t("invoicesTab.operationalCost")}
																</td>
																<td>{formatCurrency(calcInvoiceOpCost(invoice))}</td>
															</tr>
															<tr>
																<td className="text-end fw-bold">
																	{t("invoicesTab.total")}
																</td>
																<td>{formatCurrency(calcInvoiceTotal(invoice))}</td>
															</tr>
														</tbody>
													</Table>
												</div>
											</div>
										))}
									</Tab>
									<Tab eventKey="orderPosts" title={t("orderPostsTab.title")}>
										<h1>
											{t("orderPostsTab.title")}{" "}
											{i18n.language.startsWith("pt") ? "conteudo" : "content"}
										</h1>
									</Tab>
								</Tabs>
								<Table className="mt-3">
									<thead>
										<tr>
											<th>{t("shippingAddress")}</th>
											<th>{t("shippingMethod")}</th>
											<th>{t("billAddress")}</th>
											<th>{t("paymentMethod")}</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<p>{order.shippingAddress.name}</p>
												<p>{`${order.shippingAddress.street} ${order.shippingAddress.number}`}</p>
												<p>{`${order.shippingAddress.neighborhood}, ${order.shippingAddress.city}, ${order.shippingAddress.zipCode}`}</p>
												<p>{`${order.shippingAddress.country}`}</p>
												<p>{`T: ${order.shippingAddress.phone}`}</p>
											</td>
											<td>
												<p>{`${order.shippingMethod}`}</p>
											</td>
											<td>
												<p>{order.billAddress.name}</p>
												<p>{`${order.billAddress.street} ${order.billAddress.number}`}</p>
												<p>{`${order.billAddress.neighborhood}, ${order.billAddress.city}, ${order.billAddress.zipCode}`}</p>
												<p>{`${order.billAddress.country}`}</p>
												<p>{`T: ${order.billAddress.phone}`}</p>
											</td>
											<td>
												<p>{`${order.paymentMethod}`}</p>
											</td>
										</tr>
									</tbody>
								</Table>
							</Accordion.Body>
						</>
					)
					: (
						<>
							<Placeholder as={Accordion.Header} animation="glow" className="d-flex">
								<div className="col col-md-1">
									<Placeholder xs={12} />
									<Placeholder xs={12} />
								</div>
								<Placeholder xs={3} className={`${styles.pill} ${styles[`pill${0}`]} ms-3`} />
							</Placeholder>
							<Placeholder as={Accordion.Body} animation="glow">
								<Placeholder md={12} />
								<Tabs
									defaultActiveKey="invoice"
									id="uncontrolled-tab-example"
									className="mb-3"
								>
									<Tab eventKey="purchasedItems" title={t("purchasedItemsTab.title")}>
										<Placeholder md={12} />
									</Tab>
									<Tab eventKey="invoice" title={t("invoicesTab.title")}>
										<Placeholder md={12} />
									</Tab>
									<Tab eventKey="orderPosts" title={t("orderPostsTab.title")}>
										<Placeholder md={12} />
									</Tab>
								</Tabs>
								<Placeholder as={Table} className="mt-3">
									<Placeholder md={3} />
									<Placeholder md={3} />
									<Placeholder md={3} />
									<Placeholder md={3} />
								</Placeholder>
							</Placeholder>
						</>
					)
			}
		</Accordion.Item>
	);
}