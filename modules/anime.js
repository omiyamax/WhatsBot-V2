/* ═══════════════════════════════════════════════════════ //
=> If you want to recode, reupload,
=> or copy the codes/script,
=> pls give credit,
=> no credit? i will take action immediately.
==> Copyright (C) 2022 Dark_Ezio.
==> Licensed under the  MIT License;
===> you may not use this file except in compliance with the License.
=> Thank you to Lord Buddha, Family and Myself.
=> Whats Bot - Dark_Ezio.
// ════════════════════════════ */

const lora = require("../events");
const axios = require("axios");
// const lang = ezio.getString("github");

lora.config.api.waifu.sfw.map(category => {
    lora.addCommand( { pattern: [`anime-${category}`, `anime-${category}-gif`], sucReact: "♀️", category: ["create",], }, async (message, client) => {
        await axios.get(`${lora.config.api.waifu.domain}/sfw/${category}`)
        .then(async (res) => {
            message.client.command == `anime-${category}`
            ? await client.sendFile(message.from, res.data.url, "", message, { asSticker: true, author: lora.config.exif.author, packname: lora.config.exif.packname, categories: ["😄", "😊"]})
            : await client.sendMessage( message.from, { video: { url: res.data.url }, caption: lora.config.exif.footer, gifPlayback: true }, { quoted: message } );
            global.catchError = false;
        }).catch(async (err) => { global.catchError = true; await client.sendErrorMessage(message.from,lora.errorMessage(err),message.key,message); });
    });
});

lora.config.api.waifu.nsfw.map(category => {
    lora.addCommand( { pattern: [`xanime-${category}`, `xanime-${category}-gif`], sucReact: "🇱🇰", category: ["18+",], }, async (message, client) => {
        if (message.isGroup) { global.catchError = true; return await client.sendMessage( message.from, { text: lora.errorMessage(lora.config.reply.private) }, { quoted: message } ); };
        if (!message.client.isCreator) { global.catchError = true; return await client.sendMessage( message.from, { text: lora.errorMessage(lora.config.reply.owner) }, { quoted: message } ); };
        await axios.get(`${lora.config.api.waifu.domain}/nsfw/${category}`)
        .then(async (res) => {
            message.client.command == `xanime-${category}`
            ? await client.sendFile(message.from, res.data.url, "", message, { asSticker: true, author: lora.config.exif.author, packname: lora.config.exif.packname, categories: ["😄", "😊"]})
            : await client.sendMessage( message.from, { video: { url: res.data.url }, caption: lora.config.exif.footer, gifPlayback: true }, { quoted: message } );
            global.catchError = false;
        }).catch(async (err) => { global.catchError = true; await client.sendErrorMessage(message.from,lora.errorMessage(err),message.key,message); });
    });
});
