
const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
	dapa: 'https://dapuhy.xyz'
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': '7A012A0F7751',
	'https://dapuhy.xyz': 'piceg'
}

// Other
global.owner = ['62895388375000']
global.premium = ['62895388375000']
global.botname = 'KeniBotz'
global.packname = 'KeniBotz'
global.monayawal = '100000'
global.darahawal = '100'
global.besiAwal = '15'
global.goldAwal = '10'
global.emeraldAwal = '5'
global.umpanAwal = '5'
global.potionAwal = '1'
global.limittot = 100,
global.f1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.f2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.f3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.f4 = 'application/zip'
global.f5 = 'application/pdf'
global.f6 = 'application/vnd.android.package-archive'
global.author = 'KeniBotz\n© KeniBotz'
global.flaming = 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text='
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓ Berhasil',
        ban: 'Maaf Sepertinya Kakak Telah Di Banned😔😔 Ketik .owner Untuk Meminta Di Unban',
    admin: 'Fitur Ini Hanya Khusus Admin Group Kak😃',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu Ya Kak😃😃',
    owner: 'Fitur Ini Khusus Owner Bot😄😄',
    group: 'Fitur Digunakan Hanya Untuk Group Chat Ya Kak😗',
    private: 'Fitur Digunakan Hanya Untuk Private Chat Ya Kak😗',
    bot: 'Fitur Khusus Pengguna Nomor Bot Kak😗',
    wait: 'Tunggu permintaan Kakak lagi diproses😚😚',
    endLimit: 'Limit Harian Kakak Telah Habis,  Ketik .buy limit jumlah limit untuk membeli limit, Note: Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 25
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./lib/hisoka.jpg')
global.bc = fs.readFileSync('./lib/bc.jpg')
global.visoka = { url: 'https://telegra.ph/file/075eacf4813bd7871fb08.mp4' }
global.vid = { url: 'https://telegra.ph/file/075eacf4813bd7871fb08.mp4' }

//—————「 Set Random Image Menu 」—————//

global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.mehk = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text='
global.awog = 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text='
global.mohai = 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text='
global.mhehe = 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text='


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
