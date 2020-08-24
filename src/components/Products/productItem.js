import React from 'react';
import { PropTypes } from 'prop-types';
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';

import styles from './products.module.css';

SwiperCore.use([Pagination]);

const ProductItem = ({
  id,
  images,
  name,
  value,
  installments,
  installmentValue,
  addProductToCart,
  isSelected,
}) => {
  return (
    <div className={styles.productsItem} data-id={id}>
      <div className={styles.productItemThumb}>
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {images.map((item) => (
            <SwiperSlide key={item}>
              <img src={item} alt={name} className={styles.productThumb} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={styles.productItemText}>
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
              images[0],
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
  images: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  installments: PropTypes.number.isRequired,
  installmentValue: PropTypes.number.isRequired,
  addProductToCart: PropTypes.func.isRequired,
};

export default ProductItem;
