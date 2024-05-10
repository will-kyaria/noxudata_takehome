'use client'
import { NoxuChat } from "./NoxuChat";
import { ChatPanel } from "./ChatPanel";
import { UserChat } from "./UserChat";
import { useChannel } from "ably/react";
import { useState } from "react";
import { Message } from "ably";

export const Chat = () => {
    const [messages, updateMessages] = useState<Message[]>([]);
    const { channel } = useChannel('channel-1', (message: Message) => {
        updateMessages((prev) => [...prev, message]);
    });

    return (
        <>
            <UserChat message="List my top 10 accounts" />
            <NoxuChat />
            {messages.map(m => <UserChat key={m.id} message={m.data.text} />)}
            <ChatPanel />
        </>
    )
}