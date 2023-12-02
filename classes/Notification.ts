import ResponseWithImage, {
  ServerSideResponseWithImageT,
} from "@/classes/responseWithImage";

export type ServerSideNotificationT = ServerSideResponseWithImageT;

class Notification extends ResponseWithImage {}

export default Notification;
