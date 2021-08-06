import getMessageComponents from '../struct/utils/getMessageComponents';
import { Message } from 'discord.js';
import { QuoterClient } from '../struct/classes/Client';

export default {
    name: 'message',
    execute(client: QuoterClient, message: Message) {
        // @ts-ignore
        if(message.author.bot || !message.content.toLowerCase().startsWith(client.config.prefix)) return;
        const { commandName, args } = getMessageComponents(client, message);

        const command = client.commands.get(commandName) ||
            client.commands.find(x => x.help.aliases && x.help.aliases.includes(commandName));
        if(!command) return;

        command.execute(client, message, args);
    }
}