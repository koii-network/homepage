import styles from "/styles/home.module.css";
import { useMediaQuery } from "@/components/hooks/mediaQuery";

export const Timeline = () => {
  const isBreakpoint = useMediaQuery(768);
  return (
    <div className={`${styles.Timeline} pb-20 relative`}>
      {isBreakpoint ? (
        <div className="flex justify-center items-start pl-[5rem]">
          <svg
            width="43"
            height="648"
            viewBox="0 0 43 648"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.2929 647.319C19.6834 647.71 20.3166 647.71 20.7071 647.319L27.0711 640.955C27.4616 640.565 27.4616 639.932 27.0711 639.541C26.6805 639.151 26.0474 639.151 25.6569 639.541L20 645.198L14.3431 639.541C13.9526 639.151 13.3195 639.151 12.9289 639.541C12.5384 639.932 12.5384 640.565 12.9289 640.955L19.2929 647.319ZM21 646.612L21 0.612305L19 0.612305L19 646.612L21 646.612Z"
              fill="#8BE9EF"
            />
            <path
              d="M17.0537 63.7634C18.2031 64.5675 19.1794 65.6362 19.9013 66.8997C22.2882 70.8507 23.0649 75.6644 22.0556 80.1827C20.9444 78.9184 19.3917 78.2332 17.8062 78.3076C17.636 80.4909 18.2925 82.6749 19.6181 84.362C19.7113 84.4801 19.8045 84.5982 19.9 84.7098C17.4247 89.1657 14.5547 97.0427 20.5665 99.7044C25.4948 101.887 30.4338 94.4369 32.2785 90.514C32.5077 90.0236 32.7195 89.5306 32.9118 89.0305C33.9562 88.7351 34.9114 88.1687 35.6953 87.3751C37.1893 85.9304 38.0692 83.8783 38.139 81.6882C36.841 81.3851 35.4917 81.6293 34.3725 82.3643C34.6313 77.9389 33.5648 73.5092 31.3284 69.7411C28.3878 64.3669 23.1213 60.9675 17.4156 60.7675C16.9749 59.7929 16.3364 58.938 15.5555 58.2631C13.9502 56.8204 11.9734 55.9565 9.91503 55.7942C9.70402 57.1875 10.4599 58.9151 12.1013 60.4002C12.4582 60.7237 12.8334 61.017 13.2313 61.2782C12.7722 61.2668 12.3144 61.2927 11.8623 61.3536C9.77251 61.6429 8.31781 62.6646 7.84439 63.9706C9.67112 65.056 11.7552 65.4921 13.7921 65.2168C14.9936 65.1067 16.1331 64.5994 17.0537 63.7634ZM23.0369 67.7814C26.2829 69.8087 28.526 73.3147 29.1206 77.3023C29.9669 82.0456 28.5253 86.8745 25.3053 90.0991C27.4601 86.6187 28.4092 82.3983 27.9868 78.179C27.4856 74.2178 25.7367 70.5448 23.0369 67.7814Z"
              fill="#F2AE69"
            />
          </svg>
        </div>
      ) : (
        <div className="flex justify-center items-start">
          <svg
            viewBox="0 0 1006 907"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[75%]"
          >
            <path
              d="M860.595 656.985C807.726 563.228 699.918 518.834 618.758 498.135C577.006 487.458 533.762 480.123 491.944 473.025C437.805 463.833 381.827 454.303 328.651 437.524C276.765 421.144 152.476 370.792 119.14 257.617C99.9997 192.531 114.425 114.371 162.018 25.3087C166.503 16.9446 170.507 9.93605 175.25 1.62477L173.437 1.24978C168.615 9.68736 164.747 15.8228 160.186 24.3428C112.304 113.878 97.852 192.593 117.16 258.234C150.742 372.36 275.806 423.034 328.015 439.522C381.315 456.35 437.369 465.888 491.567 475.075C533.356 482.175 576.54 489.516 618.214 500.154C698.978 520.768 806.198 564.942 858.753 657.993C877.455 691.182 888.194 728.979 898.556 765.521C902.871 780.749 907.275 796.163 912.291 811.376L913.879 809.492C909.066 794.726 904.793 779.808 900.618 764.973C890.199 728.3 879.449 690.385 860.595 656.985Z"
              fill="#5ED9D1"
            />
            <path
              d="M150.436 26.6317C151.738 27.6564 152.817 28.9814 153.584 30.519C156.135 35.3359 156.729 41.0625 155.238 46.3218C154.012 44.7572 152.228 43.8459 150.354 43.8279C150.007 46.3904 150.636 49.0089 152.086 51.0861C152.188 51.2316 152.29 51.3771 152.395 51.515C149.18 56.6029 145.271 65.6977 152.181 69.2363C157.846 72.1378 164.165 63.6843 166.601 59.1827C166.904 58.6198 167.187 58.0527 167.447 57.476C168.697 57.1974 169.861 56.5933 170.838 55.7101C172.696 54.1065 173.87 51.746 174.098 49.1687C172.588 48.7249 170.981 48.9228 169.613 49.7147C170.213 44.5149 169.251 39.2217 166.866 34.6305C163.757 28.0988 157.776 23.7403 151.062 23.1241C150.608 21.9458 149.912 20.8953 149.037 20.0477C147.24 18.2399 144.967 17.0896 142.552 16.761C142.21 18.3896 142.986 20.4766 144.822 22.3367C145.221 22.7419 145.644 23.1128 146.096 23.4472C145.555 23.4032 145.014 23.4031 144.477 23.4448C141.994 23.6465 140.211 24.754 139.566 26.2621C141.647 27.6634 144.075 28.3165 146.494 28.1278C147.918 28.078 149.295 27.556 150.436 26.6317ZM157.222 31.7674C160.913 34.3738 163.324 38.6565 163.759 43.3971C164.44 49.0453 162.419 54.6419 158.408 58.2287C161.18 54.2693 162.581 49.3573 162.364 44.355C162.037 39.6517 160.22 35.2051 157.222 31.7674Z"
              fill="#F2AE69"
            />
          </svg>
        </div>
      )}

      <div className="2022list grid absolute text-center grid-cols-1 gap-y-4 md:gap-y-10 2xl:gap-y-16 2xl:left-[4rem] text-base md:text-xl w-fit text-white py-12 z-20 top-0 max-w-[220px]">
        <div className="list-title text-right relative md:left-[3rem]">
          <span className="text-3xl font-semibold text-mint">2022</span>
          <br />
          <span className="text-base">Click for details</span>
        </div>
        <div className="relative text-right md:left-[3rem]">
          <span className="hover:text-fish-yellow">K2 Settlement Layer</span>
          <br />
          <span className="text-mint">Public Beta</span>
        </div>
        <div className="relative text-right md:left-[3rem]">
          <span className="hover:text-fish-yellow">Attention Tracking</span>
          <br />
          <span className="text-mint">For any website</span>
        </div>
        <div className="relative text-right md:left-[5rem]">
          <span className="hover:text-fish-yellow">Finnie Mobile</span>
          <br />
        </div>
        <div className="relative text-right md:top-[2rem] md:left-[12rem]">
          <span className="hover:text-fish-yellow">Content Collectives</span>
          <br />
        </div>
        <div className="relative text-right md:top-[2rem] md:left-[25rem]">
          <span className="hover:text-fish-yellow"> Tasks & Task Nodes</span>
          <br />
          <span className="text-mint">Public Beta</span>
        </div>
        <div className="relative text-right md:left-[43rem]">
          <span className="hover:text-fish-yellow">
            Finnie Browser Expansion
          </span>
        </div>
        <div className="relative text-right md:left-[50rem] 2xl:left-[65rem]">
          <span className="hover:text-fish-yellow">
            Koii-X Template Library Expansion
          </span>
          <br />
        </div>
        <div className="relative text-right md:left-[54rem] 2xl:left-[70rem]">
          <span className="hover:text-fish-yellow">Public Mainnet</span>
          <br />
        </div>
        <div className="relative text-right md:left-[55rem] 2xl:left-[75rem]">
          <span className="hover:text-fish-yellow">Token Launch</span>
          <br />
          <span className="text-mint">Public Sale</span>
        </div>
      </div>
    </div>
  );
};
