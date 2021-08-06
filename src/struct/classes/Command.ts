import { QuoterClient } from './Client';

export default class QuoterCommand {
    help: object;

    constructor(client: QuoterClient, options: any = {}) {
        this.help = {
            name: options.name || null,
            aliases: options.aliases || [],
            description: options.description || null
        }
    }
}