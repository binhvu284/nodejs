// make dish function
const makeDishes = order =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            const done = "Your dish is finish, here is your ";
            resolve(console.log(done + order));
        }, 3000);
    });
}

// order function
const makeOrder = dish => {
    makeDishes(dish);
    console.log('please wait for your ' + dish);
}

// dish menu
const dish1 = "beef steak";
const dish2 = "noodles";
const dish3 = "fries";

// customer order
makeOrder(dish1);
setTimeout(() => makeOrder(dish2), 5000);
setTimeout(() => makeOrder(dish3), 7000);


