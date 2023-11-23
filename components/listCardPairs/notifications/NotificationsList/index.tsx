import { cn } from "@/lib/utils";
import Notification from "../Notification";
import LoadingSpinner from "@/components/loading/LoadingSpinner";
import NotificationClass from "@/classes/Notification";

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
        {list ? (
          list?.length > 0 ? (
            list?.map((notification, index) => {
              return (
                <Notification
                  key={`notification_${notification.publicId}_${index}`}
                  data={notification}
                />
              );
            })
          ) : (
            "Empty List"
          )
        ) : (
          <LoadingSpinner />
        )}
      </div>
    </>
  );
};

export default NotificationsList;
