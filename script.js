const translations = {
  uz: {
    topline:"Tezkor va ishonchli xabarlar", search:"Yangiliklarni qidirish...", all:"Barchasi", uzbekistan:"O‘zbekiston", world:"Jahon", technology:"Texnologiya", business:"Iqtisodiyot", sport:"Sport", education:"Ta’lim",
    breaking:"SO‘NGGI XABAR", breakingText:"Xabar 24 yangiliklar portaliga xush kelibsiz.", adLabel:"REKLAMA", adPlaceholder:"Reklama joyi — AdSense kodi keyin qo‘shiladi", mainEyebrow:"KUNNING MUHIM XABARLARI", mainTitle:"Asosiy yangiliklar", live:"Yangilanib boradi",
    latestEyebrow:"DOIMIY YANGILANISH", latestTitle:"So‘nggi yangiliklar", popularEyebrow:"KO‘P O‘QILGAN", popularTitle:"Ommabop mavzular", adSide:"Sizning reklamangiz shu yerda",
    newsletterTitle:"Yangiliklardan xabardor bo‘ling", newsletterText:"Muhim xabarlarni o‘tkazib yubormang.", emailPlaceholder:"Email manzilingiz", subscribe:"Obuna bo‘lish", about:"Biz haqimizda", contact:"Aloqa", privacy:"Maxfiylik siyosati", footerDesc:"O‘zbekiston va dunyo yangiliklari bir joyda.", rights:"Barcha huquqlar himoyalangan.", empty:"Bu so‘rov bo‘yicha yangilik topilmadi.", demoNote:"Namuna maqola. Nashrdan oldin ma’lumotlarni ishonchli manbalar bilan tekshiring.", subscribed:"Rahmat! Obuna shakli demo rejimida ishlaydi.",
    categories:{uzbekistan:"O‘zbekiston",world:"Jahon",technology:"Texnologiya",business:"Iqtisodiyot",sport:"Sport",education:"Ta’lim"}
  },
  ru: {
    topline:"Быстрые и достоверные новости", search:"Поиск новостей...", all:"Все", uzbekistan:"Узбекистан", world:"Мир", technology:"Технологии", business:"Экономика", sport:"Спорт", education:"Образование",
    breaking:"ПОСЛЕДНИЕ НОВОСТИ", breakingText:"Добро пожаловать на новостной портал Xabar 24.", adLabel:"РЕКЛАМА", adPlaceholder:"Место для рекламы — код AdSense добавим позже", mainEyebrow:"ГЛАВНЫЕ СОБЫТИЯ ДНЯ", mainTitle:"Главные новости", live:"Обновляется",
    latestEyebrow:"ПОСТОЯННОЕ ОБНОВЛЕНИЕ", latestTitle:"Последние новости", popularEyebrow:"ЧИТАЕМОЕ", popularTitle:"Популярные темы", adSide:"Место для вашей рекламы",
    newsletterTitle:"Будьте в курсе новостей", newsletterText:"Не пропускайте важные события.", emailPlaceholder:"Ваш email", subscribe:"Подписаться", about:"О нас", contact:"Контакты", privacy:"Политика конфиденциальности", footerDesc:"Новости Узбекистана и мира в одном месте.", rights:"Все права защищены.", empty:"По вашему запросу ничего не найдено.", demoNote:"Демонстрационная статья. Перед публикацией проверьте информацию по надёжным источникам.", subscribed:"Спасибо! Форма подписки работает в демо-режиме.",
    categories:{uzbekistan:"Узбекистан",world:"Мир",technology:"Технологии",business:"Экономика",sport:"Спорт",education:"Образование"}
  },
  en: {
    topline:"Fast and reliable updates", search:"Search news...", all:"All", uzbekistan:"Uzbekistan", world:"World", technology:"Technology", business:"Business", sport:"Sport", education:"Education",
    breaking:"BREAKING", breakingText:"Welcome to the Xabar 24 news portal.", adLabel:"ADVERTISEMENT", adPlaceholder:"Ad space — AdSense code can be added later", mainEyebrow:"TOP STORIES", mainTitle:"Top stories", live:"Updates",
    latestEyebrow:"LATEST UPDATES", latestTitle:"Latest news", popularEyebrow:"MOST READ", popularTitle:"Popular topics", adSide:"Your advertisement here",
    newsletterTitle:"Stay informed", newsletterText:"Do not miss important updates.", emailPlaceholder:"Your email address", subscribe:"Subscribe", about:"About us", contact:"Contact", privacy:"Privacy policy", footerDesc:"Uzbekistan and world news in one place.", rights:"All rights reserved.", empty:"No stories found for this search.", demoNote:"Sample article. Verify information with reliable sources before publication.", subscribed:"Thank you! The subscription form is in demo mode.",
    categories:{uzbekistan:"Uzbekistan",world:"World",technology:"Technology",business:"Business",sport:"Sport",education:"Education"}
  }
};

const stories = [
 {id:1,cat:"technology",date:"2026-11-04",image:"https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1000",title:{uz:"Sun’iy intellekt kundalik hayotimizni qanday o‘zgartirmoqda?",ru:"Как искусственный интеллект меняет нашу повседневную жизнь?",en:"How is artificial intelligence changing everyday life?"},desc:{uz:"Yangi texnologiyalar ta’lim, aloqa va ish jarayonlarida yangi imkoniyatlar yaratmoqda.",ru:"Новые технологии открывают возможности в образовании, общении и работе.",en:"New technologies are creating opportunities in education, communication and work."},body:{uz:"Sun’iy intellekt vositalari matn tayyorlash, ma’lumotlarni tahlil qilish va kundalik vazifalarni rejalashtirishda yordam bermoqda. Mutaxassislar texnologiyadan mas’uliyat bilan foydalanish, ma’lumotlarni tekshirish va shaxsiy xavfsizlikka e’tibor berishni tavsiya qiladi.",ru:"Инструменты искусственного интеллекта помогают создавать тексты, анализировать данные и планировать повседневные задачи. Специалисты рекомендуют использовать технологии ответственно, проверять информацию и заботиться о безопасности данных.",en:"AI tools can help create text, analyze information and plan everyday tasks. Experts recommend responsible use, fact-checking and attention to data safety."}},
 {id:2,cat:"uzbekistan",date:"2026-11-04",image:"https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=900",title:{uz:"Shaharlar rivojida zamonaviy infratuzilmaning o‘rni",ru:"Роль современной инфраструктуры в развитии городов",en:"The role of modern infrastructure in city development"},desc:{uz:"Transport, yashil hududlar va qulay jamoat joylari shahar hayotining muhim qismidir.",ru:"Транспорт, зелёные зоны и общественные пространства важны для городской жизни.",en:"Transport, green spaces and public areas are important parts of urban life."},body:{uz:"Zamonaviy shaharsozlikda qulay transport, piyodalar uchun xavfsiz yo‘laklar va yashil hududlar muhim hisoblanadi. Bunday yechimlar aholining kundalik hayotini yaxshilashga xizmat qiladi.",ru:"В современном градостроительстве важны удобный транспорт, безопасные пешеходные дорожки и зелёные зоны. Такие решения помогают улучшить повседневную жизнь жителей.",en:"Modern urban planning focuses on accessible transport, safe pedestrian routes and green spaces. These solutions can improve residents’ everyday lives."}},
 {id:3,cat:"world",date:"2026-11-03",image:"https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=900",title:{uz:"Dunyoda ilm-fan va innovatsiyalarga qiziqish ortmoqda",ru:"В мире растёт интерес к науке и инновациям",en:"Interest in science and innovation is growing worldwide"},desc:{uz:"Tadqiqotlar va xalqaro hamkorlik yangi g‘oyalar rivojiga turtki bermoqda.",ru:"Исследования и международное сотрудничество способствуют развитию новых идей.",en:"Research and international cooperation are supporting new ideas."},body:{uz:"Ilmiy izlanishlar, universitetlar va xalqaro hamkorlik jamiyat taraqqiyotida muhim o‘rin tutadi. Innovatsion loyihalar yangi yechimlarni sinash va bilim almashish imkonini beradi.",ru:"Научные исследования, университеты и международное сотрудничество играют важную роль в развитии общества. Инновационные проекты позволяют проверять новые решения и обмениваться знаниями.",en:"Research, universities and international cooperation play an important role in social progress. Innovation projects allow people to test new solutions and share knowledge."}},
 {id:4,cat:"business",date:"2026-11-03",image:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900",title:{uz:"Raqamli iqtisodiyot kichik biznes uchun yangi imkoniyatlar ochmoqda",ru:"Цифровая экономика открывает новые возможности для малого бизнеса",en:"Digital economy creates new opportunities for small businesses"},desc:{uz:"Onlayn xizmatlar va raqamli to‘lovlar tadbirkorlik jarayonlarini soddalashtirishi mumkin.",ru:"Онлайн-сервисы и цифровые платежи могут упростить предпринимательство.",en:"Online services and digital payments can simplify business operations."},body:{uz:"Raqamli vositalar kichik biznesga mijozlar bilan tezroq aloqa qilish, buyurtmalarni boshqarish va xizmatlarni internet orqali taklif etish imkonini beradi. Har bir biznes o‘z ehtiyojiga mos yechimni tanlashi muhim.",ru:"Цифровые инструменты позволяют малому бизнесу быстрее общаться с клиентами, управлять заказами и предлагать услуги онлайн. Важно выбирать решения с учётом потребностей компании.",en:"Digital tools help small businesses communicate with customers, manage orders and offer services online. Businesses should choose solutions that fit their needs."}},
 {id:5,cat:"sport",date:"2026-11-02",image:"https://images.unsplash.com/photo-146 Sony",title:{uz:"Yoshlar sporti: muntazam mashg‘ulotning ahamiyati",ru:"Спорт молодёжи: значение регулярных тренировок",en:"Youth sports: the value of regular practice"},desc:{uz:"Sport jamoaviylik, intizom va sog‘lom odatlarni shakllantirishga yordam beradi.",ru:"Спорт помогает развивать командную работу, дисциплину и полезные привычки.",en:"Sports can help build teamwork, discipline and healthy habits."},body:{uz:"Sport bilan shug‘ullanish yoshlar uchun jamoada ishlash, maqsad qo‘yish va intizomni rivojlantirish imkonidir. Mashg‘ulotlar yosh va tayyorgarlik darajasiga mos, xavfsiz bo‘lishi kerak.",ru:"Занятия спортом помогают молодёжи учиться работать в команде, ставить цели и развивать дисциплину. Тренировки должны соответствовать возрасту и уровню подготовки.",en:"Taking part in sports gives young people a chance to develop teamwork, goal-setting and discipline. Activities should be safe and suited to age and ability."}},
 {id:6,cat:"education",date:"2026-11-02",image:"https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=900",title:{uz:"Mustaqil ta’lim: yangi ko‘nikmalarni o‘rganish yo‘llari",ru:"Самостоятельное обучение: как осваивать новые навыки",en:"Self-learning: ways to develop new skills"},desc:{uz:"Onlayn kurslar, amaliy mashqlar va muntazam reja o‘rganishni samaraliroq qiladi.",ru:"Онлайн-курсы, практика и регулярный план делают обучение эффективнее.",en:"Online courses, practice and a consistent plan can make learning more effective."},body:{uz:"Mustaqil ta’limda aniq maqsad belgilash, kichik bosqichlarga bo‘lish va o‘rgangan bilimni amalda qo‘llash foydali. Ishonchli manbalarni tanlash ham muhim.",ru:"В самостоятельном обучении полезно ставить чёткую цель, делить её на небольшие этапы и применять знания на практике. Важно выбирать надёжные источники.",en:"For self-learning, it helps to set a clear goal, divide it into small steps and apply what you learn. Choosing reliable sources is also important."}}
];
// Replace the sample sport image with a valid image URL.
stories[4].image = "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=900";

let currentLanguage = "uz";
let currentCategory = "all";
let searchTerm = "";

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

function tr(key) { return translations[currentLanguage][key] || key; }
function categoryName(cat) { return translations[currentLanguage].categories[cat] || cat; }

function applyLanguage() {
  document.documentElement.lang = currentLanguage;
  $$("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (tr(key)) el.textContent = tr(key);
  });
  $$("[data-i18n-placeholder]").forEach(el => el.placeholder = tr(el.dataset.i18nPlaceholder));
  renderAll();
}

function cardMarkup(story, featured = false) {
  const title = story.title[currentLanguage];
  const desc = story.desc[currentLanguage];
  const meta = new Date(story.date + "T12:00:00").toLocaleDateString(
    currentLanguage === "uz" ? "uz-UZ" : currentLanguage === "ru" ? "ru-RU" : "en-GB",
    {day:"numeric",month:"short",year:"numeric"}
  );
  if (featured) {
    return `<article class="feature-card" data-id="${story.id}">
      <img src="${story.image}" alt="" loading="lazy">
      <div class="feature-info"><span class="category-tag">${categoryName(story.cat)}</span>
      <h3>${title}</h3><p class="article-meta">${meta} · Xabar 24</p></div>
    </article>`;
  }
  return `<article class="news-card" data-id="${story.id}">
    <div class="news-image"><img src="${story.image}" alt="" loading="lazy"></div>
    <span class="category-tag">${categoryName(story.cat)}</span>
    <h3>${title}</h3><p>${desc}</p><p class="article-meta">${meta} · Xabar 24</p>
  </article>`;
}

function getFilteredStories() {
  return stories.filter(story => {
    const categoryMatch = currentCategory === "all" || story.cat === currentCategory;
    const text = `${story.title[currentLanguage]} ${story.desc[currentLanguage]}`.toLowerCase();
    return categoryMatch && text.includes(searchTerm);
  });
}

function renderAll() {
  const filtered = getFilteredStories();
  const featured = filtered.slice(0,3);
  $("#featuredGrid").innerHTML = featured.map(s => cardMarkup(s,true)).join("");
  $("#newsGrid").innerHTML = filtered.map(s => cardMarkup(s,false)).join("");
  $("#emptyState").hidden = filtered.length > 0;
  $("#resultCount").textContent = `${filtered.length} ${currentLanguage === "uz" ? "ta maqola" : currentLanguage === "ru" ? "статей" : "articles"}`;
  $("#popularList").innerHTML = stories.slice(0,4).map((s,i) =>
    `<div class="popular-item" data-id="${s.id}"><span class="popular-number">0${i+1}</span><strong>${s.title[currentLanguage]}</strong></div>`
  ).join("");
  $$(".feature-card,.news-card,.popular-item").forEach(el => {
    el.addEventListener("click", () => openArticle(Number(el.dataset.id)));
  });
}

function openArticle(id) {
  const story = stories.find(s => s.id === id);
  if (!story) return;
  $("#modalImage").src = story.image;
  $("#modalImage").alt = story.title[currentLanguage];
  $("#modalCategory").textContent = categoryName(story.cat);
  $("#modalTitle").textContent = story.title[currentLanguage];
  $("#modalMeta").textContent = `${story.date} · Xabar 24`;
  $("#modalBody").textContent = story.body[currentLanguage];
  $("#articleModal").classList.add("open");
  $("#articleModal").setAttribute("aria-hidden","false");
  document.body.style.overflow = "hidden";
}

function closeArticle() {
  $("#articleModal").classList.remove("open");
  $("#articleModal").setAttribute("aria-hidden","true");
  document.body.style.overflow = "";
}

$("#languageSelect").addEventListener("change", e => {
  currentLanguage = e.target.value;
  applyLanguage();
});
$("#searchInput").addEventListener("input", e => {
  searchTerm = e.target.value.trim().toLocaleLowerCase();
  renderAll();
});
$("#categoryNav").addEventListener("click", e => {
  const button = e.target.closest("[data-category]");
  if (!button) return;
  currentCategory = button.dataset.category;
  $$(".nav-link").forEach(b => b.classList.toggle("active", b === button));
  renderAll();
});
$("#menuToggle").addEventListener("click", () => $("#mainNav").classList.toggle("open"));
$("#modalClose").addEventListener("click", closeArticle);
$("#articleModal").addEventListener("click", e => { if (e.target.dataset.close) closeArticle(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeArticle(); });
$("#subscribeForm").addEventListener("submit", e => {
  e.preventDefault();
  $("#subscribeMessage").textContent = tr("subscribed");
  e.target.reset();
});

const now = new Date();
$("#todayDate").textContent = now.toLocaleDateString("uz-UZ",{weekday:"long",day:"numeric",month:"long",year:"numeric"});
$("#year").textContent = now.getFullYear();
applyLanguage();
