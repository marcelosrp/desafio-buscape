import React, { useState, createContext, useEffect } from 'react';

export const GlobalContext = createContext();

export const GlobalStorage = ({ children }) => {
  const [productsToCart, setProductsToCart] = useState([]);
  const [subTotal, setSubTotal] = useState([]);
  const [sumSubTotal, setsumSubTotal] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);
  const [toast, setToast] = useState({});

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

    setToast({
      open: true,
      message: 'Produto adicionado ao carrinho com sucesso',
      severity: 'success',
    });
  };

  const removeProductFromCart = (id, value) => {
    setProductsToCart(productsToCart.filter((item) => item.id !== id));
    setSubTotal(subTotal.filter((item) => item !== value));
    setSelectedItems(selectedItems.filter((item) => item !== id));

    setToast({
      open: true,
      message: 'Produto removido do carrinho com sucesso',
      severity: 'warning',
    });
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

  const handleCloseToast = (e, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setToast({ open: false });
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
        toast,
        handleCloseToast,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
