// const pricePerDroid = 800;

// const orderedQuantity = 6;

// const deliveryFee = 50;

// const totalPrice = (pricePerDroid * orderedQuantity + deliveryFee);

// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;

// console.log(message);

// function sayHi(){
// 	console.log("Hello, this is my first function!");
// }

//     sayHi();

// function makeMessage (name, price) {
//   // Change code below this line
//     const message = `You picked ${name}, price per item is ${price} credits`;
//     console.log(message);
//   // Change code above this line
//   return message;
// };

// makeMessage("Radar", 6500);

// makeMessage('Scanner', 3500);

// makeMessage('Reactor', 8000)

// makeMessage('Engine', 4070)

// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   // Change code below this line

// 	const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
//     const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
//     console.log(message);

//   // Change code above this line
//   return message;
// }

// makeOrderMessage(5000, 5, 50);

// function isAdult(age) {
//   // Change code below this line
//     const passed = age >= 18;
//     console.log(passed);
//   // Change code above this line
//   return passed;
// }

// isAdult(17)

// function isValidPassword(password) {
//   const SAVED_PASSWORD = 'jqueryismyjam';
//   // Change code below this line

//     const isMatch = password === SAVED_PASSWORD;
//     console.log(isMatch);

//   // Change code above this line
//   return isMatch;
// }

// isValidPassword('jquerismyjam');

// function checkAge(age) {
//   let message;

//   if (age >= 18) { // Change this line
//     message = 'You are an adult';
//   } else {
//       message = 'You are a minor';
//     }
//     console.log(message);
//     return message;
// }

// checkAge(10);

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
// if (available >= ordered){
// 	message = "Order is processed, our manager will contact you.";
// } else{
// 	message = "Not enough goods in stock!";
//     }
//     console.log(message);
//   // Change code above this line
//   return message;
// }

// checkStorage(100, 500);

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Change code below this line
// const totalPrice = (pricePerDroid * orderedQuantity);
// if (totalPrice <= customerCredits){
// 	message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left`
// 	} else{
// 		message = "Insufficient funds!"
//     }
//     console.log(message);
//   // Change code above this line
//   return message;
// }

// makeTransaction(10, 2, 10);

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   if (password === 0) { // Change this line
//     message =  'Canceled by user!';
//   } else if (password === ADMIN_PASSWORD) { // Change this line
//     message = 'Welcome!';
//   } else {
//     message = 'Access denied, wrong password!';
//   }
//     console.log(message);
//   return message;
// }

// checkPassword()

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
// 	if (ordered === 0){
// 	message = "There are no products in the order!"
//     } else if (available >= ordered) {
// 	message = "The order is accepted, our manager will contact you"
//     } else {
// 	message = "Your order is too large, there are not enough items in stock!"
//     }
//     console.log(message);
//   // Change code above this line
//   return message;
// }

// checkStorage(10, 10);

// function isNumberInRange(start, end, number) {
//   const isInRange = (number >= start && number <= end); // Change this line
//   console.log (isInRange);
//   return isInRange;
// }

// isNumberInRange(5, 20, 50);

// function checkIfCanAccessContent(subType) {
//     const canAccessContent = (subType === "pro" || subType === "vip"); // Change this line
//     console.log(canAccessContent);
//     return canAccessContent;
// }

// checkIfCanAccessContent("sylia")

// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//     const isNotInRange = !isInRange; // Change this line
//     console.log(isNotInRange);
//     return isNotInRange;

// }

// isNumberNotInRange(10, 50, 20);

// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Change code below this line
//   if (totalSpent < 5000) {
//     discount = BASE_DISCOUNT;
//   } else if (totalSpent >= 5000 && totalSpent < 20000) {
//     discount = BRONZE_DISCOUNT;
//   } else if (totalSpent >= 20000 && totalSpent < 50000) {
//     discount = SILVER_DISCOUNT;
//   } else if (totalSpent >= 50000) {
//     discount = GOLD_DISCOUNT;
//   }
//   // Change code above this line
//   console.log(discount);
//   return discount;
// }

// getDiscount(50000);

// function checkStorage(available, ordered) {
//   let message =
//     ordered > available
//       ? 'Not enough goods in stock!'
//       : 'The order is accepted, our manager will contact you';
//   // Change code above this line
//   console.log(message);
//   return message;
// }

// checkStorage(10, 10);

// function checkStorage(available, ordered) {
//   let message;

//   message =
//     ordered > available
//       ? 'Not enough goods in stock!'
//       : 'The order is accepted, our manager will contact you';

//   return message;
// }

// function getSubscriptionPrice(type) {
//   let price;
//   // Change code below this line

//   switch (
//     type // Change this line
//   ) {
//     case 'starter': // Change this line
//       price = 0; // Change this line
//       break;

//     case 'professional': // Change this line
//       price = 20; // Change this line
//       break;

//     case 'organization': // Change this line
//       price = 50; // Change this line
//       break;
//   }

//   console.log(price);

//   // Change code above this line
//   return price;
// }

// getSubscriptionPrice('professional');

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;
//   // Change code below this line
//   switch (password) {
//     case ADMIN_PASSWORD:
//       message = 'Welcome!';
//       break;

//     case null:
//       message = 'Canceled by user!';
//       break;

//     default:
//       message = 'Access denied, wrong password!';
//   }
//   // Change code above this line
//   return message;
// }

// function getShippingCost(country) {
//   let message;
//   // Change code below this line
//   let price;

//   switch (country) {
//     case 'China':
//       price = 100;
//       break;

//     case 'Chile':
//       price = 250;
//       break;

//     case 'Australia':
//       price = 170;
//       break;

//     case 'Jamaica':
//       price = 120;
//       break;
//   }

//   switch (country) {
//     case 'China':
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;

//     case 'Chile':
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;

//     case 'Australia':
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;

//     case 'Jamaica':
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;

//     default:
//       message = 'Sorry, there is no delivery to your country';
//   }
//   // Change code above this line
//   return message;
// }

// function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`; // Change this line
//   console.log(message);
//   return message;
// }

// getNameLength('Polyц');

// const courseTopic = 'JavaScript essentials';
// // Change code below this line

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[20];

// console.log(courseTopicLength);

// console.log(firstElement);

// console.log(lastElement);

// function getSubstring(string, length) {
//   const substring = string.slice(0, length); // Change this line

//   return substring;
// }

// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line
//   if (message.length === maxLength) {
//     result = message;
//   } else if (message.length > maxLength) {
//     result = `${message.slice(0, maxLength)}...`;
//   }

//   /// Change code above this line
//   console.log(result);
//   return result;
// }

// function normalizeInput(input) {
//   const normalizedInput = input.toLowerCase(); // Change this line

//   return normalizedInput;
// }

// function checkForName(fullName, name) {
//   const result = fullName.includes(name); // Change this line
//   return result;
// }

// function checkForSpam(message) {
//   let result;
//   // Change code below this line

//   function checkForSpam(message) {
//   let result;
//   // Change code below this line

//   const messageToLowerCase = message.toLowerCase();

//   console.log(message);
//   console.log(messageToLowerCase);

//   if (messageToLowerCase.includes("sale") || messageToLowerCase.includes("spam")){
//     result = true;
//   } else {
//     result = false;
//   }

//   console.log(result);
//   // Change code above this line
//   return result;
// }

// checkForSpam('Amazing SalE, only tonight!');
