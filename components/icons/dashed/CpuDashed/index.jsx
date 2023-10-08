const CpuDashed = ({ ...props }) => {
  return (
    <>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#F4F4F4"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}>
        <path d="M9.6 20H14.4C18.4 20 20 18.4 20 14.4V9.6C20 5.6 18.4 4 14.4 4H9.6C5.6 4 4 5.6 4 9.6V14.4C4 18.4 5.6 20 9.6 20Z" />
        <path d="M7 10.5V13.5C7 16 8 17 10.5 17H13.5C16 17 17 16 17 13.5V10.5C17 8 16 7 13.5 7H10.5" />
        <path d="M8.00977 4V2" />
        <path d="M12 4V2" />
        <path d="M16 4V2" />
        <path d="M20 8H22" />
        <path d="M20 12H22" />
        <path d="M20 16H22" />
        <path d="M16 20V22" />
        <path d="M12.0098 20V22" />
        <path d="M8.00977 20V22" />
        <path d="M2 8H4" />
        <path d="M2 12H4" />
        <path d="M2 16H4" />
      </svg>
    </>
  );
};

export default CpuDashed;
