import DeviceHeader from "@/components/deviceAndZoneHeader/DeviceHeader";

const DuctSplitDevicePage = () => {
  return (
    <>
      <DeviceHeader
        title={""}
        description={""}
        hasPowerButton={true}
        powerValue={false}
        onPowerChange={(pressed) => {
          console.log(pressed);
        }}
      />
      <div className={"flex-1 h-0 w-full"}>DuctSplit</div>
    </>
  );
};

export default DuctSplitDevicePage;
