import usePreventUnregisterUser from "@/hooks/usePreventUnregisterUser";

const DashboardTemplate = ({ children }) => {
  usePreventUnregisterUser();

  return children;
};

export default DashboardTemplate;
