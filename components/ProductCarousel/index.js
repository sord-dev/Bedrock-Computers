import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import styles from "./styles.module.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export const ProductCarousel = ({ products = [] }) => {
  return (
    <div className={styles.carouselWrapper}>
      <Slider {...settings}>
        {products.map((p) => (
          <Product key={p.id} {...p} />
        ))}
      </Slider>
    </div>
  );
};

export const Product = ({ href, image, name, price }) => {
  const slug = name.toLowerCase().split(" ").join("-");

  return (
    <Link href={`/store/item/${href || slug}`}>
      <div className={styles.productItem}>
        <div className={styles.productImage}>
          <img src={image} draggable="false" />
        </div>
        <div className={styles.productInfo}>
          <p className={styles.productName}>{name}</p>
          <h5 className={styles.productPrice}>£{price}</h5>
        </div>
      </div>
    </Link>
  );
};
