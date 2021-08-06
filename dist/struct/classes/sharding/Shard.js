"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Client_1 = require("../Client");
const dotenv_1 = require("dotenv");
const commandsLoader_1 = require("../../loaders/commandsLoader");
const eventsLoader_1 = require("../../loaders/eventsLoader");
dotenv_1.config();
const client = new Client_1.QuoterClient({ prefix: process.env.PREFIX });
// @ts-ignore
void commandsLoader_1.default(client);
void eventsLoader_1.default(client);
client.login(process.env.TOKEN)
    .then(() => console.log('Logged in!'));
