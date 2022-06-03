import styles from "/styles/home.module.css";

export const Timeline = () => {
  return (
    <div className={`${styles.Timeline} h-[900px] md:h-[1485px] relative`}>
      <div className="flex justify-center items-start">
      <svg viewBox="0 0 1006 907" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[75%]">
      <path d="M860.595 656.985C807.726 563.228 699.918 518.834 618.758 498.135C577.006 487.458 533.762 480.123 491.944 473.025C437.805 463.833 381.827 454.303 328.651 437.524C276.765 421.144 152.476 370.792 119.14 257.617C99.9997 192.531 114.425 114.371 162.018 25.3087C166.503 16.9446 170.507 9.93605 175.25 1.62477L173.437 1.24978C168.615 9.68736 164.747 15.8228 160.186 24.3428C112.304 113.878 97.852 192.593 117.16 258.234C150.742 372.36 275.806 423.034 328.015 439.522C381.315 456.35 437.369 465.888 491.567 475.075C533.356 482.175 576.54 489.516 618.214 500.154C698.978 520.768 806.198 564.942 858.753 657.993C877.455 691.182 888.194 728.979 898.556 765.521C902.871 780.749 907.275 796.163 912.291 811.376L913.879 809.492C909.066 794.726 904.793 779.808 900.618 764.973C890.199 728.3 879.449 690.385 860.595 656.985Z" fill="#5ED9D1"/>
      <path d="M150.436 26.6317C151.738 27.6564 152.817 28.9814 153.584 30.519C156.135 35.3359 156.729 41.0625 155.238 46.3218C154.012 44.7572 152.228 43.8459 150.354 43.8279C150.007 46.3904 150.636 49.0089 152.086 51.0861C152.188 51.2316 152.29 51.3771 152.395 51.515C149.18 56.6029 145.271 65.6977 152.181 69.2363C157.846 72.1378 164.165 63.6843 166.601 59.1827C166.904 58.6198 167.187 58.0527 167.447 57.476C168.697 57.1974 169.861 56.5933 170.838 55.7101C172.696 54.1065 173.87 51.746 174.098 49.1687C172.588 48.7249 170.981 48.9228 169.613 49.7147C170.213 44.5149 169.251 39.2217 166.866 34.6305C163.757 28.0988 157.776 23.7403 151.062 23.1241C150.608 21.9458 149.912 20.8953 149.037 20.0477C147.24 18.2399 144.967 17.0896 142.552 16.761C142.21 18.3896 142.986 20.4766 144.822 22.3367C145.221 22.7419 145.644 23.1128 146.096 23.4472C145.555 23.4032 145.014 23.4031 144.477 23.4448C141.994 23.6465 140.211 24.754 139.566 26.2621C141.647 27.6634 144.075 28.3165 146.494 28.1278C147.918 28.078 149.295 27.556 150.436 26.6317ZM157.222 31.7674C160.913 34.3738 163.324 38.6565 163.759 43.3971C164.44 49.0453 162.419 54.6419 158.408 58.2287C161.18 54.2693 162.581 49.3573 162.364 44.355C162.037 39.6517 160.22 35.2051 157.222 31.7674Z" fill="#F2AE69"/>
      </svg>
      </div>
      <div className="2022list grid absolute text-center grid-cols-1 md:gap-y-10 2xl:gap-y-16 2xl: left-[4rem] text-xl w-fit text-white py-12 z-20 top-0 max-w-[220px]">
        <div className="list-title text-right relative left-[3rem]">
          <span className="text-3xl font-semibold text-mint">2022</span>
          <br />
          <span className="text-base">Click for details</span>
        </div>
        <div className="relative text-right left-[3rem]">       
         <span className="hover:text-fish-yellow">K2 Settlement Layer</span><br/>
         <span className="text-mint">Public Beta</span>
        </div>
        <div className="relative text-right left-[3rem]">       
         <span className="hover:text-fish-yellow">Attention Tracking</span><br/>
         <span className="text-mint">For any website</span>
        </div>
        <div className="relative text-right left-[5rem]">       
         <span className="hover:text-fish-yellow">Finnie Mobile</span><br/>
        </div>
        <div className="relative text-right top-[2rem] left-[12rem]">       
         <span className="hover:text-fish-yellow">Content Collectives</span><br/>
        </div>
        <div className="relative text-right top-[2rem] left-[25rem]">       
         <span className="hover:text-fish-yellow"> Tasks & Task Nodes</span><br/>
         <span className="text-mint">Public Beta</span>
        </div>
        <div className="relative text-right left-[43rem]">       
         <span className="hover:text-fish-yellow">Finnie Browser Expansion</span>
        </div>
        <div className="relative text-right left-[50rem] 2xl:left-[65rem]">       
         <span className="hover:text-fish-yellow">Koii-X Template Library Expansion</span><br/>
        </div>
        <div className="relative text-right left-[54rem] 2xl:left-[70rem]">       
         <span className="hover:text-fish-yellow">Public Mainnet</span><br/>
        </div>
        <div className="relative text-right md:left-[55rem] 2xl:left-[75rem]">       
         <span className="hover:text-fish-yellow">Token Launch</span><br/>
         <span className="text-mint">Public Sale</span>
        </div>
      </div>
    </div>
  );
};
