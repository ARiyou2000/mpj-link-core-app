import DeviceAndZoneHeaderContainer from "../DeviceAndZoneHeaderContainer";

const ZoneHeader = ({ name, description, className, ...props }) => {
  return (
    <>
      <DeviceAndZoneHeaderContainer
        className={className}
        name={name}
        description={description}
        {...props}
      />
    </>
  );
};

export default ZoneHeader;
