module.exports = (client, message, args) => {
    let operativeUser = message.guild.member(message.mentions.users.first());
    let commandType = args[0];
    
    if (commandType == "help") {
        message.channel.send("The Counter command will track the minutes since a specified user last said a certain keyword.");
        message.channel.send("Usage: !counter help");
        message.channel.send("Usage: !counter set <targetUser> <keyword>");
        message.channel.send("Usage: !counter check <targetUser> <keyword (optional)>");
        message.channel.send("Usage: !counter delete <targetUser> <keyword>");
        message.channel.send("Usage: !counter list <targetUser (optional)>");
        return message.reply("This concludes the help information.");
    }
    
    if (!operativeUser && (commandType == "set" || commandType == "check" || commandType == "delete")) {
        return message.reply("Please specify a (real) user!");
    }
}
