import Heroslide1 from "./hero1";
import Heroslide2 from "./hero2";
import Heroslide3 from "./hero3";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "/styles/carousel.module.scss";
import { Carousel } from "react-responsive-carousel";

const Hero = () => {
  return (
    <div
      className={`
      ${styles.dot}
      ${styles.selectdot}
      ${styles.controldot}
      ${styles.slide}
      `}
    >
      <Carousel showThumbs={false} showStatus={false} interval={4500} autoPlay={true}>
        <div>
          <Heroslide1 />
        </div>
        <div>
          <Heroslide2 />
        </div>
        <div>
          <Heroslide3 />
        </div>
      </Carousel>
    </div>
  );
};

export default Hero;
