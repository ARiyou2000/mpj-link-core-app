import ConnectionCheckContainer from "../ConnectionCheckContainer";
import { Error } from "@/components/icons";

const ErrorConnecting = ({
  title = "عدم اتصال",
  className,
  onButtonClicked,
  ...props
}) => {
  return (
    <>
      <ConnectionCheckContainer
        className={className}
        icon={<Error />}
        title={title}
        buttonText={"تلاش مجدد"}
        buttonColor={"#D04848"}
        onButtonClicked={onButtonClicked}
        {...props}
      />
    </>
  );
};

export default ErrorConnecting;
