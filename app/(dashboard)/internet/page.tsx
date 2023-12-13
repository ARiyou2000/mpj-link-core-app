import ConnectionCheckPageBody from "@/components/ConnectionPageBody";

export const metadata = {
  title: "Internet - MPJ Link App",
  description: "Check core connection to the internet",
};

const CheckInternetPage = () => {
  return (
    <>
      <ConnectionCheckPageBody
        title={"اتصال به اینترنت"}
        target={"internet"}
        statusText={{
          success: "core به اینترنت متصل است",
          trying: "درحال اتصال",
          failed: "core به اینترنت متصل نیست",
        }}
      />
    </>
  );
};

export default CheckInternetPage;
