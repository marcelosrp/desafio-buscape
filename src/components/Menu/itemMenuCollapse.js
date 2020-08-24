import React from 'react';
import { PropTypes } from 'prop-types';
import CloseIcon from '@material-ui/icons/Close';
import styles from './menu.module.css';

const ItemMenuCollapse = ({
  id,
  installmentValue,
  installments,
  mainImg,
  name,
  value,
  removeProductFromCart,
}) => {
  return (
    <div className={styles.menuCollapseItem}>
      <button
        type="button"
        className={styles.buttonRemoveProductFromCart}
        onClick={(e) => removeProductFromCart(id, value)}
      >
        <CloseIcon />
      </button>
      <div className={styles.itemThumb}>
        <img src={mainImg} alt={name} className={styles.productThumb} />
      </div>
      <div>
        <h1 className={styles.productTitle}>{name}</h1>
        <p className={styles.productPriceInfos}>
          {installments}x
          <span> R$ {parseFloat(installmentValue).toFixed(2)}</span>
        </p>
        <p className={styles.productPriceInfos}>
          ou R$ <span>${parseFloat(value).toFixed(2)}</span> à vista
        </p>
      </div>
    </div>
  );
};

ItemMenuCollapse.propTypes = {
  mainImg: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  installments: PropTypes.number.isRequired,
  installmentValue: PropTypes.number.isRequired,
  removeProductFromCart: PropTypes.func.isRequired,
};

export default ItemMenuCollapse;
