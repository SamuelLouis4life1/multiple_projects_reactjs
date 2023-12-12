import styles from "./index.module.css";
import { BsFillXCircleFill } from "react-icons/bs";
import ButtonIcon from "../../elements/buttonIcon";
import { useTranslation } from "react-i18next";
import { Form, Row, Col } from "react-bootstrap";
import { formatCurrency } from "../../../utils/helpers";

function CartProductCard({ product }) {
	const { t: tt } = useTranslation("cart");
	//const t = (key) => tt(`productCard.${key}`);

	return (
		<div className={styles.wrapper}>
			<div className={styles.delete}>
				<ButtonIcon>
					<BsFillXCircleFill size="1.25rem" />
				</ButtonIcon>
			</div>
			<span className={styles.productTitle}>{("Produto")}</span>
			<div className={styles.productDesc}>
				<p>{product.name}</p>
			</div>

			<span className={styles.amountTitle}>{("Valor")}</span>
			<div className={styles.amount}>
				<p>{formatCurrency(product.price)}</p>
			</div>
			<div className={styles.options}>
				{[...Array(product.quantity).keys()].map((i) => (
					<Row key={i}>
						<Col sm={4}>
							<Form.Select size="sm">
								<option value="" disabled selected>
									{("DDD")}
								</option>
								<option>11</option>
								<option>21</option>
								<option>22</option>
								<option>24</option>
								<option>34</option>
							</Form.Select>
						</Col>
						<Col sm={7}>
							<Form.Select size="sm">
								<option value="" disabled selected>
									{("Valor")}
								</option>
								<option>{("Pós-Pago")}</option>
								<option>{("Pré-Pago")}</option>
							</Form.Select>
						</Col>
					</Row>
				))}
			</div>
		</div>
	);
}

export default CartProductCard;