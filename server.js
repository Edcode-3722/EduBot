const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () =>{
   console.log("Ando full ");
 });

 client.on("message", (message) =>{
  if(message.content.startsWith("ed!sc")){
      message.channel.send("Hola");
  }
  });

  client.login("NzYzNjI2MzMzMjk2Nzg3NDY3.X36ccQ.TPhux1hrGF7L5tobMPm_pqXK_Lg");