function initZaloSdk() {
  const zs = document.getElementsByClassName('zs');

  if (zs && zs[0]) {
    zs[0].parentNode?.childNodes.forEach((child) => {
      const valueIFrame = (child as any)?.attributes?.src?.value;
      if (child.nodeName === 'IFRAME' && valueIFrame?.includes('button-share.zalo.me')) {
        child.remove();
      }
    });
    zs[0].remove();
  }

  // Load the SDK asynchronously
  const fjs = document.getElementsByTagName('script')[0];
  const js = document.createElement('script');
  js.src = 'https://sp.zalo.me/plugins/sdk.js';
  if (fjs.parentNode) fjs.parentNode.insertBefore(js, fjs);
}

export default initZaloSdk;
