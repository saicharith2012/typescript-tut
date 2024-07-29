const menu = [
  { name: "Margherita", price: 8 },
  { name: "Pepperoni", price: 10 },
  { name: "Hawaiian", price: 10 },
  { name: "Veggie", price: 8 },
];

let cashInRegister = 100;
const orderQueue = [];
let nextOrderId = 1;

// FUNCTION TO ADD NEW PIZZA
function addNewPizza(pizzaObj) {
  menu.push(pizzaObj);
}


// FUNCTION TO PLACE ORDER
function placeOrder(pizzaName) {
  const selectedPizza = menu.find((item) => item.name === pizzaName);
  cashInRegister += selectedPizza.price;
  const newOrder = {
    id: nextOrderId++,
    pizza: selectedPizza,
    status: "ordered",
  };
  orderQueue.push(newOrder);
  return newOrder;
}


// FUNCTION TO MARK THE ORDER COMPLETE
function completeOrder(orderId) {
  const order = orderQueue.find((item) => item.id === orderId);
  return order;
}


addNewPizza({name: "Chizza", price: 7})
console.log(menu)
console.log(placeOrder("Margherita"));
console.log(placeOrder("Pepperoni"));
console.log(orderQueue)
console.log(completeOrder(1))
console.log(cashInRegister)