const setStatus = async (
  deviceId: string,
  registerId: string,
  value: string,
) => {
  try {
    await fetch(`/api/zigbee/device/${deviceId}`, {
      method: "POST",
      body: JSON.stringify({
        [registerId]: value,
      }),
    });
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export default setStatus;
