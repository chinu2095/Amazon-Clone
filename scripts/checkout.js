import {renderOrderSummary}from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
import {renderCheckoutHeader} from'./checkout/checkoutHeader.js';
import{loadProducts,loadProductsFetch} from'../data/products.js';
import{loadCart} from'../data/cart.js';
//import '../data/cart-class.js';
//import'../data/backend-practice.js';

// async make a function returns a promise
async function loadPage(){
// we can use try catch with normal code too , doesn't have to be asynchronous ;
try{
  // throw 'error';   it will thorow a error rest of the code will be scipped and the error msg will be saved in the catch(error);
  await loadProductsFetch();

  await new Promise((resolve, reject)=>{
    // throw 'error2'; we can throw errors in promises 2 types , 
    // throw does no work in future , so it will not work in loadCart(){}, a new promise lets us give extra parameter 
    // named reject it lets us throw a error manually in future in promises.
    loadCart(()=>{
      //reject('error rejected in future');
      resolve();
    });
  });
}catch(error){
  console.log(error);
}

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

