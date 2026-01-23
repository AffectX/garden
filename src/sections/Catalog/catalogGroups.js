const catalogGroups = [
  {
    title: 'Все товары',
    isActive:true,
    items: [
      {
        title: 'Эдельвейс альпийский',
        description: 'Это всемирно известный, очень редкий и охраняемый цветок',
        image: '/src/assets/images/popular/2.jpg',
        price: 2000,
      },
      {
        title: 'Китайская роза',
        description: 'Это всемирно известный, очень редкий и охраняемый цветок',
        image: '/src/assets/images/popular/2.jpg',
        price: 1500
      },
      {
        title: 'Флокс шиловидный',
        description: 'Это всемирно известный, очень редкий и охраняемый цветок',
        image: '/src/assets/images/popular/2.jpg',
        price: 1800,
      },
      {
        title: 'Эдельвейс альпийский',
        description: 'Это всемирно известный, очень редкий и охраняемый цветок',
        image: '/src/assets/images/popular/2.jpg',
        price: 2000,
      },
      {
        title: 'Китайская роза',
        description: 'Это всемирно известный, очень редкий и охраняемый цветок',
        image: '/src/assets/images/popular/2.jpg',
        price: 1500
      },
      {
        title: 'Флокс шиловидный',
        description: 'Это всемирно известный, очень редкий и охраняемый цветок',
        image: '/src/assets/images/popular/2.jpg',
        price: 1800,
      },
    ]
  },
  {
    title: 'Проф. семяна цветов',
    items: [
      {
        title: 'Петуния ампельная Изи Вейф Уайт F1',
        description: 'Для клумб и подвесных корзин ',
        image: '/src/assets/images/Catalog/prof/petunia_easy_wave_white.jpg',
        price: 180,
        manufacturer: 'PanAmerican Seed',
        parameters:'Длина побегов — 80-100см \n Диаметр цветка — 5-7см',
        inStock: true,

      },

      {
        title: 'Петуния многоцветковая ампельная «Тайдел Вэйв» Сильвер F1 ',
        description: 'Для кашпо, клумб и цветников',
        image: '/src/assets/images/catalog/prof/petunia_taidel_wave_silver.jpg',
        price: 180,
        manufacturer: 'Производитель PanAmerican Seed ',
        parameters: 'Высота — 50 см \n' +
          'Диаметр цветка — 5-6 см \n' +
          'Длина плетей — 1,5 метра',
        inStock: true,
      },

      {
        title: 'Петуния ампельная Опера Суприм Парпл F',
        description: 'Для кашпо, клумб и цветников',
        image: '/src/assets/images/catalog/prof/petunia_opera_supreme_parpl.jpg',
        price: 180,
        manufacturer: 'Производитель Takii seeds Япония',
        parameters: 'Высота — 20-30 см \n' +
          'Диаметр цветка — 6-7 см \n' +
          'Длина плетей — 100-120 см ',
        inStock: true,
      },

      {
        title: 'Петуния ампельная Опера Суприм Блю  F1',
        description: 'Для кашпо, клумб и цветников',
        image: '/src/assets/images/catalog/prof/petunia_opera_supreme_blue.jpg',
        price: 180,
        manufacturer: 'Производитель Takii seeds Япония',
        parameters: 'Высота — 20-30 см \n' +
          'Диаметр цветка — 6-7 см \n' +
          'Длина плетей — 100-120 см ',
        inStock: true,
      },

      {
        title: 'Петуния ампельная Опера Суприм Лемон F1',
        description: 'Для кашпо, клумб и цветников',
        image: '/src/assets/images/catalog/prof/petunia_opera_supreme_lemon.jpg',
        price: 180,
        manufacturer: 'Производитель Takii seeds Япония',
        parameters: 'Высота — 20-30 см \n' +
          'Диаметр цветка — 6-7 см \n' +
          'Длина плетей — 100-120 см ',
        inStock: true,
      },

      {
        title: 'Петуния ампельная Опера Суприм Разберри Айс F1',
        description: 'Для кашпо, клумб и цветников',
        image: '/src/assets/images/catalog/prof/petunia_opera_supreme_razberi_ice.jpg',
        price: 180,
        manufacturer: 'Производитель Takii seeds Япония',
        parameters: 'Высота — 20-30 см \n' +
          'Диаметр цветка — 6-7 см \n' +
          'Длина плетей — 100-120 см ',
        inStock: true,
      },

      {
        title: 'Петуния ампельная Опера Суприм F1 Ред',
        description: 'Для кашпо, клумб и цветников',
        image: '/src/assets/images/catalog/prof/petunia_opera_supreme_red.jpg',
        price: 180,
        manufacturer: 'Производитель Takii seeds Япония',
        parameters: 'Высота — 20-30 см \n' +
          'Диаметр цветка — 6-7 см \n' +
          'Длина плетей — 100-120 см ',
        inStock: true,
      },

      {
        title: 'Петуния крупноцветковая Донна Стар Ред энд Уайт F1 ',
        description: 'Для цветников открытого грунта, напольных кашпо и вазонов',
        image: '/src/assets/images/catalog/prof/petunia_donna_star_red_and_white.jpg',
        price: 40,
        manufacturer: 'Производитель FARAO - Италия',
        parameters: 'Высота растения — 15-20 см\n' +
          'Диаметр цветка — 12-14 см',
        inStock: true,
      },

      {
        title: 'Петуния крупноцветковая Лимбо Джи Пи микс F1',
        description: 'Для горшков, вазонов, контейнеров и высадки в открытый грунт',
        image: '/src/assets/images/catalog/prof/petunia_limbo_jp_mix.jpg',
        price: 40,
        manufacturer: 'Производитель HEMGENETICS - Нидерланды',
        parameters: 'Высота растения в горшке — 10-15 см\n' +
          'Высота растения в открытом грунте — 15-20 см\n' +
          'Ширина разрастания — 20 см',
        inStock: true,
      },

      {
        title: 'Петуния крупноцветковая Prism Blue F1',
        description: 'Для горшков, вазонов, контейнеров и высадки в открытый грунт',
        image: '/src/assets/images/catalog/prof/petunia_prism_blue.jpg',
        price: 40,
        manufacturer: 'Производитель HEMGENETICS - Нидерланды',
        parameters: 'Высота растения — 30–40 см\n' + 'Ширина — 30–40 см',
        inStock: true,
      },

      {
        title: 'Петуния крупноцветковая Саксесс 360° Лайт Еллоу F1',
        description: 'Для посадки в горшки, смешанные контейнеры, подвесные кашпо и для ландшафтных посадок в грунт.',
        image: '/src/assets/images/catalog/prof/petunia_success_360_light_yellow.jpg',
        price: 30,
        manufacturer: 'Производитель Benary- Германия',
        parameters: 'Высота компактного кустика — 20–35 см \n Диаметр цветка — 8-10 см',
        inStock: true,
      },

      {
        title: 'Петуния крупноцветковая Саксесс 360° Ред Стар F1',
        description: 'Для посадки в горшки, смешанные контейнеры, подвесные кашпо и для ландшафтных посадок в грунт.',
        image: '/src/assets/images/catalog/prof/petunia_success_360_star_red.jpg',
        price: 30,
        manufacturer: 'Производитель Benary- Германия',
        parameters: 'Высота компактного кустика — 30–35 см \n Ширина — 30 см \n Диаметр цветка — 7-10 см',
        inStock: true,
      },

      {
        title: 'Петуния крупноцветковая Саксесс 360° Уайт F1',
        description: 'Для посадки в горшки, смешанные контейнеры, подвесные кашпо и для ландшафтных посадок в грунт.',
        image: '/src/assets/images/catalog/prof/petunia_success_360_white.jpg',
        price: 30,
        manufacturer: 'Производитель Benary- Германия',
        parameters: 'Высота компактного кустика — 20–35 см  \n Диаметр цветка — 8-10 см',
        inStock: true,
      },

      {
        title: 'Петуния крупноцветковая Саксесс Аш Ди Бургунд F1',
        description: 'Для посадки в подвесные корзины, смешанные контейнеры и цветники открытого грунта.',
        image: '/src/assets/images/catalog/prof/petunia_success_hd_burgund.jpg',
        price: 30,
        manufacturer: 'Производитель Benary- Германия',
        parameters: 'Высота растения — 18 см \n Ширина разрастания — 28 см  \n Диаметр цветка — 10 см',
        inStock: true,
      },

      {
        title: 'Петуния крупноцветковая Танго Блу Стар F1',
        description: 'Для посадки в горшках, вазонах, контейнеров и выращивания в саду.',
        image: '/src/assets/images/catalog/prof/petunia_tango_blue_star.jpg',
        price: 30,
        manufacturer: 'Производитель HEMGENETICS - Нидерланды',
        parameters: 'Высота растения — 20-30 см  \n Диаметр цветка — 10-13 см',
        inStock: true,
      },

      {
        title: 'Петуния махровая крупноцветковая Каскаде Бургунди F1',
        description: 'Для создания красивых ландшафтных композиций, украшения клумб, веранд, балконов и беседок.',
        image: '/src/assets/images/catalog/prof/petunia_kaskade_burgund.jpg',
        price: 40,
        manufacturer: 'Производитель PanAmerican Seed - США',
        parameters: 'Высота компактного кустика — до 35 см  \n Диаметр цветка — 12 см',
        inStock: true,
      },

      {
        title: 'Петуния многоцветковая "Дот Стар Ред F1',
        description: 'Для выращивания в подвесных кашпо, балконных ящиках, контейнерах и клумбах.',
        image: '/src/assets/images/catalog/prof/petunia_dot_star_red.jpg',
        price: 40,
        manufacturer: 'Производитель Cerny - Чехия ',
        parameters: 'Высота — 25-30 см  \n Диаметр цветка — 6-8 см',
        inStock: true,
      },

      {
        title: 'Петуния многоцветковая Калиффо микс F1',
        description: 'Для выращивания в подвесных кашпо, балконных ящиках, контейнерах и клумбах.',
        image: '/src/assets/images/catalog/prof/petunia_kaliffo_mix.jpg',
        price: 30,
        manufacturer: 'Производитель FARAO - Италия ',
        parameters: 'Высота растения — 30-35 см  \n Диаметр цветка — 5-8 см',
        inStock: true,
      },

      {
        title: 'Петуния многоцветковая Шейк Блуберри F1',
        description: 'Для выращивания в кашпо и посадок с большой плотностью растений.',
        image: '/src/assets/images/catalog/prof/petunia_shake_blueberry.jpg',
        price: 40,
        manufacturer: 'Производитель HEMGENETICS - Нидерланды ',
        parameters: 'Высота растения — 20-25 см \n Ширина разрастания — 20-25 см  \n Диаметр цветка — 8-12 см',
        inStock: true,
      },

      {
        title: 'Петуния многоцветковая Шейк Распберри F1',
        description: 'Для кашпо и посадок с большой плотностью растений.',
        image: '/src/assets/images/catalog/prof/petunia_shake_raspberry.jpg',
        price: 40,
        manufacturer: 'Производитель HEMGENETICS - Нидерланды ',
        parameters: 'Высота растения — 20-25 см \n Ширина разрастания — 20-25 см  \n Диаметр цветка — 8-12 см',
        inStock: true,
      },

      {
        title: 'Петуния почвопокровная Гарден Бьюти ',
        description: 'Для кашпо и подвесных корзин, для ландшафтного дизайна, а также для клумб и рабаток.',
        image: '/src/assets/images/catalog/prof/petunia_garden_beauti.jpg',
        price: 90,
        manufacturer: 'Производитель Farao - Италия ',
        parameters: 'Высота растения — 25-30 см \n Длина побегов — 90-100 см  \n Диаметр цветка — 4-5 см',
        inStock: true,
      },




      {
        title: 'Гацания жёстковатая Газу Формула Микс',
        description: 'Для клумб и кашпо.',
        image: '/src/assets/images/catalog/prof/gacania_formula_mix.jpg',
        price: 50,
        manufacturer: 'Производитель Syngenta - Нидерланды',
        parameters: 'Высота растения — 25-30 см   \n Диаметр цветка — 12-14 см',
        inStock: true,
      },


    ]
  },
]

export default catalogGroups