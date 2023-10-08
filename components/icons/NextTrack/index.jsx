const NextTrack = ({ className, ...props }) => {
  return (
    <>
      <svg
        width="25"
        height="14"
        viewBox="0 0 25 14"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#F4F4F4"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        {...props}>
        <path d="M12.0474 6.5449C11.9348 6.22958 11.7141 5.94632 11.3855 5.75659L2.33887 0.5335C1.33887 -0.0438505 0.0888672 0.677836 0.0888672 1.83254V12.2787C0.0888672 13.4334 1.33887 14.1551 2.33887 13.5778L11.3855 8.35466C11.7141 8.16493 11.9348 7.88167 12.0474 7.56636V12.2787C12.0474 13.4334 13.2974 14.1551 14.2974 13.5778L23.3441 8.35466C24.3441 7.77731 24.3441 6.33394 23.3441 5.75659L14.2974 0.5335C13.2974 -0.0438505 12.0474 0.677836 12.0474 1.83254V6.5449Z" />
      </svg>
    </>
  );
};

export default NextTrack;
