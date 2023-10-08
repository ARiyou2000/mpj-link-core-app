export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const { zonePublicId } = params;

  return {
    title: `Zone: ${zonePublicId} - MPJ Link App`,
    description: `show device list of ${zonePublicId}`,
  };
}

const ZonePageLayout = ({ children }) => {
  return <>{children}</>;
};

export default ZonePageLayout;
