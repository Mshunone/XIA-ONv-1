import fetch from 'node-fetch'
import fs from 'fs'
import moment from 'moment-timezone'
let handler = async (m, { conn, args, command }) => {
  let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let who = m.sender
const time = moment.tz('Asia/Jakarta').format('HH')
  const ultah = new Date(`${ultahowner} 00:00:01`)
    const sekarat = new Date().getTime() 
    const Kurang = ultah - sekarat
    const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));
    const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))
    const detek = Math.floor( Kurang % (1000 * 60) / 1000)
  let name = await conn.getName(m.sender)
  let runnya = `┏━━━❏〔 *RUNTIME BOT* 〕❏━⬣
┃✾ ⏲️ Waktu: ${time} WIB
┃✾ 💌 Aktif Selama : ${uptime}
┃✾ 🌹 Tag : ${name}
┗━━━━━━ꕥ`
	let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
 await conn.sendButton(m.chat, runnya,wm + '\n\n' + botdate, intro, [['MENU','.listmenu']], m, {
        contextInfo: {
            externalAdReply: {
                mediaUrl: '',
                        mediaType: 2,
                        description: 'anu',
                        title: `💌 Owner : ${ohari} Hari ${ojam} Jam ${onet} Menit ${detek} Detik`,
                        body: `Join su`,                                       previewType: 0,
                        thumbnail: await (await fetch(`https://i.pinimg.com/originals/e9/d5/46/e9d5466eed88731e3dd4211d2cc89c9b.jpg`)).buffer(),
                        sourceUrl: 'https://chat.whatsapp.com/GeWPLmclHaVHsF0GymCcJz'
            }
        }
    })
}


handler.help = ['runtime']
handler.tags = ['info']
handler.command = ['runtime', 'rt']
export default handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
