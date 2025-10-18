// mhriddle.js
// Pure Bangla Math Riddle Command
// Command: /mhriddle
// Author: Helal

const riddles = [
  {
    question: "তিনটি আপেল আছে। তুমি দুটি নিয়ে গেলে, তোমার কাছে কয়টা থাকবে?",
    options: ["A) 1", "B) 2", "C) 3", "D) 5"],
    answer: "B"
  },
  {
    question: "১০ + ১০ ÷ ১০ = ?",
    options: ["A) ১", "B) ১১", "C) ২০", "D) ২১"],
    answer: "D"
  },
  {
    question: "এক ডজনের অর্ধেক কত?",
    options: ["A) ১২", "B) ৬", "C) ৩", "D) ২৪"],
    answer: "B"
  },
  {
    question: "৫টি মেশিন ৫ মিনিটে ৫টি জিনিস বানায়, তাহলে ১০০টি মেশিন ১০০টি জিনিস বানাতে কত মিনিট লাগবে?",
    options: ["A) ৫ মিনিট", "B) ২০ মিনিট", "C) ১০০ মিনিট", "D) ৫০ মিনিট"],
    answer: "A"
  },
  {
    question: "একটি কেক ৬ টুকরো করতে কতবার কাটতে হবে?",
    options: ["A) ৫", "B) ৩", "C) ২", "D) ৪"],
    answer: "B"
  },
  {
    question: "২ + ২ × ২ = ?",
    options: ["A) ৮", "B) ৬", "C) ৪", "D) ১০"],
    answer: "B"
  },
  {
    question: "একটি বইয়ের দাম ১০০ টাকা, ১০% ডিসকাউন্ট দিলে দাম কত হবে?",
    options: ["A) ৯০", "B) ৯৫", "C) ৮৫", "D) ১০০"],
    answer: "A"
  },
  {
    question: "যদি ১=৩, ২=৩, ৩=৫, ৪=৪, ৫=৪ তবে ৬ কত হবে?",
    options: ["A) ৬", "B) ৩", "C) ৪", "D) ৫"],
    answer: "D"
  },
  {
    question: "একটি ট্রেন ঘণ্টায় ৬০ কিমি চলে, ৩০ মিনিটে কত কিমি যাবে?",
    options: ["A) ৩০", "B) ৬০", "C) ৯০", "D) ১২০"],
    answer: "A"
  },
  {
    question: "১০০০ - ৭ কত?",
    options: ["A) ৯৯৩", "B) ৯৯৫", "C) ৯৯০", "D) ৯৯৭"],
    answer: "D"
  },
  {
    question: "একটি মোরগ ছাদের উপরে ডিম পাড়ল। ডিম কোন দিকে গড়াবে?",
    options: ["A) ডান দিকে", "B) বাম দিকে", "C) পড়বে না", "D) নিচে"],
    answer: "C"
  },
  {
    question: "একজন বাবা ও তার ছেলে একটি গাড়ি দুর্ঘটনায় পড়ল। বাবাটি মারা গেল, কিন্তু ছেলেকে হাসপাতালে নিলে ডাক্তার বলল, 'এই আমার ছেলে!' — কীভাবে সম্ভব?",
    options: ["A) ডাক্তার তার মা", "B) যমজ", "C) আত্মীয়", "D) ভুল"],
    answer: "A"
  },
  {
    question: "একজন দোকানদার একটি জামা ১০০ টাকায় বিক্রি করে ২০% লাভ করে। ক্রয়মূল্য কত?",
    options: ["A) ৮০", "B) ৮৫", "C) ৭৫", "D) ৯০"],
    answer: "A"
  },
  {
    question: "একটি ঘড়িতে ৩টা বাজলে দুইটা কাঁটার মধ্যে কোণ কত?",
    options: ["A) ৯০°", "B) ৭৫°", "C) ৪৫°", "D) ৬০°"],
    answer: "D"
  },
  {
    question: "১০০ এর ২৫% কত?",
    options: ["A) ২৫", "B) ২০", "C) ৩০", "D) ১৫"],
    answer: "A"
  },
  {
    question: "যদি একটি কলসিতে ২ লিটার পানি থাকে এবং ১ লিটার ঢালা হয়, তাহলে কলসিতে কত পানি থাকবে?",
    options: ["A) ২", "B) ৩", "C) ১", "D) ৪"],
    answer: "B"
  },
  {
    question: "একজন কৃষক ১৭টি ছাগল রাখল, ৮টি মারা গেল। এখন কয়টি বেঁচে আছে?",
    options: ["A) ৮", "B) ৯", "C) ১০", "D) ৭"],
    answer: "B"
  },
  {
    question: "যদি ১০টি পাখির মধ্যে ২টি উড়ে যায়, বাকি থাকে কয়টি?",
    options: ["A) ৮", "B) ৯", "C) ১০", "D) ০"],
    answer: "D"
  },
  {
    question: "৩ + ৫ × (৮ - ৬) = ?",
    options: ["A) ১৬", "B) ১৩", "C) ২৩", "D) ২৬"],
    answer: "A"
  },
  {
    question: "যদি একটি কলমের দাম ৫ টাকা, তাহলে ১২টি কলমের দাম কত?",
    options: ["A) ৬০", "B) ৫০", "C) ৭০", "D) ৫৫"],
    answer: "A"
  },
  {
    question: "একজন মানুষ প্রতিদিন ৩টি কলা খায়। ৯ দিনে সে কয়টা কলা খাবে?",
    options: ["A) ২৭", "B) ৩০", "C) ২৪", "D) ১৮"],
    answer: "A"
  },
  {
    question: "যদি ২টি বিড়াল ২ মিনিটে ২টি ইঁদুর ধরে, তাহলে ১০টি বিড়াল ১০ মিনিটে কয়টা ধরবে?",
    options: ["A) ১০", "B) ৫০", "C) ২০", "D) ২৫"],
    answer: "B"
  },
  {
    question: "যদি ৪টি ছেলের কাছে ৮টি বল থাকে, তাহলে ১টি ছেলের কাছে কয়টি বল?",
    options: ["A) ২", "B) ৩", "C) ৪", "D) ৫"],
    answer: "A"
  },
  {
    question: "যদি ১০০ ভাগের ১ ভাগ ২ হয়, তাহলে পুরোটা কত?",
    options: ["A) ২০০", "B) ১০০", "C) ৫০", "D) ২০"],
    answer: "A"
  },
  {
    question: "যদি ২ + ৩ = ১০, ৮ + ৪ = ৯৬, তাহলে ৭ + ২ = ?",
    options: ["A) ৬৩", "B) ৭২", "C) ৯", "D) ১৪"],
    answer: "A"
  },
];

const sessions = new Map();

module.exports = {
  config: {
    name: "mhriddle",
    aliases: ["mathriddle", "mriddle"],
    version: "2.0",
    author: "Helal",
    countDown: 3,
    role: 0,
    category: "fun",
    shortDescription: { bn: "গণিত ভিত্তিক ধাঁধা প্রশ্নোত্তর" }
  },

  onStart: async function ({ message }) {
    const riddle = riddles[Math.floor(Math.random() * riddles.length)];
    const questionText = `🧮 *গণিত ধাঁধা সময়!*\n\n${riddle.question}\n\n${riddle.options.join("\n")}\n\n👉 উত্তর দিতে এই মেসেজে A/B/C/D রিপ্লাই করো।`;
    const sent = await message.reply(questionText);
    sessions.set(sent.messageID, { ...riddle });
  },

  onReply: async function ({ message, event }) {
    const session = sessions.get(event.messageReply?.mid || event.messageReply?.messageID);
    if (!session) return;

    const userAns = event.body.trim().toUpperCase();
    if (!["A", "B", "C", "D"].includes(userAns)) return;

    if (userAns === session.answer) {
      return message.reply("🎉 সঠিক উত্তর! 🧠 তুমি সত্যিই বুদ্ধিমান!");
    } else {
      return message.reply(`❌ ভুল উত্তর!\nসঠিক উত্তর হলো ➤ ${session.answer}`);
    }
  }
};