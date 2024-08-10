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


global.Owner = ["xuccessfully"];
global.OwnerNumber = ["260974764817"];
global.ownertag = ["🥲"]; 
global.OwnerName =  "Tᴀɪʀᴀ Mᴀᴋɪɴᴏ";
global.BotName = "🐦Makino-md-v2";
global.packname = "Tᴀɪʀᴀ Mᴀᴋɪɴᴏ";                             //Do not change.
global.author = "🐦Makino md ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ";                               //Do not change.
global.BotSourceCode = "https://github.com/anonphoenix007/MAKINO-MD-V2"; //Do not change.
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm "; 
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm"; //Do not change!
//global.dbase = process.env.DBASE || "";//Mongodb here
global.AuthorWhatsapp = "https://wa.me/2347080968564"; //Bot creator WhatsApp link,don't change or bot will not work.

global.sessID = process.env.sessID || `{"noiseKey":{"private":{"type":"Buffer","data":"4IGgS77LxH2eFmPzjsxHhWLdWxbDmYXoXR1IdMzFkVM="},"public":{"type":"Buffer","data":"ZhZdTiVPKO+UJT0c0btMPA10m23HHhiVJQluOyZGA2c="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"SBc+lJExOwekrk0G6c9A2xswThPMJq7oVQCf/BihTWM="},"public":{"type":"Buffer","data":"nX9B2j9gcRKE5asHzFgzG7CrUfJI2Man97zVz4JDFG0="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"yLYDHZ+5cFCjyhxmv0/sH+/R4llUF3lSYMzDQZQjxFo="},"public":{"type":"Buffer","data":"dNFpRzr4noBkscNmNZ/p+++rxBCJkOLU7yNrFZ3eLlo="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"8F8qMEzE1h8poCzzGU1zYv2w91NlJePbV886+FTgRXU="},"public":{"type":"Buffer","data":"80tsfQ9qQ5fY2y7MU9wcIGWtSFizjo7HEbECKUZ80Ag="}},"signature":{"type":"Buffer","data":"3r4pjt0o/8D5jS9ylKYKEokpwDbQk23u+whjaQGmiwD9ZoOY+UZPIrMrGss0IQPZXhO0wxaisbJbv+6x7W1LhQ=="},"keyId":1},"registrationId":245,"advSecretKey":"1ceDOFUX6xgkqclciRxC5dwErlcRuV0Yfb91BmMe4oo=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"c0wyO5XFQvOyeVnujbK07w","phoneId":"40dda737-afdb-451e-9392-ce15a546d108","identityId":{"type":"Buffer","data":"DTs9imIH8JE0gzRH2lJaXGOPFqM="},"registered":true,"backupToken":{"type":"Buffer","data":"PWuzGc9zCTtPDFkYkcdqnUiWW4w="},"registration":{},"pairingCode":"YR55G7M9","me":{"id":"260974764817:5@s.whatsapp.net"},"account":{"details":"CPvHkJsHELPv2rUGGAEgACgA","accountSignatureKey":"+k9CEyFAcQSDfMWfCnwWSoMhrlFLt4u7K0IxMifayXY=","accountSignature":"dpLeCOTfu6ZmpgYDQ0EvWB95P7I9GXYn/ihurFVuHIYD5tGgegQEGD9uOFWkyA5SpXm2INZQiQAyBN4Jm/YLBg==","deviceSignature":"SPs0yyacgPxRI6gKxohxeG2h35EqC7nXu+4b6L5+kZup5g/N74CtMZX0dXlfoMRU/1jczNTRl4+jhDImQQ0igg=="},"signalIdentities":[{"identifier":{"name":"260974764817:5@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BfpPQhMhQHEEg3zFnwp8FkqDIa5RS7eLuytCMTIn2sl2"}}],"platform":"android","lastAccountSyncTimestamp":1723250625}`
global.prefa = ["/"]

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
