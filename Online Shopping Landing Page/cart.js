/* Shared cart storage, used by index.html and cart.html */
var CART_KEY = 'supermart_cart';

function getCart(){
  try{
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  }catch(e){
    return [];
  }
}

function saveCart(cart){
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function addToCart(item){
  var cart = getCart();
  var existing = cart.find(function(i){ return i.name === item.name; });
  if(existing){
    existing.qty += 1;
  }else{
    cart.push({ name:item.name, price:item.price, image:item.image, qty:1 });
  }
  saveCart(cart);
  return cart;
}

function removeFromCart(name){
  var cart = getCart().filter(function(i){ return i.name !== name; });
  saveCart(cart);
  return cart;
}

function setCartQty(name, qty){
  var cart = getCart();
  var item = cart.find(function(i){ return i.name === name; });
  if(item){
    item.qty = qty;
    if(item.qty <= 0){
      cart = cart.filter(function(i){ return i.name !== name; });
    }
  }
  saveCart(cart);
  return cart;
}

function getCartCount(cart){
  cart = cart || getCart();
  return cart.reduce(function(sum, i){ return sum + i.qty; }, 0);
}

function getCartTotal(cart){
  cart = cart || getCart();
  return cart.reduce(function(sum, i){ return sum + i.qty * i.price; }, 0);
}

function updateBasketCountUI(){
  var el = document.getElementById('basketCount');
  if(el){
    el.textContent = getCartCount();
  }
}
