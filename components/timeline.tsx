import { useEffect, useState, Fragment } from "react";
import { isMobile as rddIsMobile } from "react-device-detect";
import { styled } from "@mui/material/styles";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import styles from "/styles/home.module.css";
import { useMediaQuery } from "@/components/hooks/mediaQuery";
import { HubspotFormLinks } from "config/links-config";

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} enterTouchDelay={0} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "rgba(190, 240, 237, 0.85)",
    color: "#171753",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    lineHeight: theme.typography.pxToRem(18),
    border: "1px solid #FFFFFF",
    borderRadius: theme.typography.pxToRem(20),
    textAlign: "left",
    padding: "0.5rem 2rem",
    fontFamily: "Sora",
  },
}));

export const Timeline = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(rddIsMobile);
  }, []);

  const isBreakpoint = useMediaQuery(728);
  return (
    <div className={`${styles.Timeline} pb-20 relative h-[820px]`}>
      <div className="container">
        {/* <div className="lg:bottom-[20rem] absolute w-[2500px] h-[1096px] ml-[auto] mr-[auto] left-0 lg:left-[-38rem] right-0 text-center z-10">
      <Image
      src = {seabed}
      layout="fill"
      objectFit="cover"
      />
      </div> */}

        {isBreakpoint ? (
          <div className="flex justify-center items-start pl-[12rem] h-full z-20 relative">
            <svg
              className="h-full w-fit"
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
          <div className="md:px-[0] lg:px-[17%] md:h-[685px] lg:h-full z-20 relative">
            <svg
              // width="1005"
              // height="907"
              viewBox="0 0 1006 907"
              preserveAspectRatio="none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <path
                d="M914.214 812.882L905.968 809.799L906.997 807.051L912.493 809.107L914.548 803.611L917.297 804.637L914.214 812.882Z"
                fill="#5ED9D1"
              />
              <path
                d="M859.958 656.409C807.089 562.652 699.281 518.258 618.122 497.559C576.37 486.882 533.126 479.547 491.307 472.449C437.168 463.257 381.191 453.727 328.014 436.948C276.128 420.568 151.839 370.216 118.503 257.041C99.363 191.955 113.788 113.795 161.382 24.7328C165.866 16.3687 169.87 9.36018 174.613 1.0489L172.801 0.673914C167.979 9.11149 164.11 15.2469 159.549 23.767C111.667 113.302 97.2152 192.018 116.523 257.658C150.105 371.784 275.169 422.458 327.378 438.946C380.679 455.774 436.732 465.312 490.93 474.499C532.719 481.6 575.904 488.94 617.577 499.578C698.341 520.192 805.562 564.366 858.116 657.417C876.818 690.606 887.557 728.403 897.92 764.945C902.234 780.173 906.639 795.587 911.654 810.8L913.242 808.916C908.429 794.15 904.157 779.232 899.981 764.397C889.562 727.724 878.813 689.809 859.958 656.409Z"
                fill="#5ED9D1"
              />
              <path
                d="M149.799 26.0556C151.101 27.0802 152.181 28.4052 152.947 29.9428C155.498 34.7597 156.092 40.4863 154.601 45.7456C153.376 44.181 151.591 43.2697 149.717 43.2518C149.371 45.8143 149.999 48.4328 151.449 50.5099C151.551 50.6554 151.653 50.8009 151.758 50.9388C148.543 56.0268 144.635 65.1215 151.544 68.6601C157.209 71.5616 163.528 63.1082 165.964 58.6065C166.267 58.0436 166.55 57.4766 166.81 56.8999C168.061 56.6212 169.225 56.0171 170.202 55.1339C172.059 53.5304 173.233 51.1698 173.462 48.5926C171.952 48.1488 170.345 48.3467 168.976 49.1385C169.576 43.9388 168.614 38.6455 166.229 34.0543C163.121 27.5227 157.139 23.1641 150.426 22.5479C149.971 21.3696 149.276 20.3192 148.4 19.4715C146.604 17.6638 144.331 16.5135 141.915 16.1849C141.573 17.8134 142.349 19.9004 144.185 21.7606C144.584 22.1657 145.007 22.5366 145.459 22.871C144.918 22.827 144.377 22.8269 143.84 22.8686C141.357 23.0703 139.574 24.1779 138.929 25.686C141.01 27.0872 143.438 27.7403 145.857 27.5516C147.281 27.5018 148.658 26.9798 149.799 26.0556ZM156.585 31.1912C160.277 33.7976 162.687 38.0804 163.122 42.8209C163.804 48.4692 161.782 54.0657 157.771 57.6525C160.544 53.6932 161.944 48.7811 161.727 43.7788C161.4 39.0756 159.584 34.6289 156.585 31.1912Z"
                fill="#F2AE69"
              />
            </svg>
          </div>
        )}

        <div className="absolute flex flex-col justify-between left-[3rem] sm:left-[10rem] md:left-0  md:items-center text-white py-12 z-20 top-0 md:w-full h-[85%]">
          <div className="relative text-right md:w-fit md:mr-[40rem] lg:mr-[52rem]">
            <span className="md:text-2xl lg:text-3xl font-semibold text-mint">
              2022
            </span>
            <br />
            <span className="text-base">
              {isMobile ? "Tap" : "Click"} for details
            </span>
          </div>
          <div className="relative md:text-xs lg:text-base text-right md:w-fit md:mr-[41rem] lg:mr-[56rem]">
            <HtmlTooltip
              title={
                <Fragment>
                  <div>
                    The new settlement layer where transactions are fast but
                    consensus is slow. <br />
                    <u>
                      <a
                        rel="noreferrer noopener"
                        target="_blank"
                        href="https://blog.koii.network/Koii-Announces-K2/"
                      >
                        Learn more
                      </a>
                    </u>
                  </div>
                </Fragment>
              }
              placement="right-start"
              arrow
              leaveDelay={800}
            >
              {isBreakpoint ? (
                <a
                  className="hover:text-koiiorange"
                  rel="noreferrer noopener"
                  target="_blank"
                  href="https://blog.koii.network/Koii-Announces-K2/"
                >
                  K2 Settlement Layer
                </a>
              ) : (
                <a className="hover:text-koiiorange">K2 Settlement Layer</a>
              )}
            </HtmlTooltip>
            <br />
            <span className="text-mint">Public Beta</span>
          </div>
          <div className="relative md:text-xs lg:text-base text-right md:w-fit md:mr-[38rem] lg:mr-[55rem]">
            <HtmlTooltip
              title={
                <Fragment>
                  <div>
                    Attention Tracking - Get rewarded for every view by embedded
                    3 lines of code into the header of your site. <br />
                    <u>
                      <a
                        rel="noreferrer noopener"
                        target="_blank"
                        href="https://docs.koii.network/earning-koii/attention-mining"
                      >
                        Learn how
                      </a>
                    </u>
                  </div>
                </Fragment>
              }
              placement="right-start"
              arrow
              leaveDelay={800}
            >
              {isBreakpoint ? (
                <a
                  className="hover:text-koiiorange"
                  rel="noreferrer noopener"
                  target="_blank"
                  href="https://docs.koii.network/earning-koii/attention-mining"
                >
                  Attention Tracking
                </a>
              ) : (
                <a className="hover:text-koiiorange">Attention Tracking</a>
              )}
            </HtmlTooltip>
            <br />
            <span className="text-mint">For any website</span>
          </div>
          <div className="relative md:text-xs lg:text-base text-right md:w-fit md:mr-[30rem] lg:mr-[50rem]">
            <HtmlTooltip
              title={
                <Fragment>
                  <div>
                    Take a photo or video and store it for free, right from your
                    phone! <br />
                    <u>
                      <a
                        rel="noreferrer noopener"
                        target="_blank"
                        href={HubspotFormLinks.FINNIE_MOBIE_PREREGISTER}
                      >
                        Get the app.
                      </a>
                    </u>
                  </div>
                </Fragment>
              }
              placement="right-start"
              arrow
              leaveDelay={800}
            >
              {isBreakpoint ? (
                <a
                  className="hover:text-koiiorange"
                  rel="noreferrer noopener"
                  target="_blank"
                  href={HubspotFormLinks.FINNIE_MOBIE_PREREGISTER}
                >
                  Finnie Mobile
                </a>
              ) : (
                <a className="hover:text-koiiorange">Finnie Mobile</a>
              )}
            </HtmlTooltip>
            <br />
          </div>
          <div className="relative md:text-xs lg:text-base text-right md:w-fit md:mr-[26rem] md:bottom-[1rem]  lg:mr-[48rem]">
            <HtmlTooltip
              title={
                <Fragment>
                  <div>
                    Media-driven, community-owned collectives that reward
                    members. <br />
                    <u>
                      <a
                        rel="noreferrer noopener"
                        target="_blank"
                        href="https://blog.koii.network/Content-Collective/"
                      >
                        Read the paper
                      </a>
                    </u>
                  </div>
                </Fragment>
              }
              placement="right-start"
              arrow
              leaveDelay={800}
            >
              {isBreakpoint ? (
                <a
                  className="hover:text-koiiorange"
                  rel="noreferrer noopener"
                  target="_blank"
                  href="https://blog.koii.network/Content-Collective/"
                >
                  Content Collectives
                </a>
              ) : (
                <a className="hover:text-koiiorange">Content Collectives</a>
              )}
            </HtmlTooltip>
            <br />
          </div>
          <div className="relative md:text-xs lg:text-base text-right md:w-fit md:mr-[16rem] md:bottom-[2rem] lg:mr-[42rem] ]">
            <HtmlTooltip
              title={
                <Fragment>
                  <div>
                    1. Ask our network to accomplish any micro-service 2. Rent
                    out your unused RAM and get paid. <br />
                    <u>
                      <a
                        rel="noreferrer noopener"
                        target="_blank"
                        href={HubspotFormLinks.NODE_PREREGISTER}
                      >
                        Run a node
                      </a>
                    </u>
                  </div>
                </Fragment>
              }
              placement="right-start"
              arrow
              leaveDelay={800}
            >
              {isBreakpoint ? (
                <a
                  className="hover:text-koiiorange"
                  rel="noreferrer noopener"
                  target="_blank"
                  href={HubspotFormLinks.NODE_PREREGISTER}
                >
                  Tasks & Task Nodes
                </a>
              ) : (
                <a className="hover:text-koiiorange">Tasks & Task Nodes</a>
              )}
            </HtmlTooltip>
            <br />
            <span className="text-mint">Public Beta</span>
          </div>
          <div className="relative md:text-xs lg:text-base text-right md:w-fit md:mr-[-5rem] md:bottom-[3rem] lg:bottom-[2rem] lg:mr-[20rem] md:bottom-[2%]">
            <HtmlTooltip
              title={
                <Fragment>
                  <div>
                    The Finnie wallet compatibility is increasing every day, so
                    you can keep all your assets in one place (but behind
                    multiple keys). <br />
                    <u>
                      <a
                        rel="noreferrer noopener"
                        target="_blank"
                        href="https://chrome.google.com/webstore/detail/finnie/cjmkndjhnagcfbpiemnkdpomccnjblmj"
                      >
                        Get Finnie
                      </a>
                    </u>
                  </div>
                </Fragment>
              }
              placement="right-start"
              arrow
              leaveDelay={800}
            >
              {isBreakpoint ? (
                <a
                  className="hover:text-koiiorange"
                  rel="noreferrer noopener"
                  target="_blank"
                  href="https://chrome.google.com/webstore/detail/finnie/cjmkndjhnagcfbpiemnkdpomccnjblmj"
                >
                  Finnie Browser Expansion
                </a>
              ) : (
                <a className="hover:text-koiiorange">
                  Finnie Browser Expansion
                </a>
              )}
            </HtmlTooltip>
          </div>
          <div className="relative md:text-xs lg:text-base text-right md:w-fit md:mr-[-13rem] md:bottom-[3rem] lg:bottom-[2rem] lg:mr-[0rem]">
            <HtmlTooltip
              title={
                <Fragment>
                  <div>
                    App templates, written 100% in JavaScript and easy to deploy
                    to decentralized storage. <br />
                    <u>
                      <a
                        rel="noreferrer noopener"
                        target="_blank"
                        href="https://docs.koii.network/build-dapps-with-koii/welcome-to-koii-x"
                      >
                        Check out the library.
                      </a>
                    </u>
                  </div>
                </Fragment>
              }
              placement="right-start"
              arrow
              leaveDelay={800}
            >
              {isBreakpoint ? (
                <a
                  className="hover:text-koiiorange"
                  rel="noreferrer noopener"
                  target="_blank"
                  href="https://docs.koii.network/build-dapps-with-koii/welcome-to-koii-x"
                >
                  Koii-X Template Library <br />
                  Expansion
                </a>
              ) : (
                <a className="hover:text-koiiorange">
                  Koii-X Template Library Expansion
                </a>
              )}
            </HtmlTooltip>
            <br />
          </div>
          <div className="relative md:text-xs lg:text-base text-right md:w-fit md:mr-[-25rem] md:bottom-[3rem] lg:bottom-0 lg:mr-[-20rem]">
            <HtmlTooltip
              title={
                <Fragment>
                  <div>
                    Fully audited and ready to go! <br />
                    <u>
                      <a
                        rel="noreferrer noopener"
                        target="_blank"
                        href={HubspotFormLinks.NEWSLETTER}
                      >
                        Get notified
                      </a>
                    </u>
                  </div>
                </Fragment>
              }
              placement="right-start"
              arrow
              leaveDelay={800}
            >
              {isBreakpoint ? (
                <a
                  className="hover:text-koiiorange"
                  rel="noreferrer noopener"
                  target="_blank"
                  href={HubspotFormLinks.NEWSLETTER}
                >
                  Public Mainnet
                </a>
              ) : (
                <a className="hover:text-koiiorange"> Public Mainnet</a>
              )}
            </HtmlTooltip>
            <br />
          </div>
          <div className="relative md:text-xs lg:text-base text-right md:w-fit md:mr-[-26rem] md:bottom-[3rem] lg:bottom-0 lg:mr-[-30rem]">
            <HtmlTooltip
              title={
                <Fragment>
                  <div>
                    Get tokens to use or run the network. <br />
                    <u>
                      <a
                        rel="noreferrer noopener"
                        target="_blank"
                        href={HubspotFormLinks.INVESTOR}
                      >
                        Join the Investor Waitlist
                      </a>
                    </u>
                  </div>
                </Fragment>
              }
              placement="right-start"
              arrow
              leaveDelay={800}
            >
              {isBreakpoint ? (
                <a
                  className="hover:text-koiiorange"
                  rel="noreferrer noopener"
                  target="_blank"
                  href={HubspotFormLinks.INVESTOR}
                >
                  Token Launch
                </a>
              ) : (
                <a className="hover:text-koiiorange"> Token Launch</a>
              )}
            </HtmlTooltip>
            <br />
            <span className="text-mint">Public Sale</span>
          </div>
        </div>
      </div>
    </div>
  );
};
