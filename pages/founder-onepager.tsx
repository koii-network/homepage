import type { NextPage } from "next";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div>
      <div className="mt-[64px]">
        <Image
          src="/images/Koii-Onepager-Mar23.png"
          width="1920px"
          height="6000px"
        ></Image>
      </div>
    </div>
  );
};

export default Home;
