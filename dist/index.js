"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const discord_js_1 = require("discord.js");
dotenv_1.config();
const manager = new discord_js_1.ShardingManager('./dist/struct/classes/sharding/Shard.js', { totalShards: parseInt(process.env.TOTAL_SHARDS) || 'auto', token: process.env.TOKEN });
manager.on("shardCreate", shard => {
    console.log(`Shard ${shard.id} logged in`);
});
void manager.spawn();
