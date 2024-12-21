// credits to my boss: davidcyril209@gmail.com
// Auto React Code Created by David Cyril on September 2024


if (global.autoreact) {   
if (m.message) {
  try {
    // Array of random emojis
    const emojis = ["😊", "👍", "😂", "💯", "🔥", "🙏", "🎉", "👏", "😎", "🤖", "👫", "👭", "👬", "👮", "🕴️", "💼", "📊", "📈", "📉", "📊", "📝", "📚", "📰", "📱", "💻", "📻", "📺", "🎬", "📽️", "📸",
"📷", "🕯️", "💡", "🔦", "🔧", "🔨", "🔩", "🔪", "🔫", "👑",
"👸", "🤴", "👹", "🤺", "🤻", "👺", "🤼", "🤽", "🤾", "🤿","🗣️", "👤", "👥", "🫂", "👣", "🦰", "🦱", "🦳", "🦲", "🐵"];

// you can add many emojis
    
    // Function to pick a random emoji
    const getRandomEmoji = () => emojis[Math.floor(Math.random() * emojis.length)];

    // Trigger a random emoji reaction once when a message is received
    await David.sendMessage(m.chat, { react: { text: getRandomEmoji(), key: m.key }});
    
  } catch (err) {
    // In case of any errors, still react with a random emoji
    await David.sendMessage(m.chat, { react: { text: getRandomEmoji(), key: m.key }});
  }
}
}
