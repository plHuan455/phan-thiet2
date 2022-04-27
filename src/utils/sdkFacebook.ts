function initFacebookSdk(language?:string, fbAppId?: number) {
  // https://developers.facebook.com/docs/messenger-platform/discovery/facebook-chat-plugin/
  const chatbox = document.getElementById('fb-customer-chat');
  if (chatbox && fbAppId) {
    chatbox.setAttribute('page_id', `${fbAppId}`);
    chatbox.setAttribute('attribution', 'biz_inbox');
  }

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
      xfbml: true,
      version: 'v13.0',
    });
  };

  // Load the SDK asynchronously
  const fjs = document.getElementsByTagName('script')[0];
  const js = document.createElement('script');
  js.id = 'facebook-jssdk';
  js.src = `https://connect.facebook.net/${codeLanguage()}/sdk/xfbml.customerchat.js`;
  if (fjs.parentNode) fjs.parentNode.insertBefore(js, fjs);
}
export default initFacebookSdk;
