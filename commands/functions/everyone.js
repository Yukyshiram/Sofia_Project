const sofi = require("../../client");

async function everyone(message) {

    let lowercase = message.body.toLowerCase();
    try {
        if (lowercase === 'everyone') {
            let chat = await message.getChat();

            if (chat.isGroup) {
                const chat = await message.getChat();

                let text = "";
                let mentions = [];

                for (let participant of chat.participants) {
                    const contact = await sofi.getContactById(participant.id._serialized);

                    mentions.push(contact);
                    text += `@${participant.id.user} `;
                }

                await chat.sendMessage(text, { mentions });

            } else {

                message.reply('*¡Este comando solo se puede usar en un grupo!*');

            }
        }
    } catch (error) {
        console.log('Hay un error en everyone.js');
        console.log(error);
    }

}

module.exports = everyone;