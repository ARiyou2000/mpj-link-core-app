const LeftRightDashed = ({ ...props }) => {
  return (
    <>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#F4F4F4"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}>
        <path d="M17.1494 13.8198L14.1094 16.8598" strokeMiterlimit="10" />
        <path d="M6.84961 13.8198H17.1496" strokeMiterlimit="10" />
        <path d="M6.84961 10.1801L9.88962 7.14014" strokeMiterlimit="10" />
        <path d="M14.1096 10.1802H6.84961" strokeMiterlimit="10" />
        <path d="M17.1499 10.1802H16.6299" strokeMiterlimit="10" />
        <path d="M4 6C2.75 7.67 2 9.75 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C10.57 2 9.2 2.30001 7.97 2.85001" />
      </svg>
    </>
  );
};

export default LeftRightDashed;
