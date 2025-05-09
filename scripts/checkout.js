import {renderOrderSummary}from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
import {renderCheckoutHeader} from'./checkout/checkoutHeader.js';
import{loadProducts,loadProductsFetch} from'../data/products.js';
import{loadCart} from'../data/cart.js';
//import '../data/cart-class.js';
//import'../data/backend-practice.js';

// async make a function returns a function
async function loadPage(){

  await loadProductsFetch();

  await new promise((resolve)=>{
    loadCart(()=>{
      resolve();
    });
  });

  renderOrderSummary();
  renderPaymentSummary();
  renderCheckoutHeader();
  // we can write asynchronous code like normal code
  // async lets us uses await 
  // AWAIt : lets us wait for the promise to finish before  going to the next step
  return 'value2' ; // it will be stored in in teh next step (then); we can only use await in a async function

}
loadPage().then((value)=>{
  console.log(value);

})
// promises helps avoiding nesting and make our code more redable its better to use promises instead of callbacks
Promise.all([
  loadProductsFetch(),
  new Promise((resolve)=>{
    loadCart(()=>{
     resolve();
    });
  })
]).then(()=>{
  renderOrderSummary();
  renderPaymentSummary();
  renderCheckoutHeader();
});
/*
new Promise((resolve)=>{
  loadProducts(()=>{
    resolve();
  });
}).then(()=>{
  return new Promise((resolve)=>{
   loadCart(()=>{
    resolve();
   });
  });
}).then(()=>{
  renderOrderSummary();
  renderPaymentSummary();
  renderCheckoutHeader();
});
*/

/*
loadProducts(()=>{
  renderOrderSummary();
  renderPaymentSummary();
  renderCheckoutHeader();
});
*/

