"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Command_1 = require("../../struct/classes/Command");
class pingCommand extends Command_1.default {
    constructor(client) {
        super(client, {
            name: 'ping',
            aliases: ['pong'],
            description: 'Ping command'
        });
    }
    execute(client, message) {
        void message.channel.send(`🏓 Pong! ${client.ws.ping}ms`);
    }
}
exports.default = pingCommand;
