process.on('uncaughtException', console.error) //Safe Log Error
//────────────────────[ MODULE EXPONTS ]────────────────────
require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const cheerio = require('cheerio')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const fetch = require('node-fetch')
const os = require('os')
const hx = require('hxz-api')
const xa = require('xfarr-api')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
const { limitAdd, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require("./lib/limit")
const _limitOrg = JSON.parse(fs.readFileSync('./database/limit.json'))
const level = require('./lib/level')
const { mediafireDl } = require('./lib/mediafire.js')

//────────────────────[ LETAK API ]────────────────────
const setting = JSON.parse(fs.readFileSync('./apikey.json'))

//────────────────────[ BUAT INFO ]────────────────────
limitawal = '100'
botname = 'KeniBotz'
wm = 'KeniBotz'
limitCount = setting.limit

//────────────────────[ READ DATABASE ]────────────────────
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []
const limit = JSON.parse(fs.readFileSync('./database/limit.json'))
const antiwame = JSON.parse(fs.readFileSync('./database/antiwame.json'))
const antilinkyt = JSON.parse(fs.readFileSync('./database/antilinkyt.json'))
const antibule = JSON.parse(fs.readFileSync('./database/antibule.json'))
const balance = JSON.parse(fs.readFileSync('./database/balance.json'))
const premium = JSON.parse(fs.readFileSync('./database/premium.json'))
const _level = JSON.parse(fs.readFileSync('./database/level.json'))
const banned = JSON.parse(fs.readFileSync('./database/banned.json'))

//────────────────────[ BATAS UCAPAN ]────────────────────

module.exports = seina = async (seina, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await seina.decodeJid(seina.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const sender = m.sender
        const isBan = banned.includes(m.sender)
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
	
        //────────────────────[ GROUP ]────────────────────
        const groupMetadata = m.isGroup ? await seina.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const isAntiwame = m.isGroup ? antiwame.includes(m.chat) : true
        const isAntilinkyt = m.isGroup ? antilinkyt.includes(m.chat) : true
        const isAntibule = m.isGroup ? antibule.includes(m.chat) : true
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false

//tanggalan e alya

const timuu = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const hariRaya = new Date('Apr 02, 2022 01:45:00')
const sekarang = new Date().getTime();
const Selisih = hariRaya - sekarang;
const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24));
const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
const mmmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60));
const ddetik = Math.floor( Selisih % (1000 * 60) / 1000);
const ultah = `${jhari}Hari ${jjam}Jam ${mmmenit}Menit ${ddetik}Detik`
var date = new Date();
var tahun = date.getFullYear();
var bulan1 = date.getMonth();
var ikiya = date.getMonth()
var gakroh = date.getDate();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
var waktoo = date.getHours();
switch(hari) {
case 0: hari = "Minggu"; //limitAdd(sender, limit)
break;
case 1: hari = "Senin"; //limitAdd(sender, limit)
break;
case 2: hari = "Selasa"; //limitAdd(sender, limit)
break;
case 3: hari = "Rabu"; //limitAdd(sender, limit)
break;
case 4: hari = "Kamis"; //limitAdd(sender, limit)
break;
case 5: hari = "Jum`at"; //limitAdd(sender, limit)
break;
case 6: hari = "Sabtu"; //limitAdd(sender, limit)
break;
}
switch(bulan1) {
case 0: bulan1 = "Januari"; //limitAdd(sender, limit)
break;
case 1: bulan1 = "Februari"; //limitAdd(sender, limit)
break;
case 2: bulan1 = "Maret"; //limitAdd(sender, limit)
break;
case 3: bulan1 = "April"; //limitAdd(sender, limit)
break;
case 4: bulan1 = "Mei"; //limitAdd(sender, limit)
break;
case 5: bulan1 = "Juni"; //limitAdd(sender, limit)
break;
case 6: bulan1 = "Juli"; //limitAdd(sender, limit)
break;
case 7: bulan1 = "Agustus"; //limitAdd(sender, limit)
break;
case 8: bulan1 = "September"; //limitAdd(sender, limit)
break;
case 9: bulan1 = "Oktober"; //limitAdd(sender, limit)
break;
case 10: bulan1 = "November"; //limitAdd(sender, limit)
break;
case 11: bulan1 = "Desember"; //limitAdd(sender, limit)
break;
}
switch(gakroh) {
case 0: gakroh = "muharram"; //limitAdd(sender, limit)
break;
case 1: gakroh = "safar"; //limitAdd(sender, limit)
break;
case 2: gakroh = "rabi'ul-awal"; //limitAdd(sender, limit)
break;
case 3: gakroh = "rabi'ul-akhir"; //limitAdd(sender, limit)
break;
case 4: gakroh = "syawal"; //limitAdd(sender, limit)
break;
case 5: gakroh = "jumadil-akhir"; //limitAdd(sender, limit)
break;
case 6: gakroh = "rejab"; //limitAdd(sender, limit)
break;
case 7: gakroh = "syaaban"; //limitAdd(sender, limit)
break;
case 8: gakroh = "ramadhan"; //limitAdd(sender, limit)
break;
case 9: gakroh = "jumadil awal"; //limitAdd(sender, limit)
break;
}
var tampilTanggal = "" + hari + ", " + tanggal + " " + bulan1 + " " + tahun;
var tampilWaktu = "" + jam + ":" + menit + ":" + detik ;   
myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
myDays = ['Minggu','Senin','Selasa','Rabu','Kamis',"Jum'at",'Sabtu'];
myDoms = ["muharram","safar","rabi'ul awal","rabi'ul akhir","syawal","jumadil akhir","rejab","syaaban","ramadhan","jumadil awal"];
var tgl = new Date();
detik = tgl.getSeconds();
menit = tgl.getMinutes();
jam = tgl.getHours();
var ampm = jam >= 12 ? 'PM' : 'AM';
var day = tgl.getDate()
bulan = tgl.getMonth()
var thisDay = tgl.getDay(),
thisDay = myDays[thisDay];
var yy = tgl.getYear()
var year = (yy < 1000) ? yy + 1900 : yy;
const ini_tanggal = `${day} - ${myMonths[bulan]} - ${year}`

// UCAPAN LEMBUT
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapannya2 = `Selamat Malam 🌒`
}
if(time2 < "19:00:00"){
var ucapannya2 = `Selamat Malam 🌙`
}
if(time2 < "18:00:00"){
var ucapannya2 = `Selamat Sore 🌅`
}
if(time2 < "15:00:00"){
var ucapannya2 = `Selamat Siang 🌞`
}
if(time2 < "10:00:00"){
var ucapannya2 = `Selamat Pagi 🌄`
}
if(time2 < "05:00:00"){
var ucapannya2 = `Selamat Pagi 🌅`
}

//function rpg
   const { 
     addInventoriDarah, 
      cekDuluJoinAdaApaKagaDiJson, 
      addDarah, 
      kurangDarah, 
     getDarah 
   }  = require('./storage/user/darah.js')
   const { 
     cekInventoryAdaAtauGak, 
      addInventori,  
       addBesi, 
       addEmas, 
       addEmerald,
       addUmpan,
       addPotion,
       kurangBesi, 
       kurangEmas, 
       kurangEmerald, 
       kurangUmpan,
       kurangPotion,
       getBesi, 
      getEmas, 
     getEmerald,
     getUmpan,
    getPotion
   } = require('./storage/user/alat_tukar.js')
   const { 
    addInventoriMonay, 
    cekDuluJoinAdaApaKagaMonaynyaDiJson, 
    addMonay, 
    kurangMonay, 
   getMonay 
   } = require('./storage/user/monay.js')
   const { 
    addInventoriLimit, 
    cekDuluJoinAdaApaKagaLimitnyaDiJson, 
    addLimit, 
    kurangLimit, 
    getLimit 
   } = require('./storage/user/limit.js')
   const { 
    cekDuluHasilBuruanNya, 
     addInventoriBuruan, 
     addIkan,
      addAyam, 
      addKelinci, 
      addDomba, 
      addSapi,
      addGajah,
      kurangIkan,
      kurangAyam, 
      kurangKelinci, 
      kurangDomba, 
      kurangSapi,
      kurangGajah,
      getIkan,
      getAyam, 
      getKelinci, 
      getDomba,
     getSapi,
    getGajah
   } = require('./storage/user/buruan.js')
   let DarahAwal =  global.rpg.darahawal
   const isDarah = cekDuluJoinAdaApaKagaDiJson(m.sender)   
   const isCekDarah = getDarah(m.sender)
   const isUmpan = getUmpan(m.sender)
   const isPotion = getPotion(m.sender)
   const isIkan = getIkan(m.sender)
   const isAyam = getAyam(m.sender)
   const isKelinci = getKelinci(m.sender)
   const isDomba = getDomba(m.sender)
   const isSapi = getSapi(m.sender)
   const isGajah = getGajah(m.sender)
   const isMonay = getMonay(m.sender)
   const isLimit = getLimit(m.sender)
   const isBesi = getBesi(m.sender)
   const isEmas = getEmas(m.sender)
   const isEmerald = getEmerald(m.sender)
   const isInventory = cekInventoryAdaAtauGak(m.sender)
   const isInventoriBuruan = cekDuluHasilBuruanNya(m.sender)
   const isInventoryLimit = cekDuluJoinAdaApaKagaLimitnyaDiJson(m.sender)
   const isInventoryMonay = cekDuluJoinAdaApaKagaMonaynyaDiJson(m.sender)
   const ikan = ['🐟','🐠','🐡']   

// Database Rpg
 let _limit = JSON.parse(fs.readFileSync('./storage/user/limit.json'));
 let _buruan = JSON.parse(fs.readFileSync('./storage/user/hasil_buruan.json'));
 let _darahOrg = JSON.parse(fs.readFileSync('./storage/user/darah.json'))
 let monay = JSON.parse(fs.readFileSync('./storage/user/monay.json'))

// random 

let mealya = fs.readFileSync('./lib/namaku.js')
jsonLiya = JSON.parse(mealya)
randIndex = Math.floor(Math.random() * jsonLiya.length)
randek = jsonLiya[randIndex];

// Random Image Simple Menu

        let picaks = [flaming,fluming,flarun,flasmurf,mehk,awog,mohai,mhehe]
		let picak = picaks[Math.floor(Math.random() * picaks.length)] 	
		
// ajajajakakk				
 						
	try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
    
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
                if (!('antilinkyt' in chats)) chats.antilinkyt = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
                antilinkyt: false,
            }
		
	    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
		if (!('templateImage' in setting)) setting.templateImage = true
		if (!('templateLocation' in setting)) setting.templateLocation = false
		if (!('templateGif' in setting)) setting.templateGif = false
		if (!('templateMsg' in setting)) setting.templateMsg = false
        if (!('templateList' in setting)) setting.templateList = false
        if (!('templateDoc' in setting)) setting.templateDoc = false
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
		templateImage: true,
		templateLocation: false,
		templateGif: false,
		templateMsg: false,
		templateList: false,
		templateDoc: false,
	    }
	    
        } catch (err) {
            console.error(err)
        }
	    
        //────────────────────[ PUBLIC & SELF ]────────────────────
        if (!seina.public) {
            if (!m.key.fromMe) return
        }

        // Push Message To Console && Auto Read
        if (m.message) {
            seina.sendReadReceipt(m.chat, m.sender, [m.key.id])
            console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
	
	//Auto reset
  //Jika bot on di jam 24.00 maka limit dan darah bakal reset
  //Kalo off yaa kaga, Harus tunggu besok :v    
  let cron = require('node-cron')
     cron.schedule('0 0 * * *', () => {
     const reset = []
     _limit = reset
     console.log('Limit Di reset')
     fs.writeFileSync('./storage/user/limit.json', JSON.stringify(_limit))
     console.log('Success!')
    }, 
    {
      scheduled: true,
      timezone: 'Asia/Jakarta'
     }
    )
//thum
vide = await getBuffer(global.vid)

//downloader
const sendFile = async(link, type, options) => {
hasil = await getBuffer(link)
seina.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
seina.sendMessage(from, hasil, type, options).catch(e => {
seina.sendMessage(from, { url : link }, type, options).catch(e => {
m.reply('ERROR [ ! ]')
console.log(e)
})
})
})
})
}

//dokumen random
let doku = [f1,f2,f3,f4,f5,f6]
let feler = doku[Math.floor(Math.random() * doku.length)]
		
// limiter
const nebal = (angka) => {
return Math.floor(angka)
}
function randomNomor(angka){
return Math.floor(Math.random() * angka) + 1
}

// Monospace

function monospace(string) {
return '```' + abantyulidab+ '```'

} 
 
//────────────────────[ lvlig ]────────────────────
  
const levelRole = level.getLevelingLevel(m.sender, _level)
        var role = 'Warrior III'
        if (levelRole <= 5) {
            role = 'Warrior II'
        } else if (levelRole <= 10) {
            role = 'Warrior I'
        } else if (levelRole <= 15) {
            role = 'Elite III'
        } else if (levelRole <= 20) {
            role = 'Elite II'
        } else if (levelRole <= 25) {
            role = 'Elite I'
        } else if (levelRole <= 30) {
            role = 'Master III'
        } else if (levelRole <= 35) {
            role = 'Master II'
        } else if (levelRole <= 40) {
            role = 'Master I'
        } else if (levelRole <= 45) {
            role = 'GrandMaster III'
        } else if (levelRole <= 50) {
            role = 'GrandMaster II'
        } else if (levelRole <= 55) {
            role = 'GrandMaster I'
        } else if (levelRole <= 60) {
            role = 'Epic III'
        } else if (levelRole <= 65) {
            role = 'Epic II'
        } else if (levelRole <= 70) {
            role = 'Epic I'
        } else if (levelRole <= 75) {
            role = 'Legend III'
        } else if (levelRole <= 80) {
            role = 'Legend II'
        } else if (levelRole <= 85) {
            role = 'Legend I'
        } else if (levelRole <= 90) {
            role = 'Mythic'
        } else if (levelRole <= 95) {
            role = 'Mythical Glory' 
        } else if (levelRole >= 100) {
            role = 'Immortal'
        } else if (levelRole >= 120) {
            role = 'MVP'
        } 
                      
// FUNCTION LEVELING

       if (m.isGroup && !level.isGained(m.sender) && !isCmd) {      
       try {
       level.addCooldown(m.sender)       
       const currentLevel = level.getLevelingLevel(m.sender, _level)
       const amountXp = Math.floor(Math.random() * (15 - 25 + 1) + 20)
       const requiredXp = 10 * Math.pow(currentLevel, 2) + 50 * currentLevel + 100
       level.addLevelingXp(m.sender, amountXp, _level)
       if (requiredXp <= level.getLevelingXp(m.sender, _level)) {
       level.addLevelingLevel(sender, 1, _level)
       const userLevel = level.getLevelingLevel(m.sender, _level)
       const fetchXp = 10 * Math.pow(userLevel, 2) + 50 * userLevel + 100
       rep = `*「 LEVEL UP 」*\n\n➸ *Nama :* ${pushname}\n➸ *Xp :* ${level.getLevelingXp(m.sender, _level)} / ${fetchXp}\n➸ *Level :* ${currentLevel} -> ${level.getLevelingLevel(m.sender, _level)} 🆙 \n➸ *Role*: *${role}*\n\nCongrats!! 🎉🎉`
       m.reply(`${rep}`)

      // client.sendMessage(from, gambare, image, {caption: `${rep}`, quoted: rip}).catch((err) => reply(`*Maaf terjadi kesalaahan,silahkan coba lagi nanti*`))
} 
       } catch (err) {
       console.error(err)
}
}        
                     
// FUNCTION LEVELING
                            
	// auto set bio
	if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await seina.setStatus(`${seina.user.name} | Runtime : ${runtime(uptime)}`)
		setting.status = new Date() * 1
	    }
	}

const listmsg = (from, title, desc, list) => { // ngeread nya pake rowsId, jadi command nya ga keliatan
            let po = seina.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "Pilih Disini","footerText": "𝐻𝑒𝑟𝑚𝑎𝑛 𝐶ℎ𝑎𝑛𝑒𝑙᭄𓅂","listType": "SINGLE_SELECT","sections": list, quoted:mek}}, {})
            return seina.relayWAMessage(po, {waitForAck: true, quoted:mek})
        }
	    
	  // Anti Link
        if (db.data.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        m.reply(`「 ANTI LINK 」\n\nKamu terdeteksi mengirim link group, maaf kamu akan di kick !`)
        if (!isBotAdmins) return m.reply(`Ehh bot gak admin T_T`)
        let gclink = (`https://chat.whatsapp.com/`+await seina.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return m.reply(`Ehh maaf gak jadi, karena kamu ngirim link group ini`)
        if (isAdmins) return m.reply(`Ehh maaf kamu admin`)
        if (isCreator) return m.reply(`Ehh maaf kamu owner bot ku`)
        seina.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }

// AntiWame

if (!isAntiwame) {
if (!isBotAdmins) return m.reply('bot harus jadi admin')
if (budy.includes(`https://wa.me/`)) {
m.reply(`\`\`\`「 Anti Wame Terdeteksi 」\`\`\`\n\nAnda tidak di kick, karena nomor yang anda kirim ada di grup ini`)
if (isAdmins) return m.reply(`Ehh maaf kamu admin`)
if (isCreator) return m.reply(`Ehh maaf kamu owner bot ku`)
kice = m.sender
await seina.groupParticipantsUpdate(m.chat, [kice], 'remove').then((res) => ads(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
seina.sendMessage(m.chat, {text:`\`\`\`「 Anti Wa Me 」\`\`\`\n\n@${kice.split("@")[0]} Telah dikick karena send link wame di group ini`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
}
}

// AntilinkYt
if (!isAntilinkyt) {
if (!isBotAdmins) return m.reply('bot harus jadi admin')
if (budy.includes(`https://nando.com`)) {
m.reply(`\`\`\`「 Antilink Youtube Terdeteksi 」\`\`\`\n\nMaaf ${botname} akan mengeluarkan kamu karena yang anda kirim adalah link youtube di group ini`)
if (isAdmins) return m.reply(`Ehh maaf kamu admin`)
 if (isCreator) return m.reply(`Ehh maaf kamu owner bot ku`)
kice = m.sender
await seina.groupParticipantsUpdate(m.chat, [kice], 'remove').then((res) => ads(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
seina.sendMessage(m.chat, {text:`\`\`\`「 Antilink Youtube Terdeteksi 」\`\`\`\n\n@${kice.split("@")[0]} Telah dikick karena send link youtube di group ini`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
}
}

/// Anti Bule
if (!isAntibule) {
if (!isBotAdmins) return m.reply('bot harus jadi admin')
if (m.sender.includes(`+212`)) {
m.reply(`\`\`\`「 Anti Bule Terdeteksi 」\`\`\`\n\nMaaf ${botname} akan mengeluarkan kamu karena kamu orang asing di group ini`)
if (isAdmins) return m.reply(`Ehh maaf kamu admin`)
if (isCreator) return m.reply(`Ehh maaf kamu owner bot ku`)
kice = m.sender
await seina.groupParticipantsUpdate(m.chat, [kice], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
seina.sendMessage(m.chat, {text:`\`\`\`「 Anti Bule Terdeteksi 」\`\`\`\n\n@${kice.split("@")[0]} Kamu tidak seharusnya ada di group ini`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
}
}
               
      // Mute Chat
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }

        // Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: seina.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, seina.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        seina.ev.emit('messages.upsert', msg)
        }
	    
	if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            seina.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await seina.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar Bonus +500 money🎉\n\nIngin bermain lagi? tekan button dibawah`, seina.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
             } else m.reply('*Jawaban Salah!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await seina.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar +500 money🎉\n\nIngin bermain lagi? tekan button dibawah`, seina.user.name, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
9
        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await seina.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar +500 money🎉\n\nIngin bermain lagi? tekan button dibawah`, seina.user.name, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await seina.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar +500 money🎉\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, seina.user.name, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await seina.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar +500 money🎉\n\nIngin bermain lagi? tekan button dibawah`, seina.user.name, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await seina.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar +500 money🎉\n\nIngin bermain lagi? tekan button dibawah`, seina.user.name, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await seina.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar +500 money🎉\n\nIngin bermain lagi? tekan button dibawah`, seina.user.name, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
        
        //TicTacToe
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // m.reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { // nek wayahku
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    m.reply({
	    '-3': 'Game telah berakhir',
	    '-2': 'Invalid',
	    '-1': 'Posisi Invalid',
	    0: 'Posisi Invalid',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await seina.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await seina.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
	    seina.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    seina.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) seina.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    if (!roof.pilih2) seina.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) seina.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    seina.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /gunting/i
	    let b = /batu/i
	    let k = /kertas/i
	    let reg = /^(gunting|batu|kertas)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih2) seina.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih) seina.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    seina.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            m.reply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            m.reply(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
	    
        switch(command) {
	    case 'afk': {
	    if (isBan) throw mess.ban
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                m.reply(`${m.pushName} Telah Afk${text ? ': ' + text : ''}`)
            }
            break	
        case 'ttc': case 'ttt': case 'tictactoe': {
        if (isBan) throw mess.ban
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            m.reply('Partner ditemukan!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
            if (room.x !== room.o) await seina.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await seina.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            m.reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case 'delttc': case 'delttt': {
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            seina.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
            } else if (!this.game) {
            m.reply(`Session TicTacToe🎮 tidak ada`)
            } else throw '?'
            } catch (e) {
            m.reply('rusak')
            }
            }
            break
            case 'suitpvp': case 'suit': {
            if (isBan) throw mess.ban
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
	    if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`)
            if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
            this.suit[id] = {
            chat: await seina.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) seina.sendText(m.chat, `_Waktu suit habis_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
            case 'berburu':{
if (isBan) throw mess.ban            
if (q.includes('--help')) return m.reply(examkosong) 
 //Peringatan!!!!, ini buatan rifza. jangan claim punya lu:)
 if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
 if (isCekDarah < 1) return m.reply('Darah kamu habis, cobalah heal menggunakan potion') 
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
  let luka = ["Tertusuk duri saat berburu","Terpeleset ke jurang saat berburu","Tercakar hewan buas","Tidak berhati-hati","Terjerat akar","Terjatuh saat berburu"]
  let location = ["Hutan rimba","Hutan Amazon","Hutan tropis","Padang rumput","Hutan afrika","Pegunungan"]
   var ikanmu = Math.ceil(Math.random() * 10)
   var ayam = Math.ceil(Math.random() * 8)
   var kelinci = Math.ceil(Math.random() * 7)
   var dombanya = [3,0,4,0,5,4,6,0,1,0,2,3,0,3,0,1]
   var sapinya = [2,0,3,0,4,0,5,0,1,0,2,0,3,0,1]
   var gajahnya = [1,0,4,0,2,0,1,0,2,1,3,0,1]
   var domba = dombanya[Math.floor(Math.random() * dombanya.length)] 
   var sapi = sapinya[Math.floor(Math.random() * sapinya.length)] 
   var gajah = gajahnya[Math.floor(Math.random() * gajahnya.length)]    
   var lukanya = luka[Math.floor(Math.random() * luka.length)]
   var lokasinya = location[Math.floor(Math.random() * location.length)]
 if (lokasinya === 'Hutan rimba') {
    var image = './storage/image/rimba.jpg'
   } else
 if (lokasinya === 'Hutan Amazon') {
    var image =  './storage/image/amazon.jpg'
   } else
 if (lokasinya === 'Hutan tropis') {
    var image = './storage/image/tropis.jpg'
   } else
 if (lokasinya === 'Padang rumput') {
    var image = './storage/image/padang_rumput.jpg'
   } else
 if (lokasinya === 'Hutan afrika') {
    var image = './storage/image/afrika.jpg'
   } else
 if (lokasinya === 'Pegunungan') {
   var image = './storage/image/pegunungan.jpg'
   }
 setTimeout( () => {
  let teksehmazeh = `_[ HASIL BURUAN ]_\n`
     teksehmazeh += `*🐟Ikan* : ${ikanmu}\n`
     teksehmazeh += `*🐔Ayam* : ${ayam}\n`
     teksehmazeh += `*🐇Kelinci* : ${kelinci}\n`
     teksehmazeh += `*🐑Domba* : ${domba}\n`
     teksehmazeh += `*🐄Sapi* : ${sapi}\n`
     teksehmazeh += `*🐘Gajah* : ${gajah}\n\n`
     teksehmazeh += `_[ INFO ]_\n`
     teksehmazeh += `*Lokasi* : ${lokasinya}\n`
     teksehmazeh += `*Terluka* : ${lukanya}, darah - 10\n`
     teksehmazeh += `*Sisa darah* : ${getDarah(m.sender)}\n`
    let buttons = [
      {
       buttonId: `${prefix + command}`, 
       buttonText: {
        displayText: 'Berburu lagi️🏹'
      }, type: 1},
    ]
    let buttonMessage = {
      image: { url: image },
      caption: teksehmazeh,
      footer: pushname,
      buttons: buttons,
      headerType: 4
     }
     seina.sendMessage(m.chat, buttonMessage, { quoted: m })      
  }, 5000)  
 setTimeout( () => {
  lah = `@${m.sender.split("@")[0]} Mulai berburu di ${lokasinya}`
  kic = m.sender 
  seina.sendMessage(m.chat, {text:`${lah}`, contextInfo:{mentionedJid:[kic]}}, {quoted:m})
  }, 1000) 
 addIkan(m.sender, ikanmu) 
   addAyam(m.sender, ayam) 
   addKelinci(m.sender, kelinci)
   addDomba(m.sender, domba)
   addSapi(m.sender, sapi)
  addGajah(m.sender, gajah)
 kurangDarah(m.sender, 10)
 }
 break
case 'sel': case 'jual':{//BY LORD RIFZA
if (isBan) throw mess.ban
 if (!q) return  m.reply(`Mau jual apa?\nExample : ${prefix + command} ikan 2`)
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
 if (!isInventoryMonay){ addInventoriMonay(m.sender) }
 if (!isInventory){ addInventori(m.sender) }
 var anu = args[1]
 if (args[0] === 'ikan'){
 if (isIkan < anu) return m.reply('Ikan kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return m.reply(`Example : ${prefix + command} ikan 2\n 1 ikan = 1500 monay`)
 kurangIkan(m.sender, anu)
 let monaynya = 1500 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Ikan kamu* : ${getIkan(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'ayam'){
 if (isAyam < anu) return m.reply('Ayam kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return m.reply(`Example : ${prefix + command} ayam 2\n 1 ayam = 2500 monay`)
 kurangAyam(m.sender, anu)
 let monaynya = 2500 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Ayam kamu* : ${getAyam(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'kelinci'){
 if (isKelinci < anu) return m.reply('Kelinci kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return m.reply(`Example : ${prefix + command} kelinci 2\n 1 kelinci = 3000 monay`)
 kurangKelinci(m.sender, anu)
 let monaynya = 3000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Kelinci kamu* : ${getKelinci(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'domba'){
 if (isDomba < anu) return m.reply('Domba kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return m.reply(`Example : ${prefix + command} domba 2\n 1 domba = 5000 monay`)
 kurangDomba(m.sender, anu)
 let monaynya = 5000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Domba kamu* : ${getDomba(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'sapi'){
 if (isSapi < anu) return m.reply('Sapi kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return m.reply(`Example : ${prefix + command} sapi 2\n 1 sapi = 10000 monay`)
 kurangSapi(m.sender, anu)
 let monaynya = 10000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Sapi kamu* : ${getSapi(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'gajah'){
 if (isGajah < anu) return m.reply('Gajah kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return m.reply(`Example : ${prefix + command} gajah 2\n 1 gajah = 15000 monay`)
 kurangGajah(m.sender, anu)
 let monaynya = 15000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Gajah kamu* : ${getGajah(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'besi'){
 if (isBesi < anu) return m.reply('Besi kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return m.reply(`Example : ${prefix + command} besi 2\n 1 besi = 15000 monay`)
 kurangBesi(m.sender, anu)
 let monaynya = 16000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Besi kamu* : ${getBesi(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'emas'){
 if (isEmas < anu) return m.reply('Besi kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return m.reply(`Example : ${prefix + command} emas 2\n 1 emas = 50000 monay`)
 kurangEmas(m.sender, anu)
 let monaynya = 50000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa emas kamu* : ${getEmas(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'emerald'){
 if (isEmerald < anu) return m.reply('Besi kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return m.reply(`Example : ${prefix + command} emerald 2\n 1 emerald = 100000 monay`)
 kurangEmerald(m.sender, anu)
 let monaynya = 100000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa emerald kamu* : ${getEmerald(m.sender)}`)
  }, 2000) 
 } else { m.reply("Format salah!") }

 }
 break 
case 'limituser':
{      
   let txt = `「 *ALL LIMIT USER* 」\n\n`
     for (let i of _limit){
     txt += `➸ *ID :* @${i.id.split("@")[0]}\n➸ *Limit* : ${i.limit}\n`
     }
    seina.sendTextWithMentions(m.chat, txt, m)      
  }
 break
case 'leaderboard':
{      
   let txt = `「 *LEADERBOARD* 」\n\n`
     for (let i of _buruan){
     txt += `*➸ ID :* @${i.id.split("@")[0]}\n`
     txt += `*➸ Ikan* : ${i.ikan}\n`
     txt += `*➸ Ayam* : ${i.ayam}\n`
     txt += `*➸ Kelinci* : ${i.kelinci}\n`
     txt += `*➸ Domba* : ${i.domba}\n`
     txt += `*➸ Sapi* : ${i.sapi}\n`
     txt += `*➸ Gajah* : ${i.gajah}\n\n`
     }
    seina.sendTextWithMentions(m.chat, txt, m)       
  }
 break
case 'mining': case 'menambang':{
if (isBan) throw mess.ban
if (q.includes('--help')) return m.reply(examkosong) 
  if (!isInventory){ addInventori(m.sender) }
  if (isCekDarah < 1) return m.reply('Kamu kelelahan!, cobalah heal menggunakan potion') 
  let besi = [1,2,5,0,3,0,1,1,4,1,5,0,0]
  let emas = [0,1,2,3,0,0,0,1,1,0,0,2]
  let emerald = [0,0,1,0,0,1,0,2,1,0,0,1]
  var besinya = besi[Math.floor(Math.random() * besi.length)]  
  var emasnya = emas[Math.floor(Math.random() * emas.length)]  
  var emeraldnya = emerald[Math.floor(Math.random() * emerald.length)]  
  setTimeout( () => {
  let caption = `[ HASIL MENAMBANG ]\n*Besi* : ${besinya}\n*Emas* : ${emasnya}\n*Emerald* : ${emeraldnya}`
  let buttons = [
      {
       buttonId: `${prefix + command}`, 
       buttonText: {
        displayText: 'Menambang lagi⛏️'
      }, type: 1},
    ]
    let buttonMessage = {
      image: { url: './storage/image/tambang.jpg' },
      caption: caption,
      footer: pushname,
      buttons: buttons,
      headerType: 4
     }
     seina.sendMessage(m.chat, buttonMessage, { quoted: m })
   
   }, 7000)  
  setTimeout( () => {
  lah = `@${m.sender.split("@")[0]} Mulai menambang🎣`
  kic = m.sender 
  seina.sendMessage(m.chat, {text:`${lah}`, contextInfo:{mentionedJid:[kic]}}, {quoted:m})
  }, 1500)
  kurangDarah(m.sender, 10)
  addBesi(m.sender, besinya)
  addEmas(m.sended, emasnya)
  addEmerald(m.sender, emeraldnya)	     
  }   
  break 
            case 'heal':{
if (isBan) throw mess.ban            
if (q.includes('--help')) return m.reply(examkosong) 
 if (!isCekDarah < 1) return m.reply('Kamu hanya bisa heal ketika darah kamu 0')
 if (isCekDarah > 100) return m.reply('Darah kamu sudah penuh')
 if (isPotion < 1) return m.reply('Kamu tidak punya potion, cobalah beli dengan cara #buypotion _jumlah_') 
 addDarah(m.sender, 100)
 kurangPotion(m.sender, 1)
 m.reply('Berhasil, darah kamu sudah full')
 }
 break
case 'reset': case 'riset': {
if (!isCreator) throw mess.owner
const reset = []
     _limit = reset
     console.log('Limit Di reset')
     fs.writeFileSync('./storage/user/limit.json', JSON.stringify(_limit))
     fs.writeFileSync('./storage/user/_registered.json', JSON.stringify(_limit))     
     exec('pm2 restart all') 
     m.reply('Success!')
     }
break  
case 'restart': {
             if (!isCreator) throw mess.owner              
             exec(`npm start`)
             m.reply('_Restarting Bot Success_')
             }
break
	    case 'donasi': case 'sewabot': case 'sewa': case 'buypremium': case 'donate': {
	    if (isBan) throw mess.ban
                seina.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/f8d35118f27c5b371da2b.jpg' }, caption: `*Hai Kak ${m.pushName}*\n\n Bot Rental Prices\n> 15k Per Group via E-Walet 1 Month\n> 20k via pulsa 1 Month\n\n Premium Price Bot\n> 10k per User 1 bulan\n\nPayment can be via Paypal/link aja/pulsa\n\nFor more details, you can chat with the owner\nhttps://wa.me/6281252848955 (Owner)\n\nDonate For Me : \n\n> Paypal : https://www.paypal.me/Rifando35\n> Saweria : https://saweria.co/Nando35` }, { quoted: m })
            }
            break            
            case 'chat': {
                if (!isCreator) throw mess.owner
                if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0] === 'mute') {
                    seina.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    seina.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    seina.chatModify({  archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    seina.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    seina.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    seina.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    seina.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
	    case 'family100': {
	    if (isBan) throw mess.ban
                if ('family100'+m.chat in _family100) {
                    m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
                    throw false
                }
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
                _family100['family100'+m.chat] = {
                    id: 'family100'+m.chat,
                    pesan: await seina.sendText(m.chat, hasil, m),
                    ...random,
                    terjawab: Array.from(random.jawaban, () => false),
                    hadiah: 6,
                }
            }
            break
            case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
            if (isBan) throw mess.ban
            if (!m.quoted && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            ter = command[1].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            break
            case 'bantuan': {
            if (isBan) throw mess.ban
            await m.reply(monospace(q))
            }
            break
            case 'tebak': {
            if (isBan) throw mess.ban
                if (!text) throw `Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong`
                if (args[0] === "lagu") {
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let msg = await seina.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
                    seina.sendText(m.chat, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
                    tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    seina.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, seina.user.name, m)
                    delete tebaklagu[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'gambar') {
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let jawaban = result.jawaban
                    let kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-')
                    var capti = `${result.deskripsi}\n\n*Waktu : 60. detik*\nKetik ${prefix}bantuan untuk bantuan\nBonus: 500 money`
                    var lu = `Klik Button Dibawah untuk bantuan`
                    let buttons = [
                    {buttonId: `${prefix}bantan ${kisi_kisi}`, buttonText: {displayText: 'Bantuan'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.img },
                    jpegThumbnail: await getBuffer(result.img),
                    caption: `${capti}`,
                    footer: lu,
                    buttons: buttons,
                    headerType: 4
                }
                seina.sendMessage(m.chat, buttonMessage, { quoted: m }).then(() => {
                    tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    seina.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, seina.user.name, m)
                    delete tebakgambar[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kata') {
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let jawaban = result.jawaban
                    let kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-')
                    var capti = `${result.soal}\n\n*Waktu : 60. detik*\nKetik ${prefix}bantuan untuk bantuan\nBonus: 500 money`
                    var button = [{ buttonId: `${prefix}bantuan ${kisi_kisi}`, buttonText: { displayText: `Bantuan` }, type: 1 }]
                    seina.sendMessage(m.chat, { caption: `${capti}`, location: { jpegThumbnail: await getBuffer(picak+'tebak kata') }, buttons: button, footer: 'Klik Button Dibawah untuk bantuan', mentions: [m.sender] }).then(() => {
                    tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    seina.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, seina.user.name, m)
                    delete tebakkata[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kalimat') {
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let jawaban = result.jawaban
                    let kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-')
                    var capti = `${result.soal}\n\n*Waktu : 60. detik*\nKetik ${prefix}bantuan untuk bantuan\nBonus: 500 money`
                    var button = [{ buttonId: `${prefix}bantuan ${kisi_kisi}`, buttonText: { displayText: `Bantuan` }, type: 1 }]
                    seina.sendMessage(m.chat, { caption: `${capti}`, location: { jpegThumbnail: await getBuffer(picak+'tebak kalimat') }, buttons: button, footer: 'Klik Button Dibawah untuk bantuan', mentions: [m.sender] }).then(() => {
                    tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    seina.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, seina.user.name, m)
                    delete tebakkalimat[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lirik') {
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let jawaban = result.jawaban
                    let kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-')
                    var capti = `${result.soal}?\n\n*Waktu : 60. detik*\nKetik ${prefix}bantuan untuk bantuan\nBonus: 500 money`
                    var button = [{ buttonId: `${prefix}bantuan ${kisi_kisi}`, buttonText: { displayText: `Bantuan` }, type: 1 }]
                    seina.sendMessage(m.chat, { caption: `${capti}`, location: { jpegThumbnail: await getBuffer(picak+'tebak lirik') }, buttons: button, footer: 'Klik Button Dibawah untuk bantuan', mentions: [m.sender] }).then(() => {
                    tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    seina.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, seina.user.name, m)
                    delete tebaklirik[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lontong') {
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let jawaban = result.jawaban
                    let kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-')
                    var capti = `${result.soal}\n\n*Waktu : 60. detik*\nKetik ${prefix}bantuan untuk bantuan\nBonus: 500 money`
                    var button = [{ buttonId: `${prefix}bantuan ${kisi_kisi}`, buttonText: { displayText: `Bantuan` }, type: 1 }]
                    seina.sendMessage(m.chat, { caption: `${capti}`, location: { jpegThumbnail: await getBuffer(picak+'cak lontong') }, buttons: button, footer: 'Klik Button Dibawah untuk bantuan', mentions: [m.sender] }).then(() => {
                    caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
		    caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
                    })
                    await sleep(60000)
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    seina.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, seina.user.name, m)
                    delete caklontong[m.sender.split('@')[0]]
		    delete caklontong_desk[m.sender.split('@')[0]]
                    }
                }
            }
            break
            case 'kuismath': case 'math': {
            if (isBan) throw mess.ban
            //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                let { genMath, modes } = require('./src/math')
                if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`
                let result = await genMath(text.toLowerCase())
                seina.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    m.reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            case 'jodohku': {
            if (isBan) throw mess.ban
            //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫Jodoh mu adalah

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: 'jodohku', buttonText: { displayText: 'Jodohku' }, type: 1 }
                    ]
                    await seina.sendButtonText(m.chat, buttons, jawab, seina.user.name, m, {mentions: ments})
            }
            break
            case 'jadian': {
            if (isBan) throw mess.ban
            //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `Ciee yang Jadian💖 Jangan lupa pajak jadiannya🐤

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: 'jadian', buttonText: { displayText: 'Jodohku' }, type: 1 }
                    ]
                    await seina.sendButtonText(m.chat, buttons, jawab, seina.user.name, m, {mentions: menst})
            }
            break
            case 'react': {
                if (!isCreator) throw mess.owner
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                seina.sendMessage(m.chat, reactionMessage)
            }
            break  
            case 'join': {
                if (!isCreator) throw mess.owner
                if (!text) throw 'Masukkan Link Group!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                m.reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await seina.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'leave': {
                if (!isCreator) throw mess.owner
                await seina.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'setexif': {
               if (!isCreator) throw mess.owner
               if (!text) throw `Example : ${prefix + command} packname|author`
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          m.reply(`Exif berhasil diubah menjadi\n\n> Packname : ${global.packname}\n> Author : ${global.author}`)
            }
            break
	case 'kick': {
	if (isBan) throw mess.ban
	   // //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await seina.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'add': {
	if (isBan) throw mess.ban
	    ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await seina.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'promote': {
	if (isBan) throw mess.ban
	   // //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await seina.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'demote': {
	if (isBan) throw mess.ban
	    ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await seina.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'ban': case 'banned': {
if (!isCreator) return m.reply(mess.owner)
if (!args[0]) return m.reply(`Massukan Option Pilih add atau del`)
if (args[1]) {
orgnye = args[1] + "@s.whatsapp.net"
} else if (m.quoted) {
orgnye = m.quoted.sender
}
const isBane = banned.includes(orgnye)
if (args[0] === "add") {
if (isBane) return m.reply('User sudah dibanned')
banned.push(orgnye)
m.reply(`Succes ban`)
} else if (args[0] === "del") {
if (!isBane) return m.reply('User tidak dibanned')
let delbans = banned.indexOf(orgnye)
banned.splice(delbans, 1)
m.reply(`Succes Menghapus Banned Users`)
} else {
m.reply("Error")
}
}
break
        case 'block': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await seina.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'unblock': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await seina.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	    case 'setname': case 'setsubject': {
	    if (isBan) throw mess.ban
	   // //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
                await seina.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdesk': {
          if (isBan) throw mess.ban
          //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await seina.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setppbot': {
          if (isBan) throw mess.ban
                if (!isCreator) throw mess.owner
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await seina.downloadAndSaveMediaMessage(quoted)
                await seina.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
           case 'setppgroup': case 'setppgrup': case 'setppgc': {
           if (isBan) throw mess.ban
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
                let media = await seina.downloadAndSaveMediaMessage(quoted)
                await seina.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
            case 'tagall': {
            if (isBan) throw mess.ban
            ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
let teks = `══✪〘 *👥 Tag All* 〙✪══
 
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
                for (let mem of participants) {
                teks += `> @${mem.id.split('@')[0]}\n`
                }
                seina.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
                case 'hidetag': {
                if (isBan) throw mess.ban
                ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
            if (!m.isGroup) throw mess.group
            if (!isBotAdmins) throw mess.botAdmin
            if (!isAdmins) throw mess.admin
            if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
            seina.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
            case 'style': case 'styletext': {
            if (isBan) throw mess.ban
	        //  if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
		    let { styletext } = require('./lib/scraper3')
		    if (!text) throw 'Masukkan Query text!'
		    if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
                let anu = await styletext(text)
                let teks = `Srtle Text From ${text}\n\n`
                for (let i of anu) {
                    teks += `> *${i.name}* : ${i.result}\n\n`
                }
                m.reply(teks)
	        }
	        break
            case 'vote': {
            if (isBan) throw mess.ban
               //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
            if (!m.isGroup) throw mess.group
            if (m.chat in vote) throw `_Masih ada vote di chat ini!_\n\n*${prefix}hapusvote* - untuk menghapus vote`
            if (!text) throw `Masukkan Alasan Melakukan Vote, Example: *${prefix + command} Owner Ganteng*`
            m.reply(`Vote dimulai!\n\n*${prefix}upvote* - untuk ya\n*${prefix}devote* - untuk tidak\n*${prefix}cekvote* - untuk mengecek vote\n*${prefix}hapusvote* - untuk menghapus vote`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]

            let buttonMessageVote = {
                text: teks_vote,
                footer: seina.user.name,
                buttons: buttonsVote,
                headerType: 1
            }
            seina.sendMessage(m.chat, buttonMessageVote)
	    }
            break
               case 'upvote': {
               if (isBan) throw mess.ban
               //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
            let buttonsUpvote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageUpvote = {
                text: teks_vote,
                footer: seina.user.name,
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            seina.sendMessage(m.chat, buttonMessageUpvote)
	    }
             break
                case 'devote': {
                if (isBan) throw mess.ban
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
            let buttonsDevote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageDevote = {
                text: teks_vote,
                footer: seina.user.name,
                buttons: buttonsDevote,
                headerType: 1,
                mentions: menvote
            }
            seina.sendMessage(m.chat, buttonMessageDevote)
	}
            break
                 
case 'cekvote':
if (isBan) throw mess.ban
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote


©${seina.user.id}
`
seina.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': case 'hapusvote': {
		if (isBan) throw mess.ban
		//if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            delete vote[m.chat]
            m.reply('Berhasil Menghapus Sesi Vote Di Grup Ini')
	    }
            break
               case 'group': case 'grup': {
               if (isBan) throw mess.ban
               //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === 'close'){
                    await seina.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Sukses Menutup Group`)).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await seina.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Sukses Membuka Group`)).catch((err) => m.reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: 'group open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'group close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await seina.sendButtonText(m.chat, buttons, `Mode Group`, seina.user.name, m)

             }
            }
            break
            case 'editinfo': {
            if (isBan) throw mess.ban
            //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
             if (args[0] === 'open'){
                await seina.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`Sukses Membuka Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await seina.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`Sukses Menutup Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: 'editinfo open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'editinfo close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await seina.sendButtonText(m.chat, buttons, `Mode Edit Info`, seina.user.name, m)

            }
            }
            break
case 'antibule': {
if (isBan) throw mess.ban
            //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (!isAntibule) return m.reply(`Anti Bule Aktif`)
                isAntibule = true
                m.reply(`Anti Bule Aktif !`)
                } else if (args[0] === "off") {
                if (!isAntibule) return m.reply(`Anti Bule Tidak Aktif`)
                isAntibule = false
                m.reply(`Anti Bule Tidak Aktif !`)
                } else {
                 let buttons = [
                        { buttonId: 'antibule on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'antibule off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await seina.sendButtonText(m.chat, buttons, `Mode Anti Bule`, botname, m)
                }
             }
             break
            case 'antiwame': {
            if (isBan) throw mess.ban
            //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (!isAntiwame) return m.reply(`Antiwame sudah Aktif`)
                isAntiwame = true
                m.reply(`Antilink Aktif !`)
                } else if (args[0] === "off") {
                if (!isAntiwame) return m.reply(`Antiwame tida aktif`)
                isAntiwame = false
                m.reply(`Antiwame Tidak Aktif !`)
                } else {
                 let buttons = [
                        { buttonId: 'antiwame on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'antiwame off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await seina.sendButtonText(m.chat, buttons, `Mode AntiWame`, botname, m)
                }
             }
             break
case 'antilinkyt': {
if (isBan) throw mess.ban
            //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (!isAntilinkyt) return m.reply(`Antilink Youtube Aktif`)
                isAntilinkyt = true
                m.reply(`Antilinkyt Aktif !`)
                } else if (args[0] === "off") {
                if (!isAntilinkyt) return m.reply(`Antilink Youtube Sudah Tidak Aktif`)
                isAntilinkyt = false
                m.reply(`Antilinkyt Tidak Aktif !`)
                } else {
                 let buttons = [
                        { buttonId: 'antilinkyt on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'antilinkyt off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await seina.sendButtonText(m.chat, buttons, `Mode Antilink Youtube`, botname, m)
                }
             }
             break
             case 'antilink': {
             if (isBan) throw mess.ban
            //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].antilink) return m.reply(`Sudah Aktif Sebelumnya`)
                db.data.chats[m.chat].antilink = true
                m.reply(`Antilink Aktif !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].antilink) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
                db.data.chats[m.chat].antilink = false
                m.reply(`Antilink Tidak Aktif !`)
                } else {
                 let buttons = [
                        { buttonId: 'antilink on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'antilink off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await seina.sendButtonText(m.chat, buttons, `Mode Antilink`, seina.user.name, m)
                }
             }
             break
             case 'mute': {
             if (isBan) throw mess.ban
            // //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
                if (args[0] === "on") {
                if (db.data.chats[m.chat].mute) return m.reply(`Sudah Aktif Sebelumnya`)
                db.data.chats[m.chat].mute = true
                m.reply(`${seina.user.name} telah di mute di group ini !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].mute) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
                db.data.chats[m.chat].mute = false
                m.reply(`${seina.user.name} telah di unmute di group ini !`)
                } else {
                 let buttons = [
                        { buttonId: 'mute on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'mute off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await seina.sendButtonText(m.chat, buttons, `Mute Bot`, seina.user.name, m)
                }
             }
             break
            case 'linkgroup': case 'linkgc': {
            if (isBan) throw mess.ban
            //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!m.isGroup) throw mess.group
                let response = await seina.groupInviteCode(m.chat)
                seina.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
            case 'ephemeral': {
            if (isBan) throw mess.ban
            //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Masukkan value enable/disable'
                if (args[0] === 'enable') {
                    await seina.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'disable') {
                    await seina.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
            case 'delete': case 'del': {
            if (isBan) throw mess.ban
            //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                seina.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'bcgc': case 'bcgroup': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
                let getGroups = await seina.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
                for (let i of anu) {
                    await sleep(1500)
		            let btn = [{
                                urlButton: {
                                    displayText: 'Instagram',
                                    url: 'https://instagram.com/alya.xzy'
                                }
                            }]
                      let txt = `「 Broadcast Bot 」\n\n${text}`
                      seina.send5ButImg(i, txt, botname, global.bc, btn)
                    }
                m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
            }
            break
            case 'bc': case 'broadcast': case 'bcall': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
                let anu = await store.chats.all().map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
		for (let yoi of anu) {
		    await sleep(1500)
		    let btn = [{
                                urlButton: {
                                    displayText: 'Instagram',
                                    url: 'https://instagram.com/alya.xzy'
                                }
                            }]
                      let txt = `「 Broadcast Bot 」\n\n${text}`
                      seina.send5ButImg(yoi, txt, botname, global.bc, btn)
		}
		m.reply('Sukses Broadcast')
            }
            break
case 'bc2': case 'bcloc': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} perhatian semua|Oke bang`
                let anu = await store.chats.all().map(v => v.id)
                let [melo, melo2] = text.split`|`
                m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
	     	for (let yoi of anu) {
	     	await sleep(1500)
		    var button = [{ buttonId: `${prefix}ho`, buttonText: { displayText: `${melo2}` }, type: 1 }]              
            seina.sendMessage(yoi, { caption: `${melo}`, location: { jpegThumbnail: await getBuffer(picak+'Brodcast') }, buttons: button, footer: `${botname}`, mentions: [m.sender] })
		}		
            }
            break
case 'bcimg': case 'bcvideo': case 'bcaudio': {
                if (!isCreator) throw mess.owner
                if (!/video/.test(mime) && !/image/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio/Image Yang Ingin Di Broadcast Dengan Caption ${prefix + command}`
                let anu = await store.chats.all().map(v => v.id)
                let ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "6289523258649-1604595598@g.us"}, "message": {orderMessage: {itemCount: 2021,status: 200, thumbnail: fs.readFileSync('./lib/hisoka.jpg'), surface: 200, message: `bordcast`, orderTitle: 'liyachan', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
                m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
                for (let i of anu) {
                    await sleep(1500)
                    let butoon = [{
                                urlButton: {
                                    displayText: `Instagram`,
                                    url: 'https://instagram.com/alya.xzy'
                                }
                            },
                            {
                                quickReplyButton: {
                                    displayText: 'Oke',
                                    id: 'menj'
                                }
                            }]
                    let media = await seina.downloadAndSaveMediaMessage(quoted)
                    let buffer = fs.readFileSync(media)
                    if (/webp/.test(mime)) {
                    seina.sendMessage(i, { sticker: { url: media } }, { quoted: ftroli })
                    } else if (/image/.test(mime)) {
                    let junn = `*_BROADCAST IMAGE_*${text ? '\n\n' + text : ''}`
                    seina.send5ButImg(i, junn, `${global.botname}`, buffer, butoon)
                    } else if (/video/.test(mime)) {
                    let junn = `*_BROADCAST VIDIO_*${text ? '\n\n' + text : ''}`
                    seina.sendMessage(i, {video: buffer, caption: `${junn}`}, { quoted: ftroli })
                    } else if (/audio/.test(mime)) {
                    seina.sendMessage(i, {audio: buffer, mimetype: 'audio/mpeg'}, { quoted : ftroli })
                    } else {
                    m.reply(`Kirim/Reply Video/Audio/Image Yang Ingin Di Broadcast Dengan Caption ${prefix + command}`)
                    }
                    await fs.unlinkSync(media)
                    }
                m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Chats`)
            }
            break
case 'bctext': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
                //let ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "6289523258649-1604595598@g.us"}, "message": {orderMessage: {itemCount: 666666666,status: 200, thumbnail: await getBuffer(picak+'Brodcast'), surface: 200, message: `© ${botname}`, orderTitle: 'memek', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
                let ftroli = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `© ${botname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${seina.user.name},;;;\nFN:${botname},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': await getBuffer(picak+'Brodcast'), thumbnail: await getBuffer(picak+'Brodcast'),sendEphemeral: true}}}
                let anu = await store.chats.all().map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
		for (let yoi of anu) {
		    await sleep(1500)
		    seina.sendMessage(yoi, {text:`${text}`}, {quoted:ftroli})
		}
		m.reply('Sukses Broadcast')
            }
            break
case 'bcvid': case 'bcvideo': {
                if (!isCreator) throw mess.owner
                if (!text) throw `penggunaan ${prefix + command}|teks nya`
                let buf = `https://telegra.ph/file/f8b17ce3b28bb5f25f5e1.mp4`
                let ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "6289523258649-1604595598@g.us"}, "message": {orderMessage: {itemCount: 999999999999,status: 200, thumbnail: await getBuffer(picak+'Brodcast'), surface: 200, message: `© ${botname}`, orderTitle: 'memek', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}                
                let anu = await store.chats.all().map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
		    for (let yoi of anu) {
		    await sleep(1500)		    
		    seina.sendMessage(yoi, { video: await getBuffer(buf), jpegThumbnail: await getBuffer(picak+'Brodcast'), caption: `${text}` }, { quoted: ftroli}).catch ((err) => m.reply('Maaf gagal dalam mbuat ngirim vid'))
		}
		m.reply('Sukses Broadcast')
            }
            break
            case 'infochat': case 'sider': {
            if (isBan) throw mess.ban
            //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!m.quoted) m.reply('Reply Pesan')
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += `> @${i.userJid.split('@')[0]}\n`
                    teks += ` ┗━> *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} > *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
                }
                seina.sendTextWithMentions(m.chat, teks, m)
            }
            break
            case 'q': case 'quoted': {
            if (isBan) throw mess.ban
           // //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
		if (!m.quoted) return m.reply('Reply Pesannya!!')
		if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
		let wokwol = await seina.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return m.reply('Pesan Yang anda reply tidak mengandung reply')
		await wokwol.quoted.copyNForward(m.chat, true)
            }
	    break
            case 'listpc': {
            if (isBan) throw mess.ban
            //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 seina.sendTextWithMentions(m.chat, teks, m)
             }
             break
                case 'listgc': {
                if (isBan) throw mess.ban
                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await seina.groupMetadata(i)
                     teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* @${metadata.owner.split('@')[0]}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 seina.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case 'listonline': case 'liston': {
             if (isBan) throw mess.ban
             //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    seina.sendText(m.chat, 'List Online:\n\n' + online.map(v => '> @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
            break
            case 'stickerly': {
            if (isBan) throw mess.ban
            //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
	        if (!text) throw `Example : ${prefix + command} patrick`		
		    anu = await fetchJson(`https://xteam.xyz/sticker/stickerly?q=${text}&APIKEY=${setting.xteamkey}`)
		    m.reply(`${util.format(anu)}`)
            }		
	        break
            case 'stickerline': {
if (isBan) throw mess.ban
            //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
	        if (!text) throw `Example : ${prefix + command} https://store.line.me/stickershop/product/9409/id`		
		    anu = await fetchJson(`https://xteam.xyz/sticker/stickerline?url=${text}&APIKEY=${setting.xteamkey}`)
		    m.reply(`${util.format(anu)}`)
            }		
	        break
            case 'sticker': case 's': case 'stickergif': case 'sgif': {
            if (isBan) throw mess.ban
             //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
             if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
                if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await seina.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
                let media = await quoted.download()
                let encmedia = await seina.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
                }
            }
            break

case 'swm': case 'stickerwm': case 'wm': {
if (isBan) throw mess.ban
if (!args.join(" ")) return m.reply(`Example :\n${prefix}swm alya love | nando`)
if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0];
const atnm = swn.split("|")[1];
if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
if (m.quoted.isAnimated === true) {
seina.downloadAndSaveMediaMessage(quoted, "gifee")
seina.sendMessage(m.chat, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await seina.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await seina.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
await fs.unlinkSync(encmedia)
} else {
m.reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
}
}
break
case 'attp': case 'ttp': {
if (isBan) throw mess.ban
           if (!text) throw `Example : ${prefix + command} alya cantik`
           if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
           await seina.sendMedia(m.chat, `https://api.lolhuman.xyz/api/${command}?apikey=${setting.lolkey}&text=${text}`, 'A L Y A', 'B O T M D', m, {asSticker: true}).catch((err) => m.reply('Gagal dalam membuat stiker'))
         }
         break
case 'attp2': {
if (isBan) throw mess.ban
if (!text) return m.reply(`mana teks nya`)
if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
seina.sendMessage(m.chat, { sticker : { url : `https://hardianto.xyz/api/maker/attp?text=${text}&apikey=hardianto`}, quoted: m }).catch((err) => m.reply('Gagal dalam membuat stiker'))
} 
break
case 'attp3': {
if (isBan) throw mess.ban
           if (!text) throw `Example : ${prefix + command} text`
           await seina.sendMedia(m.chat, `https://hardianto.xyz/api/maker/attp?text=${text}&apikey=hardianto`, 'A L Y A', 'B O T M D', m, {asSticker: true})
         }
         break
            case 'ebinary': {
            if (isBan) throw mess.ban
            //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
            if (!m.quoted.text && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            let { eBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let eb = await eBinary(teks)
            m.reply(eb)
        }
        break
            case 'dbinary': {
            if (isBan) throw mess.ban
            if (!m.quoted.text && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            let { dBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let db = await dBinary(teks)
            m.reply(db)
        }
        break
            case 'emojimix': {
            if (isBan) throw mess.ban
           // //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
	        if (!text) throw `Example : ${prefix + command} 😅+🤔`
	        if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
		let [emoji1, emoji2] = text.split`+`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await seina.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	    case 'emojimix2': {
	    if (isBan) throw mess.ban
	    if (!text) throw `Example : ${prefix + command} 😅`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
		for (let res of anu.results) {
		    let encmedia = await seina.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
case 'semoji': case 'emoji': case 'emoticon': {
if (isBan) throw mess.ban
////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Example : ${prefix + command} 😱`              
               if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)   
                anu = await fetchJson(`https://api.lolhuman.xyz/api/smoji3/${encodeURIComponent(text)}?apikey=${setting.lolkey}`)                
                seina.sendImageAsSticker(m.chat, anu.result.emoji.whatsapp, m, { packname: global.packname, author: global.author }).catch((err) => m.reply(jsonformat('Maaf terjasi kesalahn')))               
                      }
                  break
	       case 'smeme': case 'stickmeme': case 'stikmeme': case 'stickermeme': case 'stikermeme': {
	       if (isBan) throw mess.ban
	        let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`
	        if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
	        if (!/image/.test(mime)) throw respond
            if (!text) throw respond
	        m.reply(mess.wait)
            atas = text.split('|')[0] ? text.split('|')[0] : '-'
            bawah = text.split('|')[1] ? text.split('|')[1] : '-'
	        let dwnld = await quoted.download()
	        let { floNime } = require('./lib/uploader')
	        let fatGans = await floNime(dwnld)
	        let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${fatGans.result.url}`
	        let FaTiH = await seina.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.auhor })
	        await fs.unlinkSync(FaTiH)
            }
	       break     
case 'toimage': case 'toimg': {
if (isBan) throw mess.ban
            //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
                let media = await seina.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)                    
                    seina.sendMessage(m.chat, { image: buffer, jpegThumbnail:buffer, caption: `*Sticker Toimg By ${botname}*` }, { quoted: m }).catch((err) => m.reply('Maaf Teejasi keaalahan'))
                    fs.unlinkSync(ran)
                })
            }
            break
            case 'ss': case 'ssweb': {
            if (isBan) throw mess.ban
////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
            if (!text) throw `Example : ${prefix + command} Url`          
            if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)  
            anu = await fetchJson(`https://shot.screenshotapi.net/screenshot?&url=${text}`)                 
            buf = await getBuffer(anu.screenshot)   
                seina.sendMessage(m.chat, { image: { url: anu.screenshot }, jpegThumbnail:buf, caption: `*${command} From ${text}*` }, { quoted: m }).catch((err) => m.reply(jsonformat('Maaf terjadi kesalahn')))
            }
            break
case 'simisimi': case 'simi': {
if (isBan) throw mess.ban
//if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
            if (!text) throw `Example : ${prefix + command} halo simi`       
            x = await fetchJson(`https://xteam.xyz/simsimi?kata=${text}&APIKEY=${setting.xteamkey}`)                       
            m.reply(`${x.jawaban}`)
            }
            break
	        case 'tomp4': case 'tovideo': {
	        if (isBan) throw mess.ban
	       // //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)               
		let { webp2mp4File } = require('./lib/uploader')
                let media = await seina.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await seina.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'toaud': case 'toaudio': {
            if (isBan) throw mess.ban
            ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
            if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            seina.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'tomp3': {
            if (isBan) throw mess.ban
          //  //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
            if (/document/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            seina.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${seina.user.name}.mp3`}, { quoted : m })
            }
            break
            case 'tovn': case 'toptt': {
            if (isBan) throw mess.ban
            //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            if (!quoted) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            seina.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case 'togif': {
            if (isBan) throw mess.ban
          //  //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
		   let { webp2mp4File } = require('./lib/uploader')
                let media = await seina.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await seina.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
	        case 'tourl': {
	        if (isBan) throw mess.ban
	        //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
	        if (!/image/.test(mime) && !/video/.test(mime)) throw `Kirim/Reply Image/video Dengan Caption ${prefix + command}`                
	    	let { UploadFileUgu, webp2mp4File, floNime, TelegraPh } = require('./lib/uploader')
	     	m.reply(mess.wait)
                let media = await seina.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    m.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
            case 'imagenobg': case 'removebg': case 'remove-bg': {
            if (isBan) throw mess.ban
       // //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)    
	    if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await seina.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    seina.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break


//────────────────────[ NULIS ]────────────────────

case 'nulis': case 'nuliskanan': case 'nuliskiri': {
if (isBan) throw mess.ban
////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
if (!text) throw `Example : ${prefix + command} apa itu javascrip`	    
if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
yah = await getBuffer(`https://xteam.xyz/magernulis3?text=${text}&APIKEY=${setting.xteamkey}`)
seina.sendMessage(m.chat, { image: yah }, { quoted: m }).catch((err) => m.reply('Gagal dalam menulis'))
}
break
case 'magernulis': {            
if (isBan) throw mess.ban
	        if (!text) throw `Example : ${prefix + command} nama|alya|kelas1smk|paling cantik`
		    let [tes1, tes2, tes3] = text.split`|`
		if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
		buf = await getBuffer(`https://xteam.xyz/magernulis?nama=${tes1}&kelas=${tes2}&text=${text}&APIKEY=${setting.xteamkey}`)
		seina.sendMessage(m.chat, { image: buf, jpegThumbnail:buf, caption: `Nih` }, { quoted: m }).catch((err) => m.reply('Maaf Gagal Dalam Menulis')) 
	    }
	    break
case 'magernulis2': {            
if (isBan) throw mess.ban
	        if (!text) throw `Example : ${prefix + command} sayang udah makan belumm`
		    //let [tes1, tes2, tes3] = text.split`|`
		if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
		buf = await getBuffer(`https://xteam.xyz/magernulis2?text=${text}&APIKEY=${setting.xteamkey}`)
		seina.sendMessage(m.chat, { image: buf, jpegThumbnail:buf, caption: `Nih` }, { quoted: m }).catch((err) => m.reply('Maaf Gagal Dalam Menulis')) 
	    }
	    break
case 'magernulis3': {            
if (isBan) throw mess.ban
	        if (!text) throw `Example : ${prefix + command} sayang udah makan belumm`
		    //let [tes1, tes2, tes3] = text.split`|`
		if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
		buf = await getBuffer(`https://xteam.xyz/magernulis3?text=${text}&APIKEY=${setting.xteamkey}`)
		seina.sendMessage(m.chat, { image: buf, jpegThumbnail:buf, caption: `Nih` }, { quoted: m }).catch((err) => m.reply('Maaf Gagal Dalam Menulis')) 
	    }
	    break
case 'magernulis4': {            
if (isBan) throw mess.ban
	        if (!text) throw `Example : ${prefix + command} sayang udah makan belumm`
		    //let [tes1, tes2, tes3] = text.split`|`
		if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
		buf = await getBuffer(`https://xteam.xyz/magernulis4?text=${text}&APIKEY=${setting.xteamkey}`)
		seina.sendMessage(m.chat, { image: buf, jpegThumbnail:buf, caption: `Nih` }, { quoted: m }).catch((err) => m.reply('Maaf Gagal Dalam Menulis')) 
	    }
	    break
case 'magernulis5': {            
if (isBan) throw mess.ban
	        if (!text) throw `Example : ${prefix + command} sayang udah makan belumm`
		    //let [tes1, tes2, tes3] = text.split`|`
		if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
		buf = await getBuffer(`https://xteam.xyz/magernulis5?text=${text}&APIKEY=${setting.xteamkey}`)
		seina.sendMessage(m.chat, { image: buf, jpegThumbnail:buf, caption: `Nih` }, { quoted: m }).catch((err) => m.reply('Maaf Gagal Dalam Menulis')) 
	    }
	    break
case 'magernulis6': {            
if (isBan) throw mess.ban
	        if (!text) throw `Example : ${prefix + command} sayang udah makan belumm`
		    //let [tes1, tes2, tes3] = text.split`|`
		if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
		buf = await getBuffer(`https://xteam.xyz/magernulis6?text=${text}&APIKEY=${setting.xteamkey}`)
		seina.sendMessage(m.chat, { image: buf, jpegThumbnail:buf, caption: `Nih` }, { quoted: m }).catch((err) => m.reply('Maaf Gagal Dalam Menulis')) 
	    }
	    break

//────────────────────[ SEARCHING ]────────────────────

case 'yts': case 'ytsearch': case 'youtubesearch': {
if (isBan) throw mess.ban
	    if (!text) throw `Example : ${prefix + command} Judul lagu yang mau di cari`
                let yts = require("yt-search")
                let search = await yts(text)                
                let no = 1
                let sections = []   
                for (let i of search.all) {
                const list = {title: `${i.title}`,
                rows: [
	                  {
	                  title: `[🎵] MP3`, 
	                  rowId: `${prefix}ytmp3 ${i.url}`,
	                  description: `mimetype: audio/mp3 ${i.description}\nDiupload: ${i.ago}\nChannel: ${i.author.name}\nViews: ${i.views}\nDuration: ${i.timestamp}\nLink: ${i.url}`
	                  },
	                  {
	                  title: `[🎥] MP4`, 
	                  rowId: `${prefix}ytmp4 ${i.url}`,
	                  description: `mimetype: video/mp4 ${i.description}\nDiupload: ${i.ago}\nChannel: ${i.author.name}\nViews: ${i.views}\nDuration: ${i.timestamp}\nLink: ${i.url}`
	                  },
	                  {
	                  title: `[🔗] LINK`, 
	                  rowId: `${prefix}linkok ${i.url}`,
	                  description: `result: url ${i.description}\nDiupload: ${i.ago}\nChannel: ${i.author.name}\nViews: ${i.views}\nDuration: ${i.timestamp}\nLink: ${i.url}`
	                  }, 
	                  ]
                      }
                      sections.push(list)   
                      }
                      const sendm =  seina.sendMessage(
                      m.chat, 
                      {
                      text: `Berikut hasil pencarian dari ${text} Kamu dapat memipih media audio dan video di bawah ini`,
                      footer: `© AlyaBot`,
                      title: `*----「 YOUTUBE SEARCH 」----*`,
                      buttonText: "Media Result",
                      sections
                      }, { quoted : m })
                      }
                  break
                  case 'linkok': {
                  if (isBan) throw mess.ban
                  if (!text) return m.reply('Masukkan link')                  
                  m.reply(`${text}`)
                  }
                  break
case 'stickersearch': {
      if (isBan) throw mess.ban
  if (!text) return m.reply(`Penggunaan ${prefix + command} masukkan query sticker`) 
  if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
  let noh = require('./lib/lol.js')                
  noh.stickersearch(`${text}`).then(async (res) => {   
  for (let x of res.sticker_url) {
  seina.sendImageAsSticker(m.chat, x, m, { packname: global.packname, author: global.author })      
               }
                }).catch((err) => {
                    m.reply(`*${text} Tidak Ditemukan*`)
                })
            }
            break
case 'igstalk': case 'instagramstalk': {
if (isBan) throw mess.ban
////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
if (!text) throw `Username nya Mana? contoh : ${prefix + command} bulansutena`	    
if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
tod = await fetchJson(`https://api.lolhuman.xyz/api/stalkig/${text}?apikey=${setting.lolkey}`)
gaber = tod.result.photo_profile
teks = `
┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ INSTAGRAM PROFILE
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
▢ Username :  ${tod.result.username}
▢ Full Name : ${tod.result.fullname}
▢ Followers : ${tod.result.followers}
▢ Following : ${tod.result.following}
▢ total post : ${tod.result.posts}
▢ Bio : ${tod.result.bio}
`
var yaha = await getBuffer(gaber)
seina.sendMessage(m.chat, { image: yaha, jpegThumbnail:yaha, caption: `${teks}` }, { quoted: m }).catch((err) => m.reply('Username Tidak ditemukan'))
}
break
case 'stalkgithub': case 'githubstalk': {
if (isBan) throw mess.ban
//if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
              if (!text) throw `Example : ${prefix + command} wibu.xyz`
              ini_result = await fetchJson(`https://api.lolhuman.xyz/api/github/${text}?apikey=${setting.lolkey}`)
              ini_result = ini_result.result             
              ini_txt = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *GITHUB USER*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`📫 Username : ${ini_result.name}\`\`\`
\`\`\`🎞 Public Repo : ${ini_result.public_repos}\`\`\`
\`\`\`📟 Public Gists : ${ini_result.public_gists}\`\`\`
\`\`\`📮 Pengikut : ${ini_result.followers}\`\`\`
\`\`\`📚 Following : ${ini_result.following}\`\`\`
\`\`\`📻 Bio : ${ini_result.bio}\`\`\`
\`\`\`🗃️ Link : ${ini_result.url}\`\`\`
`
seina.sendImage(m.chat, ini_result.avatar, `${ini_txt}`, m).catch((err) => m.reply('Username Ridak ditemukan'))
}
break
case 'stalktwitter': case 'twitterstalk': {
if (isBan) throw mess.ban
//if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
            if (!text) throw `Example : ${prefix + command} wibu.xyz`
             get_result = await fetchJson(`https://api.lolhuman.xyz/api/twitter/${text}?apikey=${setting.lolkey}`)
             get_result = get_result.result            
             pp_tt = await getBuffer(get_result.profile_picture)
             ini_txt = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *TWITTER PROFILE*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`📫 Username : ${get_result.screen_name}\`\`\`
\`\`\`🎞 Nama : ${get_result.name}\`\`\`
\`\`\`📟 Deskcription : ${get_result.description}\`\`\`
\`\`\`📮 Followers : ${get_result.followers}\`\`\`
\`\`\`📚 Mengfollow : ${get_result.following}\`\`\`
\`\`\`📻 Tweet : ${get_result.tweet}\`\`\`
\`\`\`🗃️ Joined : ${get_result.joined}\`\`\`
`
seina.sendImage(m.chat, get_result.profile_picture, `${ini_txt}`, m).catch((err) => m.reply('Username Ridak ditemukan'))
}
break
case 'tiktokstalk': {
if (isBan) throw mess.ban
//if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
      if (!text) throw `Example : ${prefix + command} wibu.xyz`
             get_result = await fetchJson(`http://api.lolhuman.xyz/api/stalktiktok/${text}?apikey=${setting.lolkey}`)
             get_result = get_result.result             
             ini_txt = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *TIKTOK PROFILE*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`📫 Username : ${get_result.username}\`\`\`
\`\`\`🎞 Nama : ${get_result.nickname}\`\`\`
\`\`\`📟 Pengikut : ${get_result.followers}\`\`\`
\`\`\`📮 Mengikuti : ${get_result.followings}\`\`\`
\`\`\`📚 Likes : ${get_result.likes}\`\`\`
\`\`\`📻 Video : ${get_result.video}\`\`\`
\`\`\`🗃️ Deskripsi : ${get_result.bio}\`\`\`
`
seina.sendImage(m.chat, get_result.user_picture, `${ini_txt}`, m).catch((err) => m.reply('Username Ridak ditemukan'))
}
break
case 'linkwa': case 'carigc': {
if (isBan) throw mess.ban
//if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
            if (!text) throw `Example : ${prefix + command} botwa`            
            anu = await fetchJson(`https://xteam.xyz/search/grupwa?q=${text}&APIKEY=${setting.xteamkey}`)                       
            //res = `*GROUP SEARCH*\n\n*Nama*: _${anu.result[0].subject}_\n*Link*: ${anu.result[0].link}\n\n*Nama*: _${anu.result[1].subject}_\n*Link*: ${anu.result[1].link}\n\n*Nama*: _${anu.result[2].subject}_\n*Link*: ${anu.result[2].link}\n\n*Nama*: _${anu.result[3].subject}_\n*Link*: ${anu.result[3].link}\n\n*Nama*: _${anu.result[4].subject}_\n*Link*: ${anu.result[4].link}\n\n*Nama*: _${anu.result[5].subject}_\n*Link*: ${anu.result[5].link}`
            m.reply(`${util.format(anu)}`)
            }
            break
case 'carigc2': {
if (isBan) throw mess.ban
//if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
           if (!text) throw `Example : ${prefix + command} cinta`            
            anu = await fetchJson(`https://api.akuari.my.id/search/carigc?query=${text}`)                       
            ini_txt = '*Cari Group*\n\n'
            for (let i of anu.result) {      
            ini_txt += `*Name* : ${i.nama}\n`            
            ini_txt += `*Link* : ${i.link}\n\n`            
            }
            m.reply(`${ini_txt}`)
            }            
            break
case 'playstore': case 'playstoresearch': {
if (isBan) throw mess.ban
//if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
            if (!text) throw `Example : ${prefix + command} baju`            
            x = await fetchJson(`https://api.violetics.pw/api/apk/playstore?apikey=${setting.violkey}&apps=${text}`)                       
            ini_txt = '*PLAYSTORE SEARCH*\n\n'
            for (let i of x.result) {       
            ini_txt += `*NAMA* : ${i.title}\n`
            ini_txt += `*Rate* : ${i.rate}\n`
            ini_txt += `*PACKAGE* : ${i.package}\n`
            ini_txt += `*URL* : ${i.url}\n`
            ini_txt += `*DESKRIPSI* : ${i.description}\n\n`         
            }   
            seina.sendImage(m.chat, x.result[0].thumbnail, `${ini_txt}`, m).catch((err) => m.reply(jsonformat('Maaf terjasi kesalahn')))
            }
            break
case 'brainly': {
if (isBan) throw mess.ban
            ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
            if (!text) throw `Example : ${prefix + command} apa itu wibu`           
            if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
            x = await fetchJson(`https://api.violetics.pw/api/media/brainly?apikey=${setting.violkey}&query=${text}`)                       
            ini_txt = '*BRAINLY SEARCH*\n\n'
            for (let i of x.result) {       
            ini_txt += `*PERTANYAAN* : ${i.pertanyaan}\n`
            ini_txt += `*JAWABAN* : ${i.jawaban}\n`                     
            }   
            m.reply(`${ini_txt}`)
            }
            break
case 'layarkaca': {
if (isBan) throw mess.ban
                if (!text) throw `mau cari apa!, cintoh : ${prefix + command} cars` 
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
                let anu = await fetchJson(`https://violetics.pw/api/search/layarkaca?apikey=${setting.violkey}&query=${text}`)
                m.reply(`${util.format(anu)}`)
                }
            break
case 'pixivsearch': {
if (isBan) throw mess.ban
                if (!text) throw `mau cari apa!, cintoh : ${prefix + command} cars`
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
                let anu = await fetchJson(`https://api.akuari.my.id/search/pixiv?query=${text}`)
                m.reply(`${util.format(anu)}`)
                }
            break
case 'mangatoon': {
if (isBan) throw mess.ban
                if (!text) throw `mau cari apa!, cintoh : ${prefix + command} config_internet`
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
                let anu = await fetchJson(`https://violetics.pw/api/search/mangatoon?apikey=${setting.violkey}&query=${text}`)
                m.reply(`${util.format(anu)}`)
                }
            break
case 'palingmurah': {
if (isBan) throw mess.ban
                if (!text) throw `mau cari apa!, cintoh : ${prefix + command} vps`
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
                let anu = await fetchJson(`https://violetics.pw/api/search/palingmurah?apikey=${setting.violkey}&query=${text}`)
                m.reply(`${util.format(anu)}`)
                }
            break
case 'gsmarena': {
if (isBan) throw mess.ban
                if (!text) throw 'mau cari merek apa contoh \n .gsmarena xiaomi'
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
                anu = await fetchJson(`https://yx-api.herokuapp.com/api/search/gsmarena?query=${text}`)				
				reply212 = `*----「 SEARCH GSMARENA 」----*\n\n
*Name* : ${anu.judul}
*Rilis* : ${anu.rilis}
*Ukuran* : ${anu.ukuran}
*Model* : ${anu.type}
*Storage* : ${anu.storage}
*Display* : ${anu.display}
*Inchi* : ${anu.inchi}
*Pixel* : ${anu.pixel}
*VideoPixel* : ${anu.videoPixel}
*Ram* : ${anu.ram}
*Chipset* : ${anu.chipset}
*Batrai* : ${anu.batrai}
*Merek Batrai* : ${anu.merek_batre}
*Detail* : ${anu.detail}`			
//var kontoll = await getBuffer(anu.result.owner.profile_pic)	
				//sendButLocation(from, `${reply22}`,`© alyabot`, {jpegThumbnail:kontoll}, [{buttonId:`${prefix}menu`,buttonText:{displayText:'OKE'},type:1}], {contextInfo: { mentionedJid: [sender, owner]}})
anu = await getBuffer(anu.thumb)
seina.sendMessage(m.chat, { image: anu, caption: `${reply212}` }, { quoted: m}).catch((err) => m.reply('Hasil pencarian tidak ditemukan'))
	            }
                break
case 'font': {
if (isBan) throw mess.ban
            //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)

                if (!text) throw 'anu aowwkowk'

                anu = await fetchJson(`https://violetics.pw/api/fonts/dafont?apikey=${setting.violkey}&font=${text}`)                

                m.reply(`${util.format(anu)}`)

                }

            break
case 'news': case 'detik': {
if (isBan) throw mess.ban
//if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
          //  if (!text) throw `Example : ${prefix + command} baju`            
            i = await fetchJson(`https://xteam.xyz/news/detik?APIKEY=${setting.xteamkey}`)            
            ini_txt = '*NEWS INFO*\n\n'                
            ini_txt += `*JUDUL* : ${i.judul}\n`
            ini_txt += `*Rate* : ${i.tanggal}\n`
            ini_txt += `*ARTIKEL* : ${i.artikel}\n`
            ini_txt += `*URL* : ${i.url}\n`                 
            seina.sendImage(m.chat, i.thumb, `${ini_txt}`, m).catch((err) => m.reply(jsonformat('Maaf terjasi kesalahn')))
            }
            break
case 'searchanime': {
if (isBan) throw mess.ban
                if (!text) throw `Example : ${prefix + command} nama anime`
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
                anu = await getBuffer(`https://api.akuari.my.id/search/konachan?query=${text}`)
                seina.sendMessage(m.chat, { image: anu, caption: `${command}` }, { quoted: m}).catch((err) => m.reply('Maaf server Xteam sedang down'))
	            }
                break
           case 'lirik': case 'liriklagu': {
           if (isBan) throw mess.ban
           //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Example : ${prefix + command} Kemarin`
                anu = await fetchJson(`https://api.lolhuman.xyz/api/lirik?apikey=${setting.lolkey}&query=${text}`)
               m.reply(`${anu.result}`)
            }
            break
            case 'readmore': {
            if (isBan) throw mess.ban
            ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Example : ${prefix + command} halo gaes`
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
                anu = await fetchJson(`https://cililitan.herokuapp.com/api/readmore?teks=${text}`)
               m.reply(`${anu.result}`)
            }
            break
	            case 'infobmkg': case 'infogempa': {  
	             if (isBan) throw mess.ban     
	            //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)        
                anu = await fetchJson(`https://cililitan.herokuapp.com/api/infogempa`)
                let F = `*INFO GEMPA*\n*Waktu:* ${anu.result.waktu}\n*Magnitudo:* ${anu.result.magnitudo}\n*Kedalaman:* ${anu.result.kedalaman}\n*Koordinat:* ${anu.result.koordinat}\n*Lokasi:* ${anu.result.lokasi}\n*Tsunami:* ${anu.result.tsunami}`            
                seina.sendImage(m.chat, anu.result.gambar, `${F}`, m).catch ((err) => m.reply('Maaf sedang erorr ftur nya'))
            }
            break
            case 'google': {
            if (isBan) throw mess.ban
            //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Example : ${prefix + command} fatih arridho`
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += `> *Title* : ${g.title}\n`
                teks += `> *Description* : ${g.snippet}\n`
                teks += `> *Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                m.reply(teks)
                })
                }
                break        
        case 'gimage': {
        if (isBan) throw mess.ban
        //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
        if (!text) throw `Example : ${prefix + command} kaori cicak`
        let gis = require('g-i-s')
        gis(text, async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)].url
        let log = await getBuffer(images)
        let buttons = [
                    {buttonId: `gimage ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    jpegThumbnail: log,
                    caption: `*-------「 GIMAGE SEARCH 」-------*
🤠 *Query* : ${text}
🔗 *Media Url* : ${images}`,
                    footer: seina.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                seina.sendMessage(m.chat, buttonMessage, { quoted: m }).catch((err) => m.reply('Maaf Teejasi keaalahan'))
        })
        }
        break
case 'play2': {
//if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buf = await getBuffer(anu.thumbnail)
                let caption = `*PLAYING YOUTUBE*
                
> Title : ${anu.title}
> Description : ${anu.description}
> Url : ${anu.url}
`
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                   templateMessage: {
                        hydratedTemplate: {
                           hydratedContentText: caption,
                            locationMessage: {
                            jpegThumbnail: buf},
                            hydratedFooterText: `${botname}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'Instagram',
                                    url: 'https://instagram.com/alya.xzy'
                               }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Audio',
                                    id: `${prefix}ytmp3 ${anu.url}`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: 'Video',
                                    id: `${prefix}ytmp4 ${anu.url}`
                                }
                            }]
                        }
                    }
               }), { userJid: m.chat })
                seina.relayMessage(m.chat, template.message, { messageId: template.key.id })
                }
break
case 'ye': {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)                   
let sections = []   
let listmenu = [`ytmp4 ${search.all[0].url}`,`ytmp3 ${search.all[1].url}`,`ytmp4 ${search.all[2].url}`,`ytmp3 ${search.all[3].url}`,`ytmp4 ${search.all[4].url}`,`ytmp3 ${search.all[5].url}`,`ytmp4 ${search.all[6].url}`,`ytmp3 ${search.all[7].url}`,`ytmp4 ${search.all[8].url}`,`ytmp3 ${search.all[9].url}`,`ytmp4 ${search.all[10].url}`,`ytmp3 ${search.all[11].url}`,`ytmp4 ${search.all[12].url}`,`ytmp3 ${search.all[13].url}`,`ytmp4 ${search.all[14].url}`,`ytmp3 ${search.all[15].url}`,`ytmp4 ${search.all[16].url}`,`ytmp3 ${search.all[17].url}`,`ytmp4 ${search.all[18].url}`,`ytmp3 ${search.all[19].url}`]
                    let listmenuu = [`[▶️]MP4 ${search.all[0].title}`,`[🎵] MP3 ${search.all[1].title}`,`[▶️]MP4 ${search.all[2].title}`,`[🎵] MP3 ${search.all[3].title}`,`[▶️]MP4 ${search.all[4].title}`,`[🎵] MP3 ${search.all[5].title}`,`[▶️]MP4 ${search.all[6].title}`,`[🎵] MP3 ${search.all[7].title}`,`[▶️]MP4 ${search.all[8].title}`,`[🎵] MP3 ${search.all[9].title}`,`[▶️]MP4 ${search.all[10].title}`,`[🎵] MP3 ${search.all[11].title}`,`[▶️]MP4 ${search.all[12].title}`,`[🎵] MP3 ${search.all[13].title}`,`[▶️]MP4 ${search.all[14].title}`,`[🎵] MP3 ${search.all[15].title}`,`[▶️]MP4 ${search.all[16].title}`,`[🎵] MP3 ${search.all[17].title}`,`[▶️]MP4 ${search.all[18].title}`,`[🎵] MP3 ${search.all[19].title}`]
                    let listmenuuu = [`\n${search.all[0].description}`,`\n${search.all[1].description}`,`\n${search.all[2].description}`,`\n${search.all[3].description}`,`\n${search.all[4].description}`,`\n${search.all[5].description}`,`\n${search.all[6].description}`,`\n${search.all[7].description}`,`\n${search.all[8].description}`,`\n${search.all[9].description}`,`\n${search.all[10].description}`,`\n${search.all[11].description}`,`\n${search.all[12].description}`,`\n${search.all[13].description}`,`\n${search.all[14].description}`,`\n${search.all[15].description}`,`\n${search.all[16].description}`,`\n${search.all[17].description}`,`\n${search.all[18].description}`,`\n${search.all[19].description}`]
                    let nombor = 1
                    let startnum = 0
                    let startnumm = 0
                    for (let x of listmenu) {
                    const list = {title: 'Pencarian Ke-' + nombor++,
                    rows: [
                       {
                        title: `${listmenuu[startnum++]}`,
                        description: `${listmenuuu[startnumm++]}`,
                        rowId: `${prefix}${x}`
	    }, 
	    ]
     }
     sections.push(list)   
     }
  const sendm =  seina.sendMessage(
      m.chat, 
      {
       text: "saweria.co/Nando35",
       footer: botname,
       title: "Berikut daftar menunya",
       buttonText: "Klik Di sini",
       sections
      }, { quoted : m })
      }
     break
case 'ytsaudio': case 'ytsmusic': case 'ytsearchmusic': {
if (isBan) throw mess.ban
//if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Example : ${prefix + command} Judul lagu yang mau di cari`
                let yts = require("yt-search")
                let search = await yts(text)                
                let no = 1
                let sections = []   
                for (let i of search.all) {
                const list = {title: `${i.title}`,
                rows: [
	                  {
	                  title: `${i.title}\n`, 
	                  rowId: `${prefix}ytmp3 ${i.url}`,
	                  description: `${i.description}\nDiupload: ${i.ago}\nChannel: ${i.author.name}\nViews: ${i.views}\nDuration: ${i.timestamp}\nLink ${i.url}`
	                  }, 
	                  ]
                      }
                      sections.push(list)   
                      }
                      const sendm =  seina.sendMessage(
                      m.chat, 
                      {
                      text: `🐔 ${text}`,
                      footer: botname,
                      title: `${ucapannya2} ${pushname} Berikut hasil pencarian dari`,
                      buttonText: "LIST AUDIO",
                      sections
                      }, { quoted : m })
                      }
                  break
case 'ytsvideo': case 'ytsearchvideo': {
if (isBan) throw mess.ban
                if (!text) throw `Example : ${prefix + command} kartun sepongeboob`
                let yts = require("yt-search")
                let search = await yts(text)                
                let no = 1
                let sections = []   
                for (let i of search.all) {
                const list = {title: `${i.title}`,
                rows: [
	                  {
	                  title: `${i.title}\n`, 
	                  rowId: `${prefix}ytmp4 ${i.url}`,
	                  description: `${i.description}\nDiupload: ${i.ago}\nChannel: ${i.author.name}\nViews: ${i.views}\nDuration: ${i.timestamp}\nLink ${i.url}`
	                  }, 
	                  ]
                      }
                      sections.push(list)   
                      }
                      const sendm =  seina.sendMessage(
                      m.chat, 
                      {
                      text: `🐔 ${text}`,
                      footer: botname,
                      title: `${ucapannya2} ${pushname} Berikut hasil pencarian dari`,
                      buttonText: "LIST VIDEO",
                      sections
                      }, { quoted : m })
                      }
                  break
case 'yts2': case 'youtubesearch2': case 'ytsearch2': {
//if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)                
                let no = 1
                let sections = []   
                for (let i of search.all) {
                const list = {title: `${i.title}`,
                rows: [
	                  {
	                  title: `${i.title}\n\n`, 
	                  rowId: `${prefix}ytmp3 ${i.url}`,
	                  description: `${i.description}`
	                  }, 
	                  ]
                      }
                      sections.push(list)   
                      }
                      const sendm =  seina.sendMessage(
                      m.chat, 
                      {
                      text: `🐔 ${text}`,
                      footer: botname,
                      title: `Berikut hasil pencarian dari`,
                      buttonText: "Klik Disini",
                      sections
                      }, { quoted : m })
                      }
                  break
case 'play': {  
if (isBan) throw mess.ban            
////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
           if (!text) throw `Example : ${prefix + command} story wa anime`           
           let yts = require("yt-search")
           aramas = await yts(text)
			aramat = aramas.all 
			var mulaikah = aramat[0].url
			try {
				xa.Youtube(mulaikah).then(async (data) => {				
				const captions = `*---- 「 PLAY MUSIC 」----*
						
*Title :* ${aramas.videos[0].title}
*Size :* ${data.medias[7].formattedSize}
*Descripsi :* ${aramas.videos[0].description}`
thumbyt = await getBuffer(aramas.videos[0].thumbnail)
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: captions,
                            locationMessage: {
                            jpegThumbnail: thumbyt},
                            hydratedFooterText: `${botname}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'SOURCE VIDEO',
                                    url: `${aramas.videos[0].url}`
                                }
                            }, {
                            	urlButton: {
                                displayText: `DONASI`, 
                                    url: `https://saweria.co/Nando35`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: `🎥 Video (${data.medias[1].formattedSize})`,
                                    id: `${prefix}ytmp4 ${aramas.videos[0].url}`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: `🎵 Audio (${data.medias[7].formattedSize})`,
                                    id: `${prefix}ytmp3 ${aramas.videos[0].url}`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: `🔎 YoutubeSearch ${aramas.videos[0].title}`,
                                    id: `${prefix}ytsearch ${aramas.videos[0].title}`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                seina.relayMessage(m.chat, template.message, { messageId: template.key.id })
			    })
				} catch (err) {
					reply('Terjadi kesalahan mungkin query tidak di temukan')
					}
					}
                break
	    case 'ytmp3':  case 'ytmusic': {	    
	            if (isBan) throw mess.ban
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
                if (!isUrl(args[0]) && !args[0].includes('youtube.com')) throw 'Link yang kamu berikan tidak.valid'
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
                if (isLimit < 1) return m.reply(mess.endLimit)
                kurangLimit(m.sender, 1)
                m.reply(`1 limit terpakai`)
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                let caption = `*----「 YOUTUBE AUDIO 」----*\n\n*Title :* ${media.title}\n*FileSize :* ${media.filesizeF}\n*Url :* ${isUrl(text)}\n*Ext :* MP3\n*Resolusi :* ${args[1] || '128kbps'}\n\n*ꜱɪᴍᴩʟᴇ ᴡʜᴀᴛꜱᴀᴩᴩ ʙᴏᴛ ᴍᴀᴅᴇ ʙy ʟɪyᴀ*`
                buf = await getBuffer(media.thumb)
                seina.sendMessage(m.chat, { image: { url: media.thumb }, jpegThumbnail:buf, caption: `${caption}` }, { quoted: m }).catch((err) => m.reply('Maaf link yang kamu berikan gak valid'))                
                seina.sendMessage(m.chat, {audio:{url:media.dl_link}, mimetype:"audio/mpeg", quoted: m, contextInfo: { externalAdReply:{title:media.title,body:"YOUTUBE MP3",mediaType:"2",thumbnail:buf,mediaUrl:`${text}`}}}).catch((err) => m.reply('Maaf link yang kamu berikan gak valid'))
                }
            break
           case 'ytmp4': case 'ytvideo': {
           if (isBan) throw mess.ban
                // //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)            
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
                if (!isUrl(args[0]) && !args[0].includes('youtube.com')) throw 'Link yang kamu berikan tidak.valid'
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                var capti = `*----「 YOUTUBE VIDEO 」----*\n\n*Title* : ${media.title}\n*FileSize* : ${media.filesizeF}\n*Url* : ${isUrl(text)}\n*Ext* : MP3\n*Resolusi* : ${args[1] || '360p'}\n\n*ꜱɪᴍᴩʟᴇ ᴡʜᴀᴛꜱᴀᴩᴩ ʙᴏᴛ ᴍᴀᴅᴇ ʙy ʟɪyᴀ*`
                var buf = await getBuffer(media.thumb)
                seina.sendMessage(m.chat, { image: { url: media.thumb }, jpegThumbnail:buf, caption: `${capti}` }, { quoted: m })
                seina.sendMessage(m.chat, { video: { url: media.dl_link }, jpegThumbnail:buf, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `*Downloading From ${text}*` }, { quoted: m }).catch((err) => m.reply('Gagal dalam mengirim video'))
            }
            break
case 'ytshorts': case 'shorts': {
      if (isBan) throw mess.ban
  if (!text) return m.reply(`Penggunaan ${prefix + command} masukkan link pin`)
  if (!isUrl(args[0]) && !args[0].includes('youtube')) throw 'Link yang kamu berikan tidak.valid'               
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)       
  xa.Youtube(`${text}`).then(async (data) => {
  if (data.medias[0].formattedSize.split('MB')[0] >= 100) return m.reply('File Melebihi Batas '+util.format(data)) 
  cap = `*----「 YOUTUBE SHORTS 」----*\n\n*Title:* ${data.title}\n*Quality:* ${data.medias[0].quality}\n*Size:* ${data.medias[0].formattedSize}\n*Duration:* ${data.duration}\n*ID:* ${data.medias[0].cached}\n*Link:* ${data.url}\n\n*ꜱɪᴍᴩʟᴇ ᴡʜᴀᴛꜱᴀᴩᴩ ʙᴏᴛ ᴍᴀᴅᴇ ʙy ʟɪyᴀ*`
  buf = await getBuffer(data.thumbnail)
  seina.sendMessage(m.chat, { image: { url: data.thumbnail }, jpegThumbnail:buf, caption: `${cap}` }, { quoted: m })
  seina.sendMessage(m.chat, { video: { url: data.medias[0].url }, jpegThumbnail:buf, caption: `*Title:* ${data.title}\n*Quality:* ${data.medias[0].quality}\n*Size:* ${data.medias[0].formattedSize}` }, { quoted: m })  
                }).catch((err) => {
                    m.reply(`*Gagal dalam mendownload dan mengirim media*`)
                })
            }
            break
	    case 'getmusic': {
	    if (isBan) throw mess.ban
	   // //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                let { yta } = require('./lib/y2mate')                
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return m.reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
		let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                seina.sendImage(m.chat, media.thumb, `> Title : ${media.title}\n> File Size : ${media.filesizeF}\n> Url : ${urls[text - 1]}\n> Ext : MP3\n> Resolusi : ${args[1] || '128kbps'}`, m)
                seina.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'getvideo': {          
            if (isBan) throw mess.ban
            ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                let { ytv } = require('./lib/y2mate')               
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return m.reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                seina.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `> Title : ${media.title}\n> File Size : ${media.filesizeF}\n> Url : ${urls[text - 1]}\n> Ext : MP3\n> Resolusi : ${args[1] || '360p'}` }, { quoted: m })
            }
            break

//────────────────────[ RANDOM GAMBAR ]────────────────────

case 'pinterest': case 'pin': {
if (isBan) throw mess.ban
                ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Example : ${prefix + command}`
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
		        let { pinterest } = require('./lib/liyascrape.js')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]      
                let log = await getBuffer(result)         
                let buttons = [                   
                    {buttonId: `pinterest ${text}`, buttonText: {displayText: '► NEXT'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result },          
                    jpegThumbnail: log,         
                    caption: `*Klik Next Untuk Melanjutkan*`,
                    footer: botname,
                    buttons: buttons,
                    headerType: 4
                }
                seina.sendMessage(m.chat, buttonMessage, { quoted: m }).catch((err) => m.reply('Maaf Teejasi keaalahan'))
            }
           break
          case 'angie': case 'aria': case 'attic': case 'blackandwhite': case 'chorme1977': case 'constrastbandw':
          case 'creamy': case 'duotone': case 'eva': case 'goldenhour': case 'hana': case 'hdr': case 'japanese':
          case 'lana': case 'lavander': case 'lemonande': case 'lightleak': case 'lisa': case 'lomo': case 'milk': case 'molly':
          case 'monochrome': case 'morning': case 'movie': case 'orton': case 'paretro': case 'perfectbandw': case 'plumy': 
          case 'retrolga': case 'ruby': case 'sand': case 'sapphire': case 'sepia': case 'softsepia': case 'solarize': case 'sphinx':
          case 'venus': case 'viewfinder': case 'warmsunset': {
                if (isBan) throw mess.ban
	            if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
	        	let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await seina.downloadAndSaveMediaMessage(quoted)                
                let anu = await TelegraPh(media)
                let buf = await getBuffer(`https://violetics.pw/api/photofilter/${command}?apikey=${setting.violkey}&image=${anu}`)
                seina.sendMessage(m.chat, { image: buf, jpegThumbnail:buf, caption: `PhotoFilter ${command}` }, { quoted: m}).catch ((err) => m.reply('Maaf gagal dalam mbuat filter'))
                }
                break
           case 'quotemaker': {
if (isBan) throw mess.ban
                ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)        
                if (!text) throw 'harus menggunakan text contoh: .quotemaker aku hanya sayang padamu'        
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
                anu = await getBuffer(`https://xteam.xyz/quotemaker?text=${text}&wm=stars&APIKEY=${setting.xteamkey}`)
                seina.sendMessage(m.chat, { image: anu, jpegThumbnail:anu, caption: `*${command}*` }, { quoted: m }).catch ((err) => m.reply('Maaf sedang erorr ftur nya'))
                }
           break
           case 'cecan': {
if (isBan) throw mess.ban
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
                anu = await getBuffer(`https://xteam.xyz/randomimage/cewe?APIKEY=${setting.xteamkey}`)
                seina.sendMessage(m.chat, { image: anu, jpegThumbnail:anu, caption: `*${command}*` }, { quoted: m }).catch ((err) => m.reply('Maaf sedang erorr ftur nya'))
                }
           break
           case 'cogan': {
if (isBan) throw mess.ban
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
                anu = await getBuffer(`https://xteam.xyz/randomimage/cowo?APIKEY=${setting.xteamkey}`)
                seina.sendMessage(m.chat, { image: anu, jpegThumbnail:anu, caption: `*${command}*` }, { quoted: m }).catch ((err) => m.reply('Maaf sedang erorr ftur nya'))
                }
           break
           case 'shota': {
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
                anu = await getBuffer(`https://xteam.xyz/randomimage/shota?APIKEY=${setting.xteamkey}`)
                seina.sendMessage(m.chat, { image: anu, jpegThumbnail:anu, caption: `*${command}*` }, { quoted: m }).catch ((err) => m.reply('Maaf sedang erorr ftur nya'))
                }
           break
           case 'bts': {
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
                anu = await getBuffer(`https://xteam.xyz/randomimage/bts?APIKEY=${setting.xteamkey}`)
                seina.sendMessage(m.chat, { image: anu, jpegThumbnail:anu, caption: `*${command}*` }, { quoted: m }).catch ((err) => m.reply('Maaf sedang erorr ftur nya'))
                }
            break
           case 'exo': {
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
                anu = await getBuffer(`https://xteam.xyz/randomimage/exo?APIKEY=${setting.xteamkey}`)
                seina.sendMessage(m.chat, { image: anu, jpegThumbnail:anu, caption: `*${command}*` }, { quoted: m }).catch ((err) => m.reply('Maaf sedang erorr ftur nya'))
                }
           break
           case 'meme': {
if (isBan) throw mess.ban
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
                anu = await getBuffer(`https://xteam.xyz/randomimage/meme?APIKEY=${setting.xteamkey}`)
                seina.sendMessage(m.chat, { image: anu, jpegThumbnail:anu, caption: `*${command}*` }, { quoted: m }).catch ((err) => m.reply('Maaf sedang erorr ftur nya'))
                }
           break
           case 'meme2': {
if (isBan) throw mess.ban
                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)                
                m.reply(mess.wait)
                anu = await getBuffer(`https://xteam.xyz/randomimage/meme2?APIKEY=${setting.xteamkey}`)
                seina.sendMessage(m.chat, { image: anu, jpegThumbnail:anu, caption: `*${command}*` }, { quoted: m }).catch ((err) => m.reply('Maaf sedang erorr ftur nya'))
                }
           break
           case 'drakjoke': case 'darkjoke': {
if (isBan) throw mess.ban
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
                anu = await getBuffer(`https://xteam.xyz/randomimage/drak?APIKEY=${setting.xteamkey}`)
                seina.sendMessage(m.chat, { image: anu, jpegThumbnail:anu, caption: `*${command}*` }, { quoted: m }).catch ((err) => m.reply('Maaf sedang erorr ftur nya'))
                }
           break
           case 'husbu': {
if (isBan) throw mess.ban
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
                anu = await getBuffer(`https://xteam.xyz/randomimage/husbu?APIKEY=${setting.xteamkey}`)
                seina.sendMessage(m.chat, { image: anu, jpegThumbnail:anu, caption: `*${command}*` }, { quoted: m }).catch ((err) => m.reply('Maaf sedang erorr ftur nya'))
                }
           break
           case 'husbu2': {
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
                anu = await getBuffer(`https://xteam.xyz/randomimage/husbu2?APIKEY=${setting.xteamkey}`)
                seina.sendMessage(m.chat, { image: anu, jpegThumbnail:anu, caption: `*${command}*` }, { quoted: m }).catch ((err) => m.reply('Maaf sedang erorr ftur nya'))
                }
           break
           case 'wallpaper2': {
               if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
                anu = await getBuffer(`https://xteam.xyz/randomimage/wallpaper?APIKEY=${setting.xteamkey}`)
                seina.sendMessage(m.chat, { image: anu, jpegThumbnail:anu, caption: `*${command}*` }, { quoted: m }).catch ((err) => m.reply('Maaf sedang erorr ftur nya'))
                }
           break
           case 'wallpaper3': {
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
                anu = await getBuffer(`https://xteam.xyz/randomimage/wallpaper2?APIKEY=${setting.xteamkey}`)
                seina.sendMessage(m.chat, { image: anu, jpegThumbnail:anu, caption: `*${command}*` }, { quoted: m }).catch ((err) => m.reply('Maaf sedang erorr ftur nya'))
                }
           break
           case 'wallpaper4': {
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
                anu = await getBuffer(`https://xteam.xyz/randomimage/wallpaper3?APIKEY=${setting.xteamkey}`)
                seina.sendMessage(m.chat, { image: anu, jpegThumbnail:anu, caption: `*${command}*` }, { quoted: m }).catch ((err) => m.reply('Maaf sedang erorr ftur nya'))
                }
           break
          case 'wallpaper5': {
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
                anu = await getBuffer(`https://xteam.xyz/randomimage/wallpaper4?APIKEY=${setting.xteamkey}`)
                seina.sendMessage(m.chat, { image: anu, jpegThumbnail:anu, caption: `*${command}*` }, { quoted: m }).catch ((err) => m.reply('Maaf sedang erorr ftur nya'))
                }
           break
           case 'ahegao': {
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
                anu = await getBuffer(`https://xteam.xyz/randomimage/ahegao?APIKEY=${setting.xteamkey}`)
                seina.sendMessage(m.chat, { image: anu, jpegThumbnail:anu, caption: `*${command}*` }, { quoted: m }).catch ((err) => m.reply('Maaf sedang erorr ftur nya'))
                }
            break
           case 'waifu': case 'megumin': case 'neko': case 'bully': case 'shinobu': case 'bully': case 'cuddle': case 'cry': case 'hug': case 'awoo': case 'kiss': case 'pat': case 'smug': case 'bonk': case 'yeet': case 'lick': {
           if (isBan) throw mess.ban
           ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
           if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
           let wipu = await fetchJson(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/waifu.json`)
           let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
           let buttons = [
                    {buttonId: `${prefix}waifu`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: wipi },
                    caption: `Nih kak`,
                    footer: botname,
                    buttons: buttons,
                    headerType: 4
                }
                seina.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	    case 'couple': {
	    if (isBan) throw mess.ban
	           if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                seina.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
                seina.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
            }
	    break        
            case 'coffe': case 'kopi': {
            if (isBan) throw mess.ban
            if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
            let buttons = [
                    {buttonId: `coffe`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `☕ Random Coffe`,
                    footer: botname,
                    buttons: buttons,
                    headerType: 4
                }
                seina.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wallpaper': {
            if (isBan) throw mess.ban
            ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw 'Masukkan Query Title'
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
		let { wallpaper } = require('./lib/scraper3')
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `> Title : ${result.title}\n> Category : ${result.type}\n> Detail : ${result.source}\n> Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: seina.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                seina.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wikimedia': {
           // //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw 'Masukkan Query Title'
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
		let { wikimedia } = require('./lib/scraper3')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `wikimedia ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `> Title : ${result.title}\n> Source : ${result.source}\n> Media Url : ${result.image}`,
                    footer: seina.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                seina.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'kbbi': {            
if (isBan) throw mess.ban
            if (!text) throw `Example : ${prefix + command} kerbau`           
            if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
            anu = await fetchJson(`https://hardianto.xyz/api/info/kbbi?kata=${text}&apikey=hardianto`)                                  
            m.reply(`${anu.result.lema}\n${anu.result.arti[0]}`)
            }
            break
            case 'kodepos': {            
            if (!text) throw `Nama Kotanya Mana contoh : Example : ${prefix + command} kediri`           
            if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
            anu = await fetchJson(`https://cililitan.herokuapp.com/api/kodepos?kota=${text}`)       
            for (let g of anu.result.data) {            
            let helo = `*----「 KODEPOS 」----*\n\n*province* : ${g.province}\n*City* : ${g.city}\n*subdistrict* : ${g.subdistrict}\n*Urban* : ${g.urban}\n*postalcode* : ${g.postalcode}\n\n*ꜱɪᴍᴩʟᴇ ᴡʜᴀᴛꜱᴀᴩᴩ ʙᴏᴛ ᴍᴀᴅᴇ ʙy ʟɪyᴀ*`
            m.reply(`${helo}`)
            }
            }
            break
            case 'quotesanime': case 'quoteanime': {
            if (isBan) throw mess.ban
            if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
		let { quotesAnime } = require('./lib/scraper3')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `quotesanime`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                seina.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wp': case 'wattpad': case 'wattpadsearch': {

if (!text) throw 'Masukkan query' 

                if (!isInventoryLimit){ addInventoriLimit(m.sender) }

            if (isLimit < 1) return m.reply(mess.endLimit)

            kurangLimit(m.sender, 1)

            m.reply(`1 limit terpakai`)                

                let urlnya = text

	            xa.Wattpad(urlnya)

	            .then(async(result) => {	  	                                	                      	            		                  			    				

				let link = await getBuffer(result[0].thumb)

                seina.sendMessage(m.chat, { image: link, caption: `${result[0].description}\nJudul: ${result[0].judul}\nAuthor: Liya\nDibaca: ${result[0].dibaca}\nDivote: ${result[0].divote}\nBab: ${result[0].bab}\nWaktu: ${result[0].waktu}\nUrl: ${result[0].url}` }, { quoted: m })                                              

            }).catch((err) => m.reply(`*Maaf Futur Error*`))

            }		

			break

//────────────────────[ TEXT MAKER, PHOTOOXY, IMAGE EFFECT,  ]────────────────────
     
     case 'tahta': case 'hartatahta': {
     if (isBan) throw mess.ban
     if (!isPremium && !isCreator) throw 'only premium'
////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
if (!text) throw 'Masukkan Textnya Contoh : .hartatahta alyabot'
//if (!isUrl(args[0]) && !args[0].includes('vimeo.com')) throw 'Link yang kamu berikan tidak.valid'
if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
peh = `https://xteam.xyz/tahta?text=${text}&APIKEY=${setting.xteamkey}`
seina.sendMessage(m.chat, {image: await getBuffer(peh)}, {quoted:m}).catch ((err) => m.reply('Maaf terjadi Kesalahn'))     
}
break

     case 'neon': case 'snowtext': case 'cloudtext': case '3dluxury': case '3dgradient': case 'blackpink': case 'realisticvintage': case 'realisticloud': case 'cloudsky': case 'sandsummerbeach': case 'sandwriting': case 'sandengraved': case 'ballontext': case '3dglue': case 'space3d': case 'metaldarkgold': case 'glitch': case 'neongalaxy': case '1917text': case 'minion3d': case 'holographic3d': case 'metalpurple': case 'duluxesilver': case 'bluemetal': case 'duluxegold': case 'glossycarbon': case 'febric': case 'stone': case 'pornhub': case '3davengers': case 'marvelstudios': case 'marvel': case 'happynewyear': case 'newyear3d': case 'neontext': case 'darkgoldeffect': case 'hollowenfire': case 'bloodtext': case 'xmas3d': case '3dmetalsilver': case '3drosegold': case '3dmetalgold': case '3dmetalgalaxy': case 'lionlogo': case 'wolflogoblack': case 'wolflogogalaxy': case 'ninjalogo': case 'jokerlogo': case 'wicker': case 'naturalleaves': case 'fireworksparkle': case 'skeleton': case 'redfoilballon': case 'purplefoilballon': case 'pinkfoilballon': case 'greenfoilballon': case 'cyanfoilballon': case 'bluefoilballon': case 'goldfoilballon': case 'steel': case 'ultragloss': case 'denim': case 'decorategreen': case 'decoratepurple': case 'peridotstone': case 'rock': case 'lava': case 'yellowglass': case 'purpleglass': case 'orangeglass': case 'greenglass': case 'blueglass': case 'redglass': case 'purpleshinyglass': case 'captainamerica': case 'robotr2d2': case 'toxic': case 'rainbowequalizier': case 'pinksparklingjewelry': {
     if (isBan) throw mess.ban
                ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Example : ${prefix + command} text`
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
                anu = await getBuffer(`https://xteam.xyz/textpro/${command}?text=${text}&APIKEY=${setting.xteamkey}`)
                seina.sendMessage(m.chat, { image: anu, caption: `Text Pro ${command}` }, { quoted: m}).catch((err) => m.reply('Maaf server Xteam sedang down'))
	            }
                break
     case 'neon': {
     if (isBan) throw mess.ban
     if (!isPremium && !isCreator) throw 'only premium'
                ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Example : ${prefix + command} text`
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
                anu = await getBuffer(`https://xteam.xyz/textpro/${command}?text=${text}&APIKEY=${setting.xteamkey}`)
                seina.sendMessage(m.chat, { image: anu, caption: `Text Pro ${command}` }, { quoted: m}).catch((err) => m.reply('Maaf server Xteam sedang down'))
	            }
                break
     case 'wanted': case 'ytcomment': case 'beautiful': case 'jail': case 'fotojatoh': case 'pixelate': case 'blur': case 'imagesketch': case 'triggeredwebp': case 'shit': case 'burn': case 'invert': case 'gay': case 'wanted': case 'rip': case 'delete': {
     if (isBan) throw mess.ban
     if (!isPremium && !isCreator) throw 'only premium'
                ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
	            if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
	        	let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await seina.downloadAndSaveMediaMessage(quoted)                
                let anu = await TelegraPh(media)
                let buf = await getBuffer(`https://cililitan.herokuapp.com/api/${command}?url=${anu}`)
                seina.sendMessage(m.chat, { image: buf, caption: `Effect ${command}` }, { quoted: m}).catch ((err) => m.reply('Maaf gagal dalam mbuat efek'))
                }
                break
case 'graffiti': {
if (isBan) throw mess.ban
if (!isPremium && !isCreator) throw 'only premium'
                if (!text) throw `Example : ${prefix + command} nama anime`
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
                anu = await getBuffer(`https://api.akuari.my.id/ephoto/graffiti?text=${text}&text_2=${text}`)
                seina.sendMessage(m.chat, { image: anu, caption: `${command}` }, { quoted: m}).catch((err) => m.reply('Maaf server Xteam sedang down'))
	            }
                break
                case 'tololserti': {
if (isBan) throw mess.ban
                if (!text) throw `Example : ${prefix + command} text`
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
                anu = await getBuffer(`https://api.lolhuman.xyz/api/toloserti?apikey=${setting.lolkey}&name=${text}`)
                seina.sendMessage(m.chat, { image: anu, caption: `${command}` }, { quoted: m}).catch((err) => m.reply('Maaf server Xteam sedang down'))
	            }
                break
                case 'fuckboyserti': {
                if (!text) throw `Example : ${prefix + command} text`
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
                anu = await getBuffer(`https://api.lolhuman.xyz/api/fuckboy?apikey=${setting.lolkey}&name=${text}`)
                seina.sendMessage(m.chat, { image: anu, caption: `${command}` }, { quoted: m}).catch((err) => m.reply('Maaf server Xteam sedang down'))
	            }
                break
                case 'fuckgirlserti': {
                if (!text) throw `Example : ${prefix + command} text`
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
                anu = await getBuffer(`https://api.lolhuman.xyz/api/fuckgirl?apikey=${setting.lolkey}&name=${text}`)
                seina.sendMessage(m.chat, { image: anu, caption: `${command}` }, { quoted: m}).catch((err) => m.reply('Maaf server Xteam sedang down'))
	            }
                break
                case 'bucinserti': {
                if (!text) throw `Example : ${prefix + command} text`
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
                anu = await getBuffer(`https://api.lolhuman.xyz/api/bucinserti?apikey=${setting.lolkey}&name=${text}`)
                seina.sendMessage(m.chat, { image: anu, caption: `${command}` }, { quoted: m}).catch((err) => m.reply('Maaf server Xteam sedang down'))
	            }
                break
                case 'goodboyserti': {
                if (!text) throw `Example : ${prefix + command} text`
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
                anu = await getBuffer(`https://api.lolhuman.xyz/api/goodboy?apikey=${setting.lolkey}&name=${text}`)
                seina.sendMessage(m.chat, { image: anu, caption: `${command}` }, { quoted: m}).catch((err) => m.reply('Maaf server Xteam sedang down'))
	            }
                break
                case 'goodgirlserti': {
                if (!text) throw `Example : ${prefix + command} text`
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
                anu = await getBuffer(`https://api.lolhuman.xyz/api/goodgirl?apikey=${setting.lolkey}&name=${text}`)
                seina.sendMessage(m.chat, { image: anu, caption: `${command}` }, { quoted: m}).catch((err) => m.reply('Maaf server Xteam sedang down'))
	            }
                break
                case 'badboyserti': {
                if (!text) throw `Example : ${prefix + command} text`
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
                anu = await getBuffer(`https://api.lolhuman.xyz/api/badboy?apikey=${setting.lolkey}&name=${text}`)
                seina.sendMessage(m.chat, { image: anu, caption: `${command}` }, { quoted: m}).catch((err) => m.reply('Maaf server Xteam sedang down'))
	            }
                break
               case 'badgirlserti': {
                if (!text) throw `Example : ${prefix + command} text`
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
                anu = await getBuffer(`https://api.lolhuman.xyz/api/badgirl?apikey=${setting.lolkey}&name=${text}`)
                seina.sendMessage(m.chat, { image: anu, caption: `${command}` }, { quoted: m}).catch((err) => m.reply('Maaf server Xteam sedang down'))
	            }
                break
//────────────────────[ FUN PRIMBON ]────────────────────

	    case 'nomerhoki': case 'nomorhoki': {
	    ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!Number(text)) throw `Example : ${prefix + command} 6288292024190`
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
                let anu = await primbon.nomer_hoki(Number(text))
                if (anu.status == false) return m.reply(anu.message)
                seina.sendText(m.chat, `> *Nomor HP :* ${anu.message.nomer_hp}\n> *Angka Shuzi :* ${anu.message.angka_shuzi}\n> *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n> *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
            }
            break
            case 'artimimpi': case 'tafsirmimpi': {
            ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Example : ${prefix + command} belanja`
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
                let anu = await primbon.tafsir_mimpi(text)
                if (anu.status == false) return m.reply(anu.message)
                seina.sendText(m.chat, `> *Mimpi :* ${anu.message.mimpi}\n> *Arti :* ${anu.message.arti}\n> *Solusi :* ${anu.message.solusi}`, m)
            }
            break
            case 'ramalanjodoh': case 'ramaljodoh': {
             ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                seina.sendText(m.chat, `> *Nama Anda :* ${anu.message.nama_anda.nama}\n> *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n> *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n> *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n> *Hasil :* ${anu.message.result}\n> *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalanjodohbali': case 'ramaljodohbali': {
            // //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                seina.sendText(m.chat, `> *Nama Anda :* ${anu.message.nama_anda.nama}\n> *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n> *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n> *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n> *Hasil :* ${anu.message.result}\n> *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'suamiistri': {
            // //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                seina.sendText(m.chat, `> *Nama Suami :* ${anu.message.suami.nama}\n> *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n> *Nama Istri :* ${anu.message.istri.nama}\n> *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n> *Hasil :* ${anu.message.result}\n> *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalancinta': case 'ramalcinta': {
            ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                seina.sendText(m.chat, `> *Nama Anda :* ${anu.message.nama_anda.nama}\n> *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n> *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n> *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n> *Sisi Positif :* ${anu.message.sisi_positif}\n> *Sisi Negatif :* ${anu.message.sisi_negatif}\n> *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artinama': {            
                if (!text) throw `Example : ${prefix + command} Dika Ardianta`
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
                let anu = await primbon.arti_nama(text)
                if (anu.status == false) return m.reply(anu.message)
                seina.sendText(m.chat, `> *Nama :* ${anu.message.nama}\n> *Arti :* ${anu.message.arti}\n> *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'kecocokannama': case 'cocoknama': {
            ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                seina.sendText(m.chat, `> *Nama :* ${anu.message.nama}\n> *Lahir :* ${anu.message.tgl_lahir}\n> *Life Path :* ${anu.message.life_path}\n> *Destiny :* ${anu.message.destiny}\n> *Destiny Desire :* ${anu.message.destiny_desire}\n> *Personality :* ${anu.message.personality}\n> *Persentase :* ${anu.message.persentase_kecocokan}`, m)
            }
            break
            case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
            // //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Example : ${prefix + command} Dika|Novia`
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
                let [nama1, nama2] = text.split`|`
                let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
                if (anu.status == false) return m.reply(anu.message)
                seina.sendImage(m.chat,  anu.message.gambar, `> *Nama Anda :* ${anu.message.nama_anda}\n> *Nama Pasangan :* ${anu.message.nama_pasangan}\n> *Sisi Positif :* ${anu.message.sisi_positif}\n> *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
            }
            break
            case 'jadianpernikahan': case 'jadiannikah': {
             //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Example : ${prefix + command} 6, 12, 2020`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                seina.sendText(m.chat, `> *Tanggal Pernikahan :* ${anu.message.tanggal}\n> *karakteristik :* ${anu.message.karakteristik}`, m)
            }
            break
            case 'sifatusaha': {
             //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!ext)throw `Example : ${prefix+ command} 28, 12, 2021`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                seina.sendText(m.chat, `> *Lahir :* ${anu.message.hari_lahir}\n> *Usaha :* ${anu.message.usaha}`, m)
            }
            break
            case 'rejeki': case 'rezeki': {
             //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                seina.sendText(m.chat, `> *Lahir :* ${anu.message.hari_lahir}\n> *Rezeki :* ${anu.message.rejeki}\n> *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'pekerjaan': case 'kerja': {
             //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                seina.sendText(m.chat, `> *Lahir :* ${anu.message.hari_lahir}\n> *Pekerjaan :* ${anu.message.pekerjaan}\n> *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalannasib': case 'ramalnasib': case 'nasib': {
             //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Example : 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.ramalan_nasib(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                seina.sendText(m.chat, `> *Analisa :* ${anu.message.analisa}\n> *Angka Akar :* ${anu.message.angka_akar}\n> *Sifat :* ${anu.message.sifat}\n> *Elemen :* ${anu.message.elemen}\n> *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
            }
            break
            case 'potensipenyakit': case 'penyakit': {
             //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                seina.sendText(m.chat, `> *Analisa :* ${anu.message.analisa}\n> *Sektor :* ${anu.message.sektor}\n> *Elemen :* ${anu.message.elemen}\n> *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artitarot': case 'tarot': {
             //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                seina.sendImage(m.chat, anu.message.image, `> *Lahir :* ${anu.message.tgl_lahir}\n> *Simbol Tarot :* ${anu.message.simbol_tarot}\n> *Arti :* ${anu.message.arti}\n> *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'fengshui': {
             //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Example : ${prefix + command} Dika, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
                let [nama, gender, tahun] = text.split`,`
                let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
                if (anu.status == false) return m.reply(anu.message)
                seina.sendText(m.chat, `> *Nama :* ${anu.message.nama}\n> *Lahir :* ${anu.message.tahun_lahir}\n> *Gender :* ${anu.message.jenis_kelamin}\n> *Angka Kua :* ${anu.message.angka_kua}\n> *Kelompok :* ${anu.message.kelompok}\n> *Karakter :* ${anu.message.karakter}\n> *Sektor Baik :* ${anu.message.sektor_baik}\n> *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
            }
            break
            case 'haribaik': {
             //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.petung_hari_baik(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                seina.sendText(m.chat, `> *Lahir :* ${anu.message.tgl_lahir}\n> *Kala Tinantang :* ${anu.message.kala_tinantang}\n> *Info :* ${anu.message.info}\n> *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harisangar': case 'taliwangke': {
             //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                seina.sendText(m.chat, `> *Lahir :* ${anu.message.tgl_lahir}\n> *Hasil :* ${anu.message.result}\n> *Info :* ${anu.message.info}\n> *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harinaas': case 'harisial': {
             //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                seina.sendText(m.chat, `> *Hari Lahir :* ${anu.message.hari_lahir}\n> *Tanggal Lahir :* ${anu.message.tgl_lahir}\n> *Hari Naas :* ${anu.message.hari_naas}\n> *Info :* ${anu.message.catatan}\n> *Catatan :* ${anu.message.info}`, m)
            }
            break
            case 'nagahari': case 'harinaga': {
             //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                seina.sendText(m.chat, `> *Hari Lahir :* ${anu.message.hari_lahir}\n> *Tanggal Lahir :* ${anu.message.tgl_lahir}\n> *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n> *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'arahrejeki': case 'arahrezeki': {
             //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                seina.sendText(m.chat, `> *Hari Lahir :* ${anu.message.hari_lahir}\n> *tanggal Lahir :* ${anu.message.tgl_lahir}\n> *Arah Rezeki :* ${anu.message.arah_rejeki}\n> *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'peruntungan': {
             //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Example : ${prefix + command} DIka, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
                let [nama, tgl, bln, thn, untuk] = text.split`,`
                let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
                if (anu.status == false) return m.reply(anu.message)
                seina.sendText(m.chat, `> *Nama :* ${anu.message.nama}\n> *Lahir :* ${anu.message.tgl_lahir}\n> *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n> *Hasil :* ${anu.message.result}\n> *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'weton': case 'wetonjawa': {
             //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.weton_jawa(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                seina.sendText(m.chat, `> *Tanggal :* ${anu.message.tanggal}\n> *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n> *Watak Hari :* ${anu.message.watak_hari}\n> *Naga Hari :* ${anu.message.naga_hari}\n> *Jam Baik :* ${anu.message.jam_baik}\n> *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
            }
            break
            case 'sifat': case 'karakter': {
             //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                seina.sendText(m.chat, `> *Nama :* ${anu.message.nama}\n> *Lahir :* ${anu.message.tgl_lahir}\n> *Garis Hidup :* ${anu.message.garis_hidup}`, m)
            }
            break
            case 'keberuntungan': {
             //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                seina.sendText(m.chat, `> *Nama :* ${anu.message.nama}\n> *Lahir :* ${anu.message.tgl_lahir}\n> *Hasil :* ${anu.message.result}`, m)
            }
            break
            case 'memancing': {
            //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                seina.sendText(m.chat, `> *Tanggal :* ${anu.message.tgl_memancing}\n> *Hasil :* ${anu.message.result}\n> *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'masasubur': {
             //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
                let [tgl, bln, thn, siklus] = text.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return m.reply(anu.message)
                seina.sendText(m.chat, `> *Hasil :* ${anu.message.result}\n> *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'zodiak': case 'zodiac': {
            //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Example : ${prefix+ command} 7 7 2005`
                let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
                ].reverse()

                function getZodiac(month, day) {
                    let d = new Date(1970, month - 1, day)
                    return zodiak.find(([_,_d]) => d >= _d)[0]
                }
                let date = new Date(text)
                if (date == 'Invalid Date') throw date
                let d = new Date()
                let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
                let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

                let zodiac = await getZodiac(birth[1], birth[2])
                
                let anu = await primbon.zodiak(zodiac)
                if (anu.status == false) return m.reply(anu.message)
                seina.sendText(m.chat, `> *Zodiak :* ${anu.message.zodiak}\n> *Nomor :* ${anu.message.nomor_keberuntungan}\n> *Aroma :* ${anu.message.aroma_keberuntungan}\n> *Planet :* ${anu.message.planet_yang_mengitari}\n> *Bunga :* ${anu.message.bunga_keberuntungan}\n> *Warna :* ${anu.message.warna_keberuntungan}\n> *Batu :* ${anu.message.batu_keberuntungan}\n> *Elemen :* ${anu.message.elemen_keberuntungan}\n> *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n> *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'shio': {
             //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
                let anu = await primbon.shio(text)
                if (anu.status == false) return m.reply(anu.message)
                seina.sendText(m.chat, `> *Hasil :* ${anu.message}`, m)
            }
            break
	    case 'stalker': case 'stalk': {
	    if (isBan) throw mess.ban
	 //   //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
		//if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('Limit Harian Anda Telah Habis')
                if (!text) return m.reply(`Example : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
                let [type, id, zone] = args
                if (type.toLowerCase() == 'ff') {
                    if (!id) throw `No Query id, Example ${prefix + command} ff 552992060`
                    let anu = await fetchJson(api('zenz', '/api/nickff', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'ml') {
                    if (!id) throw `No Query id, Example : ${prefix + command} ml 214885010 2253`
                    if (!zone) throw `No Query id, Example : ${prefix + command} ml 214885010 2253`
                    let anu = await fetchJson(api('zenz', '/api/nickml', { apikey: global.APIKeys[global.APIs['zenz']], query: id, query2: zone }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nZone : ${anu.result.zoneId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'aov') {
                    if (!id) throw `No Query id, Example ${prefix + command} aov 293306941441181`
                    let anu = await fetchJson(api('zenz', '/api/nickaov', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'cod') {
                    if (!id) throw `No Query id, Example ${prefix + command} cod 6290150021186841472`
                    let anu = await fetchJson(api('zenz', '/api/nickcod', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'pb') {
                    if (!id) throw `No Query id, Example ${prefix + command} pb riio46`
                    let anu = await fetchJson(api('zenz', '/api/nickpb', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'ig') {
                    if (!id) throw `No Query username, Example : ${prefix + command} ig cak_haho`
                    let { result: anu } = await fetchJson(api('zenz', '/api/stalker/ig', { username: id }, 'apikey'))
                    if (anu.status == false) return m.reply(anu.result.message)
                    seina.sendMedia(m.chat, anu.caption.profile_hd, '', `> Full Name : ${anu.caption.full_name}\n> User Name : ${anu.caption.user_name}\n> ID ${anu.caption.user_id}\n> Followers : ${anu.caption.followers}\n> Following : ${anu.caption.following}\n> Bussines : ${anu.caption.bussines}\n> Profesional : ${anu.caption.profesional}\n> Verified : ${anu.caption.verified}\n> Private : ${anu.caption.private}\n> Bio : ${anu.caption.biography}\n> Bio Url : ${anu.caption.bio_url}`, m)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'npm') {
                    if (!id) throw `No Query username, Example : ${prefix + command} npm scrape-primbon`
                    let { result: anu } = await fetchJson(api('zenz', '/api/stalker/npm', { query: id }, 'apikey'))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`> Name : ${anu.name}\n> Version : ${Object.keys(anu.versions)}\n> Created : ${tanggal(anu.time.created)}\n> Modified : ${tanggal(anu.time.modified)}\n> Maintainers :\n ${anu.maintainers.map(v => `- ${v.name} : ${v.email}`).join('\n')}\n\n> Description : ${anu.description}\n> Homepage : ${anu.homepage}\n> Keywords : ${anu.keywords}\n> Author : ${anu.author.name}\n> License : ${anu.license}\n> Readme : ${anu.readme}`)
		    db.data.users[m.sender].limit -= 1
                } else {
                    m.reply(`Example : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                }
            }
            break

//────────────────────[ DOWNLOADER ]────────────────────

case 'tiktok4': {
               // //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw 'Masukkan Query Link!'                
                if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) throw 'Link yang kamu berikan tidak.valid'
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
                //m.reply(mess.wait)
                hx.ttdownloader(`${text}`).then(async (data) => {                      
                    let buttons = [                    
                    {buttonId: `${prefix}tiktokmp3 ${text}`, buttonText: {displayText: '🎵 Tiktok Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: data.nowm },                    
                    caption: `${util.format(data)}`,
                    footer: 'Silahkan Pilih Dibawah',
                    buttons: buttons,
                    headerType: 5
                }
                seina.sendMessage(m.chat, buttonMessage, { quoted: m })                
                }).catch((err) => {
                    m.reply(`*Gagal Saat mendownload media dan mengirm video*`)
                })
            }
            break
            case 'tiktok2': {
if (!text) throw `Use example ${prefix + command} https://www.tiktok.com/@omagadsus/video/7025456384175017243`
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) throw 'Link yang kamu berikan tidak.valid'
if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
anu = await fetchJson(`https://xteam.xyz/dl/tiktok?url=${text}&APIKEY=${setting.xteamkey}`)
let listmn = `*----「 TIKTOKNOWM 」----*\n\n*Judul:* ${anu.result.caption}\n*Author:* ${anu.result.name}\n*Url:* ${text}`
buf = await getBuffer(anu.result.thumb_img)
buf2 = await getBuffer(anu.result.link_dl2)
let message = await prepareWAMessageMedia({ video: buf2, gifPlayback:false, jpegThumbnail:buf }, { upload: seina.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
videoMessage: message.videoMessage,
hydratedContentText: listmn,
hydratedFooterText: `${botname}`,
hydratedButtons: [{
urlButton: {
displayText: 'Group Whatsapp',
url: 'https://chat.whatsapp.com/EghqJgS7UZYFzkdLa9lbIN'
}
}, {
urlButton: {
displayText: 'Instagram',
url: 'https://instagram.com/alya.xzy'
}
}, {
quickReplyButton: {
displayText: 'Status Bot',
id: 'ping'
}
}, {
quickReplyButton: {
displayText: 'Contact Owner',
id: 'owner'
}  
}, {
quickReplyButton: {
displayText: 'Donasi',
id: 'donadi'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
seina.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'tiktok': case 'tiktoknowm': case 'tiktokwm': case 'tt': case 'ttnowm': case 'ttwm': {
if (isBan) throw mess.ban
               // //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw 'Masukkan Query Link!'            
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
                let bocil = require('@bochilteam/scraper')    
                if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) throw 'Link yang kamu berikan tidak.valid'                
                bocil.tiktokdlv3(`${text}`).then(async (video) => {           
                  var hadi = randomNomor(100)        
                   var hadie = randomNomor(200)     
                   var hadir = randomNomor(300)
                    var memek = randomNomor(1000)                      
                  let caption = `*----「 TIKTOK DOWNLOADER 」----*\n\n*Author* : Liya\n*Nickname* : ${video.author.nickname}\n*Caption* : ${video.description}\n*Quality* : nowatermark\n*Coments* : ${memek}\n*Create* ${hadir} Ago\n*Likes* : ${hadi}\n*Dishare* : ${hadie}\n*Source* : ${text}\n\n\n*ꜱɪᴍᴩʟᴇ ᴡʜᴀᴛꜱᴀᴩᴩ ʙᴏᴛ ᴍᴀᴅᴇ ʙy ʟɪyᴀ*`
                  buf = await getBuffer(video.author.avatar)                
                  seina.sendMessage(m.chat, { image: { url: video.author.avatar }, jpegThumbnail:buf, caption: `${caption}` }, { quoted: m })
                  seina.sendMessage(m.chat, { video: { url: video.video.no_watermark }, jpegThumbnail:buf, mimetype: 'video/mp4', caption: `*Downloading From ${text}*` }, { quoted: m })               
                }).catch((err) => {
                    m.reply(`*Gagal Saat mendownload media dan mengirm video*`)
                })
            }
            break
case 'tiktok5': case 'tt5': {
               // //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw 'Masukkan Query Link!'            
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
                let bocil = require('@bochilteam/scraper')    
                if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) throw 'Link yang kamu berikan tidak.valid'                
                bocil.tiktokdlv3(`${text}`).then(async (video) => {           
                  var hadi = randomNomor(100)        
                   var hadie = randomNomor(200)     
                   var hadir = randomNomor(300)
                    var memek = randomNomor(1000)                      
                  let caption = `*----「 TIKTOK DOWNLOADER 」----*\n\n*Author* : Liya\n*Nickname* : ${video.author.nickname}\n*Caption* : ${video.description}\n*Coments* : ${memek}\n*Create* ${hadir} Ago\n*Likes* : ${hadi}\n*Dishare* : ${hadie}\n*Source* : ${text}\n\n\n*ꜱɪᴍᴩʟᴇ ᴡʜᴀᴛꜱᴀᴩᴩ ʙᴏᴛ ᴍᴀᴅᴇ ʙy ʟɪyᴀ*`
                  buf = await getBuffer(video.author.avatar)                
                  seina.sendMessage(m.chat, { image: { url: video.author.avatar }, jpegThumbnail:buf, caption: `${caption}` }, { quoted: m })
                  seina.sendMessage(m.chat, { video: { url: video.video.no_watermark }, jpegThumbnail:buf, mimetype: 'video/mp4', caption: `*Downloading From ${text}*` }, { quoted: m })               
                }).catch((err) => {
                    m.reply(`*Gagal Saat mendownload media dan mengirm video*`)
                })
            }
            break
case 'tt3': case 'tiktok3': {
               // //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw 'Masukkan Query Link!'            
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
                let bocil = require('@bochilteam/scraper')    
                if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) throw 'Link yang kamu berikan tidak.valid'                
                bocil.tiktokdlv3(`${text}`).then(async (video) => {           
                  var hadi = randomNomor(100)        
                   var hadie = randomNomor(200)     
                   var hadir = randomNomor(300)
                    var memek = randomNomor(1000)                      
                  let caption = `*----「 TIKTOK DOWNLOADER 」----*\n\n*➤ Author* : Liya\n*➤ Nickname* : ${video.author.nickname}\n*➤ Caption* : ${video.description}\n*➤ Coments* : ${memek}\n*➤ Create* ${hadir} Ago\n*➤ Likes* : ${hadi}\n*➤ Dishare* : ${hadie}\n*➤ Source* : ${text}`
                  buf = await getBuffer(video.author.avatar)                
                  let message = await prepareWAMessageMedia({ image: buf, jpegThumbnail: buf }, { upload: seina.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: caption,
hydratedFooterText: `${botname}`,
hydratedButtons: [{
urlButton: {
displayText: '🔗 Source Video',
url: `${text}`
}
}, {
urlButton: {
displayText: '👑 Instagram',
url: 'https://instagram.com/alya.xzy'
}
}, {
quickReplyButton: {
displayText: '📹 Tiktok Watermark',
id: `ttwm ${text}`
}
}, {
quickReplyButton: {
displayText: '🎥 Tiktok Nowateemark',
id: `tiktoknowm ${text}`
}  
}, {
quickReplyButton: {
displayText: '🎧 Tiktok Audio',
id: `tiktokmp3 ${text}`
}
}]
}
}
}), { userJid: m.chat, quoted: m })
seina.relayMessage(m.chat, template.message, { messageId: template.key.id })                
                }).catch((err) => {
                    m.reply(`*Gagal Saat mendownload media dan mengirm video*`)
                })
            }
            break
case 'tiktokmp3': case 'tiktokaudio': { 	   
          if (isBan) throw mess.ban
             if (!text) throw 'Masukkan Link Tiktok!'
                if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) throw 'Link yang kamu berikan tidak.valid'
                let got = require('./lib/tiktok.js')
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
                got.tiktokDown(`${text}`).then(async (data) => {
                seina.sendMessage(m.chat, { audio: { url: data.result.nowatermark }, mimetype: 'audio/mp4'}, { quoted: m })
                }).catch((err) => {
                    m.reply(`*Gagal Saat mendownload media dan mengirm audio*`)
                })
            }
            break
case 'ttmp3': {
if (!text) throw `masukan link tiktok contoh ${prefix + command} https://vt.tiktok.com/zgjbtcsdq/`  
                if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) throw 'Link yang kamu berikan tidak.valid'
                let get = require('./lib/scraper.js')
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)                                
                get.aiovideodl(`${text}`).then(async (res) => {        
                var anu = await getBuffer(res.medias[2].url)         
                seina.sendMessage(m.chat, { audio: anu, mimetype: 'audio/mpeg'}, { quoted: m })
                }).catch((err) => {
                    m.reply(`*Gagal Saat mendownload media dan mengirm video*`)
                })
            }
            break
case 'ig': case 'igdl': case 'instagram': {

               if (isBan) throw mess.ban

                if (!text) throw 'Harap Masukkan Link Instagarm' 

                if (!isUrl(args[0]) && !args[0].includes('instagram.com')) throw 'Link yang kamu berikan tidak.valid'

                if (!isInventoryLimit){ addInventoriLimit(m.sender) }

            if (isLimit < 1) return m.reply(mess.endLimit)

            kurangLimit(m.sender, 1)

            m.reply(`1 limit terpakai`)                

                let urlnya = text

	            hx.igdl(urlnya)

	            .then(async(result) => {	  


	            var halo = 0		


	            seina.sendMessage(m.chat, { image: { url: result.user.profilePicUrl }, jpegThumbnail: await getBuffer(result.user.profilePicUrl), caption: `*----「 INSTAGRAM DOWNLOADER 」----*\n\n*• Username :* ${result.user.username}\n*• Fullname :* ${result.user.fullName}\n*• Followers :* ${result.user.followers}\n*• Following :* ${result.user.following}\n*• ID :* ${result.user.id}\n*• Filetype :* ${result.medias[0].fileType}\n*• Type :* ${result.medias[0].type}\n*• Jumlah Media :* ${result.medias.length}\n*• Url :* ${text}\n\n*ꜱɪᴍᴩʟᴇ ᴡʜᴀᴛꜱᴀᴩᴩ ʙᴏᴛ ᴍᴀᴅᴇ ʙy ʟɪyᴀ*` }, { quoted: m })	                                  	                      	            


		        for(let i of result.medias) {		


		        if(i.url.includes('mp4')){		           			    				


				let link = await getBuffer(i.url)

                seina.sendMessage(m.chat, { video: link, jpegThumbnail: await getBuffer(i.preview), caption: `*Instagram ${i.type}*` }, { quoted: m })

                } else {


                let link = await getBuffer(i.url)

                seina.sendMessage(m.chat, { image: link, jpegThumbnail: await getBuffer(i.preview), caption: `*Instagram ${i.type}*` }, { quoted: m })          


               }


              }

            }).catch((err) => m.reply(`*Maaf Instagram Instagram ${text} Tidak Di Temukan*`))

            }		

			break
            case 'ig3': case 'igdl3': case 'instagram3': {
            if (isBan) throw mess.ban
                ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw 'Masukkan Query Link!'
                if (!isUrl(args[0]) && !args[0].includes('instagram.com')) throw 'Link yang kamu berikan tidak.valid'
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
                let bicil = require('@bochilteam/scraper')
                let urlnya = text
	            bicil.instagramdlv4(urlnya)
	            .then(async(result) => {
		        for(let i of result){
			    if(i.url.includes('mp4')){
				let link = await getBuffer(i.url)
                seina.sendMessage(m.chat, { video: link, jpegThumbnail: await getBuffer(i.thumbnail), caption: `*${botname}*` }, { quoted: m }) 
                } else {
                    let link = await getBuffer(i.url)
                  seina.sendMessage(m.chat, { image: link, jpegThumbnail: await getBuffer(i.thumbnail), caption: `*${botname}*` }, { quoted: m })                  
                }
            }
            }).catch((err) => m.reply(`*Gagal Saat Mendownload Dan mengirim Media*`))
            }		
			break
case 'ig2': case 'igdl2': case 'instagram2': {	            
                if (!text) throw 'Masukkan Query Link!'                
                if (!isUrl(args[0]) && !args[0].includes('instagram.com')) throw 'Link yang kamu berikan tidak.valid'
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
            anu = await fetchJson(`https://api.akuari.my.id/downloader/igdl?link=${text}`)
            var oi = 1
            for(let i of anu.medias){                
                var txt = `-----[ *INSTAGRAM DOWNLOADER* ]-----\n\n*Username:* ${anu.user.username}\n*Fullname:* ${anu.user.fullName}\n*Followers:* ${anu.user.followers}\n*Type:* ${anu.medias[0].type}\n*Tipe:* ${anu.medias[0].fileType}\n*ID:* ${anu.user.id}\n*Jumlah Media:* ${oi++}\n*Url:* ${text}\n\n*ꜱɪᴍᴩʟᴇ ᴡʜᴀᴛꜱᴀᴩᴩ ʙᴏᴛ ᴍᴀᴅᴇ ʙy ʟɪyᴀ*`
                var buf = await getBuffer(anu.user.profilePicUrl)        
                seina.sendMessage(m.chat, { image: { url: anu.user.profilePicUrl }, jpegThumbnail:buf, caption: `${txt}` }, { quoted: m }).catch((err) => m.reply('Maaf Link nya error'))
                seina.sendMessage(m.chat, { video: { url: i.url }, jpegThumbnail:buf, caption: `${botname}`}, { quoted: m }).catch((err) => m.reply('Maaf Terjadi kesalahan'))
               }
            }
            break
            case 'igimage': {	            
                if (!text) throw 'Masukkan Query Link!'
                const { instagramdl, instagramdlv2, instagramdlv3 } = require('@bochilteam/scraper')
                if (!isUrl(args[0]) && !args[0].includes('instagram.com')) throw 'Link yang kamu berikan tidak.valid'
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
                instagramdlv3(`${text}`).then(async (data) => {
                for (let f of data) {                                      
                seina.sendMedia(m.chat, f.url, '', `Download Url Instagram From ${text}`, m)
                }
                }).catch((err) => {
                    m.reply(`*Gagal Saat mendownload media dan mengirm video*`)
                })
            }
            break
            case 'igs': case 'igstory': case 'instagramstory': {

                if (isBan) throw mess.ban

                if (!text) throw 'Harap Masukkan Username!' 

                if (!isInventoryLimit){ addInventoriLimit(m.sender) }

            if (isLimit < 1) return m.reply(mess.endLimit)

            kurangLimit(m.sender, 1)

            m.reply(`1 limit terpakai`)              

                let urlnya = text

	            hx.igstory(urlnya)

	            .then(async(result) => {

		        var halo = 0		

	            seina.sendMessage(m.chat, { image: { url: result.user.profilePicUrl }, jpegThumbnail: await getBuffer(result.user.profilePicUrl), caption: `*----「 INSTAGRAM STORY 」----*\n\n*• Username :* ${result.user.username}\n*• Fullname :* ${result.user.fullName}\n*• Followers :* ${result.user.followers}\n*• Following :* ${result.user.following}\n*• ID :* ${result.user.id}\n*• Filetype :* ${result.medias[0].fileType}\n*• Type :* ${result.medias[0].type}\n*• Jumlah Media :* ${result.medias.length}\n*• Bio :* ${result.user.biography}\n\n*ꜱɪᴍᴩʟᴇ ᴡʜᴀᴛꜱᴀᴩᴩ ʙᴏᴛ ᴍᴀᴅᴇ ʙy ʟɪyᴀ*` }, { quoted: m })	                                  	                      	            

		        for(let i of result.medias) {

			    if(i.url.includes('mp4')){

				let link = await getBuffer(i.url)

                seina.sendMessage(m.chat, { video: link, jpegThumbnail: await getBuffer(i.preview), caption: `*Story ${i.type}*` }, { quoted: m }) 

                } else {

                    let link = await getBuffer(i.url)

                  seina.sendMessage(m.chat, { image: link, jpegThumbnail: await getBuffer(i.preview), caption: `*Story ${i.type}*` }, { quoted: m })                  

                }

            }

            }).catch((err) => m.reply(`*Maaf Story Instagram ${text} Tidak Di Temukan*`))

            }		

			break
case 'igs2': case 'igstory2': case 'instagramstory2':{
	            ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw 'Masukkan Query Link!'
             //   if (!isUrl(args[0]) && !args[0].includes('facebook.com')) throw 'Link yang kamu berikan tidak.valid'
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
                anu = await fetchJson(`https://api.akuari.my.id/downloader/igStory?username=${text}`)        
                for (let i of anu) {
                tummb = await getBuffer(i.preview)         
                seina.sendMessage(m.chat, { video: { url: i.url }, jpegThumbnail:tummb, caption: `*${botname}*`}, { quoted: m }).catch((err) => m.reply('Maaf Fitur Sedang Error'))
                }
            }
            break
case 'igs3': case 'igstory3': case 'instagramstory3': {
               if (isBan) throw mess.ban
                if (!text) throw 'Masukkan Username!' 
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
                let bicil = require('@bochilteam/scraper')
                let urlnya = text
	            bicil.instagramStoryv2(urlnya)
	            .then(async(result) => {	  
	            var halo = 1		
	            seina.sendMessage(m.chat, { image: { url: result.user.profilePicUrl }, jpegThumbnail: await getBuffer(result.user.profilePicUrl), caption: `*----「 INSTA DOWNLOADER 」----*\n\n*• Username :* ${result.user.username}\n*• Fullname :* ${result.user.fullName}\n*• Followers :* ${result.user.followers}\n*• Following :* ${result.user.following}\n*• ID :* ${result.user.id}\n*• Jumlah Media :* ${halo++}\n*• Bio :* ${result.user.biography}\n\n*ꜱɪᴍᴩʟᴇ ᴡʜᴀᴛꜱᴀᴩᴩ ʙᴏᴛ ᴍᴀᴅᴇ ʙy ʟɪyᴀ*` }, { quoted: m })	                                  	                      	            
		        for(let i of result.results) {		
		        if(i.url.includes('mp4')){		           			    				
				let link = await getBuffer(i.sourceUrl)
                seina.sendMessage(m.chat, { video: link, jpegThumbnail: await getBuffer(i.thumbnail), caption: `*Story ${i.type}*` }, { quoted: m })
                } else {
                let link = await getBuffer(i.url)
                seina.sendMessage(m.chat, { image: link, jpegThumbnail: await getBuffer(i.thumbnail), caption: `*Story ${i.type}*` }, { quoted: m })          
               }
              }
            }).catch((err) => m.reply(`*Maaf Story Instagram ${text} Tidak Di Temukan*`))
            }		
			break
            case 'igtv': {	            
                if (!text) throw 'Masukkan Query Link!'
                const { instagramdl, instagramdlv2, instagramdlv3 } = require('@bochilteam/scraper')
                if (!isUrl(args[0]) && !args[0].includes('instagram.com')) throw 'Link yang kamu berikan tidak.valid'
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
                instagramdlv3(`${text}`).then(async (data) => {            
                var buf = await getBuffer(data[0].thumbnail)        
                seina.sendMessage(m.chat, { video: { url: data[0].url }, jpegThumbnail:buf, caption: `${botname}`}, { quoted: m })
                }).catch((err) => {
                    m.reply(`*Gagal Saat mendownload media dan mengirm video*`)
                })
            }
            break
            case 'joox': case 'jooxdl': {
            if (isBan) throw mess.ban
                if (!text) throw 'Masukkan Query Title'
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
                let anu = await fetchJson(`https://api.lolhuman.xyz/api/jooxplay?apikey=${setting.lolkey}&query=${text}`)
                let msg = `-----[ *JOOX DOWNLOADER* ]-----\n\n*Title :* ${anu.result.info.song}\n*Album :* ${anu.result.info.album}\n*Singer :* ${anu.result.info.song}\n*Publish :* ${anu.result.info.date}\n*Link :* ${anu.result.audio[0].link}\n\n*ꜱɪᴍᴩʟᴇ ᴡʜᴀᴛꜱᴀᴩᴩ ʙᴏᴛ ᴍᴀᴅᴇ ʙy ʟɪyᴀ*`
                buf = await getBuffer(anu.result.image)
                seina.sendMessage(m.chat, { image: { url: anu.result.image }, jpegThumbnail:buf, caption: `${msg}` }, { quoted: m }).catch((err) => m.reply('Maaf Teejasi keaalahan'))
                seina.sendMessage(m.chat, { audio: { url: anu.result.audio[0].link }, mimetype: 'audio/mpeg' }, { quoted: m }).catch((err) => m.reply('Maaf Teejasi keaalahan'))
            }
            break
            case 'soundcloud': case 'scdl': {               
                if (!text) throw 'Masukkan Query Link!'
                if (!isUrl(args[0]) && !args[0].includes('soundcloud.com')) throw 'Link yang kamu berikan tidak.valid'
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
                xa.SoundCloud(`${text}`).then(async (data) => {
                    let txt = `*----「 SOUNDCLOUD DOWNLOADER 」----*\n\n`
                    txt += `*• Title :* ${data.title}\n`
                    txt += `*• Quality :* ${data.medias[0].quality}\n`
                    txt += `*• Type :* ${data.medias[0].extension}\n`
                    txt += `*• Size :* ${data.medias[0].formattedSize}\n`
                    txt += `*• Url Source :* ${data.url}\n\n`
                    txt += `*ꜱɪᴍᴩʟᴇ ᴡʜᴀᴛꜱᴀᴩᴩ ʙᴏᴛ ᴍᴀᴅᴇ ʙy ʟɪyᴀ*`
                buf = await getBuffer(data.thumbnail)   
                seina.sendMessage(m.chat, { image: { url: data.thumbnail }, jpegThumbnail:buf, caption: `${txt}` }, { quoted: m }).catch((err) => m.reply('Maaf link yang kamu berikan gaj valid'))    
                seina.sendMessage(m.chat, { audio: { url: data.medias[0].url }, mimetype: 'audio/mpeg', fileName: data.title+'.m4a' }, { quoted: m })
                }).catch((err) => {
                    m.reply(`*Gagal Saat mendownload media dan mengirm audio*`)
                })
            }
            break
case 'mediafire': {
////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)            
if (!text) throw 'Masukkan Query Link!'
if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) throw 'Link yang kamu berikan tidak.valid'
if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
const baby1 = await mediafireDl(text)
if (baby1[0].size.split('MB')[0] >= 100) return m.reply('File Melebihi Batas '+util.format(baby1))
const result4 = `-----[ *MEDIAFIRE DOWNLOADER* ]-----
				
*Name* : ${baby1[0].nama}
*Size* : ${baby1[0].size}
*Mime* : ${baby1[0].mime}
*Link* : ${baby1[0].link}\n
_Wait Mengirim file..._

*ꜱɪᴍᴩʟᴇ ᴡʜᴀᴛꜱᴀᴩᴩ ʙᴏᴛ ᴍᴀᴅᴇ ʙy ʟɪyᴀ*`
m.reply(`${result4}`)
seina.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : m }).catch ((err) => m.reply('Gagal saat mendonload File'))
}
break
case 'savefrom': {

      if (isBan) throw mess.ban

  if (!text) return m.reply(`Penggunaan ${prefix + command} link url`) 

  if (!isUrl(args[0]) && !args[0].includes('facebook.com')) throw 'Link yang kamu berikan tidak.valid'
  let noh = require('@bochilteam/scraper')                

  noh.savefrom(`${text}`).then(async (data) => {

  let sections = []   

  for (let i of data.url) {

  const list = {title: `${i.type}`,

  rows: [

	    {

	     title: `Quality ${i.subname}`, 

	     rowId: `${prefix}getnya ${text}`,

	     description: `${data.hosting}`	     

	    }, 

	    ]

     }

     sections.push(list)   

     }

  const sendm =  seina.sendMessage(

      m.chat, 

      {

       text: `${data.meta.title} Berikut Adalah List Video Nya, Klik button di bawah untuk memilih`,

       footer: `© AlyaBot`,

       title: "*[ Savefrom Downloader ]*",

       buttonText: "Klik Disini",

       sections

      }, { quoted : m })                 

                }).catch((err) => {

                    m.reply(`*Maaf Terjadi Kesalahan*`)

                })

            }

            break		

            case 'getnya': {

            if (isBan) throw mess.ban

                if (!text) throw 'Masukkan Link' 

                if (!isInventoryLimit){ addInventoriLimit(m.sender) }

            if (isLimit < 1) return m.reply(mess.endLimit)

            kurangLimit(m.sender, 1)

            m.reply(`1 limit terpakai`)

                let bicil = require('@bochilteam/scraper')

                let urlnya = text

	            bicil.savefrom(urlnya)

	            .then(async(result) => {	  	                                	                      	            

		        for(let i of result.url) {		

		        if(i.url.includes('mp4')){		           			    				

				let link = await getBuffer(i.url)

                seina.sendMessage(m.chat, { video: link, caption: `*quality ${i.subname}*` }, { quoted: m })                  

               }

              }

            }).catch((err) => m.reply(`*Maaf Futur Error*`))

            }		

			break
case 'linkedin': {
////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
if (!text) throw 'Masukkan Linknya!\nContoh : .linkedin https://www.linkedin.com/posts/franklintempletonindia_reachforbetter-activity-6575703402104348672-SBuX'
if (!isUrl(args[0]) && !args[0].includes('https://www.linkedin.com')) throw 'Link yang kamu berikan tidak.valid'
if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
anu = await fetchJson(`https://xteam.xyz/dl/linkedin?url=${text}&APIKEY=${setting.xteamkey}`)
seina.sendMessage(m.chat, {video: await getBuffer(anu.result.resurl), mimetype: 'video/mp4'}, {quoted:m}).catch ((err) => m.reply('Gagal saat mendonload File'))     
}
break
case 'smule': {

////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)

if (!text) throw 'Masukkan Linknya!\nContoh : .smule https://www.smule.com/p/1998769355_3504039030'

if (!isUrl(args[0]) && !args[0].includes('https://www.smule.com')) throw 'Link yang kamu berikan tidak.valid'

if (!isInventoryLimit){ addInventoriLimit(m.sender) }

            if (isLimit < 1) return m.reply(mess.endLimit)

            kurangLimit(m.sender, 1)

            m.reply(`1 limit terpakai`)

anu = await fetchJson(`https://xteam.xyz/dl/smule?url=${text}&APIKEY=${setting.xteamkey}`)

seina.sendMessage(m.chat, {video: await getBuffer(anu.result[0]), mimetype: 'video/mp4'}, {quoted:m}).catch ((err) => m.reply('Gagal saat mendonload File'))     

}

break
case 'vimeo': {
////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
if (!text) throw 'Masukkan Linknya Contoh : .vimeo https://vimeo.com/384611645'
if (!isUrl(args[0]) && !args[0].includes('vimeo.com')) throw 'Link yang kamu berikan tidak.valid'
if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
anu = await fetchJson(`https://xteam.xyz/dl/vimeo?url=${text}&APIKEY=${setting.xteamkey}`)
seina.sendMessage(m.chat, {video: await getBuffer(anu.result.hd.url), mimetype: 'video/mp4'}, {quoted:m}).catch ((err) => m.reply('Gagal saat mendonload File'))     
}
break
case 'zippyshare': {
////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
if (!text) throw 'Masukkan Query Link!'
if (!isUrl(args[0]) && !args[0].includes('zippyshare.com')) throw 'Link yang kamu berikan tidak.valid'
if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
anu = await fetchJson(`https://api.lolhuman.xyz/api/zippyshare?apikey=${setting.lolkey}&url=${text}`)
m.reply(`${util.format(anu)}`)
linkyke = await getBuffer(anu.result.download_url)
seina.sendMessage(m.chat, {document: linkyke, mimetype: 'application/zip', fileName: `${anu.result.name_file}`}, {quoted:m}).catch ((err) => m.reply('Gagal saat mendonload File'))     
}
break
case 'googledrive': {
////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
if (!text) throw 'Masukkan Query Link!'
if (!isUrl(args[0]) && !args[0].includes('googledrive.com')) throw 'Link yang kamu berikan tidak.valid'
if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
anu = await fetchJson(`https://xteam.xyz/dl/drive?url=${text}&APIKEY=${setting.xteamkey}`)
m.reply(`${util.format(anu)}`)
seina.sendMessage(m.chat, {document: await getBuffer(anu.result.server2), mimetype: 'application/zip', fileName: `${anu.result.title}`}, {quoted:m}).catch ((err) => m.reply('Gagal saat mendonload File'))     
}
break
case 'imagetopdf': {
////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
 if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let medi = await seina.downloadAndSaveMediaMessage(quoted)                
                let anu = await TelegraPh(medi)            
hayo = `https://xteam.xyz/imagetopdf?url=${anu}&APIKEY=${setting.xteamkey}`
seina.sendMessage(m.chat, {document: await getBuffer(hayo), mimetype: 'application/pdf', fileName: `${botname}.pdf`}, {quoted:m}).catch ((err) => m.reply('Gagal saat mendonload File'))     
}
break
case 'twitter': case 'td': case 'twitterdl': {     	             
             if (!text) throw 'Masukkan Query Link!'
                if (!isUrl(args[0]) && !args[0].includes('twitter.com')) throw 'Link yang kamu berikan tidak.valid'
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
                xa.Twitter(`${text}`).then(async (data) => {                    
                    let txt = `*----「 TWITTER DOWNLOADER 」----*\n\n`
                    txt += `*• Title :* ${data.title}\n`
                    txt += `*• Quality :* ${data.medias[1].quality}\n`
                    txt += `*• Type :* ${data.medias[1].extension}\n`
                    txt += `*• Size :* ${data.medias[1].formattedSize}\n`
                    txt += `*• Jumlah Media :* ${data.medias.length}\n`
                    txt += `*• Url Source :* ${data.url}\n\n`
                    txt += `*ꜱɪᴍᴩʟᴇ ᴡʜᴀᴛꜱᴀᴩᴩ ʙᴏᴛ ᴍᴀᴅᴇ ʙy ʟɪyᴀ*`
                buf = await getBuffer(data.thumbnail)    
                seina.sendMessage(m.chat, { image: { url: data.thumbnail }, jpegThumbnail:buf, caption: `${txt}` }, { quoted: m })
                for (let i of data.medias) {
                seina.sendMessage(m.chat, { video: { url: i.url }, jpegThumbnail:buf, caption: `*Downloading From ${text}*`}, { quoted: m })
                }
                }).catch((err) => {
                    m.reply(`*Gagal Saat mendownload media dan mengirm video*`)
                })
            }
            break
case 'twitter2': case 'td2': case 'twitterdl2': {     	             
             if (!text) throw 'Masukkan Query Link!'
                if (!isUrl(args[0]) && !args[0].includes('twitter.com')) throw 'Link yang kamu berikan tidak.valid'
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
                xa.Twitter(`${text}`).then(async (data) => {
                for (let x of data.medias) {
                    let txt = `*----「 TWITTER DOWNLOADER 」----*\n\n`
                    txt += `*• Title :* ${data.title}\n`
                    txt += `*• Quality :* ${x.quality}\n`
                    txt += `*• Type :* ${x.extension}\n`
                    txt += `*• Size :* ${x.formattedSize}\n`
                    txt += `*• Url Source :* ${data.url}\n\n`
                    txt += `*Halo Kak ${pushname} Bot Telah Mendapatkan Title Tersebut, Jangan Lupa Donasi Ya Kak*`
                buf = await getBuffer(data.thumbnail)    
                seina.sendMessage(m.chat, { video: { url: x.url }, jpegThumbnail:buf, caption: `${txt}`}, { quoted: m })
                }
                }).catch((err) => m.reply(`Sorry the faiture is error`))   
            }
            break

case 'twittermp3': case 'twitteraudio': { 	             
             if (!text) throw 'Masukkan Query Link!'
                if (!isUrl(args[0]) && !args[0].includes('twitter.com')) throw 'Link yang kamu berikan tidak.valid'
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
                xa.Twitter(`${text}`).then(async (data) => {
                seina.sendMessage(m.chat, { audio: { url: data.medias[1].url }, mimetype: 'audio/mp4'}, { quoted: m })
                }).catch((err) => {
                    m.reply(`*Gagal Saat mendownload media dan mengirm audio*`)
                })
            }
            break
case 'fbdl': case 'fb': case 'facebook': case 'pesbuk': {     	    
             if (isBan) throw mess.ban         
             if (!text) throw 'Masukkan Query Link!'
                if (!isUrl(args[0]) && !args[0].includes('facebook.com')) throw 'Link yang kamu berikan tidak.valid'
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)         
            let bocil = require('@bochilteam/scraper')  
                bocil.facebookdlv2(`${text}`).then(async (data) => {                   

                    let txt = `*----「 FACEBOOK DOWNLOADER 」----*\n\n`

                    txt += `*• Title :* ${data.title}\n`

                    txt += `*• Quality :* ${data.result[0].quality}\n`

                    txt += `*• Descripsi :* ${data.description}\n`

                    txt += `*• ID :* 5180g809e\n`

                    txt += `*• Url Source :* ${text}\n\n`

                    txt += `*ꜱɪᴍᴩʟᴇ ᴡʜᴀᴛꜱᴀᴩᴩ ʙᴏᴛ ᴍᴀᴅᴇ ʙy ʟɪyᴀ*`                

                buf = await getBuffer(data.thumbnail)    

                seina.sendMessage(m.chat, { image: { url: data.thumbnail }, jpegThumbnail:buf, caption: `${txt}` }, { quoted: m })         

                for (let i of data.result) {     

                seina.sendMessage(m.chat, { video: { url: i.url }, jpegThumbnail:buf, caption: `*• Quality :* ${i.quality}`}, { quoted: m })

                }          

                }).catch((err) => {

                    m.reply(`*Gagal Saat mendownload media dan mengirm File*`)

                })

            }

            break
case 'fbmp3': case 'facebookmp3': case 'facebookaudio': {
               if (isBan) throw mess.ban
                  if (!text) return m.reply(`Penggunaan ${prefix + command} masukkan link facebook`)
                  if (!isUrl(args[0]) && !args[0].includes('facebook.com')) throw 'Link yang kamu berikan tidak.valid'
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
  let noh = require('@bochilteam/scraper')                
  noh.savefrom(`${text}`).then(async (anu) => {  
  seina.sendMessage(m.chat, { audio: { url: anu.url[0].url }, mimetype: 'audio/mp4' }, { quoted: m })      
                }).catch((err) => {
                    m.reply(`*Gagal menjadikan link ke audio*`)
                })
            }
            break
case 'fb6': {   	    
             if (isBan) throw mess.ban         
             if (!text) throw 'Masukkan Query Link!'
                if (!isUrl(args[0]) && !args[0].includes('facebook.com')) throw 'Link yang kamu berikan tidak.valid'
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)            
                xa.Facebook(`${text}`).then(async (data) => {                   
                    let txt = `*----「 FACEBOOK DOWNLOADER 」----*\n\n`
                    txt += `*• Title :* ${data.title}\n`
                    txt += `*• Quality :* ${data.medias[1].quality}\n`
                    txt += `*• Type :* ${data.medias[1].extension}\n`
                    txt += `*• Size :* ${data.medias[1].formattedSize}\n`
                    txt += `*• Url Source :* ${data.url}\n\n`
                    txt += `*ꜱɪᴍᴩʟᴇ ᴡʜᴀᴛꜱᴀᴩᴩ ʙᴏᴛ ᴍᴀᴅᴇ ʙy ʟɪyᴀ*`
                buf = await getBuffer(data.thumbnail)    
                seina.sendMessage(m.chat, { image: { url: data.thumbnail }, jpegThumbnail:buf, caption: `${txt}` }, { quoted: m })              
                seina.sendMessage(m.chat, { video: { url: data.medias[1].url }, jpegThumbnail:buf, caption: `*• Quality :* ${data.medias[1].quality}`}, { quoted: m })                
                }).catch((err) => {
                    m.reply(`*Gagal Saat mendownload media dan mengirm File*`)
                })
            }
            break
            case 'youtube': case 'ytdl': {
	            ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw 'Masukkan Query Link!'
                if (!isUrl(args[0]) && !args[0].includes('youtube.com')) throw 'Link yang kamu berikan tidak.valid'
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 10) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 10)
            m.reply(`10 limit terpakai`)
                anu = await fetchJson(`https://api.akuari.my.id/downloader/youtube?link=${text}`)        
                if (anu.filesize_video >= 100000) return m.reply('File Melebihi Batas '+util.format(anu))
                tummb = await getBuffer(anu.thumb)
                audio = await getBuffer(anu.audio)        
                seina.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `${anu.title}`}, { quoted : m }).catch((err) => m.reply('Maaf Fitur Sedang Error'))
                seina.sendMessage(m.chat, { video: { url: anu.video }, jpegThumbnail:tummb, caption: `${util.format(anu)}`}, { quoted: m }).catch((err) => m.reply('Maaf Fitur Sedang Error'))
            }
            break
            case 'igreal': case 'instagramreal': {
	            ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw 'Masukkan Query Link!'
                if (!isUrl(args[0]) && !args[0].includes('instagram.com')) throw 'Link yang kamu berikan tidak.valid'
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
                anu = await fetchJson(`https://api.akuari.my.id/downloader/igdl?link=${text}`)        
                tummb = await getBuffer(anu.medias[0].preview)         
                seina.sendMessage(m.chat, { video: { url: anu.medias[0].url }, jpegThumbnail:tummb, caption: `${util.format(anu)}`}, { quoted: m }).catch((err) => m.reply('Maaf Fitur Sedang Error'))
            }
            break
            case 'fb3': case 'facebook3': {
	            ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw 'Masukkan Query Link!'
                if (!isUrl(args[0]) && !args[0].includes('facebook.com')) throw 'Link yang kamu berikan tidak.valid'
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
                anu = await fetchJson(`https://api.akuari.my.id/downloader/fbdl?link=${text}`)        
                tummb = await getBuffer(anu.thumbnail)         
                seina.sendMessage(m.chat, { video: { url: anu.medias[1].url }, jpegThumbnail:tummb, caption: `*📽️ FACEBOOK DOWNLOADER*\n\n*Name* : ${anu.title}\n*Filesize* : ${anu.medias[1].formattedSize}\n*Quality* : ${anu.medias[1].quality}\n*Ext* : ${anu.medias[1].extension}\n`}, { quoted: m }).catch((err) => m.reply('Maaf Fitur Sedang Error'))
            }
            break
case 'fb2': case 'facebook2': {
	            ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw 'Masukkan Query Link!'
                if (!isUrl(args[0]) && !args[0].includes('facebook.com')) throw 'Link yang kamu berikan tidak.valid'
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
                anu = await fetchJson(`https://violetics.pw/api/downloader/facebook?apikey=${setting.violkey}&url=${text}`)
                tummb = await getBuffer('https://telegra.ph/file/9789a09c964cee5597a05.jpg')    
                seina.sendMessage(m.chat, { video: { url: anu.result.url[0].url }, jpegThumbnail:tummb, caption: `*📽️ FACEBOOK DOWNLOADER*\n\n*Name* : ${anu.result.meta.title}\n*Quality* : ${anu.result.url[0].subname}\n*Ext* : ${anu.result.url[0].ext}\n`}, { quoted: m }).catch((err) => m.reply('Maaf Fitur Sedang Error'))
            }
            break
	        case 'pindl': case 'pinterestdl': {
      if (isBan) throw mess.ban
  if (!text) return m.reply(`Penggunaan ${prefix + command} masukkan link pin`)
  if (!isUrl(args[0]) && !args[0].includes('pinterest.com')) throw 'Link yang kamu berikan tidak.valid'               
               if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
  let noh = require('./lib/lol.js')                
  noh.pin(`${text}`).then(async (data) => {    
  seina.sendMessage(m.chat, { video: { url: data.data.url }, caption: `${data.data.file}` }, { quoted: m })  
                }).catch((err) => {
                    m.reply(`*${text} Gak Bisa donlod nih*`)
                })
            }
            break
case 'translate': case 'terjemahan': case 'tr': {
if (!args.join(" ")) return m.reply("Textnya?")
if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
tes = await fetchJson (`https://megayaa.herokuapp.com/api/translate?to=id&kata=${args.join(" ")}`)
Infoo = tes.info
Detek = tes.translate
m.reply(`🌐Translate : ${Detek}\n📘Hasil : ${Infoo}`)
}
break
           case 'git': case 'gitclone':
           // //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)                       
            let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
            if (!args[0]) throw 'link githubnya mana? contoh: https://github.com/Bintang73/botst4rz'
    if (!regex1.test(args[0])) throw 'link salah!'
    if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    // 'attachment; filenameq=ZidniGanz.zip'
    m.reply(`*Mohon tunggu, sedang mengirim repository..*`)
    seina.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => m.reply('Maaf link github yang kamu berikan di private, dan tidak bisa di jadikan file'))
			break    
            case 'umma': case 'ummadl': {
               // //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
     	        if (!text) throw `Example : ${prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`
     	        if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
                let { umma } = require('./lib/scraper2')
         		let anu = await umma(isUrl(text)[0])
        		if (anu.type == 'video') {
    		    let buttons = [
                        {buttonId: `ytmp3 ${anu.media[0]} 128kbps`, buttonText: {displayText: '♫ Audio'}, type: 1},
                        {buttonId: `ytmp4 ${anu.media[0]} 360p`, buttonText: {displayText: '► Video'}, type: 1}
                    ]
		    let buttonMessage = {
		        image: { url: anu.author.profilePic },
			caption: `
> Title : ${anu.title}
> Author : ${anu.author.name}
> Like : ${anu.like}
> Caption : ${anu.caption}
> Url : ${anu.media[0]}
Untuk Download Media Silahkan Klik salah satu Button dibawah ini atau masukkan command ytmp3/ytmp4 dengan url diatas
`,
			footer: seina.user.name,
			buttons,
			headerType: 4
		    }
		    seina.sendMessage(m.chat, buttonMessage, { quoted: m })
		} else if (anu.type == 'image') {
		    anu.media.map(async (url) => {
		        seina.sendMessage(m.chat, { image: { url }, caption: `> Title : ${anu.title}\n> Author : ${anu.author.name}\n> Like : ${anu.like}\n> Caption : ${anu.caption}` }, { quoted: m })
		    })
		}
	    }
	    break

//────────────────────[ LAINNNYAAA ]────────────────────

        case 'resepmasakan2': {
                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
				if (!text) throw `Example : ${prefix + command} Nasi padang`
				    anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/resepmakanan?query=${text}&apikey=${setting.HunterApi}`)
					hasilresep = `❏ *${anu.results.title}*\n\n❏ Porsi : ${anu.results.servings}\n❏ Waktu : ${anu.results.times}\n❏ Kesulitan : ${anu.results.dificulty}\n❏ Pengguna : ${anu.results.author.user}\n❏ Tanggal Diterbitkan : ${anu.results.author.datePublished}\n❏ Deskripsi : ${anu.results.desc}\n\n────────────────────\n❏ *Tutorial*\n\n❏ Bahan : ${anu.results.ingredient}\n❏ Langkah : ${anu.results.step}`										
					seina.sendImage(m.chat, anu.results.thumb, `${hasilresep}`, m).catch((err) => m.reply('Maaf Fitur Sedang Error'))
					}
		break
case 'resep': case 'resepmasakan': {
                if (!text) return m.reply(`Penggunaan ${prefix + command} nama_makanan`)
                anu = await fetchJson(`https://mnazria.herokuapp.com/api/resep-search?text=${text}`)                
                let sections = []   
  for (let i of anu.results) {
  const list = {title: `${i.title}`,
  rows: [
	    {
	     title: `${i.key}\n`, 
	     rowId: `${prefix}makanan ${text}`,
	     description: `${i.difficulty}\n${i.times}\n${i.serving}`
	    }, 
	    ]
     }
     sections.push(list)   
     }
  const sendm =  seina.sendMessage(
      m.chat, 
      {
       text: `Hasil Pencarian Dari ${text}`,
       footer: botname,
       title: "[ Resepse Masakan ]",
       buttonText: "Klik Disini",
       sections
      }, { quoted : m })
}
  break
case 'makanan': {
                 if (!text) throw 'masakan aap?'         
                 if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
                anu = await fetchJson(`https://mnazria.herokuapp.com/api/resep-search?text=${text}`)       
                buf = await getBuffer(anu.results[1].thumb)  
                seina.sendMessage(m.chat, { image: { url: anu.results[3].thumb }, jpegThumbnail:buf, caption: `${util.format(anu)}` }, { quoted: m }).catch((err) => m.reply('Maaf masakan gak di temukan'))
}
break

case 'cariquotes': {
//if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
           if (!text) throw `Example : ${prefix + command} cinta`            
            anu = await fetchJson(`https://api.akuari.my.id/search/quotes?query=${text}`)                       
            ini_txt = '*Cari Quotes*\n\n'
            for (let i of anu.result.data) {       
            ini_txt += `*Name* : ${i.author}\n`            
            ini_txt += `*Bio* : ${i.bio}\n`
            ini_txt += `*Quotes* : ${i.quote}`
            }
            m.reply(`${ini_txt}`)
            }            
            break

case 'apk': case 'apkmod': case 'apkdl': {      
      if (isBan) throw mess.ban
  if (!text) return m.reply(`Penggunaan ${prefix + command} vpn`) 
  let noh = require('./lib/myfunc2')                
  noh.rexdl(`${text}`).then(async (data) => {
  let sections = []   
  for (let i of data) {
  const list = {title: `${i.judul}`,
  rows: [
	    {
	     title: `${i.judul}`, 
	     rowId: `${prefix}donlod ${i.link}`,
	     description: `Category: ${i.kategori}\nPublish: ${i.upload_date}\nInformasi: ${i.deskripsi}`
	    }, 
	    ]
     }
     sections.push(list)   
     }
  const sendm =  seina.sendMessage(
      m.chat, 
      {
       text: `${ucapannya2} ${pushname} Hasil Pencarian Dari ${text} Klik button di bawah untuk memilih`,
       footer: `© AlyaBot`,
       title: "*[ Aplication Downloader ]*",
       buttonText: "Klik Disini",
       sections
      }, { quoted : m })                 
                }).catch((err) => {
                    m.reply(`*${text} Tidak Ditemukan*`)
                })
            }
            break
case 'donlod': {                
if (isBan) throw mess.ban
                if (!text) return m.reply(`Penggunaan ${prefix + command} whatsapp`)
                if (!isUrl(args[0]) && !args[0].includes('rexdl.com')) throw 'Link yang kamu berikan tidak.valid'
if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 5) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 5)
            m.reply(`5 limit terpakai`)
           let rex = require('./lib/ApkDown.js')
           rex.ApkDown(`${text}`).then(async (anu) => {        
           if (anu[0].size.split('MB')[0] >= 150) return m.reply('File Melebihi Batas '+util.format(anu))
           for (let i of anu) {    
           linkye = `*----「 APLICATION DOWNLOADER 」----*\n\n*Title:* ${i.title}\n*Update:* ${i.up}\n*Version:* ${i.vers}\n*Filesize:* ${i.size}\n*Url:* https://tinyurl.com/2m9fgrra\n*Descripsi:* ${i.desc}\n\n*ꜱɪᴍᴩʟᴇ ᴡʜᴀᴛꜱᴀᴩᴩ ʙᴏᴛ ᴍᴀᴅᴇ ʙy ʟɪyᴀ*`         
                seina.sendMessage(m.chat, { image: await getBuffer(i.thumb), jpegThumbnail: await getBuffer(i.thumb), caption: `${linkye}` }, { quoted: m })
                seina.sendMessage(m.chat, {document: await getBuffer(i.link), mimetype: `application/vnd.android.package-archive`, fileName: `${i.title}`}, {quoted:m})  
                }  
                }).catch((err) => {
                    m.reply(`*Gagal Saat mendownload media dan mengirm file*`)
                }) 
                }                          
                break
case 'tagme': {
seina.sendMessage(m.chat, {text:`@${m.sender.split("@")[0]}`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
}

break
        case 'wiki': case 'wikipedia': {
       // //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Example : ${prefix + command} baju`
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
                anu = await fetchJson(`https://api.lolhuman.xyz/api/wiki?apikey=${setting.lolkey}&query=${text}`)
                m.reply(`*Wikipedia*\n\n${anu.result}`)
            }
        break
        case 'covidindo': {                
        //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                ngtod = await fetchJson(`https://api.lolhuman.xyz/api/corona/indonesia?apikey=${setting.lolkey}`)
                m.reply(`*Total corona Indonesia*\n*Positif* : ${ngtod.result.positif}\n*Sembuh* : ${ngtod.result.sembuh}\n*Dirawat* : ${ngtod.result.dirawat}\n*Meninggal* : ${ngtod.result.meninggal}`)
                }
	    break
        case 'covidglobal': {	       
           //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)                      
					ngtod = await fetchJson(`https://api.lolhuman.xyz/api/corona/global?apikey=${setting.lolkey}`)
					m.reply(`*Total corona global*\n*Positif* : ${ngtod.result.positif}\n*Sembuh* : ${ngtod.result.sembuh}\n*Dirawat* : ${ngtod.result.dirawat}\n*Meninggal* : ${ngtod.result.meninggal}`)
					}
	    break
        case 'jadwaltv': {				  
            //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)                      
					ngtod = await fetchJson(`https://api.lolhuman.xyz/api/jadwaltv/now?apikey=${setting.lolkey}`)
					m.reply(`*Jadwal Tv Hari Ini*\n*ANTV* : ${ngtod.result.antv}\n*GTV* : ${ngtod.result.gtv}\n*INDOSIAR* : ${ngtod.result.indosiar}\n*KOMPASTV* : ${ngtod.result.kompastv}\n*INEWSTV* : ${ngtod.result.inewstv}\n*MNCTV* : ${ngtod.result.mnctv}\*RCTI* : ${ngtod.result.rcti}\n*SCTV* : ${ngtod.result.sctv}\n*TRANSTV* : ${ngtod.result.transtv}\n*TVRI* : ${ngtod.result.tvri}\n*TRANS7* : ${ngtod.result.trans7}\n*NETTV* : ${ngtod.result.nettv}`)
					}
	    break
        case 'cuaca': {
               // //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
				if (!text) throw `Example : ${prefix + command} Jawatimur`
				if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
					anu = await fetchJson(`https://api.lolhuman.xyz/api/cuaca/${text}?apikey=${setting.lolkey}`)
					m.reply(`*Tempat* : ${anu.result.tempat}\n*Cuaca* : ${anu.result.cuaca}\n*Angin* ${anu.result.angin}\n*Kelembapan* : ${anu.result.kelembapan}\n*Suhu* ${anu.result.suhu}\n*Permukaan_Laut* : ${anu.result.permukaan_laut}\n*Latitude* : ${anu.result.latitude}\n*Longitude* : ${anu.result.longitude}`)
					}
        break
        case 'ringtone': {
        //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
		if (!text) throw `Example : ${prefix + command} black rover`
        let { ringtone } = require('./lib/scraper3')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		seina.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
		case 'iqra': {
		//if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
		oh = `Example : ${prefix + command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
		if (!text) throw oh
		yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
		seina.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => m.reply(oh))
		}
		break
		case 'juzamma': {
		//if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
		if (args[0] === 'pdf') {
		m.reply(mess.wait)
		seina.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:m})
		} else if (args[0] === 'docx') {
		m.reply(mess.wait)
		seina.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:m})
		} else if (args[0] === 'pptx') {
		m.reply(mess.wait)
		seina.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:m})
		} else if (args[0] === 'xlsx') {
		m.reply(mess.wait)
		seina.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:m})
		} else {
		m.reply(`Mau format apa ? Example : ${prefix + command} pdf

Format yang tersedia : pdf, docx, pptx, xlsx`)
		}
		}
		break
		case 'hadis': case 'hadist': {
		//if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
		if (!args[0]) throw `Contoh:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`
		if (!args[1]) throw `Hadis yang ke berapa?\n\ncontoh:\n${prefix + command} muslim 1`
		try {
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
		let { number, arab, id } = res.find(v => v.number == args[1])
		m.reply(`No. ${number}

${arab}

${id}`)
		} catch (e) {
		m.reply(`Hadis tidak ditemukan !`)
		}
		}
		break

case 'listsurah': {
//if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
get_result = await fetchJson(`https://api.lolhuman.xyz/api/quran?apikey=${setting.lolkey}`)
get_result = get_result.result
ini_txt = 'List Surah:\n'
for (var x in get_result) {
ini_txt += `📖${x}. ${get_result[x]}\n`
}
m.reply(ini_txt)
}
break

case 'alquran2': {
//if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
if (!text) throw `Nomor Surah Yg Mau Di Cari Mana\nContoh : ${prefix + command} 18 or ${prefix + command} 18/10 or ${prefix + command} 18/1-10`
urls = `https://api.lolhuman.xyz/api/quran/${text}?apikey=${setting.lolkey}`
quran = await fetchJson(urls)
result = quran.result
ayat = result.ayat
ini_txt = `QS. ${result.surah} : 1-${ayat.length}\n\n`
for (var x of ayat) {
arab = x.arab
nomor = x.ayat
latin = x.latin
indo = x.indonesia
ini_txt += `${arab}\n${nomor}. ${latin}\n${indo}\n\n`
}
ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
ini_txt = ini_txt.replace(/<strong>/g, "").replace(/<\/strong>/g, "")
ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
m.reply(ini_txt)
}
break

case 'alquranaudio': {
//if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
if (!text) throw `Nomor Surah Yg Mau Dicari Mana\nContoh : ${prefix + command} 18 or ${prefix + command} 18/10`
m.reply('Sabar Sedang Proses...')
ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/quran/audio/${text}?apikey=${setting.lolkey}`)
seina.sendMessage(m.chat, { audio: ini_buffer, mimetype: 'audio/mpeg', fileName: `mp3` }, { quoted: m }).catch ((err) => m.reply('Gagal saat mengirim audio'))
}
break

case 'asmaulhusna': {
//if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
get_result = await fetchJson(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=${setting.lolkey}`)
get_result = get_result.result
txt_nya = `💌 No : ${get_result.index}\n`
txt_nya += `📖 Latin: ${get_result.latin}\n`
txt_nya += `🌏 Arab : ${get_result.ar}\n`
txt_nya  += `🌏 Indonesia : ${get_result.id}\n`
txt_nya += `🌏 English : ${get_result.en}`
m.reply(txt_nya)
}
break

case 'kisahnabi': {
//if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
if (!text) throw `Nama Nabi Yg Mau Dicari Mana\nContoh : ${prefix + command} Muhammad`
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/kisahnabi/${text}?apikey=${setting.lolkey}`)
get_result = get_result.result
txt_nya = `💌 Name : ${get_result.name}\n`
txt_nya += `😇 Lahir : ${get_result.thn_kelahiran}\n`
txt_nya += `😇 Umur : ${get_result.age}\n`
txt_nya += `🌏 Tempat : ${get_result.place}\n`
txt_nya += `📖 Story : \n${get_result.story}`
m.reply(txt_nya)
}
break

case 'jadwalsholat': {
//if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
if (!text) throw `Nama Kotanya Mana\nContoh : ${prefix + command} Yogyakarta`
get_result = await fetchJson(`https://api.lolhuman.xyz/api/sholat/${text}?apikey=${setting.lolkey}`)
get_result = get_result.result
txt_nya = `🌏 Wilayah : ${get_result.wilayah}\n`
txt_nya += `💌 Tanggal : ${get_result.tanggal}\n`
txt_nya += `🍴 Sahur : ${get_result.sahur}\n`
txt_nya += `🎑 Imsak : ${get_result.imsak}\n`
txt_nya += `🌅 Subuh : ${get_result.subuh}\n`
txt_nya += `🌅 Terbit : ${get_result.terbit}\n`
txt_nya += `🌝 Dhuha : ${get_result.dhuha}\n`
txt_nya += `🌞 Dzuhur : ${get_result.dzuhur}\n`
txt_nya += `🌇 Ashar : ${get_result.ashar}\n`
txt_nya += `🌆 Maghrib : ${get_result.imsak}\n`
txt_nya += `🌃 Isya : ${get_result.isya}`
m.reply(txt_nya)
}
break
		case 'alquran': {
		//if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
		if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		m.reply(txt)
		seina.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : m })
		}
		break
		case 'tafsirsurah': {
		//if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
		if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `「 *Tafsir Surah*  」

*Pendek* : ${res.result.data.tafsir.id.short}

*Panjang* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		m.reply(txt)
		}
		break

//────────────────────[ VOICE CHANGER  ]────────────────────

		   case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
		  // //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
		  if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                m.reply(mess.wait)
                let media = await seina.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                seina.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
                } catch (e) {
                m.reply(e)
                }
                break
                case 'runtime': {

                m.reply(`*── 「 ${botname} 」 ──*\n\nTelah Aktif Selama : _${runtime(process.uptime())}_`)

                }

                break
//────────────────────[ DATABASE ]────────────────────

            case 'setcmd': {
           // //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                if (!text) throw `Untuk Command Apa?`
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker command'
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                m.reply(`Done!`)
            }
            break
            case 'delcmd': {
            //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) throw `Tidak ada hash`
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to delete this sticker command'              
                delete global.db.data.sticker[hash]
                m.reply(`Done!`)
            }
            break
            case 'listcmd': {
                let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                seina.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {            
                if (!isCreator) throw mess.owner
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) throw 'Hash not found in database'
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                m.reply('Done!')
            }
            break
            case 'addmsg': {
             ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!m.quoted) throw 'Reply Message Yang Ingin Disave Di Database'
                if (!text) throw `Example : ${prefix + command} nama file`
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
                msgs[text.toLowerCase()] = quoted.fakeObj
m.reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'
    
Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
          //  //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
                seina.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
            //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 LIST DATABASE 」\n\n'
		for (let i of seplit) {
		    teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        m.reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
            //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar didalam list pesan`)
		delete msgs[text.toLowerCase()]
		m.reply(`Berhasil menghapus '${text}' dari list pesan`)
            }
	    break
//────────────────────[ SHORTLINK ]────────────────────
            case 'tinyurl': {
                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Example : ${prefix + command} alya.com`
                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                anu = await fetchJson(`https://cililitan.herokuapp.com/api/short/tiny?url=${text}`)
                m.reply(`${anu.result.link}`)
            }
            break
            case 'bitly': {
                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Example : ${prefix + command} alya.com`
               // if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                anu = await fetchJson(`https://xteam.xyz/shorturl/bitly?url=${text}&APIKEY=${setting.xteamkey}`)
                m.reply(`${anu.result.link}`)
            }
            break
            case 'gg': {
                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Example : ${prefix + command} alya.com`
                anu = await fetchJson(`https://xteam.xyz/shorturl/gg?url=${text}&nama=alyabot&APIKEY=${setting.xteamkey}`)
                m.reply(`${anu.result}`)
            }
            break
            case 'sid': {
                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Example : ${prefix + command} alya.com`
                anu = await fetchJson(`https://xteam.xyz/shorturl/sid?url=${text}&nama=alyabot&APIKEY=${setting.xteamkey}`)
                m.reply(`${anu.result}`)
            }
            break
            case 'cuttly': {
                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Example : ${prefix + command} alya.com`
                anu = await fetchJson(`https://xteam.xyz/shorturl/cuttly?url=${text}&nama=alyabot&APIKEY=${setting.xteamkey}`)
                m.reply(`${anu.result}`)
            }
            break

//────────────────────[ ANONYMOUS CHAT ]────────────────────

	    case 'anonymous': {
	    if (!isPremium && !isCreator) throw 'only premium'
	     //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [
                    { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                ]
                seina.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await seina.getName(m.sender)} Welcome To Anonymous Chat\n\nKlik Button Dibawah Ini Untuk Mencari Partner\`\`\``, seina.user.name, m)
            }
			break
            case 'keluar': case 'leave': {
            if (!isPremium && !isCreator) throw 'only premium'
             //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await seina.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner \`\`\``)
                    throw false
                }
                m.reply('Ok')
                let other = room.other(m.sender)
                if (other) await seina.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[room.id]
                if (command === 'leave') break
            }
            case 'mulai': case 'start': {
            if (!isPremium && !isCreator) throw 'only premium'
             //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await seina.sendButtonText(m.chat, buttons, `\`\`\`Kamu Masih Berada Di dalam Sesi Anonymous, Tekan Button Dibawah Ini Untuk Menghentikan Sesi Anonymous Anda\`\`\``, seina.user.name, m)
                    throw false
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await seina.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, seina.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await seina.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, seina.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await seina.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, seina.user.name, m)
                }
                break
            }
            case 'next': case 'lanjut': {
            if (!isPremium && !isCreator) throw 'only premium'
             //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await seina.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner\`\`\``)
                    throw false
                }
                let other = romeo.other(m.sender)
                if (other) await seina.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await seina.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, seina.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await seina.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, seina.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await seina.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, seina.user.name, m)
                }
                break
            }
            case 'public': {
                if (!isCreator) throw mess.owner
                seina.public = true
                m.reply('Sukse Change To Public Usage')
            }
            break
            case 'self': {
                if (!isCreator) throw mess.owner
                seina.public = false
                m.reply('Sukses Change To Self Usage')
            }
            break
            case 'ping': case 'botstatus': case 'statusbot': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                m.reply(respon)
            }
            break
            case 'speedtest': {
            m.reply('Testing Speed...')
            let cp = require('child_process')
            let { promisify } = require('util')
            let exec = promisify(cp.exec).bind(cp)
            let o
            try {
            o = await exec('python speed.py')
            } catch (e) {
            o = e
            } finally {
            let { stdout, stderr } = o
            if (stdout.trim()) m.reply(stdout)
            if (stderr.trim()) m.reply(stderr)
            }
            }
            break
            case 'owner': case 'creator': {
                seina.sendContact(m.chat, global.owner, m)
            }
            break
//────────────────────[ LIMIT & EXP ]────────────────────
   
            case 'tfxp': case 'kirimxp': {
            if (!isCreator) throw mess.owner	
            if (!text)return m.reply(`Penggunaan : ${prefix}tfxp @tag 10`)
            bal = text.split(" ")[1]
            const tag2 = `${text.split(" ")[0].replace("@",'')}@s.whatsapp.net`
            addBalance(tag2, nebal(bal), balance)
            m.reply(`Berhasl transfer Xp`)
            }
            break            
            case 'limit': {
            //if (isBanned) return reply(mess.banned)
            let limite = `${isPremium ? 'Unlimited' : `${getLimit(m.sender, limitCount, limit)}`}`
            m.reply(`Limit ${pushname} *${getLimit(m.sender)}*`)
            }
            break
case 'inventori': case 'profile':{
if (q.includes('--help')) return m.reply(examkosong) 
  if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
  if (!isInventory){ addInventori(m.sender) }
  if (!isInventoriBuruan){ addInventoriBuruan(m.sender) }
   try {
                    ppuser = await seina.profilePictureUrl(m.sender, 'image')
                } catch {
                    ppuser = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                }
       let Levele = level.getLevelingLevel(m.sender, _level)
              let Xp = level.getLevelingXp(m.sender, _level)
              let Xplu = 10 * Math.pow(Levele, 2) + 50 * Levele + 100         
     var profile = `-----[ *USER PROFILE* ]-----\n\n➸ *Username:* ${pushname}\n➸ *Premium*: Tidak\n➸ *Admin*: Tidak\n\n=_=_=_=_=_=_=_=_=_=_=_=_=\n\nProgress Kamu:\n➸ *Level Kamu*: ${Levele}\n➸ *XP Kamu*: (${Xp} / ${Xplu})\n*➸ Darah kamu* : ${getDarah(m.sender)}\n➸ *Besi kamu:* ${getBesi(m.sender)}\n➸ *Emas Kamu:* ${getEmas(m.sender)}\n➸ *Emerald Kamu* : ${getEmerald(m.sender)}\n➸ *Potion Kamu* : ${getPotion(m.sender)}\n\n=_=_=_=_=_=_=_=_=_=_=_=_=\n\nBuruan Kamu:\n➸ *Ikan* : ${getIkan(m.sender)}\n➸ *Ayam* : ${getAyam(m.sender)}\n➸ *Kelinci* : ${getKelinci(m.sender)}\n➸ *Domba* : ${getDomba(m.sender)}\n➸ *Sapi* : ${getSapi(m.sender)}\n➸ *Gajah* : ${getGajah(m.sender)}\n\n*ꜱɪᴍᴩʟᴇ ᴡʜᴀᴛꜱᴀᴩᴩ ʙᴏᴛ ᴍᴀᴅᴇ ʙy ʟɪyᴀ*`
     seina.sendMessage(m.chat, { image: { url: ppuser }, jpegThumbnail: await getBuffer(ppuser), caption: `${profile}` }, { quoted: m }).catch((err) => m.reply('Maaf link yang kamu berikan gaj valid'))    
  }
  break

case 'beli': case 'buy':{
seina.sendButtonText(m.chat, [{ buttonId: 'wgheo', buttonText: { displayText: 'Beli Limit' }, type: 1 }], `🎉 ${ucapannya2} ${pushname}\n\nMau beli limit??\nSilahkan klik tombol di bawah ini`, global.botname, m)
}
break

case 'wgheo': {
 var liya = randomNomor(10)
 addLimit(m.sender, liya)
 m.reply(`🥰 Selamat Kamu mendapatkan Limit sebanyak *${liya}*`)
 }
 break
            
            case 'tflimit': case 'givelimit': {
            if (!isCreator) throw mess.owner	
            if (!text)return m.reply(`Penggunaan : ${prefix + command} @tag 10`)
lim = text.split(" ")[1]
const tag1 = `${text.split(" ")[0].replace("@",'')}@s.whatsapp.net`
addLimit(tag1, lim, limit)
m.reply('Succes')
            }
            break
            case 'tfmonay': {
            if (!isCreator) throw mess.owner	
            if (!text)return m.reply(`Penggunaan : ${prefix + command} @tag 10`)
lim = text.split(" ")[1]
tag1 = `${text.split(" ")[0].replace("@",'')}@s.whatsapp.net`
addMonay(tag1, lim, monay)
m.reply('Succes')
            }
            break

case 'report': {
if (!args.join(" ")) return m.reply(`Example : \n- ${prefix + command} fitur ig error min\n- ${prefix + command} user ini nyepam min`)
teks = `*| REPORT FITUR |*`
teks1 = `\n\nNomor : @${m.sender.split("@")[0]}\nReport : ${args.join(" ")}`
teks2 = `\n\nSucces send to owner`
for (let i of owner) {
seina.sendMessage(i + "@s.whatsapp.net", {text: teks + teks1, mentions:[m.sender]}, {quoted:m})
}
seina.sendMessage(m.chat, {text: teks + teks2 + teks1, mentions:[m.sender]}, {quoted:m})
}
break
case 'request': {
if (!args.join(" ")) return m.reply(`Example : ${prefix + command} min tambahin fitur downloader`)
teks = `*| REQUEST FITUR |*`
teks1 = `\n\nNomor : @${m.sender.split("@")[0]}\nRequest : ${args.join(" ")}`
teks2 = `\n\nSucces send to owner`
for (let i of owner) {
seina.sendMessage(i + "@s.whatsapp.net", {text: teks + teks1, mentions:[m.sender]}, {quoted:m})
}
seina.sendMessage(m.chat, {text: teks + teks2 + teks1, mentions:[m.sender]}, {quoted:m})
}
break
case 'domain': {

           // //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)

                if (!text) throw `Example : ${prefix + command} nurutomo`
if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
                anu = await fetchJson(`https://xteam.xyz/search/domainesia?q=${text}&APIKEY=${setting.xteamkey}`)

                m.reply(`${util.format(anu)}`)

                }

            break
//────────────────────[ MENU MENU MENU ]────────────────────
case 'amino': {
                if (!text) throw `mau cari apa!, cintoh : ${prefix + command} naruto`
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
                let anu = await fetchJson(`https://violetics.pw/api/search/amino?apikey=${setting.violkey}&query=${text}`)
                m.reply(`${util.format(anu)}`)
                }
            break
case 'anime': {

            if (isBan) throw mess.ban 

if (!text) return m.reply(`Mau cari anime apa?\n\nContoh ${prefix}anime naruto`)

if (!isInventoryLimit){ addInventoriLimit(m.sender) }

            if (isLimit < 1) return m.reply(mess.endLimit)

            kurangLimit(m.sender, 1)

            m.reply(`1 limit terpakai`)

anu = await fetchJson(`https://api.jikan.moe/v4/anime?q=${text}`)

let sections = []   

  for (let i of anu.data) {

  const list = {title: `${i.title}`,

  rows: [

	    {

	     title: `${i.title}`, 

	     rowId: `${prefix}animee ${i.mal_id}`,

	     description: `${i.synopsis}`

	    }, 

	    ]

     }

     sections.push(list)   

     }

  const sendm =  seina.sendMessage(

      m.chat, 

      {

       text: `Hasil Pencarian Dari ${text}`,

       footer: botname,

       title: "[ Wibu² Bau Bawang ]",

       buttonText: "Klik Disini",

       sections

      }, { quoted : m })

}

  break
case 'animee': {
if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`1 limit terpakai`)
res = await fetchJson(`https://api.jikan.moe/v4/anime/${q}`)
let txt = `𝗔𝗻𝗶𝗺𝗲 𝗜𝗻𝗳𝗼\n\n*Judul:* *${res.data.title}*\n*English:* *${res.data.title_english}*\n*Japanese:* *${res.data.title_japanese}*\n*Type Anime:* *${res.data.type}*\n*Adaptasi:* *${res.data.source}*\n*Total Episode:* *${res.data.episodes}*\n*Status:* *${res.data.status}*\n*Ongoing:* *${res.data.airing ? 'Ya' : 'Tidak'}*\n*Aired:* *${res.data.aired.string}*\n*Durasi:* *${res.data.duration}*\n*Rating:* *${res.data.rating}*\n*Score:* *${res.data.score}*\n*Rank:* *${res.data.rank}*\n*Studio:* *${res.data.studios[0].name}* `
seina.sendMessage(m.chat, { image : { url : res.data.images.jpg.image_url}, caption : txt}, {quoted :m }).catch((err) => m.reply('Maaf Terjadi kesalahan, silahkan coba lagi Nanti'))
}
break

//────────────────────[ MENUUUUU ]────────────────────

case 'listmenu': case 'list': {
            let sections = []   
            let listmenu = [`allmenu`,`mainmenu`,`groupmenu`,`expmenu`,`downloadmenu`,`searchingmenu`,`randommenu`,`textpromenu`,`photooxymenu`,`funmenu`,`imageeffectmenu`,`ephotomenu`,`primbonmenu`,`sertimenu`,`convertmenu`,`databasemenu`,`photofiltermenu`,`nsfwmenu`,`anonymousmenu`,`islammenu`,`voicemenu`,`toolsmenu`,`internetmenu`,`shortmenu`,`ownermenu`,`donasi`]
                    let listmenuu = [`Semua Menu`,`Main Menu`,`Menu Group`,`Menu Exp & Limit`,`Menu Downloader`,`Search Menu`,`Random Menu`,`TextPro menu`,`PhotoOxy Menu`,`Fun menu`,`Image Effect`,`Ephoto Menu`,`Primbon Menu`,`Sertifikat fun`,`Convert Menu`,`Database Menu`,`Filter Menu`,`NSFW menu`,`Anonymous Chat`,`Islamic Menu`,`Voice Changer`,`Tools Menu`,`Internet Menu`,`ShortaLink`,`Owner Menu`,`Donasi`]
                    let listmenuuu = [`Menampilkan semua Daftar Menu`,`Menu mainnya`,`Menu hanya untuk grup`,`Untuk mengetahui limit dan expmu`,`Download sesuatu lewat bot`,`Search apa saja di bot`,`Random fitur aja`,`Maker teks, gunakan seperlunya`,`maker ke 2`,`Main main aja kak`,`membuat efek gambar`,`Ephoto, efek gambar`,`Primbon meramal gitu`,`Membuat sertifikat palsu`,`convert stiker dll`,`Database nyimpen di bot`,`Nambahin efek di gambar`,`NSFW kartun 18+`,`Anonymous seperti telegram`,`Fitur Islamic jgn dipermainkan`,`pengubah suara`,`alat, siapa tahu penting`,`Menjelajah lewat bot`,`Kamu bisa memperpendek Link`,`fitur khusus Owner`,`Berdonasi agar bot tetep berjalan trus`]
                    let nombor = 1
                    let startnum = 0
                    let startnumm = 0
                    for (let x of listmenu) {
                    const list = {title: 'Sub-Menu Ke-' + nombor++,
                    rows: [
                       {
                        title: `${listmenuu[startnum++]}`,
                        description: `${listmenuuu[startnumm++]}`,
                        rowId: `${prefix}${x}`
	        }, 
      	    ]
            }
            sections.push(list)   
            }
            const sendm =  seina.sendMessage(
            m.chat, 
           {
       text: `Kamu Dapat Memilih Menu Di Bawah, Berikut Adalah Daftar List Menu ${botname}`,
       footer: seina.user.name,
       title: `${ucapannya2} ${pushname}`,
       buttonText: "Klik Disini",
       sections
      }, { quoted : m })
      }
     break

case 'setmenu': {
            if (!isCreator) throw mess.owner
            let setbot = db.data.settings[botNumber]
               if (args[0] === 'templateImage'){
                setbot.templateImage = true
                setbot.templateLocation = false
                setbot.templateGif = false
                setbot.templateMsg = false
                setbot.templateList = false
                setbot.templateDoc = false
                m.reply(mess.success)
                } else if (args[0] === 'templateLocation'){
                setbot.templateImage = false
                setbot.templateLocation = true
                setbot.templateGif = false
                setbot.templateMsg = false
                setbot.templateList = false
                setbot.templateDoc = false
                m.reply(mess.success)
                } else if (args[0] === 'templateGif'){
                setbot.templateImage = false
                setbot.templateLocation = false
                setbot.templateGif = true
                setbot.templateMsg = false
                setbot.templateList = false
                setbot.templateDoc = false
                m.reply(mess.success)
                } else if (args[0] === 'templateMessage'){
                setbot.templateImage = false
                setbot.templateLocation = false
                setbot.templateGif = false
                setbot.templateMsg = true
                setbot.templateList = false
                setbot.templateDoc = false
                m.reply(mess.success)
                } else if (args[0] === 'templateList'){
                setbot.templateImage = false
                setbot.templateLocation = false
                setbot.templateGif = false
                setbot.templateMsg = false
                setbot.templateList = true
                setbot.templateDoc = false
                m.reply(mess.success)
                } else if (args[0] === 'templateDoc'){
                setbot.templateImage = false
                setbot.templateLocation = false
                setbot.templateGif = false
                setbot.templateMsg = false
                setbot.templateList = false
                setbot.templateDoc = true
                m.reply(mess.success)
                } else {
                let sections = [
                {
                title: "CHANGE MENU BOT",
                rows: [
                {title: "Template Image", rowId: `setmenu templateImage`, description: `Change menu bot to Template Image`},
                {title: "Template Location", rowId: `setmenu templateLocation`, description: `Change menu bot to Template Location`},
                {title: "Template Gif", rowId: `setmenu templateGif`, description: `Change menu bot to Template Gif`},
                {title: "Template Message", rowId: `setmenu templateMessage`, description: `Change menu bot to Template Message`},
                {title: "Template ListMsg", rowId: `setmenu templateList`, description: `Change menu bot to Template List`},
                {title: "Template Document", rowId: `setmenu templateDoc`, description: `Change menu bot to Template Document`}
                ]
                },
                ]
                seina.sendListMsg(m.chat, `Please select the menu you want to change!`, seina.user.name, `Hello Owner !`, `Click Here`, sections, m)
                }
            }
            break

            case 'allmenu': case 'menu': case 'help': {
let Levelnye = level.getLevelingLevel(m.sender, _level)
let datane = fs.readFileSync('./lib/random.js')
jsonData = JSON.parse(datane)
randIndex = Math.floor(Math.random() * jsonData.length)
randKey = jsonData[randIndex];
buffer = await getBuffer(randKey.result)      
let Levele2 = level.getLevelingLevel(m.sender, _level)
let Xp1 = level.getLevelingXp(m.sender, _level)
let Xp2 = randomNomor(2000)       
let hao = randomNomor(200)  
anu = `┌─〔 ${global.botname} 〕
├ ${ucapannya2}, ${pushname}
│
├ Tersisa *${getLimit(m.sender)} Limit*
├ Role *${role}*
├ Level *${Levelnye} (${getBalance(m.sender, balance)} / ${Xp1}* *[${Xp2}]*
├ ${Xp1} totalexp XP secara Total
│ 
├ Tanggal: *${thisDay}, ${day} ${myMonths[bulan]} ${year}*
├ Tanggal Islam: *${gakroh} ${myDoms[ikiya]}*
├ Waktu: *${moment.tz('Asia/Jakarta').format('HH:mm:ss')} WIB*
│
├ Uptime: *${runtime(process.uptime())}*
├ Database: *${hao} totalreg dari orang*
├ Github: https://github.com/AliyaBot
└────       
┌─〔 *EXP & LIMIT* 〕
├ ${prefix}sel
├ ${prefix}jual
├ ${prefix}buy
├ ${prefix}limit 
├ ${prefix}heal
├ ${prefix}limit
├ ${prefix}profile
├ ${prefix}mining
├ ${prefix}berburu
├ ${prefix}limituser
├ ${prefix}leaderboard
└────                     
┌─〔 *MAIN MENU* 〕
├ ${prefix}ping
├ ${prefix}listpc
├ ${prefix}listgc
├ ${prefix}owner
├ ${prefix}delete
├ ${prefix}infochat
├ ${prefix}quoted
├ ${prefix}listonline
├ ${prefix}runtime
├ ${prefix}speedtest
├ ${prefix}menu / ${prefix}help / ${prefix}?
└────
┌─〔 *SHORTLINK* 〕
├ ${prefix}gg <url>
├ ${prefix}sid <url>
├ ${prefix}bitly <url>
├ ${prefix}tinyurl <url>
└────
┌─〔 *ANONYMOUS* 〕
├ ${prefix}start
├ ${prefix}next
├ ${prefix}keluar
├ ${prefix}sendkontak
├ ${prefix}anonymous
└────
┌─〔 *FUN FAITURE* 〕
├ ${prefix}family100
├ ${prefix}hilih <teks>
├ ${prefix}simi <teks>
├ ${prefix}holoh <teks>
├ ${prefix}delttt <teks>
├ ${prefix}halah <teks>
├ ${prefix}huluh <teks>
├ ${prefix}heleh <teks>
├ ${prefix}suitpvp @tag
├ ${prefix}jadian <teks>
├ ${prefix}math <mode>
├ ${prefix}jodohku <teks>
├ ${prefix}tictactoe @tag
├ ${prefix}tebak <option>
└────
┌─〔 *NSFW MENU* 〕
├ ${prefix}trap (Limit)
├ ${prefix}nekos (Limit)
├ ${prefix}waifus (Limit)
├ ${prefix}ahegeo (Limit)
├ ${prefix}blowjob (Limit)
├ ${prefix}nsfwtrap (Limit)
├ ${prefix}nsfwneko (Limit)
├ ${prefix}nswfwaifu (Limit)
├ ${prefix}nsfwblowjob (Limit)
└────
┌─〔 *PHOTO-OXY* 〕
├ ${prefix}naruto <teks> 
├ ${prefix}smoke <teks> 
├ ${prefix}retrolol <teks> 
├ ${prefix}lovemsg <teks> 
├ ${prefix}butterfly <teks> 
├ ${prefix}shadow <teks> 
├ ${prefix}lovetext <teks> 
├ ${prefix}coffecup <teks> 
├ ${prefix}romantic <teks> 
├ ${prefix}grassmsg <teks> 
├ ${prefix}harrypotter <teks> 
├ ${prefix}burnpapper <teks> 
└────
┌─〔 *EPHOTO-363* 〕
├ ${prefix}tahta <teks>
├ ${prefix}glass <teks>
├ ${prefix}neon <teks>
├ ${prefix}beach <teks>
├ ${prefix}galaxy <teks>
├ ${prefix}graffiti <teks>
├ ${prefix}ffcover <teks>
├ ${prefix}crossfire <teks>
└────
┌─〔 *OWNER MENU* 〕
├ ${prefix}leave
├ ${prefix}tfxp @tag
├ ${prefix}join <link>
├ ${prefix}bctext <text>
├ ${prefix}bcall <text>
├ ${prefix}bcloc <text>
├ ${prefix}tflimit @tag
├ ${prefix}block @user
├ ${prefix}react <emoji>
├ ${prefix}bctext <text>
├ ${prefix}setexif <text>
├ ${prefix}chat <option>
├ ${prefix}bcvideo <text>
├ ${prefix}bcgroup <text>
├ ${prefix}bcimage <text>
├ ${prefix}unblock @user
├ ${prefix}setppbot <image>
└────
┌─〔 *TEXT MAKER* 〕
├ ${prefix}steel <teks>
├ ${prefix}neon <teks>
├ ${prefix}rock <teks>
├ ${prefix}lava <teks>
├ ${prefix}toxic <teks>
├ ${prefix}denim <teks>
├ ${prefix}febric <teks>
├ ${prefix}stone <teks>
├ ${prefix}glitch <teks>
├ ${prefix}wicker <teks>
├ ${prefix}marvel <teks>
├ ${prefix}3dglue <teks>
├ ${prefix}xmas3d <teks>
├ ${prefix}neontext <teks>
├ ${prefix}lionlogo <teks>
├ ${prefix}space3d <teks>
├ ${prefix}pornhub <teks>
├ ${prefix}skeleton <teks>
├ ${prefix}1917text <teks>
├ ${prefix}minion3d <teks>
├ ${prefix}blueglass <teks>
├ ${prefix}redglass <teks>
├ ${prefix}snowtext <teks>
├ ${prefix}cloudtext <teks> 
├ ${prefix}cloudsky <teks>
├ ${prefix}3dluxury <teks>
├ ${prefix}robotr2d2 <teks>
├ ${prefix}ballontext <teks> 
├ ${prefix}blackpink <teks>
├ ${prefix}ultragloss <teks>
├ ${prefix}ninjalogo <teks>
├ ${prefix}jokerlogo <teks>
├ ${prefix}bluemetal <teks>
├ ${prefix}bloodtext <teks>
├ ${prefix}3dgradient <teks>
├ ${prefix}duluxesilver <teks>
├ ${prefix}duluxegold <teks>
├ ${prefix}3drosegold <teks>
├ ${prefix}3dmetalgold <teks>
├ ${prefix}hollowenfire <teks> 
├ ${prefix}neongalaxy <teks>
├ ${prefix}metalpurple <teks>
├ ${prefix}3davengers <teks>
├ ${prefix}newyear3d <teks>
├ ${prefix}peridotstone <teks>
├ ${prefix}yellowglass <teks>
├ ${prefix}purpleglass <teks>
├ ${prefix}orangeglass <teks>
├ ${prefix}greenglass <teks>
├ ${prefix}realisticloud <teks>
├ ${prefix}sandwriting <teks>
├ ${prefix}redfoilballon <teks>
├ ${prefix}glossycarbon <teks>
├ ${prefix}3dmetalsilver <teks>
├ ${prefix}happynewyear <teks>
├ ${prefix}pinkfoilballon <teks>
├ ${prefix}darkgoldeffect <teks>
├ ${prefix}naturalleaves <teks>
├ ${prefix}holographic3d <teks>
├ ${prefix}3dmetalgalaxy <teks>
├ ${prefix}wolflogoblack <teks>
├ ${prefix}wolflogogalaxy <teks>
├ ${prefix}fireworksparkle <teks>
├ ${prefix}purplefoilballon <teks>
├ ${prefix}greenfoilballon <teks> 
├ ${prefix}cyanfoilballon <teks>
├ ${prefix}bluefoilballon <teks>
├ ${prefix}goldfoilballon <teks>
├ ${prefix}decorategreen <teks>
├ ${prefix}decoratepurple <teks>
├ ${prefix}realisticvintage <teks>
├ ${prefix}sandengraved <teks>
├ ${prefix}metaldarkgold <teks>
├ ${prefix}marvelstudios <teks>
├ ${prefix}captainamerica <teks>
├ ${prefix}purpleshinyglass <teks>
├ ${prefix}rainbowequalizier <teks>
├ ${prefix}sandsummerbeach <teks>
├ ${prefix}pinksparklingjewelry <teks>
└────
┌─〔 *CERTIFICATE MAKER* 〕
├ ${prefix}tololserti <teks>
├ ${prefix}blackpink <teks>
├ ${prefix}badgirlserti <teks>
├ ${prefix}badgirlserti <teks>
├ ${prefix}igcertificate <teks>
├ ${prefix}fuckgirlserti <teks>
├ ${prefix}ytcertificate <teks>
├ ${prefix}badboyserti <teks>
├ ${prefix}fuckboyserti <teks>
├ ${prefix}goodboyserti <teks>
├ ${prefix}goodgirlserti <teks>
└────
┌─〔 *GROUP MENU* 〕
├ ${prefix}devote <absen>
├ ${prefix}upvote <absen>
├ ${prefix}cekvote <absen>
├ ${prefix}linkgroup
├ ${prefix}hapusvote <absen>
├ ${prefix}kick @user (Limit)
├ ${prefix}vote <text>
├ ${prefix}tagall <text> (Limit)
├ ${prefix}setdesc <text>
├ ${prefix}group <option>
├ ${prefix}hidetag <text> (Limit)
├ ${prefix}mute <on/off>
├ ${prefix}setname <text> 
├ ${prefix}promote @user (Limit)
├ ${prefix}demote @user (Limit)
├ ${prefix}antilink <on/off> (Limit)
├ ${prefix}antibule <on/off> 
├ ${prefix}setppgc <image> (Limit)
├ ${prefix}editinfo <option> (Limit)
├ ${prefix}antilinkyt <on/off> 
├ ${prefix}antiwame <on/off> 
├ ${prefix}ephemeral <option> (Limit)
└────
┌─〔 *INTERNET MENU* 〕
├ ${prefix}detik (news)
├ ${prefix}news (news)
├ ${prefix}infobmkg
├ ${prefix}covidindo
├ ${prefix}covidglobal
├ ${prefix}kbbi <query>
├ ${prefix}carigc <judul> (Limit)
├ ${prefix}brainly <soal> (Limit)
├ ${prefix}kodepos kota>
├ ${prefix}cuaca <daerah> (Limit)
├ ${prefix}playstore <query>
├ ${prefix}wikipedia <query>
├ ${prefix}jadwalsalat <kota>
├ ${prefix}resep <masak apa>
├ ${prefix}resepmasakan <query> (Limit)
└────
┌─〔 *TOOLS MENU* 〕
├ ${prefix}git <url> (Limit)
├ ${prefix}nulis <teks> (Limit)
├ ${prefix}ssweb <link> (Limit)
├ ${prefix}gitclone <url> (Limit)
├ ${prefix}nuliskiri <teks> (Limit)
├ ${prefix}translate <teks> (Limit)
├ ${prefix}nuliskanan <teks> (Limit)
├ ${prefix}magernulis <teks> (Limit)
├ ${prefix}magernulis2 <teks> (Limit)
├ ${prefix}magernulis3 <teks> (Limit)
├ ${prefix}magernulis4 <teks> (Limit)
├ ${prefix}magernulis5 <teks> (Limit)
├ ${prefix}magernulis6 <teks> (Limit)
└────
┌─〔 *ISLAMIC MENU* 〕
├ ${prefix}listsurah
├ ${prefix}tafsirsurah
├ ${prefix}iqra <1-7> (Limit)
├ ${prefix}hadist <nama-nomor> (Limit)
├ ${prefix}alquran <surat ayat> 
├ ${prefix}juzamma <surat ayat> (Limit)
├ ${prefix}jadwalsholat <daerah> (Limit)
├ ${prefix}alquran2 <surat ayat>
├ ${prefix}kisahnabi <nama nabi> (Limit)
├ ${prefix}alquranaudio <surat ayat> (Limit)
└────
┌─〔 *VOICE-CHANGER* 〕
├ ${prefix}fat <reply media> (Limit)
├ ${prefix}deep <reply media> (Limit)
├ ${prefix}robot <reply media> (Limit)
├ ${prefix}slow <reply media> (Limit)
├ ${prefix}tupai <reply media> (Limit)
├ ${prefix}fast <reply media> (Limit)
├ ${prefix}bass <reply media> (Limit)
├ ${prefix}blown <reply media> (Limit)
├ ${prefix}reverse <reply media> (Limit)
├ ${prefix}earrape <reply media> (Limit)
├ ${prefix}nightcore <reply media> (Limit)
└────
┌─〔 *SEARCH MENU* 〕
├ ${prefix}yts <query>
├ ${prefix}lirik <query> (Limit)
├ ${prefix}play <query>
├ ${prefix}amino <query> (Limit)
├ ${prefix}domain <teks> (Limit)
├ ${prefix}anime <query> (Limit)
├ ${prefix}google <query>
├ ${prefix}gimage <query> (Limit)
├ ${prefix}wattpad <query>
├ ${prefix}ytsearch <query>
├ ${prefix}ytsaudio <query>
├ ${prefix}ytsvideo <query>
├ ${prefix}ringtone <query> (Limit)
├ ${prefix}readmore <teks> (Limit)
├ ${prefix}layarkaca <query> (Limit)
├ ${prefix}pinterest <query> (Limit)
├ ${prefix}wallpaper <query> (Limit)
├ ${prefix}layarkaca <query> (Limit)
├ ${prefix}wikimedia <query>
├ ${prefix}gsmarena <query> (Limit)
├ ${prefix}cariquotes <query> (Limit)
├ ${prefix}igstalk <username> (Limit)
├ ${prefix}pixivsearch <query> (Limit)
├ ${prefix}sfilesearch <query> (Limit)
├ ${prefix}mangatoon <query> (Limit)
├ ${prefix}palingmurah <query> (Limit)
├ ${prefix}stalk *<option query> (Limit)
├ ${prefix}stickersearch <query> (Limit)
├ ${prefix}animesearch <query> (Limit)
├ ${prefix}tiktokstalk <username> (Limit)
├ ${prefix}githubstalk <username> (Limit)
├ ${prefix}twitterstalk <username> (Limit)
└────
┌─〔 *CONVERT-STICKER* 〕
├ ${prefix}sticker <reply>
├ ${prefix}ttp <teks> (Limit)
├ ${prefix}attp <teks> (Limit)
├ ${prefix}attp2 <teks> (Limit)
├ ${prefix}attp3 <teks> (Limit)
├ ${prefix}smeme <teks>
├ ${prefix}sticker <teks>
├ ${prefix}ebinary <teks> (Limit)
├ ${prefix}dbinary <teks> (Limit)
├ ${prefix}styletext <teks> (Limit)
├ ${prefix}emojimix2 <emoji> (Limit)
├ ${prefix}stickerly <teks> 
├ ${prefix}stickerline <link> 
├ ${prefix}stickerwm <teks> (Limit)
├ ${prefix}emojimix <emoji+emoji2> (Limit)
├ ${prefix}togif <reply stiker> (Limit)
├ ${prefix}tourl <reply media>
├ ${prefix}tovn <reply mediaa>
├ ${prefix}tovideo <reply stiker> (Limit)
├ ${prefix}tomp3 <reply media> (Limit)
├ ${prefix}toaudio <reply media> (Limit)
├ ${prefix}toimage <reply stiker> 
├ ${prefix}removebg <reply media>
├ ${prefix}imagetopdf <reply media> (Limit)
└────
┌─〔 *DATABASE-MENU* 〕
├ ${prefix}setcmd <reply media> (Limit)
├ ${prefix}listcmd <reply media>
├ ${prefix}delcmd <reply media> (Limit)
├ ${prefix}addmsg <reply media> (Limit)
├ ${prefix}listmsg <reply media>
├ ${prefix}getmsg <reply media>
├ ${prefix}delmsg <reply media>
├ ${prefix}lockcmd <reply media> (Limit)
└────
┌─〔 *DOWNLOADER* 〕
├ ${prefix}apk <query>
├ ${prefix}joox <query> (Limit)
├ ${prefix}pindl <query> (Limit)
├ ${prefix}fbmp3 <query>
├ ${prefix}savefrom <link>
├ ${prefix}ytsvideo <query>
├ ${prefix}getmusic <urutan> (Limit)
├ ${prefix}getvideo <urutan> (Limit)
├ ${prefix}ytsaudio <query>
├ ${prefix}tiktok <url tiktok> (Limit) 
├ ${prefix}tiktok2 <url tiktok>
├ ${prefix}tiktok3 <url tiktok>
├ ${prefix}tiktok4 <url tiktok>
├ ${prefix}smule <url smule> (Limit)
├ ${prefix}vimeo <url vimeo> (Limit)
├ ${prefix}twitter <url twitter> (Limit)
├ ${prefix}twitter2 <url twitter>
├ ${prefix}igtv <url instagram> (Limit)
├ ${prefix}ytmp3 <url youtube> (Limit)
├ ${prefix}ytmp4 <url youtube> (Limit)
├ ${prefix}umma <url linkywcj>
├ ${prefix}tiktokwm <url tiktok> 
├ ${prefix}linkedin <url linkedin> (Limit)
├ ${prefix}tiktokmp3 <url tiktok>
├ ${prefix}youtube <url youtube> (Limit)
├ ${prefix}igimage <url instagram> (Limit)
├ ${prefix}twitteraudio <url twitter> (Limit)
├ ${prefix}tiktoknowm <url tiktok> (Limit)
├ ${prefix}instagramstory <query> (Limit)
├ ${prefix}instagramstory2 <query>
├ ${prefix}instagramstory3 <query>
├ ${prefix}mediafire <url mediafire> (Limit)
├ ${prefix}facebook <url facebookk> (Limit)
├ ${prefix}facebook2 <url facebook>
├ ${prefix}facebook3 <url facebook>
├ ${prefix}instagram <url instagram> (Limit)
├ ${prefix}instagram2 <url instagram>
├ ${prefix}zippyshare <url zippyshare> (Limit)
├ ${prefix}googledrive <url googledrive> (Limit)
├ ${prefix}ytshorts <url youtube/shorts>
├ ${prefix}soundcloud <url soundcloud> (Limit)
├ ${prefix}instagramreal <url instagram> (Limit)
└────
┌─〔 *IMAGE-EFFECT* 〕
├ ${prefix}jail <reply gambar> (Limit)
├ ${prefix}shit <reply gambar>
├ ${prefix}rip <reply gambar> (Limit)
├ ${prefix}blur <reply gambar>
├ ${prefix}gay <reply gambar> (Limit)
├ ${prefix}invert <reply gambar>
├ ${prefix}burn <reply gveambar> (Limit)
├ ${prefix}wanted <reply gambar> 
├ ${prefix}beautiful <reply gambar> (Limit)
├ ${prefix}pixelate <reply gambar>
├ ${prefix}fotojatoh <reply gambar> (Limit)
├ ${prefix}ytcomment <reply gambar>
├ ${prefix}imagesketch <reply gambar> (Limit)
├ ${prefix}triggeredwebp <reply gambar> (Limit)
└────
┌─〔 *PHOTO-FILTER* 〕
├ ${prefix}aria <reply media> (Limit)
├ ${prefix}attic <reply media>
├ ${prefix}ruby <reply media> (Limit)
├ ${prefix}sand <reply media> (Limit)
├ ${prefix}eva <reply media>
├ ${prefix}lisa <reply media> (Limit)
├ ${prefix}hdr <reply media>
├ ${prefix}lana <reply media> (Limit)
├ ${prefix}lomo <reply media>
├ ${prefix}milk <reply media> (Limit)
├ ${prefix}milk <reply media>
├ ${prefix}hana <reply media> (Limit)
├ ${prefix}plumy <reply media>
├ ${prefix}movie <reply media> (Limit)
├ ${prefix}orton <reply media>
├ ${prefix}molly <reply media> 
├ ${prefix}sepia <reply media> (Limit)
├ ${prefix}sphnik <reply media>
├ ${prefix}venus <reply madia> (Limit)
├ ${prefix}solarixe <reply media> (Limit)
├ ${prefix}creamy <reply media>
├ ${prefix}paretro <reply media> (Limit)
├ ${prefix}duotone <reply media>
├ ${prefix}retorolga <reply media> (Limit)
├ ${prefix}sapphire <reply media>
├ ${prefix}japanese <reply media>
├ ${prefix}lavender <reply media> (Limit)
├ ${prefix}morning <reply media>
├ ${prefix}lighteak <reply media> (Limit)
├ ${prefix}softsepia <reply media>
├ ${prefix}viewfinder <reply media> (Limit)
├ ${prefix}lemonande <reply media>
├ ${prefix}warmsunset <reply media> (Limit)
├ ${prefix}goldenhour  <reply media>
├ ${prefix}chrome1977 <reply media>
├ ${prefix}monochrome <reply media> (Limit)
├ ${prefix}perfectbandw <reply media>
├ ${prefix}blackandwhite <reply media> (Limit)
├ ${prefix}constrastbandw  <reply media> (Limit)
└────
┌─〔 PRIMBON-MENU 〕
├ ${prefix}shio <nama> (namamu)
├ ${prefix}tarot <16,12,20>
├ ${prefix}nasib <16,12,20> (nasibmu)
├ ${prefix}rezeki <16,12,20> (rezeki)
├ ${prefix}weton <16,12,20>
├ ${prefix}zodiak <16,12,20> (harian)
├ ${prefix}harisial <16,12,20>
├ ${prefix}nomorhoki <nmor> (number)
├ ${prefix}sifatusaha <nama> (karakter)
├ ${prefix}haribaik <16,12,20>
├ ${prefix}penyakit <16,12,20> (penyakit)
├ ${prefix}karakter <16,12,20> 
├ ${prefix}fengshui <16,12,20>  (ramalan)
├ ${prefix}pekerjaan <16,2,20> (pengangguran
├ ${prefix}nagahari <16,12,20>
├ ${prefix}artinama <namamu> (arti-namamu)
├ ${prefix}harisangar <16,12,20>
├ ${prefix}artimimpi <mimpimu> (mimpi)
├ ${prefix}arahrezeki <16,12,20> (rejeki)
├ ${prefix}masasubur <16,12,20>
├ ${prefix}jadiannikah <16,12,20>  (ramalan)
├ ${prefix}memancing <16,12,20>  (ramalan)
├ ${prefix}peruntungan <16,12,20>
├ ${prefix}keberuntungan <16,12,20>  (ramalan)
├ ${prefix}suamiistri <nama,12,9,2022>
├ ${prefix}pasangan <nama,12,9,2022> (jodoh)
├ ${prefix}ramalcinta <nama,12,9,2022>
├ ${prefix}ramaljodoh <nama,12,9,2022>  (ramalan)
├ ${prefix}cocoknama <nama,12,9,2022>
├ ${prefix}ramaljodohbali <nama,12,9,2022> (jodohmu)
└────

*${global.botname}@^1.2.3*
\`\`\`WhatsApp Using Lib Baileys Multi Device\`\`\`
`
var liy = `BIG THANKS TO:
nurutomo, ariffb, ilman, fokusdotid, amiruldev, irwan, rasel, bochilgaming, dikaardnt, fatih, nando, alya, zekais, violetics, x-team, lolhuman, neoxr, melcanz, hardianto, hxz-api, xfarr-api
`
let btn = [{
                                urlButton: {
                                    displayText: '👥 Group Whatsapp',
                                    url: 'https://chat.whatsapp.com/BfmcYnDj6MVFuFtpSWixdd'
                                }
                            }, {
                                urlButton: {
                                    displayText: '👑 Tiktok',
                                    url: 'http://tiktok.com/@kenichiytch'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '💻 Speed',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '👤 Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: '📊 Command',
                                    id: 'list'
                                }
                            }]
                        let setbot = db.data.settings[botNumber]
                        if (setbot.templateImage) {
                        let message = await prepareWAMessageMedia({ image: buffer, jpegThumbnail:buffer }, { upload: seina.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: anu,
hydratedFooterText: `${liy}`,
hydratedButtons: [{
urlButton: {
displayText: '👥 Group Whatsapp',
url: 'https://chat.whatsapp.com/Iim2QiZbGVpGWrEqepPxgf'
}
}, {
urlButton: {
displayText: '👑 Tiktok',
url: 'hhttp://tiktok.com/@kenichiytch'
}
}, {
quickReplyButton: {
displayText: '💻 Speed',
id: 'ping'
}
}, {
quickReplyButton: {
displayText: '👤 Owner',
id: 'owner'
}  
}, {
quickReplyButton: {
displayText: '📊 Command',
id: 'list'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
seina.relayMessage(m.chat, template.message, { messageId: template.key.id })
                        } else if (setbot.templateGif) {
                        let message = await prepareWAMessageMedia({ video: global.visoka, gifPlayback:true, jpegThumbnail:buffer }, { upload: seina.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
videoMessage: message.videoMessage,
hydratedContentText: anu,
hydratedFooterText: `${botname}`,
hydratedButtons: [{
urlButton: {
displayText: '👥 Group Whatsapp',
url: 'https://chat.whatsapp.com/Iim2QiZbGVpGWrEqepPxgf'
}
}, {
urlButton: {
displayText: '👑 Tiktok',
url: 'http://tiktok.com/@kenichiytch'
}
}, {
quickReplyButton: {
displayText: '💻 Speed',
id: 'ping'
}
}, {
quickReplyButton: {
displayText: '👤 Owner',
id: 'owner'
}  
}, {
quickReplyButton: {
displayText: '📊 Command',
id: 'list'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
seina.relayMessage(m.chat, template.message, { messageId: template.key.id })
                        } else if (setbot.templateLocation) {
                        const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                           hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: buffer},
                            hydratedFooterText: botname,
hydratedButtons: [{
urlButton: {
displayText: '👥 Group Whatsapp',
url: 'https://chat.whatsapp.com/Iim2QiZbGVpGWrEqepPxgf'
}
}, {
urlButton: {
displayText: '👑 Tiktok',
url: 'http://tiktok.com/@kenichiytch'
}
}, {
quickReplyButton: {
displayText: '💻 Speed',
id: 'ping'
}
}, {
quickReplyButton: {
displayText: '👤 Owner',
id: 'owner'
}  
}, {
quickReplyButton: {
displayText: '📊 Command',
id: 'list'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
seina.relayMessage(m.chat, template.message, { messageId: template.key.id })
                        } else if (setbot.templateMsg) {
                        seina.send5ButMsg(m.chat, anu, global.botname, btn)
                        } else if (setbot.templateList) {                       
            let sections = []   
            let listmenu = [`allmenu`,`mainmenu`,`groupmenu`,`expmenu`,`downloadmenu`,`searchingmenu`,`randommenu`,`textpromenu`,`photooxymenu`,`funmenu`,`imageeffectmenu`,`ephotomenu`,`primbonmenu`,`convertmenu`,`databasemenu`,`photofiltermenu`,`nsfwmenu`,`anonymousmenu`,`islammenu`,`voicemenu`,`toolsmenu`,`internetmenu`,`shortmenu`,`ownermenu`,`donasi`]
                    let listmenuu = [`Semua Menu`,`Main Menu`,`Menu Group`,`Menu Exp & Limit`,`Menu Downloader`,`Search Menu`,`Random Menu`,`TextPro menu`,`PhotoOxy Menu`,`Fun menu`,`Image Effect`,`Ephoto Menu`,`Primbon Menu`,`Convert Menu`,`Database Menu`,`Filter Menu`,`NSFW menu`,`Anonymous Chat`,`Islamic Menu`,`Voice Changer`,`Tools Menu`,`Internet Menu`,`ShortaLink`,`Owner Menu`,`Donasi`]
                    let listmenuuu = [`Menampilkan semua Daftar Menu`,`Menu mainnya`,`Menu hanya untuk grup`,`Untuk mengetahui limit dan expmu`,`Download sesuatu lewat bot`,`Search apa saja di bot`,`Random fitur aja`,`Maker teks, gunakan seperlunya`,`maker ke 2`,`Main main aja kak`,`membuat efek gambar`,`Ephoto, efek gambar`,`Primbon meramal gitu`,`convert stiker dll`,`Database nyimpen di bot`,`Nambahin efek di gambar`,`NSFW kartun 18+`,`Anonymous seperti telegram`,`Fitur Islamic jgn dipermainkan`,`pengubah suara`,`alat, siapa tahu penting`,`Menjelajah lewat bot`,`Kamu bisa memperpendek Link`,`fitur khusus Owner`,`Berdonasi agar bot tetep berjalan trus`]
                    let nombor = 1
                    let startnum = 0
                    let startnumm = 0
                    for (let x of listmenu) {
                    const list = {title: 'Sub-Menu Ke-' + nombor++,
                    rows: [
                       {
                        title: `${listmenuu[startnum++]}`,
                        description: `${listmenuuu[startnumm++]}`,
                        rowId: `${prefix}${x}`
	        }, 
      	    ]
            }
            sections.push(list)   
            }
            const sendm =  seina.sendMessage(
            m.chat, 
           {
       text: `Kamu Dapat Memilih Menu Di Bawah, Berikut Adalah Daftar List Menu ${botname}`,
       footer: seina.user.name,
       title: `${ucapannya2} ${pushname}`,
       buttonText: "Klik Disini",
       sections
      }, { quoted : m })
      } else if (setbot.templateDoc) {
      const buttonsDefault = [{ urlButton: { displayText: `👥 Group Whatsapp`, url : `https://chat.whatsapp.com/EghqJgS7UZYFzkdLa9lbIN` } }, { urlButton: { displayText: `👑 Instagram`, url : `https://instagram.com/alya.xzy` } },
   {					
					quickReplyButton: {
						displayText: '💻 Speed',
						id: 'ping'
					}
				},
				{
					quickReplyButton: {
						displayText: '👤 Owner',
						id: 'owner'
					}
				},	
				  {
					quickReplyButton: {
						displayText: '📊 Command',
						id: 'list'
					}},]
	
			seina.sendMessage(m.chat,{
	caption: anu,

	document:fs.readFileSync('./lib/tes.xlsx'), 
	mimetype: feler,
	jpegThumbnail: await getBuffer(randek.result),
	fileName: `${ucapannya2} ${pushname}`,
	fileLength: 99999999999999,
	templateButtons: buttonsDefault,footer: `${botname}`, quoted: m })
      }
      }
     break
//let message = await prepareWAMessageMedia({ image: buffer, jpegThumbnail:buffer }, { upload: seina.waUploadToServer })
//const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
//templateMessage: {
//hydratedTemplate: {
//imageMessage: message.imageMessage,
//hydratedContentText: anu,
//hydratedFooterText: `${global.botname}`,
//hydratedButtons: [{
//urlButton: {
//displayText: '👥 Group Whatsapp',
//url: 'https://chat.whatsapp.com/BfmcYnDj6MVFuFtpSWixdd'
//}
//}, {
//urlButton: {
//displayText: '👑 Instagram',
//url: 'https://instagram.com/alya.xzy'
//}
//}, {
//quickReplyButton: {
//displayText: '💻 Speed',
//id: 'ping'
//}
//}, {
//quickReplyButton: {
//displayText: '👤 Owner',
//id: 'owner'
//}  
//}, {
//quickReplyButton: {
//displayText: '📊 Command',
//id: 'list'
//}
//}]
//}
//}
//}), { userJid: m.chat, quoted: m })
//seina.relayMessage(m.chat, template.message, { messageId: template.key.id })
//}
//break

case 'mainmenu': {
                buffer = await getBuffer(picak+'main')
                let Levele2 = level.getLevelingLevel(m.sender, _level)
let Xp1 = level.getLevelingXp(m.sender, _level)
let Xp2 = randomNomor(2000)       
let hao = randomNomor(200)  

                anu = `┌─〔 ${global.botname} 〕
├ ${ucapannya2}, ${pushname}
│
├ Tersisa *${getLimit(m.sender)} Limit*
├ Role *${role}*
├ Level *${Levele2} (${getBalance(m.sender, balance)} / ${Xp1}* *[${Xp2}]*
├ ${Xp1} totalexp XP secara Total
│ 
├ Tanggal: *${thisDay}, ${day} ${myMonths[bulan]} ${year}*
├ Tanggal Islam: *${moment.tz('Asia/Jakarta').format('DD/MM/YY')}*
├ Waktu: *${moment.tz('Asia/Jakarta').format('HH:mm:ss')} WIB*
│
├ Uptime: *${runtime(process.uptime())}*
├ Database: *${hao} totalreg dari orang*
├ Github: https://github.com/AliyaBot
└──── 
┌─〔 *MAIN MENU* 〕
├ ${prefix}ping
├ ${prefix}listpc
├ ${prefix}listgc
├ ${prefix}owner
├ ${prefix}delete
├ ${prefix}infochat
├ ${prefix}quoted
├ ${prefix}listonline
├ ${prefix}runtime
├ ${prefix}speedtest
├ ${prefix}menu / ${prefix}help / ${prefix}?
└────

*${global.botname}@^1.2.3*
\`\`\`WhatsApp Using Lib Baileys Multi Device\`\`\`
`
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                           hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: buffer},
                            hydratedFooterText: botname,
                            hydratedButtons: [{          
            "urlButton": {
              "displayText": "My Group",
              "url": "https://chat.whatsapp.com/I5tQ4U2B7CVFh3P5QmvgLv"
            }
          },
        ]
      }
    }
               }), { userJid: m.chat })
                seina.relayMessage(m.chat, template.message, { messageId: template.key.id })
                }
            break
case 'expmenu': {
                buffer = await getBuffer(picak+'exp & limit')
                let Levele2 = level.getLevelingLevel(m.sender, _level)
let Xp1 = level.getLevelingXp(m.sender, _level)
let Xp2 = randomNomor(2000)       
let hao = randomNomor(200)  

                anu = `┌─〔 ${global.botname} 〕
├ ${ucapannya2}, ${pushname}
│
├ Tersisa *${getLimit(m.sender)} Limit*
├ Role *${role}*
├ Level *${Levele2} (${getBalance(m.sender, balance)} / ${Xp1}* *[${Xp2}]*
├ ${Xp1} totalexp XP secara Total
│ 
├ Tanggal: *${thisDay}, ${day} ${myMonths[bulan]} ${year}*
├ Tanggal Islam: *${moment.tz('Asia/Jakarta').format('DD/MM/YY')}*
├ Waktu: *${moment.tz('Asia/Jakarta').format('HH:mm:ss')} WIB*
│
├ Uptime: *${runtime(process.uptime())}*
├ Database: *${hao} totalreg dari orang*
├ Github: https://github.com/AliyaBot
└──── 
┌─〔 *EXP & LIMIT* 〕
├ ${prefix}sel
├ ${prefix}jual
├ ${prefix}buy
├ ${prefix}limit 
├ ${prefix}heal
├ ${prefix}limit
├ ${prefix}profile
├ ${prefix}mining
├ ${prefix}berburu
├ ${prefix}limituser
├ ${prefix}leaderboard
└──── 

*${global.botname}@^1.2.3*
\`\`\`WhatsApp Using Lib Baileys Multi Device\`\`\`
`
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                           hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: buffer},
                            hydratedFooterText: botname,
                            hydratedButtons: [{          
            "urlButton": {
              "displayText": "My Group",
              "url": "https://chat.whatsapp.com/I5tQ4U2B7CVFh3P5QmvgLv"
            }
          },
        ]
      }
    }
               }), { userJid: m.chat })
                seina.relayMessage(m.chat, template.message, { messageId: template.key.id })
                }
            break
case 'groupmenu': case 'grupmenu': {
                buffer = await getBuffer(picak+'Group Menu')
                let Levele2 = level.getLevelingLevel(m.sender, _level)
let Xp1 = level.getLevelingXp(m.sender, _level)
let Xp2 = randomNomor(2000)       
let hao = randomNomor(200)  
                anu = `┌─〔 ${global.botname} 〕
├ ${ucapannya2}, ${pushname}
│
├ Tersisa *${getLimit(m.sender)} Limit*
├ Role *${role}*
├ Level *${Levele2} (${getBalance(m.sender, balance)} / ${Xp1}* *[${Xp2}]*
├ ${Xp1} totalexp XP secara Total
│ 
├ Tanggal: *${thisDay}, ${day} ${myMonths[bulan]} ${year}*
├ Tanggal Islam: *${moment.tz('Asia/Jakarta').format('DD/MM/YY')}*
├ Waktu: *${moment.tz('Asia/Jakarta').format('HH:mm:ss')} WIB*
│
├ Uptime: *${runtime(process.uptime())}*
├ Database: *${hao} totalreg dari orang*
├ Github: https://github.com/AliyaBot
└──── 
┌─〔 *GROUP MENU* 〕
├ ${prefix}devote <absen>
├ ${prefix}upvote <absen>
├ ${prefix}cekvote <absen>
├ ${prefix}linkgroup
├ ${prefix}hapusvote <absen>
├ ${prefix}kick @user (Limit)
├ ${prefix}vote <text>
├ ${prefix}tagall <text> (Limit)
├ ${prefix}setdesc <text>
├ ${prefix}group <option>
├ ${prefix}hidetag <text> (Limit)
├ ${prefix}mute <on/off>
├ ${prefix}setname <text> 
├ ${prefix}promote @user (Limit)
├ ${prefix}demote @user (Limit)
├ ${prefix}antilink <on/off> (Limit)
├ ${prefix}antibule <on/off> 
├ ${prefix}setppgc <image> (Limit)
├ ${prefix}editinfo <option> (Limit)
├ ${prefix}antilinkyt <on/off> 
├ ${prefix}antiwame <on/off> 
├ ${prefix}ephemeral <option> (Limit)
└────

*${global.botname}@^1.2.3*
\`\`\`WhatsApp Using Lib Baileys Multi Device\`\`\`
`
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                           hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: buffer},
                            hydratedFooterText: botname,
                            hydratedButtons: [{          
            "urlButton": {
              "displayText": "My Group",
              "url": "https://chat.whatsapp.com/I5tQ4U2B7CVFh3P5QmvgLv"
            }
          },
        ]
      }
    }
               }), { userJid: m.chat })
                seina.relayMessage(m.chat, template.message, { messageId: template.key.id })
                }
            break

case 'downloadmenu': {
                buffer = await getBuffer(picak+'Downloader')
                let Levele2 = level.getLevelingLevel(m.sender, _level)
let Xp1 = level.getLevelingXp(m.sender, _level)
let Xp2 = randomNomor(2000)       
let hao = randomNomor(200)  
                anu = `┌─〔 ${global.botname} 〕
├ ${ucapannya2}, ${pushname}
│
├ Tersisa *${getLimit(m.sender)} Limit*
├ Role *${role}*
├ Level *${Levele2} (${getBalance(m.sender, balance)} / ${Xp1}* *[${Xp2}]*
├ ${Xp1} totalexp XP secara Total
│ 
├ Tanggal: *${thisDay}, ${day} ${myMonths[bulan]} ${year}*
├ Tanggal Islam: *${moment.tz('Asia/Jakarta').format('DD/MM/YY')}*
├ Waktu: *${moment.tz('Asia/Jakarta').format('HH:mm:ss')} WIB*
│
├ Uptime: *${runtime(process.uptime())}*
├ Database: *${hao} totalreg dari orang*
├ Github: https://github.com/AliyaBot
└──── 
┌─〔 *DOWNLOADER* 〕
├ ${prefix}apk <query>
├ ${prefix}joox <query> (Limit)
├ ${prefix}pindl <query> (Limit)
├ ${prefix}fbmp3 <query>
├ ${prefix}savefrom <link>
├ ${prefix}ytsvideo <query>
├ ${prefix}getmusic <urutan> (Limit)
├ ${prefix}getvideo <urutan> (Limit)
├ ${prefix}ytsaudio <query>
├ ${prefix}tiktok <url tiktok> (Limit) 
├ ${prefix}tiktok2 <url tiktok>
├ ${prefix}tiktok3 <url tiktok>
├ ${prefix}tiktok4 <url tiktok>
├ ${prefix}smule <url smule> (Limit)
├ ${prefix}vimeo <url vimeo> (Limit)
├ ${prefix}twitter <url twitter> (Limit)
├ ${prefix}twitter2 <url twitter>
├ ${prefix}igtv <url instagram> (Limit)
├ ${prefix}ytmp3 <url youtube> (Limit)
├ ${prefix}ytmp4 <url youtube> (Limit)
├ ${prefix}umma <url linkywcj>
├ ${prefix}tiktokwm <url tiktok> 
├ ${prefix}linkedin <url linkedin> (Limit)
├ ${prefix}tiktokmp3 <url tiktok>
├ ${prefix}youtube <url youtube> (Limit)
├ ${prefix}igimage <url instagram> (Limit)
├ ${prefix}twitteraudio <url twitter> (Limit)
├ ${prefix}tiktoknowm <url tiktok> (Limit)
├ ${prefix}instagramstory <query> (Limit)
├ ${prefix}instagramstory2 <query>
├ ${prefix}instagramstory3 <query>
├ ${prefix}mediafire <url mediafire> (Limit)
├ ${prefix}facebook <url facebookk> (Limit)
├ ${prefix}facebook2 <url facebook>
├ ${prefix}facebook3 <url facebook>
├ ${prefix}instagram <url instagram> (Limit)
├ ${prefix}instagram2 <url instagram>
├ ${prefix}zippyshare <url zippyshare> (Limit)
├ ${prefix}googledrive <url googledrive> (Limit)
├ ${prefix}ytshorts <url youtube/shorts>
├ ${prefix}soundcloud <url soundcloud> (Limit)
├ ${prefix}instagramreal <url instagram> (Limit)
└────

*${global.botname}@^1.2.3*
\`\`\`WhatsApp Using Lib Baileys Multi Device\`\`\`
`
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                           hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: buffer},
                            hydratedFooterText: botname,
                            hydratedButtons: [{          
            "urlButton": {
              "displayText": "My Group",
              "url": "https://chat.whatsapp.com/I5tQ4U2B7CVFh3P5QmvgLv"
            }
          },
        ]
      }
    }
               }), { userJid: m.chat })
                seina.relayMessage(m.chat, template.message, { messageId: template.key.id })
                }
            break

case 'searchingmenu': {
                buffer = await getBuffer(picak+'Searching')
                let Levele2 = level.getLevelingLevel(m.sender, _level)
let Xp1 = level.getLevelingXp(m.sender, _level)
let Xp2 = randomNomor(2000)       
let hao = randomNomor(200)  
                anu = `┌─〔 ${global.botname} 〕
├ ${ucapannya2}, ${pushname}
│
├ Tersisa *${getLimit(m.sender)} Limit*
├ Role *${role}*
├ Level *${Levele2} (${getBalance(m.sender, balance)} / ${Xp1}* *[${Xp2}]*
├ ${Xp1} totalexp XP secara Total
│ 
├ Tanggal: *${thisDay}, ${day} ${myMonths[bulan]} ${year}*
├ Tanggal Islam: *${moment.tz('Asia/Jakarta').format('DD/MM/YY')}*
├ Waktu: *${moment.tz('Asia/Jakarta').format('HH:mm:ss')} WIB*
│
├ Uptime: *${runtime(process.uptime())}*
├ Database: *${hao} totalreg dari orang*
├ Github: https://github.com/AliyaBot
└──── 
┌─〔 *SEARCH MENU* 〕
├ ${prefix}yts <query>
├ ${prefix}lirik <query> (Limit)
├ ${prefix}play <query>
├ ${prefix}amino <query> (Limit)
├ ${prefix}domain <teks> (Limit)
├ ${prefix}anime <query> (Limit)
├ ${prefix}google <query>
├ ${prefix}gimage <query> (Limit)
├ ${prefix}wattpad <query>
├ ${prefix}ytsearch <query>
├ ${prefix}ytsaudio <query>
├ ${prefix}ytsvideo <query>
├ ${prefix}ringtone <query> (Limit)
├ ${prefix}readmore <teks> (Limit)
├ ${prefix}layarkaca <query> (Limit)
├ ${prefix}pinterest <query> (Limit)
├ ${prefix}wallpaper <query> (Limit)
├ ${prefix}layarkaca <query> (Limit)
├ ${prefix}wikimedia <query>
├ ${prefix}gsmarena <query> (Limit)
├ ${prefix}cariquotes <query> (Limit)
├ ${prefix}igstalk <username> (Limit)
├ ${prefix}pixivsearch <query> (Limit)
├ ${prefix}sfilesearch <query> (Limit)
├ ${prefix}mangatoon <query> (Limit)
├ ${prefix}palingmurah <query> (Limit)
├ ${prefix}stalk *<option query> (Limit)
├ ${prefix}stickersearch <query> (Limit)
├ ${prefix}animesearch <query> (Limit)
├ ${prefix}tiktokstalk <username> (Limit)
├ ${prefix}githubstalk <username> (Limit)
├ ${prefix}twitterstalk <username> (Limit)
└────

*${global.botname}@^1.2.3*
\`\`\`WhatsApp Using Lib Baileys Multi Device\`\`\`
`
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                           hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: buffer},
                            hydratedFooterText: botname,
                            hydratedButtons: [{          
            "urlButton": {
              "displayText": "My Group",
              "url": "https://chat.whatsapp.com/I5tQ4U2B7CVFh3P5QmvgLv"
            }
          },
        ]
      }
    }
               }), { userJid: m.chat })
                seina.relayMessage(m.chat, template.message, { messageId: template.key.id })
                }
            break

case 'randommenu': {
                buffer = await getBuffer(picak+'Random')
                let Levele2 = level.getLevelingLevel(m.sender, _level)
let Xp1 = level.getLevelingXp(m.sender, _level)
let Xp2 = randomNomor(2000)       
let hao = randomNomor(200)  
                anu = `┌─〔 ${global.botname} 〕
├ ${ucapannya2}, ${pushname}
│
├ Tersisa *${getLimit(m.sender)} Limit*
├ Role *${role}*
├ Level *${Levele2} (${getBalance(m.sender, balance)} / ${Xp1}* *[${Xp2}]*
├ ${Xp1} totalexp XP secara Total
│ 
├ Tanggal: *${thisDay}, ${day} ${myMonths[bulan]} ${year}*
├ Tanggal Islam: *${moment.tz('Asia/Jakarta').format('DD/MM/YY')}*
├ Waktu: *${moment.tz('Asia/Jakarta').format('HH:mm:ss')} WIB*
│
├ Uptime: *${runtime(process.uptime())}*
├ Database: *${hao} totalreg dari orang*
├ Github: https://github.com/AliyaBot
└──── 
┌─〔 *RANDOM* 〕
├ ${prefix}bts
├ ${prefix}exo
├ ${prefix}yeet
├ ${prefix}lick
├ ${prefix}cry
├ ${prefix}hug
├ ${prefix}kiss
├ ${prefix}pat
├ ${prefix}bonk
├ ${prefix}bully
├ ${prefix}awoo
├ ${prefix}waifu
├ ${prefix}neko
├ ${prefix}bully
├ ${prefix}bonk
├ ${prefix}bully
├ ${prefix}puisi
├ ${prefix}neko
├ ${prefix}meme
├ ${prefix}cecan
├ ${prefix}cogan
├ ${prefix}coffe
├ ${prefix}couple
├ ${prefix}anime
├ ${prefix}waifu
├ ${prefix}husbu
├ ${prefix}smug
├ ${prefix}cuddle
├ ${prefix}husbu2
├ ${prefix}shinobu
├ ${prefix}shinobu
├ ${prefix}meme2
├ ${prefix}motivasi
├ ${prefix}megumin
├ ${prefix}katasenja
├ ${prefix}darkjokes
├ ${prefix}dilanquote
├ ${prefix}bucinquote
├ ${prefix}darkjokes2
├ ${prefix}quotesanime
└────

*${global.botname}@^1.2.3*
\`\`\`WhatsApp Using Lib Baileys Multi Device\`\`\`
`
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                           hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: buffer},
                            hydratedFooterText: botname,
                            hydratedButtons: [{          
            "urlButton": {
              "displayText": "My Group",
              "url": "https://chat.whatsapp.com/I5tQ4U2B7CVFh3P5QmvgLv"
            }
          },
        ]
      }
    }
               }), { userJid: m.chat })
                seina.relayMessage(m.chat, template.message, { messageId: template.key.id })
                }
            break

case 'textpromenu': {
                buffer = await getBuffer(picak+'Textpro')
                let Levele2 = level.getLevelingLevel(m.sender, _level)
let Xp1 = level.getLevelingXp(m.sender, _level)
let Xp2 = randomNomor(2000)       
let hao = randomNomor(200)  
                anu = `┌─〔 ${global.botname} 〕
├ ${ucapannya2}, ${pushname}
│
├ Tersisa *${getLimit(m.sender)} Limit*
├ Role *${role}*
├ Level *${Levele2} (${getBalance(m.sender, balance)} / ${Xp1}* *[${Xp2}]*
├ ${Xp1} totalexp XP secara Total
│ 
├ Tanggal: *${thisDay}, ${day} ${myMonths[bulan]} ${year}*
├ Tanggal Islam: *${moment.tz('Asia/Jakarta').format('DD/MM/YY')}*
├ Waktu: *${moment.tz('Asia/Jakarta').format('HH:mm:ss')} WIB*
│
├ Uptime: *${runtime(process.uptime())}*
├ Database: *${hao} totalreg dari orang*
├ Github: https://github.com/AliyaBot
└──── 
┌─〔 *TEXT MAKER* 〕
├ ${prefix}steel <teks>
├ ${prefix}neon <teks>
├ ${prefix}rock <teks>
├ ${prefix}lava <teks>
├ ${prefix}toxic <teks>
├ ${prefix}denim <teks>
├ ${prefix}febric <teks>
├ ${prefix}stone <teks>
├ ${prefix}glitch <teks>
├ ${prefix}wicker <teks>
├ ${prefix}marvel <teks>
├ ${prefix}3dglue <teks>
├ ${prefix}xmas3d <teks>
├ ${prefix}neontext <teks>
├ ${prefix}lionlogo <teks>
├ ${prefix}space3d <teks>
├ ${prefix}pornhub <teks>
├ ${prefix}skeleton <teks>
├ ${prefix}1917text <teks>
├ ${prefix}minion3d <teks>
├ ${prefix}blueglass <teks>
├ ${prefix}redglass <teks>
├ ${prefix}snowtext <teks>
├ ${prefix}cloudtext <teks> 
├ ${prefix}cloudsky <teks>
├ ${prefix}3dluxury <teks>
├ ${prefix}robotr2d2 <teks>
├ ${prefix}ballontext <teks> 
├ ${prefix}blackpink <teks>
├ ${prefix}ultragloss <teks>
├ ${prefix}ninjalogo <teks>
├ ${prefix}jokerlogo <teks>
├ ${prefix}bluemetal <teks>
├ ${prefix}bloodtext <teks>
├ ${prefix}3dgradient <teks>
├ ${prefix}duluxesilver <teks>
├ ${prefix}duluxegold <teks>
├ ${prefix}3drosegold <teks>
├ ${prefix}3dmetalgold <teks>
├ ${prefix}hollowenfire <teks> 
├ ${prefix}neongalaxy <teks>
├ ${prefix}metalpurple <teks>
├ ${prefix}3davengers <teks>
├ ${prefix}newyear3d <teks>
├ ${prefix}peridotstone <teks>
├ ${prefix}yellowglass <teks>
├ ${prefix}purpleglass <teks>
├ ${prefix}orangeglass <teks>
├ ${prefix}greenglass <teks>
├ ${prefix}realisticloud <teks>
├ ${prefix}sandwriting <teks>
├ ${prefix}redfoilballon <teks>
├ ${prefix}glossycarbon <teks>
├ ${prefix}3dmetalsilver <teks>
├ ${prefix}happynewyear <teks>
├ ${prefix}pinkfoilballon <teks>
├ ${prefix}darkgoldeffect <teks>
├ ${prefix}naturalleaves <teks>
├ ${prefix}holographic3d <teks>
├ ${prefix}3dmetalgalaxy <teks>
├ ${prefix}wolflogoblack <teks>
├ ${prefix}wolflogogalaxy <teks>
├ ${prefix}fireworksparkle <teks>
├ ${prefix}purplefoilballon <teks>
├ ${prefix}greenfoilballon <teks> 
├ ${prefix}cyanfoilballon <teks>
├ ${prefix}bluefoilballon <teks>
├ ${prefix}goldfoilballon <teks>
├ ${prefix}decorategreen <teks>
├ ${prefix}decoratepurple <teks>
├ ${prefix}realisticvintage <teks>
├ ${prefix}sandengraved <teks>
├ ${prefix}metaldarkgold <teks>
├ ${prefix}marvelstudios <teks>
├ ${prefix}captainamerica <teks>
├ ${prefix}purpleshinyglass <teks>
├ ${prefix}rainbowequalizier <teks>
├ ${prefix}sandsummerbeach <teks>
├ ${prefix}pinksparklingjewelry <teks>
└────

*${global.botname}@^1.2.3*
\`\`\`WhatsApp Using Lib Baileys Multi Device\`\`\`
`
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                           hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: buffer},
                            hydratedFooterText: botname,
                            hydratedButtons: [{          
            "urlButton": {
              "displayText": "My Group",
              "url": "https://chat.whatsapp.com/I5tQ4U2B7CVFh3P5QmvgLv"
            }
          },
        ]
      }
    }
               }), { userJid: m.chat })
                seina.relayMessage(m.chat, template.message, { messageId: template.key.id })
                }
            break

case 'photooxymenu': {
                buffer = await getBuffer(picak+'Photooxy')
                let Levele2 = level.getLevelingLevel(m.sender, _level)
let Xp1 = level.getLevelingXp(m.sender, _level)
let Xp2 = randomNomor(2000)       
let hao = randomNomor(200)  
                anu = `┌─〔 ${global.botname} 〕
├ ${ucapannya2}, ${pushname}
│
├ Tersisa *${getLimit(m.sender)} Limit*
├ Role *${role}*
├ Level *${Levele2} (${getBalance(m.sender, balance)} / ${Xp1}* *[${Xp2}]*
├ ${Xp1} totalexp XP secara Total
│ 
├ Tanggal: *${thisDay}, ${day} ${myMonths[bulan]} ${year}*
├ Tanggal Islam: *${moment.tz('Asia/Jakarta').format('DD/MM/YY')}*
├ Waktu: *${moment.tz('Asia/Jakarta').format('HH:mm:ss')} WIB*
│
├ Uptime: *${runtime(process.uptime())}*
├ Database: *${hao} totalreg dari orang*
├ Github: https://github.com/AliyaBot
└──── 
┌─〔 *PHOTO-OXY* 〕
├ ${prefix}naruto <teks> 
├ ${prefix}smoke <teks> 
├ ${prefix}retrolol <teks> 
├ ${prefix}lovemsg <teks> 
├ ${prefix}butterfly <teks> 
├ ${prefix}shadow <teks> 
├ ${prefix}lovetext <teks> 
├ ${prefix}coffecup <teks> 
├ ${prefix}romantic <teks> 
├ ${prefix}grassmsg <teks> 
├ ${prefix}harrypotter <teks> 
├ ${prefix}burnpapper <teks> 
└────

*${global.botname}@^1.2.3*
\`\`\`WhatsApp Using Lib Baileys Multi Device\`\`\`
`
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                           hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: buffer},
                            hydratedFooterText: botname,
                            hydratedButtons: [{          
            "urlButton": {
              "displayText": "My Group",
              "url": "https://chat.whatsapp.com/I5tQ4U2B7CVFh3P5QmvgLv"
            }
          },
        ]
      }
    }
               }), { userJid: m.chat })
                seina.relayMessage(m.chat, template.message, { messageId: template.key.id })
                }
            break

case 'ephotomenu': {
                buffer = await getBuffer(picak+'Ephoto')
                let Levele2 = level.getLevelingLevel(m.sender, _level)
let Xp1 = level.getLevelingXp(m.sender, _level)
let Xp2 = randomNomor(2000)       
let hao = randomNomor(200)  
                anu = `┌─〔 ${global.botname} 〕
├ ${ucapannya2}, ${pushname}
│
├ Tersisa *${getLimit(m.sender)} Limit*
├ Role *${role}*
├ Level *${Levele2} (${getBalance(m.sender, balance)} / ${Xp1}* *[${Xp2}]*
├ ${Xp1} totalexp XP secara Total
│ 
├ Tanggal: *${thisDay}, ${day} ${myMonths[bulan]} ${year}*
├ Tanggal Islam: *${moment.tz('Asia/Jakarta').format('DD/MM/YY')}*
├ Waktu: *${moment.tz('Asia/Jakarta').format('HH:mm:ss')} WIB*
│
├ Uptime: *${runtime(process.uptime())}*
├ Database: *${hao} totalreg dari orang*
├ Github: https://github.com/AliyaBot
└──── 
┌─〔 *EPHOTO-363* 〕
├ ${prefix}tahta <teks>
├ ${prefix}glass <teks>
├ ${prefix}neon <teks>
├ ${prefix}beach <teks>
├ ${prefix}galaxy <teks>
├ ${prefix}graffiti <teks>
├ ${prefix}ffcover <teks>
├ ${prefix}crossfire <teks>
├ ${prefix}tololserti <teks>
├ ${prefix}blackpink <teks>
├ ${prefix}igcertificate <teks>
├ ${prefix}ytcertificate <teks>
└────

*${global.botname}@^1.2.3*
\`\`\`WhatsApp Using Lib Baileys Multi Device\`\`\`
`
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                           hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: buffer},
                            hydratedFooterText: botname,
                            hydratedButtons: [{          
            "urlButton": {
              "displayText": "My Group",
              "url": "https://chat.whatsapp.com/I5tQ4U2B7CVFh3P5QmvgLv"
            }
          },
        ]
      }
    }
               }), { userJid: m.chat })
                seina.relayMessage(m.chat, template.message, { messageId: template.key.id })
                }
            break

case 'sertimenu': {
                buffer = await getBuffer(picak+'Certificate')
                let Levele2 = level.getLevelingLevel(m.sender, _level)
let Xp1 = level.getLevelingXp(m.sender, _level)
let Xp2 = randomNomor(2000)       
let hao = randomNomor(200)  
                anu = `┌─〔 ${global.botname} 〕
├ ${ucapannya2}, ${pushname}
│
├ Tersisa *${getLimit(m.sender)} Limit*
├ Role *${role}*
├ Level *${Levele2} (${getBalance(m.sender, balance)} / ${Xp1}* *[${Xp2}]*
├ ${Xp1} totalexp XP secara Total
│ 
├ Tanggal: *${thisDay}, ${day} ${myMonths[bulan]} ${year}*
├ Tanggal Islam: *${moment.tz('Asia/Jakarta').format('DD/MM/YY')}*
├ Waktu: *${moment.tz('Asia/Jakarta').format('HH:mm:ss')} WIB*
│
├ Uptime: *${runtime(process.uptime())}*
├ Database: *${hao} totalreg dari orang*
├ Github: https://github.com/AliyaBot
└──── 
┌─〔 *CERTIFICATE MAKER* 〕
├ ${prefix}tololserti <teks>
├ ${prefix}blackpink <teks>
├ ${prefix}badgirlserti <teks>
├ ${prefix}badgirlserti <teks>
├ ${prefix}igcertificate <teks>
├ ${prefix}fuckgirlserti <teks>
├ ${prefix}ytcertificate <teks>
├ ${prefix}badboyserti <teks>
├ ${prefix}fuckboyserti <teks>
├ ${prefix}goodboyserti <teks>
├ ${prefix}goodgirlserti <teks>
└────

*${global.botname}@^1.2.3*
\`\`\`WhatsApp Using Lib Baileys Multi Device\`\`\`
`
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                           hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: buffer},
                            hydratedFooterText: botname,
                            hydratedButtons: [{          
            "urlButton": {
              "displayText": "My Group",
              "url": "https://chat.whatsapp.com/I5tQ4U2B7CVFh3P5QmvgLv"
            }
          },
        ]
      }
    }
               }), { userJid: m.chat })
                seina.relayMessage(m.chat, template.message, { messageId: template.key.id })
                }
            break

case 'imageeffectmenu': {
                buffer = await getBuffer(picak+'Imageeffect')
                let Levele2 = level.getLevelingLevel(m.sender, _level)
let Xp1 = level.getLevelingXp(m.sender, _level)
let Xp2 = randomNomor(2000)       
let hao = randomNomor(200)  
                anu = `┌─〔 ${global.botname} 〕
├ ${ucapannya2}, ${pushname}
│
├ Tersisa *${getLimit(m.sender)} Limit*
├ Role *${role}*
├ Level *${Levele2} (${getBalance(m.sender, balance)} / ${Xp1}* *[${Xp2}]*
├ ${Xp1} totalexp XP secara Total
│ 
├ Tanggal: *${thisDay}, ${day} ${myMonths[bulan]} ${year}*
├ Tanggal Islam: *${moment.tz('Asia/Jakarta').format('DD/MM/YY')}*
├ Waktu: *${moment.tz('Asia/Jakarta').format('HH:mm:ss')} WIB*
│
├ Uptime: *${runtime(process.uptime())}*
├ Database: *${hao} totalreg dari orang*
├ Github: https://github.com/AliyaBot
└──── 
┌──〔 *IMAGE-EFFECT* 〕
├ ${prefix}jail <reply gambar> (Limit)
├ ${prefix}shit <reply gambar>
├ ${prefix}rip <reply gambar> (Limit)
├ ${prefix}blur <reply gambar>
├ ${prefix}gay <reply gambar> (Limit)
├ ${prefix}invert <reply gambar>
├ ${prefix}burn <reply gveambar> (Limit)
├ ${prefix}wanted <reply gambar> 
├ ${prefix}beautiful <reply gambar> (Limit)
├ ${prefix}pixelate <reply gambar>
├ ${prefix}fotojatoh <reply gambar> (Limit)
├ ${prefix}ytcomment <reply gambar>
├ ${prefix}imagesketch <reply gambar> (Limit)
├ ${prefix}triggeredwebp <reply gambar> (Limit)
└────

*${global.botname}@^1.2.3*
\`\`\`WhatsApp Using Lib Baileys Multi Device\`\`\`
`
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                           hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: buffer},
                            hydratedFooterText: botname,
                            hydratedButtons: [{          
            "urlButton": {
              "displayText": "My Group",
              "url": "https://chat.whatsapp.com/I5tQ4U2B7CVFh3P5QmvgLv"
            }
          },
        ]
      }
    }
               }), { userJid: m.chat })
                seina.relayMessage(m.chat, template.message, { messageId: template.key.id })
                }
            break

case 'funmenu': {
                buffer = await getBuffer(picak+'fun')
                let Levele2 = level.getLevelingLevel(m.sender, _level)
let Xp1 = level.getLevelingXp(m.sender, _level)
let Xp2 = randomNomor(2000)       
let hao = randomNomor(200)  
                anu = `┌─〔 ${global.botname} 〕
├ ${ucapannya2}, ${pushname}
│
├ Tersisa *${getLimit(m.sender)} Limit*
├ Role *${role}*
├ Level *${Levele2} (${getBalance(m.sender, balance)} / ${Xp1}* *[${Xp2}]*
├ ${Xp1} totalexp XP secara Total
│ 
├ Tanggal: *${thisDay}, ${day} ${myMonths[bulan]} ${year}*
├ Tanggal Islam: *${moment.tz('Asia/Jakarta').format('DD/MM/YY')}*
├ Waktu: *${moment.tz('Asia/Jakarta').format('HH:mm:ss')} WIB*
│
├ Uptime: *${runtime(process.uptime())}*
├ Database: *${hao} totalreg dari orang*
├ Github: https://github.com/AliyaBot
└──── 
┌─〔 *FUN FAITURE* 〕
├ ${prefix}family100
├ ${prefix}hilih <teks>
├ ${prefix}simi <teks>
├ ${prefix}holoh <teks>
├ ${prefix}delttt <teks>
├ ${prefix}halah <teks>
├ ${prefix}huluh <teks>
├ ${prefix}heleh <teks>
├ ${prefix}suitpvp @tag
├ ${prefix}jadian <teks>
├ ${prefix}math <mode>
├ ${prefix}jodohku <teks>
├ ${prefix}tictactoe @tag
├ ${prefix}tebak <option>
└────

*${global.botname}@^1.2.3*
\`\`\`WhatsApp Using Lib Baileys Multi Device\`\`\`
`
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                           hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: buffer},
                            hydratedFooterText: botname,
                            hydratedButtons: [{          
            "urlButton": {
              "displayText": "My Group",
              "url": "https://chat.whatsapp.com/I5tQ4U2B7CVFh3P5QmvgLv"
            }
          },
        ]
      }
    }
               }), { userJid: m.chat })
                seina.relayMessage(m.chat, template.message, { messageId: template.key.id })
                }
            break

case 'primbonmenu': {
                buffer = await getBuffer(picak+'primbon')
                let Levele2 = level.getLevelingLevel(m.sender, _level)
let Xp1 = level.getLevelingXp(m.sender, _level)
let Xp2 = randomNomor(2000)       
let hao = randomNomor(200)  
                anu = `┌─〔 ${global.botname} 〕
├ ${ucapannya2}, ${pushname}
│
├ Tersisa *${getLimit(m.sender)} Limit*
├ Role *${role}*
├ Level *${Levele2} (${getBalance(m.sender, balance)} / ${Xp1}* *[${Xp2}]*
├ ${Xp1} totalexp XP secara Total
│ 
├ Tanggal: *${thisDay}, ${day} ${myMonths[bulan]} ${year}*
├ Tanggal Islam: *${moment.tz('Asia/Jakarta').format('DD/MM/YY')}*
├ Waktu: *${moment.tz('Asia/Jakarta').format('HH:mm:ss')} WIB*
│
├ Uptime: *${runtime(process.uptime())}*
├ Database: *${hao} totalreg dari orang*
├ Github: https://github.com/AliyaBot
└──── 
┌──〔 PRIMBON-MENU 〕
├ ${prefix}shio <nama> (namamu)
├ ${prefix}tarot <16,12,20>
├ ${prefix}nasib <16,12,20> (nasibmu)
├ ${prefix}rezeki <16,12,20> (rezeki)
├ ${prefix}weton <16,12,20>
├ ${prefix}zodiak <16,12,20> (harian)
├ ${prefix}harisial <16,12,20>
├ ${prefix}nomorhoki <nmor> (number)
├ ${prefix}sifatusaha <nama> (karakter)
├ ${prefix}haribaik <16,12,20>
├ ${prefix}penyakit <16,12,20> (penyakit)
├ ${prefix}karakter <16,12,20> 
├ ${prefix}fengshui <16,12,20>  (ramalan)
├ ${prefix}pekerjaan <16,2,20> (pengangguran
├ ${prefix}nagahari <16,12,20>
├ ${prefix}artinama <namamu> (arti-namamu)
├ ${prefix}harisangar <16,12,20>
├ ${prefix}artimimpi <mimpimu> (mimpi)
├ ${prefix}arahrezeki <16,12,20> (rejeki)
├ ${prefix}masasubur <16,12,20>
├ ${prefix}jadiannikah <16,12,20>  (ramalan)
├ ${prefix}memancing <16,12,20>  (ramalan)
├ ${prefix}peruntungan <16,12,20>
├ ${prefix}keberuntungan <16,12,20>  (ramalan)
├ ${prefix}suamiistri <nama,12,9,2022>
├ ${prefix}pasangan <nama,12,9,2022> (jodoh)
├ ${prefix}ramalcinta <nama,12,9,2022>
├ ${prefix}ramaljodoh <nama,12,9,2022>  (ramalan)
├ ${prefix}cocoknama <nama,12,9,2022>
├ ${prefix}ramaljodohbali <nama,12,9,2022> (jodohmu)
└────

*${global.botname}@^1.2.3*
\`\`\`WhatsApp Using Lib Baileys Multi Device\`\`\`
`
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                           hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: buffer},
                            hydratedFooterText: botname,
                            hydratedButtons: [{          
            "urlButton": {
              "displayText": "My Group",
              "url": "https://chat.whatsapp.com/I5tQ4U2B7CVFh3P5QmvgLv"
            }
          },
        ]
      }
    }
               }), { userJid: m.chat })
                seina.relayMessage(m.chat, template.message, { messageId: template.key.id })
                }
            break

case 'convertmenu': {
                buffer = await getBuffer(picak+'convert')
                let Levele2 = level.getLevelingLevel(m.sender, _level)
let Xp1 = level.getLevelingXp(m.sender, _level)
let Xp2 = randomNomor(2000)       
let hao = randomNomor(200)  
                anu = `┌─〔 ${global.botname} 〕
├ ${ucapannya2}, ${pushname}
│
├ Tersisa *${getLimit(m.sender)} Limit*
├ Role *${role}*
├ Level *${Levele2} (${getBalance(m.sender, balance)} / ${Xp1}* *[${Xp2}]*
├ ${Xp1} totalexp XP secara Total
│ 
├ Tanggal: *${thisDay}, ${day} ${myMonths[bulan]} ${year}*
├ Tanggal Islam: *${moment.tz('Asia/Jakarta').format('DD/MM/YY')}*
├ Waktu: *${moment.tz('Asia/Jakarta').format('HH:mm:ss')} WIB*
│
├ Uptime: *${runtime(process.uptime())}*
├ Database: *${hao} totalreg dari orang*
├ Github: https://github.com/AliyaBot
└──── 
┌─〔 *CONVERT-STICKER* 〕
├ ${prefix}sticker <reply>
├ ${prefix}ttp <teks> (Limit)
├ ${prefix}attp <teks> (Limit)
├ ${prefix}attp2 <teks> (Limit)
├ ${prefix}attp3 <teks> (Limit)
├ ${prefix}smeme <teks>
├ ${prefix}sticker <teks>
├ ${prefix}ebinary <teks> (Limit)
├ ${prefix}dbinary <teks> (Limit)
├ ${prefix}styletext <teks> (Limit)
├ ${prefix}emojimix2 <emoji> (Limit)
├ ${prefix}stickerly <teks> 
├ ${prefix}stickerline <link> 
├ ${prefix}stickerwm <teks> (Limit)
├ ${prefix}emojimix <emoji+emoji2> (Limit)
├ ${prefix}togif <reply stiker> (Limit)
├ ${prefix}tourl <reply media>
├ ${prefix}tovn <reply mediaa>
├ ${prefix}tovideo <reply stiker> (Limit)
├ ${prefix}tomp3 <reply media> (Limit)
├ ${prefix}toaudio <reply media> (Limit)
├ ${prefix}toimage <reply stiker> 
├ ${prefix}removebg <reply media>
├ ${prefix}imagetopdf <reply media> (Limit)
└────

*${global.botname}@^1.2.3*
\`\`\`WhatsApp Using Lib Baileys Multi Device\`\`\`
`
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                           hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: buffer},
                            hydratedFooterText: botname,
                            hydratedButtons: [{          
            "urlButton": {
              "displayText": "My Group",
              "url": "https://chat.whatsapp.com/I5tQ4U2B7CVFh3P5QmvgLv"
            }
          },
        ]
      }
    }
               }), { userJid: m.chat })
                seina.relayMessage(m.chat, template.message, { messageId: template.key.id })
                }
            break

case 'databasemenu': {
                buffer = await getBuffer(picak+'database')
                let Levele2 = level.getLevelingLevel(m.sender, _level)
let Xp1 = level.getLevelingXp(m.sender, _level)
let Xp2 = randomNomor(2000)       
let hao = randomNomor(200)  
                anu = `┌─〔 ${global.botname} 〕
├ ${ucapannya2}, ${pushname}
│
├ Tersisa *${getLimit(m.sender)} Limit*
├ Role *${role}*
├ Level *${Levele2} (${getBalance(m.sender, balance)} / ${Xp1}* *[${Xp2}]*
├ ${Xp1} totalexp XP secara Total
│ 
├ Tanggal: *${thisDay}, ${day} ${myMonths[bulan]} ${year}*
├ Tanggal Islam: *${moment.tz('Asia/Jakarta').format('DD/MM/YY')}*
├ Waktu: *${moment.tz('Asia/Jakarta').format('HH:mm:ss')} WIB*
│
├ Uptime: *${runtime(process.uptime())}*
├ Database: *${hao} totalreg dari orang*
├ Github: https://github.com/AliyaBot
└──── 
┌─〔 *DATABASE-MENU* 〕
├ ${prefix}setcmd <reply media> (Limit)
├ ${prefix}listcmd <reply media>
├ ${prefix}delcmd <reply media> (Limit)
├ ${prefix}addmsg <reply media> (Limit)
├ ${prefix}listmsg <reply media>
├ ${prefix}getmsg <reply media>
├ ${prefix}delmsg <reply media>
├ ${prefix}lockcmd <reply media> (Limit)
└────

*${global.botname}@^1.2.3*
\`\`\`WhatsApp Using Lib Baileys Multi Device\`\`\`
`
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                           hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: buffer},
                            hydratedFooterText: botname,
                            hydratedButtons: [{          
            "urlButton": {
              "displayText": "My Group",
              "url": "https://chat.whatsapp.com/I5tQ4U2B7CVFh3P5QmvgLv"
            }
          },
        ]
      }
    }
               }), { userJid: m.chat })
                seina.relayMessage(m.chat, template.message, { messageId: template.key.id })
                }
            break

case 'photofiltermenu': case 'photofilter': {
                buffer = await getBuffer(picak+'Photo Filter')
                let Levele2 = level.getLevelingLevel(m.sender, _level)
let Xp1 = level.getLevelingXp(m.sender, _level)
let Xp2 = randomNomor(2000)       
let hao = randomNomor(200)  
                anu = `┌─〔 ${global.botname} 〕
├ ${ucapannya2}, ${pushname}
│
├ Tersisa *${getLimit(m.sender)} Limit*
├ Role *${role}*
├ Level *${Levele2} (${getBalance(m.sender, balance)} / ${Xp1}* *[${Xp2}]*
├ ${Xp1} totalexp XP secara Total
│ 
├ Tanggal: *${thisDay}, ${day} ${myMonths[bulan]} ${year}*
├ Tanggal Islam: *${moment.tz('Asia/Jakarta').format('DD/MM/YY')}*
├ Waktu: *${moment.tz('Asia/Jakarta').format('HH:mm:ss')} WIB*
│
├ Uptime: *${runtime(process.uptime())}*
├ Database: *${hao} totalreg dari orang*
├ Github: https://github.com/AliyaBot
└──── 
┌─〔 *PHOTO-FILTER* 〕
├ ${prefix}aria <reply media> (Limit)
├ ${prefix}attic <reply media>
├ ${prefix}ruby <reply media> (Limit)
├ ${prefix}sand <reply media> (Limit)
├ ${prefix}eva <reply media>
├ ${prefix}lisa <reply media> (Limit)
├ ${prefix}hdr <reply media>
├ ${prefix}lana <reply media> (Limit)
├ ${prefix}lomo <reply media>
├ ${prefix}milk <reply media> (Limit)
├ ${prefix}milk <reply media>
├ ${prefix}hana <reply media> (Limit)
├ ${prefix}plumy <reply media>
├ ${prefix}movie <reply media> (Limit)
├ ${prefix}orton <reply media>
├ ${prefix}molly <reply media> 
├ ${prefix}sepia <reply media> (Limit)
├ ${prefix}sphnik <reply media>
├ ${prefix}venus <reply madia> (Limit)
├ ${prefix}solarixe <reply media> (Limit)
├ ${prefix}creamy <reply media>
├ ${prefix}paretro <reply media> (Limit)
├ ${prefix}duotone <reply media>
├ ${prefix}retorolga <reply media> (Limit)
├ ${prefix}sapphire <reply media>
├ ${prefix}japanese <reply media>
├ ${prefix}lavender <reply media> (Limit)
├ ${prefix}morning <reply media>
├ ${prefix}lighteak <reply media> (Limit)
├ ${prefix}softsepia <reply media>
├ ${prefix}viewfinder <reply media> (Limit)
├ ${prefix}lemonande <reply media>
├ ${prefix}warmsunset <reply media> (Limit)
├ ${prefix}goldenhour  <reply media>
├ ${prefix}chrome1977 <reply media>
├ ${prefix}monochrome <reply media> (Limit)
├ ${prefix}perfectbandw <reply media>
├ ${prefix}blackandwhite <reply media> (Limit)
├ ${prefix}constrastbandw  <reply media> (Limit)
└────

*${global.botname}@^1.2.3*
\`\`\`WhatsApp Using Lib Baileys Multi Device\`\`\`
`
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                           hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: buffer},
                            hydratedFooterText: botname,
                            hydratedButtons: [{          
            "urlButton": {
              "displayText": "My Group",
              "url": "https://chat.whatsapp.com/I5tQ4U2B7CVFh3P5QmvgLv"
            }
          },
        ]
      }
    }
               }), { userJid: m.chat })
                seina.relayMessage(m.chat, template.message, { messageId: template.key.id })
                }
            break

case 'nsfwmenu': {
                buffer = await getBuffer(picak+'Nsfw')
                let Levele2 = level.getLevelingLevel(m.sender, _level)
let Xp1 = level.getLevelingXp(m.sender, _level)
let Xp2 = randomNomor(2000)       
let hao = randomNomor(200)  
                anu = `┌─〔 ${global.botname} 〕
├ ${ucapannya2}, ${pushname}
│
├ Tersisa *${getLimit(m.sender)} Limit*
├ Role *${role}*
├ Level *${Levele2} (${getBalance(m.sender, balance)} / ${Xp1}* *[${Xp2}]*
├ ${Xp1} totalexp XP secara Total
│ 
├ Tanggal: *${thisDay}, ${day} ${myMonths[bulan]} ${year}*
├ Tanggal Islam: *${moment.tz('Asia/Jakarta').format('DD/MM/YY')}*
├ Waktu: *${moment.tz('Asia/Jakarta').format('HH:mm:ss')} WIB*
│
├ Uptime: *${runtime(process.uptime())}*
├ Database: *${hao} totalreg dari orang*
├ Github: https://github.com/AliyaBot
└──── 
┌─〔 *NSFW MENU* 〕
├ ${prefix}trap (Limit)
├ ${prefix}nekos (Limit)
├ ${prefix}waifus (Limit)
├ ${prefix}ahegeo (Limit)
├ ${prefix}blowjob (Limit)
├ ${prefix}nsfwtrap (Limit)
├ ${prefix}nsfwneko (Limit)
├ ${prefix}nswfwaifu (Limit)
├ ${prefix}nsfwblowjob (Limit)
└────

*${global.botname}@^1.2.3*
\`\`\`WhatsApp Using Lib Baileys Multi Device\`\`\`
`
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                           hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: buffer},
                            hydratedFooterText: botname,
                            hydratedButtons: [{          
            "urlButton": {
              "displayText": "My Group",
              "url": "https://chat.whatsapp.com/I5tQ4U2B7CVFh3P5QmvgLv"
            }
          },
        ]
      }
    }
               }), { userJid: m.chat })
                seina.relayMessage(m.chat, template.message, { messageId: template.key.id })
                }
            break

case 'anonymousmenu': {
                buffer = await getBuffer(picak+'Anonymous')
                let Levele2 = level.getLevelingLevel(m.sender, _level)
let Xp1 = level.getLevelingXp(m.sender, _level)
let Xp2 = randomNomor(2000)       
let hao = randomNomor(200)  
                anu = `┌─〔 ${global.botname} 〕
├ ${ucapannya2}, ${pushname}
│
├ Tersisa *${getLimit(m.sender)} Limit*
├ Role *${role}*
├ Level *${Levele2} (${getBalance(m.sender, balance)} / ${Xp1}* *[${Xp2}]*
├ ${Xp1} totalexp XP secara Total
│ 
├ Tanggal: *${thisDay}, ${day} ${myMonths[bulan]} ${year}*
├ Tanggal Islam: *${moment.tz('Asia/Jakarta').format('DD/MM/YY')}*
├ Waktu: *${moment.tz('Asia/Jakarta').format('HH:mm:ss')} WIB*
│
├ Uptime: *${runtime(process.uptime())}*
├ Database: *${hao} totalreg dari orang*
├ Github: https://github.com/AliyaBot
└──── 
┌─〔 *ANONYMOUS* 〕
├ ${prefix}start
├ ${prefix}next
├ ${prefix}keluar
├ ${prefix}sendkontak
├ ${prefix}anonymous
└────

*${global.botname}@^1.2.3*
\`\`\`WhatsApp Using Lib Baileys Multi Device\`\`\`
`
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                           hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: buffer},
                            hydratedFooterText: botname,
                            hydratedButtons: [{          
            "urlButton": {
              "displayText": "My Group",
              "url": "https://chat.whatsapp.com/I5tQ4U2B7CVFh3P5QmvgLv"
            }
          },
        ]
      }
    }
               }), { userJid: m.chat })
                seina.relayMessage(m.chat, template.message, { messageId: template.key.id })
                }
            break

case 'islammenu': case 'islamicmenu': {
                buffer = await getBuffer(picak+'Islam')
                let Levele2 = level.getLevelingLevel(m.sender, _level)
let Xp1 = level.getLevelingXp(m.sender, _level)
let Xp2 = randomNomor(2000)       
let hao = randomNomor(200)  
                anu = `┌─〔 ${global.botname} 〕
├ ${ucapannya2}, ${pushname}
│
├ Tersisa *${getLimit(m.sender)} Limit*
├ Role *${role}*
├ Level *${Levele2} (${getBalance(m.sender, balance)} / ${Xp1}* *[${Xp2}]*
├ ${Xp1} totalexp XP secara Total
│ 
├ Tanggal: *${thisDay}, ${day} ${myMonths[bulan]} ${year}*
├ Tanggal Islam: *${moment.tz('Asia/Jakarta').format('DD/MM/YY')}*
├ Waktu: *${moment.tz('Asia/Jakarta').format('HH:mm:ss')} WIB*
│
├ Uptime: *${runtime(process.uptime())}*
├ Database: *${hao} totalreg dari orang*
├ Github: https://github.com/AliyaBot
└──── 
┌─〔 *ISLAMIC MENU* 〕
├ ${prefix}listsurah
├ ${prefix}tafsirsurah
├ ${prefix}iqra <1-7> (Limit)
├ ${prefix}hadist <nama-nomor> (Limit)
├ ${prefix}alquran <surat ayat> 
├ ${prefix}juzamma <surat ayat> (Limit)
├ ${prefix}jadwalsholat <daerah> (Limit)
├ ${prefix}alquran2 <surat ayat>
├ ${prefix}kisahnabi <nama nabi> (Limit)
├ ${prefix}alquranaudio <surat ayat> (Limit)
└────

*${global.botname}@^1.2.3*
\`\`\`WhatsApp Using Lib Baileys Multi Device\`\`\`
`
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                           hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: buffer},
                            hydratedFooterText: botname,
                            hydratedButtons: [{          
            "urlButton": {
              "displayText": "My Group",
              "url": "https://chat.whatsapp.com/I5tQ4U2B7CVFh3P5QmvgLv"
            }
          },
        ]
      }
    }
               }), { userJid: m.chat })
                seina.relayMessage(m.chat, template.message, { messageId: template.key.id })
                }
            break
case 'voicemenu': {
                buffer = await getBuffer(picak+'Voice Changer')
                let Levele2 = level.getLevelingLevel(m.sender, _level)
let Xp1 = level.getLevelingXp(m.sender, _level)
let Xp2 = randomNomor(2000)       
let hao = randomNomor(200)  
                anu = `┌─〔 ${global.botname} 〕
├ ${ucapannya2}, ${pushname}
│
├ Tersisa *${getLimit(m.sender)} Limit*
├ Role *${role}*
├ Level *${Levele2} (${getBalance(m.sender, balance)} / ${Xp1}* *[${Xp2}]*
├ ${Xp1} totalexp XP secara Total
│ 
├ Tanggal: *${thisDay}, ${day} ${myMonths[bulan]} ${year}*
├ Tanggal Islam: *${moment.tz('Asia/Jakarta').format('DD/MM/YY')}*
├ Waktu: *${moment.tz('Asia/Jakarta').format('HH:mm:ss')} WIB*
│
├ Uptime: *${runtime(process.uptime())}*
├ Database: *${hao} totalreg dari orang*
├ Github: https://github.com/AliyaBot
└──── 
┌─〔 *VOICE-CHANGER* 〕
├ ${prefix}fat <reply media> (Limit)
├ ${prefix}deep <reply media> (Limit)
├ ${prefix}robot <reply media> (Limit)
├ ${prefix}slow <reply media> (Limit)
├ ${prefix}tupai <reply media> (Limit)
├ ${prefix}fast <reply media> (Limit)
├ ${prefix}bass <reply media> (Limit)
├ ${prefix}blown <reply media> (Limit)
├ ${prefix}reverse <reply media> (Limit)
├ ${prefix}earrape <reply media> (Limit)
├ ${prefix}nightcore <reply media> (Limit)
└────

*${global.botname}@^1.2.3*
\`\`\`WhatsApp Using Lib Baileys Multi Device\`\`\`
`
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                           hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: buffer},
                            hydratedFooterText: botname,
                            hydratedButtons: [{          
            "urlButton": {
              "displayText": "My Group",
              "url": "https://chat.whatsapp.com/I5tQ4U2B7CVFh3P5QmvgLv"
            }
          },
        ]
      }
    }
               }), { userJid: m.chat })
                seina.relayMessage(m.chat, template.message, { messageId: template.key.id })
                }
            break

case 'toolsmenu': {
                buffer = await getBuffer(picak+'Tools')
                let Levele2 = level.getLevelingLevel(m.sender, _level)
let Xp1 = level.getLevelingXp(m.sender, _level)
let Xp2 = randomNomor(2000)       
let hao = randomNomor(200)  
                anu = `┌─〔 ${global.botname} 〕
├ ${ucapannya2}, ${pushname}
│
├ Tersisa *${getLimit(m.sender)} Limit*
├ Role *${role}*
├ Level *${Levele2} (${getBalance(m.sender, balance)} / ${Xp1}* *[${Xp2}]*
├ ${Xp1} totalexp XP secara Total
│ 
├ Tanggal: *${thisDay}, ${day} ${myMonths[bulan]} ${year}*
├ Tanggal Islam: *${moment.tz('Asia/Jakarta').format('DD/MM/YY')}*
├ Waktu: *${moment.tz('Asia/Jakarta').format('HH:mm:ss')} WIB*
│
├ Uptime: *${runtime(process.uptime())}*
├ Database: *${hao} totalreg dari orang*
├ Github: https://github.com/AliyaBot
└──── 
┌─〔 *TOOLS MENU* 〕
├ ${prefix}git <url> (Limit)
├ ${prefix}nulis <teks> (Limit)
├ ${prefix}ssweb <link> (Limit)
├ ${prefix}gitclone <url> (Limit)
├ ${prefix}nuliskiri <teks> (Limit)
├ ${prefix}translate <teks> (Limit)
├ ${prefix}nuliskanan <teks> (Limit)
├ ${prefix}magernulis <teks> (Limit)
├ ${prefix}magernulis2 <teks> (Limit)
├ ${prefix}magernulis3 <teks> (Limit)
├ ${prefix}magernulis4 <teks> (Limit)
├ ${prefix}magernulis5 <teks> (Limit)
├ ${prefix}magernulis6 <teks> (Limit)
└────

*${global.botname}@^1.2.3*
\`\`\`WhatsApp Using Lib Baileys Multi Device\`\`\`
`
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                           hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: buffer},
                            hydratedFooterText: botname,
                            hydratedButtons: [{          
            "urlButton": {
              "displayText": "My Group",
              "url": "https://chat.whatsapp.com/I5tQ4U2B7CVFh3P5QmvgLv"
            }
          },
        ]
      }
    }
               }), { userJid: m.chat })
                seina.relayMessage(m.chat, template.message, { messageId: template.key.id })
                }
            break
case 'internetmenu': {
                buffer = await getBuffer(picak+'Internet')
                let Levele2 = level.getLevelingLevel(m.sender, _level)
let Xp1 = level.getLevelingXp(m.sender, _level)
let Xp2 = randomNomor(2000)       
let hao = randomNomor(200)  
                anu = `┌─〔 ${global.botname} 〕
├ ${ucapannya2}, ${pushname}
│
├ Tersisa *${getLimit(m.sender)} Limit*
├ Role *${role}*
├ Level *${Levele2} (${getBalance(m.sender, balance)} / ${Xp1}* *[${Xp2}]*
├ ${Xp1} totalexp XP secara Total
│ 
├ Tanggal: *${thisDay}, ${day} ${myMonths[bulan]} ${year}*
├ Tanggal Islam: *${moment.tz('Asia/Jakarta').format('DD/MM/YY')}*
├ Waktu: *${moment.tz('Asia/Jakarta').format('HH:mm:ss')} WIB*
│
├ Uptime: *${runtime(process.uptime())}*
├ Database: *${hao} totalreg dari orang*
├ Github: https://github.com/AliyaBot
└──── 
┌─〔 *INTERNET MENU* 〕
├ ${prefix}detik (news)
├ ${prefix}news (news)
├ ${prefix}infobmkg
├ ${prefix}covidindo
├ ${prefix}covidglobal
├ ${prefix}kbbi <query>
├ ${prefix}carigc <judul> (Limit)
├ ${prefix}brainly <soal> (Limit)
├ ${prefix}kodepos kota>
├ ${prefix}cuaca <daerah> (Limit)
├ ${prefix}playstore <query>
├ ${prefix}wikipedia <query>
├ ${prefix}jadwalsalat <kota>
├ ${prefix}resep <masak apa>
├ ${prefix}resepmasakan <query> (Limit)
└────

*${global.botname}@^1.2.3*
\`\`\`WhatsApp Using Lib Baileys Multi Device\`\`\`
`
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                           hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: buffer},
                            hydratedFooterText: botname,
                            hydratedButtons: [{          
            "urlButton": {
              "displayText": "My Group",
              "url": "https://chat.whatsapp.com/I5tQ4U2B7CVFh3P5QmvgLv"
            }
          },
        ]
      }
    }
               }), { userJid: m.chat })
                seina.relayMessage(m.chat, template.message, { messageId: template.key.id })
                }
            break

case 'shortmenu': {
                buffer = await getBuffer(picak+'shortlink')
                let Levele2 = level.getLevelingLevel(m.sender, _level)
let Xp1 = level.getLevelingXp(m.sender, _level)
let Xp2 = randomNomor(2000)       
let hao = randomNomor(200)  
                anu = `┌─〔 ${global.botname} 〕
├ ${ucapannya2}, ${pushname}
│
├ Tersisa *${getLimit(m.sender)} Limit*
├ Role *${role}*
├ Level *${Levele2} (${getBalance(m.sender, balance)} / ${Xp1}* *[${Xp2}]*
├ ${Xp1} totalexp XP secara Total
│ 
├ Tanggal: *${thisDay}, ${day} ${myMonths[bulan]} ${year}*
├ Tanggal Islam: *${moment.tz('Asia/Jakarta').format('DD/MM/YY')}*
├ Waktu: *${moment.tz('Asia/Jakarta').format('HH:mm:ss')} WIB*
│
├ Uptime: *${runtime(process.uptime())}*
├ Database: *${hao} totalreg dari orang*
├ Github: https://github.com/AliyaBot
└──── 
┌─〔 *SHORTLINK* 〕
├ ${prefix}gg <url>
├ ${prefix}sid <url>
├ ${prefix}bitly <url>
├ ${prefix}tinyurl <url>
└────

*${global.botname}@^1.2.3*
\`\`\`WhatsApp Using Lib Baileys Multi Device\`\`\`
`
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                           hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: buffer},
                            hydratedFooterText: botname,
                            hydratedButtons: [{          
            "urlButton": {
              "displayText": "My Group",
              "url": "https://chat.whatsapp.com/I5tQ4U2B7CVFh3P5QmvgLv"
            }
          },
        ]
      }
    }
               }), { userJid: m.chat })
                seina.relayMessage(m.chat, template.message, { messageId: template.key.id })
                }
            break

case 'ownermenu': {
                buffer = await getBuffer(picak+'Owner')
                let Levele2 = level.getLevelingLevel(m.sender, _level)
let Xp1 = level.getLevelingXp(m.sender, _level)
let Xp2 = randomNomor(2000)       
let hao = randomNomor(200)  
                anu = `┌─〔 ${global.botname} 〕
├ ${ucapannya2}, ${pushname}
│
├ Tersisa *${getLimit(m.sender)} Limit*
├ Role *${role}*
├ Level *${Levele2} (${getBalance(m.sender, balance)} / ${Xp1}* *[${Xp2}]*
├ ${Xp1} totalexp XP secara Total
│ 
├ Tanggal: *${thisDay}, ${day} ${myMonths[bulan]} ${year}*
├ Tanggal Islam: *${moment.tz('Asia/Jakarta').format('DD/MM/YY')}*
├ Waktu: *${moment.tz('Asia/Jakarta').format('HH:mm:ss')} WIB*
│
├ Uptime: *${runtime(process.uptime())}*
├ Database: *${hao} totalreg dari orang*
├ Github: https://github.com/AliyaBot
└──── 
┌─〔 *OWNER MENU* 〕
├ ${prefix}leave
├ ${prefix}tfxp @tag
├ ${prefix}join <link>
├ ${prefix}bctext <text>
├ ${prefix}bcall <text>
├ ${prefix}bcloc <text>
├ ${prefix}tflimit @tag
├ ${prefix}block @user
├ ${prefix}react <emoji>
├ ${prefix}bctext <text>
├ ${prefix}setexif <text>
├ ${prefix}chat <option>
├ ${prefix}bcvideo <text>
├ ${prefix}bcgroup <text>
├ ${prefix}bcimage <text>
├ ${prefix}unblock @user
├ ${prefix}setppbot <image>
└────

*${global.botname}@^1.2.3*
\`\`\`WhatsApp Using Lib Baileys Multi Device\`\`\`
`
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                           hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: buffer},
                            hydratedFooterText: botname,
                            hydratedButtons: [{          
            "urlButton": {
              "displayText": "My Group",
              "url": "https://chat.whatsapp.com/I5tQ4U2B7CVFh3P5QmvgLv"
            }
          },
        ]
      }
    }
               }), { userJid: m.chat })
                seina.relayMessage(m.chat, template.message, { messageId: template.key.id })
                }
            break

case 'sond': {

            hey = fs.readFileSync('./media/tes.mp3')

            seina.sendMessage(m.chat, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted:m})

            }

            break

            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    seina.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
