import fs from 'fs'
let handler = async (m, { conn, usedPrefix }) => {
	let payi = `
╭─「 • *LIST TOPUP* • 」
│| • *freefire* 
│| • *mobilelegend* 
│| • *domino* 
╰─────

Pembayaran Ketik *.payment*\nJangan Lupa Mengirim Bukti Tf Ke Owner Ketik *.owner*`
await conn.sendFile(m.chat, fs.readFileSync('./media/topup.jpg'), 'topup.jpg', payi, m)
}
handler.command = /^(topup)$/i
handler.tags = ['store']
handler.help = ['topup']
export default handler