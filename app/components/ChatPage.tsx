'use client'
import { AblyProvider, ChannelProvider } from "ably/react";
import * as Ably from 'ably';
import { Chat } from "./Chat";
const client = new Ably.Realtime({ key: 'V1VcyA.DJduQQ:5kjw47LUzpc5ODkpsE1puSXpk2WF8tGSAu6KUovJrHY', clientId: 'noxudata-test' });

export default function ChatPage() {

    return (
        <>
            <AblyProvider client={client}>
                <ChannelProvider channelName="channel-1">
                    <Chat />
                </ChannelProvider>
            </AblyProvider>
        </>
    )
}