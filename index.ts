// PIZZA RESTAURANT APP

// custom object type
type Pizza = {
  name: string;
  price: number;
};

// nested object type
type Order = {
  id: number;
  pizza: Pizza;
  status: string;
};

const menu = [
  { name: "Margherita", price: 8 },
  { name: "Pepperoni", price: 10 },
  { name: "Hawaiian", price: 10 },
  { name: "Veggie", price: 8 },
];

let cashInRegister = 100;
const orderQueue: Order[] = [];
let nextOrderId = 1;

// FUNCTION TO ADD NEW PIZZA
function addNewPizza(pizzaObj: Pizza) {
  menu.push(pizzaObj);
}

// FUNCTION TO PLACE ORDER
function placeOrder(pizzaName: string) {
  const selectedPizza = menu.find((item) => item.name === pizzaName);

  // if selectedPizza is undefined, the program exits even before the execution of the next statement.
  if (!selectedPizza) {
    console.error(`${pizzaName} does not exist in the menu.`);
    return;
  }

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
function completeOrder(orderId: number) {
  const order = orderQueue.find((item) => item.id === orderId);

  if (!order) {
    console.error(`No order with id ${orderId} found.`);
    return;
  }

  order.status = "completed";
  return order;
}

addNewPizza({ name: "Chizza", price: 7 });
console.log(menu);
console.log(placeOrder("Margherita"));
console.log(placeOrder("Pepperoni"));
console.log(orderQueue);
console.log(completeOrder(1));
console.log(cashInRegister);
