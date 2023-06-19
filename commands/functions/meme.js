const { MessageMedia } = require('whatsapp-web.js');
const hispamemes = require("hispamemes");

async function meme(message) {

    try {

        let lowercase = message.body.toLowerCase();
        const chat = await message.getChat()
        let momo = hispamemes.meme();

        if (lowercase === 'meme') {
            const momazo = await MessageMedia.fromUrl(momo);
            await chat.sendMessage(momazo);
        }

    } catch (error) {
        console.log('la libreria no arrojo un link valido');
        message.reply('ocurrio un error vuelva a intentar 🪷');
    }
}

module.exports = meme;