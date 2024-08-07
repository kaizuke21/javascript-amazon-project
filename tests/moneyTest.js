import { formatCurrency } from "../scripts/utils/money.js";

console.log('Test Suite: formatCurrency');

//Converts cents into dollars
if (formatCurrency(2095) === '20.95') {
  console.log('Converts cents into dollars: passed');
}else{
  console.log('Converts cents into dollars: failed');
}

//Works with 0
if (formatCurrency(0) === '0.00') {
  console.log('Works with 0: passed');
}else{
  console.log('Works with 0: failed');
}

//Rounds up to the nearesr cent
if (formatCurrency(2000.4) === '20.00') {
  console.log('Rounds up to the nearesr cent: passed');
}else{
  console.log('v: failed');
}
