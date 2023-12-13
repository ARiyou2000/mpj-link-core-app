import ConnectionCheckContainer from "../ConnectionCheckContainer";
import { Error } from "@/components/icons";

type PropsT = {
  title: string;
  className?: string;
  onButtonClicked: () => void;
};

const ErrorConnecting = ({
  title = "عدم اتصال",
  className,
  onButtonClicked,
  ...props
}: PropsT) => {
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
