// briddle.js
// বাংলা ধাঁধা কমান্ড — /briddle  
// অনেক ধাঁধা আছে, রিপ্লাই করলে সঠিক/ভুল বলে দেবে  
// Author: Helal

const riddlesBn = [
  { q: "একলা তারা যায় না দেখা, সঙ্গী গেলে বাঁচে। আধার দেখে ভয়ে পালায়, আলোয় ফিরে আসে।", a: "ছায়া" },
  { q: "কোথায় নদী আছে, কিন্তু জল নেই? পাহাড় আছে, কিন্তু পাথর নেই? দেশ আছে, কিন্তু মানুষ নেই?", a: "মানচিত্র" },
  { q: "বল কি সেই জিনিস, দেখো না, করো না, কাছে আসে তবে চলে যায় — সে কে?", a: "ছায়া" },
  { q: "সকাল উঠে, রাত আসে, থাকি শুধু সময়ের গানে; নাম বলো কে?", a: "দিন" },
  { q: "ডিম থেকে আসে, না ডিমের ছান, বল কি হতে পারে সে জান?", a: "মুরগি" },
  { q: "নাকে হাত ঠেকালে থাকে, ছুঁসে নিয়ে যায় দেয়াল, বল কী?", a: "ঝিড়ি" },  
  { q: "এক হাতে না, দুই হাতে খায়, তবুও দাঁড়ায় না — বল তা কি?", a: "জবা" },  
  { q: "তুমি দেখতে পারো, স্পর্শ করতে পারো না, আমি তোমার ছায়ার মতো, বল কে?", a: "আলো" },
  { q: "কোন একটি জিনিস, যত বাড়াও, তত ছোট হয় — বল কি?", a: "গর্ত" },
  { q: "একটি অক্ষর যোগ করলে ছোট হয়, বের করে বল?", a: "ডিম → ডম" }
  // আরও বাংলা রিডল এখানে যোগ করতে পারো
];

module.exports = {
  config: {
    name: "briddle",
    aliases: ["banglariddle", "bhojhdha"],
    version: "2.0",
    author: "Helal",
    countDown: 2,
    role: 0,
    category: "fun",
    shortDescription: { en: "Bangla Riddle — reply answer" }
  },

  onStart: async function({ message }) {
    try {
      const item = riddlesBn[Math.floor(Math.random() * riddlesBn.length)];
      const text = `🧩 বাংলা ধাঁধা:\n\n${item.q}\n\n👉 উত্তর দিতে এই মেসেজের রিপ্লাই করো।`;
      message.reply(text, (err, info) => {
        if (info && info.messageID) {
          global.riddleSessions = global.riddleSessions || {};
          global.riddleSessions[info.messageID] = { answer: item.a, lang: "bn" };
        }
      });
    } catch (e) {
      console.error(e);
      message.reply("❌ কিছু ভুল হয়েছে, আবার চেষ্টা করো।");
    }
  },

  onReply: async function({ message, event }) {
    try {
      const repliedTo = event.messageReply?.mid || event.messageReply?.messageID;
      if (!repliedTo) return;
      const session = (global.riddleSessions && global.riddleSessions[repliedTo]);
      if (!session) return;
      const userAns = (event.body || "").trim().toLowerCase();
      const correct = (session.answer || "").toString().trim().toLowerCase();
      if (!userAns) return message.reply("⚠️ উত্তর লিখে পাঠাও।");

      if (userAns === correct || correct.includes(userAns) || userAns.includes(correct)) {
        message.reply(`✅ ঠিক বলেছ! উত্তর — *${session.answer}*`);
      } else {
        message.reply(`❌ ভুল! সঠিক উত্তর — *${session.answer}*`);
      }
      delete global.riddleSessions[repliedTo];
    } catch (err) {
      console.error(err);
    }
  }
};