type CardProps = {
  top?: string;
  number: string;
  bot: string;
};

export const Card = ({ top, number, bot }: CardProps) => {
  return (
    <div className="card my-[2rem] flex flex-col items-center bg-white place-content-evenly w-[290px] h-[208px] rounded-2xl">
      <div className="top text-[16px] uppercase font-semibold">{top}</div>
      <div className="number text-[48px] font-semibold">{number}</div>
      <div className="bot text-[16px]">{bot}</div>
    </div>
  );
};
