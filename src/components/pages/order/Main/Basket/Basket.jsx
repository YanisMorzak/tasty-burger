import React, { useContext } from "react";
import { styled } from "styled-components";
import { theme } from "../../../../../theme";
import Total from "./Total";
import { formatPrice } from "../../../../../utils/maths";
import BasketBody from "./BasketBody";
import OrderContext from "../../../../../context/OrderContext";

export default function Basket() {
  const { basket, products } = useContext(OrderContext);

  if (products === undefined) return <span>Chargement...</span>;
  const sumToPay = basket.reduce((total, basketProduct) => {
    const menuProduct = products.find(
      (product) => product.id === basketProduct.id
    );
    if (isNaN(menuProduct.price)) return total;
    total += menuProduct.price * basketProduct.quantity;
    return total;
  }, 0);

  return (
    <BasketStyled className="basket">
      <Total amountToPay={formatPrice(sumToPay)} />
      <BasketBody />
      <div className="footer-basket">Codé avec ❤️ et React.JS</div>
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  background: pink;
  display: flex;
  flex-direction: column;
  overflow-y: hidden;

  .footer-basket {
    height: 70px;
    background: ${theme.colors.background_dark};
    color: ${theme.colors.white};
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Italiana", sans-serif;
    font-weight: 500;
    font-size: ${theme.fonts.size.P1};
  }
`;
