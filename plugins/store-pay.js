import fs from 'fs'
let handler = async (m, { conn, usedPrefix }) => {
	let payi = `
╭─「 • *payment* • 」
│• *ᴀʟʟᴘᴀʏʏ:* ꜱᴄᴀɴ Qʀɪꜱ ᴅɪᴀᴛᴀꜱ
│
│     • *ᴇ-ᴡᴀʟʟᴇᴛ* •
│• *ᴅᴀɴᴀ:* 0821-8078-6508
│• *ɢᴏᴘᴀʏ:* 0821-8078-6508
│• *ᴏᴠᴏ:* 0821-8078-6508
│• *ʀᴇᴋᴇɴɪɴɢ:* 7605 0101 8289 536 (BRI)
╰─────√

_*ᴊɪᴋᴀ ꜱᴜᴅᴀʜ ᴍᴇᴍʙᴀʏᴀʀ*_\n_*ꜱɪʟᴀʜᴋᴀɴ ᴋɪʀɪᴍ ʙᴜᴋᴛɪ ᴘᴇᴍʙᴀʏᴀʀᴀɴ ᴋᴇ ᴏᴡɴᴇʀ ʙᴏᴛ...*_`
await conn.sendFile(m.chat, fs.readFileSync('./media/qris.jpg'), 'qris.jpg', payi, m)
}
handler.command = /^(pay|payment|bayar)$/i
handler.tags = ['store']
handler.help = ['payment']
export default handler

//ubah isi payment kalian fitur by alvin