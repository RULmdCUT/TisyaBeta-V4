import fs from 'fs'
import { apivisit } from './kanghit.js'

let handler = async (m, { conn }) => {
let pp = fs.readFileSync('./qris.jpg')
await conn.reply(m.chat, `𝗥𝗘𝗔𝗗𝗬 𝗣𝗔𝗡𝗘𝗟 𝗥𝗨𝗡 𝗕𝗢𝗧

1 GB   25% CPU.              "1k"
2 GB   50% CPU               "2k" 
3 GB   75% CPU               "3k"
4 GB 100% CPU                "4k"
5 GB 130% CPU                "5k"
6 GB 155% CPU                "6k"
7 GB 185% CPU                "7k"
UNLIMITED                     "10k"

📌𝗞𝗘𝗨𝗡𝗧𝗨𝗡𝗚𝗔𝗡
•ON 24JAM
•FAST RESPON
•NO RIBET
•HEMAT KOUTA
•ADA HARGA ADA KUALITAS 
•TAMPILAN TEMA KEREN 

PROMO💎
 RAM UNLIMITED CPU UNLIMITED
HANYA DENGAN 7.000 PEMBAYARAN KETIK *.payment*`, { key: { fromMe: false,participant:"0@s.whatsapp.net", remoteJid: "status@broadcast"}, message: { orderMessage: { itemCount: 2023, status: 200, thumbnail: await conn.resize(pp, 100, 100), surface: 200, message: `Simple WhatsApp Bot`, orderTitle: '𝚃𝙸𝚂𝚈𝙰𝙰𝙲𝙷𝙰𝙽', sellerJid: '0@s.whatsapp.net'}}, contextInfo: { forwardingScore :999, isForwarded: true }, sendEphemeral: true} )
await apivisit
}
handler.tags = ['store']
handler.help = ['buypanel']
handler.command = /^(buypanel)$/i
export default handler