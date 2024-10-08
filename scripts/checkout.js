import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";
//import '../data/cart-class.js'
// import '../data/backend-practice.js'


//Promise to Async - Revised
async function loadPage() {

  try{ 
    // throw 'error1';

    await loadProductsFetch();

    const value = await new Promise((resolve, reject) => {
      // throw 'error2';
      loadCart(() => {
        // reject('error');
        resolve('value3');
      });
    });

  } catch(error) {
    //Error Handling
    console.log('Unexpected Error. Please try again later.');
  }

  renderOrderSummary();
  renderPaymentSummary();
  
}

loadPage();


// //Array of Promises - Revised Promise
// //It's gonna wait all the Promises to 
// //finish before going to the next step
// Promise.all([
//   loadProductsFetch(),
//   new Promise((resolve) => {
//     loadCart(() => {
//       resolve('value2');
//     });
//   })
// ]).then((values) => {
//   console.log(values); 
//   renderOrderSummary();
//   renderPaymentSummary();
// });


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

