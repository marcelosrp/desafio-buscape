import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalStorage';
import styles from './header.module.css';

const ItensSelectedIndicator = () => {
  const { productsToCart } = useContext(GlobalContext);

  return <span className={styles.boxQtdItens}>{productsToCart.length}</span>;
};

export default ItensSelectedIndicator;
