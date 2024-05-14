// ESModule | TypeScript
// import { createOpenAPI, createWebsocket } from 'qq-guild-bot';

// CommonJs
const { createOpenAPI, createWebsocket } = require('qq-guild-bot');

const testConfig = {
    appID: 'APPID', // 申请机器人时获取到的机器人 BotAppID
    token: 'TOKEN', // 申请机器人时获取到的机器人 BotToken
    intents: ['PUBLIC_GUILD_MESSAGES'], // 事件订阅,用于开启可接收的消息类型
    sandbox: false, // 沙箱支持，可选，默认false. v2.7.0+
};

// 创建 client
const client = createOpenAPI(testConfig);

// 创建 websocket 连接
const ws = createWebsocket(testConfig);
