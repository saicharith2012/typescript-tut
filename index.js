var menu = [
    { name: "Margherita", price: 8 },
    { name: "Pepperoni", price: 10 },
    { name: "Hawaiian", price: 10 },
    { name: "Veggie", price: 8 },
];
var cashInRegister = 100;
var orderQueue = [];
var nextOrderId = 1;
// FUNCTION TO ADD NEW PIZZA
function addNewPizza(pizzaObj) {
    menu.push(pizzaObj);
}
// FUNCTION TO PLACE ORDER
function placeOrder(pizzaName) {
    var selectedPizza = menu.find(function (item) { return item.name === pizzaName; });
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
    order.status = "completed"
    return order;
}
addNewPizza({ name: "Chizza", price: 7 });
console.log(menu);
console.log(placeOrder("Margherita"));
console.log(placeOrder("Pepperoni"));
console.log(orderQueue);
console.log(completeOrder(1));
console.log(cashInRegister);
