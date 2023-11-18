const SDashed = ({ ...props }) => {
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
        <path d="M13.9902 10.0099L14.8302 9.16992" />
        <path d="M9.16992 14.8301L11.9199 12.0801" />
        <path d="M14.8299 14.8299L9.16992 9.16992" />
        <path d="M4 6C2.75 7.67 2 9.75 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C10.57 2 9.2 2.3 7.97 2.85" />
      </svg>
    </>
  );
};

export default SDashed;