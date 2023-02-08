type CardProps = {
  top?: string;
  number: string;
  bot: string;
};

export const Card = ({ top, number, bot }: CardProps) => {
  return (
    <div className="card my-[0.5rem] md:my-[1rem] xl:my-[2rem] flex flex-col items-center bg-white place-content-evenly w-[200px] xl:w-[290px] h-[160px] md:h-[208px] drop-shadow-lg">
      <div className="text-[#BCB8D0] top text-[16px] uppercase font-semibold">
        {top}
      </div>
      <div className="text-koiiblue number text-[48px] font-semibold">
        {number}
      </div>
      <div className="bot text-[16px]">{bot}</div>
    </div>
  );
};
