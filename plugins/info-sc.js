const _0x5367d4=_0x16de;function _0x16de(_0x3f1228,_0x3426c5){const _0x344295=_0x3442();return _0x16de=function(_0x16de0d,_0x1fd69f){_0x16de0d=_0x16de0d-0x112;let _0x2e4a50=_0x344295[_0x16de0d];return _0x2e4a50;},_0x16de(_0x3f1228,_0x3426c5);}(function(_0x179340,_0x52a3ea){const _0x3af9d4=_0x16de,_0x432848=_0x179340();while(!![]){try{const _0x2d9498=-parseInt(_0x3af9d4(0x125))/0x1+-parseInt(_0x3af9d4(0x11e))/0x2*(-parseInt(_0x3af9d4(0x13e))/0x3)+-parseInt(_0x3af9d4(0x143))/0x4*(-parseInt(_0x3af9d4(0x147))/0x5)+-parseInt(_0x3af9d4(0x134))/0x6*(parseInt(_0x3af9d4(0x199))/0x7)+-parseInt(_0x3af9d4(0x15a))/0x8*(parseInt(_0x3af9d4(0x16d))/0x9)+-parseInt(_0x3af9d4(0x145))/0xa*(-parseInt(_0x3af9d4(0x169))/0xb)+parseInt(_0x3af9d4(0x116))/0xc*(-parseInt(_0x3af9d4(0x14f))/0xd);if(_0x2d9498===_0x52a3ea)break;else _0x432848['push'](_0x432848['shift']());}catch(_0x2fde68){_0x432848['push'](_0x432848['shift']());}}}(_0x3442,0x59b1a));import{promises,readFileSync}from'fs';import{join}from'path';import{xpRange}from'../lib/levelling.js';import _0x10dda from'moment-timezone';import _0xc2e387 from'os';import _0x2c0f93 from'fs';import _0x2a3944 from'node-fetch';import{pickRandom}from'../lib/other-function.js';const defaultMenu={'before':'\x0a*TISYA\x20BETA\x20V4*\x0a\x0a𝙸𝙵\x20𝚈𝙾𝚄\x20𝚆𝙰𝙽𝚃\x20𝚃𝙷𝙸𝚂\x20𝙱𝙾𝚃\x20𝚂𝙲𝚁𝙸𝙿𝚃\x20𝚈𝙾𝚄\x20𝙲𝙰𝙽\x20𝙱𝚄𝚈\x20𝚃𝙷𝙸𝚂\x20𝙿𝚁𝙸𝚅𝙰𝚃𝙴\x20𝙱𝙾𝚃\x20𝚂𝙲𝚁𝙸𝙿𝚃\x20𝙵𝚁𝙾𝙼\x20𝚃𝙷𝙴\x20𝙾𝚆𝙽𝙴𝚁\x0a\x0a𝚂𝙲𝚁𝙸𝙿𝚃\x20𝚃𝙸𝚂𝚈𝙰𝚅4\x20𝙱𝙴𝚃𝙰\x20𝙰𝙳𝙰𝙻𝙰𝙷\x20𝚂𝙲𝚁𝙸𝙿𝚃\x20𝚈𝙶\x20𝙳𝙸\x20𝙺𝙴𝙼𝙱𝙰𝙽𝙶𝙺𝙰𝙽\x20𝙾𝚆𝙽𝙴𝚁\x20𝙱𝙴𝚁𝙽𝙰𝙼𝙰\x20©𝙰𝙻𝚅𝙸𝙽\x20𝚂𝙲𝚁𝙸𝙿𝚃\x20𝙸𝙽𝙸\x20𝙿𝚁𝙸𝚅𝙰𝚃𝙴\x20𝚃𝙸𝙳𝙰𝙺\x20𝙳𝙸\x20𝚂𝙴𝙱𝙰𝚁𝙺𝙰𝙽\x20𝙹𝙸𝙺𝙰\x20𝙸𝙽𝙶𝙸𝙽\x20𝚂𝙲𝚁𝙸𝙿𝚃\x20𝙸𝙽𝙸\x20𝚂𝙸𝙻𝙰𝙷𝙺𝙰𝙽\x20𝙷𝚄𝙱𝚄𝙽𝙶𝙸\x20𝙻𝙰𝙽𝙶𝚂𝚄𝙽𝙶\x20©𝙰𝙻𝚅𝙸𝙽\x0a\x0aYT\x20PENGEMBANG\x0ahttps://www.youtube.com/@vinwert'};let handler=async(_0x26575f,{conn:_0x531023,usedPrefix:_0x506400,__dirname:_0x10fbb9,args:_0x5b6ac5})=>{const _0x102abf=_0x16de;await _0x531023[_0x102abf(0x13f)](_0x26575f[_0x102abf(0x117)],{'react':{'text':'🕒','key':_0x26575f[_0x102abf(0x149)]}});let _0x268fbc=_0x102abf(0x15b),_0x1304d1=_0x102abf(0x1a1),_0x23a5a3='╰╴',_0x191ea7=0x0,_0x2fb5d4=['Kamu\x20nanya?',_0x102abf(0x124),_0x102abf(0x18c),_0x102abf(0x12d),_0x102abf(0x16b),'Proses...',_0x102abf(0x138),_0x102abf(0x148),_0x102abf(0x155)],_0x2efc84=_0x2fb5d4[_0x102abf(0x18f)](),_0x5bf5cc={};try{let _0x3186ec=global[_0x102abf(0x114)],_0x39bce0=global[_0x102abf(0x197)],_0x767dd0=global[_0x102abf(0x177)],_0x47f1a0=global['dmenuf'],_0x318028=global[_0x102abf(0x144)],_0x464583=global[_0x102abf(0x13c)],_0x5d9799=global['cmenuh'],_0x5a639d=global[_0x102abf(0x11b)],_0x27e9e3=global[_0x102abf(0x130)],_0x1c49c5=global[_0x102abf(0x115)],_0x311d81=global[_0x102abf(0x18a)],_0x33ce36=global[_0x102abf(0x174)],_0x5065a3='@'+_0x26575f[_0x102abf(0x158)]['split']('@')[0x0],_0x27ba9d=global['db'][_0x102abf(0x14c)]['users'],_0x2317e9=_0x27ba9d[_0x26575f[_0x102abf(0x158)]],_0x28e623=_0x102abf(0x15b),_0x2d5649='\x20\x20\x20\x20\x20\x20\x20\x20\x20',_0x1dbece='╰╴',_0x3ff365=0x0,_0x4dc2ad=['Kamu\x20nanya?',_0x102abf(0x124),_0x102abf(0x18c),_0x102abf(0x12d),'Tunggu...',_0x102abf(0x195),_0x102abf(0x138),_0x102abf(0x148),_0x102abf(0x155)],_0x31ed63=_0x4dc2ad['getRandom'](),_0x2d2f1c=_0x10dda['tz'](_0x102abf(0x184))[_0x102abf(0x16a)](_0x102abf(0x1a7)),_0x504fbf=_0x10dda['tz'](_0x102abf(0x157))['format']('HH'),_0xfbc65b=_0x10dda['tz']('Asia/Makassar')[_0x102abf(0x16a)]('mm'),_0x1294bf=_0x10dda['tz'](_0x102abf(0x157))['format']('ss'),_0x338c76=_0x10dda['tz'](_0x102abf(0x157))[_0x102abf(0x16a)](_0x102abf(0x1a7)),_0x188310=_0x504fbf+_0x102abf(0x137)+_0xfbc65b+_0x102abf(0x142)+_0x1294bf+'\x20S',_0x5aae27=global[_0x102abf(0x131)]['self']?'Private':_0x102abf(0x16e),_0x555aa0=JSON[_0x102abf(0x183)](await promises[_0x102abf(0x163)](join(_0x10fbb9,_0x102abf(0x17a)))[_0x102abf(0x192)](_0x25f808=>({})))||{},{age:_0x4434cd,exp:_0x20e853,limit:_0x133b25,level:_0x153140,role:_0x24ee70,registered:_0x19c4c0,money:_0x3faa9f}=_0x27ba9d[_0x26575f[_0x102abf(0x158)]],{min:_0xa1ab7e,xp:_0x1cf4cd,max:_0x110952}=xpRange(_0x153140,global[_0x102abf(0x15c)]),_0x4b53a3=await _0x531023[_0x102abf(0x123)](_0x26575f[_0x102abf(0x158)]),_0x38956d=_0x27ba9d[_0x26575f[_0x102abf(0x158)]][_0x102abf(0x132)],_0x50c586=''+(_0x38956d>0x0?_0x102abf(0x187):_0x102abf(0x189)),_0x10369a=_0xc2e387[_0x102abf(0x141)](),_0xedcc8b=''+ucapan(),_0x45c6d2=new Date(new Date()+0x36ee80),_0x188583='id',_0x3f23a5=[_0x102abf(0x153),_0x102abf(0x11f),_0x102abf(0x19a),_0x102abf(0x18d),_0x102abf(0x19b)][Math[_0x102abf(0x182)](_0x45c6d2/0x50ae4c0)%0x5],_0x220a06=_0x45c6d2['toLocaleDateString'](_0x188583,{'weekday':'long'}),_0x19e35f=_0x45c6d2[_0x102abf(0x178)](_0x188583,{'day':_0x102abf(0x140),'month':_0x102abf(0x17f),'year':_0x102abf(0x140)}),_0x332784=Intl[_0x102abf(0x185)](_0x188583+_0x102abf(0x196),{'day':_0x102abf(0x140),'month':_0x102abf(0x17f),'year':'numeric'})['format'](_0x45c6d2),_0x2d43df=_0x45c6d2[_0x102abf(0x18e)](_0x188583,{'hour':_0x102abf(0x140),'minute':_0x102abf(0x140),'second':'numeric'}),_0x4a517a=process['uptime']()*0x3e8,_0x184251;process[_0x102abf(0x18b)]&&(process[_0x102abf(0x18b)](_0x102abf(0x113)),_0x184251=await new Promise(_0x48026f=>{const _0x2e3ba5=_0x102abf;process[_0x2e3ba5(0x170)](_0x2e3ba5(0x1a2),_0x48026f),setTimeout(_0x48026f,0x3e8);})*0x3e8);let _0x55903b=clockString(_0x184251),_0x338d49=clockString(_0x4a517a),_0xbf76b8=Object[_0x102abf(0x15e)](global['plugins'])[_0x102abf(0x1a8)](_0x409678=>_0x409678[_0x102abf(0x16f)]&&_0x409678['tags'])[_0x102abf(0x191)],_0x5ba5bd=Object[_0x102abf(0x198)](_0x27ba9d)[_0x102abf(0x191)],_0x532129=Object[_0x102abf(0x15e)](_0x27ba9d)[_0x102abf(0x1a8)](_0x37956e=>_0x37956e[_0x102abf(0x19f)]==!![])[_0x102abf(0x191)],_0x4d79f5=Object[_0x102abf(0x15e)](global[_0x102abf(0x17b)])[_0x102abf(0x1a8)](_0x8ebfb8=>!_0x8ebfb8[_0x102abf(0x13d)])[_0x102abf(0x1a4)](_0x8f4e2d=>{const _0x2a14d7=_0x102abf;return{'help':Array['isArray'](_0x8f4e2d[_0x2a14d7(0x120)])?_0x8f4e2d['help']:[_0x8f4e2d[_0x2a14d7(0x16f)]],'tags':Array[_0x2a14d7(0x12c)](_0x8f4e2d['tags'])?_0x8f4e2d[_0x2a14d7(0x120)]:[_0x8f4e2d[_0x2a14d7(0x120)]],'prefix':_0x2a14d7(0x172)in _0x8f4e2d,'limit':_0x8f4e2d[_0x2a14d7(0x119)],'premium':_0x8f4e2d[_0x2a14d7(0x16c)],'enabled':!_0x8f4e2d[_0x2a14d7(0x13d)]};});for(let _0x1d765b of _0x4d79f5)if(_0x1d765b&&_0x102abf(0x120)in _0x1d765b){for(let _0x27b228 of _0x1d765b[_0x102abf(0x120)])if(!(_0x27b228 in _0x5bf5cc)&&_0x27b228)_0x5bf5cc[_0x27b228]=_0x27b228;}_0x531023['menu']=_0x531023[_0x102abf(0x126)]?_0x531023[_0x102abf(0x126)]:{};let _0x331dac=_0x531023['menu'][_0x102abf(0x14e)]||defaultMenu[_0x102abf(0x14e)],_0x128e4a=_0x531023['menu'][_0x102abf(0x17d)]||defaultMenu['footer'],_0x3a7ad3=_0x531023[_0x102abf(0x126)][_0x102abf(0x193)]||(_0x531023[_0x102abf(0x194)]['jid']==global[_0x102abf(0x122)][_0x102abf(0x194)][_0x102abf(0x12a)]?'':_0x102abf(0x12e)+global[_0x102abf(0x122)][_0x102abf(0x194)][_0x102abf(0x12a)][_0x102abf(0x128)]`@`[0x0])+defaultMenu['after'],_0x61f02e=[_0x331dac][_0x102abf(0x135)](),_0x20f478=typeof _0x531023['menu']==_0x102abf(0x168)?_0x531023['menu']:typeof _0x531023[_0x102abf(0x126)]==_0x102abf(0x121)?_0x61f02e:'',_0x84c67a={'%':'%','p':_0x506400,'uptime':_0x338d49,'muptime':_0x55903b,'me':_0x531023[_0x102abf(0x123)](_0x531023[_0x102abf(0x194)]['jid']),'npmname':_0x555aa0[_0x102abf(0x151)],'npmdesc':_0x555aa0[_0x102abf(0x139)],'version':_0x555aa0['version'],'exp':_0x20e853-_0xa1ab7e,'maxexp':_0x1cf4cd,'totalexp':_0x20e853,'xp4levelup':_0x110952-_0x20e853,'github':_0x555aa0[_0x102abf(0x112)]?_0x555aa0[_0x102abf(0x112)][_0x102abf(0x127)]||_0x555aa0[_0x102abf(0x112)]:_0x102abf(0x152),'tag':_0x5065a3,'dash':_0x3186ec,'m1':_0x39bce0,'m2':_0x767dd0,'m3':_0x47f1a0,'m4':_0x318028,'cc':_0x464583,'c1':_0x5d9799,'c2':_0x5a639d,'c3':_0x27e9e3,'c4':_0x1c49c5,'lprem':_0x311d81,'llim':_0x33ce36,'ucpn':_0xedcc8b,'platform':_0x10369a,'wita':_0x338c76,'mode':_0x5aae27,'_p':_0x506400,'money':_0x3faa9f,'age':_0x4434cd,'tag':_0x5065a3,'name':_0x4b53a3,'prems':_0x50c586,'level':_0x153140,'limit':_0x133b25,'name':_0x4b53a3,'weton':_0x3f23a5,'week':_0x220a06,'date':_0x19e35f,'dateIslamic':_0x332784,'time':_0x2d43df,'totalreg':_0x5ba5bd,'totalfeatures':_0xbf76b8,'rtotalreg':_0x532129,'role':_0x24ee70,'readmore':readMore};_0x20f478=_0x20f478[_0x102abf(0x118)](new RegExp('%('+Object[_0x102abf(0x198)](_0x84c67a)[_0x102abf(0x19c)]((_0x4a805c,_0xb3bce0)=>_0xb3bce0[_0x102abf(0x191)]-_0x4a805c['length'])['join']`|`+')','g'),(_0x4b0eb3,_0x1b8354)=>''+_0x84c67a[_0x1b8354]);const _0x3bc90=await _0x531023[_0x102abf(0x161)](_0x531023[_0x102abf(0x194)][_0x102abf(0x12a)])['catch'](_0x310a21=>_0x102abf(0x13b));let _0x3f2830=pickRandom(global[_0x102abf(0x14a)]),_0x54b5ac=_0x102abf(0x17e),_0x32f638='./tumnil/2.jpg',_0x1705cf=_0x102abf(0x15f),_0x40783d=_0x102abf(0x164),_0x2c42ac='./tumnil/5.jpg',_0x31bb60=''+pickRandom([_0x54b5ac,_0x32f638,_0x1705cf,_0x40783d,_0x2c42ac]),_0x427025=[_0x102abf(0x180),_0x102abf(0x154),_0x102abf(0x156),_0x102abf(0x1a0),_0x102abf(0x179),'https://c.top4top.io/p_1962qiubc1.jpg',_0x102abf(0x11c),'https://l.top4top.io/p_1962i85aq1.jpg',_0x102abf(0x150),_0x102abf(0x129),_0x102abf(0x166),_0x102abf(0x146),_0x102abf(0x13a),_0x102abf(0x186),_0x102abf(0x133),_0x102abf(0x1a6),_0x102abf(0x1a5),_0x102abf(0x160),_0x102abf(0x181),_0x102abf(0x14b)],_0x25b02e=pickRandom(_0x427025),_0x1c6c0c=pickRandom(global['Pallmenu']);await _0x531023[_0x102abf(0x171)](_0x26575f['chat'],{'requestPaymentMessage':{'currencyCodeIso4217':'IDR','amount1000':0xd6d8*0x3e8,'requestFrom':_0x102abf(0x159),'noteMessage':{'extendedTextMessage':{'text':_0x20f478,'contextInfo':{'mentionedJid':[_0x26575f[_0x102abf(0x158)]],'externalAdReply':{'showAdAttribution':!![]}}}}}},{}),await _0x531023['sendReact'](_0x26575f[_0x102abf(0x117)],'☑️',_0x26575f[_0x102abf(0x149)]),await _0x531023[_0x102abf(0x12f)](_0x26575f[_0x102abf(0x117)],_0x102abf(0x12b),'',null,_0x26575f,!![]);}catch(_0x18e8bd){await _0x531023[_0x102abf(0x19d)](_0x26575f[_0x102abf(0x117)],_0x102abf(0x11a),_0x26575f);throw _0x18e8bd;}};handler['help']=['sc'],handler['tags']=[_0x5367d4(0x11d)],handler[_0x5367d4(0x165)]=/^(sc|sourcecode)$/i;export default handler;function _0x3442(){const _0x1191d5=['jid','./media/vn/vinsc.mp3','isArray','Menampilkan...','Powered\x20by\x20https://wa.me/','sendFile','cmenuf','opts','premiumTime','https://b.top4top.io/p_1962vpyp71.jpg','6yfJqsz','join','fromCharCode','\x20H\x20','Loading...','description','https://d.top4top.io/p_1962847na1.jpg','./src/avatar_contact.png','cmenut','disabled','981234fGFeEM','sendMessage','numeric','platform','\x20M\x20','4IknAMO','dmenub2','10ojztSA','https://e.top4top.io/p_1962nvj4g1.jpg','3472455ZtGEYx','Bertanya..','key','AraChu2','https://i.top4top.io/p_1962p9nlk1.jpg','data','\x20S\x20','before','13naoUos','https://i.top4top.io/p_19629cg431.jpg','name','[unknown\x20github\x20url]','Pahing','https://k.top4top.io/p_1962w2hyp1.jpg','Hooh...','https://j.top4top.io/p_1962ufc7p1.jpg','Asia/Makassar','sender','0@s.whatsapp.net','9144iKNDmb','\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','multiplier','toString','values','./tumnil/3.jpg','https://l.top4top.io/p_19625eppj1.jpg','profilePictureUrl','Good\x20Afternoon\x20🌇','readFile','./tumnil/4.jpg','command','https://f.top4top.io/p_1962vn5rc1.jpg','Good\x20Afternoon\x20☀️','string','3633443eeAIwH','format','Tunggu...','premium','603zJKcPm','Publik','help','once','relayMessage','customPrefix','\x20*Minute\x20⏰*\x0a','lolm','padStart','Good\x20Morning\x20🌄','dmenub','toLocaleDateString','https://d.top4top.io/p_1962ahcw21.jpg','../package.json','plugins','\x20*Hours\x20🕐*\x0a','footer','./tumnil/1.jpg','long','https://a.top4top.io/p_1962cau3w1.jpg','https://j.top4top.io/p_196252lk91.jpg','floor','parse','Asia/Jakarta','DateTimeFormat','https://c.top4top.io/p_1962tt38s1.jpg','Premium','Good\x20Night\x20🌙','Free','lopr','send','Thanks..','Kliwon','toLocaleTimeString','getRandom','\x20*Days\x20☀️*\x0a','length','catch','after','user','Proses...','-TN-u-ca-islamic','dmenut','keys','2040626dMPFXo','Wage','Legi','sort','reply','Selamat\x20DiniHari\x20☀️','registered','https://h.top4top.io/p_19629eev81.jpg','\x20\x20\x20\x20\x20\x20\x20\x20\x20','message','repeat','map','https://k.top4top.io/p_1962q7ura1.jpg','https://a.top4top.io/p_1962fyik51.jpg','HH:mm:ss','filter','homepage','uptime','dashmenu','cmenua','1684872TVLhJN','chat','replace','limit','Maaf,\x20menu\x20sedang\x20error','cmenub','https://b.top4top.io/p_1962ck87p1.jpg','info','2DPSCxb','Pon','tags','object','conn','getName','No\x20spam...','475991VtgBHY','menu','url','split','https://g.top4top.io/p_1962o5sp41.jpg'];_0x3442=function(){return _0x1191d5;};return _0x3442();}const more=String[_0x5367d4(0x136)](0x200e),readMore=more[_0x5367d4(0x1a3)](0xfa1);function clockString(_0x91032b){const _0x49c382=_0x5367d4;let _0x5b3639=isNaN(_0x91032b)?'--':Math[_0x49c382(0x182)](_0x91032b/0x36ee80),_0x372da3=isNaN(_0x91032b)?'--':Math['floor'](_0x91032b/0xea60)%0x3c,_0x4e8588=isNaN(_0x91032b)?'--':Math[_0x49c382(0x182)](_0x91032b/0x3e8)%0x3c;return[_0x5b3639,_0x49c382(0x137),_0x372da3,'\x20M\x20',_0x4e8588,_0x49c382(0x14d)][_0x49c382(0x1a4)](_0x5e114e=>_0x5e114e['toString']()[_0x49c382(0x175)](0x2,0x0))[_0x49c382(0x135)]('');}function clockStringP(_0x21c32f){const _0x390fce=_0x5367d4;let _0x3fb53a=isNaN(_0x21c32f)?'--':Math[_0x390fce(0x182)](_0x21c32f/0x73df16000)%0xa,_0x46fdeb=isNaN(_0x21c32f)?'--':Math[_0x390fce(0x182)](_0x21c32f/0x9a7ec800)%0xc,_0x18b784=isNaN(_0x21c32f)?'--':Math[_0x390fce(0x182)](_0x21c32f/0x5265c00)%0x1e,_0x420cd1=isNaN(_0x21c32f)?'--':Math[_0x390fce(0x182)](_0x21c32f/0x36ee80)%0x18,_0x1db3be=isNaN(_0x21c32f)?'--':Math[_0x390fce(0x182)](_0x21c32f/0xea60)%0x3c,_0x32d356=isNaN(_0x21c32f)?'--':Math['floor'](_0x21c32f/0x3e8)%0x3c;return[_0x3fb53a,'\x20*Years\x20🗓️*\x0a',_0x46fdeb,'\x20*Month\x20🌙*\x0a',_0x18b784,_0x390fce(0x190),_0x420cd1,_0x390fce(0x17c),_0x1db3be,_0x390fce(0x173),_0x32d356,'\x20*Second\x20⏱️*'][_0x390fce(0x1a4)](_0x2bdbae=>_0x2bdbae[_0x390fce(0x15d)]()['padStart'](0x2,0x0))['join']('');}function ucapan(){const _0x2ceef1=_0x5367d4,_0x280103=_0x10dda['tz'](_0x2ceef1(0x157))[_0x2ceef1(0x16a)]('HH');let _0x56f37a=_0x2ceef1(0x19e);return _0x280103>=0x4&&(_0x56f37a=_0x2ceef1(0x176)),_0x280103>=0xa&&(_0x56f37a=_0x2ceef1(0x167)),_0x280103>=0xf&&(_0x56f37a=_0x2ceef1(0x162)),_0x280103>=0x12&&(_0x56f37a=_0x2ceef1(0x188)),_0x56f37a;}