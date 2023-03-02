import type { NextPage } from "next";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div>
      <div className="mt-[64px] text-center">
        <Image
          src="/images/Koii-Onepager-Mar23.svg"
          width="1920px"
          height="5300px"
        ></Image>
      </div>
    </div>
  );
};

export default Home;
