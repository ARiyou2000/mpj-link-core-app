import { cn } from "@/lib/utils";
import Notification from "../Notification";
import NotificationClass from "@/classes/Notification";
import GeneralListStatus from "@/components/listCardPairs/GeneralListStatus";

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
        {GeneralListStatus({ list }) ||
          list?.map((notification, index) => {
            return (
              <Notification
                key={`notification_${notification.publicId}_${index}`}
                data={notification}
              />
            );
          })}
      </div>
    </>
  );
};

export default NotificationsList;
