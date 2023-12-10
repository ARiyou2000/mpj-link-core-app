const getCoreAddress = (): string => {
  const ipString = process.env.NEXT_PUBLIC_ABSOLUTE_URL || "localhost";
  return `http://${ipString}:3456/mlcore/v3`;
};

export const coreAddress = getCoreAddress();
export default getCoreAddress;
