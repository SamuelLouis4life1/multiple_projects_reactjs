import React, {useEffect, useState} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import {Container} from 'react-bootstrap';

import ProductForm from "./form";

export default function AdminEditProduct() {
    const params = useParams();
    const navigate = useNavigate();

    const [product, setProduct] = useState({});

    useEffect(() => {
        if(params.Id === ""){
            navigate("../");
        }

        setTimeout(() => {
            setProduct({
                id: 1,
                name: "Produto carregado do backend exemplo",
                dataPackage: "4GB",
                price: 15.00,
                details: [
                    "Conversa e texto ilimitado",
                    "Cobertura nacional",
                    "Usa 5G ou 4G LTE, o que for mais forte"
                ],
            });
        }, 1000);
    }, []);

    const handleSubmit = (values) => {
		console.log(values);
	};

	return (
		<Container>
			<ProductForm 
                handleSubmit={handleSubmit}
                product={product}/>
		</Container>
	);
}