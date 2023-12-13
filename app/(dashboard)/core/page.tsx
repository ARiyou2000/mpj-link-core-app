import ConnectionCheckPageBody from "@/components/ConnectionPageBody";

export const metadata = {
  title: "Core - MPJ Link App",
  description: "Check app connection to the core",
};

const CorePage = () => {
  return (
    <>
      <ConnectionCheckPageBody
        title={"اتصال به Core"}
        target={"core"}
        statusText={{
          success: "اتصال با core برقرار است",
          trying: "درحال اتصال",
          failed: "دستگاه شما به core متصل نیست",
        }}
      />
    </>
  );
};

export default CorePage;
