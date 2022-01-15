import React from 'react';
import Slider from "react-slick";
import styles from './style.module.scss';

const SliderBlock = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
  return <div className={styles.WrapSliderBlock}>
    <div style={{ textAlign: "center" }}><h1 className={styles.SliderTitle}>TESTIMONIAL</h1></div>
    <Slider {...settings}>
      {data?.map((e, index) => <div key={index} className={styles.WrapSliderItem}>
        <h3 dangerouslySetInnerHTML={{ __html: e.content.rendered }}></h3>
        <div className={styles.Title} dangerouslySetInnerHTML={{ __html: '- '+e.title.rendered+' -' }}></div>
      </div>)}
    </Slider>
  </div>
}

export default SliderBlock;