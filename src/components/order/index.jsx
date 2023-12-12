import React, {useEffect, useState} from "react";
import { Accordion } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import OrderListItem from "./item";

let countDown;

export default function OrderList({ orders = [] }) {
	const { t } = useTranslation("orderList");

	const [state, setState] = useState({
		loading: orders.length === 0,
		loadingTimeOut: false
	});

	useEffect(() => {
		if (orders.length === 0 && countDown === undefined){
			countDown = setTimeout(() => {
				setState(prev => ({
					...prev,
					loading: false,
					loadingTimeOut: true
				}));
			}, 5000)
		}
		else if (orders.length > 0 && countDown !== undefined) {
			clearTimeout(countDown);

			setState(prev => ({
				...prev,
				loading: false,
				loadingTimeOut: false
			}));
		}
	}, [orders]);

	return (
		<>
			{!state.loadingTimeOut 
				? (<Accordion>
					{orders.map((order, i) => (
						<OrderListItem key={order.id} order={order} />
					))}
					{state.loading ? (<OrderListItem placeholder={true} />) : null }
				</Accordion>)
				: (<h2 className="text-center text-info">{t("noOrders")}</h2>)
			}
		</>
	);
}