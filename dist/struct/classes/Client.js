"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuoterClient = void 0;
const discord_js_1 = require("discord.js");
const collection_1 = require("@discordoo/collection");
const english = require("../translations/commands/english.json");
const russian = require("../translations/commands/russian.json");
class QuoterClient extends discord_js_1.Client {
    constructor(config) {
        super({
            ws: {
                intents: discord_js_1.Intents.ALL
            }
        });
        this.config = config;
        this.commands = new collection_1.Collection();
        this.lang = {
            eng: english, ru: russian
        };
    }
}
exports.QuoterClient = QuoterClient;
