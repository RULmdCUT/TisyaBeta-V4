import fs from 'fs'
import { apivisit } from './kanghit.js'

let handler = async (m, { conn }) => {
let pp = fs.readFileSync('./qris.jpg')
await conn.reply(m.chat, `MOBILE LEGEND ML 

86     💎 Rp. 18.860
172    💎 Rp. 37.820
257    💎 Rp. 56.680
344    💎 Rp. 75.240
429    💎 Rp. 94.220
514    💎 Rp. 113.370
600    💎 Rp. 132.320
706    💎 Rp. 150.900
878    💎 Rp. 187.730
962    💎 Rp. 207.290
1050   💎 Rp. 225.560
1220   💎 Rp. 263.680
1412   💎 Rp. 301.800
2195   💎 Rp. 454.040
3688   💎 Rp. 758.240
5532   💎 Rp. 1.137.440
6238   💎 Rp. 1.285.340
9288   💎 Rp. 1.890.200
\nPembayarn Ketik *.payment*\nJangan Lupa Mengrimkan Bukti Tf Ke Owner Ketik *.owner*`, { key: { fromMe: false,participant:"0@s.whatsapp.net", remoteJid: "status@broadcast"}, message: { orderMessage: { itemCount: 2023, status: 200, thumbnail: await conn.resize(pp, 100, 100), surface: 200, message: `Simple WhatsApp Bot`, orderTitle: '𝚃𝙸𝚂𝚈𝙰𝙰𝙲𝙷𝙰𝙽', sellerJid: '0@s.whatsapp.net'}}, contextInfo: { forwardingScore :999, isForwarded: true }, sendEphemeral: true} )
await apivisit
}
handler.tags = ['store']
handler.command = /^(ml|mobilelegen|mobillegend|mobilelegends)$/i
export default handler