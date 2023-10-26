import SwitchPolesList from "../../listCardPairs/zigbeeSwitchPoles/SwitchPolesList";

const Switch = ({ registersList = [], className, ...props }) => {
  console.log(registersList);
  return (
    <>
      <SwitchPolesList list={registersList} className={className} {...props} />
    </>
  );
};

export default Switch;
