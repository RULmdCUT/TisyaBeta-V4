import util from "util";
import path from "path";

let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, `${ara.getRandom()}`, "ara.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
};
handler.customPrefix = /^(Ara ara|🗿)$/i;
handler.command = new RegExp()

export default handler;

const ara = [
"./media/vn/ara.mp3",
]