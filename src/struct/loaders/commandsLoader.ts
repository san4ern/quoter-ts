import { readdirSync as read } from 'fs';
import { QuoterClient } from '../classes/Client';

export default async (client: QuoterClient) => {
    const files: string[] = read('./dist/cmds')
        .filter(x => !x.endsWith('.ts'));

        if(!files.length) return console.log('No commands');
    for(const file of files) {
        if(file.endsWith('.js')) {
            const commandClass = await import(`../../cmds/${file}`);
            const command = new (commandClass.default)(client);
            command.dir = null;
            client.commands.set(command.help.name, command);
        } else {
            const commandFiles: string[] = read(`./dist/cmds/${file}`).filter(x => x.endsWith('js'));

            for(const cmd of commandFiles) {
                const commandClass = await import(`../../cmds/${file}/${cmd}`);
                const command = new (commandClass.default)(client);
                command.dir = file;
                client.commands.set(command.help.name, command);
            }
        }
    }
}