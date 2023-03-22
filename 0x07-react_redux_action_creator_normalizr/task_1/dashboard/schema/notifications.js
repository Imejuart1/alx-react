import * as notificationData from "../../../../notifications.json";
import { normalize, schema } from "normalizr";

const user = new schema.Entity("users");
const message = new schema.Entity("message", {}, { idAttribute: "guid" });
const notifications = new schema.Entity("notification", {
  author: user,
  context: message,
});

const normalized = normalize(notificationData, [notification]);

export default function getAllNotificationsBuyUser(userId) {
  return notificationData.filter((notification) => notification.author.id === userId).map((notification) => notification.context);
}

export { normalized };
