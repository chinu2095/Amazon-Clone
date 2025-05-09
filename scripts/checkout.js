import {renderOrderSummary}from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
import {renderCheckoutHeader} from'./checkout/checkoutHeader.js';
import{loadProducts} from'../data/products.js';
import{loadCart} from'../data/cart.js';
//import '../data/cart-class.js';
//import'../data/backend-practice.js';

// promises helps avoiding nesting and make our code more redable its better to use promises instead of callbacks
Promise.all([
  new Promise((resolve)=>{
    loadProducts(()=>{
      resolve();
    });
  }),
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
loadProducts(()=>{
  renderOrderSummary();
  renderPaymentSummary();
  renderCheckoutHeader();
});
*/

