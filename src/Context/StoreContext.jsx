import { createContext, useState } from "react";
import { food_list } from "../Assets/Assets";

export const StoreContext = createContext(null);

const getDefaultCart = () => {
  const cart = {};
  food_list.forEach((item) => {
    cart[item.id] = 0;
  });
  return cart;
};

const StoreContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prevItems) => ({
        ...prevItems,
        [itemId]: 1,
      }));
    } else {
      setCartItems((prevItems) => ({
        ...prevItems,
        [itemId]: prevItems[itemId] + 1,
      }));
    }
  };
  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => ({
      ...prevItems,
      [itemId]: prevItems[itemId] - 1,
    }));
  };
  const getTotalCartAmount = () => {
    console.log(cartItems);
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((dish) => dish.id === item);
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };
  const getCartItemsCount = () => {
    let totalCount = 0;
    for (const item in cartItems) {
      totalCount += cartItems[item];
    }
    return totalCount;
  };
  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getCartItemsCount,
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
