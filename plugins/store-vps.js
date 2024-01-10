import fs from 'fs'
import { apivisit } from './kanghit.js'

let handler = async (m, { conn }) => {
let pp = fs.readFileSync('./qris.jpg')
await conn.reply(m.chat, `*𝚁𝙴𝙰𝙳𝚈 𝚅𝙿𝚂 𝙱𝚈 𝙰𝙻𝚅𝙸𝙽𝚂𝙷𝙾𝙿*

*VPS LINODE*
🚀 𝚁𝙰𝙼 𝟷𝙶𝙱 𝙲𝙾𝚁𝙴 𝟷 : 19𝙺
🚀 𝚁𝙰𝙼 𝟸𝙶𝙱 𝙲𝙾𝚁𝙴 2 : 26𝙺
🚀 𝚁𝙰𝙼 𝟺𝙶𝙱 𝙲𝙾𝚁𝙴 𝟸 : 35𝙺
🚀 𝚁𝙰𝙼 𝟾𝙶𝙱 𝙲𝙾𝚁𝙴 𝟺 : 50𝙺
🚀 𝚁𝙰𝙼 𝟷𝟼𝙶𝙱 𝙲𝙾𝚁𝙴 𝟼 : 75𝙺

*_PILIHAN REGION 🌐:_*
*- 🇺🇸 Amerika - Kanada 🇨🇦*
*- 🇸🇬 Singapura - Inggris 🇬🇧*
*- 🇳🇱 Belanda - Jerman 🇩🇪*
*- 🇮🇳 India - Australia 🇦🇺*
*- 🇯🇵 Tokyo - 🇫🇷 Paris*
*DLL*

*_PILIHAN OS :_*
*📈 Ubuntu*
*📈 Centos*
*📈 Debian*
*📈 Windows*
*📈 Fedora*
*DLL.*

*‼️GARANSI ON JIKA TIDAK MELANGGAR TOS!!!*

*KEUNTUNGAN BUY VPS?*
✅BISA OPEN ADMIN PANEL
✅BISA OPEN PT ADMIN PANEL
✅BISA OPEN RESELLER PANEL
✅BISA DI PAKAI BUAT SERVER PRIBADI
✅BISA JUALAN PANEL
✅BISA OPEN JASA RUN BOT
✅BISA OPEN MURPUSH
✅FREE REG DOMAIN
✅BISA OPEN MURBUG
DLL
*JAMIN BALMOND ++*
﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌﹌
𝐂𝐑𝐄𝐀𝐓𝐄𝐃 𝐁𝐘 ©𝐀𝐋𝐕𝐈𝐍𝐒𝐇𝐎𝐏

*JOIN JUGA GRUP GW BIAR DAPET PROMO*

YT ; TisyaaChann
https://www.youtube.com/@TisyaaChann

Nb:
Kalau Andah sudah Transfer artinya anda setuju dengan segala kebijakan kami.
Untuk pricelist renew berlaku jika ada server yg masih aktif di dalam akun minimal selama 23hari.

*[ Administrator]*
Ketik .owner Untuk Menghubungi owner`, { key: { fromMe: false,participant:"0@s.whatsapp.net", remoteJid: "status@broadcast"}, message: { orderMessage: { itemCount: 2023, status: 200, thumbnail: await conn.resize(pp, 100, 100), surface: 200, message: `Simple WhatsApp Bot`, orderTitle: '𝚃𝙸𝚂𝚈𝙰𝙰𝙲𝙷𝙰𝙽', sellerJid: '0@s.whatsapp.net'}}, contextInfo: { forwardingScore :999, isForwarded: true }, sendEphemeral: true} )
await apivisit
}
handler.tags = ['store']
handler.help = ['buyvps']
handler.command = /^(buyvps)$/i
export default handler