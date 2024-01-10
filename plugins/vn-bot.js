import util from "util";
import path from "path";

let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, `${audio.getRandom()}`, "alvin.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
};
handler.customPrefix = /^(vin|pin)$/i;
handler.command = new RegExp();

export default handler;

const audio = [
	"./vn/alvin.mp3",
];