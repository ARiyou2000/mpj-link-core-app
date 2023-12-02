import fetchUrl from "./clientSideFetchUrl";
import getCoreIP from "@/utils/getCoreIP";

const updatePassword = async (
  user: string = "user",
  oldPassword: string | number,
  newPassword: string | number,
) => {
  return await fetchUrl(`${getCoreIP()}/users/${user}`, {
    method: "PUT",
    body: {
      oldPassword: oldPassword.toString(),
      newPassword: newPassword.toString(),
    },
  });
};

export default updatePassword;
