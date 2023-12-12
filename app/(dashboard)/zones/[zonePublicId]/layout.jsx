import ZoneHeader from "@/components/deviceAndZoneHeader/ZoneHeader";
import authorizedFetch from "@/utils/authorizedFetch";

export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const { zonePublicId } = params;

  return {
    title: `Zone: ${zonePublicId} - MPJ Link App`,
    description: `show device list of ${zonePublicId}`,
  };
}

const ZonePageLayout = async ({ children, params }) => {
  const { zonePublicId } = params;

  const zoneInfo = await authorizedFetch(
    `${process.env.NEXT_SELF_ABSOLUTE_URL}/api/zone/${zonePublicId}`,
  );

  return (
    <>
      <div className={"h-full px-1 flex flex-col gap-5"}>
        <div className={"px-3"}>
          <ZoneHeader
            name={zoneInfo?.name}
            description={zoneInfo?.description}
          />
        </div>
        <div className={"flex-1 h-0 w-full"}>{children}</div>
      </div>
    </>
  );
};

export default ZonePageLayout;
