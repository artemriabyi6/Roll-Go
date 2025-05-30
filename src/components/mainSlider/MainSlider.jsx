
import { useEffect, useState, useRef } from "react";
import { images } from "../../utils/images";
import styles from "./mainSlider.module.scss";

const slides = [
  {
    img: images.slide8,
   
    id: 1,
  },
  {
    img: images.slide9,
   
    id: 2,
  },
  {
    img: images.slide4,
   
    id: 3,
  },
  {
    img: images.slide5,
   
    id: 4,
  },
];

const MainSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);

  const goToSlide = (index) => {
    const newIndex = (index + slides.length) % slides.length;
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, [activeIndex]);

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      goToSlide(activeIndex + 1);
    }, 5000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  return (
    <div className={styles.sliderBox}>
      <div className={styles.slidesWrapper}>
        {slides.map((item, index) => (
          <div
            key={item.id}
            className={`${styles.slide} ${
              index === activeIndex ? styles.active : ""
            }`}
          >
            <img src={item.img} alt="" loading="lazy" />
            <p className={styles.slideTitle}>{item.slideTitle}</p>
            <p className={styles.slideDescription}>{item.slideDescription}</p>
          </div>
        ))}
      </div>

      <button
        className={styles.prevBtn}
        onClick={() => {
          goToSlide(activeIndex - 1);
          startAutoSlide();
        }}
      >
        <img src={images.icons.arrowPrev} alt="" />
      </button>
      <button
        className={styles.nextBtn}
        onClick={() => {
          goToSlide(activeIndex + 1);
          startAutoSlide();
        }}
      >
        <img src={images.icons.arrowNext} alt="" loading="lazy" />
      </button>

      <div className={styles.dotsWrapper}>
        {slides.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              index === activeIndex ? styles.activeDot : ""
            }`}
            onClick={() => {
              goToSlide(index);
              startAutoSlide();
            }}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default MainSlider;
