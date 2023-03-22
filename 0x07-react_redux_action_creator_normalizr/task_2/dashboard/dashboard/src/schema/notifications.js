import * as notificationData from "../../../../../notifications.json";
import { normalize, schema } from "normalizr";

const user = new schema.Entity("users");
const message = new schema.Entity("message", {}, { idAttribute: "guid" });
const notifications = new schema.Entity("notification", {
  author: user,
  context: message,
});

const normalized = normalize(notificationData, [notification]);

export default function getAllNotificationsBuyUser(userId) {
  const output = [];
  const notifications = normalized.entities.notification;
  const messages = normalized.entities.message;

  for (const id in notifications) {
    if (notification[id].author === userId) {
      output.push(messages[notifications[id].context]);
    }
  }

  return output;
}

export { normalized };
