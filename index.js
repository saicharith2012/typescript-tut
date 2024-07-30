// PIZZA RESTAURANT APP
var nextPizzaId = 1;
var cashInRegister = 100;
var orderQueue = [];
var nextOrderId = 1;
var menu = [
    { id: nextPizzaId++, name: "Margherita", price: 8 },
    { id: nextPizzaId++, name: "Pepperoni", price: 10 },
    { id: nextPizzaId++, name: "Hawaiian", price: 10 },
    { id: nextPizzaId++, name: "Veggie", price: 8 },
];
// FUNCTION TO ADD NEW PIZZA
// omitting the id property from Pizza type 
// to accept name and price in the parameter object
function addNewPizza(pizzaObj) {
    menu.push({
        id: nextPizzaId++,
        name: pizzaObj.name,
        price: pizzaObj.price,
    });
}
// FUNCTION TO PLACE ORDER
function placeOrder(pizzaName) {
    var selectedPizza = menu.find(function (item) { return item.name === pizzaName; });
    // if selectedPizza is undefined, the program exits even before the execution of the next statement.
    if (!selectedPizza) {
        console.error("".concat(pizzaName, " does not exist in the menu."));
        return;
    }
    cashInRegister += selectedPizza.price;
    var newOrder = {
        id: nextOrderId++,
        pizza: selectedPizza,
        status: "ordered",
    };
    orderQueue.push(newOrder);
    return newOrder;
}
// FUNCTION TO MARK THE ORDER COMPLETE
function completeOrder(orderId) {
    var order = orderQueue.find(function (item) { return item.id === orderId; });
    if (!order) {
        console.error("No order with id ".concat(orderId, " found."));
        return;
    }
    order.status = "completed";
    return order;
}
// FUNCTION TO GET PIZZA DETAIL
// type narrowing
function getPizzaDetail(identifier) {
    if (typeof identifier === "string") {
        return menu.find(function (item) { return item.name.toLowerCase() === identifier.toLowerCase(); });
    }
    else if (typeof identifier === "number") {
        return menu.find(function (item) { return item.id === identifier; });
    }
    else {
        throw new TypeError("property ".concat(identifier, " must be either a string or a number."));
    }
}
addNewPizza({ name: "Chizza", price: 7 });
addNewPizza({ name: "Chicken Sausage Pizza", price: 11 });
console.log("Menu: \n", menu, "\n");
console.log("New Order: \n", placeOrder("Margherita"), "\n");
console.log("New Order: \n", placeOrder("Pepperoni"), "\n");
console.log("Order Queue: \n", orderQueue, "\n");
console.log("Completed order: \n", completeOrder(1), "\n");
console.log("Cash in Register: ", cashInRegister, "\n");
console.log("Pizza details with id-2: \n", getPizzaDetail(2), "\n");
console.log("Pizza details with name Margherita: \n", getPizzaDetail("Margherita"), "\n");
