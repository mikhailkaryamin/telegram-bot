import { Telegraf } from 'telegraf';

export const telegram = new Telegraf(process.env.BOT_TOKEN);
