import { Card } from "./components/card";

export const Board = () => {
  return (
    <div id="board">
      <div className="container">
        <div className="relative z-10 pt-[15rem]">
          <div className="flex flex-col text-center">
            <div className="text-[14px] uppercase text-lightmint">
              KOII NETWORK JOB BOARD
            </div>
            <div className="text-[20px] md:text-[40px] self-center pt-[1rem] text-white xl:w-[800px]">
              Koii is a blockchain project built for media, not just currency.
            </div>
          </div>
          <div className="relative flex flex-col md:flex-row pt-[2rem] md:mx-[-5rem] xl:mx-0 xl:pt-[3rem] items-center place-content-evenly">
            <Card top="more than" number="25+" bot="Remote Employees" />
            <Card top="in" number="8" bot="Countries" />
            <Card top="to support" number="20K+" bot="Finnie Users" />
          </div>
        </div>
      </div>
    </div>
  );
};
