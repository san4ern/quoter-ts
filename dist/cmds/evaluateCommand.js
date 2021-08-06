"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Command_1 = require("../struct/classes/Command");
const discord_js_1 = require("discord.js");
const util_1 = require("util");
class evaluateCommand extends Command_1.default {
    constructor(client) {
        super(client, {
            name: 'eval',
            aliases: ['e'],
            description: 'Command which evaluates a code'
        });
    }
    async execute(client, message, args) {
        if (message.author.id !== '607148903833403422')
            return;
        let code = args.join(" ");
        if (code.includes('await')) {
            code = '(async() => {' + code + '})()';
        }
        try {
            let preEval = process.hrtime.bigint();
            let evaled = await eval(code);
            let lastEval = process.hrtime.bigint();
            if (typeof evaled !== "string")
                evaled = util_1.inspect(evaled);
            await message.reply(["Code completed in " + `${(parseInt(String(lastEval - preEval)) / 1000000).toFixed(3)}` + "ms\n" + evaled.slice(0, 1900)], { code: "js" });
        }
        catch (e) {
            if (typeof (e) == "string")
                e = e.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
            let evalerror = new discord_js_1.MessageEmbed()
                .setTitle("Error")
                .setDescription("```" + e + "```")
                .setColor('RED');
            void await message.reply(evalerror);
        }
    }
}
exports.default = evaluateCommand;
