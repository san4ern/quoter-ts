import QuoterCommand from '../../struct/classes/Command';
import { QuoterClient } from '../../struct/classes/Client';
import { Message, MessageEmbed as Embed } from 'discord.js';

export default class serverinfoCommand extends QuoterCommand {
    constructor(client) {
        super(client, {
            name: 'serverinfo',
            aliases: [ 'server' ],
            description: 'Command which shows server\'s info'
        });
    }
    execute(client: QuoterClient, message: Message) {
        const embed = new Embed()
            .setTitle(`${message.guild.name}'s info`)
            .setColor('#7289da')
            .setThumbnail(message.guild.iconURL({ size: 1024, dynamic: true }))

            .setDescription([
                'Total members: ' + message.guild.memberCount,
                'Users: ' +
                (message.guild.memberCount - message.guild.members.cache.filter(x => x.user.bot).size) +
                ' / Bots: ' +
                message.guild.members.cache.filter(x => x.user.bot).size,
                'Guild created: <t:' + Math.floor(message.guild.createdTimestamp / 1000) + ':f>'
            ])

            .addField('Channels count', [
                'Categories: ' + message.guild.channels.cache.filter(x => x.type === 'category').size,
                'Voice: ' + message.guild.channels.cache.filter(x => x.type === 'voice').size,
                'Text: ' + message.guild.channels.cache.filter(x => x.type === 'text').size
            ], true)

        void message.channel.send(embed);
    }
}