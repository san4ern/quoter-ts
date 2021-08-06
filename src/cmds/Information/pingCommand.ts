import QuoterCommand from '../../struct/classes/Command';
import { QuoterClient } from '../../struct/classes/Client';
import { Message } from 'discord.js';

export default class pingCommand extends QuoterCommand {
    constructor(client) {
        super(client, {
            name: 'ping',
            aliases: [ 'pong' ],
            description: 'Ping command'
        });
    }

    execute(client: QuoterClient, message: Message) {
        void message.channel.send(`🏓 Pong! ${client.ws.ping}ms`);
    }
}