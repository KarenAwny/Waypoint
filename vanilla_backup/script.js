
const paths = {
  frontend: {
    title: "Frontend Development",
    arTitle: "تطوير واجهات المواقع",
    category: "DEVELOPMENT",
    symbol: "⌘",
    description: "Build the visual and interactive parts of websites. You will work with layouts, styling, browser behavior, accessibility, and user interactions.",
    arDescription: "هتتعلم تبني الجزء اللي المستخدم بيشوفه وبيتفاعل معاه في المواقع، من التصميم وتنسيق الصفحات لحد التفاعلات وإمكانية الوصول.",
    skills: ["HTML", "CSS", "JavaScript", "Git & GitHub", "Responsive Design"],
    arSkills: ["HTML", "CSS", "JavaScript", "Git وGitHub", "تصميم مناسب لكل الشاشات"],
    roadmap: ["Learn HTML structure and semantic elements", "Practice CSS layouts, Flexbox, and Grid", "Learn JavaScript fundamentals and DOM", "Build responsive projects", "Publish projects and create a portfolio"],
    arRoadmap: ["اتعلم أساسيات HTML وبناء الصفحات", "اتدرب على CSS وFlexbox وGrid", "اتعلم JavaScript والتعامل مع عناصر الصفحة", "نفّذ مشاريع مناسبة للموبايل والكمبيوتر", "انشر مشاريعك واعمل Portfolio"],
    project: "Build a responsive personal landing page with a working navigation menu.",
    arProject: "اعمل صفحة شخصية متجاوبة مع الموبايل والكمبيوتر وفيها قائمة تنقل شغالة."
  },
  backend: {
    title: "Backend Development",
    arTitle: "تطوير الأنظمة الخلفية",
    category: "DEVELOPMENT",
    symbol: "{ }",
    description: "Build the logic behind applications, handle data, create APIs, manage authentication, and learn how servers communicate with other systems.",
    arDescription: "هتتعلم تبني المنطق اللي بيشغّل التطبيقات، وتتعامل مع البيانات والـ APIs وتسجيل الدخول وطريقة تواصل السيرفرات.",
    skills: ["Programming", "HTTP & APIs", "Databases", "Authentication", "Git"],
    arSkills: ["البرمجة", "HTTP وAPIs", "قواعد البيانات", "تسجيل الدخول والصلاحيات", "Git"],
    roadmap: ["Choose one backend language", "Learn variables, functions, and OOP", "Understand HTTP and REST APIs", "Learn SQL and database basics", "Build and deploy a small API"],
    arRoadmap: ["اختار لغة برمجة مناسبة", "اتعلم المتغيرات والدوال وOOP", "افهم HTTP وREST APIs", "اتعلم SQL وأساسيات قواعد البيانات", "اعمل API صغيرة وانشرها"],
    project: "Build a task management API with create, update, delete, and list operations.",
    arProject: "اعمل API لإدارة المهام فيها إضافة وتعديل وحذف وعرض المهام."
  },
  data: {
    title: "Data Analysis",
    arTitle: "تحليل البيانات",
    category: "DATA & AI",
    symbol: "▥",
    description: "Use data to answer questions, spot trends, create reports, and help teams make evidence-based decisions.",
    arDescription: "هتستخدم البيانات عشان تجاوب عن الأسئلة، وتكتشف الأنماط، وتعمل تقارير تساعد الشركات تاخد قرارات مبنية على معلومات.",
    skills: ["Excel", "SQL", "Data Cleaning", "Power BI", "Basic Statistics"],
    arSkills: ["Excel", "SQL", "تنظيف البيانات", "Power BI", "أساسيات الإحصاء"],
    roadmap: ["Learn spreadsheet formulas and tables", "Practice cleaning and organizing data", "Learn SQL queries", "Build dashboards in Power BI", "Create a complete analysis project"],
    arRoadmap: ["اتعلم معادلات وجداول Excel", "اتدرب على تنظيف وتنظيم البيانات", "اتعلم استعلامات SQL", "اعمل Dashboards باستخدام Power BI", "نفّذ مشروع تحليل بيانات كامل"],
    project: "Analyze a sample sales dataset and create a dashboard showing revenue and product trends.",
    arProject: "حلل بيانات مبيعات تجريبية واعمل Dashboard توضح الإيرادات والمنتجات الأكثر مبيعًا."
  },
  cybersecurity: {
    title: "Cybersecurity",
    arTitle: "الأمن السيبراني",
    category: "SECURITY",
    symbol: "⌑",
    description: "Learn how digital systems are attacked and defended, understand networks and operating systems, and practice security in authorized lab environments.",
    arDescription: "هتتعلم الأنظمة بتتعرض للهجمات إزاي وبتتحمى إزاي، وتفهم الشبكات وأنظمة التشغيل، وتتدرب في بيئات آمنة ومصرح بيها.",
    skills: ["Networking", "Linux", "Security Fundamentals", "Log Analysis", "Ethical Practice"],
    arSkills: ["الشبكات", "Linux", "أساسيات الأمن", "تحليل السجلات", "التدريب الأخلاقي"],
    roadmap: ["Learn computer and networking fundamentals", "Practice Linux commands", "Understand common security concepts", "Use beginner-friendly security labs", "Document your findings and defensive steps"],
    arRoadmap: ["اتعلم أساسيات الكمبيوتر والشبكات", "اتدرب على أوامر Linux", "افهم مفاهيم الأمن السيبراني الأساسية", "استخدم معامل تدريب للمبتدئين", "وثّق اللي اكتشفته وطرق الحماية"],
    project: "Create a home-lab security checklist and analyze sample system logs in a legal practice environment.",
    arProject: "اعمل قائمة مراجعة لأمان جهازك وحلل سجلات تجريبية داخل بيئة تدريب آمنة."
  },
  uiux: {
    title: "UI/UX Design",
    arTitle: "تصميم تجربة وواجهة المستخدم",
    category: "DESIGN",
    symbol: "✳",
    description: "Research user needs, organize information, design interfaces, create prototypes, and test how easily people can complete tasks.",
    arDescription: "هتتعلم تفهم احتياجات المستخدمين، وتنظم المعلومات، وتصمم الواجهات، وتعمل نماذج تجريبية وتختبر سهولة الاستخدام.",
    skills: ["User Research", "Wireframes", "Figma", "Prototyping", "Usability Testing"],
    arSkills: ["أبحاث المستخدم", "Wireframes", "Figma", "النماذج التفاعلية", "اختبار سهولة الاستخدام"],
    roadmap: ["Learn UI and UX fundamentals", "Practice user research and personas", "Create wireframes", "Design screens and prototypes in Figma", "Test and improve a small product"],
    arRoadmap: ["اتعلم أساسيات UI وUX", "اتدرب على أبحاث المستخدم وتحديد احتياجاته", "اعمل Wireframes", "صمم شاشات ونماذج على Figma", "اختبر منتج صغير وحسّنه"],
    project: "Redesign a simple university app screen and create a clickable Figma prototype.",
    arProject: "أعد تصميم شاشة بسيطة لتطبيق جامعة واعمل نموذج تفاعلي على Figma."
  },
  mobile: {
    title: "Mobile Development",
    arTitle: "تطوير تطبيقات الموبايل",
    category: "DEVELOPMENT",
    symbol: "▣",
    description: "Build applications for phones and tablets, create interfaces, handle user input, connect APIs, and learn how mobile apps manage data.",
    arDescription: "هتتعلم تبني تطبيقات للموبايل والتابلت، وتصمم الواجهات، وتتعامل مع إدخال المستخدم، وتربط التطبيق بالـ APIs والبيانات.",
    skills: ["Dart", "Flutter", "Widgets", "Navigation", "APIs"],
    arSkills: ["Dart", "Flutter", "Widgets", "التنقل بين الشاشات", "APIs"],
    roadmap: ["Learn programming fundamentals and Dart", "Understand Flutter widgets and layouts", "Build navigation between screens", "Connect an app to an API", "Create and test a complete small app"],
    arRoadmap: ["اتعلم أساسيات البرمجة وDart", "افهم Widgets وLayouts في Flutter", "اعمل تنقل بين الشاشات", "اربط التطبيق بـ API", "نفّذ تطبيق صغير كامل واختبره"],
    project: "Build a simple habit tracker with multiple screens and saved tasks.",
    arProject: "اعمل تطبيق بسيط لمتابعة العادات فيه أكتر من شاشة وحفظ للمهام."
  }
};

const translations = {
  en: {
    pathsCount: "PATHS",
    question: "QUESTION",
    explore: "Explore this path",
    gotIt: "Got it",
    missingAnswer: "Choose an answer to continue.",
    quizFinished: "Your starting point",
    quizRestart: "Retake quiz",
    resultButton: "Explore this path",
    policy: {
      story: {
        title: "Our Story",
        body: "<p>Waypoint is a career exploration concept designed to help students and graduates navigate the many possibilities in technology.</p><p>Our goal is to make career discovery less overwhelming by presenting paths, foundational skills, and practical first steps in one place.</p><p>Waypoint offers starting guidance, not a guarantee of employment or a substitute for your own research and experience.</p>"
      },
      policies: {
        title: "Policies",
        body: "<p>This demo website runs locally in your browser. The career quiz uses your selections to calculate a suggested starting path. Your answers are not sent to a server by this code.</p><p>The career suggestions are educational guidance only. Learning requirements and job opportunities can vary by employer and location.</p><p>If the website is later connected to analytics, accounts, or external services, its privacy and data policies should be updated accordingly.</p>"
      },
      contact: {
        title: "Contact Us",
        body: "<p>Have a suggestion or want to help improve Waypoint? This is a front-end demo, so a real contact channel has not been connected yet.</p><p>You can add your official email address or a contact form here when you are ready to publish the website.</p>"
      },
      allergens: {
        title: "Allergens",
        body: "<p>Waypoint is a technology career exploration website, not a food or beverage service. Food allergen information does not apply to the services currently offered here.</p>"
      },
      locations: {
        title: "Our Locations",
        body: "<p>Waypoint is currently presented as an online career exploration platform. No physical locations have been added yet.</p>"
      },
      team: {
        title: "Join the Team",
        body: "<p>Interested in contributing to Waypoint? This demo does not have an active recruitment process yet.</p><p>Add your team email or a real application form here when recruitment opens.</p>"
      }
    }
  },
  ar: {
    pathsCount: "مجالات",
    question: "السؤال",
    explore: "اكتشف المجال",
    gotIt: "تمام",
    missingAnswer: "اختار إجابة عشان تقدر تكمل.",
    quizFinished: "دي نقطة البداية",
    quizRestart: "أعد الاختبار",
    resultButton: "اكتشف المجال",
    policy: {
      story: {
        title: "قصتنا",
        body: "<p>Waypoint فكرة لموقع استكشاف مهني، هدفه يساعد الطلبة والخريجين يفهموا الخيارات المختلفة في مجالات التكنولوجيا.</p><p>بنحاول نخلي اختيار المجال أقل حيرة عن طريق عرض المجالات والمهارات الأساسية وأول خطوات التعلم في مكان واحد.</p><p>الاقتراحات دي بداية للاستكشاف، مش ضمان لوظيفة أو بديل عن البحث والتجربة الشخصية.</p>"
      },
      policies: {
        title: "السياسات",
        body: "<p>الموقع التجريبي ده بيشتغل في المتصفح. اختبار المجال بيستخدم اختياراتك عشان يقترح مجال تبدأ تستكشفه، والكود الحالي مش بيبعت إجاباتك لسيرفر.</p><p>اقتراحات المجالات لأغراض التعلم والاستكشاف فقط، ومتطلبات الوظائف بتختلف حسب الشركة والمكان.</p><p>لو اتضافت خدمات خارجية أو حسابات أو أدوات تحليل للموقع بعد كده، لازم تتحدث سياسات الخصوصية والبيانات.</p>"
      },
      contact: {
        title: "تواصل معانا",
        body: "<p>عندك اقتراح أو حابب تساعدنا نحسّن Waypoint؟ الموقع حاليًا نسخة تجريبية للواجهة، ولسه مفيش وسيلة تواصل فعلية متوصلة بيه.</p><p>تقدر تضيف بريد إلكتروني رسمي أو نموذج تواصل لما تكون جاهز تنشر الموقع.</p>"
      },
      allergens: {
        title: "معلومات الحساسية",
        body: "<p>Waypoint موقع لاستكشاف مجالات التكنولوجيا، مش خدمة أكل أو مشروبات؛ لذلك معلومات مسببات الحساسية الغذائية مش بتنطبق على الخدمات الموجودة حاليًا.</p>"
      },
      locations: {
        title: "أماكننا",
        body: "<p>Waypoint حاليًا منصة إلكترونية لاستكشاف المجالات المهنية، ولسه مفيش فروع فعلية مضافة.</p>"
      },
      team: {
        title: "انضم للفريق",
        body: "<p>مهتم تساهم في Waypoint؟ النسخة التجريبية الحالية لسه مفيهاش نظام توظيف فعلي.</p><p>ممكن تضيف بريد الفريق أو نموذج تقديم حقيقي لما يبدأ استقبال الطلبات.</p>"
      }
    }
  }
};

const body = document.body;
const languageToggle = document.getElementById("languageToggle");
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
const filterButtons = document.querySelectorAll(".filter-chip");
const pathCards = document.querySelectorAll(".path-card");
const resultsCount = document.getElementById("resultsCount");
const noResults = document.getElementById("noResults");
const fieldDialog = document.getElementById("fieldDialog");
const policyDialog = document.getElementById("policyDialog");
const quizForm = document.getElementById("careerQuiz");
const quizQuestions = [...document.querySelectorAll(".quiz-question")];
const quizPanel = document.getElementById("quizPanel");
const quizResult = document.getElementById("quizResult");
const quizNext = document.getElementById("quizNext");
const quizBack = document.getElementById("quizBack");
const quizSubmit = document.getElementById("quizSubmit");
const quizError = document.getElementById("quizError");
const progressFill = document.getElementById("progressFill");
const progressPercent = document.getElementById("progressPercent");
const questionCounter = document.getElementById("questionCounter");

let currentLanguage = "en";
let currentQuestion = 0;
let recommendedPath = "frontend";

function isArabic() {
  return currentLanguage === "ar";
}

function updateLanguage(language) {
  currentLanguage = language;
  const arabic = language === "ar";

  body.lang = arabic ? "ar" : "en";
  body.dir = arabic ? "rtl" : "ltr";
  document.documentElement.lang = body.lang;
  document.documentElement.dir = body.dir;

  languageToggle.textContent = arabic ? "English" : "عربي";
  languageToggle.setAttribute(
    "aria-label",
    arabic ? "Switch to English" : "التبديل إلى العربية"
  );

  document.querySelectorAll("[data-en][data-ar]").forEach(element => {
    const value = element.dataset[arabic ? "ar" : "en"];
    if (value !== undefined) {
      element.innerHTML = value;
    }
  });

  document.querySelectorAll("[data-policy]").forEach(link => {
    const policyKey = link.dataset.policy;
    const defaultLabels = {
      story: ["Our Story", "قصتنا"],
      policies: ["Policies", "السياسات"],
      contact: ["Contact Us", "تواصل معانا"],
      allergens: ["Allergens", "معلومات الحساسية"],
      locations: ["Our Locations", "أماكننا"],
      team: ["Join the Team", "انضم للفريق"]
    };

    if (defaultLabels[policyKey]) {
      link.textContent = defaultLabels[policyKey][arabic ? 1 : 0];
    }
  });

  refreshResultsCount();
  updateQuizProgress();
  quizError.textContent = translations[currentLanguage].missingAnswer;

  if (!quizResult.hidden) {
    showQuizResult(recommendedPath);
  }

  if (fieldDialog.open) {
    const activePath = fieldDialog.dataset.activePath;
    if (activePath && paths[activePath]) {
      openPath(activePath);
    }
  }

  if (policyDialog.open) {
    const policyKey = policyDialog.dataset.policyKey;
    if (policyKey) {
      openPolicy(policyKey);
    }
  }
}

languageToggle.addEventListener("click", () => {
  updateLanguage(isArabic() ? "en" : "ar");
});

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? (isArabic() ? "إغلاق القائمة" : "Close navigation") : (isArabic() ? "فتح القائمة" : "Open navigation")
  );
});

mainNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

function refreshResultsCount() {
  const visibleCards = [...pathCards].filter(card => !card.hidden).length;
  resultsCount.textContent = `${String(visibleCards).padStart(2, "0")} ${translations[currentLanguage].pathsCount}`;
  noResults.hidden = visibleCards !== 0;
}

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(item => item.classList.remove("active"));
    button.classList.add("active");

    const selectedFilter = button.dataset.filter;

    pathCards.forEach(card => {
      card.hidden = selectedFilter !== "all" && card.dataset.category !== selectedFilter;
    });

    refreshResultsCount();
  });
});

function openPath(pathKey) {
  const path = paths[pathKey];
  if (!path) return;

  fieldDialog.dataset.activePath = pathKey;

  document.getElementById("fieldCategory").textContent = path.category;
  document.getElementById("fieldSymbol").textContent = path.symbol;
  document.getElementById("fieldTitle").textContent = isArabic() ? path.arTitle : path.title;
  document.getElementById("fieldDescription").textContent = isArabic() ? path.arDescription : path.description;
  document.getElementById("fieldSkills").replaceChildren();
  document.getElementById("fieldRoadmap").replaceChildren();
  document.getElementById("fieldProject").textContent = isArabic() ? path.arProject : path.project;

  const skills = isArabic() ? path.arSkills : path.skills;
  const roadmap = isArabic() ? path.arRoadmap : path.roadmap;

  skills.forEach(skill => {
    const item = document.createElement("li");
    item.textContent = skill;
    document.getElementById("fieldSkills").appendChild(item);
  });

  roadmap.forEach(step => {
    const item = document.createElement("li");
    item.textContent = step;
    document.getElementById("fieldRoadmap").appendChild(item);
  });

  if (!fieldDialog.open) {
    fieldDialog.showModal();
  }
}

document.querySelectorAll("[data-open-path]").forEach(button => {
  button.addEventListener("click", () => {
    openPath(button.dataset.openPath);
  });
});

document.querySelectorAll("[data-close-dialog]").forEach(button => {
  button.addEventListener("click", () => {
    const dialog = button.closest("dialog");
    if (dialog) dialog.close();
  });
});

[fieldDialog, policyDialog].forEach(dialog => {
  dialog.addEventListener("click", event => {
    if (event.target === dialog) {
      dialog.close();
    }
  });
});

function openPolicy(policyKey) {
  const policy = translations[currentLanguage].policy[policyKey];
  if (!policy) return;

  policyDialog.dataset.policyKey = policyKey;
  document.getElementById("policyTitle").textContent = policy.title;
  document.getElementById("policyBody").innerHTML = policy.body;

  if (!policyDialog.open) {
    policyDialog.showModal();
  }
}

document.querySelectorAll("[data-policy]").forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    openPolicy(link.dataset.policy);
  });
});

function updateQuizProgress() {
  const questionNumber = currentQuestion + 1;
  const percent = Math.round((questionNumber / quizQuestions.length) * 100);

  questionCounter.textContent =
    `${translations[currentLanguage].question} ${String(questionNumber).padStart(2, "0")} / ${String(quizQuestions.length).padStart(2, "0")}`;

  progressPercent.textContent = `${percent}%`;
  progressFill.style.width = `${percent}%`;

  quizBack.disabled = currentQuestion === 0;
  quizNext.hidden = currentQuestion === quizQuestions.length - 1;
  quizSubmit.hidden = currentQuestion !== quizQuestions.length - 1;
  quizError.hidden = true;
}

function showQuestion(index) {
  currentQuestion = Math.max(0, Math.min(index, quizQuestions.length - 1));

  quizQuestions.forEach((question, questionIndex) => {
    question.classList.toggle("active", questionIndex === currentQuestion);
  });

  updateQuizProgress();
}

function selectedAnswer(index) {
  const selected = quizForm.querySelector(`input[name="q${index}"]:checked`);
  return selected ? selected.value : null;
}

function validateCurrentAnswer() {
  if (selectedAnswer(currentQuestion)) {
    quizError.hidden = true;
    return true;
  }

  quizError.textContent = translations[currentLanguage].missingAnswer;
  quizError.hidden = false;
  return false;
}

quizNext.addEventListener("click", () => {
  if (!validateCurrentAnswer()) return;
  showQuestion(currentQuestion + 1);
});

quizBack.addEventListener("click", () => {
  showQuestion(currentQuestion - 1);
});

quizForm.addEventListener("change", event => {
  if (event.target.matches('input[type="radio"]')) {
    quizError.hidden = true;
  }
});

function calculateRecommendation() {
  const scores = {
    frontend: 0,
    backend: 0,
    data: 0,
    cybersecurity: 0,
    uiux: 0,
    mobile: 0
  };

  quizQuestions.forEach((question, index) => {
    const answer = selectedAnswer(index);
    if (answer && Object.prototype.hasOwnProperty.call(scores, answer)) {
      scores[answer] += 1;
    }
  });

  const order = Object.keys(scores);
  return order.reduce((best, key) => {
    return scores[key] > scores[best] ? key : best;
  }, order[0]);
}

function showQuizResult(pathKey) {
  const path = paths[pathKey];
  if (!path) return;

  recommendedPath = pathKey;

  quizPanel.hidden = true;
  quizResult.hidden = false;

  document.getElementById("resultSymbol").textContent = path.symbol;
  document.getElementById("resultTitle").textContent = isArabic() ? path.arTitle : path.title;
  document.getElementById("resultDescription").textContent = isArabic() ? path.arDescription : path.description;

  const resultSteps = document.getElementById("resultSteps");
  resultSteps.replaceChildren();

  const roadmap = isArabic() ? path.arRoadmap : path.roadmap;

  roadmap.slice(0, 3).forEach(step => {
    const item = document.createElement("li");
    item.textContent = step;
    resultSteps.appendChild(item);
  });

  document.getElementById("resultExplore").textContent =
    `${translations[currentLanguage].resultButton} ↗`;

  document.getElementById("quizRestart").textContent =
    translations[currentLanguage].quizRestart;
}

quizForm.addEventListener("submit", event => {
  event.preventDefault();

  for (let index = 0; index < quizQuestions.length; index++) {
    if (!selectedAnswer(index)) {
      showQuestion(index);
      quizError.textContent = translations[currentLanguage].missingAnswer;
      quizError.hidden = false;
      return;
    }
  }

  const recommendation = calculateRecommendation();
  showQuizResult(recommendation);
});

document.getElementById("resultExplore").addEventListener("click", () => {
  openPath(recommendedPath);
});

document.getElementById("quizRestart").addEventListener("click", () => {
  quizForm.reset();
  quizResult.hidden = true;
  quizPanel.hidden = false;
  showQuestion(0);
  document.getElementById("assessment").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});

showQuestion(0);
refreshResultsCount();
updateLanguage("en");