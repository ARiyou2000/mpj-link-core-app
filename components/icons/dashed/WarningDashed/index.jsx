import { Warning } from "../index";

const WarningDashed = ({ ...props }) => {
  return (
    <>
      <svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#F4F4F4"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}>
        <path d="M12.2051 8V13" />
        <path d="M4.20508 6C2.95508 7.67 2.20508 9.75 2.20508 12C2.20508 17.52 6.68508 22 12.2051 22C17.7251 22 22.2051 17.52 22.2051 12C22.2051 6.48 17.7251 2 12.2051 2C10.7751 2 9.40508 2.3 8.17508 2.85" />
        <path d="M12.1992 16H12.2082" />
      </svg>
    </>
  );
};

export default WarningDashed;
