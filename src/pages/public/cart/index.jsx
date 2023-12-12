import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Alert from "../../../components/elements/alert";
import CartProductCard from "../../../components/cart/productCard";
import styles from "./index.module.css";
import CartSummary from "../../../components/cart/summary";
import { BsTruck } from "react-icons/bs";
import CardShadow from "../../../components/elements/cardShadow";
import { useTranslation } from "react-i18next";

export default function CartPage() {
    const { t } = useTranslation("cart");
    const [addedProduct, setAddedProduct] = useState();
    const [cart, setCart] = useState({
        zipCode: "",
        shipping: {},
        products: [],
        subTotal: 0.00,
        total: 0.00
    });

    const calcSubTotal = (produts) => {
        let subTotal = 0.00;
        produts.map(product => {
            subTotal += product.price;
        });
        return subTotal;
    }
    
    const calcTotal = (produts, shipping) => {
        return calcSubTotal(produts) + (shipping?.price ?? 0);
    }
    
    useEffect(() => {
        let products = [
            {
                id: 1,
                name: "3 MESES, PLANO DE 4GB - SIM KIT",
                price: 100.00,
                quantity: 2
            },
            {
                id: 2,
                name: "3 MESES, PLANO DE 4GB - SIM KIT",
                price: 250.00,
                quantity: 1
            }
        ];

        setCart((prev) => ({
            ...prev, 
            products: products,
            subTotal: calcSubTotal(products),
            total: calcTotal(products, prev.shipping)
        }));

        setAddedProduct("Plano Mensal")
    }, []);

    useEffect(() => {
        setCart((prev) => ({
            ...prev,
            subTotal: calcSubTotal(prev.products),
            total: calcTotal(prev.products, prev.shipping)
        }));
    }, [cart.shipping]);
    
    return (
      <Container fluid="xl">
        {addedProduct && (
          <Alert>"{addedProduct}" {t("foi adicionado ao carrinho.")}</Alert>
        )}
        <div className={styles.mainWrapper}>
            <h3 className={styles.productsTitle}>{t("title")}</h3>
            <div className={styles.summaryTitle}>
                <BsTruck size="3rem"/>
                <p>{t("OFERTA LIMITADA:\nFRETE GRÁTIS EM TODOS OS PEDIDOS.")}</p>
            </div>
            <CardShadow className={styles.productsWrapper}>
                {cart.products.map((product) => (
                <CartProductCard key={product.id} product={product} />
                ))}
            </CardShadow>
            <div className={styles.summaryWrapper}>
                <CartSummary 
                    cart={cart}
                    setCart={setCart}/>
            </div>
        </div>
      </Container>
    );
};