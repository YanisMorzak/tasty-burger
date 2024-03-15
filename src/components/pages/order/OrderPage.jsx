import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import NavBar from "./NavBar/NavBar";
import Main from "./Main/Main";
import { theme } from "../../../theme";
import OrderContext from "../../../context/OrderContext";
import { EMPTY_PRODUCT } from "../../../enums/product";
import { useProduct } from "../../../hooks/useProduct";
import { useBasket } from "../../../hooks/useBasket";
import { useParams } from "react-router-dom";
import { getMenu } from "../../../api/product";
import { getLocalStorage } from "../../../utils/window";

export default function OrderPage() {
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState("add");
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const [isCollapse, setIsCollapse] = useState(false);
  const [productSelected, setproductSelected] = useState(EMPTY_PRODUCT);
  const {
    handleAddProduct,
    handleDelete,
    handleEdit,
    resetProducts,
    products,
    setProducts,
  } = useProduct();
  const { basket, setBasket, handleAddToBasket, handleDeleteBasketProduct } =
    useBasket();
  const { username } = useParams();

  const orderContextValue = {
    isModeAdmin,
    setIsModeAdmin,

    currentTabSelected,
    setCurrentTabSelected,

    isCollapse,
    setIsCollapse,

    products,

    basket,
    handleAddToBasket,
    handleDeleteBasketProduct,

    handleAddProduct,
    handleDelete,
    handleEdit,
    resetProducts,
    newProduct,
    setNewProduct,

    productSelected,
    setproductSelected,

    username,
  };

  const initialiseMenu = async () => {
    const menuReceived = await getMenu(username);
    // console.log("menuReceived", menuReceived);
    setProducts(menuReceived);
  };

  const initialiseBasket = () => {
    const basketReceived = getLocalStorage(username);
    //localStorage est synchrone donc pas besoin de await
    if (basketReceived) setBasket(basketReceived);
  };

  const initialiseUserSession = async () => {
    await initialiseMenu();
    initialiseBasket();
  };

  useEffect(() => {
    initialiseUserSession();
  }, []);

  return (
    <OrderContext.Provider value={orderContextValue}>
      <OrderPageStyled>
        <div className="container">
          <NavBar />
          <Main />
        </div>
      </OrderPageStyled>
    </OrderContext.Provider>
  );
}

const OrderPageStyled = styled.div`
  background: ${theme.colors.primary};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    background: red;
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.extraRound};
  }
`;
