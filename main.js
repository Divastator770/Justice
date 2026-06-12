/* ============================================================
   JUSTICE — main.js
   ============================================================ */

/* ──────────────────────────────────────────────────────────
   TRANSLATIONS  (EN / UZ / RU)
   ────────────────────────────────────────────────────────── */
const TRANSLATIONS = {
  en: {
    /* NAV */
    nav_home:           "Home",
    nav_about:          "About",
    nav_collaborations: "Collaborations",
    nav_gallery:        "Gallery",
    nav_events:         "Events",
    nav_team:           "Team",
    nav_testimonials:   "Testimonials",
    nav_contact:        "Contact",
    nav_join:           "Join Justice",

    /* HERO */
    hero_eyebrow: "Est. 2024 · Youth Legal Excellence",
    hero_slogan:  '"Where Law Meets Leadership"',
    hero_sub:     "Empowering the next generation of legal minds, debate champions, and policy architects across the globe.",
    hero_cta:     "Join Justice →",
    hero_events:  "Explore Events",

    /* ABOUT */
    about_badge:   "Justice",
    about_title:   "Empowering Future Legal Leaders",
    about_desc:    "Justice is a youth-driven organization dedicated to bridging the gap between academic law and real-world leadership through debate, mentorship, and civic engagement.",

    /* MILESTONES */
    m0_title: "Foundation",
    m0_desc:  "Justice was founded by passionate law students with a singular mission: democratize legal education for youth.",
    m1_title: "First Tournament",
    m1_desc:  "Hosted our First Debate Tournament with 100+ participants from diverse institutions.",
    m2_title: "Ministry Partnership",
    m2_desc:  "Signed an official collaboration agreement with the Ministry of Justice.",
    m3_title: "Regional Expansion",
    m3_desc:  "Expanded to 6 new regions, launching regional debate leagues.",
    m4_title: "Youth Agency Recognition",
    m4_desc:  "Received the Youth Agency Leadership Award and partnered with Global Institutions.",
    m5_title: "1000+ Members",
    m5_desc:  "Crossed the 1000-active-member milestone — the premier youth legal organization in the region.",

    /* COLLABORATIONS */
    collab_badge: "Justice",
    collab_title: "Official Collaborations & Partnerships",
    collab_desc:  "Building a global network of institutions united by the mission of advancing youth legal education and civic leadership.",
    c0_name: "Youth Affairs Agency of the Republic of Uzbekistan",
    c0_type: "Government",
    c0_desc: "Official government partner supporting Justice's mission to empower youth through legal education, providing institutional recognition and backing for all our nationwide programs.",
    c1_name: "Ministry of Justice of the Republic of Uzbekistan",
    c1_type: "Government",
    c1_desc: "Key partnership enabling Justice to align its debate and legal education programs with national legal standards, co-organizing youth civic engagement initiatives across Uzbekistan.",
    c2_name: "Ministry of Preschool and School Education of the Republic of Uzbekistan",
    c2_type: "Education",
    c2_desc: "Collaboration that brings Justice's debate and legal literacy programs directly into schools, expanding access to legal education for young students across all regions.",
    c3_name: "Ministry of Higher Education, Science and Innovation of the Republic of Uzbekistan",
    c3_type: "Higher Education",
    c3_desc: "Partnership connecting Justice with universities and research institutions, facilitating student participation, academic mentorship, and innovation in legal education.",
    c4_name: "TSUL — Tashkent State University of Law",
    c4_type: "Academia",
    c4_desc: "Academic cornerstone of Justice's program, providing legal expertise, faculty mentors, venue support, and institutional credibility for tournaments and educational forums.",

    /* STATS */
    stat0_label: "Events Organized",
    stat1_label: "Students Reached",
    stat2_label: "Debates Conducted",
    stat3_label: "Partner Institutions",

    /* GALLERY */
    gallery_badge: "Justice",
    gallery_title: "Cinematic Gallery",
    gallery_desc:  "Fragments from past debates — moments of argument, tension, and triumph captured across forums and tournaments.",
    g0_title: "Fragments from the Floor", g0_date: "March 2025",       g0_desc: "A fragment from our flagship debate — arguments forged under pressure, positions defended with precision.",
    g1_title: "The Opening Round",        g1_date: "January 2024",     g1_desc: "A fragment from the opening round — where the first clash of ideas set the tone for everything that followed.",
    g2_title: "Motion on the Table",      g2_date: "November 2023",    g2_desc: "A fragment from past debates — the motion stands, the floor awaits, and every word carries weight.",
    g3_title: "The Rebuttal",             g3_date: "September 2023",   g3_desc: "A fragment from past debates — a rebuttal sharp enough to shift the room, delivered with quiet confidence.",
    g4_title: "Closing Arguments",        g4_date: "July 2023",        g4_desc: "A fragment from past debates — the closing statement that turned the tide in the final moments.",
    g5_title: "Point of Information",     g5_date: "May 2023",         g5_desc: "A fragment from past debates — a moment of interruption, of challenge, and of clarity under pressure.",
    g6_title: "The Deliberation",         g6_date: "April 2023",       g6_desc: "A fragment from past debates — judges weighing arguments, the room holding its breath before the verdict.",
    g7_title: "After the Verdict",        g7_date: "December 2023",    g7_desc: "A fragment from past debates — the moment after the gavel falls, where outcomes are accepted and lessons begin.",

    /* EVENTS */
    events_badge: "Justice",
    events_title: "Upcoming Forums & Tournaments",
    events_desc:  "Mark your calendar. These are the defining events shaping the next generation of legal leaders.",
    ev_seats:     "seats available",
    ev_register:  "Register Now",
    ev0_tag: "Tournament", ev0_title: "Coming soon...", ev0_loc: "National Convention Center, Hall A",
    ev0_desc: "The most prestigious competitive debate event of the year. Register your team of 3 and compete across 5 elimination rounds.",
    ev1_tag: "Forum",      ev1_title: "Coming soon...", ev1_loc: "Faculty of Law, Main Auditorium",
    ev1_desc: "A two-day international forum featuring keynote speakers from the International Court of Justice and leading law faculties.",
    ev2_tag: "MUN",        ev2_title: "Coming soon...", ev2_loc: "City Diplomatic Club",
    ev2_desc: "Model United Nations simulation focusing on International Humanitarian Law and Human Rights frameworks.",
    ev3_tag: "Workshop",   ev3_title: "Coming soon...", ev3_loc: "Justice Training Hub, Online & In-Person",
    ev3_desc: "An intensive full-day masterclass on brief writing, appellate advocacy, and legal argumentation techniques.",
    cd_days: "Days", cd_hrs: "Hrs", cd_min: "Min", cd_sec: "Sec",

    /* TEAM */
    team_badge: "Justice",
    team_title: "The Executive Council",
    team_desc:  "The minds and hearts steering Justice toward a future where every young person has access to legal knowledge and leadership.",
    t0_name: "Umar Rustamov",      t0_role: "Founder & President",     t0_dept: "Executive",    t0_bio: "Founder of Justice and representative in global market.",
    t1_name: "Xasan Miraliev",     t1_role: "Vice President",           t1_dept: "Executive",    t1_bio: "Oversees Justice's strategic operations and institutional development. Bridges the organization's internal teams with external partners, ensuring every initiative is executed with precision and long-term vision.",
    t2_name: "Bekhruz Fayzullaev", t2_role: "Director of Competitions", t2_dept: "Competitions", t2_bio: "Architects the competitive backbone of Justice — designing tournament formats, setting judging standards, and ensuring every event challenges participants to reach their highest potential.",

    /* TESTIMONIALS */
    test_badge: "Justice",
    test_title: "Voices of Justice",
    test_desc:  "Hear from the leaders, advocates, and scholars whose paths were shaped inside Justice.",
    q0: "Justice completely transformed how I think about law. The Pyramid Tournament taught me to argue with precision and empathy simultaneously.",
    q1: "The network you build through Justice is unparalleled. I've collaborated with exceptional peers across premium tournament architectures.",
    q2: "Winning the Moot Court Championship at Justice gave me the confidence I needed to pursue law school. The mentors here are world-class.",
    q3: "Justice members consistently arrive better prepared, more articulate, and more passionate about justice than any other program's graduates.",
    q4: "From my first forum to advising a parliamentary committee, Justice was the thread connecting every milestone.",
    q5: "Justice gave me the tools to turn my passion for justice into real advocacy. The training and global reach are unmatched.",

    /* CONTACT */
    contact_badge:   "Justice",
    contact_title:   "Join the Movement",
    contact_desc:    "Whether you're a student, mentor, institution, or advocate — there's a place for you inside Justice.",
    form_title:      "Send Us a Message",
    form_name:       "Full Name",
    form_name_ph:    "Your full name",
    form_email:      "Email Address",
    form_email_ph:   "your@email.com",
    form_org:        "Institution / Organization",
    form_org_ph:     "University or organization name",
    form_msg:        "Message",
    form_msg_ph:     "Tell us about yourself and why you'd like to join Justice...",
    form_submit:     "Submit Application →",
    contact_email_label:   "Email",
    contact_address_label: "Address",
    contact_address_value: "Uzbekistan, Tashkent",
    socials_label:   "Follow Justice",
    social_instagram: "Instagram",
    social_telegram:  "Telegram",
    social_twitter:   "Twitter / X",
    social_bot:       "Telegram Bot",

    /* FOOTER */
    footer_slogan: '"Where Law Meets Leadership"',
    footer_copy:   "© {year} Justice. All rights reserved. Crafted with excellence.",

    /* FORM VALIDATION */
    form_err_required: "⚠️ Please fill in your name, email, and message.",
    form_err_email:    "⚠️ Please enter a valid email address.",
    form_processing:   "Processing transmission... Please wait.",
    form_success:      "✓ Success! Your message has been sent directly to the Executive Council.",
    form_error:        "❌ Oops! Submission failed. Please reach out directly via miralievhasan347@gmail.com",
  },

  /* ──────────────── UZBEK ──────────────── */
  uz: {
    nav_home:           "Bosh sahifa",
    nav_about:          "Biz haqimizda",
    nav_collaborations: "Hamkorliklar",
    nav_gallery:        "Galereya",
    nav_events:         "Tadbirlar",
    nav_team:           "Jamoa",
    nav_testimonials:   "Fikrlar",
    nav_contact:        "Aloqa",
    nav_join:           "Justice'ga qo'shiling",

    hero_eyebrow: "Tashkil etilgan: 2024 · Yoshlar Huquqiy Ustunligi",
    hero_slogan:  `"Huquq va Yetakchilik Qo'shilgan Joy"`,
    hero_sub:     "Dunyo bo'ylab huquqiy fikrlash, munozara va siyosat me'morchiligini rivojlantiruvchi yangi avlodni kuchlamoqdamiz.",
    hero_cta:     "Justice'ga qo'shiling →",
    hero_events:  "Tadbirlarni ko'rish",

    about_badge:   "Justice",
    about_title:   "Kelajak Huquqiy Liderlarini Kuchlamoqdamiz",
    about_desc:    "Justice — munozara, murabbiylik va fuqarolik ishtirokchiligi orqali akademik huquq va real hayotdagi rahbarlik o'rtasidagi bo'shliqni to'ldirish uchun tashkil etilgan yoshlar tashkiloti.",

    m0_title: "Asos solindi",
    m0_desc:  "Justice yoshlarni huquqiy ta'limga jalb etish missiyasida qo'shimcha ishtiyoqli huquq talabalari tomonidan tashkil etildi.",
    m1_title: "Birinchi Turnir",
    m1_desc:  "Turli muassasalardan 100+ ishtirokchi bilan Birinchi Munozara Turniri o'tkazildi.",
    m2_title: "Vazirlik Hamkorligi",
    m2_desc:  "Adliya vazirligi bilan rasmiy hamkorlik shartnomasi imzolandi.",
    m3_title: "Mintaqaviy Kengayish",
    m3_desc:  "6 ta yangi mintaqaga kengayib, mintaqaviy munozara ligalari tashkil etildi.",
    m4_title: "Yoshlar Agentligi Mukofoti",
    m4_desc:  "Yoshlar Agentligi Yetakchilik mukofotiga sazovor bo'lindi va xalqaro institutlar bilan sheriklik tuzildi.",
    m5_title: "1000+ A'zo",
    m5_desc:  "1000 ta faol a'zo chegarasini oshib, mintaqaning yetakchi yoshlar huquqiy tashkilotiga aylandi.",

    collab_badge: "Justice",
    collab_title: "Rasmiy Hamkorliklar va Sherikliklar",
    collab_desc:  "Yoshlar huquqiy ta'limi va fuqarolik yetakchiligini rivojlantirish missiyasi bilan birlashgan muassasalarning global tarmog'ini quryapmiz.",
    c0_name: "O'zbekiston Respublikasi Yoshlar ishlari agentligi",
    c0_type: "Hukumat",
    c0_desc: "Justice'ning yoshlarni huquqiy ta'lim orqali kuchlaytirish missiyasini qo'llab-quvvatlovchi rasmiy hukumat hamkori, barcha milliy dasturlarga institutsional tan olish va qo'llab-quvvatlash ta'minlaydi.",
    c1_name: "O'zbekiston Respublikasi Adliya vazirligi",
    c1_type: "Hukumat",
    c1_desc: "Justice'ga munozara va huquqiy ta'lim dasturlarini milliy huquqiy standartlarga muvofiqlashtirish imkonini beruvchi asosiy hamkorlik; O'zbekiston bo'ylab yoshlar fuqarolik tadbirlarini birgalikda tashkil etadi.",
    c2_name: "O'zbekiston Respublikasi Maktabgacha va maktab ta'limi vazirligi",
    c2_type: "Ta'lim",
    c2_desc: "Justice'ning munozara va huquqiy savodxonlik dasturlarini bevosita maktablarga olib kirib, barcha mintaqalardagi yosh o'quvchilar uchun huquqiy ta'limga kirish imkoniyatini kengaytiruvchi hamkorlik.",
    c3_name: "O'zbekiston Respublikasi Oliy ta'lim, fan va innovatsiyalar vazirligi",
    c3_type: "Oliy Ta'lim",
    c3_desc: "Justice'ni universitetlar va ilmiy muassasalar bilan bog'laydigan, talabalar ishtirokini, akademik murabbiylikni va huquqiy ta'limdagi innovatsiyalarni qo'llab-quvvatlovchi sheriklik.",
    c4_name: "TDYU — Toshkent Davlat Yuridik Universiteti",
    c4_type: "Akademiya",
    c4_desc: "Justice dasturining akademik asosi bo'lib, turnirlar va ta'lim forumlari uchun huquqiy tajriba, professor-o'qituvchilar, joy ta'minoti va institutsional ishonchlilik yaratadi.",

    stat0_label: "Tashkil etilgan tadbirlar",
    stat1_label: "Qamrab olingan talabalar",
    stat2_label: "O'tkazilgan munozaralar",
    stat3_label: "Hamkor muassasalar",

    gallery_badge: "Justice",
    gallery_title: "Kinematik Galereya",
    gallery_desc:  "O'tgan munozaralardan lavhalar — forumlarda va turnirlardan qabul qilingan bahslar, keskinlik va g'alaba lahzalari.",
    g0_title: "Maydondan Lavhalar",      g0_date: "Mart 2025",       g0_desc: "Asosiy munozaramizdan bir lavha — bosim ostida shaklangan dalillar, aniqlik bilan himoya qilingan pozitsiyalar.",
    g1_title: "Ochilish Raundi",         g1_date: "Yanvar 2024",     g1_desc: "Ochilish raundidan bir lavha — g'oyalar birinchi to'qnashganda barcha narsalar uchun ohang belgilanganda.",
    g2_title: "Stolda Taklif",           g2_date: "Noyabr 2023",    g2_desc: "O'tgan munozaralardan bir lavha — taklif turadi, maydon kutadi va har bir so'z vazn ko'taradi.",
    g3_title: "Rad etish",               g3_date: "Sentabr 2023",    g3_desc: "O'tgan munozaralardan bir lavha — xonani larzaga keltirish uchun yetarlicha o'tkir rad, sokin ishonch bilan yetkazildi.",
    g4_title: "Yakuniy Dalillar",        g4_date: "Iyul 2023",      g4_desc: "O'tgan munozaralardan bir lavha — so'nggi daqiqalarda ko'zni oʻzgartirib yuborgan yakuniy bayonot.",
    g5_title: "Ma'lumot Nuqtasi",        g5_date: "May 2023",       g5_desc: "O'tgan munozaralardan bir lavha — uzilish, muammo va bosim ostida aniqlik lahzasi.",
    g6_title: "Maslahatlashish",         g6_date: "Aprel 2023",     g6_desc: "O'tgan munozaralardan bir lavha — hakamlar dalillarni tortadi, xona hukm oldidan nafasini ushlab turadi.",
    g7_title: "Hukm Chiqarilgandan So'ng", g7_date: "Dekabr 2023",  g7_desc: "O'tgan munozaralardan bir lavha — bolg'a tushgandan keyin, natijalar qabul qilingan va saboqlar boshlanadi.",

    events_badge: "Justice",
    events_title: "Kelgusi Forumlar va Turnirlar",
    events_desc:  "Taqvimingizni belgilang. Bular keyingi avlod huquqiy yetakchilarini shakllantiradigan muhim tadbirlar.",
    ev_seats:     "o'rin mavjud",
    ev_register:  "Ro'yxatdan o'tish",
    ev0_tag: "Turnir",   ev0_title: "Tez kunda...", ev0_loc: "Milliy Kongresslar Markazi, Zal A",
    ev0_desc: "Yilning eng nufuzli musobaqalashuv munozarasi. 3 kishilik jamoangizni ro'yxatdan o'tkazing va 5 ta chiqish raundida musobaqalashing.",
    ev1_tag: "Forum",    ev1_title: "Tez kunda...", ev1_loc: "Huquq Fakulteti, Asosiy Auditoriya",
    ev1_desc: "Xalqaro sud va yetakchi huquq fakultetlaridan taklif etilgan ma'ruzachilar ishtirokidagi ikki kunlik xalqaro forum.",
    ev2_tag: "BMT Modeli", ev2_title: "Tez kunda...", ev2_loc: "Shahar Diplomatik Klubi",
    ev2_desc: "Xalqaro Gumanitar Huquq va Inson Huquqlari tizimiga oid BMT Modeli simulyatsiyasi.",
    ev3_tag: "Seminar", ev3_title: "Tez kunda...", ev3_loc: "Justice O'quv Markazi, Onlayn va Jismonan",
    ev3_desc: "Qisqacha yozish, apellyatsiya tarafkashligi va huquqiy argumentatsiya texnikalariga oid bir kunlik intensiv masterclass.",
    cd_days: "Kun", cd_hrs: "Soat", cd_min: "Daq", cd_sec: "Son",

    team_badge: "Justice",
    team_title: "Ijroiya Kengash",
    team_desc:  "Justice'ni har bir yosh insonning huquqiy bilim va yetakchilikka ega bo'lishi mumkin bo'lgan kelajak sari yo'naltiruvchi aqllar va yuraklar.",
    t0_name: "Umar Rustamov",      t0_role: "Muassis va Prezident",         t0_dept: "Ijroiya",       t0_bio: "Justice muassisi va global bozordagi vakili.",
    t1_name: "Xasan Miraliev",     t1_role: "Vitse-Prezident",               t1_dept: "Ijroiya",       t1_bio: "Justice'ning strategik operatsiyalari va institutsional rivojlanishini boshqaradi. Tashkilot ichki jamoalari va tashqi hamkorlar o'rtasida ko'prik vazifasini bajarib, har bir tashabbus aniqlik va uzoq muddatli nuqtai nazar bilan amalga oshirilishini ta'minlaydi.",
    t2_name: "Bekhruz Fayzullaev", t2_role: "Musobaqalar bo'yicha direktor", t2_dept: "Musobaqalar",   t2_bio: "Justice'ning musobaqa asosini shakllantiradi — turnir formatlarini ishlab chiqadi, hakamlik standartlarini belgilaydi va har bir tadbir ishtirokchilarni eng yuqori salohiyatlariga erishishga undashini ta'minlaydi.",

    test_badge: "Justice",
    test_title: "Justice Ovozlari",
    test_desc:  "Justice ichida yo'li shakllantirilgan yetakchilar, himoyachilar va olimlarning so'zlarini eshiting.",
    q0: "Justice huquq haqida o'ylash usulimni butunlay o'zgartirdi. Piramida Turniri menga aniqlik va hamdardlik bilan bir vaqtda bahslashishni o'rgatdi.",
    q1: "Justice orqali quradigan tarmoq tengsiz. Men mukammal hamkasblar bilan premium turnir arxitekturalarida hamkorlik qildim.",
    q2: "Justice'da Moot Court Chempionatida g'alaba qozonish menga huquq maktabiga o'tish uchun kerakli ishonchni berdi. Bu yerdagi mentorlar jahon darajasida.",
    q3: "Justice a'zolari boshqa har qanday dastur bitiruvchilariga qaraganda doimo yaxshiroq tayyorlangan, aniqroq va adolatga ishtiyoqliroq keladi.",
    q4: "Birinchi forumimdan parlament qo'mitasiga maslahat berishgacha, Justice har bir muhim bosqichni bog'lagan ip edi.",
    q5: "Justice menga adolat ishtiyoqimni haqiqiy himoyaga aylantirish uchun vositalar berdi. Trening va global miqyos tengsiz.",

    contact_badge:   "Justice",
    contact_title:   "Harakatga Qo'shiling",
    contact_desc:    "Talaba, mentor, muassasa yoki himoyachi bo'lasizmi — Justice ichida siz uchun joy bor.",
    form_title:      "Bizga Xabar Yuboring",
    form_name:       "To'liq Ism",
    form_name_ph:    "To'liq ismingiz",
    form_email:      "Elektron Pochta",
    form_email_ph:   "email@manzil.com",
    form_org:        "Muassasa / Tashkilot",
    form_org_ph:     "Universitet yoki tashkilot nomi",
    form_msg:        "Xabar",
    form_msg_ph:     "O'zingiz va Justice'ga qo'shilishni xohlashingiz haqida yozing...",
    form_submit:     "Arizani Yuborish →",
    contact_email_label:   "Elektron pochta",
    contact_address_label: "Manzil",
    contact_address_value: "O'zbekiston, Toshkent",
    socials_label:   "Justice'ni Kuzatish",
    social_instagram: "Instagram",
    social_telegram:  "Telegram",
    social_twitter:   "Twitter / X",
    social_bot:       "Telegram Bot",

    footer_slogan: `"Huquq va Yetakchilik Qo'shilgan Joy"`,
    footer_copy:   "© {year} Justice. Barcha huquqlar himoyalangan. Mukammallik bilan yaratildi.",

    form_err_required: "⚠️ Iltimos, ismingizni, elektron pochtangizni va xabaringizni kiriting.",
    form_err_email:    "⚠️ Iltimos, to'g'ri elektron pochta manzilini kiriting.",
    form_processing:   "Yuborilmoqda... Iltimos, kuting.",
    form_success:      "✓ Muvaffaqiyat! Xabaringiz Ijroiya Kengashiga bevosita yuborildi.",
    form_error:        "❌ Xato! Yuborish muvaffaqiyatsiz tugadi. Iltimos, miralievhasan347@gmail.com orqali murojaat qiling.",
  },

  /* ──────────────── RUSSIAN ──────────────── */
  ru: {
    nav_home:           "Главная",
    nav_about:          "О нас",
    nav_collaborations: "Сотрудничество",
    nav_gallery:        "Галерея",
    nav_events:         "Мероприятия",
    nav_team:           "Команда",
    nav_testimonials:   "Отзывы",
    nav_contact:        "Контакты",
    nav_join:           "Вступить в Justice",

    hero_eyebrow: "Осн. в 2024 · Правовое превосходство молодёжи",
    hero_slogan:  '"Там, где Право встречает Лидерство"',
    hero_sub:     "Воспитываем следующее поколение правовых умов, чемпионов дебатов и архитекторов политики по всему миру.",
    hero_cta:     "Вступить в Justice →",
    hero_events:  "Смотреть мероприятия",

    about_badge:   "Justice",
    about_title:   "Воспитываем будущих правовых лидеров",
    about_desc:    "Justice — молодёжная организация, посвящённая преодолению разрыва между академическим правом и реальным лидерством посредством дебатов, наставничества и гражданской активности.",

    m0_title: "Основание",
    m0_desc:  "Justice была основана увлечёнными студентами-юристами с единственной миссией: демократизировать правовое образование для молодёжи.",
    m1_title: "Первый Турнир",
    m1_desc:  "Был проведён Первый Дебатный Турнир с участием более 100 участников из различных учреждений.",
    m2_title: "Партнёрство с Министерством",
    m2_desc:  "Подписано официальное соглашение о сотрудничестве с Министерством юстиции.",
    m3_title: "Региональное Расширение",
    m3_desc:  "Расширение на 6 новых регионов, запуск региональных лиг дебатов.",
    m4_title: "Признание Агентства по делам молодёжи",
    m4_desc:  "Получена Премия за лидерство Агентства по делам молодёжи, установлено партнёрство с международными институтами.",
    m5_title: "1000+ Участников",
    m5_desc:  "Преодолён рубеж в 1000 активных участников — ведущая молодёжная правовая организация в регионе.",

    collab_badge: "Justice",
    collab_title: "Официальное Сотрудничество и Партнёрства",
    collab_desc:  "Создаём глобальную сеть институтов, объединённых миссией развития молодёжного правового образования и гражданского лидерства.",
    c0_name: "Агентство по делам молодёжи Республики Узбекистан",
    c0_type: "Государственный орган",
    c0_desc: "Официальный государственный партнёр, поддерживающий миссию Justice по расширению прав молодёжи через правовое образование, обеспечивающий институциональное признание всех наших общенациональных программ.",
    c1_name: "Министерство юстиции Республики Узбекистан",
    c1_type: "Государственный орган",
    c1_desc: "Ключевое партнёрство, позволяющее Justice согласовывать дебатные и правовые программы с национальными стандартами, совместная организация инициатив гражданской активности молодёжи по всему Узбекистану.",
    c2_name: "Министерство дошкольного и школьного образования Республики Узбекистан",
    c2_type: "Образование",
    c2_desc: "Сотрудничество, которое внедряет дебатные и правовые просветительские программы Justice непосредственно в школы, расширяя доступ к правовому образованию для молодых учащихся во всех регионах.",
    c3_name: "Министерство высшего образования, науки и инноваций Республики Узбекистан",
    c3_type: "Высшее образование",
    c3_desc: "Партнёрство, связывающее Justice с университетами и исследовательскими институтами, содействующее участию студентов, академическому наставничеству и инновациям в правовом образовании.",
    c4_name: "ТГЮУ — Ташкентский государственный юридический университет",
    c4_type: "Академия",
    c4_desc: "Академический фундамент программы Justice, обеспечивающий правовую экспертизу, наставников из числа преподавателей, поддержку площадок и институциональный авторитет для турниров и образовательных форумов.",

    stat0_label: "Проведено мероприятий",
    stat1_label: "Охвачено студентов",
    stat2_label: "Проведено дебатов",
    stat3_label: "Партнёрских организаций",

    gallery_badge: "Justice",
    gallery_title: "Синематическая Галерея",
    gallery_desc:  "Фрагменты прошлых дебатов — моменты аргументов, напряжения и триумфа, запечатлённые на форумах и турнирах.",
    g0_title: "Фрагменты с Трибуны",      g0_date: "Март 2025",      g0_desc: "Фрагмент нашего флагманского дебата — аргументы, выкованные под давлением, позиции, защищённые с точностью.",
    g1_title: "Открывающий Раунд",         g1_date: "Январь 2024",    g1_desc: "Фрагмент открывающего раунда — первое столкновение идей, задавшее тон всему, что последовало.",
    g2_title: "Тезис на Столе",            g2_date: "Ноябрь 2023",    g2_desc: "Фрагмент прошлых дебатов — тезис стоит, трибуна ждёт, каждое слово несёт вес.",
    g3_title: "Опровержение",              g3_date: "Сентябрь 2023",  g3_desc: "Фрагмент прошлых дебатов — опровержение, достаточно острое, чтобы изменить настроение зала, произнесённое с тихой уверенностью.",
    g4_title: "Заключительные Аргументы",  g4_date: "Июль 2023",      g4_desc: "Фрагмент прошлых дебатов — заключительное заявление, переломившее ход событий в финальные моменты.",
    g5_title: "Запрос Информации",         g5_date: "Май 2023",       g5_desc: "Фрагмент прошлых дебатов — момент прерывания, вызова и ясности под давлением.",
    g6_title: "Совещание",                 g6_date: "Апрель 2023",    g6_desc: "Фрагмент прошлых дебатов — судьи взвешивают аргументы, зал затаил дыхание перед вердиктом.",
    g7_title: "После Вердикта",            g7_date: "Декабрь 2023",   g7_desc: "Фрагмент прошлых дебатов — момент после падения молотка, когда итоги принимаются и уроки начинаются.",

    events_badge: "Justice",
    events_title: "Предстоящие Форумы и Турниры",
    events_desc:  "Отметьте в календаре. Это ключевые мероприятия, формирующие следующее поколение правовых лидеров.",
    ev_seats:     "мест доступно",
    ev_register:  "Зарегистрироваться",
    ev0_tag: "Турнир",   ev0_title: "Скоро...", ev0_loc: "Национальный Конгресс-центр, Зал A",
    ev0_desc: "Самое престижное соревновательное дебатное мероприятие года. Зарегистрируйте команду из 3 человек и соревнуйтесь в 5 раундах на выбывание.",
    ev1_tag: "Форум",    ev1_title: "Скоро...", ev1_loc: "Юридический факультет, Главная аудитория",
    ev1_desc: "Двухдневный международный форум с ключевыми докладчиками из Международного суда справедливости и ведущих юридических факультетов.",
    ev2_tag: "МДН",      ev2_title: "Скоро...", ev2_loc: "Городской Дипломатический Клуб",
    ev2_desc: "Симуляция Модели ООН, посвящённая Международному гуманитарному праву и правозащитным механизмам.",
    ev3_tag: "Семинар",  ev3_title: "Скоро...", ev3_loc: "Учебный Центр Justice, Онлайн и Очно",
    ev3_desc: "Интенсивный однодневный мастер-класс по написанию брифов, апелляционному представительству и техникам правовой аргументации.",
    cd_days: "Дней", cd_hrs: "Часов", cd_min: "Мин", cd_sec: "Сек",

    team_badge: "Justice",
    team_title: "Исполнительный Совет",
    team_desc:  "Умы и сердца, направляющие Justice к будущему, в котором каждый молодой человек имеет доступ к правовым знаниям и лидерству.",
    t0_name: "Умар Рустамов",        t0_role: "Основатель и Президент",       t0_dept: "Исполнительный",  t0_bio: "Основатель Justice и представитель на глобальном рынке.",
    t1_name: "Хасан Миралиев",       t1_role: "Вице-президент",               t1_dept: "Исполнительный",  t1_bio: "Курирует стратегические операции и институциональное развитие Justice. Связывает внутренние команды организации с внешними партнёрами, обеспечивая реализацию каждой инициативы с точностью и долгосрочным видением.",
    t2_name: "Бехруз Файзуллаев",    t2_role: "Директор по соревнованиям",    t2_dept: "Соревнования",    t2_bio: "Формирует соревновательную основу Justice — разрабатывает форматы турниров, устанавливает стандарты судейства и следит за тем, чтобы каждое мероприятие побуждало участников раскрывать свой высший потенциал.",

    test_badge: "Justice",
    test_title: "Голоса Justice",
    test_desc:  "Услышьте лидеров, защитников и учёных, чей путь был сформирован внутри Justice.",
    q0: "Justice полностью изменил то, как я думаю о праве. Турнир «Пирамида» научил меня спорить с точностью и эмпатией одновременно.",
    q1: "Сеть, которую вы строите через Justice, непревзойдённа. Я сотрудничал с исключительными коллегами на турнирах высшего уровня.",
    q2: "Победа в Чемпионате по имитации судебного процесса в Justice дала мне уверенность, необходимую для поступления в юридическую школу. Наставники здесь — мирового класса.",
    q3: "Участники Justice неизменно приходят лучше подготовленными, более красноречивыми и более страстными, чем выпускники любой другой программы.",
    q4: "От моего первого форума до консультирования парламентского комитета — Justice был нитью, связывающей каждую веху.",
    q5: "Justice дал мне инструменты, чтобы превратить мою страсть к справедливости в реальную защиту. Обучение и глобальный охват несравнимы.",

    contact_badge:   "Justice",
    contact_title:   "Присоединяйтесь к Движению",
    contact_desc:    "Студент, наставник, институт или защитник — в Justice есть место для вас.",
    form_title:      "Отправьте Нам Сообщение",
    form_name:       "Полное Имя",
    form_name_ph:    "Ваше полное имя",
    form_email:      "Электронная почта",
    form_email_ph:   "ваш@email.com",
    form_org:        "Учреждение / Организация",
    form_org_ph:     "Название университета или организации",
    form_msg:        "Сообщение",
    form_msg_ph:     "Расскажите о себе и почему хотите вступить в Justice...",
    form_submit:     "Отправить Заявку →",
    contact_email_label:   "Эл. почта",
    contact_address_label: "Адрес",
    contact_address_value: "Узбекистан, Ташкент",
    socials_label:   "Следите за Justice",
    social_instagram: "Instagram",
    social_telegram:  "Telegram",
    social_twitter:   "Twitter / X",
    social_bot:       "Telegram-бот",

    footer_slogan: '"Там, где Право встречает Лидерство"',
    footer_copy:   "© {year} Justice. Все права защищены. Создано с превосходством.",

    form_err_required: "⚠️ Пожалуйста, заполните имя, электронную почту и сообщение.",
    form_err_email:    "⚠️ Пожалуйста, введите корректный адрес электронной почты.",
    form_processing:   "Отправка... Пожалуйста, подождите.",
    form_success:      "✓ Успешно! Ваше сообщение было отправлено непосредственно Исполнительному Совету.",
    form_error:        "❌ Ошибка! Не удалось отправить. Пожалуйста, свяжитесь напрямую через miralievhasan347@gmail.com",
  },
};

/* ──────────────────────────────────────────────────────────
   ACTIVE LANGUAGE STATE
   ────────────────────────────────────────────────────────── */
let currentLang = "en";

function t(key) {
  return TRANSLATIONS[currentLang][key] || TRANSLATIONS["en"][key] || key;
}

function switchLang(lang) {
  currentLang = lang;
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
  applyTranslations();
}

/* apply all [data-i18n] bindings */
function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (key) el.textContent = t(key);
  });
  document.querySelectorAll("[data-i18n-ph]").forEach(el => {
    el.placeholder = t(el.dataset.i18nPh);
  });
  /* footer year */
  const yearEl = document.getElementById("footer-year");
  if (yearEl) {
    const copy = t("footer_copy").replace("{year}", new Date().getFullYear());
    document.querySelector("[data-i18n='footer_copy']").textContent = copy;
  }
  /* re-render dynamic sections that build their own HTML */
  renderTimeline();
  renderCollaborations();
  renderGallery();
  renderEvents();
  renderTeam();
  renderTestimonials();
  initScrollAnimations();
}

/* ══════════════════════════════════════════════════════════
   NAVIGATION
   ══════════════════════════════════════════════════════════ */
function jilScroll(sectionId) {
  const target = document.getElementById(sectionId);
  if (!target) return;
  const navbar  = document.getElementById("navbar");
  const navHeight = navbar ? navbar.offsetHeight : 80;
  const top = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
  window.scrollTo({ top, behavior: "smooth" });
  closeMobileMenu();
}

/* ══════════════════════════════════════════════════════════
   MOBILE MENU
   ══════════════════════════════════════════════════════════ */
function toggleMobileMenu() {
  document.getElementById("mobile-menu")?.classList.toggle("open");
  document.getElementById("hamburger")?.classList.toggle("open");
}
function closeMobileMenu() {
  document.getElementById("mobile-menu")?.classList.remove("open");
  document.getElementById("hamburger")?.classList.remove("open");
}

/* ══════════════════════════════════════════════════════════
   NAVBAR scroll glass
   ══════════════════════════════════════════════════════════ */
function initNavbar() {
  const nav = document.getElementById("navbar");
  if (!nav) return;
  const update = () => nav.classList.toggle("scrolled", window.scrollY > 60);
  window.addEventListener("scroll", update, { passive: true });
  update();
}

/* ══════════════════════════════════════════════════════════
   SOCIAL BUTTONS
   ══════════════════════════════════════════════════════════ */
function openSocial(url) {
  window.open(url, "_blank", "noopener");
}

/* ══════════════════════════════════════════════════════════
   CONTACT FORM
   ══════════════════════════════════════════════════════════ */
function submitForm() {
  const name  = document.getElementById("form-name").value.trim();
  const email = document.getElementById("form-email").value.trim();
  const org   = document.getElementById("form-org").value.trim();
  const msg   = document.getElementById("form-msg").value.trim();
  const fb    = document.getElementById("form-feedback");

  if (!name || !email || !msg) {
    fb.textContent = t("form_err_required");
    fb.className   = "form-feedback error";
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    fb.textContent = t("form_err_email");
    fb.className   = "form-feedback error";
    return;
  }

  fb.style.color = "#C48A4A";
  fb.textContent = t("form_processing");
  fb.className   = "form-feedback";
  fb.style.display = "block";

  fetch("https://formspree.io/f/xwvzzzpj", {
    method: "POST",
    headers: { "Content-Type": "application/json", "Accept": "application/json" },
    body: JSON.stringify({ name, email, organization: org || "Not Provided", message: msg }),
  })
  .then(r => {
    if (r.ok) {
      fb.style.color = "#85E3B3";
      fb.textContent = t("form_success");
      fb.className   = "form-feedback success";
      document.getElementById("contact-form").reset();
    } else throw new Error("Server error");
  })
  .catch(() => {
    fb.style.color = "#FF6B6B";
    fb.textContent = t("form_error");
    fb.className   = "form-feedback error";
  });
}

/* ══════════════════════════════════════════════════════════
   RENDER — TIMELINE
   ══════════════════════════════════════════════════════════ */
function renderTimeline() {
  const container = document.getElementById("timeline-items");
  if (!container) return;
  const milestones = [
    { year:"2024", titleKey:"m0_title", descKey:"m0_desc" },
    { year:"2025", titleKey:"m1_title", descKey:"m1_desc" },
    { year:"2025", titleKey:"m2_title", descKey:"m2_desc" },
    { year:"2025", titleKey:"m3_title", descKey:"m3_desc" },
    { year:"2026", titleKey:"m4_title", descKey:"m4_desc" },
    { year:"2026", titleKey:"m5_title", descKey:"m5_desc" },
  ];
  container.innerHTML = milestones.map((m, i) => {
    const side = i % 2 === 0 ? "left" : "right";
    return `
      <div class="timeline-item ${side}">
        <div class="timeline-card">
          <div class="timeline-dot">${m.year.slice(2)}</div>
          <div class="timeline-year">${m.year}</div>
          <h3 class="timeline-title">${t(m.titleKey)}</h3>
          <p class="timeline-desc">${t(m.descKey)}</p>
        </div>
      </div>`;
  }).join("");
}

/* ══════════════════════════════════════════════════════════
   RENDER — COLLABORATIONS + STATS
   ══════════════════════════════════════════════════════════ */
function renderCollaborations() {
  const collabs = [
    { icon:"⚖️", typeKey:"c0_type", nameKey:"c0_name", descKey:"c0_desc" },
    { icon:"🏛️", typeKey:"c1_type", nameKey:"c1_name", descKey:"c1_desc" },
    { icon:"🎓", typeKey:"c2_type", nameKey:"c2_name", descKey:"c2_desc" },
    { icon:"🔬", typeKey:"c3_type", nameKey:"c3_name", descKey:"c3_desc" },
    { icon:"📚", typeKey:"c4_type", nameKey:"c4_name", descKey:"c4_desc" },
  ];
  const grid = document.getElementById("collab-grid");
  if (grid) {
    grid.innerHTML = collabs.map(c => `
      <div class="collab-card">
        <div class="collab-icon">${c.icon}</div>
        <div class="collab-type">${t(c.typeKey)}</div>
        <h3 class="collab-name">${t(c.nameKey)}</h3>
        <p class="collab-desc">${t(c.descKey)}</p>
      </div>`).join("");
  }

  const stats = [
    { value:15,   suffix:"+", labelKey:"stat0_label" },
    { value:1000, suffix:"+", labelKey:"stat1_label" },
    { value:8,    suffix:"+", labelKey:"stat2_label" },
    { value:2,    suffix:"",  labelKey:"stat3_label" },
  ];
  const statsEl = document.getElementById("stats-grid");
  if (statsEl) {
    statsEl.innerHTML = stats.map(s => `
      <div class="stat-card" data-target="${s.value}" data-suffix="${s.suffix}">
        <div class="stat-value">0</div>
        <div class="stat-label">${t(s.labelKey)}</div>
      </div>`).join("");
  }
}

/* ══════════════════════════════════════════════════════════
   RENDER — GALLERY
   ══════════════════════════════════════════════════════════ */
const galleryMeta = [
  { titleKey:"g0_title", dateKey:"g0_date", descKey:"g0_desc", src:"images/img1.png", large:true  },
  { titleKey:"g1_title", dateKey:"g1_date", descKey:"g1_desc", src:"images/img2.png", large:false },
  { titleKey:"g2_title", dateKey:"g2_date", descKey:"g2_desc", src:"images/img3.png", large:false },
  { titleKey:"g3_title", dateKey:"g3_date", descKey:"g3_desc", src:"images/img4.png", large:false },
  { titleKey:"g4_title", dateKey:"g4_date", descKey:"g4_desc", src:"images/img5.png", large:false },
  { titleKey:"g5_title", dateKey:"g5_date", descKey:"g5_desc", src:"images/img6.png", large:false },
  { titleKey:"g6_title", dateKey:"g6_date", descKey:"g6_desc", src:"images/img7.png", large:true  },
  { titleKey:"g7_title", dateKey:"g7_date", descKey:"g7_desc", src:"images/img8.png", large:false },
];

function renderGallery() {
  const grid = document.getElementById("gallery-grid");
  if (!grid) return;
  grid.innerHTML = galleryMeta.map((item, i) => `
    <div class="gallery-item${item.large ? " large" : ""}" data-index="${i}">
      <img src="${item.src}" alt="${t(item.titleKey)}" loading="lazy"
           onerror="this.src='https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80'">
      <div class="gallery-overlay">
        <div>
          <div class="gallery-date">${t(item.dateKey)}</div>
          <div class="gallery-title">${t(item.titleKey)}</div>
        </div>
      </div>
    </div>`).join("");

  grid.querySelectorAll(".gallery-item").forEach(el => {
    el.addEventListener("click", () => openLightbox(+el.dataset.index));
  });
}

/* ══════════════════════════════════════════════════════════
   LIGHTBOX
   ══════════════════════════════════════════════════════════ */
function openLightbox(index) {
  const item = galleryMeta[index];
  if (!item) return;
  const lbImg = document.getElementById("lightbox-img");
  lbImg.src = item.src;
  lbImg.onerror = () => { lbImg.src = 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&q=80'; };
  document.getElementById("lightbox-date").textContent  = t(item.dateKey);
  document.getElementById("lightbox-title").textContent = t(item.titleKey);
  document.getElementById("lightbox-desc").textContent  = t(item.descKey);
  document.getElementById("lightbox").classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeLightbox() {
  document.getElementById("lightbox").classList.remove("open");
  document.body.style.overflow = "";
}
document.addEventListener("keydown", e => { if (e.key === "Escape") closeLightbox(); });

/* ══════════════════════════════════════════════════════════
   RENDER — EVENTS + COUNTDOWNS
   ══════════════════════════════════════════════════════════ */
const eventsMeta = [
  { id:1, tagKey:"ev0_tag", titleKey:"ev0_title", date:"2026-08-18T09:00:00", locKey:"ev0_loc", descKey:"ev0_desc", seats:240 },
  { id:2, tagKey:"ev1_tag", titleKey:"ev1_title", date:"2026-09-05T10:00:00", locKey:"ev1_loc", descKey:"ev1_desc", seats:500 },
  { id:3, tagKey:"ev2_tag", titleKey:"ev2_title", date:"2026-10-12T08:30:00", locKey:"ev2_loc", descKey:"ev2_desc", seats:180 },
  { id:4, tagKey:"ev3_tag", titleKey:"ev3_title", date:"2026-11-20T14:00:00", locKey:"ev3_loc", descKey:"ev3_desc", seats:80  },
];
const tagColors = { ev0_tag:"#C48A4A", ev1_tag:"#8B6914", ev2_tag:"#A07830", ev3_tag:"#6B4F25" };

function renderEvents() {
  const grid = document.getElementById("events-grid");
  if (!grid) return;
  grid.innerHTML = eventsMeta.map(ev => {
    const d     = new Date(ev.date);
    const day   = d.getDate();
    const month = d.toLocaleString("default", { month:"short" }).toUpperCase() + " " + d.getFullYear();
    const color = tagColors[ev.tagKey] || "#C48A4A";
    return `
      <div class="event-card">
        <div class="event-header">
          <div>
            <span class="event-type-badge" style="background:${color}">${t(ev.tagKey)}</span>
            <h3 class="event-title">${t(ev.titleKey)}</h3>
          </div>
          <div class="event-date-box">
            <div class="event-day">${day}</div>
            <div class="event-month">${month}</div>
          </div>
        </div>
        <div class="event-body">
          <div class="event-loc">📍 ${t(ev.locKey)}</div>
          <p class="event-desc">${t(ev.descKey)}</p>
          <div class="event-seats">🎫 ${ev.seats} ${t("ev_seats")}</div>
          <div class="countdown">
            <div class="countdown-unit"><div class="countdown-num" id="cd-d-${ev.id}">00</div><div class="countdown-label">${t("cd_days")}</div></div>
            <div class="countdown-unit"><div class="countdown-num" id="cd-h-${ev.id}">00</div><div class="countdown-label">${t("cd_hrs")}</div></div>
            <div class="countdown-unit"><div class="countdown-num" id="cd-m-${ev.id}">00</div><div class="countdown-label">${t("cd_min")}</div></div>
            <div class="countdown-unit"><div class="countdown-num" id="cd-s-${ev.id}">00</div><div class="countdown-label">${t("cd_sec")}</div></div>
          </div>
          <button class="gold-btn full-width" style="margin-top:16px"
                  onclick="jilScroll('contact')">${t("ev_register")}</button>
        </div>
      </div>`;
  }).join("");

  eventsMeta.forEach(ev => startCountdown(ev.id, ev.date));
}

function startCountdown(id, dateStr) {
  const target = new Date(dateStr).getTime();
  const pad = n => String(Math.floor(n)).padStart(2, "0");
  const tick = () => {
    const diff = target - Date.now();
    const dEl  = document.getElementById(`cd-d-${id}`);
    if (!dEl) return;
    if (diff <= 0) {
      ["d","h","m","s"].forEach(k => {
        const el = document.getElementById(`cd-${k}-${id}`);
        if (el) el.textContent = "00";
      });
      return;
    }
    document.getElementById(`cd-d-${id}`).textContent = pad(diff / 86400000);
    document.getElementById(`cd-h-${id}`).textContent = pad((diff % 86400000) / 3600000);
    document.getElementById(`cd-m-${id}`).textContent = pad((diff % 3600000) / 60000);
    document.getElementById(`cd-s-${id}`).textContent = pad((diff % 60000) / 1000);
  };
  tick();
  setInterval(tick, 1000);
}

/* ══════════════════════════════════════════════════════════
   RENDER — TEAM
   ══════════════════════════════════════════════════════════ */
const teamMeta = [
  { nameKey:"t0_name", roleKey:"t0_role", deptKey:"t0_dept", bioKey:"t0_bio", initials:"UR", color:"#C48A4A" },
  { nameKey:"t1_name", roleKey:"t1_role", deptKey:"t1_dept", bioKey:"t1_bio", initials:"XM", color:"#8B6914" },
  { nameKey:"t2_name", roleKey:"t2_role", deptKey:"t2_dept", bioKey:"t2_bio", initials:"BF", color:"#A07830" },
];

function renderTeam() {
  const grid = document.getElementById("team-grid");
  if (!grid) return;
  grid.innerHTML = teamMeta.map(m => `
    <div class="team-card js-tilt">
      <div class="team-avatar"
           style="background:linear-gradient(135deg,${m.color},#2A120A);
                  border:2px solid ${m.color};
                  box-shadow:0 0 20px ${m.color}40">
        ${m.initials}
      </div>
      <div class="team-dept">${t(m.deptKey)}</div>
      <h3 class="team-name">${t(m.nameKey)}</h3>
      <div class="team-role">${t(m.roleKey)}</div>
      <p class="team-bio">${t(m.bioKey)}</p>
    </div>`).join("");

  grid.querySelectorAll(".js-tilt").forEach(card => {
    card.addEventListener("mousemove", e => {
      const r  = card.getBoundingClientRect();
      const rx = (-(e.clientY - r.top  - r.height / 2) / r.height) * 14;
      const ry =  ((e.clientX - r.left - r.width  / 2) / r.width)  * 14;
      card.style.transform = `perspective(600px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
      card.style.boxShadow = "0 24px 60px rgba(196,138,74,0.25)";
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
      card.style.boxShadow = "";
    });
  });
}

/* ══════════════════════════════════════════════════════════
   RENDER — TESTIMONIALS
   ══════════════════════════════════════════════════════════ */
const testimonialsMeta = [
  { name:"Sabina Alieva",   role:"Participant", avatar:"SA", qKey:"q0" },
  { name:"Jasur Maxmudov",  role:"Participant", avatar:"JM", qKey:"q1" },
  { name:"Kamila Karimova", role:"Participant", avatar:"KK", qKey:"q2" },
  { name:"Alisher Ikramov", role:"Participant", avatar:"AI", qKey:"q3" },
  { name:"Nilufar Asanova", role:"Participant", avatar:"NA", qKey:"q4" },
  { name:"Danil Petrov",    role:"Participant", avatar:"DP", qKey:"q5" },
];

function renderTestimonials() {
  const grid = document.getElementById("testimonials-grid");
  if (!grid) return;
  grid.innerHTML = testimonialsMeta.map(t_ => `
    <div class="testimonial-card">
      <div class="quote-mark">"</div>
      <p class="testimonial-quote">"${t(t_.qKey)}"</p>
      <div class="testimonial-author">
        <div class="t-avatar" style="background:linear-gradient(135deg,#C48A4A,#2A120A);border:1px solid var(--border)">${t_.avatar}</div>
        <div>
          <div class="t-name">${t_.name}</div>
          <div class="t-role">${t_.role}</div>
        </div>
      </div>
    </div>`).join("");
}

/* ══════════════════════════════════════════════════════════
   SCROLL ANIMATIONS
   ══════════════════════════════════════════════════════════ */
function initScrollAnimations() {
  const sel = ".timeline-item,.collab-card,.gallery-item,.event-card,.team-card,.testimonial-card,.stat-card";
  const obs = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, i) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      el.style.transitionDelay = `${(i % 4) * 0.07}s`;
      el.classList.add("visible");
      if (el.classList.contains("stat-card")) triggerCountUp(el);
      observer.unobserve(el);
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(sel).forEach(el => obs.observe(el));
}

function triggerCountUp(card) {
  const valueEl = card.querySelector(".stat-value");
  const target  = +card.dataset.target;
  const suffix  = card.dataset.suffix || "";
  const dur     = 2200;
  const start   = performance.now();
  const step = now => {
    const p     = Math.min((now - start) / dur, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    valueEl.textContent = Math.floor(eased * target).toLocaleString() + suffix;
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

/* ══════════════════════════════════════════════════════════
   PARTICLES
   ══════════════════════════════════════════════════════════ */
function initParticles() {
  const canvas = document.getElementById("particles-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let W, H, pts;
  const resize = () => { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; };
  const make   = () => {
    pts = Array.from({ length: 60 }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      r: Math.random() * 2 + 0.5,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      a: Math.random() * 0.6 + 0.1,
    }));
  };
  resize(); make();
  window.addEventListener("resize", () => { resize(); make(); });
  (function loop() {
    ctx.clearRect(0, 0, W, H);
    pts.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(196,138,74,${p.a})`;
      ctx.fill();
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;
    });
    requestAnimationFrame(loop);
  })();
}

/* ══════════════════════════════════════════════════════════
   BOOT
   ══════════════════════════════════════════════════════════ */
document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("footer-year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  renderTimeline();
  renderCollaborations();
  renderGallery();
  renderEvents();
  renderTeam();
  renderTestimonials();

  initNavbar();
  initScrollAnimations();
  initParticles();

  /* apply static data-i18n bindings */
  applyTranslations();
});