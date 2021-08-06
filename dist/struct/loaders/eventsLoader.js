"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
exports.default = async (client) => {
    const eventFiles = fs_1.readdirSync('./dist/events')
        .filter(x => x.endsWith('.js'));
    if (!eventFiles.length)
        return console.log('No events');
    for (const eventFile of eventFiles) {
        const event = await Promise.resolve().then(() => require(`../../events/${eventFile}`));
        client.on(event.default.name, (...args) => {
            // @ts-ignore
            event.default.execute(client, ...args);
        });
    }
};
