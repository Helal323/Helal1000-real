const fs = require("fs");

const quizList = [
  { question: "🇧🇩 বাংলাদেশের জাতীয় ফুল কী?", options: ["A  শাপলা", "B  গোলাপ", "C  কাঠগোলাপ", "D  জবা ফুল"], answer: "শাপলা" },
  { question: "🌸 বাংলাদেশের জাতীয় ফল কী?", options: ["A  কাঁঠাল", "B  আম", "C  লিচু", "D  কলা"], answer: "কাঁঠাল" },
  { question: "🐅 বাংলাদেশের জাতীয় পশু কী?", options: ["A  রয়েল বেঙ্গল টাইগার", "B  গরু", "C  ছাগল", "D  হাতি"], answer: "রয়েল বেঙ্গল টাইগার" },
  { question: "🕊️ বাংলাদেশের জাতীয় পাখি কী?", options: ["A  দোয়েল", "B  পায়রা", "C  কাক", "D  চড়ুই"], answer: "দোয়েল" },
  { question: "🏙️ বাংলাদেশের রাজধানী কোথায়?", options: ["A  ঢাকা", "B  চট্টগ্রাম", "C  খুলনা", "D  সিলেট"], answer: "ঢাকা" },
  { question: "📅 বাংলাদেশের স্বাধীনতা দিবস কবে?", options: ["A  ২৬ মার্চ", "B  ১৬ ডিসেম্বর", "C  ২১ ফেব্রুয়ারি", "D  ১ জানুয়ারি"], answer: "২৬ মার্চ" },
  { question: "🎖️ বাংলাদেশের বিজয় দিবস কবে?", options: ["A  ১৬ ডিসেম্বর", "B  ২৬ মার্চ", "C  ২১ ফেব্রুয়ারি", "D  ১৫ আগস্ট"], answer: "১৬ ডিসেম্বর" },
  { question: "🏞️ বাংলাদেশের সবচেয়ে বড় জেলা কোনটি?", options: ["A  রাঙ্গামাটি", "B  দিনাজপুর", "C  খুলনা", "D  বরিশাল"], answer: "রাঙ্গামাটি" },
  { question: "🌊 বাংলাদেশের সবচেয়ে বড় নদী কোনটি?", options: ["A  পদ্মা", "B  যমুনা", "C  মেঘনা", "D  তিস্তা"], answer: "পদ্মা" },
  { question: "⚽ বাংলাদেশের জাতীয় খেলা কী?", options: ["A  হাডুডু", "B  ক্রিকেট", "C  ফুটবল", "D  ভলিবল"], answer: "হাডুডু" }
];

const activeQuiz = {}; // store per-thread quiz

module.exports = {
  config: {
    name: "quiz",
    aliases: ["question", "exam"],
    version: "4.0",
    author: "Helal + GPT-5",
    countDown: 3,
    role: 0,
    category: "fun",
    shortDescription: { en: "বাংলা কুইজ খেলো আর উত্তর দাও!" }
  },

  onStart: async function ({ message, event }) {
    const random = quizList[Math.floor(Math.random() * quizList.length)];

    const quizText = [
      "🧠 কুইজ টাইম!",
      "",
      `${random.question}`,
      "",
      ...random.options,
      "",
      "👉 উত্তর দিতে এই মেসেজের রিপ্লাই করো।"
    ].join("\n");

    const sent = await message.reply({ body: quizText });

    // প্রতিটা থ্রেডের জন্য কুইজ সেভ করে রাখবে
    activeQuiz[sent.messageID] = {
      answer: random.answer,
      threadID: event.threadID
    };
  },

  onEvent: async function ({ message, event }) {
    if (!event.messageReply) return;
    const quiz = activeQuiz[event.messageReply.messageID];
    if (!quiz) return;

    const userAnswer = event.body.trim().toLowerCase();
    const correct = quiz.answer.toLowerCase();

    if (userAnswer.includes(correct)) {
      await message.reply("🎉 ✅ অভিনন্দন! তোমার উত্তর সঠিক!\n\n🌟 সঠিক উত্তর ➜ " + quiz.answer);
    } else {
      await message.reply("❌ ভুল উত্তর!\n\n📘 সঠিক উত্তর হলো ➜ ✨ " + quiz.answer + " ✨");
    }

    // উত্তর দেওয়ার পর কুইজ মুছে ফেলবে যাতে ডুপ্লিকেট না হয়
    delete activeQuiz[event.messageReply.messageID];
  }
};
