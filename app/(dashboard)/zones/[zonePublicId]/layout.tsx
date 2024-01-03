import ZoneHeader from "@/components/deviceAndZoneHeader/ZoneHeader";
import authorizedFetch from "@/utils/authorizedFetch";
import { ReactNode } from "react";
import { ServerSideZoneT } from "@/classes/Zone";

type GenerateMetadataPropsT = {
  params: { zonePublicId: string };
  searchParams: {};
};

export async function generateMetadata(
  { params, searchParams }: GenerateMetadataPropsT,
  // parent,
) {
  // read route params
  const { zonePublicId } = params;

  return {
    title: `Zone: ${zonePublicId} - MPJ Link App`,
    description: `show device list of ${zonePublicId}`,
  };
}

type PropsT = { children: ReactNode; params: { zonePublicId: string } };
const ZonePageLayout = async ({ children, params }: PropsT) => {
  const { zonePublicId } = params;

  const zoneInfo = (await authorizedFetch(
    `${process.env.NEXT_SELF_ABSOLUTE_URL}/api/zones/${zonePublicId}`,
  )) as ServerSideZoneT;

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
