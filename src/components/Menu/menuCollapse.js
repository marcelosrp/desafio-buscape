import React, { useContext, useState, useEffect } from 'react';
import { GlobalContext } from '../../context/GlobalStorage';
import ItemMenuCollapse from './itemMenuCollapse';
import SubTotal from './subTotal';
import styles from './menu.module.css';

const MenuCollapse = () => {
  const { productsToCart, removeProductFromCart, sumSubTotal } = useContext(
    GlobalContext,
  );

  const [parcela, setParcela] = useState(null);

  useEffect(() => {
    setParcela(sumSubTotal / 10);
  }, [sumSubTotal]);

  return (
    <section className={styles.menuCollapse}>
      {productsToCart.length === 0 ? (
        <h1>Seu carrinho está vazio</h1>
      ) : (
        <>
          {productsToCart.map((product) => {
            const {
              id,
              installmentValue,
              installments,
              mainImg,
              name,
              value,
            } = product;

            return (
              <ItemMenuCollapse
                key={name}
                id={id}
                installmentValue={installmentValue}
                installments={installments}
                mainImg={mainImg}
                name={name}
                value={value}
                removeProductFromCart={removeProductFromCart}
              />
            );
          })}

          <SubTotal parcela={parcela} sumSubTotal={sumSubTotal} />
        </>
      )}
    </section>
  );
};

export default MenuCollapse;
