import DeviceAndZoneHeaderContainer, {
  DeviceAndZoneHeaderContainerT,
} from "../DeviceAndZoneHeaderContainer";

const ZoneHeader = ({
  name,
  description,
  className,
  ...props
}: DeviceAndZoneHeaderContainerT) => {
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
