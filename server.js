const Discord = require("discord.js");
const client = new Discord.Client();


function presence(){

client.user.setPresence({
  status:"online",
  
  activity: {
    name: "PROGRAMMING FOR A BETTER WORLD | ed!help",
    type: "PLAYING"
  }
   });
}



client.on('ready', () =>{
   console.log("Ando full ");
   presence()
   
 });
 // EduBot//
 client.on('message', message => {
  // If the message is "ping"
  if (message.content === 'edubot') {
    // Send "pong" to the same channel
    message.channel.send('Que necesita mi pana');
  }
});

 client.on("message", (message) =>{
  if(message.content.startsWith("ed!sc")){
      message.channel.send("Hola");
  }
  });
  client.on("message", (message) =>{
    if(message.content.startsWith("si o no")){
        message.channel.send("En efecto");
    }
    });
  client.on("message", (message) =>{
if(message.content.startsWith("ed!help")){
  message.channel.send("En que te puedo ayudar?");
}

  });
  client.on('message', message => {
    // If the message is "what is my avatar"
    if (message.content === 'ed!avatar' ) {
      // Send the user's avatar URL
      message.reply(message.author.displayAvatarURL());
    }
  });
  client.on('message', message => {
    // Ignore messages that aren't from a guild
    if (!message.guild) return;
  
    // If the message content starts with "!kick"
    if (message.content.startsWith('ed!kick')) {
      // Assuming we mention someone in the message, this will return the user
      // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
      const user = message.mentions.users.first();
      // If we have a user mentioned
      if (user) {
        // Now we get the member from the user
        const member = message.guild.member(user);
        // If the member is in the guild
        if (member) {
          /**
           * Kick the member
           * Make sure you run this on a member, not a user!
           * There are big differences between a user and a member
           */
          member
            .kick('Optional reason that will display in the audit logs')
            .then(() => {
              // We let the message author know we were able to kick the person
              message.reply(`Pateo exitoso! ${user.tag}`);
            })
            .catch(err => {
              // An error happened
              // This is generally due to the bot not being able to kick the member,
              // either due to missing permissions or role hierarchy
              message.reply('No me fue posible patearlo :c');
              // Log the error
              console.error(err);
            });
        } else {
          // The mentioned user isn't in this guild
          message.reply("El usuario no esta en el server!");
        }
        // Otherwise, if no user was mentioned
      } else {
        message.reply("No me mencionaste a quien pateo :/");
      }
    }
  });
  //ed!futuro///////////////////////////////////////////////////////////////////////////////////
  client.on('message', message =>{
           
  });
//ed!ban//
  client.on('message', message => {
    // Ignore messages that aren't from a guild
    if (!message.guild) return;
  
    // if the message content starts with "!ban"
    if (message.content.startsWith('ed!ban')) {
      // Assuming we mention someone in the message, this will return the user
      // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
      const user = message.mentions.users.first();
      // If we have a user mentioned
      if (user) {
        // Now we get the member from the user
        const member = message.guild.member(user);
        // If the member is in the guild
        if (member) {
          /**
           * Ban the member
           * Make sure you run this on a member, not a user!
           * There are big differences between a user and a member
           * Read more about what ban options there are over at
           * https://discord.js.org/#/docs/main/master/class/GuildMember?scrollTo=ban
           */
          member
            .ban({
              reason: 'Porque quizo el admin!',
            })
            .then(() => {
              // We let the message author know we were able to ban the person
              message.reply(`ya fue baneado :D ${user.tag}`);
            })
            .catch(err => {
              // An error happened
              // This is generally due to the bot not being able to ban the member,
              // either due to missing permissions or role hierarchy
              message.reply('No me fue posible banearlo :c');
              // Log the error
              console.error(err);
            });
        } else {
          // The mentioned user isn't in this guild
          message.reply("El miembro no esta en el server");
        }
      } else {
        // Otherwise, if no user was mentioned
        message.reply("No me haz mencionado a quien baneo :/");
      }
    }
  });

  client.login("NzYzNjI2MzMzMjk2Nzg3NDY3.X36ccQ.d_GGxn9HcgJWNcSRI6my0Nb8KyA");