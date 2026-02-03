export const MOCK_COUNTRIES = [
  {
    cca3: "USA", cca2: "US", name: { common: "United States", nativeName: { eng: { common: "United States" } } },
    capital: ["Washington, D.C."], region: "Americas", subregion: "North America", population: 331002651, area: 9833517,
    flags: { svg: "https://flagcdn.com/us.svg" }, coatOfArms: { svg: "https://mainfacts.com/media/images/coats_of_arms/us.svg" },
    currencies: { USD: { name: "United States dollar", symbol: "$" } }, languages: { eng: "English" },
    timezones: ["UTC-05:00"], tld: [".us"], maps: { googleMaps: "https://goo.gl/maps/unUANPbtkSpxTz5q8" }, borders: ["CAN", "MEX"]
  },
  {
    cca3: "FRA", cca2: "FR", name: { common: "France", nativeName: { fra: { common: "France" } } },
    capital: ["Paris"], region: "Europe", subregion: "Western Europe", population: 67391582, area: 551695,
    flags: { svg: "https://flagcdn.com/fr.svg" }, coatOfArms: { svg: "https://mainfacts.com/media/images/coats_of_arms/fr.svg" },
    currencies: { EUR: { name: "Euro", symbol: "€" } }, languages: { fra: "French" },
    timezones: ["UTC+01:00"], tld: [".fr"], maps: { googleMaps: "https://goo.gl/maps/ocV2nSTBkiGZ2ran8" }, borders: ["AND", "BEL", "DEU", "ITA", "LUX", "MCO", "ESP", "CHE"]
  },
  {
    cca3: "JPN", cca2: "JP", name: { common: "Japan", nativeName: { jpn: { common: "日本" } } },
    capital: ["Tokyo"], region: "Asia", subregion: "Eastern Asia", population: 125836021, area: 377930,
    flags: { svg: "https://flagcdn.com/jp.svg" }, coatOfArms: { svg: "https://mainfacts.com/media/images/coats_of_arms/jp.svg" },
    currencies: { JPY: { name: "Japanese yen", symbol: "¥" } }, languages: { jpn: "Japanese" },
    timezones: ["UTC+09:00"], tld: [".jp"], maps: { googleMaps: "https://goo.gl/maps/NGPrZhaMkCH7n2oJ8" }, borders: []
  },
  {
    cca3: "IND", cca2: "IN", name: { common: "India", nativeName: { hin: { common: "भारत" } } },
    capital: ["New Delhi"], region: "Asia", subregion: "Southern Asia", population: 1380004385, area: 3287590,
    flags: { svg: "https://flagcdn.com/in.svg" }, coatOfArms: { svg: "https://mainfacts.com/media/images/coats_of_arms/in.svg" },
    currencies: { INR: { name: "Indian rupee", symbol: "₹" } }, languages: { hin: "Hindi", eng: "English" },
    timezones: ["UTC+05:30"], tld: [".in"], maps: { googleMaps: "https://goo.gl/maps/S1p1CcUp7NmcRE5AR" }, borders: ["BGD", "BTN", "MMR", "CHN", "NPL", "PAK"]
  },
  {
    cca3: "GBR", cca2: "GB", name: { common: "United Kingdom", nativeName: { eng: { common: "United Kingdom" } } },
    capital: ["London"], region: "Europe", subregion: "Northern Europe", population: 67215293, area: 242495,
    flags: { svg: "https://flagcdn.com/gb.svg" }, coatOfArms: { svg: "https://mainfacts.com/media/images/coats_of_arms/gb.svg" },
    currencies: { GBP: { name: "British pound", symbol: "£" } }, languages: { eng: "English" },
    timezones: ["UTC+00:00"], tld: [".uk"], maps: { googleMaps: "https://goo.gl/maps/vqruVgepX8BvcySy8" }, borders: ["IRL"]
  },
  {
    cca3: "DEU", cca2: "DE", name: { common: "Germany", nativeName: { deu: { common: "Deutschland" } } },
    capital: ["Berlin"], region: "Europe", subregion: "Western Europe", population: 83240525, area: 357114,
    flags: { svg: "https://flagcdn.com/de.svg" }, coatOfArms: { svg: "https://mainfacts.com/media/images/coats_of_arms/de.svg" },
    currencies: { EUR: { name: "Euro", symbol: "€" } }, languages: { deu: "German" },
    timezones: ["UTC+01:00"], tld: [".de"], maps: { googleMaps: "https://goo.gl/maps/mD9BBMq1uXjrYwgN9" }, borders: ["AUT", "BEL", "CZE", "DNK", "FRA", "LUX", "NLD", "POL", "CHE"]
  },
  {
    cca3: "CAN", cca2: "CA", name: { common: "Canada", nativeName: { eng: { common: "Canada" }, fra: { common: "Canada" } } },
    capital: ["Ottawa"], region: "Americas", subregion: "North America", population: 38005238, area: 9984670,
    flags: { svg: "https://flagcdn.com/ca.svg" }, coatOfArms: { svg: "https://mainfacts.com/media/images/coats_of_arms/ca.svg" },
    currencies: { CAD: { name: "Canadian dollar", symbol: "$" } }, languages: { eng: "English", fra: "French" },
    timezones: ["UTC-05:00"], tld: [".ca"], maps: { googleMaps: "https://goo.gl/maps/jmEV9ECP7o4Pth9W8" }, borders: ["USA"]
  },
  {
    cca3: "AUS", cca2: "AU", name: { common: "Australia", nativeName: { eng: { common: "Australia" } } },
    capital: ["Canberra"], region: "Oceania", subregion: "Australia and New Zealand", population: 25687041, area: 7692024,
    flags: { svg: "https://flagcdn.com/au.svg" }, coatOfArms: { svg: "https://mainfacts.com/media/images/coats_of_arms/au.svg" },
    currencies: { AUD: { name: "Australian dollar", symbol: "$" } }, languages: { eng: "English" },
    timezones: ["UTC+10:00"], tld: [".au"], maps: { googleMaps: "https://goo.gl/maps/D95uB3U6vax69uOX6" }, borders: []
  },
  {
    cca3: "BRA", cca2: "BR", name: { common: "Brazil", nativeName: { por: { common: "Brasil" } } },
    capital: ["Brasília"], region: "Americas", subregion: "South America", population: 212559417, area: 8515767,
    flags: { svg: "https://flagcdn.com/br.svg" }, coatOfArms: { svg: "https://mainfacts.com/media/images/coats_of_arms/br.svg" },
    currencies: { BRL: { name: "Brazilian real", symbol: "R$" } }, languages: { por: "Portuguese" },
    timezones: ["UTC-03:00"], tld: [".br"], maps: { googleMaps: "https://goo.gl/maps/waCKnu4UUMq1qA7p9" }, borders: ["ARG", "BOL", "COL", "GUF", "GUY", "PRY", "PER", "SUR", "URY", "VEN"]
  },
  {
    cca3: "ITA", cca2: "IT", name: { common: "Italy", nativeName: { ita: { common: "Italia" } } },
    capital: ["Rome"], region: "Europe", subregion: "Southern Europe", population: 59554023, area: 301336,
    flags: { svg: "https://flagcdn.com/it.svg" }, coatOfArms: { svg: "https://mainfacts.com/media/images/coats_of_arms/it.svg" },
    currencies: { EUR: { name: "Euro", symbol: "€" } }, languages: { ita: "Italian" },
    timezones: ["UTC+01:00"], tld: [".it"], maps: { googleMaps: "https://goo.gl/maps/88V2wU9t6IBZran8" }, borders: ["AUT", "FRA", "SMR", "SVN", "CHE", "VAT"]
  },
  {
    cca3: "ESP", cca2: "ES", name: { common: "Spain", nativeName: { spa: { common: "España" } } },
    capital: ["Madrid"], region: "Europe", subregion: "Southern Europe", population: 47351567, area: 505992,
    flags: { svg: "https://flagcdn.com/es.svg" }, coatOfArms: { svg: "https://mainfacts.com/media/images/coats_of_arms/es.svg" },
    currencies: { EUR: { name: "Euro", symbol: "€" } }, languages: { spa: "Spanish" },
    timezones: ["UTC+01:00"], tld: [".es"], maps: { googleMaps: "https://goo.gl/maps/138vA9ot_YvST7t6G" }, borders: ["AND", "FRA", "GIB", "PRT", "MAR"]
  },
  {
    cca3: "CHN", cca2: "CN", name: { common: "China", nativeName: { zho: { common: "中国" } } },
    capital: ["Beijing"], region: "Asia", subregion: "Eastern Asia", population: 1402112000, area: 9640011,
    flags: { svg: "https://flagcdn.com/cn.svg" }, coatOfArms: { svg: "https://mainfacts.com/media/images/coats_of_arms/cn.svg" },
    currencies: { CNY: { name: "Chinese yuan", symbol: "¥" } }, languages: { zho: "Chinese" },
    timezones: ["UTC+08:00"], tld: [".cn"], maps: { googleMaps: "https://goo.gl/maps/p9qC6K_9d76K_9d76" }, borders: ["AFG", "BTN", "MMR", "HKG", "IND", "KAZ", "PRK", "KGZ", "LAO", "MAC", "MNG", "NPL", "PAK", "RUS", "TJK", "VNM"]
  },
  {
    cca3: "RUS", cca2: "RU", name: { common: "Russia", nativeName: { rus: { common: "Россия" } } },
    capital: ["Moscow"], region: "Europe", subregion: "Eastern Europe", population: 144104080, area: 17098242,
    flags: { svg: "https://flagcdn.com/ru.svg" }, coatOfArms: { svg: "https://mainfacts.com/media/images/coats_of_arms/ru.svg" },
    currencies: { RUB: { name: "Russian ruble", symbol: "₽" } }, languages: { rus: "Russian" },
    timezones: ["UTC+03:00"], tld: [".ru"], maps: { googleMaps: "https://goo.gl/maps/uv7Zzbc9mN9m" }, borders: ["AZE", "BLR", "CHN", "EST", "FIN", "GEO", "KAZ", "PRK", "LVA", "LTU", "MNG", "NOR", "POL", "UKR"]
  },
  {
    cca3: "ZAF", cca2: "ZA", name: { common: "South Africa", nativeName: { afr: { common: "Suid-Afrika" }, eng: { common: "South Africa" } } },
    capital: ["Pretoria"], region: "Africa", subregion: "Southern Africa", population: 59308690, area: 1221037,
    flags: { svg: "https://flagcdn.com/za.svg" }, coatOfArms: { svg: "https://mainfacts.com/media/images/coats_of_arms/za.svg" },
    currencies: { ZAR: { name: "South African rand", symbol: "R" } }, languages: { afr: "Afrikaans", eng: "English" },
    timezones: ["UTC+02:00"], tld: [".za"], maps: { googleMaps: "https://goo.gl/maps/7697" }, borders: ["BWA", "LSO", "MOZ", "NAM", "SWZ", "ZWE"]
  },
  {
    cca3: "MEX", cca2: "MX", name: { common: "Mexico", nativeName: { spa: { common: "México" } } },
    capital: ["Mexico City"], region: "Americas", subregion: "North America", population: 128932753, area: 1964375,
    flags: { svg: "https://flagcdn.com/mx.svg" }, coatOfArms: { svg: "https://mainfacts.com/media/images/coats_of_arms/mx.svg" },
    currencies: { MXN: { name: "Mexican peso", symbol: "$" } }, languages: { spa: "Spanish" },
    timezones: ["UTC-06:00"], tld: [".mx"], maps: { googleMaps: "https://goo.gl/maps/mx" }, borders: ["BLZ", "GTM", "USA"]
  },
  {
    cca3: "ARG", cca2: "AR", name: { common: "Argentina", nativeName: { spa: { common: "Argentina" } } },
    capital: ["Buenos Aires"], region: "Americas", subregion: "South America", population: 45376763, area: 2780400,
    flags: { svg: "https://flagcdn.com/ar.svg" }, coatOfArms: { svg: "https://mainfacts.com/media/images/coats_of_arms/ar.svg" },
    currencies: { ARS: { name: "Argentine peso", symbol: "$" } }, languages: { spa: "Spanish" },
    timezones: ["UTC-03:00"], tld: [".ar"], maps: { googleMaps: "https://goo.gl/maps/ar" }, borders: ["BOL", "BRA", "CHL", "PRY", "URY"]
  },
  {
    cca3: "KOR", cca2: "KR", name: { common: "South Korea", nativeName: { kor: { common: "대한민국" } } },
    capital: ["Seoul"], region: "Asia", subregion: "Eastern Asia", population: 51780579, area: 100210,
    flags: { svg: "https://flagcdn.com/kr.svg" }, coatOfArms: { svg: "https://mainfacts.com/media/images/coats_of_arms/kr.svg" },
    currencies: { KRW: { name: "South Korean won", symbol: "₩" } }, languages: { kor: "Korean" },
    timezones: ["UTC+09:00"], tld: [".kr"], maps: { googleMaps: "https://goo.gl/maps/kr" }, borders: ["PRK"]
  },
  {
    cca3: "TUR", cca2: "TR", name: { common: "Turkey", nativeName: { tur: { common: "Türkiye" } } },
    capital: ["Ankara"], region: "Asia", subregion: "Western Asia", population: 84339067, area: 783562,
    flags: { svg: "https://flagcdn.com/tr.svg" }, coatOfArms: { svg: "https://mainfacts.com/media/images/coats_of_arms/tr.svg" },
    currencies: { TRY: { name: "Turkish lira", symbol: "₺" } }, languages: { tur: "Turkish" },
    timezones: ["UTC+03:00"], tld: [".tr"], maps: { googleMaps: "https://goo.gl/maps/tr" }, borders: ["ARM", "AZE", "BGR", "GEO", "GRC", "IRN", "IRQ", "SYR"]
  },
  {
    cca3: "SAU", cca2: "SA", name: { common: "Saudi Arabia", nativeName: { ara: { common: "العربية السعودية" } } },
    capital: ["Riyadh"], region: "Asia", subregion: "Western Asia", population: 34813867, area: 2149690,
    flags: { svg: "https://flagcdn.com/sa.svg" }, coatOfArms: { svg: "https://mainfacts.com/media/images/coats_of_arms/sa.svg" },
    currencies: { SAR: { name: "Saudi riyal", symbol: "ر.س" } }, languages: { ara: "Arabic" },
    timezones: ["UTC+03:00"], tld: [".sa"], maps: { googleMaps: "https://goo.gl/maps/sa" }, borders: ["IRQ", "JOR", "KWT", "OMN", "QAT", "ARE", "YEM"]
  },
  {
    cca3: "EGY", cca2: "EG", name: { common: "Egypt", nativeName: { ara: { common: "مصر" } } },
    capital: ["Cairo"], region: "Africa", subregion: "Northern Africa", population: 102334403, area: 1002450,
    flags: { svg: "https://flagcdn.com/eg.svg" }, coatOfArms: { svg: "https://mainfacts.com/media/images/coats_of_arms/eg.svg" },
    currencies: { EGP: { name: "Egyptian pound", symbol: "E£" } }, languages: { ara: "Arabic" },
    timezones: ["UTC+02:00"], tld: [".eg"], maps: { googleMaps: "https://goo.gl/maps/eg" }, borders: ["ISR", "LBY", "PSE", "SDN"]
  },
  {
    cca3: "NGA", cca2: "NG", name: { common: "Nigeria", nativeName: { eng: { common: "Nigeria" } } },
    capital: ["Abuja"], region: "Africa", subregion: "Western Africa", population: 206139587, area: 923768,
    flags: { svg: "https://flagcdn.com/ng.svg" }, coatOfArms: { svg: "https://mainfacts.com/media/images/coats_of_arms/ng.svg" },
    currencies: { NGN: { name: "Nigerian naira", symbol: "₦" } }, languages: { eng: "English" },
    timezones: ["UTC+01:00"], tld: [".ng"], maps: { googleMaps: "https://goo.gl/maps/ng" }, borders: ["BEN", "CMR", "TCD", "NER"]
  },
  {
    cca3: "IDN", cca2: "ID", name: { common: "Indonesia", nativeName: { ind: { common: "Indonesia" } } },
    capital: ["Jakarta"], region: "Asia", subregion: "South-Eastern Asia", population: 273523621, area: 1904569,
    flags: { svg: "https://flagcdn.com/id.svg" }, coatOfArms: { svg: "https://mainfacts.com/media/images/coats_of_arms/id.svg" },
    currencies: { IDR: { name: "Indonesian rupiah", symbol: "Rp" } }, languages: { ind: "Indonesian" },
    timezones: ["UTC+07:00"], tld: [".id"], maps: { googleMaps: "https://goo.gl/maps/id" }, borders: ["TLS", "MYS", "PNG"]
  },
  {
    cca3: "PAK", cca2: "PK", name: { common: "Pakistan", nativeName: { urd: { common: "پاکستان" } } },
    capital: ["Islamabad"], region: "Asia", subregion: "Southern Asia", population: 220892331, area: 881912,
    flags: { svg: "https://flagcdn.com/pk.svg" }, coatOfArms: { svg: "https://mainfacts.com/media/images/coats_of_arms/pk.svg" },
    currencies: { PKR: { name: "Pakistani rupee", symbol: "₨" } }, languages: { eng: "English", urd: "Urdu" },
    timezones: ["UTC+05:00"], tld: [".pk"], maps: { googleMaps: "https://goo.gl/maps/pk" }, borders: ["AFG", "CHN", "IND", "IRN"]
  },
  {
    cca3: "VNM", cca2: "VN", name: { common: "Vietnam", nativeName: { vie: { common: "Việt Nam" } } },
    capital: ["Hanoi"], region: "Asia", subregion: "South-Eastern Asia", population: 97338583, area: 331212,
    flags: { svg: "https://flagcdn.com/vn.svg" }, coatOfArms: { svg: "https://mainfacts.com/media/images/coats_of_arms/vn.svg" },
    currencies: { VND: { name: "Vietnamese đồng", symbol: "₫" } }, languages: { vie: "Vietnamese" },
    timezones: ["UTC+07:00"], tld: [".vn"], maps: { googleMaps: "https://goo.gl/maps/vn" }, borders: ["KHM", "CHN", "LAO"]
  },
  {
    cca3: "THA", cca2: "TH", name: { common: "Thailand", nativeName: { tha: { common: "ประเทศไทย" } } },
    capital: ["Bangkok"], region: "Asia", subregion: "South-Eastern Asia", population: 69799978, area: 513120,
    flags: { svg: "https://flagcdn.com/th.svg" }, coatOfArms: { svg: "https://mainfacts.com/media/images/coats_of_arms/th.svg" },
    currencies: { THB: { name: "Thai baht", symbol: "฿" } }, languages: { tha: "Thai" },
    timezones: ["UTC+07:00"], tld: [".th"], maps: { googleMaps: "https://goo.gl/maps/th" }, borders: ["MMR", "KHM", "LAO", "MYS"]
  },
  {
    cca3: "PHL", cca2: "PH", name: { common: "Philippines", nativeName: { eng: { common: "Philippines" }, fil: { common: "Pilipinas" } } },
    capital: ["Manila"], region: "Asia", subregion: "South-Eastern Asia", population: 109581085, area: 300000,
    flags: { svg: "https://flagcdn.com/ph.svg" }, coatOfArms: { svg: "https://mainfacts.com/media/images/coats_of_arms/ph.svg" },
    currencies: { PHP: { name: "Philippine peso", symbol: "₱" } }, languages: { eng: "English", fil: "Filipino" },
    timezones: ["UTC+08:00"], tld: [".ph"], maps: { googleMaps: "https://goo.gl/maps/ph" }, borders: []
  },
  {
    cca3: "SGP", cca2: "SG", name: { common: "Singapore", nativeName: { zho: { common: "新加坡" }, eng: { common: "Singapore" }, msa: { common: "Singapura" }, tam: { common: "சிங்கப்பூர்" } } },
    capital: ["Singapore"], region: "Asia", subregion: "South-Eastern Asia", population: 5850342, area: 710,
    flags: { svg: "https://flagcdn.com/sg.svg" }, coatOfArms: { svg: "https://mainfacts.com/media/images/coats_of_arms/sg.svg" },
    currencies: { SGD: { name: "Singapore dollar", symbol: "$" } }, languages: { zho: "Chinese", eng: "English", msa: "Malay", tam: "Tamil" },
    timezones: ["UTC+08:00"], tld: [".sg"], maps: { googleMaps: "https://goo.gl/maps/sg" }, borders: []
  },
  {
    cca3: "ARE", cca2: "AE", name: { common: "United Arab Emirates", nativeName: { ara: { common: "الإمارات العربية المتحدة" } } },
    capital: ["Abu Dhabi"], region: "Asia", subregion: "Western Asia", population: 9890400, area: 83600,
    flags: { svg: "https://flagcdn.com/ae.svg" }, coatOfArms: { svg: "https://mainfacts.com/media/images/coats_of_arms/ae.svg" },
    currencies: { AED: { name: "United Arab Emirates dirham", symbol: "د.إ" } }, languages: { ara: "Arabic" },
    timezones: ["UTC+04:00"], tld: [".ae"], maps: { googleMaps: "https://goo.gl/maps/ae" }, borders: ["OMN", "SAU"]
  },
  {
    cca3: "ISR", cca2: "IL", name: { common: "Israel", nativeName: { heb: { common: "ישראל" } } },
    capital: ["Jerusalem"], region: "Asia", subregion: "Western Asia", population: 9216900, area: 20770,
    flags: { svg: "https://flagcdn.com/il.svg" }, coatOfArms: { svg: "https://mainfacts.com/media/images/coats_of_arms/il.svg" },
    currencies: { ILS: { name: "Israeli new shekel", symbol: "₪" } }, languages: { ara: "Arabic", heb: "Hebrew" },
    timezones: ["UTC+02:00"], tld: [".il"], maps: { googleMaps: "https://goo.gl/maps/il" }, borders: ["EGY", "JOR", "LBN", "SYR"]
  },
  {
    cca3: "NLD", cca2: "NL", name: { common: "Netherlands", nativeName: { nld: { common: "Nederland" } } },
    capital: ["Amsterdam"], region: "Europe", subregion: "Western Europe", population: 17441139, area: 41850,
    flags: { svg: "https://flagcdn.com/nl.svg" }, coatOfArms: { svg: "https://mainfacts.com/media/images/coats_of_arms/nl.svg" },
    currencies: { EUR: { name: "Euro", symbol: "€" } }, languages: { nld: "Dutch" },
    timezones: ["UTC+01:00"], tld: [".nl"], maps: { googleMaps: "https://goo.gl/maps/nl" }, borders: ["BEL", "DEU"]
  },
  {
    cca3: "BEL", cca2: "BE", name: { common: "Belgium", nativeName: { fra: { common: "Belgique" }, deu: { common: "Belgien" }, nld: { common: "België" } } },
    capital: ["Brussels"], region: "Europe", subregion: "Western Europe", population: 11555997, area: 30528,
    flags: { svg: "https://flagcdn.com/be.svg" }, coatOfArms: { svg: "https://mainfacts.com/media/images/coats_of_arms/be.svg" },
    currencies: { EUR: { name: "Euro", symbol: "€" } }, languages: { deu: "German", fra: "French", nld: "Dutch" },
    timezones: ["UTC+01:00"], tld: [".be"], maps: { googleMaps: "https://goo.gl/maps/be" }, borders: ["FRA", "DEU", "LUX", "NLD"]
  },
  {
    cca3: "CHE", cca2: "CH", name: { common: "Switzerland", nativeName: { fra: { common: "Suisse" }, deu: { common: "Schweiz" }, ita: { common: "Svizzera" }, roh: { common: "Svizra" } } },
    capital: ["Bern"], region: "Europe", subregion: "Western Europe", population: 8636896, area: 41284,
    flags: { svg: "https://flagcdn.com/ch.svg" }, coatOfArms: { svg: "https://mainfacts.com/media/images/coats_of_arms/ch.svg" },
    currencies: { CHF: { name: "Swiss franc", symbol: "Fr." } }, languages: { deu: "German", fra: "French", ita: "Italian", roh: "Romansh" },
    timezones: ["UTC+01:00"], tld: [".ch"], maps: { googleMaps: "https://goo.gl/maps/ch" }, borders: ["AUT", "FRA", "DEU", "ITA", "LIE"]
  },
  {
    cca3: "SWE", cca2: "SE", name: { common: "Sweden", nativeName: { swe: { common: "Sverige" } } },
    capital: ["Stockholm"], region: "Europe", subregion: "Northern Europe", population: 10353442, area: 450295,
    flags: { svg: "https://flagcdn.com/se.svg" }, coatOfArms: { svg: "https://mainfacts.com/media/images/coats_of_arms/se.svg" },
    currencies: { SEK: { name: "Swedish krona", symbol: "kr" } }, languages: { swe: "Swedish" },
    timezones: ["UTC+01:00"], tld: [".se"], maps: { googleMaps: "https://goo.gl/maps/se" }, borders: ["FIN", "NOR"]
  },
  {
    cca3: "NOR", cca2: "NO", name: { common: "Norway", nativeName: { nno: { common: "Noreg" }, nob: { common: "Norge" } } },
    capital: ["Oslo"], region: "Europe", subregion: "Northern Europe", population: 5379475, area: 323802,
    flags: { svg: "https://flagcdn.com/no.svg" }, coatOfArms: { svg: "https://mainfacts.com/media/images/coats_of_arms/no.svg" },
    currencies: { NOK: { name: "Norwegian krone", symbol: "kr" } }, languages: { nno: "Norwegian Nynorsk", nob: "Norwegian Bokmål" },
    timezones: ["UTC+01:00"], tld: [".no"], maps: { googleMaps: "https://goo.gl/maps/no" }, borders: ["FIN", "SWE", "RUS"]
  },
  {
    cca3: "DNK", cca2: "DK", name: { common: "Denmark", nativeName: { dan: { common: "Danmark" } } },
    capital: ["Copenhagen"], region: "Europe", subregion: "Northern Europe", population: 5831404, area: 43094,
    flags: { svg: "https://flagcdn.com/dk.svg" }, coatOfArms: { svg: "https://mainfacts.com/media/images/coats_of_arms/dk.svg" },
    currencies: { DKK: { name: "Danish krone", symbol: "kr" } }, languages: { dan: "Danish" },
    timezones: ["UTC+01:00"], tld: [".dk"], maps: { googleMaps: "https://goo.gl/maps/dk" }, borders: ["DEU"]
  },
  {
    cca3: "FIN", cca2: "FI", name: { common: "Finland", nativeName: { fin: { common: "Suomi" }, swe: { common: "Finland" } } },
    capital: ["Helsinki"], region: "Europe", subregion: "Northern Europe", population: 5530719, area: 338424,
    flags: { svg: "https://flagcdn.com/fi.svg" }, coatOfArms: { svg: "https://mainfacts.com/media/images/coats_of_arms/fi.svg" },
    currencies: { EUR: { name: "Euro", symbol: "€" } }, languages: { fin: "Finnish", swe: "Swedish" },
    timezones: ["UTC+02:00"], tld: [".fi"], maps: { googleMaps: "https://goo.gl/maps/fi" }, borders: ["NOR", "SWE", "RUS"]
  },
  {
    cca3: "GRC", cca2: "GR", name: { common: "Greece", nativeName: { ell: { common: "Ελλάδα" } } },
    capital: ["Athens"], region: "Europe", subregion: "Southern Europe", population: 10715549, area: 131990,
    flags: { svg: "https://flagcdn.com/gr.svg" }, coatOfArms: { svg: "https://mainfacts.com/media/images/coats_of_arms/gr.svg" },
    currencies: { EUR: { name: "Euro", symbol: "€" } }, languages: { ell: "Greek" },
    timezones: ["UTC+02:00"], tld: [".gr"], maps: { googleMaps: "https://goo.gl/maps/gr" }, borders: ["ALB", "BGR", "TUR", "MKD"]
  },
  {
    cca3: "POL", cca2: "PL", name: { common: "Poland", nativeName: { pol: { common: "Polska" } } },
    capital: ["Warsaw"], region: "Europe", subregion: "Central Europe", population: 37950802, area: 312679,
    flags: { svg: "https://flagcdn.com/pl.svg" }, coatOfArms: { svg: "https://mainfacts.com/media/images/coats_of_arms/pl.svg" },
    currencies: { PLN: { name: "Polish złoty", symbol: "zł" } }, languages: { pol: "Polish" },
    timezones: ["UTC+01:00"], tld: [".pl"], maps: { googleMaps: "https://goo.gl/maps/pl" }, borders: ["BLR", "CZE", "DEU", "LTU", "RUS", "SVK", "UKR"]
  },
  {
    cca3: "PRT", cca2: "PT", name: { common: "Portugal", nativeName: { por: { common: "Portugal" } } },
    capital: ["Lisbon"], region: "Europe", subregion: "Southern Europe", population: 10305564, area: 92090,
    flags: { svg: "https://flagcdn.com/pt.svg" }, coatOfArms: { svg: "https://mainfacts.com/media/images/coats_of_arms/pt.svg" },
    currencies: { EUR: { name: "Euro", symbol: "€" } }, languages: { por: "Portuguese" },
    timezones: ["UTC-01:00"], tld: [".pt"], maps: { googleMaps: "https://goo.gl/maps/pt" }, borders: ["ESP"]
  },
  {
    cca3: "NZL", cca2: "NZ", name: { common: "New Zealand", nativeName: { eng: { common: "New Zealand" }, mri: { common: "Aotearoa" } } },
    capital: ["Wellington"], region: "Oceania", subregion: "Australia and New Zealand", population: 5084300, area: 270467,
    flags: { svg: "https://flagcdn.com/nz.svg" }, coatOfArms: { svg: "https://mainfacts.com/media/images/coats_of_arms/nz.svg" },
    currencies: { NZD: { name: "New Zealand dollar", symbol: "$" } }, languages: { eng: "English", mri: "Maori" },
    timezones: ["UTC+12:00"], tld: [".nz"], maps: { googleMaps: "https://goo.gl/maps/nz" }, borders: []
  },
  {
    cca3: "AUT", cca2: "AT", name: { common: "Austria", nativeName: { deu: { common: "Österreich" } } },
    capital: ["Vienna"], region: "Europe", subregion: "Central Europe", population: 8917205, area: 83871,
    flags: { svg: "https://flagcdn.com/at.svg" }, coatOfArms: { svg: "https://mainfacts.com/media/images/coats_of_arms/at.svg" },
    currencies: { EUR: { name: "Euro", symbol: "€" } }, languages: { deu: "German" },
    timezones: ["UTC+01:00"], tld: [".at"], maps: { googleMaps: "https://goo.gl/maps/at" }, borders: ["CZE", "DEU", "HUN", "ITA", "LIE", "SVK", "SVN", "CHE"]
  },
  {
    cca3: "IRL", cca2: "IE", name: { common: "Ireland", nativeName: { eng: { common: "Ireland" }, gle: { common: "Éire" } } },
    capital: ["Dublin"], region: "Europe", subregion: "Northern Europe", population: 4994724, area: 70273,
    flags: { svg: "https://flagcdn.com/ie.svg" }, coatOfArms: { svg: "https://mainfacts.com/media/images/coats_of_arms/ie.svg" },
    currencies: { EUR: { name: "Euro", symbol: "€" } }, languages: { eng: "English", gle: "Irish" },
    timezones: ["UTC+00:00"], tld: [".ie"], maps: { googleMaps: "https://goo.gl/maps/ie" }, borders: ["GBR"]
  },
  {
    cca3: "COL", cca2: "CO", name: { common: "Colombia", nativeName: { spa: { common: "Colombia" } } },
    capital: ["Bogotá"], region: "Americas", subregion: "South America", population: 50882884, area: 1141748,
    flags: { svg: "https://flagcdn.com/co.svg" }, coatOfArms: { svg: "https://mainfacts.com/media/images/coats_of_arms/co.svg" },
    currencies: { COP: { name: "Colombian peso", symbol: "$" } }, languages: { spa: "Spanish" },
    timezones: ["UTC-05:00"], tld: [".co"], maps: { googleMaps: "https://goo.gl/maps/co" }, borders: ["BRA", "ECU", "PAN", "PER", "VEN"]
  },
  {
    cca3: "CHL", cca2: "CL", name: { common: "Chile", nativeName: { spa: { common: "Chile" } } },
    capital: ["Santiago"], region: "Americas", subregion: "South America", population: 19116209, area: 756102,
    flags: { svg: "https://flagcdn.com/cl.svg" }, coatOfArms: { svg: "https://mainfacts.com/media/images/coats_of_arms/cl.svg" },
    currencies: { CLP: { name: "Chilean peso", symbol: "$" } }, languages: { spa: "Spanish" },
    timezones: ["UTC-04:00"], tld: [".cl"], maps: { googleMaps: "https://goo.gl/maps/cl" }, borders: ["ARG", "BOL", "PER"]
  },
  {
    cca3: "PER", cca2: "PE", name: { common: "Peru", nativeName: { aym: { common: "Peru" }, que: { common: "Peru" }, spa: { common: "Perú" } } },
    capital: ["Lima"], region: "Americas", subregion: "South America", population: 32971846, area: 1285216,
    flags: { svg: "https://flagcdn.com/pe.svg" }, coatOfArms: { svg: "https://mainfacts.com/media/images/coats_of_arms/pe.svg" },
    currencies: { PEN: { name: "Peruvian sol", symbol: "S/." } }, languages: { aym: "Aymara", que: "Quechua", spa: "Spanish" },
    timezones: ["UTC-05:00"], tld: [".pe"], maps: { googleMaps: "https://goo.gl/maps/pe" }, borders: ["BOL", "BRA", "CHL", "COL", "ECU"]
  },
  {
    cca3: "KAZ", cca2: "KZ", name: { common: "Kazakhstan", nativeName: { kaz: { common: "Қазақстан" }, rus: { common: "Казахстан" } } },
    capital: ["Nur-Sultan"], region: "Asia", subregion: "Central Asia", population: 18776707, area: 2724900,
    flags: { svg: "https://flagcdn.com/kz.svg" }, coatOfArms: { svg: "https://mainfacts.com/media/images/coats_of_arms/kz.svg" },
    currencies: { KZT: { name: "Kazakhstani tenge", symbol: "₸" } }, languages: { kaz: "Kazakh", rus: "Russian" },
    timezones: ["UTC+05:00"], tld: [".kz"], maps: { googleMaps: "https://goo.gl/maps/kz" }, borders: ["CHN", "KGZ", "RUS", "TJK", "UZB"]
  },
  {
    cca3: "UKR", cca2: "UA", name: { common: "Ukraine", nativeName: { ukr: { common: "Україна" } } },
    capital: ["Kyiv"], region: "Europe", subregion: "Eastern Europe", population: 44134693, area: 603500,
    flags: { svg: "https://flagcdn.com/ua.svg" }, coatOfArms: { svg: "https://mainfacts.com/media/images/coats_of_arms/ua.svg" },
    currencies: { UAH: { name: "Ukrainian hryvnia", symbol: "₴" } }, languages: { ukr: "Ukrainian" },
    timezones: ["UTC+02:00"], tld: [".ua"], maps: { googleMaps: "https://goo.gl/maps/ua" }, borders: ["BLR", "HUN", "MDA", "POL", "ROU", "RUS", "SVK"]
  },
  {
    cca3: "HUN", cca2: "HU", name: { common: "Hungary", nativeName: { hun: { common: "Magyarország" } } },
    capital: ["Budapest"], region: "Europe", subregion: "Central Europe", population: 9749763, area: 93028,
    flags: { svg: "https://flagcdn.com/hu.svg" }, coatOfArms: { svg: "https://mainfacts.com/media/images/coats_of_arms/hu.svg" },
    currencies: { HUF: { name: "Hungarian forint", symbol: "Ft" } }, languages: { hun: "Hungarian" },
    timezones: ["UTC+01:00"], tld: [".hu"], maps: { googleMaps: "https://goo.gl/maps/hu" }, borders: ["AUT", "HRV", "ROU", "SRB", "SVK", "SVN", "UKR"]
  },
  {
    cca3: "CZE", cca2: "CZ", name: { common: "Czechia", nativeName: { ces: { common: "Česko" }, slk: { common: "Česko" } } },
    capital: ["Prague"], region: "Europe", subregion: "Central Europe", population: 10698896, area: 78865,
    flags: { svg: "https://flagcdn.com/cz.svg" }, coatOfArms: { svg: "https://mainfacts.com/media/images/coats_of_arms/cz.svg" },
    currencies: { CZK: { name: "Czech koruna", symbol: "Kč" } }, languages: { ces: "Czech", slk: "Slovak" },
    timezones: ["UTC+01:00"], tld: [".cz"], maps: { googleMaps: "https://goo.gl/maps/cz" }, borders: ["AUT", "DEU", "POL", "SVK"]
  },
  {
    cca3: "AFG", cca2: "AF", name: { common: "Afghanistan", nativeName: { prs: { common: "افغانستان" }, pus: { common: "افغانستان" }, tut: { common: "افغانستان" } } },
    capital: ["Kabul"], region: "Asia", subregion: "Southern Asia", population: 38928341, area: 652230,
    flags: { svg: "https://flagcdn.com/af.svg" }, coatOfArms: { svg: "https://mainfacts.com/media/images/coats_of_arms/af.svg" },
    currencies: { AFN: { name: "Afghan afghani", symbol: "؋" } }, languages: { prs: "Dari", pus: "Pashto", tut: "Turkmen" },
    timezones: ["UTC+04:30"], tld: [".af"], maps: { googleMaps: "https://goo.gl/maps/af" }, borders: ["IRN", "PAK", "TKM", "UZB", "TJK", "CHN"]
  },
  {
    cca3: "ALB", cca2: "AL", name: { common: "Albania", nativeName: { sqi: { common: "Shqipëria" } } },
    capital: ["Tirana"], region: "Europe", subregion: "Southeast Europe", population: 2837743, area: 28748,
    flags: { svg: "https://flagcdn.com/al.svg" }, coatOfArms: { svg: "https://mainfacts.com/media/images/coats_of_arms/al.svg" },
    currencies: { ALL: { name: "Albanian lek", symbol: "L" } }, languages: { sqi: "Albanian" },
    timezones: ["UTC+01:00"], tld: [".al"], maps: { googleMaps: "https://goo.gl/maps/al" }, borders: ["MNE", "GRC", "MKD", "KOS"]
  },
  {
    cca3: "DZA", cca2: "DZ", name: { common: "Algeria", nativeName: { ara: { common: "الجزائر" } } },
    capital: ["Algiers"], region: "Africa", subregion: "Northern Africa", population: 43851043, area: 2381741,
    flags: { svg: "https://flagcdn.com/dz.svg" }, coatOfArms: { svg: "https://mainfacts.com/media/images/coats_of_arms/dz.svg" },
    currencies: { DZD: { name: "Algerian dinar", symbol: "د.ج" } }, languages: { ara: "Arabic" },
    timezones: ["UTC+01:00"], tld: [".dz"], maps: { googleMaps: "https://goo.gl/maps/dz" }, borders: ["TUN", "LBY", "NER", "MLI", "MRT", "ESH", "MAR"]
  },
  {
    cca3: "AND", cca2: "AD", name: { common: "Andorra", nativeName: { cat: { common: "Andorra" } } },
    capital: ["Andorra la Vella"], region: "Europe", subregion: "Southern Europe", population: 77265, area: 468,
    flags: { svg: "https://flagcdn.com/ad.svg" }, coatOfArms: { svg: "https://mainfacts.com/media/images/coats_of_arms/ad.svg" },
    currencies: { EUR: { name: "Euro", symbol: "€" } }, languages: { cat: "Catalan" },
    timezones: ["UTC+01:00"], tld: [".ad"], maps: { googleMaps: "https://goo.gl/maps/ad" }, borders: ["FRA", "ESP"]
  },
  {
    cca3: "AGO", cca2: "AO", name: { common: "Angola", nativeName: { por: { common: "Angola" } } },
    capital: ["Luanda"], region: "Africa", subregion: "Middle Africa", population: 32866268, area: 1246700,
    flags: { svg: "https://flagcdn.com/ao.svg" }, coatOfArms: { svg: "https://mainfacts.com/media/images/coats_of_arms/ao.svg" },
    currencies: { AOA: { name: "Angolan kwanza", symbol: "Kz" } }, languages: { por: "Portuguese" },
    timezones: ["UTC+01:00"], tld: [".ao"], maps: { googleMaps: "https://goo.gl/maps/ao" }, borders: ["COG", "COD", "ZMB", "NAM"]
  },
  {
    cca3: "ATG", cca2: "AG", name: { common: "Antigua and Barbuda", nativeName: { eng: { common: "Antigua and Barbuda" } } },
    capital: ["Saint John's"], region: "Americas", subregion: "Caribbean", population: 97928, area: 442,
    flags: { svg: "https://flagcdn.com/ag.svg" }, coatOfArms: { svg: "https://mainfacts.com/media/images/coats_of_arms/ag.svg" },
    currencies: { XCD: { name: "East Caribbean dollar", symbol: "$" } }, languages: { eng: "English" },
    timezones: ["UTC-04:00"], tld: [".ag"], maps: { googleMaps: "https://goo.gl/maps/ag" }, borders: []
  },
  {
    cca3: "ARM", cca2: "AM", name: { common: "Armenia", nativeName: { hye: { common: "Հայաստան" } } },
    capital: ["Yerevan"], region: "Asia", subregion: "Western Asia", population: 2963234, area: 29743,
    flags: { svg: "https://flagcdn.com/am.svg" }, coatOfArms: { svg: "https://mainfacts.com/media/images/coats_of_arms/am.svg" },
    currencies: { AMD: { name: "Armenian dram", symbol: "֏" } }, languages: { hye: "Armenian" },
    timezones: ["UTC+04:00"], tld: [".am"], maps: { googleMaps: "https://goo.gl/maps/am" }, borders: ["AZE", "GEO", "IRN", "TUR"]
  },
  {
    cca3: "AZE", cca2: "AZ", name: { common: "Azerbaijan", nativeName: { aze: { common: "Azərbaycan" } } },
    capital: ["Baku"], region: "Asia", subregion: "Western Asia", population: 10110116, area: 86600,
    flags: { svg: "https://flagcdn.com/az.svg" }, coatOfArms: { svg: "https://mainfacts.com/media/images/coats_of_arms/az.svg" },
    currencies: { AZN: { name: "Azerbaijani manat", symbol: "₼" } }, languages: { aze: "Azerbaijani" },
    timezones: ["UTC+04:00"], tld: [".az"], maps: { googleMaps: "https://goo.gl/maps/az" }, borders: ["ARM", "GEO", "IRN", "RUS", "TUR"]
  },
  {
    cca3: "BHS", cca2: "BS", name: { common: "Bahamas", nativeName: { eng: { common: "Bahamas" } } },
    capital: ["Nassau"], region: "Americas", subregion: "Caribbean", population: 393248, area: 13943,
    flags: { svg: "https://flagcdn.com/bs.svg" }, coatOfArms: { svg: "https://mainfacts.com/media/images/coats_of_arms/bs.svg" },
    currencies: { BSD: { name: "Bahamian dollar", symbol: "$" }, USD: { name: "United States dollar", symbol: "$" } }, languages: { eng: "English" },
    timezones: ["UTC-05:00"], tld: [".bs"], maps: { googleMaps: "https://goo.gl/maps/bs" }, borders: []
  },
  {
    cca3: "BHR", cca2: "BH", name: { common: "Bahrain", nativeName: { ara: { common: "البحرين" } } },
    capital: ["Manama"], region: "Asia", subregion: "Western Asia", population: 1701583, area: 765,
    flags: { svg: "https://flagcdn.com/bh.svg" }, coatOfArms: { svg: "https://mainfacts.com/media/images/coats_of_arms/bh.svg" },
    currencies: { BHD: { name: "Bahraini dinar", symbol: ".د.ب" } }, languages: { ara: "Arabic" },
    timezones: ["UTC+03:00"], tld: [".bh"], maps: { googleMaps: "https://goo.gl/maps/bh" }, borders: []
  },
  {
    cca3: "BGD", cca2: "BD", name: { common: "Bangladesh", nativeName: { ben: { common: "বাংলাদেশ" } } },
    capital: ["Dhaka"], region: "Asia", subregion: "Southern Asia", population: 164689383, area: 147570,
    flags: { svg: "https://flagcdn.com/bd.svg" }, coatOfArms: { svg: "https://mainfacts.com/media/images/coats_of_arms/bd.svg" },
    currencies: { BDT: { name: "Bangladeshi taka", symbol: "৳" } }, languages: { ben: "Bengali" },
    timezones: ["UTC+06:00"], tld: [".bd"], maps: { googleMaps: "https://goo.gl/maps/bd" }, borders: ["MMR", "IND"]
  },
  {
    cca3: "BRB", cca2: "BB", name: { common: "Barbados", nativeName: { eng: { common: "Barbados" } } },
    capital: ["Bridgetown"], region: "Americas", subregion: "Caribbean", population: 287371, area: 430,
    flags: { svg: "https://flagcdn.com/bb.svg" }, coatOfArms: { svg: "https://mainfacts.com/media/images/coats_of_arms/bb.svg" },
    currencies: { BBD: { name: "Barbadian dollar", symbol: "$" } }, languages: { eng: "English" },
    timezones: ["UTC-04:00"], tld: [".bb"], maps: { googleMaps: "https://goo.gl/maps/bb" }, borders: []
  },
  {
    cca3: "BLR", cca2: "BY", name: { common: "Belarus", nativeName: { bel: { common: "Беларусь" }, rus: { common: "Беларусь" } } },
    capital: ["Minsk"], region: "Europe", subregion: "Eastern Europe", population: 9398861, area: 207600,
    flags: { svg: "https://flagcdn.com/by.svg" }, coatOfArms: { svg: "https://mainfacts.com/media/images/coats_of_arms/by.svg" },
    currencies: { BYN: { name: "Belarusian ruble", symbol: "Br" } }, languages: { bel: "Belarusian", rus: "Russian" },
    timezones: ["UTC+03:00"], tld: [".by"], maps: { googleMaps: "https://goo.gl/maps/by" }, borders: ["LVA", "LTU", "POL", "RUS", "UKR"]
  },
  {
    cca3: "BLZ", cca2: "BZ", name: { common: "Belize", nativeName: { bjz: { common: "Belize" }, spa: { common: "Belice" } } },
    capital: ["Belmopan"], region: "Americas", subregion: "Central America", population: 397621, area: 22966,
    flags: { svg: "https://flagcdn.com/bz.svg" }, coatOfArms: { svg: "https://mainfacts.com/media/images/coats_of_arms/bz.svg" },
    currencies: { BZD: { name: "Belize dollar", symbol: "$" } }, languages: { bjz: "Belizean Creole", eng: "English", spa: "Spanish" },
    timezones: ["UTC-06:00"], tld: [".bz"], maps: { googleMaps: "https://goo.gl/maps/bz" }, borders: ["GTM", "MEX"]
  },
  {
    cca3: "BEN", cca2: "BJ", name: { common: "Benin", nativeName: { fra: { common: "Bénin" } } },
    capital: ["Porto-Novo"], region: "Africa", subregion: "Western Africa", population: 12123198, area: 112622,
    flags: { svg: "https://flagcdn.com/bj.svg" }, coatOfArms: { svg: "https://mainfacts.com/media/images/coats_of_arms/bj.svg" },
    currencies: { XOF: { name: "West African CFA franc", symbol: "Fr" } }, languages: { fra: "French" },
    timezones: ["UTC+01:00"], tld: [".bj"], maps: { googleMaps: "https://goo.gl/maps/bj" }, borders: ["BFA", "NER", "NGA", "TGO"]
  },
  {
    cca3: "BTN", cca2: "BT", name: { common: "Bhutan", nativeName: { dzo: { common: "འབྲུག་ཡུལ་" } } },
    capital: ["Thimphu"], region: "Asia", subregion: "Southern Asia", population: 771612, area: 38394,
    flags: { svg: "https://flagcdn.com/bt.svg" }, coatOfArms: { svg: "https://mainfacts.com/media/images/coats_of_arms/bt.svg" },
    currencies: { BTN: { name: "Bhutanese ngultrum", symbol: "Nu." }, INR: { name: "Indian rupee", symbol: "₹" } }, languages: { dzo: "Dzongkha" },
    timezones: ["UTC+06:00"], tld: [".bt"], maps: { googleMaps: "https://goo.gl/maps/bt" }, borders: ["CHN", "IND"]
  },
  {
    cca3: "BOL", cca2: "BO", name: { common: "Bolivia", nativeName: { aym: { common: "Wuliwya" }, grn: { common: "Volívia" }, que: { common: "Buliwya" }, spa: { common: "Bolivia" } } },
    capital: ["Sucre"], region: "Americas", subregion: "South America", population: 11673029, area: 1098581,
    flags: { svg: "https://flagcdn.com/bo.svg" }, coatOfArms: { svg: "https://mainfacts.com/media/images/coats_of_arms/bo.svg" },
    currencies: { BOB: { name: "Bolivian boliviano", symbol: "Bs." } }, languages: { aym: "Aymara", grn: "Guaraní", que: "Quechua", spa: "Spanish" },
    timezones: ["UTC-04:00"], tld: [".bo"], maps: { googleMaps: "https://goo.gl/maps/bo" }, borders: ["ARG", "BRA", "CHL", "PRY", "PER"]
  },
  {
    cca3: "BIH", cca2: "BA", name: { common: "Bosnia and Herzegovina", nativeName: { bos: { common: "Bosna i Hercegovina" }, hrv: { common: "Bosna i Hercegovina" }, srp: { common: "Босна и Херцеговина" } } },
    capital: ["Sarajevo"], region: "Europe", subregion: "Southeast Europe", population: 3280815, area: 51209,
    flags: { svg: "https://flagcdn.com/ba.svg" }, coatOfArms: { svg: "https://mainfacts.com/media/images/coats_of_arms/ba.svg" },
    currencies: { BAM: { name: "Bosnia and Herzegovina convertible mark", symbol: "KM" } }, languages: { bos: "Bosnian", hrv: "Croatian", srp: "Serbian" },
    timezones: ["UTC+01:00"], tld: [".ba"], maps: { googleMaps: "https://goo.gl/maps/ba" }, borders: ["HRV", "MNE", "SRB"]
  },
  {
    cca3: "BWA", cca2: "BW", name: { common: "Botswana", nativeName: { eng: { common: "Botswana" }, tsn: { common: "Botswana" } } },
    capital: ["Gaborone"], region: "Africa", subregion: "Southern Africa", population: 2351625, area: 581730,
    flags: { svg: "https://flagcdn.com/bw.svg" }, coatOfArms: { svg: "https://mainfacts.com/media/images/coats_of_arms/bw.svg" },
    currencies: { BWP: { name: "Botswana pula", symbol: "P" } }, languages: { eng: "English", tsn: "Tswana" },
    timezones: ["UTC+02:00"], tld: [".bw"], maps: { googleMaps: "https://goo.gl/maps/bw" }, borders: ["NAM", "ZAF", "ZMB", "ZWE"]
  },
  {
    cca3: "BRN", cca2: "BN", name: { common: "Brunei", nativeName: { msa: { common: "Brunei" } } },
    capital: ["Bandar Seri Begawan"], region: "Asia", subregion: "South-Eastern Asia", population: 437483, area: 5765,
    flags: { svg: "https://flagcdn.com/bn.svg" }, coatOfArms: { svg: "https://mainfacts.com/media/images/coats_of_arms/bn.svg" },
    currencies: { BND: { name: "Brunei dollar", symbol: "$" }, SGD: { name: "Singapore dollar", symbol: "$" } }, languages: { msa: "Malay" },
    timezones: ["UTC+08:00"], tld: [".bn"], maps: { googleMaps: "https://goo.gl/maps/bn" }, borders: ["MYS"]
  },
  {
    cca3: "BGR", cca2: "BG", name: { common: "Bulgaria", nativeName: { bul: { common: "България" } } },
    capital: ["Sofia"], region: "Europe", subregion: "Southeast Europe", population: 6927288, area: 110879,
    flags: { svg: "https://flagcdn.com/bg.svg" }, coatOfArms: { svg: "https://mainfacts.com/media/images/coats_of_arms/bg.svg" },
    currencies: { BGN: { name: "Bulgarian lev", symbol: "лв" } }, languages: { bul: "Bulgarian" },
    timezones: ["UTC+02:00"], tld: [".bg"], maps: { googleMaps: "https://goo.gl/maps/bg" }, borders: ["GRC", "MKD", "ROU", "SRB", "TUR"]
  },
  {
    cca3: "BFA", cca2: "BF", name: { common: "Burkina Faso", nativeName: { fra: { common: "Burkina Faso" } } },
    capital: ["Ouagadougou"], region: "Africa", subregion: "Western Africa", population: 20903278, area: 272967,
    flags: { svg: "https://flagcdn.com/bf.svg" }, coatOfArms: { svg: "https://mainfacts.com/media/images/coats_of_arms/bf.svg" },
    currencies: { XOF: { name: "West African CFA franc", symbol: "Fr" } }, languages: { fra: "French" },
    timezones: ["UTC+00:00"], tld: [".bf"], maps: { googleMaps: "https://goo.gl/maps/bf" }, borders: ["BEN", "CIV", "GHA", "MLI", "NER", "TGO"]
  },
  {
    cca3: "BDI", cca2: "BI", name: { common: "Burundi", nativeName: { fra: { common: "Burundi" }, run: { common: "Uburundi" } } },
    capital: ["Gitega"], region: "Africa", subregion: "Eastern Africa", population: 11890781, area: 27834,
    flags: { svg: "https://flagcdn.com/bi.svg" }, coatOfArms: { svg: "https://mainfacts.com/media/images/coats_of_arms/bi.svg" },
    currencies: { BIF: { name: "Burundian franc", symbol: "Fr" } }, languages: { fra: "French", run: "Kirundi" },
    timezones: ["UTC+02:00"], tld: [".bi"], maps: { googleMaps: "https://goo.gl/maps/bi" }, borders: ["COD", "RWA", "TZA"]
  },
  {
    cca3: "KHM", cca2: "KH", name: { common: "Cambodia", nativeName: { khm: { common: "កម្ពុជា" } } },
    capital: ["Phnom Penh"], region: "Asia", subregion: "South-Eastern Asia", population: 16718971, area: 181035,
    flags: { svg: "https://flagcdn.com/kh.svg" }, coatOfArms: { svg: "https://mainfacts.com/media/images/coats_of_arms/kh.svg" },
    currencies: { KHR: { name: "Cambodian riel", symbol: "៛" }, USD: { name: "United States dollar", symbol: "$" } }, languages: { khm: "Khmer" },
    timezones: ["UTC+07:00"], tld: [".kh"], maps: { googleMaps: "https://goo.gl/maps/kh" }, borders: ["LAO", "THA", "VNM"]
  },
  {
    cca3: "CMR", cca2: "CM", name: { common: "Cameroon", nativeName: { eng: { common: "Cameroon" }, fra: { common: "Cameroun" } } },
    capital: ["Yaoundé"], region: "Africa", subregion: "Middle Africa", population: 26545864, area: 475442,
    flags: { svg: "https://flagcdn.com/cm.svg" }, coatOfArms: { svg: "https://mainfacts.com/media/images/coats_of_arms/cm.svg" },
    currencies: { XAF: { name: "Central African CFA franc", symbol: "Fr" } }, languages: { eng: "English", fra: "French" },
    timezones: ["UTC+01:00"], tld: [".cm"], maps: { googleMaps: "https://goo.gl/maps/cm" }, borders: ["CAF", "TCD", "COG", "GNQ", "GAB", "NGA"]
  },
  {
    cca3: "CPV", cca2: "CV", name: { common: "Cape Verde", nativeName: { por: { common: "Cabo Verde" } } },
    capital: ["Praia"], region: "Africa", subregion: "Western Africa", population: 555988, area: 4033,
    flags: { svg: "https://flagcdn.com/cv.svg" }, coatOfArms: { svg: "https://mainfacts.com/media/images/coats_of_arms/cv.svg" },
    currencies: { CVE: { name: "Cape Verdean escudo", symbol: "Esc" } }, languages: { por: "Portuguese" },
    timezones: ["UTC-01:00"], tld: [".cv"], maps: { googleMaps: "https://goo.gl/maps/cv" }, borders: []
  },
  {
    cca3: "CAF", cca2: "CF", name: { common: "Central African Republic", nativeName: { fra: { common: "République centrafricaine" }, sag: { common: "Ködörö tî Bêafrîka" } } },
    capital: ["Bangui"], region: "Africa", subregion: "Middle Africa", population: 4829764, area: 622984,
    flags: { svg: "https://flagcdn.com/cf.svg" }, coatOfArms: { svg: "https://mainfacts.com/media/images/coats_of_arms/cf.svg" },
    currencies: { XAF: { name: "Central African CFA franc", symbol: "Fr" } }, languages: { fra: "French", sag: "Sango" },
    timezones: ["UTC+01:00"], tld: [".cf"], maps: { googleMaps: "https://goo.gl/maps/cf" }, borders: ["CMR", "TCD", "COG", "COD", "SSD", "SDN"]
  },
  {
    cca3: "TCD", cca2: "TD", name: { common: "Chad", nativeName: { ara: { common: "تشاد" }, fra: { common: "Tchad" } } },
    capital: ["N'Djamena"], region: "Africa", subregion: "Middle Africa", population: 16425859, area: 1284000,
    flags: { svg: "https://flagcdn.com/td.svg" }, coatOfArms: { svg: "https://mainfacts.com/media/images/coats_of_arms/td.svg" },
    currencies: { XAF: { name: "Central African CFA franc", symbol: "Fr" } }, languages: { ara: "Arabic", fra: "French" },
    timezones: ["UTC+01:00"], tld: [".td"], maps: { googleMaps: "https://goo.gl/maps/td" }, borders: ["CMR", "CAF", "LBY", "NER", "NGA", "SDN"]
  },
  {
    cca3: "COM", cca2: "KM", name: { common: "Comoros", nativeName: { ara: { common: "جزر القمر" }, fra: { common: "Comores" }, zdz: { common: "Komori" } } },
    capital: ["Moroni"], region: "Africa", subregion: "Eastern Africa", population: 869595, area: 1862,
    flags: { svg: "https://flagcdn.com/km.svg" }, coatOfArms: { svg: "https://mainfacts.com/media/images/coats_of_arms/km.svg" },
    currencies: { KMF: { name: "Comorian franc", symbol: "Fr" } }, languages: { ara: "Arabic", fra: "French", zdz: "Comorian" },
    timezones: ["UTC+03:00"], tld: [".km"], maps: { googleMaps: "https://goo.gl/maps/km" }, borders: []
  },
  {
    cca3: "COG", cca2: "CG", name: { common: "Republic of the Congo", nativeName: { fra: { common: "République du Congo" }, kon: { common: "Repubilika ya Kongo" }, lin: { common: "Republiki ya Kongó" } } },
    capital: ["Brazzaville"], region: "Africa", subregion: "Middle Africa", population: 5518092, area: 342000,
    flags: { svg: "https://flagcdn.com/cg.svg" }, coatOfArms: { svg: "https://mainfacts.com/media/images/coats_of_arms/cg.svg" },
    currencies: { XAF: { name: "Central African CFA franc", symbol: "Fr" } }, languages: { fra: "French", kon: "Kongo", lin: "Lingala" },
    timezones: ["UTC+01:00"], tld: [".cg"], maps: { googleMaps: "https://goo.gl/maps/cg" }, borders: ["AGO", "CMR", "CAF", "COD", "GAB"]
  },
  {
    cca3: "CRI", cca2: "CR", name: { common: "Costa Rica", nativeName: { spa: { common: "Costa Rica" } } },
    capital: ["San José"], region: "Americas", subregion: "Central America", population: 5094114, area: 51100,
    flags: { svg: "https://flagcdn.com/cr.svg" }, coatOfArms: { svg: "https://mainfacts.com/media/images/coats_of_arms/cr.svg" },
    currencies: { CRC: { name: "Costa Rican colón", symbol: "₡" } }, languages: { spa: "Spanish" },
    timezones: ["UTC-06:00"], tld: [".cr"], maps: { googleMaps: "https://goo.gl/maps/cr" }, borders: ["NIC", "PAN"]
  },
  {
    cca3: "HRV", cca2: "HR", name: { common: "Croatia", nativeName: { hrv: { common: "Hrvatska" } } },
    capital: ["Zagreb"], region: "Europe", subregion: "Southeast Europe", population: 4047200, area: 56594,
    flags: { svg: "https://flagcdn.com/hr.svg" }, coatOfArms: { svg: "https://mainfacts.com/media/images/coats_of_arms/hr.svg" },
    currencies: { EUR: { name: "Euro", symbol: "€" } }, languages: { hrv: "Croatian" },
    timezones: ["UTC+01:00"], tld: [".hr"], maps: { googleMaps: "https://goo.gl/maps/hr" }, borders: ["BIH", "HUN", "MNE", "SRB", "SVN"]
  },
  {
    cca3: "CUB", cca2: "CU", name: { common: "Cuba", nativeName: { spa: { common: "Cuba" } } },
    capital: ["Havana"], region: "Americas", subregion: "Caribbean", population: 11326616, area: 109884,
    flags: { svg: "https://flagcdn.com/cu.svg" }, coatOfArms: { svg: "https://mainfacts.com/media/images/coats_of_arms/cu.svg" },
    currencies: { CUP: { name: "Cuban peso", symbol: "$" } }, languages: { spa: "Spanish" },
    timezones: ["UTC-05:00"], tld: [".cu"], maps: { googleMaps: "https://goo.gl/maps/cu" }, borders: []
  },
  {
    cca3: "CYP", cca2: "CY", name: { common: "Cyprus", nativeName: { ell: { common: "Κύπρος" }, tur: { common: "Kıbrıs" } } },
    capital: ["Nicosia"], region: "Europe", subregion: "Southern Europe", population: 1207361, area: 9251,
    flags: { svg: "https://flagcdn.com/cy.svg" }, coatOfArms: { svg: "https://mainfacts.com/media/images/coats_of_arms/cy.svg" },
    currencies: { EUR: { name: "Euro", symbol: "€" } }, languages: { ell: "Greek", tur: "Turkish" },
    timezones: ["UTC+02:00"], tld: [".cy"], maps: { googleMaps: "https://goo.gl/maps/cy" }, borders: ["GBR"]
  },
  {
    cca3: "DJI", cca2: "DJ", name: { common: "Djibouti", nativeName: { ara: { common: "جيبوتي" }, fra: { common: "Djibouti" } } },
    capital: ["Djibouti"], region: "Africa", subregion: "Eastern Africa", population: 988002, area: 23200,
    flags: { svg: "https://flagcdn.com/dj.svg" }, coatOfArms: { svg: "https://mainfacts.com/media/images/coats_of_arms/dj.svg" },
    currencies: { DJF: { name: "Djiboutian franc", symbol: "Fr" } }, languages: { ara: "Arabic", fra: "French" },
    timezones: ["UTC+03:00"], tld: [".dj"], maps: { googleMaps: "https://goo.gl/maps/dj" }, borders: ["ERI", "ETH", "SOM"]
  },
  {
    cca3: "DMA", cca2: "DM", name: { common: "Dominica", nativeName: { eng: { common: "Dominica" } } },
    capital: ["Roseau"], region: "Americas", subregion: "Caribbean", population: 71991, area: 751,
    flags: { svg: "https://flagcdn.com/dm.svg" }, coatOfArms: { svg: "https://mainfacts.com/media/images/coats_of_arms/dm.svg" },
    currencies: { XCD: { name: "East Caribbean dollar", symbol: "$" } }, languages: { eng: "English" },
    timezones: ["UTC-04:00"], tld: [".dm"], maps: { googleMaps: "https://goo.gl/maps/dm" }, borders: []
  },
  {
    cca3: "DOM", cca2: "DO", name: { common: "Dominican Republic", nativeName: { spa: { common: "República Dominicana" } } },
    capital: ["Santo Domingo"], region: "Americas", subregion: "Caribbean", population: 10847904, area: 48671,
    flags: { svg: "https://flagcdn.com/do.svg" }, coatOfArms: { svg: "https://mainfacts.com/media/images/coats_of_arms/do.svg" },
    currencies: { DOP: { name: "Dominican peso", symbol: "$" } }, languages: { spa: "Spanish" },
    timezones: ["UTC-04:00"], tld: [".do"], maps: { googleMaps: "https://goo.gl/maps/do" }, borders: ["HTI"]
  },
  {
    cca3: "ECU", cca2: "EC", name: { common: "Ecuador", nativeName: { spa: { common: "Ecuador" } } },
    capital: ["Quito"], region: "Americas", subregion: "South America", population: 17643060, area: 276841,
    flags: { svg: "https://flagcdn.com/ec.svg" }, coatOfArms: { svg: "https://mainfacts.com/media/images/coats_of_arms/ec.svg" },
    currencies: { USD: { name: "United States dollar", symbol: "$" } }, languages: { spa: "Spanish" },
    timezones: ["UTC-05:00"], tld: [".ec"], maps: { googleMaps: "https://goo.gl/maps/ec" }, borders: ["COL", "PER"]
  },
  {
    cca3: "SLV", cca2: "SV", name: { common: "El Salvador", nativeName: { spa: { common: "El Salvador" } } },
    capital: ["San Salvador"], region: "Americas", subregion: "Central America", population: 6486201, area: 21041,
    flags: { svg: "https://flagcdn.com/sv.svg" }, coatOfArms: { svg: "https://mainfacts.com/media/images/coats_of_arms/sv.svg" },
    currencies: { SVC: { name: "Salvadoran colón", symbol: "$" }, USD: { name: "United States dollar", symbol: "$" } }, languages: { spa: "Spanish" },
    timezones: ["UTC-06:00"], tld: [".sv"], maps: { googleMaps: "https://goo.gl/maps/sv" }, borders: ["GTM", "HND"]
  },
  {
    cca3: "GNQ", cca2: "GQ", name: { common: "Equatorial Guinea", nativeName: { fra: { common: "Guinée équatoriale" }, por: { common: "Guiné Equatorial" }, spa: { common: "Guinea Ecuatorial" } } },
    capital: ["Malabo"], region: "Africa", subregion: "Middle Africa", population: 1402985, area: 28051,
    flags: { svg: "https://flagcdn.com/gq.svg" }, coatOfArms: { svg: "https://mainfacts.com/media/images/coats_of_arms/gq.svg" },
    currencies: { XAF: { name: "Central African CFA franc", symbol: "Fr" } }, languages: { fra: "French", por: "Portuguese", spa: "Spanish" },
    timezones: ["UTC+01:00"], tld: [".gq"], maps: { googleMaps: "https://goo.gl/maps/gq" }, borders: ["CMR", "GAB"]
  },
  {
    cca3: "ERI", cca2: "ER", name: { common: "Eritrea", nativeName: { ara: { common: "إريتريا" }, eng: { common: "Eritrea" }, tir: { common: "ኤርትራ" } } },
    capital: ["Asmara"], region: "Africa", subregion: "Eastern Africa", population: 3546427, area: 117600,
    flags: { svg: "https://flagcdn.com/er.svg" }, coatOfArms: { svg: "https://mainfacts.com/media/images/coats_of_arms/er.svg" },
    currencies: { ERN: { name: "Eritrean nakfa", symbol: "Nfk" } }, languages: { ara: "Arabic", eng: "English", tir: "Tigrinya" },
    timezones: ["UTC+03:00"], tld: [".er"], maps: { googleMaps: "https://goo.gl/maps/er" }, borders: ["DJI", "ETH", "SDN"]
  },
  {
    cca3: "EST", cca2: "EE", name: { common: "Estonia", nativeName: { est: { common: "Eesti" } } },
    capital: ["Tallinn"], region: "Europe", subregion: "Northern Europe", population: 1331057, area: 45227,
    flags: { svg: "https://flagcdn.com/ee.svg" }, coatOfArms: { svg: "https://mainfacts.com/media/images/coats_of_arms/ee.svg" },
    currencies: { EUR: { name: "Euro", symbol: "€" } }, languages: { est: "Estonian" },
    timezones: ["UTC+02:00"], tld: [".ee"], maps: { googleMaps: "https://goo.gl/maps/ee" }, borders: ["LVA", "RUS"]
  },
  {
    cca3: "SWZ", cca2: "SZ", name: { common: "Eswatini", nativeName: { eng: { common: "Eswatini" }, ssw: { common: "eSwatini" } } },
    capital: ["Mbabane"], region: "Africa", subregion: "Southern Africa", population: 1160164, area: 17364,
    flags: { svg: "https://flagcdn.com/sz.svg" }, coatOfArms: { svg: "https://mainfacts.com/media/images/coats_of_arms/sz.svg" },
    currencies: { SZL: { name: "Swazi lilangeni", symbol: "L" }, ZAR: { name: "South African rand", symbol: "R" } }, languages: { eng: "English", ssw: "Swati" },
    timezones: ["UTC+02:00"], tld: [".sz"], maps: { googleMaps: "https://goo.gl/maps/sz" }, borders: ["MOZ", "ZAF"]
  },
  {
    cca3: "ETH", cca2: "ET", name: { common: "Ethiopia", nativeName: { amh: { common: "ኢትዮጵያ" } } },
    capital: ["Addis Ababa"], region: "Africa", subregion: "Eastern Africa", population: 114963583, area: 1104300,
    flags: { svg: "https://flagcdn.com/et.svg" }, coatOfArms: { svg: "https://mainfacts.com/media/images/coats_of_arms/et.svg" },
    currencies: { ETB: { name: "Ethiopian birr", symbol: "Br" } }, languages: { amh: "Amharic" },
    timezones: ["UTC+03:00"], tld: [".et"], maps: { googleMaps: "https://goo.gl/maps/et" }, borders: ["DJI", "ERI", "KEN", "SOM", "SSD", "SDN"]
  },
  {
    cca3: "FJI", cca2: "FJ", name: { common: "Fiji", nativeName: { eng: { common: "Fiji" }, fij: { common: "Viti" }, hif: { common: "Fiji" } } },
    capital: ["Suva"], region: "Oceania", subregion: "Melanesia", population: 896444, area: 18274,
    flags: { svg: "https://flagcdn.com/fj.svg" }, coatOfArms: { svg: "https://mainfacts.com/media/images/coats_of_arms/fj.svg" },
    currencies: { FJD: { name: "Fijian dollar", symbol: "$" } }, languages: { eng: "English", fij: "Fijian", hif: "Fiji Hindi" },
    timezones: ["UTC+12:00"], tld: [".fj"], maps: { googleMaps: "https://goo.gl/maps/fj" }, borders: []
  },
  {
    cca3: "GAB", cca2: "GA", name: { common: "Gabon", nativeName: { fra: { common: "Gabon" } } },
    capital: ["Libreville"], region: "Africa", subregion: "Middle Africa", population: 2225728, area: 267667,
    flags: { svg: "https://flagcdn.com/ga.svg" }, coatOfArms: { svg: "https://mainfacts.com/media/images/coats_of_arms/ga.svg" },
    currencies: { XAF: { name: "Central African CFA franc", symbol: "Fr" } }, languages: { fra: "French" },
    timezones: ["UTC+01:00"], tld: [".ga"], maps: { googleMaps: "https://goo.gl/maps/ga" }, borders: ["CMR", "COG", "GNQ"]
  },
  {
    cca3: "GMB", cca2: "GM", name: { common: "Gambia", nativeName: { eng: { common: "Gambia" } } },
    capital: ["Banjul"], region: "Africa", subregion: "Western Africa", population: 2416664, area: 10689,
    flags: { svg: "https://flagcdn.com/gm.svg" }, coatOfArms: { svg: "https://mainfacts.com/media/images/coats_of_arms/gm.svg" },
    currencies: { GMD: { name: "Gambian dalasi", symbol: "D" } }, languages: { eng: "English" },
    timezones: ["UTC+00:00"], tld: [".gm"], maps: { googleMaps: "https://goo.gl/maps/gm" }, borders: ["SEN"]
  }
];
