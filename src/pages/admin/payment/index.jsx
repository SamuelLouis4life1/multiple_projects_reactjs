import React, { useEffect, useState } from "react";
import {
	Button,
	Container,
	Dropdown,
	FormControl,
	InputGroup,
} from "react-bootstrap";
import { FaEllipsisV, FaFilter, FaPlus } from "react-icons/fa";
import { GiPlug } from "react-icons/gi";
import { Tooltip } from "react-tippy";
import Spinner from "../../../components/elements/spinner";
import css from "./index.module.css";
import { useTranslation } from "react-i18next";

const PaymentsMock = [
	{
		id: 1,
		name: "American Express",
		icon: "/imgs/payment/amex.svg",
		status: 0,
		provider: "Vindi",
		type: "À vista",
	},
	{
		id: 2,
		name: "Mastercard",
		icon: "/imgs/payment/mastercard.svg",
		status: 1,
		provider: "Vindi",
		type: "À vista",
	},
	{
		id: 3,
		name: "Visa",
		icon: "/imgs/payment/visa.svg",
		status: 1,
		provider: "Vindi",
		type: "À vista",
	},
];



export default function AdminPaymentMethodsPage() {
	const [paymentMethods, setPaymentMethods] = useState([]);
	const [filterName, setFilterName] = useState();
	const [filterStatus, setFilterStatus] = useState();
	const [loading, setLoading] = useState(true);

    const { t } = useTranslation("adminPayment");

	useEffect(() => {
		setTimeout(() => {
			setPaymentMethods(PaymentsMock);
			setLoading(false);
		}, 1000);
	}, []);

    const STATUS = [
		<span style={{ color: "red" }}>{t("status.inactive")}</span>,
        <span style={{ color: "green" }}>{t("status.active")}</span>,
    ];

	const paymentsToShow = paymentMethods
		.filter((payment) => !filterName || payment.name.includes(filterName))
		.filter(
			(payment) => !filterStatus || filterStatus.includes(payment.status)
		);

	return (
		<div className={css.wrapper}>
			<Container>
				<h2>{t("title")}</h2>
				<div className="d-flex justify-content-end align-items-center">
					<Tooltip
						title="Adicionar nova condição de pagamento."
						position="left"
						trigger="mouseenter"
						html={
							<Button variant="success" size="sm">
								{t("addPaymentMethod")}
							</Button>
						}
					>
						<Button className={css.btnAdd} variant="success">
							<FaPlus />
						</Button>
					</Tooltip>
				</div>

				<div className={css.filterArea}>
					<div style={{ width: "90%" }}>
						<InputGroup className="mb-3">
							<Dropdown>
								<Dropdown.Toggle variant="outline-secondary">
									<FaFilter />
								</Dropdown.Toggle>
								<Dropdown.Menu>
									<Dropdown.Item>Filter 1</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
							<FormControl
								aria-label="Text input with dropdown button"
								onChange={(e) => setFilterName(e.target.value)}
							/>
						</InputGroup>
					</div>
				</div>
			</Container>
			{loading ? (
				<div className="d-flex justify-content-center">
					<Spinner
						size="3rem"
						style={{
							color: "var(--tcColor1)",
						}}
					/>
				</div>
			) : (
				paymentsToShow.map((paymentMethod) => (
					<div key={paymentMethod.id} className={css.paymentWrapper}>
						<div className={css.paymentHeader}>
							<Container className="d-flex">
								<img
									className={css.paymentLogo}
									src={paymentMethod.icon}
									alt={paymentMethod.name}
								/>
								<h3 style={{ marginLeft: "1.5rem" }}>{paymentMethod.name}</h3>
							</Container>
						</div>
						<Container>
							<div className={css.paymentContent}>
								<div>
									<div className={css.paymentProvider}>
										<GiPlug /> {paymentMethod.provider}
									</div>
									<div className={css.paymentStatus}>
										{STATUS[paymentMethod.status]}
										<Dropdown>
											<Dropdown.Toggle as={CustomToggle}>
												<FaEllipsisV />
											</Dropdown.Toggle>

											<Dropdown.Menu>
												<Dropdown.Item href={`edit/${paymentMethod.id}`}>
													Editar
												</Dropdown.Item>
												{paymentMethod.status === 0 ? (
													<Dropdown.Item>{t("activate")}</Dropdown.Item>
												) : (
													<Dropdown.Item>{t("deactivate")}</Dropdown.Item>
												)}
											</Dropdown.Menu>
										</Dropdown>
									</div>
								</div>
								<div>{paymentMethod.name}</div>
								<div style={{ color: "purple" }}>{paymentMethod.type}</div>
							</div>
						</Container>
					</div>
				))
			)}
		</div>
	);
}

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
	<button
		ref={ref}
		onClick={(e) => {
			e.preventDefault();
			onClick(e);
		}}
		style={{ border: "none", background: "none" }}
	>
		{children}
	</button>
));