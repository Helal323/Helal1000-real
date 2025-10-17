const quizList = [
  // 🏠 বাংলাদেশ বিষয়ক
  { question: "🌸 বাংলাদেশের জাতীয় ফুল কী?", options: ["A  শাপলা", "B  গোলাপ", "C  জবা", "D  সূর্যমুখী"], correct: "A" },
  { question: "🏙️ বাংলাদেশের রাজধানী কোথায়?", options: ["A  ঢাকা", "B  চট্টগ্রাম", "C  খুলনা", "D  বরিশাল"], correct: "A" },
  { question: "🎵 বাংলাদেশের জাতীয় সংগীত কে রচনা করেছেন?", options: ["A  রবীন্দ্রনাথ ঠাকুর", "B  নজরুল ইসলাম", "C  জসীম উদ্দিন", "D  আল মাহমুদ"], correct: "A" },
  { question: "📅 বাংলাদেশের স্বাধীনতা দিবস কবে?", options: ["A  ২৬ মার্চ", "B  ১৬ ডিসেম্বর", "C  ২১ ফেব্রুয়ারি", "D  ১৫ আগস্ট"], correct: "A" },
  { question: "⚽ বাংলাদেশের জাতীয় খেলা কী?", options: ["A  হাডুডু", "B  ক্রিকেট", "C  ফুটবল", "D  ভলিবল"], correct: "A" },

  // 🌎 বিশ্ব সাধারণ জ্ঞান
  { question: "🌍 পৃথিবীর সবচেয়ে বড় দেশ কোনটি?", options: ["A  রাশিয়া", "B  কানাডা", "C  চীন", "D  যুক্তরাষ্ট্র"], correct: "A" },
  { question: "🌊 পৃথিবীর সবচেয়ে বড় মহাসাগর কোনটি?", options: ["A  প্রশান্ত", "B  আটলান্টিক", "C  ভারতীয়", "D  আর্কটিক"], correct: "A" },
  { question: "🗼 আইফেল টাওয়ার কোন দেশে?", options: ["A  ফ্রান্স", "B  ইতালি", "C  জাপান", "D  চীন"], correct: "A" },
  { question: "🪐 সৌরজগতের সবচেয়ে বড় গ্রহ কোনটি?", options: ["A  বৃহস্পতি", "B  শনি", "C  পৃথিবী", "D  মঙ্গল"], correct: "A" },
  { question: "🚀 মানুষ প্রথম চাঁদে যায় কবে?", options: ["A  ১৯৬৯", "B  ১৯৫০", "C  ১৯৭১", "D  ১৯৮০"], correct: "A" },
  { question: "🌎 পৃথিবীর সবচেয়ে ছোট মহাদেশ কোনটি?", options: ["A  অস্ট্রেলিয়া", "B  ইউরোপ", "C  আফ্রিকা", "D  এশিয়া"], correct: "A" },
  { question: "🕊️ জাতিসংঘের প্রতীক হিসেবে কোন পাখি ব্যবহৃত হয়?", options: ["A  পায়রা", "B  দোয়েল", "C  কাক", "D  ঈগল"], correct: "A" },

  // 💻 কম্পিউটার ও আইসিটি
  { question: "💻 কম্পিউটার কে আবিষ্কার করেন?", options: ["A  চার্লস ব্যাবেজ", "B  থমাস এডিসন", "C  নিউটন", "D  আইনস্টাইন"], correct: "A" },
  { question: "⌨️ কম্পিউটারে তথ্য প্রবেশ করানোর যন্ত্র কী?", options: ["A  কিবোর্ড", "B  মনিটর", "C  প্রিন্টার", "D  স্পিকার"], correct: "A" },
  { question: "🖥️ কম্পিউটারের মনিটর কোন যন্ত্র?", options: ["A  আউটপুট", "B  ইনপুট", "C  স্টোরেজ", "D  প্রসেসিং"], correct: "A" },
  { question: "📱 স্মার্টফোন কোন ধরনের কম্পিউটার?", options: ["A  মাইক্রো", "B  সুপার", "C  মিনি", "D  মেইনফ্রেম"], correct: "A" },
  { question: "🌐 ইন্টারনেটের পূর্ণরূপ কী?", options: ["A  Interconnected Network", "B  Internal Net", "C  International Network", "D  Internal Node"], correct: "A" },
  { question: "🧠 CPU এর পূর্ণরূপ কী?", options: ["A  Central Processing Unit", "B  Control Power Unit", "C  Central Power Unit", "D  Computer Processing Unit"], correct: "A" },
  { question: "🖱️ মাউস কোন ধরনের ডিভাইস?", options: ["A  ইনপুট", "B  আউটপুট", "C  স্টোরেজ", "D  ডিসপ্লে"], correct: "A" },
  { question: "🧮 কম্পিউটার সংখ্যার কোন পদ্ধতি ব্যবহার করে?", options: ["A  বাইনারি", "B  দশমিক", "C  হেক্সাডেসিমাল", "D  অক্টাল"], correct: "A" },
  { question: "🔒 ইন্টারনেট সুরক্ষার জন্য কী দরকার?", options: ["A  পাসওয়ার্ড", "B  গান", "C  ভিডিও", "D  গেম"], correct: "A" },
  { question: "📧 ইমেইলের পূর্ণরূপ কী?", options: ["A  Electronic Mail", "B  Easy Mail", "C  Element Mail", "D  Energy Mail"], correct: "A" },

  // ➗ গণিত
  { question: "➕ 12 + 8 = ?", options: ["A  20", "B  18", "C  21", "D  22"], correct: "A" },
  { question: "➖ 15 - 9 = ?", options: ["A  6", "B  9", "C  7", "D  8"], correct: "A" },
  { question: "✖️ 7 × 8 = ?", options: ["A  56", "B  48", "C  54", "D  60"], correct: "A" },
  { question: "➗ 36 ÷ 6 = ?", options: ["A  6", "B  5", "C  7", "D  4"], correct: "A" },
  { question: "🔢 5 এর বর্গ কত?", options: ["A  25", "B  10", "C  20", "D  15"], correct: "A" },
  { question: "📏 ১ মিটার = কত সেন্টিমিটার?", options: ["A  ১০০", "B  ১০", "C  ৫০", "D  ৬০"], correct: "A" },
  { question: "💰 ৫০ + ২৫ + ২৫ = ?", options: ["A  ১০০", "B  ৭৫", "C  ৯০", "D  ৮৫"], correct: "A" },
  { question: "🧮 9 × 9 = ?", options: ["A  81", "B  99", "C  72", "D  64"], correct: "A" },

  // 🧩 বিজ্ঞান ও আবিষ্কার
  { question: "⚡ বিদ্যুৎ কে আবিষ্কার করেন?", options: ["A  বেঞ্জামিন ফ্র্যাঙ্কলিন", "B  নিউটন", "C  এডিসন", "D  আইনস্টাইন"], correct: "A" },
  { question: "💡 বাতি কে আবিষ্কার করেন?", options: ["A  থমাস এডিসন", "B  নিউটন", "C  টেসলা", "D  গ্রাহাম বেল"], correct: "A" },
  { question: "📞 টেলিফোন কে আবিষ্কার করেন?", options: ["A  আলেকজান্ডার গ্রাহাম বেল", "B  এডিসন", "C  নিউটন", "D  আইনস্টাইন"], correct: "A" },
  { question: "✈️ বিমান কে আবিষ্কার করেন?", options: ["A  রাইট ভ্রাতৃদ্বয়", "B  টেসলা", "C  এডিসন", "D  গ্রাহাম বেল"], correct: "A" },
  { question: "🧲 চুম্বক কী ধরনের পদার্থ?", options: ["A  আকর্ষণকারী", "B  প্রতিক্রিয়াশীল", "C  স্বচ্ছ", "D  বায়বীয়"], correct: "A" },
  { question: "🌡️ তাপমাত্রা মাপার যন্ত্র কী?", options: ["A  থার্মোমিটার", "B  ব্যারোমিটার", "C  হাইগ্রোমিটার", "D  সিসমোগ্রাফ"], correct: "A" },

  // 🎓 অতিরিক্ত সাধারণ জ্ঞান
  { question: "📚 আমরা কোন ভাষায় কথা বলি?", options: ["A  বাংলা", "B  ইংরেজি", "C  হিন্দি", "D  উর্দু"], correct: "A" },
  { question: "🕰️ দিনে কয় ঘণ্টা থাকে?", options: ["A  ২৪", "B  ১২", "C  ১৮", "D  ২৫"], correct: "A" },
  { question: "🌞 সূর্য কোন গ্যাস দ্বারা তৈরি?", options: ["A  হাইড্রোজেন", "B  অক্সিজেন", "C  কার্বন", "D  নাইট্রোজেন"], correct: "A" },
  { question: "🐘 সবচেয়ে বড় স্থলজ প্রাণী কোনটি?", options: ["A  হাতি", "B  জিরাফ", "C  গরিলা", "D  ঘোড়া"], correct: "A" }
];

module.exports = {
  config: {
    name: "quiz",
    aliases: ["question", "exam"],
    version: "8.0",
    author: "Helal + GPT-5",
    countDown: 3,
    role: 0,
    category: "fun",
    shortDescription: { en: "বাংলা সাধারণ জ্ঞান, কম্পিউটার, বিজ্ঞান ও গণিত কুইজ" }
  },

  onStart: async function ({ message, event, commandName }) {
    const random = quizList[Math.floor(Math.random() * quizList.length)];
    const quizText = [
      "🧠 *কুইজ টাইম!*",
      "",
      `🇧🇩 প্রশ্ন: ${random.question}`,
      "",
      ...random.options,
      "",
      "👉 উত্তর দিতে এই মেসেজের রিপ্লাই করো (A, B, C বা D)."
    ].join("\n");

    const sent = await message.reply({ body: quizText });

    if (!global.GoatBot.onReply) global.GoatBot.onReply = new Map();
    global.GoatBot.onReply.set(sent.messageID, {
      commandName,
      messageID: sent.messageID,
      correctOption: random.correct,
      author: event.senderID,
      options: random.options
    });
  },

  onReply: async function ({ message, event, Reply }) {
    const userAns = event.body.trim().toUpperCase();
    const correct = Reply.correctOption.toUpperCase();

    if (!["A", "B", "C", "D"].includes(userAns)) {
      return message.reply("⚠️ Please reply with A, B, C or D only!");
    }

    const optionText = Reply.options.find(o => o.startsWith(correct));
    if (userAns === correct) {
      await message.reply(`✅ *Correct answer!* 🎉\n→ ${optionText.replace(correct, "").trim()}`);
    } else {
      await message.reply(`❌ *Wrong answer!* 😢\n✨ Right answer → ${optionText.replace(correct, "").trim()}`);
    }

    global.GoatBot.onReply.delete(Reply.messageID);
  }
};
