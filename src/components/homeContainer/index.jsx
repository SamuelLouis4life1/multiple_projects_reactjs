import React, { useState, useRef } from "react";
import { Row, Col } from "react-bootstrap";
import ProductCard from "../productCard";
import { withTranslation } from "react-i18next";
import Card from "./Card";
import CategoryCard from "./categoryCard"
import "./cardsContainer.css";


export function ProductsContainer({ t, groupLimit = 4, categories = [] }) {
	const [selectedCategory, setSelectedCategory] = useState()
	const ref = useRef();

	const groupCategories = () => {
		let grouped = [[]];

		let count = 0;
		let i = 0;

		groupLimit = groupLimit >= 1 && groupLimit <= 12 ? groupLimit : 4;

		while (count < categories.length) {
			if (count > 0 && count % groupLimit === 0) {
				i++;
				grouped[i] = [];
			}

			grouped[i].push(categories[count]);

			count++;
		}

		return grouped;
	};

	function handleSelectCategory(category) {

		setSelectedCategory(category)
		setTimeout(
			() => {
				window.scrollTo(0, ref.current.offsetTop - 80)
			},
			100
		);
	}


	return (
		<>
			{groupCategories()?.map((group, i) => (
				<Row
					key={i}
					className={group.length < groupLimit ? "justify-content-md-center" : ""}
				>
					{group.map((category) => (
						<Col
							md={12 / groupLimit}
							key={category.id}>
							<CategoryCard
								maxMenuHeight={250}
								title={category.title}
								details={category.details}
								onSelectSlide={() => handleSelectCategory(category)}
							/>
						</Col>
					))}
				</Row>
			))}
			{
				selectedCategory && (
					<div className="container selected-category gtm_click_gamecategory" ref={ref} align="center">
						<h1 className="subtitle-category"><pre>{t(selectedCategory.title)}</pre></h1>
						{/* <p><pre>{t(selectedCategory.description)}</pre></p> */}
						<section className="container cards-subcategory" align="center">
							{
								selectedCategory.Games.map((item) => (
									<Card
										key={item.id}
										item={item}
									/>
								))
							}
						</section>
					</div >
				)
			}
		</>

	);
}
export default withTranslation()(ProductsContainer)