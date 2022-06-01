export const MenuButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      data-collapse-toggle="mobile-menu"
      type="button"
      className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none focus:ring-2"
      aria-controls="mobile-menu"
      aria-expanded="false"
    >
      <svg
        width="19"
        height="10"
        viewBox="0 0 19 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.966891 0.695005C1.3449 0.311012 1.96263 0.306164 2.34662 0.684176L9.3714 7.59954C9.41434 7.64181 9.4467 7.64589 9.46133 7.64589C9.47596 7.64589 9.50832 7.64181 9.55126 7.59954L16.576 0.684176C16.96 0.306164 17.5778 0.311012 17.9558 0.695005C18.3338 1.079 18.3289 1.69673 17.9449 2.07474L10.9202 8.9901C10.0979 9.79954 8.82474 9.79954 8.0025 8.9901L0.97772 2.07474C0.593727 1.69673 0.588879 1.079 0.966891 0.695005Z"
          fill="#4E4E8D"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.966891 0.695005C1.3449 0.311012 1.96263 0.306164 2.34662 0.684176L9.3714 7.59954C9.41434 7.64181 9.4467 7.64589 9.46133 7.64589C9.47596 7.64589 9.50832 7.64181 9.55126 7.59954L16.576 0.684176C16.96 0.306164 17.5778 0.311012 17.9558 0.695005C18.3338 1.079 18.3289 1.69673 17.9449 2.07474L10.9202 8.9901C10.0979 9.79954 8.82474 9.79954 8.0025 8.9901L0.97772 2.07474C0.593727 1.69673 0.588879 1.079 0.966891 0.695005Z"
          fill="black"
          fillOpacity="0.2"
        />
      </svg>
    </button>
  );
};
