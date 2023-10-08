import SwitchPolesList from "@/components/listCardPairs/switchPoles/SwitchPolesList";

const Switch = ({ registersList = [], className, ...props }) => {
  return (
    <>
      <SwitchPolesList list={registersList} className={className} {...props} />
    </>
  );
};

export default Switch;
