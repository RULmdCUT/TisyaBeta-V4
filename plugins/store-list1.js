import fs from 'fs'
let handler = async (m, { conn, usedPrefix }) => {
	let payi = `*SWEETER HOODIE*
\nBahan:
Tebal
Catton
Tidak Brembos

Ukuran;
x, xl , xxl

Harga;
38.000 Rp
Status *Ready Stock*

DENGAN PEMBAYARAN ANDA BISA KETIK *.payment*`
await conn.sendFile(m.chat, fs.readFileSync('./media/sweter.jpg'), 'sweter.jpg', payi, m)
}
handler.command = /^(list1)$/i
handler.tags = ['store']
export default handler