import ClientSideAuthorizedFetch from "./clientSideAuthorizedFetch";

const updatePassword = async (
  user: string = "user",
  oldPassword: string | number,
  newPassword: string | number,
) => {
  return await ClientSideAuthorizedFetch(`/api/auth/users/${user}`, {
    method: "PUT",
    body: {
      oldPassword: oldPassword.toString(),
      newPassword: newPassword.toString(),
    },
  });
};

export default updatePassword;
