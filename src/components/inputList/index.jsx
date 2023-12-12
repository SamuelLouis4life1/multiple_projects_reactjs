import React, {useEffect, useState} from "react";
import { Form, Button } from "react-bootstrap";
import { FaPlus, FaTrashAlt } from "react-icons/fa";

import styles from "./index.module.css";

export default function InputList({ onChange, name, values = [], defaultValue = "", ...rest}) {
	const [state, setState] = useState([]);

	useEffect(() => {
		setState(values.length > 0 ? values : [defaultValue]);
	}, [values]);

	const newEvent = (newValues) => {
		return {
			target: {
				name: name,
				value: newValues
			}
		};
	}

	const handleChange = (event) => {
		let nameSplited = event.target.name.split("-");
		let index = nameSplited[nameSplited.length - 1];
		state[index] = event.target.value;
		setState(state);
		onChange(newEvent(state));
	}

	const add = () => {
		state.push(defaultValue);
		setState(state);
		onChange(newEvent(state));
	};

	const remove = (index) => {
		state.splice(index, 1);
		setState(state);
		onChange(newEvent(state));
	};

	return (
		<table className={`${styles.mainContainer}`}>
			<tbody>
				<tr>
					<td>
						<table>
							<tbody>
							{
								state.map((value, i) => (
									<tr key={i}>
										<td>
											<Form.Control
												{...rest}
												name={`${name}-${i}`}
												value={value}
												onChange={handleChange}
											/>
										</td>
										<td className="align-middle text-center">
											{
												values.length > 1
												? (<Button variant="danger" onClick={() => remove(i)}><FaTrashAlt /></Button>)
												: null
											}
										</td>
									</tr>
								))
							}
							</tbody>
						</table>
					</td>
					<td className="align-bottom text-center">
						<Button variant="success" onClick={add}>
							<FaPlus />
						</Button>
					</td>
				</tr>
			</tbody>
		</table>
	);
}