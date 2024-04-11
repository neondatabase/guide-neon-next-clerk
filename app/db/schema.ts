import { pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const UserMessages = pgTable("user_messages", {
  user_id: text("user_id").primaryKey().notNull(),
  createTs: timestamp("create_ts").defaultNow().notNull(),
  message: text("message").notNull(),
});
