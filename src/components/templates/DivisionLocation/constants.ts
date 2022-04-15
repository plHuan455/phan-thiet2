import imgBoutique from 'assets/images/divisionLocation/boutique.png';
import imgFestivalStreet from 'assets/images/divisionLocation/festivalStreet.png';
import imgFestivalTown from 'assets/images/divisionLocation/festivalTown.png';
import imgFloridaFirst from 'assets/images/divisionLocation/floridaFirst.png';
import imgFloridaSecond from 'assets/images/divisionLocation/floridaSecond.png';
import imgKingDom from 'assets/images/divisionLocation/kingDom.png';
import imgOceanResidence from 'assets/images/divisionLocation/oceanResidence.png';
import imgPgaGolf from 'assets/images/divisionLocation/pgaGolf.png';
import imgSanta from 'assets/images/divisionLocation/santa.png';
import imgWaikiki from 'assets/images/divisionLocation/waikiki.png';

const mapData = [
  {
    className: 'boutique',
    line: 'M1285.28 465.529L1295.28 471.029C1294.08 474.229 1237.45 524.029 1209.28 548.529L1195.78 539.029L1285.28 465.529Z',
    img: imgBoutique,
  },
  {
    className: 'festivalStreet',
    line: 'M910 540.5C908.8 536.5 901.167 534.167 897.5 533.5L879.5 553C896.667 564.5 935.9 589.9 955.5 599.5C980 611.5 995.5 636.5 999.5 639.5C1002.7 641.9 1017.5 625.167 1024.5 616.5C989.333 596 917.9 554.2 913.5 551C908 547 911.5 545.5 910 540.5Z',
    img: imgFestivalStreet,
  },
  {
    className: 'festivalTown',
    line: 'M1189.61 315.565C1201.53 319.088 1323.28 351.58 1382.67 367.386L1315.94 422.932C1314.93 422.706 1308.9 420.29 1292.91 412.433C1269.54 399.223 1148.29 362.644 1126.61 358.58C1109.27 355.328 1027.71 331.484 989.1 319.968L1019.92 267.47C1071.52 282.034 1177.69 312.043 1189.61 315.565Z',
    img: imgFestivalTown,
  },
  {
    className: 'floridaFirst',
    line: 'M1005 512.5L931.5 475L963 431.5H985C986.167 431.333 988.5 430.4 988.5 428C1002 426 1002.5 423.5 1005 419.5C994.2 397.1 975.167 381.5 967 376.5V354.5C969.499 350.5 968.299 350.6 973.499 343C983.499 346.5 1051 366.5 1096.5 380.5L1161.5 401C1185.67 408.5 1235.1 425.8 1253.5 433L1254.56 433.415C1272.13 440.29 1277.95 442.568 1284 446L1074.5 626L958 563L1005 512.5Z',
    img: imgFloridaFirst,
  },
  {
    className: 'floridaSecond',
    line: 'M989 319.5L973.5 343.5L988 348C1011 355.5 1044.24 363.996 1052.5 366.5C1069 371.5 1101 380.833 1118.5 386.5C1145.67 395.833 1199.6 413.1 1206 415.5C1212.4 417.9 1261 437.167 1284.5 446.5L1315.5 423C1307.5 419.167 1287.9 410.2 1275.5 405C1263.1 399.8 1191.33 377.167 1157 366.5L1118.5 357L1047.5 337.5L989 319.5Z',
    img: imgFloridaSecond,
  },
  {
    className: 'kingDom',
    line: 'M556.211 254.5C560.211 259.7 557.878 270 556.211 274.5C573.378 276.167 613.011 280.6 634.211 285C660.711 290.5 660.711 305 656.211 316.5C652.611 325.7 633.711 335.667 624.711 339.5C620.378 344.333 610.211 356.4 604.211 366C598.211 375.6 606.711 380.333 611.711 381.5C627.878 374.667 669.011 356.1 704.211 336.5C748.211 312 736.711 291 726.711 283C713.437 272.38 657.711 258 637.211 254.5C616.711 251 568.711 238.5 553.211 237C537.711 235.5 551.211 248 556.211 254.5Z',
    img: imgKingDom,
  },
  {
    className: 'oceanResidence',
    line: 'M105.841 107.752L212.841 134.252L134.341 173.252L24.3408 126.752L105.841 107.752Z',
    img: imgOceanResidence,
  },
  {
    className: 'pgaGolf',
    line: 'M971.5 320.5L962 338C937.833 327.833 885.4 305.7 869 298.5C838 281.5 689 240.5 634 230C610.091 225.436 619 219.364 623.5 217.5C651.5 205.9 807.833 252.667 882.5 277.5L878 285.5L971.5 320.5Z',
    img: imgPgaGolf,
  },
  {
    className: 'santa',
    line: 'M565 359.5C579.4 359.5 591.333 351.5 595.5 347.5C608 338 619 345.5 619 347.5C592 378 601 379 609 385C617 391 619.5 414 619 423C616.5 423 598.5 421 593 415.5C572.5 397.5 549 380.833 531 370.5L540 359.5H565Z',
    img: imgSanta,
  },
  {
    className: 'waikiki',
    line: 'M823.367 357.651L783.367 390.651C796.367 382.651 865.867 361.651 908.367 385.151C955.867 410.151 955.867 424.151 954.367 434.151L976.866 433.151L979.367 430.651C978.167 373.451 862.866 344.151 823.367 357.651Z',
    img: imgWaikiki,
  },
];

export default mapData;
