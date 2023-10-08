const MuteDashed = ({ className, ...props }) => {
  return (
    <>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="white"
        strokeWidth="1.21875"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        {...props}>
        <path d="M2 14C2 16 3 17 5 17H7" />
        <path d="M15 8.37028V7.41028C15 4.43028 12.93 3.29028 10.41 4.87028L7.49 6.70028C7.17 6.89028 6.8 7.00028 6.43 7.00028H5C3 7.00028 2 8.00028 2 10.0003" />
        <path d="M10.4102 19.1302C12.9302 20.7102 15.0002 19.5602 15.0002 16.5902V12.9502" />
        <path d="M18.81 9.41992C19.71 11.5699 19.44 14.0799 18 15.9999" />
        <path d="M20.7808 17C20.5108 17.52 20.2008 18.02 19.8408 18.5" />
        <path d="M21.1504 7.80029C21.9804 9.77029 22.2004 11.9303 21.8104 14.0003" />
        <path d="M22 2L2 22" />
      </svg>
    </>
  );
};

export default MuteDashed;
