import { Expedition, DestinationHub, Testimonial, FAQItem } from '../types';

export const EXPEDITIONS: Expedition[] = [
  {
    id: 'exp-1',
    title: 'Лазурная одиссея Ликийского берега: Гечек, Каш и Кекова',
    slug: 'lycian-coast-turkey',
    region: 'turkey_greece',
    regionLabel: 'Турция и Эгейское море',
    country: 'Турция',
    startPort: 'Гечек (D-Marin)',
    endPort: 'Гечек',
    dates: '16 мая — 23 мая 2026',
    durationDays: 7,
    pricePerPersonEur: 850,
    totalSpots: 8,
    spotsLeft: 2,
    difficulty: 'Easy',
    yachtModel: 'Dufour 460 Grand Large',
    yachtType: 'Monohull',
    yachtYear: 2022,
    yachtLengthFt: 46,
    cabins: 4,
    image: 'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80',
    ],
    description: 'Идеальный маршрут как для начинающих, так и для ценителей уединенных бирюзовых бухт. Затонувший античный город Кекова, уютные рыбные рестораны с швартовкой к деревянным причалам, кристальная вода и стабильные мягкие бризы.',
    highlights: [
      'Купание над руинами затонувшего античного города Симена',
      'Стоянки в диких бухтах Олюдениз и банях Клеопатры',
      'Мастер-класс по работе со шкотами и швартовке кормой',
      'Свежайшие морепродукты в аутентичном Каше'
    ],
    skipper: {
      id: 'sk-1',
      name: 'Алексей Морозов',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
      license: 'RYA Yachtmaster Offshore 200gt',
      experienceYears: 12,
      nauticalMiles: 28400,
      rating: 4.98,
      bio: 'Профессиональный шкипер, пересёк Атлантику трижды. Обожает обучать новичков тонкостям паруса без стресса и с упором на комфорт и безопасность.'
    },
    itinerary: [
      { day: 1, title: 'Сбор в марине Гечек и брифинг безопасности', description: 'Закупка провизии, размещение в каютах, вечерний ужин в таверне.', anchorType: 'Marina', distanceNm: 0 },
      { day: 2, title: 'Гечек → Бухта Сарсала и Бани Клеопатры', description: 'Первый переход под парусом, купание в чистейших лагунах.', anchorType: 'Secluded Bay', distanceNm: 15 },
      { day: 3, title: 'Бухта Сарсала → Остров Гемилер', description: 'Якорная стоянка с видом на византийские храмы, закат на вершине острова.', anchorType: 'Buoy Field', distanceNm: 22 },
      { day: 4, title: 'Остров Гемилер → Калкан и Каш', description: 'Длинный бодрый переход в открытом море, прогулка по мощеным улочкам Каша.', anchorType: 'Island Port', distanceNm: 28 },
      { day: 5, title: 'Каш → Затонувший город Кекова и крепость Симена', description: 'Плавание с масками над древними амфорами, подъем к генуэзской крепости.', anchorType: 'Secluded Bay', distanceNm: 18 },
      { day: 6, title: 'Кекова → Бухта Холодная вода (Cold Water Bay)', description: 'Вкуснейшие гёзлеме на холме, ночевка под звездным небом.', anchorType: 'Secluded Bay', distanceNm: 24 },
      { day: 7, title: 'Возвращение в Гечек, прощальный ужин экипажа', description: 'Заключительный переход под генакером, подведение итогов похода.', anchorType: 'Marina', distanceNm: 16 }
    ],
    included: [
      'Место в двухместной каюте с бельем и полотенцами',
      'Работа опытного лицензированного шкипера',
      'Динги с подвесным мотором для высадки на берег',
      'SUP-борд и маски для снорклинга на борту',
      'Финальная уборка яхты и газ для камбуза'
    ],
    notIncluded: [
      'Авиаперелет до Даламана',
      'Судовая касса (продукты, топливо, стоянки в маринах ~150-180€ на чел.)',
      'Возвратный страховой депозит (делящийся на всех)'
    ]
  },
  {
    id: 'exp-2',
    title: 'Киклады под парусом: Миконос, Парос и дикие жемчужины Эгейского моря',
    slug: 'cyclades-greece-sailing',
    region: 'turkey_greece',
    regionLabel: 'Греческие острова',
    country: 'Греция',
    startPort: 'Афины (Марина Алимос)',
    endPort: 'Миконос',
    dates: '6 июня — 13 июня 2026',
    durationDays: 7,
    pricePerPersonEur: 980,
    totalSpots: 8,
    spotsLeft: 3,
    difficulty: 'Moderate',
    yachtModel: 'Beneteau Oceanis 51.1',
    yachtType: 'Monohull',
    yachtYear: 2023,
    yachtLengthFt: 51,
    cabins: 5,
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Аутентичная парусная романтика: белоснежные домики с синими куполами, знаменитые ветряные мельницы, свежий ветер Мельтеми и живописные переходы между легендарными островами архипелага Киклады.',
    highlights: [
      'Парусные галсы по синему Эгейскому морю',
      'Ночевка на якоре у священного необитаемого острова Делос',
      'Закаты в деревушках Наксоса и Пароса с греческим вином',
      'Настоящая командная работа со спинакером'
    ],
    skipper: {
      id: 'sk-2',
      name: 'Николай Ветров',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
      license: 'IYT Yachtmaster Ocean',
      experienceYears: 15,
      nauticalMiles: 34000,
      rating: 4.96,
      bio: 'Влюблен в Грецию уже 15 лет. Знает каждую укромную таверну, куда швартуются только старые морские волки.'
    },
    itinerary: [
      { day: 1, title: 'Алимос → мыс Сунион', description: 'Закат у храма Посейдона на якоре.', anchorType: 'Secluded Bay', distanceNm: 26 },
      { day: 2, title: 'Сунион → остров Китнос', description: 'Знаменитая песчаная коса Колона, купание в термальных источниках.', anchorType: 'Island Port', distanceNm: 24 },
      { day: 3, title: 'Китнос → Сирос (Эрмуполис)', description: 'Столица Киклад с неоклассической архитектурой и венецианским духом.', anchorType: 'Marina', distanceNm: 30 },
      { day: 4, title: 'Сирос → Парос (Науса)', description: 'Рыбацкая гавань, узкие белые улочки, ужин со свежим осьминогом.', anchorType: 'Island Port', distanceNm: 22 },
      { day: 5, title: 'Парос → Наксос', description: 'Врата Портара, песчаные пляжи и дегустация местного ликера цитрон.', anchorType: 'Island Port', distanceNm: 15 },
      { day: 6, title: 'Наксос → Делос → Рения', description: 'Культурная высадка на остров Аполлона, бирюзовая лагуна Рении.', anchorType: 'Secluded Bay', distanceNm: 20 },
      { day: 7, title: 'Рения → Миконос', description: 'Швартовка в Новом порту Миконоса, заключительная вечеринка экипажа.', anchorType: 'Marina', distanceNm: 8 }
    ],
    included: [
      'Место в каюте на современной 51-футовой яхте',
      'Услуги опытного шкипера-наставника',
      'Обучение управлению парусами с записью морских миль в Logbook',
      'Постельное белье, газ, тузик с мотором'
    ],
    notIncluded: [
      'Авиабилеты',
      'Судовая касса (питание, дизель, стоянки ~170€)',
      'Личные расходы на берегу'
    ]
  },
  {
    id: 'exp-3',
    title: 'Фьорды Лофотенских островов: полуночное солнце и дикая Арктика',
    slug: 'lofoten-islands-norway',
    region: 'norway',
    regionLabel: 'Норвегия и Полярный круг',
    country: 'Норвегия',
    startPort: 'Будё (Bodø)',
    endPort: 'Свольвер (Svolvær)',
    dates: '11 июля — 18 июля 2026',
    durationDays: 7,
    pricePerPersonEur: 1350,
    totalSpots: 6,
    spotsLeft: 1,
    difficulty: 'Adventure',
    yachtModel: 'Bavaria 46 Cruiser (Arctic Spec)',
    yachtType: 'Monohull',
    yachtYear: 2021,
    yachtLengthFt: 46,
    cabins: 4,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Эпическая экспедиция за Полярный круг. Монументальные гранитные пики, вырастающие прямо из океана, рыбацкие домики рорбу на сваях, сафари с китами и белые ночи, когда солнце не садится круглые сутки.',
    highlights: [
      'Морской переход через суровый пролив Вестфьорд',
      'Рыбалка на гигантскую треску и палтуса прямо с кормы яхты',
      'Заход в знаменитый узкий Тролльфьорд с отвесными скалами',
      'Трекинг на видовую вершину Рейнебринген (Reinebringen)'
    ],
    skipper: {
      id: 'sk-3',
      name: 'Екатерина Соколова',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
      license: 'RYA Yachtmaster Ocean / First Aid Polar',
      experienceYears: 10,
      nauticalMiles: 22000,
      rating: 5.0,
      bio: 'Сертифицированный арктический шкипер. Провела более 30 экспедиций по Норвегии, Шпицбергену и Исландии.'
    },
    itinerary: [
      { day: 1, title: 'Будё → Стеккен', description: 'Знакомство с яхтой, подготовка теплого снаряжения, выход в море.', anchorType: 'Island Port', distanceNm: 18 },
      { day: 2, title: 'Пересечение Вестфьорда → Рейне', description: 'Захватывающий переход к самому открыточному поселку Лофотен.', anchorType: 'Marina', distanceNm: 45 },
      { day: 3, title: 'Рейне → Нусфьорд', description: 'Пеший трекинг на гору Reinebringen, затем переход в старинный музейный поселок.', anchorType: 'Island Port', distanceNm: 20 },
      { day: 4, title: 'Нусфьорд → Баллстад', description: 'Остановка в аутентичной верфи, сауна на причале с прыжками в фьорд.', anchorType: 'Marina', distanceNm: 15 },
      { day: 5, title: 'Баллстад → Хеннингсвер', description: '«Лофотенская Венеция» с арт-галереями и знаменитым футбольным полем на скале.', anchorType: 'Island Port', distanceNm: 22 },
      { day: 6, title: 'Хеннингсвер → Тролльфьорд', description: 'Заход в величественный узкий каньон, наблюдение за морскими орланами.', anchorType: 'Secluded Bay', distanceNm: 25 },
      { day: 7, title: 'Тролльфьорд → Свольвер', description: 'Финальный швартов в столице Лофотен, обмен впечатлениями.', anchorType: 'Marina', distanceNm: 12 }
    ],
    included: [
      'Место в отапливаемой каюте яхты арктического класса',
      'Опытный шкипер с полярным опытом',
      'Снасти для глубоководной морской рыбалки',
      'Спасательные гидротермокостюмы и страховка'
    ],
    notIncluded: [
      'Авиаперелет до Будё и обратно из Свольвера',
      'Судовая касса (~250€ на человека)',
      'Посещение саун и музеев'
    ]
  },
  {
    id: 'exp-4',
    title: 'Карибский релакс на просторном катамаране: Мартиника и Сент-Винсент',
    slug: 'caribbean-martinique-grenadines',
    region: 'caribbean',
    regionLabel: 'Карибские острова',
    country: 'Мартиника / Гренадины',
    startPort: 'Ле-Марен (Мартиника)',
    endPort: 'Ле-Марен',
    dates: '21 ноября — 28 ноября 2026',
    durationDays: 7,
    pricePerPersonEur: 1490,
    totalSpots: 8,
    spotsLeft: 4,
    difficulty: 'Easy',
    yachtModel: 'Lagoon 42 Catamaran',
    yachtType: 'Catamaran',
    yachtYear: 2023,
    yachtLengthFt: 42,
    cabins: 4,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Абсолютный комфорт круизного катамарана: просторный флайбридж, сетка над лазурным океаном, свежие манго и кокосы, плавание с гигантскими морскими черепахами в национальном парке Тобаго Кейс.',
    highlights: [
      'Катамаран без крена: комфорт гостиничного сьюта на воде',
      'Плавание с черепахами и скатами в лагуне Tobago Cays',
      'Карибский барбекю с лобстерами на необитаемом пляже',
      'Остров Бекия — столица карибских судостроителей'
    ],
    skipper: {
      id: 'sk-4',
      name: 'Дмитрий Романов',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
      license: 'ISSA Master of Yacht Offshore / Catamaran Endorsement',
      experienceYears: 14,
      nauticalMiles: 31000,
      rating: 4.99,
      bio: 'Провел 8 сезонов на Карибах. Прекрасно знает секретные споты с лобстерами и рифы без туристических толп.'
    },
    itinerary: [
      { day: 1, title: 'Ле-Марен → Родни Бэй (Сент-Люсия)', description: 'Приемка катамарана, первый переход под пассатом.', anchorType: 'Marina', distanceNm: 30 },
      { day: 2, title: 'Сент-Люсия (Питоны) → Сент-Винсент', description: 'Проход мимо знаменитых вулканических пиков Питоны.', anchorType: 'Secluded Bay', distanceNm: 40 },
      { day: 3, title: 'Сент-Винсент → Остров Бекия (Порт Элизабет)', description: 'Атмосферный городок мореплавателей, колоритные бары.', anchorType: 'Island Port', distanceNm: 18 },
      { day: 4, title: 'Бекия → Заповедник Тобаго Кейс', description: 'Бирюзовый рай за коралловым рифом, снорклинг с черепахами.', anchorType: 'Buoy Field', distanceNm: 25 },
      { day: 5, title: 'Тобаго Кейс → Остров Меро (Mayreau)', description: 'Пляж Салт Вистл Бэй с открытки, вечерний барбекю.', anchorType: 'Secluded Bay', distanceNm: 10 },
      { day: 6, title: 'Меро → Сент-Люсия (Маригот Бэй)', description: 'Красивейшая укрытая марина, где снимались голливудские фильмы.', anchorType: 'Marina', distanceNm: 55 },
      { day: 7, title: 'Маригот Бэй → Ле-Марен (Мартиника)', description: 'Возвращение на базу, торжественное закрытие экспедиции.', anchorType: 'Marina', distanceNm: 32 }
    ],
    included: [
      'Место в двухместной каюте с индивидуальным санузлом (en-suite)',
      'Услуги шкипера с катамаранной квалификацией',
      'Кондиционер и опреснитель пресной воды на борту',
      'SUP-доски, каяки и ласты/маски'
    ],
    notIncluded: [
      'Авиаперелет на Мартинику',
      'Судовая касса и таможенные сборы островов (~250-300€)',
      'Ужины в береговых ресторанах'
    ]
  },
  {
    id: 'exp-5',
    title: 'Океанский переход и вулканы Канар: Тенерифе, Ла Гомера и Ла Пальма',
    slug: 'canary-islands-ocean-sailing',
    region: 'atlantic',
    regionLabel: 'Канарские острова и Атлантика',
    country: 'Испания',
    startPort: 'Тенерифе (Марина Радазуль)',
    endPort: 'Тенерифе',
    dates: '10 октября — 17 октября 2026',
    durationDays: 7,
    pricePerPersonEur: 790,
    totalSpots: 8,
    spotsLeft: 2,
    difficulty: 'Adventure',
    yachtModel: 'Hanse 458 Cruiser',
    yachtType: 'Monohull',
    yachtYear: 2022,
    yachtLengthFt: 46,
    cabins: 4,
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Настоящая океанская школа! Длинные атлантические волны, постоянный попутный пассат, стаи дельфинов и гринд, сопровождающие яхту, реликтовые лавровые леса Ла Гомеры и вулканические пейзажи.',
    highlights: [
      'Встреча с китами-пилотами и дельфинами в проливе',
      'Ночной переход под миллиардами звезд Атлантики',
      'Практика несения парусов в зонах ветрового ускорения',
      'Тапас-бары и канарские вина в Сан-Себастьян де Ла Гомера'
    ],
    skipper: {
      id: 'sk-5',
      name: 'Максим Лебедев',
      avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=300&q=80',
      license: 'RYA Yachtmaster Offshore',
      experienceYears: 11,
      nauticalMiles: 26000,
      rating: 4.97,
      bio: 'Специалист по пассатным переходам. Учит экипаж понимать океан, настраивать грот и геную до миллиметра.'
    },
    itinerary: [
      { day: 1, title: 'Тенерифе (Радазуль) → Марина Сан-Мигель', description: 'Выход на юг Тенерифе вдоль вулкана Тейде.', anchorType: 'Marina', distanceNm: 35 },
      { day: 2, title: 'Сан-Мигель → Ла Гомера (Сан-Себастьян)', description: 'Переход пролива с китовым сафари, город, откуда Колумб отплыл в Америку.', anchorType: 'Island Port', distanceNm: 25 },
      { day: 3, title: 'Ла Гомера → Валье-Гран-Рей', description: 'Огибание острова с юга, стоянка на якоре у черных вулканических пляжей.', anchorType: 'Secluded Bay', distanceNm: 20 },
      { day: 4, title: 'Валье-Гран-Рей → Санта-Крус-де-ла-Пальма', description: 'Длинный океанский переход под парусом на «Красивый остров» (Isla Bonita).', anchorType: 'Island Port', distanceNm: 45 },
      { day: 5, title: 'Исследование Ла Пальмы и вулканических кратеров', description: 'День на острове, прогулка по столице с резными балконами.', anchorType: 'Marina', distanceNm: 0 },
      { day: 6, title: 'Ла Пальма → Лос-Гигантес (Тенерифе)', description: 'Впечатляющий подход к 600-метровым скалам Лос-Гигантес.', anchorType: 'Marina', distanceNm: 50 },
      { day: 7, title: 'Лос-Гигантес → Радазуль', description: 'Финальный переход, сертификация миль, праздничный ужин.', anchorType: 'Marina', distanceNm: 38 }
    ],
    included: [
      'Место в двухместной комфортабельной каюте',
      'Океанская практика под руководством сертифицированного шкипера',
      'Запись в логбук RYA / IYT о пройденных милях',
      'Комплект постельного белья и финальная уборка'
    ],
    notIncluded: [
      'Авиаперелет на Тенерифе (TFS/TFN)',
      'Судовая касса (~160€ на человека)',
      'Аренда авто на Ла Гомере/Ла Пальме (по желанию)'
    ]
  },
  {
    id: 'exp-6',
    title: 'Балеарский архипелаг: тайные бухты Майорки, Менорки и Форментеры',
    slug: 'balearic-islands-spain',
    region: 'mediterranean',
    regionLabel: 'Западное Средиземноморье',
    country: 'Испания',
    startPort: 'Пальма-де-Майорка',
    endPort: 'Пальма-де-Майорка',
    dates: '29 августа — 5 сентября 2026',
    durationDays: 7,
    pricePerPersonEur: 890,
    totalSpots: 8,
    spotsLeft: 3,
    difficulty: 'Easy',
    yachtModel: 'Jeanneau Sun Odyssey 490',
    yachtType: 'Monohull',
    yachtYear: 2023,
    yachtLengthFt: 49,
    cabins: 4,
    image: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Бирюзовые калы с соснами, подступающими к самой кромке воды, отвесные скалы мыса Форментор, знаменитый заповедник Кабрера и атмосфера средиземноморской легкости.',
    highlights: [
      'Заповедный остров Кабрера с ночевкой на буе под звездами',
      'Купание в кристальных бухтах Кала Мондраго и Кала д’Ор',
      'Тапас и свежая сангрия в аутентичных портах Майорки',
      'Легкий комфортный яхтинг с короткими переходами'
    ],
    skipper: {
      id: 'sk-6',
      name: 'Сергей Белов',
      avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=300&q=80',
      license: 'RYA Yachtmaster Coastal',
      experienceYears: 9,
      nauticalMiles: 19500,
      rating: 4.95,
      bio: 'Эксперт по Балеарам. Знает все укромные калы, защищенные от ветра в любую погоду.'
    },
    itinerary: [
      { day: 1, title: 'Пальма → Портальс Ноус', description: 'Старт из исторической марины Пальмы с видом на Кафедральный собор.', anchorType: 'Marina', distanceNm: 12 },
      { day: 2, title: 'Портальс → Национальный парк Кабрера', description: 'Переход на необитаемый остров, посещение морского замка XIV века.', anchorType: 'Buoy Field', distanceNm: 28 },
      { day: 3, title: 'Кабрера → Кала Фигера', description: 'Живописнейшая рыбацкая бухта с традиционными лодками «ллаут».', anchorType: 'Island Port', distanceNm: 18 },
      { day: 4, title: 'Кала Фигера → Кала Мондраго', description: 'Природный парк, белый песок и бирюзовая вода для плавания на SUP-бордах.', anchorType: 'Secluded Bay', distanceNm: 10 },
      { day: 5, title: 'Кала Мондраго → Порто Колом', description: 'Исторический порт с разноцветными домами и отличными винными погребами.', anchorType: 'Island Port', distanceNm: 14 },
      { day: 6, title: 'Порто Колом → Эс Тренк', description: 'Знаменитый пляж с карибским цветом воды, якорная стоянка.', anchorType: 'Secluded Bay', distanceNm: 22 },
      { day: 7, title: 'Эс Тренк → Пальма', description: 'Возвращение в домашнюю марину, прогулка по старому городу Пальмы.', anchorType: 'Marina', distanceNm: 25 }
    ],
    included: [
      'Место в комфортабельной каюте современной яхты',
      'Работа шкипера и обучение основам морского дела',
      'Разрешение на посещение нацпарка Кабрера',
      'SUP-борд, постельное белье, газ'
    ],
    notIncluded: [
      'Авиаперелет в Пальма-де-Майорка',
      'Судовая касса (~180€ на человека)',
      'Личные расходы'
    ]
  }
];

export const DESTINATION_HUBS: DestinationHub[] = [
  {
    id: 'dest-turkey-greece',
    name: 'Турция и Греция (Эгейское море)',
    title: 'Идеальный старт для новичков и рай теплых бухт',
    season: 'Май — Октябрь',
    waterTemp: '22°C — 27°C',
    windCondition: 'Умеренный бриз (10-18 узлов), Мельтеми в июле-августе',
    idealFor: 'Первый поход, семьи, гурманы, купание и короткие переходы',
    image: 'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=crop&w=800&q=80',
    popularRoutes: ['Гечек — Каш — Кекова', 'Киклады (Миконос, Парос, Санторини)', 'Ионические острова (Лефкада, Итака, Корфу)']
  },
  {
    id: 'dest-med',
    name: 'Балеары и Западное Средиземноморье',
    title: 'Европейская эстетика, бирюзовые калы и тапас-культура',
    season: 'Июнь — Сентябрь',
    waterTemp: '23°C — 26°C',
    windCondition: 'Мягкий дневной термальный ветер (8-15 узлов)',
    idealFor: 'Релакс, эстетика, заповедные острова, якорные стоянки',
    image: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=800&q=80',
    popularRoutes: ['Майорка & заповедник Кабрера', 'Ибица & Форментера', 'Корсика & Сардиния (Пролив Бонифачо)']
  },
  {
    id: 'dest-norway',
    name: 'Норвежские фьорды & Лофотены',
    title: 'Дикая первозданная Арктика и белые ночи',
    season: 'Июнь — Август',
    waterTemp: '12°C — 14°C',
    windCondition: 'Океанские ветра, защищенные фьорды (12-22 узлов)',
    idealFor: 'Приключения, фотографы, трекинг, сауна, рыбалка на треску',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    popularRoutes: ['Лофотенские острова (Будё — Свольвер)', 'Шпицберген (Арктическая экспедиция)', 'Люсе-фьорд и Ставангер']
  },
  {
    id: 'dest-canaries',
    name: 'Канары & Атлантический океан',
    title: 'Круглогодичный яхтинг, пассаты и встреча с китами',
    season: 'Круглый год (Октябрь — Апрель пик)',
    waterTemp: '20°C — 23°C',
    windCondition: 'Северо-восточный пассат (15-25 узлов)',
    idealFor: 'Океанская практика, волны, дельфины, набор миль в логбук',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80',
    popularRoutes: ['Тенерифе — Ла Гомера — Ла Пальма', 'Гран-Канария — Фуэртевентура — Лансароте', 'Трансатлантика ARC']
  },
  {
    id: 'dest-caribbean',
    name: 'Карибские острова (Антилы & Гренадины)',
    title: 'Тропическая сказка, катамараны и морские черепахи',
    season: 'Ноябрь — Апрель',
    waterTemp: '27°C — 29°C',
    windCondition: 'Тропический пассат (15-20 узлов)',
    idealFor: 'Комфорт без качки, дайвинг, пальмы, белый песок, лобстеры',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    popularRoutes: ['Мартиника — Сент-Люсия — Тобаго Кейс', 'Британские Виргинские острова (BVI)', 'Антигуа и Барбуда']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    author: 'Анна Воронцова',
    role: 'UX-дизайнер, шла в море впервые',
    city: 'Берлин',
    tripTitle: 'Ликийский берег Турции',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    quote: 'Я жутко боялась качки и думала, что яхтинг — это закрытый клуб миллионеров. CoSail перевернул всё! Капитан Алексей всё объяснил с полуслова, каюта была удобнее любого отеля, а просыпаться и нырять прямо в бирюзовую воду на рассвете — это чувство свободы, которое не забыть никогда.',
    rating: 5,
    milesTraveled: 180
  },
  {
    id: 't-2',
    author: 'Михаил и Елена Савельевы',
    role: 'Предприниматели',
    city: 'Варшава',
    tripTitle: 'Карибский архипелаг на катамаране Lagoon 42',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    quote: 'Брать целый катамаран на двоих не имело смысла по деньгам. Через cosail.org мы забронировали мастер-каюту и разделили расходы с классными ребятами из трех разных стран. Это лучший отпуск в нашей жизни: черепахи на Тобаго Кейс, вечерний ром под гитару и идеальная организация.',
    rating: 5,
    milesTraveled: 310
  },
  {
    id: 't-3',
    author: 'Артем Григорьев',
    role: 'Студент шкиперских курсов RYA',
    city: 'Рига',
    tripTitle: 'Атлантика: Тенерифе — Ла Гомера',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    quote: 'Мне нужны были реальные океанские мили в логбук и опыт работы с парусами в сильный ветер. Шкипер Максим доверил стоять за штурвалом, швартоваться и рассчитывать приливы. Опыт бесценный, а цена совместного похода оказалась в 3 раза ниже коммерческих школ.',
    rating: 5,
    milesTraveled: 420
  }
];

export const FAQS: FAQItem[] = [
  {
    category: 'prep',
    question: 'Нужен ли мне опыт яхтинга или специальные права?',
    answer: 'Нет, специальный опыт не требуется! Более 70% наших участников идут в море впервые. На каждом судне есть профессиональный лицензированный капитан (RYA, IYT, ISSA), который отвечает за безопасность, маршрут и управление лодкой. Если у вас есть желание научиться — капитан с удовольствием научит стоять за штурвалом, вязать морские узлы и работать с парусами.'
  },
  {
    category: 'prep',
    question: 'Что делать, если меня укачивает (морская болезнь)?',
    answer: 'Современные парусные круизеры устойчивы, а катамараны практически не дают крена. Как правило, организм адаптируется за первые несколько часов («прикачивается»). Кроме того, мы всегда держим на борту эффективные пластыри и таблетки от укачивания (Драмина, Stugeron). Маршруты строятся с переходами по 3–5 часов в день с частыми остановками в спокойных бухтах.'
  },
  {
    category: 'finance',
    question: 'Что такое «судовая касса» (Ship’s Kitty) и как делятся расходы?',
    answer: 'Судовая касса — это базовый принцип классического ко-сейлинга. Это общий фонд экипажа, в который все участники (кроме шкипера) скидываются равными долями в начале похода. Из него оплачиваются: закупка продуктов и напитков на камбуз, дизельное топливо по счетчику и стоянки в платных маринах. Всё абсолютно прозрачно, чеки сохраняются, а неиспользованный остаток возвращается в конце недели.'
  },
  {
    category: 'life_onboard',
    question: 'Как устроена жизнь и быт на современной яхте?',
    answer: 'Современная яхта — это плавучий отель со всеми удобствами: двухместные комфортабельные каюты с ортопедическими матрасами, санузлы с горячим душем и туалетом (гальюном), полностью оборудованная кухня (камбуз) с газовой плитой, духовкой и холодильниками, кают-компания и палуба для загара.'
  },
  {
    category: 'safety',
    question: 'Как cosail.org проверяет капитанов и обеспечивает безопасность?',
    answer: 'Все капитаны на платформе проходят обязательную строгую верификацию: проверка подлинности международных шкиперских лицензий (RYA Yachtmaster, IYT, ISSA), подтвержденного плавательского ценза (Logbook от 5,000+ миль), сертификатов первой помощи (STCW 95 / First Aid) и страховки яхты. Каждая яхта оснащена сертифицированными спасательными плотами, жилетами, EPIRB и VHF-радио.'
  },
  {
    category: 'prep',
    question: 'Что брать с собой на яхту (вещевой чек-лист)?',
    answer: 'Главное правило: мягкая складная сумка (чемодан на жестких колесиках на яхту брать нельзя, его негде хранить в каюте). Обувь с нескользящей светлой подошвой (Deck shoes или белые кроссовки), солнцезащитные очки с поляризацией, крем SPF 50+, легкая ветровка-непромокашка, флиска для вечерних вахт и купальные принадлежности.'
  }
];
