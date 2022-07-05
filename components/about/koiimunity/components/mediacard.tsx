import Image from "next/image";
import { Button } from "@/components/ui/Button";
import styles from "/styles/card.module.scss";
import { useMediaQuery } from "@/components/hooks/mediaQuery";

type MediaCardProps = {
  className?: string;
  imgSrc: string;
  colour?: string;
  title?: string;
  subtitle?: string;
  alt?: string;
  width: string;
  height: string;
  buttonLabel: string;
  url: string;
};

export const MediaCard = ({
  className,
  imgSrc,
  colour,
  title,
  subtitle,
  width,
  height,
  alt,
  buttonLabel,
  url,
}: MediaCardProps) => {
  const isBreakpoint = useMediaQuery(728);
  return (
    <div
      className={`${styles.flipcard} ${className} ${width} ${height} justify-center flex flex-col items-center m-[4px] md:m-[8px]`}
    >
      <div className={` ${styles.cardinner}`}>
        <div
          className={` ${styles.cardfront}  ${colour} border-4 rounded-[20px] border-[#ECFFFE] flex justify-center iconarea ${width} ${height} ease-in-out duration-300`}
        >
          {isBreakpoint ? (
            <Image src={`${imgSrc}`} alt={alt} width={50} height={50} />
          ) : (
            <Image src={`${imgSrc}`} alt={alt} width={100} height={100} />
          )}
        </div>
        <div
          className={` ${styles.cardback} ${width} ${height} ${colour} border-4 rounded-[20px] border-[#ECFFFE] flex flex-col ease-in-out duration-300`}
        >
          <div className="m-[1rem]">
            <p className="font-semibold text-[20px] md:text-[40px]">{title}</p>
            <p className="font-normal md:pt-[1rem] text-[12px] md:text-[14px]">
              {subtitle}
            </p>
          </div>
          <div className="place-self-end mx-[0.5rem] md:m-[1rem] md:pt-[0.8rem]">
            {isBreakpoint ? (
              <Button
                asLink
                rel="noreferrer noopener"
                target="_blank"
                href={url}
                className="shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] rounded-[24px] w-[40px] text-white bg-[#373765]"
                label=""
                iconLabel={
                  <svg
                    width="14"
                    height="15"
                    viewBox="0 0 14 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.33053 1.1717C8.61539 0.870999 9.09009 0.85816 9.3908 1.14303L12.9695 4.53324C12.9699 4.53361 12.9703 4.53399 12.9707 4.53437C13.5102 5.04265 13.5098 5.86044 12.9695 6.36827L9.38866 9.73399C9.08685 10.0177 8.6122 10.003 8.32851 9.70116C8.04482 9.39935 8.05952 8.9247 8.36134 8.64101L11.7562 5.45007L8.3592 2.23198C8.0585 1.94711 8.04566 1.47241 8.33053 1.1717Z"
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.625 13.3125C0.625 8.5162 4.62894 4.6875 9.53125 4.6875H12.25C12.6642 4.6875 13 5.02329 13 5.4375C13 5.85171 12.6642 6.1875 12.25 6.1875H9.53125C5.40731 6.1875 2.125 9.3938 2.125 13.3125C2.125 13.7267 1.78921 14.0625 1.375 14.0625C0.960786 14.0625 0.625 13.7267 0.625 13.3125Z"
                      fill="white"
                    />
                  </svg>
                }
              />
            ) : (
              <Button
                asLink
                rel="noreferrer noopener"
                target="_blank"
                href={url}
                className="shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] md:py-2 md:px-2 rounded-[24px] w-[115px] text-white bg-[#373765]"
                label={buttonLabel}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
