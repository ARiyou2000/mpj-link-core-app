import { cn } from "@/lib/utils";
import Notification from "../Notification";
import NotificationClass from "@/classes/Notification";
import generalListStatus from "@/components/listCardPairs/generalListStatus";

type PropsT = {
  list: null | NotificationClass[];
  className?: string;
};

const NotificationsList = ({ list, className, ...props }: PropsT) => {
  return (
    <>
      <div
        className={cn("flex flex-col flex-nowrap gap-2 w-full", className)}
        {...props}>
        {generalListStatus({ list }) ||
          list?.map((notification) => {
            return (
              <Notification
                key={`notification_${notification.publicId}`}
                data={notification}
              />
            );
          })}
      </div>
    </>
  );
};

export default NotificationsList;
