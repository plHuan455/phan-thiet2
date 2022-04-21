function initFacebookSdk(language?:string, fbAppId?: number) {
  // https://stackoverflow.com/questions/28533824/change-facebook-like-button-language-without-reloading-page
  const newWindow = window as any;
  const jsSdk = document.getElementById('#facebook-jssdk');
  const fbRoot = document.getElementById('#fb-root');

  if (newWindow.FB) {
    if (jsSdk) jsSdk.remove();
    if (fbRoot) fbRoot.remove();
    delete newWindow.FB;
  }

  // check code language https://developers.facebook.com/docs/internationalization/
  // const codeLanguage = language === 'en' ? 'en_US' : 'vi_VN';
  const codeLanguage = () => {
    switch (language) {
      case 'en':
        return 'en_US';
      case 'ja':
        return 'ja_JP';
      case 'ko':
        return 'ko_KR';
      case 'zh':
        return 'zh_CN';
      default:
        return 'vi_VN';
    }
  };

  // eslint-disable-next-line func-names
  newWindow.fbAsyncInit = function () {
    newWindow.FB.init({
      xfbml: true, // parse social plugins on this page
      version: 'v2.0',
    });
  };

  // Load the SDK asynchronously
  const fjs = document.getElementsByTagName('script')[0];
  const js = document.createElement('script');
  js.id = 'facebook-jssdk';
  js.src = `//connect.facebook.net/${codeLanguage()}/sdk.js#xfbml=1&version=v12.0${fbAppId ? `&appId=${fbAppId}&autoLogAppEvents=1&theme_color=#BB6D3F` : ''}`;
  if (fjs.parentNode) fjs.parentNode.insertBefore(js, fjs);
}
export default initFacebookSdk;
