document.addEventListener('DOMContentLoaded', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { action: 'getProductInfo' }, (response) => {
      if (response) {
        document.getElementById('product-name').innerText = response.productName;
        document.getElementById('product-price').innerText = response.productPrice;
      }
    });
  });

  document.getElementById('compare-prices').addEventListener('click', () => {
    alert('Price comparison feature coming soon!');
  });

  document.getElementById('find-coupons').addEventListener('click', () => {
    alert('Coupon finding feature coming soon!');
  });

  document.getElementById('track-price').addEventListener('click', () => {
    alert('Price tracking feature coming soon!');
  });
});
  
  document.getElementById('find-coupons').addEventListener('click', () => {
  const productName = document.getElementById('product-name').innerText;
  if (productName !== 'Unknown Product') {
    // Implement your coupon finding logic here
    alert(`Finding coupons for ${productName}`);
  } else {
    alert('Product information not found.');
  }
});

  document.getElementById('track-price').addEventListener('click', () => {
  const productName = document.getElementById('product-name').innerText;
  const productPrice = document.getElementById('product-price').innerText;
  if (productName !== 'Unknown Product' && productPrice !== 'Unknown Price') {
    // Implement your price tracking logic here
    alert(`Tracking price for ${productName} at ${productPrice}`);
  } else {
    alert('Product information not found.');
  }
});