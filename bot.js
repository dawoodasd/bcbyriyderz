const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '$'

client.on('ready', () => {
    console.log(`~~~~~~~~~~~~~~~~~`);
    console.log(`Logging into Discord`);
    console.log(`~~~~~~~~~~~~~~~~~~~~~`);
    console.log(`on  ${client.guilds.size} Servers `);
    console.log(`~~~~~~~~~~~~~~~~~~~~~~~~`);
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setGame(`#Riyderz BC |$Help`,"http://twitch.tv/y04zgamer")
    client.user.setStatus("dnd")
 });













client.on("message", message => {
 var prefix = "$";
 
            if (message.content.startsWith(prefix + "obc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});









client.on('message', message => {
    if (message.author.id === client.user.id) return;
    if (message.guild) {
   let embed = new Discord.RichEmbed()
    let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bcv2') {
    if (!args[1]) {
message.channel.send("**.bc <message>**");
return;
}
        message.guild.members.forEach(m => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return;
            var bc = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)
            .addField('** الـسيرفر**', `${message.guild.name}`,true)
            .addField(' **الـمرسل **', `${message.author.username}#${message.author.discriminator}`,true)
            .addField(' **الرسالة** ', args)
            .setThumbnail(message.guild.iconURL)
            .setColor('RANDOM')
            m.send(`${m}`,{embed: bc});
        });
        const AziRo = new Discord.RichEmbed()
        .setAuthor(message.author.username, message.author.avatarURL)   
        .setTitle('✔️ | جاري ارسال رسالتك ') 
        .addBlankField(true)
        .addField('👥 | عدد الاعضاء المرسل لهم ', message.guild.memberCount , true)        
        .addField('📋| الرسالة ', args)
        .setColor('RANDOM')  
        message.channel.sendEmbed(AziRo);          
    }
    } else {
        return;
    }
});






  client.on("message", message => {
                                    var prefix = "$";
                                 if (message.content === "$help") {
                                     message.channel.send(' ');
                                  const embed = new Discord.RichEmbed() 
                                      .setColor("RANDOM")
                                      .setDescription(`
                                      __**BC Commands**__
                                      『$bc/ ارسال برودكاست للجميع』
                                      『$ping/ سرعة البوت』
                                      『$boc/ ارسال برودكاست لاونلاين』
                                      『$bot/ معلومات البوت』
                                      『$bcv2/ ارسال برودكاست للجميع بشكل اخر』
                                `)
                                   message.author.sendEmbed(embed)
                                    
                                   }
                                   }); 
                                








client.on('message', message => { //By |.iiMostafaYT#1001
    if (message.content.startsWith("$bot")) { //By |.iixdavied#9908
    message.channel.send({ //By |.iixdavied#9908
        embed: new Discord.RichEmbed() //By |.iixdavied#9908
            .setAuthor(client.user.username,client.user.avatarURL) //By |.iixdavied#9908
            .setThumbnail(client.user.avatarURL) //By |.iixdavied#9908
            .setColor('RANDOM') //By |.iiMostafaYT#1001
            .setTitle('Info Riyderz bot.') //By |.iixdavied#9908
            .addField('**My Ping**' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true) //By |.iixdavied#9908
            .addField('**RAM Usage**', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true) //By |.iixdavied#9908
            .addField('**Servers**', [client.guilds.size], true) //By |.iixdavied#9908
            .addField('**Channels**' , `[ ${client.channels.size} ]` , true) //By |.iixdavied#9908
            .addField('**Users**' ,`[ ${client.users.size} ]` , true) //By |.iixdavied#9908
            .addField('**My Name**' , `[ ${client.user.tag} ]` , true) //By |.iixdavied#9908
            .addField('**My ID**' , `[ ${client.user.id} ]` , true) //By |.iixdavied#9908
            .addField('**DiscordJS**' , `[ ${Discord.version} ]` , true) //By |.iixdavied#9908
            .addField('**NodeJS**' , `[ ${process.version} ]` , true) //By |.iixdavied#9908
            .addField('**Arch**' , `[ ${process.arch} ]` , true) //By |.iixdavied#9908
            .addField('**Platform**' , `[ ${process.platform} ]` , true) //By |.iixdavied#9908
                  .addField('**My Prefix**' , `[ ${prefix} ]` , true) //By |.iixdavied#9908
                  .addField('**My Language**' , `[ Java Script ]` , true) //By |.iixdavied#9908
                  .setFooter('By | .iixdavied#9908') //By |.iixdavied#9908
    }) //By |.iixdavied#9908
} //By |.iixdavied#9908
}); //By |.iixdavied#9908




client.on('message', message => {
    if(!message.channel.guild) return;
if (message.content.startsWith('$ping')) {
if(!message.channel.guild) return;
var msg = `${Date.now() - message.createdTimestamp}`
var api = `${Math.round(client.ping)}`
if (message.author.bot) return;
let embed = new Discord.RichEmbed()
.setAuthor(message.author.username,message.author.avatarURL)
.setColor('RANDOM')
.addField('**Time Taken:**',msg + " ms :signal_strength: ")
.addField('**WebSocket:**',api + " ms :signal_strength: ")
message.channel.send({embed:embed});
}
});




client.on('message', message => {
              if(!message.channel.guild) return;
    if(message.content.startsWith('$bc')) {
    if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
    let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
    let copy = "Cozmo bot";
    let request = `Requested By ${message.author.username}`;
    if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
    msg.react('✅')
    .then(() => msg.react('❌'))
    .then(() =>msg.react('✅'))
    
    let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
    let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
	      let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
    let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
    reaction1.on("collect", r => {
    message.channel.send(`☑ | Done ... The Broadcast Message Has Been Sent For ${message.guild.members.size} Members`).then(m => m.delete(5000));
    message.guild.members.forEach(m => {
    var bc = new
       Discord.RichEmbed()
       .setColor('RANDOM')
       .setTitle('Broadcast')
       .addField('Server', message.guild.name)
       .addField('Sender', message.author.username)
       .addField('Message', args)
       .setThumbnail(message.author.avatarURL)
       .setFooter(copy, client.user.avatarURL);
    m.send({ embed: bc })
    msg.delete();
    })
    })
    reaction2.on("collect", r => {
    message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
    msg.delete();
    })
    })
    }
    });






client.login(process.env.BOT_TOKEN);

