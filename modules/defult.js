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

lora.addCommand(
  {
    pattern: ["donate", 'report'],
    dontAddCommandList: true,
    sucReact: "🧰",
  },
  async (message, client) => {
    await client.sendMessage(
      message.from,
      { text: lora.errorMessage('404 :' + lora.config.reply.notFound) },
      { quoted: message }
    );
    global.catchError = true;
  }
);
