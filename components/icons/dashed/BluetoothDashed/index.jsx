const BluetoothDashed = ({ children, className, ...props }) => {
  return (
    <>
      <svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#F4F4F4"
        strokeWidth="0.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        {...props}>
        <path d="M15.55 3.38999L14.42 2.43998C13.42 1.60998 12.6 1.98998 12.6 3.28998V20.71C12.6 22.01 13.42 22.39 14.42 21.56L18.27 18.35C18.81 17.9 18.82 17.15 18.31 16.68L5.95996 5.35996" />
        <path d="M5.95996 18.6399L18.31 7.31992C18.82 6.84992 18.81 6.0999 18.27 5.6499" />
      </svg>
    </>
  );
};

export default BluetoothDashed;
