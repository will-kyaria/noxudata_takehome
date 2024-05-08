import { NoxuChat } from "./components/NoxuChat";
import ChatPanel from "./components/ChatPanel";
import { UserChat } from "./components/UserChat";


export default function Home() {
  return (
    <main>
      <div className="bg-white h-screen w-screen flex justify-center items-center">
        <div className="max-w-4xl w-full flex flex-col gap-5">
          <UserChat />
          <NoxuChat />
          <ChatPanel />
        </div>
      </div>
    </main>
  );
}
