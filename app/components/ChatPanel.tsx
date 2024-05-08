import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { DropDown } from "./DropDown";
import { Button } from "./ui/Button";

export default async function ChatPanel() {
    return (
        <div className="w-full flex flex-col gap-3">
            <div className="w-full flex flex gap-3">
                <Button variant="ghost" size="sm">
                    Suggest question 1
                </Button>
                <Button variant="ghost" size="sm">
                    Suggest question 2
                </Button>
                <Button variant="ghost" size="sm">
                    Suggest question 3
                </Button>
            </div>
            <div className="w-full flex gap-3">
                <div className="flex flex-1 justify-between items-center border border-slate-300 rounded-md">
                    <div className="flex-1">
                        <DropDown />
                    </div>
                    <div className="flex-2 w-full h-full px-3 border-l border-slate-300">
                        <input
                            className="w-full h-full focus:outline-none focus:border-none "
                            type="text"
                            placeholder="Start a new chat"
                        />
                    </div>
                    <button className="flex-3">
                        <PaperAirplaneIcon className="h-5 w-5 mx-2 -rotate-45 hover:animate-pulse" />
                    </button>
                </div>
                <Button variant="warning" size="sm">
                    End Chat
                </Button>
            </div>
        </div>
    );
}
