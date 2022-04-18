type Ratio =
  | '1x1'
  | '1366x467'
  | 'logo-footer'
  | '354x221'
  | '184x59'
  | '367x204'
  | '24x34'
  | '354x199'
  | 'logo-footer'
  | '1369x372'
  | '1366x378'
  | '1369x167'
  | '1369x225'
  | '258x334'
  | '547x309'
  | '1365x1290'
  | '912x455'
  | '929x479'
  | '142x229'
  | '182x70'
  | '262x147'
  | '166x110'
  | '934x526'
  | '211x114'
  | '238x150'
  | '78x25'
  | '132x202'
  | '359x247'
  | '113x182'
  | '462x305'
  | '548x612'
  | '274x185'
  | '326x221'
  | '1366x688'
  | '1366x933';

type FontWeightStyle =
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900';

type TextStyle =
  | 'uppercase'
  | 'capitalize'
  | 'underline'
  | 'italic'
  | 'center'
  | 'justify'
  | 'normal'
  | 'right'
  | 'left';

type ColorStyle =
  | 'white'
  | 'black'
  | 'raisinBlack'
  | 'snow'
  | 'antiFlashWhite'
  | 'taupeGray'
  | 'davyGrey'
  | 'antiFlashWhite2'
  | 'seaBlue'
  | 'cyan'
  | 'antiqueWhite'
  | 'copper'
  | 'carminePink'
  | 'isabelline'
  | 'yaleBlue'
  | 'gambogeOrange'
  | 'deer'
  | 'gradientGreen'
  | 'gradientBlue'
  | 'deepLemon'
  | 'arsenic'
  | 'bananaMania'
  | 'inherit'
  | 'camel'
  | 'gradientBittersweet';

type FontFamily = 'fontOswald' | 'fontSvnGotham';

type LetterSpacing = 's015';

type GeneralTextStyle =
  | FontWeightStyle
  | TextStyle
  | ColorStyle
  | FontFamily
  | LetterSpacing;
