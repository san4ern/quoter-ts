import { config } from 'dotenv';
import { ShardingManager } from 'discord.js';

config();

const manager = new ShardingManager('./dist/struct/classes/sharding/Shard.js',
    { totalShards: parseInt(process.env.TOTAL_SHARDS) || 'auto', token: process.env.TOKEN });

manager.on("shardCreate", shard => {
    console.log(`Shard ${shard.id} logged in`);
});

void manager.spawn();