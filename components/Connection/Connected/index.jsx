import ConnectionCheckContainer from "../ConnectionCheckContainer";
import { Checked } from "@/components/icons";

const Connected = ({
  title = "دستگاه متصل است",
  className,
  onButtonClicked,
  ...props
}) => {
  return (
    <>
      <ConnectionCheckContainer
        className={className}
        icon={<Checked />}
        title={title}
        buttonText={"تایید"}
        buttonColor={"#507260"}
        onButtonClicked={onButtonClicked}
        {...props}
      />
    </>
  );
};

export default Connected;
