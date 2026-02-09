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
        image: '/src/assets/images/Catalog/seeds/petunia_easy_wave_white.jpg',
        price: 180,
        manufacturer: 'PanAmerican Seed',
        parameters:'Длина побегов — 80-100см \n Диаметр цветка — 5-7см',
        inStock: true,

      },

      {
        title: 'Петуния многоцветковая ампельная «Тайдел Вэйв» Сильвер F1 ',
        description: 'Для кашпо, клумб и цветников',
        image: '/src/assets/images/catalog/seeds/petunia_taidel_wave_silver.jpg',
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
        image: '/src/assets/images/catalog/seeds/petunia_opera_supreme_parpl.jpg',
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
        image: '/src/assets/images/catalog/seeds/petunia_opera_supreme_blue.jpg',
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
        image: '/src/assets/images/catalog/seeds/petunia_opera_supreme_lemon.jpg',
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
        image: '/src/assets/images/catalog/seeds/petunia_opera_supreme_razberi_ice.jpg',
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
        image: '/src/assets/images/catalog/seeds/petunia_opera_supreme_red.jpg',
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
        image: '/src/assets/images/catalog/seeds/petunia_donna_star_red_and_white.jpg',
        price: 40,
        manufacturer: 'Производитель FARAO - Италия',
        parameters: 'Высота растения — 15-20 см\n' +
          'Диаметр цветка — 12-14 см',
        inStock: true,
      },

      {
        title: 'Петуния крупноцветковая Лимбо Джи Пи микс F1',
        description: 'Для горшков, вазонов, контейнеров и высадки в открытый грунт',
        image: '/src/assets/images/catalog/seeds/petunia_limbo_jp_mix.jpg',
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
        image: '/src/assets/images/catalog/seeds/petunia_prism_blue.jpg',
        price: 40,
        manufacturer: 'Производитель HEMGENETICS - Нидерланды',
        parameters: 'Высота растения — 30–40 см\n' + 'Ширина — 30–40 см',
        inStock: true,
      },

      {
        title: 'Петуния крупноцветковая Саксесс 360° Лайт Еллоу F1',
        description: 'Для посадки в горшки, смешанные контейнеры, подвесные кашпо и для ландшафтных посадок в грунт.',
        image: '/src/assets/images/catalog/seeds/petunia_success_360_light_yellow.jpg',
        price: 30,
        manufacturer: 'Производитель Benary- Германия',
        parameters: 'Высота компактного кустика — 20–35 см \n Диаметр цветка — 8-10 см',
        inStock: true,
      },

      {
        title: 'Петуния крупноцветковая Саксесс 360° Ред Стар F1',
        description: 'Для посадки в горшки, смешанные контейнеры, подвесные кашпо и для ландшафтных посадок в грунт.',
        image: '/src/assets/images/catalog/seeds/petunia_success_360_star_red.jpg',
        price: 30,
        manufacturer: 'Производитель Benary- Германия',
        parameters: 'Высота компактного кустика — 30–35 см \n Ширина — 30 см \n Диаметр цветка — 7-10 см',
        inStock: true,
      },

      {
        title: 'Петуния крупноцветковая Саксесс 360° Уайт F1',
        description: 'Для посадки в горшки, смешанные контейнеры, подвесные кашпо и для ландшафтных посадок в грунт.',
        image: '/src/assets/images/catalog/seeds/petunia_success_360_white.jpg',
        price: 30,
        manufacturer: 'Производитель Benary- Германия',
        parameters: 'Высота компактного кустика — 20–35 см  \n Диаметр цветка — 8-10 см',
        inStock: true,
      },

      {
        title: 'Петуния крупноцветковая Саксесс Аш Ди Бургунд F1',
        description: 'Для посадки в подвесные корзины, смешанные контейнеры и цветники открытого грунта.',
        image: '/src/assets/images/catalog/seeds/petunia_success_hd_burgund.jpg',
        price: 30,
        manufacturer: 'Производитель Benary- Германия',
        parameters: 'Высота растения — 18 см \n Ширина разрастания — 28 см  \n Диаметр цветка — 10 см',
        inStock: true,
      },

      {
        title: 'Петуния крупноцветковая Танго Блу Стар F1',
        description: 'Для посадки в горшках, вазонах, контейнеров и выращивания в саду.',
        image: '/src/assets/images/catalog/seeds/petunia_tango_blue_star.jpg',
        price: 30,
        manufacturer: 'Производитель HEMGENETICS - Нидерланды',
        parameters: 'Высота растения — 20-30 см  \n Диаметр цветка — 10-13 см',
        inStock: true,
      },

      {
        title: 'Петуния махровая крупноцветковая Каскаде Бургунди F1',
        description: 'Для создания красивых ландшафтных композиций, украшения клумб, веранд, балконов и беседок.',
        image: '/src/assets/images/catalog/seeds/petunia_kaskade_burgund.jpg',
        price: 40,
        manufacturer: 'Производитель PanAmerican Seed - США',
        parameters: 'Высота компактного кустика — до 35 см  \n Диаметр цветка — 12 см',
        inStock: true,
      },

      {
        title: 'Петуния многоцветковая "Дот Стар Ред F1',
        description: 'Для выращивания в подвесных кашпо, балконных ящиках, контейнерах и клумбах.',
        image: '/src/assets/images/catalog/seeds/petunia_dot_star_red.jpg',
        price: 40,
        manufacturer: 'Производитель Cerny - Чехия ',
        parameters: 'Высота — 25-30 см  \n Диаметр цветка — 6-8 см',
        inStock: true,
      },

      {
        title: 'Петуния многоцветковая Калиффо микс F1',
        description: 'Для выращивания в подвесных кашпо, балконных ящиках, контейнерах и клумбах.',
        image: '/src/assets/images/catalog/seeds/petunia_kaliffo_mix.jpg',
        price: 30,
        manufacturer: 'Производитель FARAO - Италия ',
        parameters: 'Высота растения — 30-35 см  \n Диаметр цветка — 5-8 см',
        inStock: true,
      },

      {
        title: 'Петуния многоцветковая Шейк Блуберри F1',
        description: 'Для выращивания в кашпо и посадок с большой плотностью растений.',
        image: '/src/assets/images/catalog/seeds/petunia_shake_blueberry.jpg',
        price: 40,
        manufacturer: 'Производитель HEMGENETICS - Нидерланды ',
        parameters: 'Высота растения — 20-25 см \n Ширина разрастания — 20-25 см  \n Диаметр цветка — 8-12 см',
        inStock: true,
      },

      {
        title: 'Петуния многоцветковая Шейк Распберри F1',
        description: 'Для кашпо и посадок с большой плотностью растений.',
        image: '/src/assets/images/catalog/seeds/petunia_shake_raspberry.jpg',
        price: 40,
        manufacturer: 'Производитель HEMGENETICS - Нидерланды ',
        parameters: 'Высота растения — 20-25 см \n Ширина разрастания — 20-25 см  \n Диаметр цветка — 8-12 см',
        inStock: true,
      },

      {
        title: 'Петуния почвопокровная Гарден Бьюти ',
        description: 'Для кашпо и подвесных корзин, для ландшафтного дизайна, а также для клумб и рабаток.',
        image: '/src/assets/images/catalog/seeds/petunia_garden_beauti.jpg',
        price: 90,
        manufacturer: 'Производитель Farao - Италия ',
        parameters: 'Высота растения — 25-30 см \n Длина побегов — 90-100 см  \n Диаметр цветка — 4-5 см',
        inStock: true,
      },

      {
        title: 'Петуния ампельная Е3 Изи Вейв Роуз Морн F1',
        description: 'Можно выращивать как во всех типах контейнеров, так и в ландшафтном озеленении – в качестве почвопокровного растения.',
        image: '/src/assets/images/catalog/seeds/petunia_easy_wave_Rose_Morn.jpg',
        price: 180,
        manufacturer: 'PanAmerican Seed - США ',
        parameters: 'Высота растения — 15-30 см \n Ширина — 80-100 см  \n Диаметр цветка — 7-8 см',
        inStock: true,
      },

      {
        title: 'Петунья ампельная F1 Тайдал Вэйв Ред Велюр',
        description: 'Растения отлично подходят для выращивания как почвопокровное. Оно застилает плотным ковром большие площади.',
        image: '/src/assets/images/catalog/seeds/petunia_taidel_wave_red_velur.jpg',
        price: 180,
        manufacturer: 'PanAmerican Seed - США ',
        parameters: 'Высота растения — 45-55 см \n Диаметр — 150 см и более  \n Диаметр цветка — 5-6 см',
        inStock: true,
      },





      {
        title: 'Гацания жёстковатая Газу Формула Микс',
        description: 'Для клумб и кашпо.',
        image: '/src/assets/images/catalog/seeds/gacania_formula_mix.jpg',
        price: 50,
        manufacturer: 'Производитель Syngenta - Нидерланды',
        parameters: 'Высота растения — 25-30 см   \n Диаметр цветка — 12-14 см',
        inStock: true,
      },



      {
        title: 'Петхоа Калиберст Еллоу F1',
        description: 'Подходит для подвесных корзин, кашпо, крупных вазонов.',
        image: '/src/assets/images/catalog/seeds/pethoa_caliberst_yellow.jpg',
        price: 200,
        manufacturer: 'PanAmerican Seed - США ',
        parameters: 'Высота растения — 15-25 см \n Ширина куста — 50-70 см  \n Диаметр цветка — 5-6 см',
        inStock: true,
      },


    ]
  },
  {
    title: 'Проф. семяна овощей',
    items: [
      {
        title: 'Аркано — среднеранний гибрид сладкого перца',
        image: '/src/assets/images/Catalog/vegetables/Arkano.jpg',
        manufacturer: 'Производитель — Sakata(Япония)',
        parameters:'Масса плодов — до 400 г \n Диаметр — 10-11 см \n Длина — 12-14 см ',
        count: 10,
        description: '135 — 140 дней от всходов до начала плодоношения. Красивые выровненные плоды на протяжении всего плодоношения ',
        price: 100,
        inStock: true,

      },

      {
        title: 'Баклажан Эпик F1 — раннеспелый гибрид',
        image: '/src/assets/images/Catalog/vegetables/Epic_F1.jpg',
        manufacturer: 'Производитель — Нидерланды',
        parameters:'Масса плодов — 200-250 г \n Диаметр — 9.5-10 см \n Длина — 20-22 см ',
        count: 10,
        description: 'Мощное, полураскидистое растение, высотой 90-100 см. Стебель зелено-фиолетового цвета, листья среднего размера, овальные, зеленые. ',
        price: 60,
        inStock: true,
      },

      {
        title: 'Томат Президент F1 — ранний высокоурожайный гибрид',
        image: '/src/assets/images/Catalog/vegetables/President_F1.jpg',
        manufacturer: 'Производитель — Seminis (Нидерланды)',
        parameters:'Масса плодов — 200-300 г \n Высота куста — 1-1.5 м',
        count: 5,
        description: 'Предназначен для выращивания в открытом и закрытом грунте. Устойчив к фузариозу, вертициллезу, нематодам, вирусу мозаики, серой пятнистости, альтернариозному раку стебля.',
        price: 100,
        inStock: true,
      },

    ]
  },
  {
    title: 'Гортензии',
    items: [
      {
        title: 'Румянец Ангела',
        image: '/src/assets/images/Catalog/hydrangeas/angels_blush.jpg',
        parameters:
          'Период цветения — июль-октябрь ' +
          '\n Высота кустов — 2.5-3 м ' +
          '\n Диаметр — 1.5 м ' +
          '\n Длина соцветия — до 25 см ' +
          '\n Морозостойкость — до -40°C',
        description:
          'Гигантская метельчатая гортензия с соцветиями конической формы. ' +
          'Используется для зонирования участков, декорирования территорий возле заборов, создания живой изгороди. ' +
          'Одиночные кусты ярко выделяются на фоне зелёного газона.',
        price: 480,
        inStock: true,
      },

      {
        title: 'Полярный медведь',
        image: '/src/assets/images/Catalog/hydrangeas/polar_bear.jpg',
        parameters:
          ' Высота кустов — 2 м ' +
          '\n Диаметр — 1.5 м ' +
          '\n Длина соцветия — 40 см ',
        description:
          'Крупный и раскидистый кустарник. ' +
          'Побеги прямые, очень сильные, не обламываются под тяжестью тяжелых соцветий. ' +
          'Данный вид гортензии прекрасно смотрится в одиночестве, поэтому вы вполне можете посадить всего один куст.',
        price: 480,
        inStock: true,
      },

      {
        title: 'Ванила Фрайз',
        image: '/src/assets/images/Catalog/hydrangeas/vanilla_fries.jpg',
        parameters:
          'Период цветения — июль-октябрь ' +
          '\n Высота кустов — 2 м ' +
          '\n Диаметр — 1.5-2 м ' +
          '\n Длина соцветия — 30 см ',
        description:
          'Ее изюминкой является изменение окраса бутонов в процессе цветения. Роскошный облик сочетается с неприхотливостью содержания и хорошей морозостойкостью.',
        price: 480,
        inStock: true,
      },

      {
        title: 'Фантом',
        image: '/src/assets/images/Catalog/hydrangeas/phantom.jpg',
        parameters:
          ' Высота кустов — 2 м ' +
          '\n Диаметр — 1.5-2 м ' +
          '\n Длина соцветия — 35-40 см ',
        description:
          'Прекрасно адаптируется к суровым условиям. Выдерживает суровые морозы и отлично восстанавливается после зимы. Цветет обильно и красочно. Высриа позволяет выращивать как дерево, и как кустарник',
        price: 480,
        inStock: true,
      },

      {
        title: 'Пинк Даймонд',
        image: '/src/assets/images/Catalog/hydrangeas/pink_diamond.jpg',
        parameters:
          ' Высота кустов — 2-2.5 м ' +
          '\n Диаметр — 2 м ' +
          '\n Длина соцветия — 25-30 см '+
          '\n Морозостойкость высокая',
        description:
          'Сначала соцветия обладают молочно-сливочным оттенком, но со временем темнеют, лепестки становятся кремовой расцветки с розоватым отливом. В процессе цветения цветочки приобретают розовую или красноватую окраску под воздействием солнечного освещения.',
        price: 480,
        inStock: true,
      },

      {
        title: 'Шуга Раш',
        image: '/src/assets/images/Catalog/hydrangeas/sugar_rush.jpg',
        parameters:
          ' Высота кустов — 80 см ' +
          '\n Диаметр — 80 см ' +
          '\n Длина соцветия — 20-30 см '+
          '\n Морозостойкость высокая',
        description:
          'Новый карликовый сорт, который поразит вас своими пышными соцветиями при всей ее компактности. Ее высаживают в вазоны или горшки, чтобы украсить террасы или входную группу. Также она прекрасно будет смотреться в групповых посадках с хвойными растениями.',
        price: 480,
        inStock: true,
      },

      {
        title: 'Белая гора',
        image: '/src/assets/images/Catalog/hydrangeas/magical_mont_blanc.jpg',
        parameters:
          'Период цветения — июль-сентябрь ' +
          '\n Высота кустов — до 120 см ' +
          '\n Диаметр — до 1.5 м ' +
          '\n Длина соцветия — до 25 см ',
        description:
          'Сорт с белоснежными густыми шапками цветков. Ни один сорт не имеет настолько плотных цветко. Плотность настолько великолепная, что соцветия кажутся густо слоеными. Одна из лучших гортензий для эффекта снежных шапок в саду.',
        price: 480,
        inStock: true,
      },

      {
        title: 'Мэджикал свит саммер',
        image: '/src/assets/images/Catalog/hydrangeas/magical_sweet_summer.jpg',
        parameters:
          'Период цветения — июль-октябрь ' +
          '\n Высота кустов — 1.5 м ',
        description:
          'Потрясающий сорт метельчатой гортензии. Обладает очень эффектным внешним видом, отлично смотрится как при наличии цветов, растущих пышными гроздьями, так и без них.',
        price: 480,
        inStock: true,
      },

      {
        title: 'Меджикал Мунлай',
        image: '/src/assets/images/Catalog/hydrangeas/magical_moonlight.jpg',
        parameters:
          ' Высота кустов — 2 м ' +
          '\n Диаметр — 50 см ' +
          '\n Морозостойкость высокая',
        description:
          'Этот шикарный кустарник характеризуется обильным цветением. Особенность куста - он прекрасно растет и в тени и на солнце. Он покрывается бутонами нежных оттенков при этом окрас цветочков зависит от местности, где произрастает растение.',
        price: 650,
        inStock: true,
      },

      {
        title: 'Древовидная гортензия Баунти',
        image: '/src/assets/images/Catalog/hydrangeas/bounty.jpg',
        parameters:
          'Период цветения — июль-сентябрь ' +
          '\n Высота кустов — до 1.5 м ' +
          '\n Диаметр — 20-30 см ' +
          '\n Морозостойкость высокая',
        description:
          'Соцветия белые, огромные, шаровидные. Листья летом темно-зеленые.',
        price: 600,
        inStock: true,
      },

      {
        title: 'Меджикал Килиманджаро',
        image: '/src/assets/images/Catalog/hydrangeas/magical_kilimanjaro.jpg',
        parameters:
          'Период цветения — июль-октябрь ' +
          '\n Высота кустов — 1.5 м ' +
          '\n Диаметр куста — 120-150 см ' +
          '\n Длина соцветия — до 25 см ' +
          '\n Морозостойкость высокая',
        description:
          'Это восхитительный сорт с потрясающим эффектными соцветиями. Прочные побеги отлично держат крупные соцветия, не склоняясь под их тяжестью.',
        price: 600,
        inStock: true,
      },

      {
        title: 'Гортензия карликовая Полистар',
        image: '/src/assets/images/Catalog/hydrangeas/polistar.jpg',
        parameters:
          ' Высота кустов — 50 cм ' +
          '\n Диаметр куста — 30 см ' +
          '\n Ширина — до 50 см ' +
          '\n Морозостойкость высокая',
        description:
          'Относят к одним из самых раннецветущих сортов. Она отилчно выглядит в одиночных посадках. Приобретают специально для балконов и террас.',
        price: 700,
        inStock: true,
      },

      {
        title: 'Пикачу',
        image: '/src/assets/images/Catalog/hydrangeas/pikachu.jpg',
        parameters:
          'Период цветения — июль-октябрь'+
          '\n Высота кустов — до 90 cм ' +
          '\n Диаметр куста — до 90 см ' +
          '\n Ширина — до 50 см ' +
          '\n Морозостойкость высокая',
        description:
          'Это низкорослый кустарник, который быстро растет. Главными преимуществами гортензии этого сорта являются ее компактность, обильное цветение на протяжении всего лета и осени, а также высокая зимостойкость.',
        price: 700,
        inStock: true,
      },



    ]
  },
]

export default catalogGroups