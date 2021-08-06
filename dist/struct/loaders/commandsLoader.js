"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
exports.default = async (client) => {
    const files = fs_1.readdirSync('./dist/cmds')
        .filter(x => !x.endsWith('.ts'));
    if (!files.length)
        return console.log('No commands');
    for (const file of files) {
        if (file.endsWith('.js')) {
            const commandClass = await Promise.resolve().then(() => require(`../../cmds/${file}`));
            const command = new (commandClass.default)(client);
            command.dir = null;
            client.commands.set(command.help.name, command);
        }
        else {
            const commandFiles = fs_1.readdirSync(`./dist/cmds/${file}`).filter(x => x.endsWith('js'));
            for (const cmd of commandFiles) {
                const commandClass = await Promise.resolve().then(() => require(`../../cmds/${file}/${cmd}`));
                const command = new (commandClass.default)(client);
                command.dir = file;
                client.commands.set(command.help.name, command);
            }
        }
    }
};
