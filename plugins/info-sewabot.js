import { apivisit } from './kanghit.js'

let handler = async (m, { conn }) => {
let tekss = `List harga sewa tisya :
5 Hari 3k
2 Minggu 10k
1 Bulan 17k
1 Tahun 50k

Fitur
Downloader
Tiktok, Instagram, Facebook, Mega, SoundCloud, Telegram Sticker, Twitter, Cocofun, Google Drive, MediaFire, Gitclone, Ytmp3, Ytmp4, Pinterest

Special Fitur
Otakudesu Latest, Detail, Download
Nekopoi Latest, Detail, Download

*Pembayaran?? all payment*
Dana/ovo/gopay/qris
Via pulsa?? nambah 5k`
await m.reply(tekss)
await apivisit
}
handler.help = ['sewa']
handler.tags = ['info']
handler.command = /^(sewa|sewabot)$/i
export default handler
