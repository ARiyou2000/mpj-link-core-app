import ConnectionCheckContainer from "../ConnectionCheckContainer";
import { Checked } from "@/components/icons";

type PropsT = {
  title: string;
  className?: string;
  onButtonClicked: () => void;
};

const Connected = ({
  title = "دستگاه متصل است",
  className,
  onButtonClicked,
  ...props
}: PropsT) => {
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
