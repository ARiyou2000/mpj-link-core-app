const CheckDashed = ({ ...props }) => {
  return (
    <>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#F4F4F4"
        {...props}>
        <path
          d="M4.02 5.97C2.75 7.65 2 9.74 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 12L10.5047 14.2571C10.7519 14.6279 11.2863 14.6564 11.5716 14.3141L16 9"
          strokeLinecap="round"
        />
      </svg>
    </>
  );
};

export default CheckDashed;
