export type IconButtonProps = Readonly<
  {
    name:
      | "twitter"
      | "discord"
      | "telegram"
      | "github"
      | "linkedin"
      | "youtube";
    className?: string;
    fill?: string;
    px: string;
  } & React.HTMLProps<HTMLButtonElement>
>;

export const IconButton = ({ name, className, fill, px }: IconButtonProps) => {
  return (
    <div className={className}>
      {name === "twitter" && (
        <a
          href="https://twitter.com/KoiiNetwork"
          rel="noreferrer noopener"
          target="_blank"
        >
          <svg
            width={px}
            height={px}
            viewBox="0 0 42 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M41.0658 4.36577C39.5486 5.03449 37.9396 5.47367 36.2921 5.66878C38.0286 4.63397 39.3283 3.00537 39.9489 1.08648C38.3192 2.05284 36.5326 2.73008 34.6704 3.09643C33.4195 1.76289 31.7615 0.878477 29.9542 0.58069C28.1468 0.282902 26.2914 0.588425 24.6763 1.44976C23.0612 2.31109 21.7769 3.67998 21.0231 5.34361C20.2694 7.00723 20.0883 8.87239 20.5082 10.6491C17.2033 10.4841 13.9703 9.62834 11.0189 8.13749C8.06751 6.64664 5.46379 4.55399 3.37676 1.99541C2.63803 3.2597 2.24982 4.69692 2.25189 6.15988C2.25189 9.03125 3.7186 11.5679 5.94846 13.0531C4.62884 13.0117 3.33827 12.6567 2.18432 12.0175V12.1204C2.18472 14.0328 2.84885 15.8861 4.0641 17.3662C5.27935 18.8464 6.97094 19.8622 8.85205 20.2415C7.62705 20.5722 6.34257 20.621 5.09586 20.384C5.62624 22.0301 6.65996 23.4697 8.05231 24.5012C9.44465 25.5327 11.1259 26.1046 12.8606 26.1367C11.1365 27.4859 9.16244 28.4832 7.05123 29.0717C4.94002 29.6602 2.7331 29.8284 0.556641 29.5665C4.35595 32.001 8.77871 33.2935 13.2959 33.2893C28.585 33.2893 36.946 20.6692 36.946 9.72433C36.946 9.36789 36.936 9.00748 36.9201 8.655C38.5475 7.48302 39.9521 6.0312 41.0678 4.36775L41.0658 4.36577Z"
              fill={fill}
            />
          </svg>
        </a>
      )}
      {name === "discord" && (
        <a
          href="https://discord.gg/koii"
          rel="noreferrer noopener"
          target="_blank"
        >
          <svg
            width={px}
            height={px}
            viewBox="0 0 39 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M28.4636 27.5003L26.3581 25.0028C30.4688 23.9039 32.073 21.1067 32.073 21.1067C26.8595 26.0018 12.6224 26.2016 7.10809 21.1067C7.10809 21.1067 8.51174 23.7041 12.7227 25.0028L10.4167 27.5003C3.39845 27.4004 0.691406 22.7051 0.691406 22.7051C0.691406 12.3155 5.3034 4.02375 5.3034 4.02375C10.0157 0.727051 14.3269 0.727051 14.3269 0.727051L14.6276 1.12665C8.81252 2.72505 6.30601 5.32246 6.30601 5.32246C13.1237 0.727051 27.1602 1.12665 32.6746 5.32246C32.7748 5.22256 29.366 2.52525 24.0522 1.12665L24.5535 0.727051C24.5535 0.727051 28.8647 0.727051 33.5769 4.02375C33.5769 4.02375 38.1889 12.3155 38.1889 22.7051C38.1889 22.7051 35.4819 27.4004 28.4636 27.5003ZM13.4251 19.7092C15.2524 19.7092 16.7337 18.1434 16.7337 16.212C16.7337 14.2805 15.2524 12.7148 13.4251 12.7148C11.5978 12.7148 10.1165 14.2805 10.1165 16.212C10.1165 18.1434 11.5978 19.7092 13.4251 19.7092ZM28.3641 16.212C28.3641 18.1434 26.8828 19.7092 25.0555 19.7092C23.2282 19.7092 21.7469 18.1434 21.7469 16.212C21.7469 14.2805 23.2282 12.7148 25.0555 12.7148C26.8828 12.7148 28.3641 14.2805 28.3641 16.212Z"
              fill={fill}
            />
          </svg>
        </a>
      )}
      {name === "telegram" && (
        <a
          href="https://t.me/koiinetwork"
          rel="noreferrer noopener"
          target="_blank"
        >
          <svg
            width={px}
            height={px}
            viewBox="0 0 39 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.6297 20.3145L28.1649 30.2046C29.5685 31.1037 30.7716 30.6042 31.1727 28.806L36.687 3.03176C37.1883 0.833952 35.7847 -0.16505 34.2808 0.534251L2.09707 12.9219C-0.00840628 13.7211 -0.00840628 15.0198 1.69603 15.5193L10.0177 18.1167L29.0672 6.02876C29.9696 5.52926 30.7716 5.72906 30.1701 6.42836"
              fill={fill}
            />
          </svg>
        </a>
      )}
      {name === "github" && (
        <a
          href="https://github.com/koii-network"
          rel="noreferrer noopener"
          target="_blank"
        >
          <svg
            width={px}
            height={px}
            viewBox="0 0 39 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.0025 32.9865C8.78848 32.9865 8.96179 34.4111 8.96179 34.4111H24.7448C24.7448 34.4111 24.8192 33.7994 24.5295 33.3778C24.3763 33.1559 24.1224 32.9865 23.7041 32.9865C22.5767 32.9865 22.3168 32.4838 22.3168 31.9809L22.4034 26.1158C22.4034 24.1045 21.7093 22.7638 20.8419 22.0935C25.7856 21.5906 30.9882 19.7471 30.9882 11.5346C30.9882 9.18908 30.1207 7.26168 28.7335 5.7533C28.9934 5.2505 29.6875 3.07171 28.4735 0.138716C28.4735 0.138716 28.0017 -0.0129644 26.9785 0.201563C25.9912 0.409396 24.4901 0.959118 22.4034 2.3175C18.7614 1.31192 14.9452 1.31192 11.3032 2.3175C7.05457 -0.447871 5.2331 0.138716 5.2331 0.138716C4.0191 3.07171 4.7132 5.2505 4.97314 5.7533C3.58584 7.26168 2.71843 9.18908 2.71843 11.5346C2.71843 19.7471 7.83444 21.5906 12.7771 22.0935C12.1706 22.6801 11.5631 23.6018 11.3898 25.0263C10.0892 25.5292 6.88038 26.4501 4.97314 23.1827C4.97314 23.1827 3.75915 21.1715 1.50443 21.004C1.50443 21.004 -0.663641 21.004 1.41778 22.3447C1.41778 22.3447 1.88342 22.5417 2.47773 23.1961C2.90925 23.6714 3.40816 24.3879 3.8458 25.4454C3.8458 25.4454 5.14645 29.1317 11.3032 27.791L11.3898 31.9809C11.3898 32.4838 11.1299 32.9865 10.0025 32.9865Z"
              fill={fill}
            />
          </svg>
        </a>
      )}
      {name === "linkedin" && (
        <a
          href="https://www.linkedin.com/company/open-koi/"
          rel="noreferrer noopener"
          target="_blank"
        >
          <svg
            width={px}
            height={px}
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.56768 1.77857C3.56745 2.25004 3.37928 2.7021 3.04458 3.03532C2.70987 3.36853 2.25605 3.55559 1.78295 3.55536C1.30984 3.55512 0.856212 3.36761 0.521844 3.03406C0.187476 2.70051 -0.000236329 2.24826 2.23302e-07 1.77679C0.000236775 1.30532 0.188403 0.853255 0.523106 0.520042C0.857808 0.186829 1.31163 -0.000235512 1.78473 2.22531e-07C2.25784 0.000235957 2.71147 0.187753 3.04584 0.521299C3.3802 0.854845 3.56792 1.3071 3.56768 1.77857ZM3.6212 4.87173H0.0535154V16H3.6212V4.87173ZM9.25813 4.87173H5.70829V16H9.22246V10.1603C9.22246 6.90717 13.4769 6.60497 13.4769 10.1603V16H17V8.9515C17 3.46736 10.703 3.6718 9.22246 6.36498L9.25813 4.87173Z"
              fill={fill}
            />
          </svg>
        </a>
      )}
      {name === "youtube" && (
        <a
          href="https://www.youtube.com/c/KoiiNetwork"
          rel="noreferrer noopener"
          target="_blank"
        >
          <svg
            width={px}
            height={px}
            viewBox="0 0 24 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20.6878 0.63312C21.6253 0.88312 22.4378 1.63312 22.6878 2.57062C23.2503 4.88312 23.2503 11.1956 22.6878 13.4456C22.4378 14.3831 21.6253 15.1331 20.6878 15.3831C18.3753 16.0081 5.56281 16.0081 3.31281 15.3831C2.37531 15.1331 1.56281 14.3831 1.31281 13.4456C0.687808 11.0081 0.750308 4.94562 1.31281 2.57062C1.56281 1.63312 2.37531 0.88312 3.31281 0.63312C5.75031 0.00812048 18.5628 0.0706205 20.6878 0.63312ZM15.5625 8.00806L9.75 11.3206V4.69556L15.5625 8.00806Z"
              fill={fill}
            />
          </svg>
        </a>
      )}
    </div>
  );
};