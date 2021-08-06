import { readdirSync as read } from 'fs';
import { QuoterClient } from '../classes/Client';

export default async (client: QuoterClient) => {
    const eventFiles: string[] = read('./dist/events')
        .filter(x => x.endsWith('.js'));

    if(!eventFiles.length) return console.log('No events');

    for(const eventFile of eventFiles) {
        const event = await import(`../../events/${eventFile}`);

        client.on(event.default.name, (...args) => {
            // @ts-ignore
            event.default.execute(client, ...args);
        })
    }
}