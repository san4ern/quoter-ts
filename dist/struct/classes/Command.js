"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class QuoterCommand {
    constructor(client, options = {}) {
        this.help = {
            name: options.name || null,
            aliases: options.aliases || [],
            description: options.description || null
        };
    }
}
exports.default = QuoterCommand;
