import ConnectionCheckPageBody from "@/components/ConnectionPageBody";

export const metadata = {
  title: "Internet - MPJ Link App",
  description: "Check core connection to the internet",
};

const CheckInternetPage = () => {
  return (
    <>
      <div className={"h-full flex flex-col px-4 pt-14"}>
        <h3 className={"text-lg p-4"}>اتصال به اینترنت</h3>
        <ConnectionCheckPageBody
          target={"internet"}
          statusText={{
            connected: "دستگاه به اینترنت متصل است",
            trying: "درحال اتصال",
            error: "تلاش مجدد",
          }}
        />
      </div>
    </>
  );
};

export default CheckInternetPage;
