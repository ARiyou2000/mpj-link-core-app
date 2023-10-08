import ConnectionCheckContainer from "../ConnectionCheckContainer";
import LoadingSpinner from "@/components/loading/LoadingSpinner";

const TryingToConnect = ({
  title = "درحال اتصال",
  onButtonClicked,
  className,
  ...props
}) => {
  return (
    <>
      <ConnectionCheckContainer
        className={className}
        icon={<LoadingSpinner />}
        title={title}
        buttonText={"خروج"}
        buttonColor={"#D04848"}
        onButtonClicked={onButtonClicked}
        {...props}
      />
    </>
  );
};

export default TryingToConnect;
