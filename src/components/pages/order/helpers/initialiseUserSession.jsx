import { getMenu } from "../../../../api/product";
import { getLocalStorage } from "../../../../utils/window";

const initialiseMenu = async (username, setProducts) => {
  const menuReceived = await getMenu(username);
  // console.log("menuReceived", menuReceived);
  if (menuReceived) {
    setProducts(menuReceived);
  }
};

const initialiseBasket = (username, setBasket) => {
  const basketReceived = getLocalStorage(username);
  //localStorage est synchrone donc pas besoin de await
  if (basketReceived) setBasket(basketReceived);
};

export const initialiseUserSession = async (
  username,
  setProducts,
  setBasket
) => {
  await initialiseMenu(username, setProducts);
  initialiseBasket(username, setBasket);
};
