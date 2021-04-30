const countries = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Antigua',
  'Barbuda',
  'Argentina',
  'Armenia',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bhutan',
  'Bolivia',
  'Bosnia',
  'Herzegovina',
  'Botswana',
  'Brazil',
  'Brunei',
  'Bulgaria',
  'Burkina',
  'Faso',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Verde',
  'Chad',
  'Chile',
  'China',
  'Colombia',
  'Comoros',
  'Congo',
  'Costa',
  'Rica',
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czech',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican',
  'Timor',
  'Ecuador',
  'Egypt',
  'Salvador',
  'England',
  'Guinea',
  'Eritrea',
  'Estonia',
  'Eswatini',
  'Ethiopia',
  'Micronesia',
  'Fiji',
  'Finland',
  'France',
  'Gabon',
  'Gambia',
  'Georgia',
  'Germany',
  'Ghana',
  'Greece',
  'Grenada',
  'Guatemala',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Honduras',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Kosovo',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Montenegro',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Burma',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'Macedonia',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Panama',
  'Papua',
  'Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Qatar',
  'Romania',
  'Russia',
  'Rwanda',
  'Samoa',
  'Marino',
  'Principe',
  'Saudi',
  'Arabia',
  'Scotland',
  'Senegal',
  'Serbia',
  'Seychelles',
  'Sierra',
  'Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'Solomon',
  'Somalia',
  'Korea',
  'Spain',
  'Sri',
  'Lanka',
  'Sudan',
  'Suriname',
  'Sweden',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Togo',
  'Tonga',
  'Trinidad',
  'Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'Arab',
  'Emirates',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Vatican',
  'Venezuela',
  'Vietnam',
  'Wales',
  'Yemen',
  'Zambia',
  'Zimbabwe',
];

const capitals = [
  'Kabul',
  'Tirana',
  'Tirane',
  'Algiers',
  'Andorra',
  'Vella',
  'Luanda',
  'Buenos',
  'Aires',
  'Yerevan',
  'Canberra',
  'Vienna',
  'Baku',
  'Nassau',
  'Manama',
  'Dhaka',
  'Bridgetown',
  'Minsk',
  'Brussels',
  'Belmopan',
  'Porto',
  'Novo',
  'Thimphu',
  'Paz',
  'Sucre',
  'Sarajevo',
  'Gaborone',
  'Brasilia',
  'Bandar',
  'Seri',
  'Begawan',
  'Sofia',
  'Ouagadougou',
  'Gitega',
  'Phnom',
  'Penh',
  'Yaounde',
  'Ottawa',
  'Praia',
  'Bangui',
  'N\'Djamena',
  'Santiago',
  'Beijing',
  'Bogota',
  'Moroni',
  'Kinshasa',
  'Brazzaville',
  'Yamoussoukro',
  'Zagreb',
  'Havana',
  'Nicosia',
  'Prague',
  'Copenhagen',
  'Djibouti',
  'Roseau',
  'Santo',
  'Domingo',
  'Dili',
  'Quito',
  'Cairo',
  'Salvador',
  'London',
  'Malabo',
  'Asmara',
  'Tallinn',
  'Mbabana',
  'Addis',
  'Ababa',
  'Palikir',
  'Suva',
  'Helsinki',
  'Paris',
  'Libreville',
  'Banjul',
  'Tbilisi',
  'Berlin',
  'Accra',
  'Athens',
  'Guatemala',
  'Conakry',
  'Bissau',
  'Georgetown',
  'Tegucigalpa',
  'Budapest',
  'Reykjavik',
  'Delhi',
  'Jakarta',
  'Tehran',
  'Baghdad',
  'Dublin',
  'Jerusalem',
  'Rome',
  'Kingston',
  'Tokyo',
  'Amman',
  'Nur-Sultan',
  'Nairobi',
  'Tarawa',
  'Atoll',
  'Pristina',
  'Kuwait',
  'Bishkek',
  'Vientiane',
  'Riga',
  'Beirut',
  'Maseru',
  'Monrovia',
  'Tripoli',
  'Vaduz',
  'Vilnius',
  'Luxembourg',
  'Antananarivo',
  'Lilongwe',
  'Kuala',
  'Lumpur',
  'Male',
  'Bamako',
  'Valletta',
  'Majuro',
  'Nouakchott',
  'Chisinau',
  'Monaco',
  'Ulaanbaatar',
  'Podgorica',
  'Rabat',
  'Maputo',
  'Nay',
  'Pyi',
  'Taw',
  'Windhoek',
  'Kathmandu',
  'Amsterdam',
  'Wellington',
  'Managua',
  'Niamey',
  'Abuja',
  'Pyongyang',
  'Skopje',
  'Belfast',
  'Oslo',
  'Muscat',
  'Islamabad',
  'Melekeok',
  'Moresby',
  'Asuncion',
  'Lima',
  'Manila',
  'Warsaw',
  'Lisbon',
  'Doha',
  'Bucharest',
  'Moscow',
  'Kigali',
  'Basseterre',
  'Castries',
  'Kingstown',
  'Apia',
  'San',
  'Marino',
  'Sao',
  'Tome',
  'Riyadh',
  'Edinburgh',
  'Dakar',
  'Belgrade',
  'Victoria',
  'Freetown',
  'Singapore',
  'Bratislava',
  'Ljubljana',
  'Honiara',
  'Mogadishu',
  'Pretoria',
  'Bloemfontein',
  'Seoul',
  'Juba',
  'Madrid',
  'Colombo',
  'Khartoum',
  'Paramaribo',
  'Stockholm',
  'Bern',
  'Damascus',
  'Taipei',
  'Dushanbe',
  'Dodoma',
  'Bangkok',
  'Lome',
  'Nuku\'alofa',
  'Tunis',
  'Ankara',
  'Ashgabat',
  'Funafuti',
  'Kampala',
  'Kiev',
  'Abu',
  'Dhabi',
  'London',
  'Montevideo',
  'Tashkent',
  'Vila',
  'Caracas',
  'Hanoi',
  'Cardiff',
  'Sana\'a',
  'Lusaka',
  'Harare',
];

export let locations = countries.concat(capitals);
