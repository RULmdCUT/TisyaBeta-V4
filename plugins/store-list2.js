import fs from 'fs'
let handler = async (m, { conn, usedPrefix }) => {
	let payi = `\n*KAOS DISTRO*\n
BAHAN
Tebal
Oversize
No Brembos
Bahan Menyerap Keringat

Ukuran
xl, xxl

Status
*Ready Stock*

*PEMBAYARAN*
Bisa Melakukan Pembayaran Dengan Mengetik *.payment*`
await conn.sendFile(m.chat, fs.readFileSync('./media/distro.jpg'), 'distro.jpg', payi, m)
}
handler.command = /^(list2)$/i
handler.tags = ['store']
export default handler