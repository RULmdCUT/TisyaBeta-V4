import fs from 'fs'
import { apivisit } from './kanghit.js'

let handler = async (m, { conn }) => {
let pp = fs.readFileSync('./qris.jpg')
await conn.reply(m.chat, `*TOP UP FF*\n 

💎5DM        :2k
💎20DM       :5k
💎50DM       :8k
💎70DM       :10k
💎100DM      :15k
💎140DM      :20k
💎210DM      :30k
💎355DM      :48k
💎500DM      :68k
💎720DM      :94k
💎1.450DM    :190k
💎2.000DM    :254k
💸 PEMBAYARAN KETIK *.payment*\n
Sebelum Membeli Disarankan Menanyakan Stock Produk Ke Owner`, { key: { fromMe: false,participant:"0@s.whatsapp.net", remoteJid: "status@broadcast"}, message: { orderMessage: { itemCount: 2023, status: 200, thumbnail: await conn.resize(pp, 100, 100), surface: 200, message: `Simple WhatsApp Bot`, orderTitle: '𝚃𝙸𝚂𝚈𝙰𝙰𝙲𝙷𝙰𝙽', sellerJid: '0@s.whatsapp.net'}}, contextInfo: { forwardingScore :999, isForwarded: true }, sendEphemeral: true} )
await apivisit
}
handler.tags = ['store']
handler.command = /^(ff|freefire)$/i
export default handler