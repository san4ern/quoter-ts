import { Client, Intents } from 'discord.js';
import { Collection } from '@discordoo/collection';
import * as english from '../translations/commands/english.json';
import * as russian from '../translations/commands/russian.json';

export class QuoterClient extends Client {
    commands: Collection;
    config: object;
    lang: { eng: {}, ru: {} };

    constructor(config : object) {
        super({
            ws: {
                intents: Intents.ALL
            }
        });
        this.config = config;
        this.commands = new Collection();
        this.lang = {
            eng: english, ru: russian
        }
    }
}