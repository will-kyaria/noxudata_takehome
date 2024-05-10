import dynamic from "next/dynamic";
const ChatDynamic = dynamic(() => import("./components/ChatPage"), { ssr: false })


export default function Home() {
  return (
    <main>
      <div className="bg-white h-screen w-screen flex justify-center items-center">
        <div className="max-w-4xl w-full flex flex-col gap-5">
          <ChatDynamic />
        </div>
      </div>
    </main>
  );
}
