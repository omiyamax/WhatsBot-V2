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

const ezio = require("../events");
const lang = ezio.getString("whats_bot");
const fs = require("fs");
const path = require("path");

ezio.addCommand(
  {
    pattern: ["owner", "creater"],
    desc: "It's send Owner Detals",
    sucReact: "👨🏼‍💻",
    category: ["all", "system"],
  },
  async (message, client) => {
    try {
      const buttons = [
        { buttonId: ".donate", buttonText: { displayText: "💰 Donate 💰" }, type: 1, },
        { buttonId: ".extra_urls", buttonText: { displayText: "🔗 Extra Urls 🔗" }, type: 1, },
      ];
      const text = `------- Owner Detals -------

⚜ Name: Omindu Anjane (Black Alpha).
⚜ Number: Wa.me/94760510568
⚜ Team: Team Queen Lora
⚜ Web Site: https://ominduanjane.github.io/
⚜ Youtube: https://www.youtube.com/channel/slomindutech
⚜ GitHub: https://www.github.com/ominduanjane
⚜ FaceBook: https://fb.com/poshitha.subadra (Poshitha Subadra)
⚜ Instagram: https://instagram.com/subadraposhitha (Poshitha Subadra)

----------------------------

🔸 Plz Follow Me On  Github.

----------------------------
`;

    const buttonMessage = {
      image: { url: "https://avatars.githubusercontent.com/u/87601796?v=4" },
      caption: text,
      footer: ezio.config.exif.footer,
      buttons,
      linkPreview: {
        "canonical-url": "https://ominduanjane.github.io/",
        "matched-text": "https://ominduanjane.github.io/",
        title: "Omindu Anjana",
        description: "This is a Queen Lora Md WhatsApp user bot. \n\nAlive",
        jpegThumbnail: ezio.config.image.encd.D_E_ADEC,
      },
    };
    await client.sendMessage( message.from, buttonMessage, { quoted: message }, { adReply: true })
    global.catchError = false;
    
    } catch (error) {
      global.catchError = true;
      return await client.sendErrorMessage( message.from, error, message.key, message );
    }
  }
);
