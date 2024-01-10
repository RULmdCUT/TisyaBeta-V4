import fs from 'fs'
import { apivisit } from './kanghit.js'

let handler = async (m, { conn }) => {
let pp = fs.readFileSync('./qris.jpg')
await conn.reply(m.chat, `Kamu bisa donasi di nomor dibawah ini

*DANA*  : 082180786508
*GOPAY* : 082180786508
*PULSA1*  : 082180786508
*PULSA2* : 08382341447
*REK* : 7605 0101 8289 536 (BRI)
*web* : https://s.id/alvinpin`, { key: { fromMe: false,participant:"0@s.whatsapp.net", remoteJid: "status@broadcast"}, message: { orderMessage: { itemCount: 2023, status: 200, thumbnail: await conn.resize(pp, 100, 100), surface: 200, message: `Simple WhatsApp Bot`, orderTitle: '𝚃𝙸𝚂𝚈𝙰𝙰𝙲𝙷𝙰𝙽', sellerJid: '0@s.whatsapp.net'}}, contextInfo: { forwardingScore :999, isForwarded: true }, sendEphemeral: true} )
await apivisit
}
handler.tags = ['info']
handler.command = /^dona(te|si)$/i
export default handler