import fs from 'fs'
import { apivisit } from './kanghit.js'

let handler = async (m, { conn }) => {
let pp = fs.readFileSync('./qris.jpg')
await conn.reply(m.chat, `*LIST CHIP KUNING HIGS DOMINO VIA ID*

100M🪙6.500
200M🪙13.000
300M🪙19.500
400M🪙26.500
500M🪙32.500
600M🪙39.000
700M🪙45.500
800M🪙52.500
900M🪙58.500
1B     🪙63.000
5B     🪙315.000
10B   🪙630.000
*Chip ungu 1B Rp68.000*

*Proses 1-10menit*
*-salah penulis ID GK komplain*
*-proses = no cancel*
⚠️ TERIMA BONGKAR CHAT ADMIN ⚠️

Upgrade Harga VIP 100K
*OPEN VIP 1B x62*
Vip selalu

*PEMBAYARAN*
1.) Ovo/dana/shopee/gopay/allpay
Ketik *.payment* Untuk Pembayaran`, { key: { fromMe: false,participant:"0@s.whatsapp.net", remoteJid: "status@broadcast"}, message: { orderMessage: { itemCount: 2023, status: 200, thumbnail: await conn.resize(pp, 100, 100), surface: 200, message: `Simple WhatsApp Bot`, orderTitle: '𝚃𝙸𝚂𝚈𝙰𝙰𝙲𝙷𝙰𝙽', sellerJid: '0@s.whatsapp.net'}}, contextInfo: { forwardingScore :999, isForwarded: true }, sendEphemeral: true} )
await apivisit
}
handler.tags = ['store']
handler.command = /^(domino|chip)$/i
export default handler