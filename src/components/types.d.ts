type Ratio =
  | '1x1'
  | '1366x467'
  | 'logo-footer'
  | '354x221'
  | '184x59'
  | '367x204'
  | '24x34'
  | '354x199'
  | '354x221'
  | 'logo-footer'
  | '1369x372'
  | '1366x378'
  | '1369x167'
  | '258x334'
  | '354x221'
  | '547x309';

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
  | 'gradientBittersweet';

type FontFamily = 'fontOswald' | 'fontSvnGotham';

type LetterSpacing = 's015';

type GeneralTextStyle = FontWeightStyle | TextStyle | ColorStyle | FontFamily | LetterSpacing;
