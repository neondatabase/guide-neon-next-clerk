CREATE TABLE IF NOT EXISTS "user_messages" (
	"user_id" text PRIMARY KEY NOT NULL,
	"create_ts" timestamp DEFAULT now() NOT NULL,
	"message" text NOT NULL
);
