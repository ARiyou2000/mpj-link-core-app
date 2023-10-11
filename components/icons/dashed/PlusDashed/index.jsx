const PlusDashed = ({ ...props }) => {
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
        <path d="M11.999 16V8" />
        <path d="M14.9912 11.9995H16.0012" />
        <path d="M7.99902 11.9995H11.809" />
        <path d="M11.999 16V8" />
        <path d="M3.99902 6.00049C2.74902 7.67049 1.99902 9.75049 1.99902 12.0005C1.99902 17.5205 6.47902 22.0005 11.999 22.0005C17.519 22.0005 21.999 17.5205 21.999 12.0005C21.999 6.48049 17.519 2.00049 11.999 2.00049C10.569 2.00049 9.19902 2.30049 7.96902 2.85049" />
      </svg>
    </>
  );
};

export default PlusDashed;
