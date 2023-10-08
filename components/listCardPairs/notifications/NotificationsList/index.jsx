import { cn } from "@/lib/utils";
import Notification from "../Notification";
import LoadingSpinner from "@/components/loading/LoadingSpinner";

const NotificationsList = ({ list, className, ...props }) => {
  return (
    <>
      <div
        className={cn("flex flex-col flex-nowrap gap-2 w-full", className)}
        {...props}>
        {list?.length > 0 ? (
          list?.map((notification, index) => {
            return (
              <Notification
                key={`notification_${notification.publicId}_${index}`}
                {...notification}
              />
            );
          })
        ) : (
          <LoadingSpinner />
        )}
      </div>
    </>
  );
};

export default NotificationsList;
