import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";
//import '../data/cart-class.js'
// import '../data/backend-practice.js'

//Array of Promises - Revised Promise
//It's gonna wait all the Promises to 
//finish before going to the next step
Promise.all([
  loadProductsFetch(),
  new Promise((resolve) => {
    loadCart(() => {
      resolve('value2');
    });
  })
]).then((values) => {
  console.log(values); 
  renderOrderSummary();
  renderPaymentSummary();
});


// //Callback to Promise
// new Promise((resolve) => {
//   loadProducts(() => {
//     resolve('value1'); 
//   });

// }).then((value) => {
//   console.log(value);
//   return new Promise((resolve) => {
//     loadCart(() => {
//       resolve();
//     });
//   });

// }).then(() => {
//   renderOrderSummary();
//   renderPaymentSummary();
// });


// //Callback
// loadProducts(() => {
//   loadCart(() => {
//     renderOrderSummary();
//     renderPaymentSummary();
//   });
// });

