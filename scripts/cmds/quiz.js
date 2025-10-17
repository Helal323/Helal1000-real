const quizList = [
  // 🇧🇩 Bangladesh related
  {
    question: "🇧🇩 বাংলাদেশের জাতীয় ফুল কী?",
    options: ["A  শাপলা", "B  গোলাপ", "C  কাঠগোলাপ", "D  জবা ফুল"],
    answer: "শাপলা"
  },
  {
    question: "🇧🇩 বাংলাদেশের জাতীয় ফল কী?",
    options: ["A  কাঁঠাল", "B  আম", "C  লিচু", "D  কলা"],
    answer: "কাঁঠাল"
  },
  {
    question: "🇧🇩 বাংলাদেশের জাতীয় পাখি কী?",
    options: ["A  দোয়েল", "B  চড়ুই", "C  ময়না", "D  টিয়ে"],
    answer: "দোয়েল"
  },
  {
    question: "🇧🇩 বাংলাদেশের জাতীয় পশু কী?",
    options: ["A  রয়েল বেঙ্গল টাইগার", "B  গরু", "C  ছাগল", "D  হাতি"],
    answer: "রয়েল বেঙ্গল টাইগার"
  },
  {
    question: "🇧🇩 বাংলাদেশের জাতীয় কবি কে?",
    options: ["A  রবীন্দ্রনাথ ঠাকুর", "B  কাজী নজরুল ইসলাম", "C  জীবনানন্দ দাশ", "D  মাইকেল মধুসূদন দত্ত"],
    answer: "কাজী নজরুল ইসলাম"
  },
  {
    question: "🇧🇩 বাংলাদেশের জাতীয় সংগীতের নাম কী?",
    options: ["A  আমার সোনার বাংলা", "B  জন গণ মন", "C  ধনধান্যে পুষ্পে ভরা", "D  বাংলাদেশের মানচিত্র"],
    answer: "আমার সোনার বাংলা"
  },
  {
    question: "🏙️ বাংলাদেশের রাজধানী কোনটি?",
    options: ["A  ঢাকা", "B  চট্টগ্রাম", "C  খুলনা", "D  বরিশাল"],
    answer: "ঢাকা"
  },
  {
    question: "🗓️ বাংলাদেশের স্বাধীনতা দিবস কবে?",
    options: ["A  ২১ ফেব্রুয়ারি", "B  ২৬ মার্চ", "C  ১৬ ডিসেম্বর", "D  ১ জানুয়ারি"],
    answer: "২৬ মার্চ"
  },
  {
    question: "🌾 বাংলাদেশের জাতীয় বৃক্ষ কোনটি?",
    options: ["A  আমগাছ", "B  বটগাছ", "C  নারকেল গাছ", "D  তালগাছ"],
    answer: "আমগাছ"
  },

  // 🌍 General Knowledge
  {
    question: "🌎 পৃথিবীর সবচেয়ে বড় মহাদেশ কোনটি?",
    options: ["A  এশিয়া", "B  ইউরোপ", "C  আফ্রিকা", "D  অস্ট্রেলিয়া"],
    answer: "এশিয়া"
  },
  {
    question: "🌊 বিশ্বের দীর্ঘতম নদী কোনটি?",
    options: ["A  নীল নদ", "B  অ্যামাজন", "C  গঙ্গা", "D  ইয়াংজি"],
    answer: "নীল নদ"
  },
  {
    question: "🌋 কোন গ্রহকে ‘লাল গ্রহ’ বলা হয়?",
    options: ["A  মঙ্গল", "B  শুক্র", "C  পৃথিবী", "D  শনি"],
    answer: "মঙ্গল"
  },
  {
    question: "☀️ সূর্য কোন গ্যাস দ্বারা গঠিত?",
    options: ["A  হাইড্রোজেন ও হিলিয়াম", "B  অক্সিজেন ও নাইট্রোজেন", "C  কার্বন ও হাইড্রোজেন", "D  সালফার ও নাইট্রোজেন"],
    answer: "হাইড্রোজেন ও হিলিয়াম"
  },
  {
    question: "🐘 পৃথিবীর সবচেয়ে বড় স্থল প্রাণী কোনটি?",
    options: ["A  হাতি", "B  জলহস্তী", "C  গণ্ডার", "D  জিরাফ"],
    answer: "হাতি"
  },
  {
    question: "⏰ ১ ঘন্টায় কত মিনিট?",
    options: ["A  ৬০", "B  ৭০", "C  ৩০", "D  ১২০"],
    answer: "৬০"
  },
  {
    question: "🧠 মানুষের মস্তিষ্কের রঙ কী?",
    options: ["A  ধূসর", "B  সাদা", "C  নীল", "D  লাল"],
    answer: "ধূসর"
  },

  // 🎉 Fun / Tricky
  {
    question: "😂 বাংলাদেশের সবচেয়ে মিষ্টি জেলা কোনটি?",
    options: ["A  যশোর", "B  বগুড়া", "C  নাটোর", "D  ময়মনসিংহ"],
    answer: "নাটোর"
  },
  {
    question: "😋 পান্তা ভাত কোন উৎসবে খাওয়া হয়?",
    options: ["A  পহেলা বৈশাখ", "B  ঈদ", "C  দুর্গাপূজা", "D  বড়দিন"],
    answer: "পহেলা বৈশাখ"
  },
  {
    question: "🐔 কোন প্রাণী সকালে ডাক দেয়?",
    options: ["A  মুরগি", "B  মোরগ", "C  হাঁস", "D  পাখি"],
    answer: "মোরগ"
  },
  {
    question: "📱 ফেসবুকের প্রতিষ্ঠাতা কে?",
    options: ["A  মার্ক জাকারবার্গ", "B  ইলন মাস্ক", "C  বিল গেটস", "D  স্টিভ জবস"],
    answer: "মার্ক জাকারবার্গ"
  },
  {
    question: "💻 GPT তৈরি করেছে কে?",
    options: ["A  গুগল", "B  ওপেনএআই", "C  মেটা", "D  টুইটার"],
    answer: "ওপেনএআই"
  }
];

// 🧠 Store active quiz
const activeQuiz = new Map();

module.exports = {
  config: {
    name: "quiz",
    aliases: ["question", "exam"],
    version: "3.0",
    author: "Helal + GPT-5",
    countDown: 5,
    role: 0,
    category: "fun",
    shortDescription: { en: "Play random quizzes cleanly styled for Messenger" }
  },

  // /quiz trigger
  onStart: async function ({ message }) {
    const random = quizList[Math.floor(Math.random() * quizList.length)];

    const quizText = [
      `${random.question}`,
      "",
      ...random.options,
      "",
      "👉 উত্তর দিতে এই মেসেজের রিপ্লাই করো।"
    ].join("\n");

    const sent = await message.reply({ body: quizText });
    activeQuiz.set(sent.messageID, { ...random, askedBy: message.senderID });
  },

  // on reply
  onReply: async function ({ message, event }) {
    const quiz = activeQuiz.get(event.messageReply?.mid || event.messageReply?.message_id);
    if (!quiz) return;

    const userAnswer = event.body.trim().toLowerCase();
    const correct = quiz.answer.trim().toLowerCase();

    if (userAnswer.includes(correct)) {
      await message.reply(`🎉 ✅ অভিনন্দন! তোমার উত্তর সঠিক!\n\n🌟 সঠিক উত্তর ➜ ${quiz.answer}`);
    } else {
      await message.reply(`❌ ভুল উত্তর!\n\n📘 সঠিক উত্তর হলো ➜ ✨ ${quiz.answer} ✨`);
    }

    activeQuiz.delete(event.messageReply?.mid || event.messageReply?.message_id);
  }
};
