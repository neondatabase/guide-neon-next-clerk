import { createUserMessage, deleteUserMessage } from "./actions";
import { db } from "./db";
import { currentUser } from "@clerk/nextjs/server";

async function getUserMessage() {
  const user = await currentUser();
  if (!user) throw new Error("User not found");
  return db.query.UserMessages.findFirst({
    where: (messages, { eq }) => eq(messages.user_id, user.id),
  });
}

export default async function Home() {
  const existingMessage = await getUserMessage();
  const ui = existingMessage ? (
    <div className="w-2/3 text-center">
      <h1 className="text-3xl">{existingMessage.message}</h1>
      <form
        action={deleteUserMessage}
        className="w-full rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="w-full text-center">
          <input
            type="submit"
            value={"Delete Quote"}
            className="bg-[#00E699] transition-colors hover:bg-[#00e5BF] text-gray-800 font-semibold py-2 px-4 rounded focus:outline-none cursor-pointer"
          />
        </div>
      </form>
    </div>
  ) : (
    <form action={createUserMessage} className="shadow-md w-2/3 rounded px-8">
      <div className="mb-6">
        <input
          type="text"
          name="message"
          placeholder="Mistakes are the portals of discovery - James Joyce"
          className="text-center appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:outline-none"
        />
      </div>
      <div className="w-full text-center">
        <input
          type="submit"
          value={"Save Quote"}
          className="bg-[#00E699] cursor-pointer transition-colors hover:bg-[#00e5BF] text-gray-800 font-semibold py-2 px-4 rounded focus:outline-none"
        />
      </div>
    </form>
  );
  return (
    <main className="flex -mt-16 min-h-screen flex-col align-center justify-center items-center px-24">
      <h2 className="text-2xl pb-6 text-gray-400">
        {existingMessage
          ? "Your quote is wonderful..."
          : "Save an inspiring quote for yourself..."}
      </h2>
      {ui}
    </main>
  );
}
