"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Command_1 = require("../../struct/classes/Command");
const discord_js_1 = require("discord.js");
class serverinfoCommand extends Command_1.default {
    constructor(client) {
        super(client, {
            name: 'serverinfo',
            aliases: ['server'],
            description: 'Command which shows server\'s info'
        });
    }
    execute(client, message) {
        const embed = new discord_js_1.MessageEmbed()
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
        ], true);
        void message.channel.send(embed);
    }
}
exports.default = serverinfoCommand;
