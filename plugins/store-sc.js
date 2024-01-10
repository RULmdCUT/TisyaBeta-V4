import fs from 'fs'
import { apivisit } from './kanghit.js'

let handler = async (m, { conn }) => {
let pp = fs.readFileSync('./qris.jpg')
await conn.reply(m.chat, `*SCRIPT BOT*
List Sc;
Tisyaa Beta V4
Sc Campuran
Sc Hw Mods V23

List Harga;
Beta V4 Tisyaa
55.000 Rp
Sc Campuran
2.000-20.000
Sc Hw 23
30.000Rp

Info Sc
📌Sc Yg Di Jual No Enc

selengkapnya
• *BETA V4 TISYA:* 
-BUG MENU
-MARKER MENU
-SHOP MENU
-STORE MENU
-PANEL MENU
-DLL

• *SC CAMPURAN*
UNTUK VERSI SC BISA CHAT OWNER

• *HW MOODS:*
-NO ENC
- READY V19,20,21,22,23

JIKA BERMINAT SILAHKAN CHAT OWNER\nPEMBAYARAN KETIK *.payment*`, { key: { fromMe: false,participant:"0@s.whatsapp.net", remoteJid: "status@broadcast"}, message: { orderMessage: { itemCount: 2023, status: 200, thumbnail: await conn.resize(pp, 100, 100), surface: 200, message: `Simple WhatsApp Bot`, orderTitle: '𝚃𝙸𝚂𝚈𝙰𝙰𝙲𝙷𝙰𝙽', sellerJid: '0@s.whatsapp.net'}}, contextInfo: { forwardingScore :999, isForwarded: true }, sendEphemeral: true} )
await apivisit
}
handler.tags = ['store']
handler.help = ['buysc']
handler.command = /^(buysc|buyscript)$/i
export default handler