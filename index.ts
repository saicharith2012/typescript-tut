// PIZZA RESTAURANT APP

// custom object type
type Pizza = {
  id: number;
  name: string;
  price: number;
};

// nested object type
type Order = {
  id: number;
  pizza: Pizza;
  status: "ordered" | "completed"; // union type
};

const menu: Pizza[] = [
  { id: 1, name: "Margherita", price: 8 },
  { id: 2, name: "Pepperoni", price: 10 },
  { id: 3, name: "Hawaiian", price: 10 },
  { id: 4, name: "Veggie", price: 8 },
];

let cashInRegister = 100;
const orderQueue: Order[] = [];
let nextOrderId = 1;

// FUNCTION TO ADD NEW PIZZA
function addNewPizza(pizzaObj: Pizza): void {
  menu.push(pizzaObj);
}

// FUNCTION TO PLACE ORDER
function placeOrder(pizzaName: string): Order | undefined {
  const selectedPizza = menu.find((item) => item.name === pizzaName);

  // if selectedPizza is undefined, the program exits even before the execution of the next statement.
  if (!selectedPizza) {
    console.error(`${pizzaName} does not exist in the menu.`);
    return;
  }

  cashInRegister += selectedPizza.price;
  const newOrder: Order = {
    id: nextOrderId++,
    pizza: selectedPizza,
    status: "ordered",
  };
  orderQueue.push(newOrder);
  return newOrder;
}

// FUNCTION TO MARK THE ORDER COMPLETE
function completeOrder(orderId: number): Order | undefined {
  const order = orderQueue.find((item) => item.id === orderId);

  if (!order) {
    console.error(`No order with id ${orderId} found.`);
    return;
  }

  order.status = "completed";
  return order;
}

// FUNCTION TO GET PIZZA DETAIL
// type narrowing
function getPizzaDetail(identifier: number | string): Pizza | undefined{
  if (typeof identifier === "string") {
    return menu.find(
      (item) => item.name.toLowerCase() === identifier.toLowerCase()
    );
  } else if (typeof identifier === "number") {
    return menu.find((item) => item.id === identifier);
  } else {
    throw new TypeError(
      `property ${identifier} must be either a string or a number.`
    );
  }
}

addNewPizza({ id: 5, name: "Chizza", price: 7 });
console.log("Menu: \n", menu, "\n");
console.log("New Order: \n", placeOrder("Margherita"), "\n");
console.log("New Order: \n", placeOrder("Pepperoni"), "\n");
console.log("Order Queue: \n", orderQueue, "\n");
console.log("Completed order: \n", completeOrder(1), "\n");
console.log("Cash in Register: ", cashInRegister, "\n");
console.log("Pizza details with id-2: \n", getPizzaDetail(2), "\n");
console.log(
  "Pizza details with name Margherita: \n",
  getPizzaDetail("Margherita"),
  "\n"
);
