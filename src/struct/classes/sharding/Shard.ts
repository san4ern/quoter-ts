import { QuoterClient } from '../Client';
import { config } from 'dotenv';
import commandsLoader from '../../loaders/commandsLoader';
import eventsLoader from '../../loaders/eventsLoader';

config();

const client = new QuoterClient({ prefix: process.env.PREFIX });

// @ts-ignore
void commandsLoader(client);
void eventsLoader(client);

client.login(process.env.TOKEN)
    .then(() => console.log('Logged in!'))