import{getCartQuantity} from './paymentSummary.js';
import{renderPaymentSummary} from './paymentSummary.js';

export function renderCheckoutHeader(){
  const cartQuantity = getCartQuantity();
  let checkoutHeaderHTML =` Checkout (<a class="return-to-home-link"
            href="amazon.html">${cartQuantity} items</a>)`;

       document.querySelector('.js-checkout-header')
        .innerHTML = checkoutHeaderHTML;
       
}
