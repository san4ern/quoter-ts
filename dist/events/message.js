"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getMessageComponents_1 = require("../struct/utils/getMessageComponents");
exports.default = {
    name: 'message',
    execute(client, message) {
        // @ts-ignore
        if (message.author.bot || !message.content.toLowerCase().startsWith(client.config.prefix))
            return;
        const { commandName, args } = getMessageComponents_1.default(client, message);
        const command = client.commands.get(commandName) ||
            client.commands.find(x => x.help.aliases && x.help.aliases.includes(commandName));
        if (!command)
            return;
        command.execute(client, message, args);
    }
};
