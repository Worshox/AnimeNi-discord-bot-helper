const { SlashCommandBuilder } = require('discord.js');
const { PermissionFlagsBits } = require('discord.js');
const { exec } = require('node:child_process');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('restart-bota')
        .setDescription('Restartuje prawdziwego bota AnimeNi')
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
    async execute(interaction) {

        exec('pm2 restart 0', async (error, output) => { 
            if(error) {
                console.log('Nie udało się zrestartować bota: ', error);
                await interaction.reply('Nie udało się zrestartować bota, skontaktuj się z developerem.');
                return;
            }

            console.log('Wyjście: \n', output);
            await interaction.reply('Bot zrestartowany!');
        });
    },
};