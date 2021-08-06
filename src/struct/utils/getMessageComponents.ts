import { Message } from "discord.js";
import { QuoterClient } from '../classes/Client';

export default (client: QuoterClient, message: Message) => {
    // @ts-ignore
    const { prefix } = client.config;
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();
    return {
        commandName, args
    }
}