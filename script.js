const bar = document.querySelector("#bar");
const close = document.querySelector("#close");
const nav = document.querySelector("#navbar");

if(bar){
    bar.addEventListener("click",()=>{
        nav.classList.add('active')
    })
}
if(close){
    close.addEventListener("click",()=>{
        nav.classList.remove('active')
    })
}

/* ---------- ADD-ONLY: Add-to-Cart (minimal) ---------- */
(function(){
  // simple in-memory cart (no remove, no display)
  const cartCountSpan = document.getElementById('cart-count');
  let cart = [];

  function updateCartCount() {
    if (cartCountSpan) cartCountSpan.textContent = cart.length;
  }

  // Add click listeners to all elements with class 'cart'
  document.querySelectorAll('.cart').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      // find parent product element (works with your current markup)
      const productEl = btn.closest('.product');
      if (!productEl) return;

      // read product name and image
      const nameEl = productEl.querySelector('.des h5');
      const imgEl = productEl.querySelector('img');

      const name = nameEl ? nameEl.textContent.trim() : 'Product';
      const img = imgEl ? imgEl.getAttribute('src') : '';

      // push into cart (object has name and image)
      cart.push({ name, img });

      // update only the count (as requested)
      updateCartCount();

      // optional: tiny visual feedback on button
      btn.innerHTML = '<i class="fa-solid fa-check"></i>';
      setTimeout(() => btn.textContent = 'Add to cart', 900);
    });
  });

  // initialize count on load (in case you prefilled cart)
  updateCartCount();
})();
