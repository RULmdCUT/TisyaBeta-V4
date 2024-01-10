import fs from 'fs'
let handler = async (m, { conn, usedPrefix }) => {
	let payi = `*Celana chino panjang*\n 
Size 27-32
Ecer 57.000
Grosir 54.000

Status 
*Ready Stock*

Pembayan Bisa Ketik *.payment*`
await conn.sendFile(m.chat, fs.readFileSync('./media/chino.jpg'), 'chino.jpg', payi, m)
}
handler.command = /^(list3)$/i
handler.tags = ['store']
export default handler