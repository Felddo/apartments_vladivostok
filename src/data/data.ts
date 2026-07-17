import type { IconType } from "react-icons/lib";
import type { 
  TApart,
  TName, 
  TFooterContacts, 
  TFooterColumn,
  TLinks
} from "../types/types"
import { 
  IoPersonOutline,
  IoBedOutline,
  IoRestaurantOutline,
  IoLayersOutline,
  IoArrowUpCircleOutline,
  IoWaterOutline,
  IoCarOutline,
  IoHomeOutline,
  IoWifi,
  IoPeopleOutline
} from "react-icons/io5";
import { BiSolidDryer } from "react-icons/bi";
import { 
  LuWashingMachine,
  LuShowerHead,
  LuBaby,
  LuPartyPopper
} from "react-icons/lu";
import { 
  TbBed,
  TbAirConditioning 
} from "react-icons/tb";
import { 
  PiMoneyWavy,
  PiClockLight,
  PiDog,
  PiBabyCarriage
} from "react-icons/pi";
import { MdOutlineSmokeFree } from "react-icons/md";

export const NAV_LINKS: TLinks  = {
  "main": [
    {label: "Наши квартиры", href: "#apartments"},
    {label: "Контакты", href: "#contacts"}
  ],
  "apartment": [
    {label: "Главная", href: "/"},
    {label: "Фотографии", href: "#photos"},
    {label: "Описание", href: "#description"},
    {label: "Календарь", href: "#ical"},
    {label: "Расположение", href: "#location"},
    {label: "Контакты", href: "#contacts"},
    {label: "Правила", href: "#rules"}
  ]
}


const ICONS: Record<string, IconType> = {
  "quests": IoPersonOutline,
  "beds": IoBedOutline,
  "dishwasher": IoWaterOutline, 
  "floor": IoLayersOutline,
  "elevator": IoArrowUpCircleOutline,
  "bathroom": IoWaterOutline,
  "free_parking": IoCarOutline,
  "bedroom": IoHomeOutline,
  "wifi": IoWifi,
  "dryer": BiSolidDryer,
  "washing_machine": LuWashingMachine,
  "sleeping_places": TbBed,
  "conditioner": TbAirConditioning,
  "shower": LuShowerHead,
  "kitchen": IoRestaurantOutline,
  "baby": LuBaby,
  "money": PiMoneyWavy,
  "clock": PiClockLight,
  "smoke": MdOutlineSmokeFree,
  "pet": PiDog,
  "party": LuPartyPopper,
  "stroller": PiBabyCarriage,
  "people": IoPeopleOutline 
}

const panoramniImages = Object.values(
  import.meta.glob('../assets/panoramni-vid/*.{png,jpg,jpeg,webp}', { eager: true, import: 'default' })
) as string[];

const zakatyImages = Object.values(
  import.meta.glob('../assets/yarkie-zakaty/*.{png,jpg,jpeg,webp}', { eager: true, import: 'default' })
) as string[];


const centrImages = Object.values(
  import.meta.glob('../assets/more-i-centr/*.{png,jpg,jpeg,webp}', { eager: true, import: 'default' })
) as string[];


export const APART_INFO: Record<string, TApart> = {
  "panoramni-vid": {
    name: "Опера Хаус",
    square: 45,
    mainImage: panoramniImages[0],
    images: panoramniImages,
    type: "Студия",
    addres: "Очаковская, д.7",
    lat: 43.101556,
    lng: 131.900289,
    ical: import.meta.env.VITE_SUTOCHNO_OCH,
    icons: [
      { text: "4 гостя", iconType: ICONS['quests'] },
      { text: "2 кровати", iconType: ICONS['beds'] },
      { text: "Посудомойка", iconType: ICONS['dishwasher'] },
      { text: "12 этаж", iconType: ICONS['floor'] },
      { text: "Лифт", iconType: ICONS['elevator'] },
      { text: "Фрипаркинг", iconType: ICONS['free_parking'] },
      { text: "Стиралка", iconType: ICONS['washing_machine'] },
      { text: "Сушилка", iconType: ICONS['dryer'] },
    ],
    description: [`Эта стильная и уютная квартира с новым современным ремонтом станет идеальным местом для вашего отдыха или деловой поездки.
                Мы находимся в шаговой доступности от главных достопримечательностей города — Золотого моста и Театра Оперы и Балета.
                Расположение дома позволяет быстро и без труда добраться как до центра Владивостока, так и до острова Русский,
                при этом окна квартиры выходят на тихую сторону, что гарантирует вам отсутствие дорожного шума.`,

                `Главная особенность интерьера — прекрасный панорамный вид и продуманная система зонированного освещения,
                создающая особую атмосферу. Мы уделяем исключительное внимание чистоте, проводя тщательную уборку и дезинфекцию после каждого гостя.
                Процесс вашего прибытия будет максимально комфортным: благодаря электронному замку возможно быстрое заселение в любое время без томительного ожидания.`,

                `Ваше пребывание будет уютным в любое время года: в квартире очень солнечно и тепло зимой,
                а наличие кондиционера и системы теплых полов позволяет настроить идеальный климат под себя. Безопасность гостей обеспечивается закрытой территорией,
                видеонаблюдением и работой консьержа в подъезде. Для путешественников на автомобиле предоставляется доступ к парковке за шлагбаумом.
                Мы также позаботились о тех, кто приезжает по работе, предоставляя полный пакет отчетных документов и возможность оплаты по счету для юридических лиц.`],
    facilities: [
      {iconType: ICONS['kitchen'],
      facilityName: "Кухня",
      facilityItems: [
        "Двухкамерный холодильник",
        "Керамическая плита",
        "Духовой шкаф",
        "Микроволновая печь",
        "Электрический чайник",
        "Посудомоечная машина",
      ]},
      {iconType: ICONS['conditioner'],
      facilityName: "Бытовая техника",
      facilityItems: [
        "Кондиционер",
        "Телевизор",
        "Стиральная машина",
        "Сушильная машина"
      ]},
      {iconType: ICONS['shower'],
      facilityName: "Ванная комната",
      facilityItems: [
        "Электронный унитаз биде",
        "Фен",
        "Душ",
        "Полотенца"
      ]},
      {iconType: ICONS['sleeping_places'],
      facilityName: "Спальные места",
      facilityItems: [
        "Двуспальная кровать",
        "Диван-кровать на два спальных места"
      ]},
      {iconType: ICONS['baby'],
      facilityName: "Для семей с детьми",
      facilityItems: [
        "Стульчик для кормления",
        "Детский горшок",
        "Детская ступенька для ног"
      ]}
    ],
    rules: [
      { text: "Залог 5000 руб", iconType: ICONS['money'] },
      { text: "Заезд с 15:00", iconType: ICONS['clock'] },
      { text: "выезд до 12:00", iconType: ICONS['clock'] },
      { text: "Курение запрещено", iconType: ICONS['smoke'] },
      { text: "Нельзя с питомцами", iconType: ICONS['pet'] },
      { text: "Без вечеринок", iconType: ICONS['party'] },
      { text: "Можно с детьми", iconType: ICONS['stroller'] },
      { text: "Максимум 4 гостя", iconType: ICONS['people'] },
    ]
  },
  "yarkie-zakaty": {
    name: "Ocean breeze",
    square: 45,
    mainImage: zakatyImages[0],
    images: zakatyImages,
    type: "1-комнатная",
    addres: "Станюковича, д.12",
    lat: 43.109428,
    lng: 131.875585,
    ical: import.meta.env.VITE_SUTOCHNO_STAN,
    icons: [
      { text: "4 гостя", iconType: ICONS['quests'] },
      { text: "2 кровати", iconType: ICONS['beds'] },
      { text: "Посудомойка", iconType: ICONS['dishwasher'] },
      { text: "6 этаж", iconType: ICONS['floor'] },
      { text: "Лифт", iconType: ICONS['elevator'] },
      { text: "1 спальня", iconType: ICONS['bedroom'] },
      { text: "Стиралка", iconType: ICONS['washing_machine'] },
      { text: "Сушилка", iconType: ICONS['dryer'] },
    ],
    "description": [`Эта атмосферная и стильная квартира расположена в самом сердце исторического центра города.
                    После капитального ремонта с полной заменой всех коммуникаций и реализации оригинального дизайнерского проекта,
                    она превратилась в идеальное пространство для комфортного отдыха до четырех человек.
                    Главная изюминка интерьера — панорамный балкон, ориентированный на западную сторону.
                    Здесь вы сможете проводить незабываемые вечера, наслаждаясь морскими закатами,
                    или днем наблюдать за парусными регатами в яхт-клубе «Семь футов» под крики чаек и любоваться видом на бухту Федорова.`,

                    `Внутри вас ждет уютная планировка с раздельными комнатами и продуманной системой зонированного вечернего освещения,
                    создающей особую атмосферу. Мы гарантируем безупречную чистоту: после каждого гостя проводится обязательная тщательная уборка и дезинфекция.
                    Ваше удобство для нас в приоритете, поэтому в квартире установлен электронный замок, обеспечивающий быстрое круглосуточное заселение`],
    facilities: [
      {iconType: ICONS['kitchen'],
      facilityName: "Кухня",
      facilityItems: [
        "Двухкамерный холодильник",
        "Индукционная варочная панель",
        "Микроволновая печь",
        "Электрический чайник",
        "Посудомоечная машина",
      ]},
      {iconType: ICONS['conditioner'],
      facilityName: "Бытовая техника",
      facilityItems: [
        "Кондиционер",
        "Телевизор",
        "Стиральная машина",
        "Сушильная машина"
      ]},
      {iconType: ICONS['shower'],
      facilityName: "Ванная комната",
      facilityItems: [
        "Электронный унитаз биде",
        "Фен",
        "Душ",
        "Полотенца"
      ]},
      {iconType: ICONS['sleeping_places'],
      facilityName: "Спальные места",
      facilityItems: [
        "Двуспальная кровать",
        "Диван-кровать на два спальных места"
      ]}
    ],
    rules: [
      { text: "Залог 5000 руб", iconType: ICONS['money'] },
      { text: "Заезд с 15:00", iconType: ICONS['clock'] },
      { text: "выезд до 11:00", iconType: ICONS['clock'] },
      { text: "Курение запрещено", iconType: ICONS['smoke'] },
      { text: "Нельзя с питомцами", iconType: ICONS['pet'] },
      { text: "Без вечеринок", iconType: ICONS['party'] },
      { text: "Можно с детьми", iconType: ICONS['stroller'] },
      { text: "Максимум 4 гостя", iconType: ICONS['people'] },
    ]
  },
  "more-i-centr": {
    name: "Море и центр",
    square: 64,
    mainImage: centrImages[0],
    images: centrImages,
    type: "3-комнатная",
    addres: "Амурская, д.7",
    lat: 43.133124,
    lng: 131.888530,
    ical: import.meta.env.VITE_SUTOCHNO_AM,
    icons: [
      { text: "6 гостей", iconType: ICONS['quests'] },
      { text: "3 кровати", iconType: ICONS['beds'] },
      { text: "7 этаж", iconType: ICONS['floor'] },
      { text: "Лифт", iconType: ICONS['elevator'] },
      { text: "2 спальни", iconType: ICONS['bedroom'] },
      { text: "Стиралка", iconType: ICONS['washing_machine'] },
    ],
    "description": [`Эта уютная и всегда чистая квартира расположена в тихом, зеленом районе центральной части города.
                    Здесь вы сможете наслаждаться тишиной и пением птиц, находясь при этом в непосредственной близости от всей ключевой инфраструктуры Владивостока.
                    Локация идеально подходит для самого широкого круга гостей: в 5 минутах ходьбы находится городской пляж «Кунгасный», 
                    а до исторического центра, Арбата и набережной можно дойти пешком за 20 минут или доехать за 5–10 минут.`,

                    `Квартира обладает уникальной планировкой с двумя изолированными спальнями и непроходными комнатами, 
                    что гарантирует приватность каждому гостю. Благодаря электронному замку предусмотрено бесконтактное заселение в любое удобное для вас время.`,

                    `Расположение квартиры открывает великолепные возможности для гастрономического туризма и шопинга: 
                    в пешей доступности находится лучший в городе Первореченский рынок морепродуктов и фермерских продуктов, ТЦ «Игнат», 
                    а также созвездие популярных ресторанов (Syndicate, Port Cafe, Trinity, Ginza, «Супра»).`],
        facilities: [
      {iconType: ICONS['kitchen'],
      facilityName: "Кухня",
      facilityItems: [
        "Двухкамерный холодильник",
        "Электроплита",
        "Духовой шкаф",
        "Микроволновая печь",
        "Электрический чайник",
      ]},
      {iconType: ICONS['conditioner'],
      facilityName: "Бытовая техника",
      facilityItems: [
        "Кондиционер",
        "Телевизор",
        "Стиральная машина"
      ]},
      {iconType: ICONS['shower'],
      facilityName: "Ванная комната",
      facilityItems: [
        "Фен",
        "Душ",
        "Полотенца"
      ]},
      {iconType: ICONS['sleeping_places'],
      facilityName: "Спальные места",
      facilityItems: [
        "Двуспальная кровать",
        "Диван-кровать на два спальных места",
        "Двухъярусная кровать"
      ]}
    ],
    rules: [
      { text: "Залог 5000 руб", iconType: ICONS['money'] },
      { text: "Заезд с 15:00", iconType: ICONS['clock'] },
      { text: "выезд до 11:00", iconType: ICONS['clock'] },
      { text: "Курение запрещено", iconType: ICONS['smoke'] },
      { text: "Нельзя с питомцами", iconType: ICONS['pet'] },
      { text: "Без вечеринок", iconType: ICONS['party'] },
      { text: "Можно с детьми", iconType: ICONS['stroller'] },
      { text: "Максимум 6 гостей", iconType: ICONS['people'] },
    ]
  },
};

export const BLOCKS_DATA: TName[] = Object.entries(APART_INFO).map(
  ([slug, data]) => ({
    name: data.name,
    image: data.mainImage,
    slug: slug,
}));

export const FOOTER_ROOMS: TFooterColumn[] = [
  {
    title: "Квартиры",
    links: Object.entries(APART_INFO).map(([slug, data]) => ({
      label: data.name,
      slug: slug,
    })),
  }
];

export const TYPES: string[] = Object.entries(APART_INFO).map(
  ([, data]) => (data.type)
);

export const FOOTER_CONTACTS: TFooterContacts[] = [
  {
    name: "Роман Андреевич",
    number: "+7 914 707-86-67", 
    links: [
      { href: "https://t.me/caballeroRom", type: "telegram" },
      { href: "https://wa.me/79147078667", type: "whatsapp" },
      { href: "https://max.ru/u/f9LHodD0cOK1kXZySh9ACeUMdepCwtQGc-kCiWuXYATcWJeQuiaTrZn_oq8", type: "max" }
    ],
  },
  {
    name: "Евгения Александровна",
    number: "+7 914 704-87-47", 
    links: [
      { href: "https://t.me/EvgeniiaG7", type: "telegram" },
      { href: "https://wa.me/79147048747", type: "whatsapp" },
      { href: "https://max.ru/u/f9LHodD0cOJrLvgC20i6VVXfDzFB2o3IJ5Lle_DUsXZ2c2PwPJwXITmW-co", type: "max" }
    ],
  }
];