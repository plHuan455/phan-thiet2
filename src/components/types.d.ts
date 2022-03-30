type Ratio =
  | '1x1';

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
  | 'gradientBittersweet';

type FontFamily = 'fontOswald' | 'fontSvnGotham';

type GeneralTextStyle = FontWeightStyle | TextStyle | ColorStyle | FontFamily;
