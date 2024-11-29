console.log('Shopping Assistant content script loaded.');

function extractProductInfo() {
  const url = window.location.hostname;
  let productName = 'Unknown Product';
  let productPrice = 'Unknown Price';

  if (url.includes('amazon')) {
    productName = document.getElementById('productTitle')?.innerText.trim() || 'Unknown Product';
    productPrice = document.getElementById('priceblock_ourprice')?.innerText.trim() ||
                   document.getElementById('priceblock_dealprice')?.innerText.trim() || 
                   'Unknown Price';
  } else if (url.includes('flipkart')) {
    productName = document.querySelector('span.B_NuCI')?.innerText.trim() || 'Unknown Product';
    productPrice = document.querySelector('div._30jeq3._16Jk6d')?.innerText.trim() || 'Unknown Price';
  }

  return { productName, productPrice };
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'getProductInfo') {
    sendResponse(extractProductInfo());
  }
});