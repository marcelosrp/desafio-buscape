import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalStorage';
import ProductItem from './productItem';
import styles from './products.module.css';
import data from '../../data/products.json';

const Products = () => {
  const { addProductToCart, selectedItems } = useContext(GlobalContext);

  return (
    <section className={styles.productsWrap}>
      {data.items.map((item) => {
        const { id, name, images, price } = item.product;

        return (
          <ProductItem
            key={id}
            id={id}
            images={images}
            name={name}
            value={price.value}
            installments={price.installments}
            installmentValue={price.installmentValue}
            addProductToCart={addProductToCart}
            isSelected={selectedItems}
          />
        );
      })}
    </section>
  );
};

export default Products;
