import React, { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';

export default function Products() {
    const navigate = useNavigate();

    useEffect(() => {
        navigate("/");
    });

    return (
        <div>No content!</div>
    )
}