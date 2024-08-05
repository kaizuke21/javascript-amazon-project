//Cart ArrayIf there is Local Storage
export let cart = JSON.parse(localStorage.getItem('cart'));


//Cart Array (Default)
  if (!cart){
    cart = [{
      productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      quantity: 2,
    },{
      productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
      quantity: 1,
    }];
  }


//Local Storage
function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}


//Adds a product to the cart
export function addToCart(productId){
  let matchingItem;

  cart.forEach((cartItem) => { 
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  if (matchingItem) {
    matchingItem.quantity += 1;
  }else{ 
    cart.push({
    productId: productId,
    quantity: 1
    });
  }

  saveToStorage();
}


// Delete an item from cart
export function removeFromCart(productId) {
  const newCart = [];

  cart.forEach((cartItem) => {
    
    if (cartItem.productId !== productId) {
      newCart.push(cartItem);
    }
  });

  cart = newCart;

  saveToStorage();
}