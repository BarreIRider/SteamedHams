const Discord = require("discord.js");
const client = new Discord.Client();
const token = "NDA5MDIxMDYyNjk3OTc1ODA4.DVYiMw.WK3yi-fpIIjwm9OM65iRJiTlzKE";
const prefix = "steamed ";

client.on("ready", () => {
    console.log('Ready for an unforgettable luncheon.');
});
client.on("message", async message => {
    if(message.author.bot) return;
    if(message.content.indexOf(prefix)!==0) return;
    var args = message.content.slice(prefix.length).trim().split(/ +/g);
    var command = args.shift().toLowerCase();
    if(command=="hams"){
        message.channel.send("Well, Seymour, I made it- despite your directions.\nAh.\nSuperintendent Chalmers.\nWelcome.\nI hope you're prepared for an unforgettable luncheon.\nYeah.\nOh, egads! My roast is ruined.\nBut what if I were to purchase fast food and disguise it as my own cooking? Delightfully devilish, Seymour.\nAh- \nSkinner with his crazy explanations The superintendent's gonna need his medication When he hears Skinner's lame exaggerations There'll be trouble in town tonight \nSeymour! \nSuperintendent, I was just- uh, just stretching my calves on the windowsill.\nIsometric exercise.\nCare to join me? \nWhy is there smoke coming out of your oven, Seymour?\nUh- Oh.\nThat isn't smoke.\nIt's steam.\nSteam from the steamed clams we're having.\nMmm.\nSteamed clams.\nWhew.\nSuperintendent, I hope you're ready for mouth-watering hamburgers.\nI thought we were having steamed clams.\nD'oh, no.\nI said steamed hams.\nThat's what I call hamburgers.\nYou call hamburgers steamed hams?\nYes.\nIt's a regional dialect.\nUh-huh.\nUh, what region?\nUh, upstate New York.\nReally.\nWell, I'm from Utica, and I've never heard anyone use the phrase \"steamed hams.\"\nOh, not in Utica.\nNo.\nIt's an Albany expression.\nI see.\nYou know, these hamburgers are quite similar to the ones they have at Krusty Burger.\nOh, no.\nPatented Skinner burgers.\nOld family recipe.\nFor steamed hams.\nYes.\nYes.\nAnd you call them steamed hams despite the fact that they are obviously grilled.\nYe- You know, the- One thing I should- - Excuse me for one second.\nOf course.\nWell, that was wonderful.\nA good time was had by all.\nI'm pooped.\nYes.\nI should be- Good Lord! What is happening in there? \nAurora borealis.\nUh- Aurora borealis at this time of year at this time of day in this part of the country localized entirely within your kitchen?\nYes.\nMay I see it?\nNo.\nSeymour.\nThe house is on fire.\nNo, Mother.\nIt's just the northern lights.\nWell, Seymour, you are an odd fellow but I must say you steam a good ham.\nHelp.\nHelp.");
    }
});
client.login(token);