import{formatCurrency} from '../scripts/utils/money.js';
  
  console.log('Test Cases for: format currenct');

   console.log('for cents to dollars'formatCurrency(2084) === '20.84'?'passed':'failed');
   console.log(formatCurrency(0) === '0.00'?'passed':'failed');
   console.log(formatCurrency(2000.5) === '20.01'?'passed':'failed');
   console.log(formatCurrency(1) === '0.01'?'passed':'failed');
