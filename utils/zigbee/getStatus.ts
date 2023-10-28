const getStatus = async (deviceId: string) => {
  try {
    await fetch(`/api/zigbee/device/${deviceId}`);
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export default getStatus;
