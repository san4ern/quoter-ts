import QuoterCommand from '../../struct/classes/Command';
import { QuoterClient } from '../../struct/classes/Client';
import { Message, MessageEmbed as Embed } from 'discord.js';
import { readdirSync } from 'fs';

export default class helpCommand extends QuoterCommand {
    constructor(client) {
        super(client, {
            name: 'help',
            aliases: [ 'h' ],
            description: 'Help command'
        });
    }
    execute(client: QuoterClient, message: Message) {
        const dirs = readdirSync('./dist/cmds')
            .filter(x => !x.endsWith('.js'));

        const embed = new Embed()
            .setTitle('Commands list')
            .setColor('#7289da')

        for(const dir of dirs) {
            // @ts-ignore
            const commands = client.commands
                .filter(x => x.dir === dir)
                .map(x => '`' + x[1].help.name + '`').join(', ');

            if(commands.length) {
                embed.addField(dir, commands);
            }
        }
        void message.channel.send(embed);
    }
}