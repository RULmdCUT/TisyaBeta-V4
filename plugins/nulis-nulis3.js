import fetch from 'node-fetch'
let handler = async (m, { conn, text, usedPrefix }) => {
if (!text) throw `Example ${usedPrefix}nulis3 Teks Yang Ingin Kamu Tulis`
let kertas = `https://api.lolhuman.xyz/api/nulis?apikey=fafbc90143ed7cfe7a2907f9&text=${text}`
await conn.sendFile(m.chat, kertas, 'error.jpg', 'Mandiri Lain Kali...', m)
}
handler.help = ['n'].map(v => v + 'ulis3 <teks>')
handler.tags = ['nulis']
handler.command = /^nulis$/i
export default handler
// BY pin
// https://GitHub.com/alvinpin/