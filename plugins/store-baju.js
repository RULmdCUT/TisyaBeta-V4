import fs from 'fs'
let handler = async (m, { conn, usedPrefix }) => {
	let payi = `\n*LIST SHOOP*\n
FASHION ONLINE
1)Sweeter Hoodie
2)Kaos Distro Oversize
3)Celana Chino

*PENGGUNAAN*
Ketik *.list* Nomor Produk Untuk Melihat Detail Produk Contoh: *.list1*

*PEMBAYARAN*
Bisa Melakukan Pembayaran Dengan Mengetik *.payment*`
await conn.sendFile(m.chat, fs.readFileSync('./media/shop.jpg'), 'shop.jpg', payi, m)
}
handler.command = /^(baju)$/i
handler.tags = ['store']
export default handler