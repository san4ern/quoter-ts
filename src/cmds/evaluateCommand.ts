import QuoterCommand from '../struct/classes/Command';
import { QuoterClient } from '../struct/classes/Client';
import { Message, MessageEmbed } from 'discord.js';
import { inspect } from 'util';

export default class evaluateCommand extends QuoterCommand {
    constructor(client) {
        super(client, {
            name: 'eval',
            aliases: [ 'e' ],
            description: 'Command which evaluates a code'
        });
    }

    async execute(client: QuoterClient, message: Message, args: string[]) {
        if(message.author.id !== '607148903833403422') return;

        let code = args.join(" ");
        if (code.includes('await')) {
            code = '(async() => {' + code + '})()';
        }

        try {
            let preEval = process.hrtime.bigint();
            let evaled = await eval(code);
            let lastEval = process.hrtime.bigint();
            if (typeof evaled !== "string") evaled = inspect(evaled);
            await message.reply(["Code completed in " + `${(parseInt(String(lastEval - preEval)) / 1000000).toFixed(3)}` + "ms\n" + evaled.slice(0, 1900)], {code: "js"});

        } catch (e) {
            if (typeof (e) == "string") e = e.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
            let evalerror = new MessageEmbed()
                .setTitle("Error")
                .setDescription("```" + e + "```")
                .setColor('RED')
            void await message.reply(evalerror);
        }

    }
}