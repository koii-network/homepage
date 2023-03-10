import Heroslide1 from "./hero1";
import Heroslide2 from "./hero2";
import Heroslide3 from "./hero3";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "/styles/carousel.module.scss";
import { Carousel } from "react-responsive-carousel";
import { useRef, useState } from "react";

const Hero = () => {
  const [autoPlay, setAutoPLay] = useState(false);
  const [currentCarouselItem, setCurrentCarouselItem] = useState(0);
  const currentCarouselItemRef = useRef(0);

  const onTypingCompleteFun = (index: number) => () => {
    if (currentCarouselItemRef.current === index) {
      setAutoPLay(true);
    }
  };

  const onItemChange = (index: number) => {
    setAutoPLay(false);
    currentCarouselItemRef.current = index;
    setCurrentCarouselItem(index);
  };

  return (
    <div
      className={`
      ${styles.dot}
      ${styles.selectdot}
      ${styles.controldot}
      ${styles.slide}
      `}
    >
      <Carousel
        showThumbs={false}
        showStatus={false}
        interval={2500}
        autoPlay={autoPlay}
        infiniteLoop={true}
        onChange={onItemChange}
        preventMovementUntilSwipeScrollTolerance
        swipeScrollTolerance={20}
      >
        <div>
          <Heroslide1
            onTypingComplete={onTypingCompleteFun(0)}
            activateTyping={currentCarouselItem === 0}
          />
        </div>
        <div>
          <Heroslide2
            onTypingComplete={onTypingCompleteFun(1)}
            activateTyping={currentCarouselItem === 1}
          />
        </div>
        <div>
          <Heroslide3
            onTypingComplete={onTypingCompleteFun(2)}
            activateTyping={currentCarouselItem === 2}
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Hero;
