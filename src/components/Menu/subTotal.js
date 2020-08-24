import React from 'react';
import Container from '@material-ui/core/Container';
import styles from './menu.module.css';

const SubTotal = ({ parcela, sumSubTotal }) => (
  <Container>
    <div className={styles.subTotalWrap}>
      <h2>subtotal:</h2>
      <p>10x R$ {parseFloat(parcela).toFixed(2)}</p>
      <p>ou R$ {parseFloat(sumSubTotal).toFixed(2)}</p>
    </div>
  </Container>
);

export default SubTotal;
