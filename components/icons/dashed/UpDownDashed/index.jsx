const UpDownDashed = ({ ...props }) => {
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
        <path d="M10.1796 17.1499L7.13965 14.1099" strokeMiterlimit="10" />
        <path d="M10.1797 6.8501V17.1501" strokeMiterlimit="10" />
        <path d="M13.8203 6.8501L16.8603 9.89011" strokeMiterlimit="10" />
        <path d="M13.8203 14.1101V6.8501" strokeMiterlimit="10" />
        <path d="M13.8203 17.1499V16.6299" strokeMiterlimit="10" />
        <path d="M4 6C2.75 7.67 2 9.75 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C10.57 2 9.2 2.30001 7.97 2.85001" />
      </svg>
    </>
  );
};

export default UpDownDashed;
