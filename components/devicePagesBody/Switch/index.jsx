import SwitchPolesList from "@/components/listCardPairs/switchPoles/SwitchPolesList";

const SwitchDevicePageBody = ({ registersList, className, ...props }) => {
  return (
    <>
      <SwitchPolesList list={registersList} className={className} {...props} />
    </>
  );
};

export default SwitchDevicePageBody;
