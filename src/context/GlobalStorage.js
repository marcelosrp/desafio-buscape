import React, { useState, createContext, useEffect } from 'react';

export const GlobalContext = createContext();

export const GlobalStorage = ({ children }) => {
  const [productsToCart, setProductsToCart] = useState([]);
  const [subTotal, setSubTotal] = useState([]);
  const [sumSubTotal, setsumSubTotal] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);

  const addProductToCart = (
    id,
    mainImg,
    name,
    installments,
    installmentValue,
    value,
  ) => {
    const obj = {
      id,
      mainImg,
      name,
      installments,
      installmentValue,
      value,
    };

    setProductsToCart([...productsToCart, obj]);
    setSubTotal([...subTotal, value]);
    selectingProductItem(id);
  };

  const removeProductFromCart = (id, value) => {
    setProductsToCart(productsToCart.filter((item) => item.id !== id));
    setSubTotal(subTotal.filter((item) => item !== value));
  };

  const selectingProductItem = (id) => {
    const alreadySelected = selectedItems.findIndex((item) => item === id);

    if (alreadySelected >= 0) {
      const filteredItems = selectedItems.filter((item) => item !== id);
      setSelectedItems(filteredItems);
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  useEffect(() => {
    const sum = subTotal.reduce((a, b) => a + b, 0);
    setsumSubTotal(sum);
  }, [subTotal]);

  return (
    <GlobalContext.Provider
      value={{
        addProductToCart,
        productsToCart,
        removeProductFromCart,
        sumSubTotal,
        selectedItems,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
