import Hero1 from "./hero1";
import Hero2 from "./hero2";
import Hero3 from "./hero3";
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
      <Carousel showThumbs={false} showStatus={false}>
        <div>
          <Hero1 />
        </div>
        <div>
          <Hero2 />
        </div>
        <div>
          <Hero3 />
        </div>
      </Carousel>
    </div>
  );
};

export default Hero;
