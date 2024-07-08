import { updateCartQuantity,renderOrderSummary } from "./order section/orderItem.js";
import { renderPaymentSummary } from "./order section/payment.js";
import './data/cart-oop.js' ;
import '../scripts/data/cart-class.js'

updateCartQuantity();
renderOrderSummary();
renderPaymentSummary();

// const today =dayjs();
// const deliverydate= today.add(7,'days');
// // console.log(deliverydate);

// console.log(deliverydate.format('dddd , MMMM D'))

