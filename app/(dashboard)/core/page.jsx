import ConnectionCheckPageBody from "@/components/ConnectionPageBody";

export const metadata = {
  title: "Core - MPJ Link App",
  description: "Check app connection to the core",
};

const CorePage = () => {
  return (
    <>
      <div className={"h-full flex flex-col px-4 pt-14"}>
        <h3 className={"text-lg p-4"}>اتصال به Core</h3>
        <ConnectionCheckPageBody
          target={"core"}
          statusText={{
            connected: "اتصال با core برقرار است",
            trying: "درحال اتصال",
            error: "تلاش مجدد",
          }}
        />
      </div>
    </>
  );
};

export default CorePage;
