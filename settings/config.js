const fs = require('fs')

const config = {
    owner: "SALGADO / CENTRAL-HEX",
    botNumber: "224662675862",
    setPair: "CENTRAL-HEX",
    thumbUrl: "https://i.ibb.co/Z6981vZH/34c99a9d6cab.jpg",
    session: "sessions",
    self: false,
    status: {
        public: true,
        terminal: true,
        reactsw: false
    },
    message: {
owner: '*ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ ɪs ᴜsᴇᴅ ᴏɴʟʏ ғᴏʀ ᴏᴡɴᴇʀ.*',
premium: '*ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ ɪs ᴜsᴇᴅ ᴏɴʟʏ ғᴏʀ ᴘʀᴇᴍɪᴜᴍ.*',
succes: '*sᴜᴄᴄᴇssғᴜʟʟʏ.*',
group: '*ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ ɪs ᴏɴʟʏ ᴜsᴇᴅ ɪɴ ɢʀᴏᴜᴘ.*',
admins: '*ᴛʜᴇ ʙᴏᴛ ᴍᴜsᴛ ʙᴇ ᴀᴅᴍɪɴ ᴏғ ᴛʜᴇ ɢʀᴏᴜᴘ.*'
    },
    settings: {
        title: "CENTRAL-HEX",
        packname: '𝐂𝐄𝐍𝐓𝐑𝐀𝐋-𝐁𝐔𝐆',
        description: "CENTRAL-HEX",
        author: 'CENTRAL-HEX',
        footer: "CENTRAL-HEX"
    },
    newsletter: {
        name: "𝐂𝐄𝐍𝐓𝐑𝐀𝐋-𝐁𝐔𝐆",
        id: "120363419474272514@newsletter"
    },
    socialMedia: {
        YouTube: "https://www.youtube.com/@no-name-officiel",
        GitHub: "https://github.com/dsprimis",
        Telegram: "https://t.me/dsprimis",
        ChannelWA: "https://whatsapp.com/channel/0029VbDCmVWISTkNEy1D3p3H"
    }
}

global.newsletterID = "120363419474272514@newsteller"
global.newsletterName = "𝐂𝐄𝐍𝐓𝐑𝐀𝐋-𝐁𝐔𝐆"

module.exports = config;

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
