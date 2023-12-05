import usePreventUnregisterUser from "@/hooks/usePreventUnregisterUser";

const PasswordManagementTemplate = ({ children }) => {
  usePreventUnregisterUser();

  return children;
};

export default PasswordManagementTemplate;
