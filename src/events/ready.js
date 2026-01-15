import { Events, ActivityType } from 'discord.js';

export default {
  name: Events.ClientReady,
  once: true,
  execute(client) {
    console.log(`✅ Bot hazır! ${client.user.tag} olarak giriş yapıldı.`);
    
    client.user.setPresence({
      activities: [{ name: 'FTO Raporları', type: ActivityType.Watching }],
      status: 'online'
    });
  }
};
