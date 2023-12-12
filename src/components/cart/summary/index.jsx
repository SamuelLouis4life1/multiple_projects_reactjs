import CardShadow from "../../elements/cardShadow";
import Splitter from "../../elements/splitter";
import styles from "./index.module.css";
import { Row, Col } from "react-bootstrap";
import InputMask from "react-input-mask";
import { useNavigate } from "react-router-dom";
import Button from "../../elements/button";
import { useTranslation } from "react-i18next";
import { formatCurrency } from "../../../utils/helpers";

function CartSummary({ cart, setCart }) {
	const navigate = useNavigate();
	const { t: tt } = useTranslation("cart");
	//const t = (key) => tt(`summary.${key}`);

	const goToCheckout = () => {
		navigate("/checkout");
	};

	const calcShipping = () => {
		setCart((prev) => ({
			...prev,
			shipping: {
				description: "Envio de 3 a 5 dias",
				price: 4.99,
				value: 0,
			},
		}));
	};

	const handleChangeZipCode = (e) => {
		let { value } = e.target;

		setCart((prev) => ({
			...prev,
			zipCode: value
		}));
	};

	return (
		<CardShadow className={styles.wrapper}>
			<h3>{("Sumario")}</h3>
			<div className={styles.line}>
				<span>{("Subtotal")}</span>
				<span>{formatCurrency(cart.subTotal)}</span>
			</div>

			<Splitter />
			<div className={styles.shipping}>
				<span className={styles.line}>{("Transporte")}</span>
				<Row>
					<Col sm={8} style={{ alignSelf: "center" }}>
						<InputMask
							className={`form-control`}
							mask="99999-999"
							placeholder={("Cep")}
							type="tel"
							name="billingZipCode"
							value={cart.zipCode}
							onChange={handleChangeZipCode}
						/>
					</Col>
					<Col sm={4} style={{ textAlign: "right", marginRight: 0 }}>
						<Button
							variant="outlined"
							style={{ width: "100%", margin: "0.5rem 0" }}
							onClick={calcShipping}
						>
							{("CEP")}
						</Button>
					</Col>
				</Row>
				{cart.shipping?.price ? (
					<div className={styles.line}>
						<span>{cart.shipping.description}</span>
						<span>{formatCurrency(cart.shipping.price)}</span>
					</div>
				) : null}
			</div>

			<Splitter />
			<p>{("Impostos e taxas calculados no checkout.")}</p>

			<div className={styles.line}>
				<span>{("Total")}</span>
				<span>{formatCurrency(cart.total)}</span>
			</div>
			<Button onClick={goToCheckout}>{("Prossiga para o checkout")}</Button>
		</CardShadow>
	);
}

export default CartSummary;