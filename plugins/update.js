import fs from 'fs'
let handler = async (m, { conn, usedPrefix }) => {
	let payi = `\n_*UPDATE TISYA BETA V4*_\n
_FITUR YANG DI TAMBAH OWNER ALVIN_\n	
え• Owner Menu
Pushkontak
Warrcall

え•Maker Menu
pornhub
avangers
freefire
carbon
donaldtrumptweet
thunder
ktp
logohacker
harrypotter
gta
googlesugest
glass
ice
itssostupid
kitmeme

え•Nulis Menu
logojoker
logolion
logogaming
logogaming2
logoninja
nulis
logotiktok
logowolf

え•Panel Menu
addusr
delusr
listusr
detusr
addsrv
delsrv
listsrv
detsrv
reinstall
updatesrv
startsrv
stopsrv
restartsrv

え•Shoop Menu
alvinshop
topup
buypanel
buyvps
baju
jb

え•Nsfw Menu
ometv

_*UPDATE*_\n
え•Game Menu
All Game

え•Jadi Bot
_Sekarang Hanya Owner Yang Dapat Menggunakan Fitur Ini_`
await conn.sendFile(m.chat, fs.readFileSync('./media/update.jpg'), 'update.jpg', payi, m)
}
handler.command = /^(update)$/i
handler.tags = ['info']
handler.help = ['update']
export default handler