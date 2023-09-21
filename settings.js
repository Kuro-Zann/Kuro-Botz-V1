const chalk = require("chalk")
const fs = require("fs")

//—————「 Set Nama Bot & Own 」—————//
global.botname = "Kuro Botz"
global.ownername = 'Zann'
global.ownerNumber = ["6285607265790@s.whatsapp.net"]
global.creator = "6285607265790@s.whatsapp.net"
global.prefa = ['', '.']
global.hituet = 0

//—————「 Set Owner 」—————//
global.owner = ['6285607265790']
global.ownernomer = "6285607265790"
global.ownernumber = '6285607265790'

//—————「 Set Apikey 」—————————//
global.keyopenai = "-" // : https://platform.openai.com
global.apikey = "-" // : https://api.zahwazein.xyz

//—————「 Set Wm 」—————————//
global.wm = "Kuro Servamp"
global.packname = "Cʀᴇᴀᴛᴇᴅ Bʏ"
global.author = "Kᴜʀᴏ Bᴏᴛᴢ"

//—————「 Set Image 」————————//
global.thumb = fs.readFileSync("./image/kuro.jpg")
global.logo = fs.readFileSync("./image/logo.jpg")

//—————「 Set Message 」——————//
global.mess = {
success: 'Succes シ',
admin: '❗Fitur Ini Khusus Admin Grup !',
botAdmin: '❗Jadikan Bot Admin Terlebih Dahulu !',
owner: '❗Kelakuan!! Fitur Ini Khusus owner Bot !',
group: '❗Hanya Bisa Di Gunakan, Di Dalam Grup !',
prem: '❗Fitur Khusus User Premium !',
wait: '⏳ Sedang Di Proses, Mohon Tunggu',
}

//—————「 Batas Akhir 」—————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})