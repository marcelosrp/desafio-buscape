import React from 'react';
import styles from './menu.module.css';

const SubTotal = ({ parcela, sumSubTotal }) => (
  <div className={styles.subTotalWrap}>
    <h2>subtotal:</h2>
    <p>10x R$ {parseFloat(parcela).toFixed(2)}</p>
    <p>ou R$ {parseFloat(sumSubTotal).toFixed(2)}</p>
  </div>
);

export default SubTotal;
