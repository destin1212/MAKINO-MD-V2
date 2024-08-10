const fs = require("fs");
const chalk = require("chalk");

//to enable function - true
//to disable function - false
//
global.available = false;
global.autoReadGc = false;
global.autoReadAll = false;
global.antitags = false;


//auto functioner
global.autoTyping = false;                //make true to enable auto typing
global.autoRecord = true;                //make true to enable auto recording
global.groupevent = true;                //This is the new variable for controlling group event handling.
global.statusseen = false;                 //make true to view statuses 


global.Owner = ["260974764817"];
global.OwnerNumber = ["260974764817"];
global.ownertag = ["260974764817"]; 
global.OwnerName =  "Tᴀɪʀᴀ Mᴀᴋɪɴᴏ";
global.BotName = "🐦Makino-md-v2";
global.packname = "Tᴀɪʀᴀ Mᴀᴋɪɴᴏ";                             //Do not change.
global.author = "🐦Makino md ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ";                               //Do not change.
global.BotSourceCode = "https://github.com/anonphoenix007/MAKINO-MD-V2"; //Do not change.
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm "; 
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm"; //Do not change!
//global.dbase = process.env.DBASE || "";//Mongodb here
global.AuthorWhatsapp = "https://wa.me/2347080968564"; //Bot creator WhatsApp link,don't change or bot will not work.

global.sessID = process.env.sessID ||'Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0ozOENQTUorUXllc1FNNEpESXZ5U1ozWEJ6RUgzZjZ1V1VHSzVjUGUzMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM1lzL1pCeVVoYUg3cFA0b2trMG1rZkxDMXBPTEh4aHVSTENyc282U09rST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXSElEU1dWNlBVeWtYZEtkbVRENDAyMzhSNTcrZW5XK0wzWmdDRzc3R1hNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJiNjV0TWRHTlBqZGt3ZmRHNEtVcTJiTUs0dUtvaXpSdHRwcjNQYndmOW5JPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlEamJvNk9wZjEwOXBkWEhaSFpYUC80ZlBMTk5aK09OR3Q1czhiVWc1RVE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImR6TXVRR2VxNUhBSmFRR3dKQmo5S0liQUczUE16MnBHejhKSUx4aVVHaW89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUNLVGtLbVpVY1dKaEx4SGhqVlo1UmNMTkw0bEJjVGF6bHFoVUM5OGoxYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUXRRTlhPNzFvdXNEZGRDU2lCd3hQSTJBM2RxTnhvRlU4NE4vOEFHMzNTMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhFY0l6M29ldWdpVE9IMzczWit2QWoxWnNOUUtsejNZc1MrZUtpa0lMaHp1SDlCeWF2OG5Nc1VQUWhKamhucXhjeis3c1EvQ2VPMGh6a0R2TkhjMmpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OCwiYWR2U2VjcmV0S2V5IjoiWEdtVHpSaEFZd2hHVGdrNFFXMjBydWpVTHNSNCtpRm8wRDRLSm00cnlSbz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiMXd6bnp1WFlSRmlvZjVsTUpUS2JUQSIsInBob25lSWQiOiIxZmYwNWIxZi1lNjdlLTRiNjQtYjk0ZC01OTQ5ZDQyYTBlMTYiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWDdCN1RFTkgxTVNkWk45Y2RhRk5pWitXQlZnPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVHZk1sMGNaaTRwT0hmMUp2MVNucFozU1AwVT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJXM0FHNjdCQSIsIm1lIjp7ImlkIjoiMjYwOTc0NzY0ODE3OjhAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1AzSGtKc0hFSnFNMjdVR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IitrOUNFeUZBY1FTRGZNV2ZDbndXU29NaHJsRkx0NHU3SzBJeE1pZmF5WFk9IiwiYWNjb3VudFNpZ25hdHVyZSI6Imk2ZExreU1aWGdpRWM5djBoMVR2TjU1YTcvSFl0cVhhQlA0NzlFOGRxVXNWUzNLcDJnblZ5RGljeDJwY1k5QTQrK1dmOWlKejJ1RHpDNEo2T002YkJBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJnR09XeWxOWXhub2xld1ZTUktMQS85NEFpSU1FOFNZd1NoN3pNV28zY2t4enNleDJOQWExODZvNkhsSFJUOUlSbFN2UkVEL3Nja2hvSXhVeVJRZ3BoQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI2MDk3NDc2NDgxNzo4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmZwUFFoTWhRSEVFZzN6Rm53cDhGa3FESWE1UlM3ZUx1eXRDTVRJbjJzbDIifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjMyNTQzMTEsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSVJRIn0='

//
global.BotLogo = fs.readFileSync("./Assets/pic1.jpg");
global.Thumb = fs.readFileSync("./Assets/pic9.jpg");
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg");
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg");


//
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


//
global.mess = {
    jobdone: 'Here you go...',
    useradmin: 'Only group Admin can use the command 😂 ',
    botadmin: 'Make me Admin first 😌📍.',
    botowner: 'Only my *Owner* can use this command,Dont trespass, Baka!',
    grouponly: 'This command is only made for *Groups*, Baka!',
    privateonly: 'This command is only made for *Private Chat*, Baka!',
    botonly: 'Only the *Bot itself* can use this command!',
    waiting: 'Wait a lil bit (¬_¬)ﾉ...',
    nolink: ' provide me *link*, Baka!',
    error: 'An error occurd!',
    banned: 'You cant use the commands because you Are *Banned*',
    bangc: 'This Group is *Banned* from using Commands!',
    nonsfw: 'Dont be a pervert,idiot! This is not a NSFW enabled group!'
    
}
