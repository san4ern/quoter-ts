"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Command_1 = require("../../struct/classes/Command");
const discord_js_1 = require("discord.js");
const fs_1 = require("fs");
class helpCommand extends Command_1.default {
    constructor(client) {
        super(client, {
            name: 'help',
            aliases: ['h'],
            description: 'Help command'
        });
    }
    execute(client, message) {
        const dirs = fs_1.readdirSync('./dist/cmds')
            .filter(x => !x.endsWith('.js'));
        const embed = new discord_js_1.MessageEmbed()
            .setTitle('Commands list')
            .setColor('#7289da');
        for (const dir of dirs) {
            // @ts-ignore
            const commands = client.commands
                .filter(x => x.dir === dir)
                .map(x => '`' + x[1].help.name + '`').join(', ');
            if (commands.length) {
                embed.addField(dir, commands);
            }
        }
        void message.channel.send(embed);
    }
}
exports.default = helpCommand;
