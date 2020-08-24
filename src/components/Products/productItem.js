import React from 'react';
import { PropTypes } from 'prop-types';
import styles from './products.module.css';

const ProductItem = ({
  id,
  mainImg,
  name,
  value,
  installments,
  installmentValue,
  addProductToCart,
  isSelected,
}) => {
  return (
    <div className={styles.productsItem} data-id={id}>
      <div>
        <img src={mainImg} alt={name} className={styles.productThumb} />
      </div>
      <div>
        <h1 className={styles.productTitle}>{name}</h1>
        <p className={styles.productInstallments}>
          {installments}x
          <span> R$ {parseFloat(installmentValue).toFixed(2)}</span>
        </p>
        <p className={styles.productValue}>
          ou R$ <span>${parseFloat(value).toFixed(2)}</span> à vista
        </p>
        <button
          type="button"
          className={styles.buttonAddToCart}
          disabled={isSelected.includes(id) && true}
          onClick={() =>
            addProductToCart(
              id,
              mainImg,
              name,
              installments,
              installmentValue,
              value,
            )
          }
        >
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
};

ProductItem.propTypes = {
  mainImg: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  installments: PropTypes.number.isRequired,
  installmentValue: PropTypes.number.isRequired,
  addProductToCart: PropTypes.func.isRequired,
};

export default ProductItem;
