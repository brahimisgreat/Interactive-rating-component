const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};

const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
}

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
} 
//find Final total Price of each customer
//Find refill total
//find if subscription and/or coupon discount applicable
//display total price in message as ......
/*Timmy => "Your grand total is $65"
 Sarah => "Your grand total is $37.5."
 Rocky => "Your grand total is $102.5"
*/


// function to Find refill total
 function findRefillPrice(objectname){
    let refillPrice = objectname.refills * objectname.pricePerRefill
    return refillPrice

 }
 //put the refill totals into variables
 let rockyRefilln  = findRefillPrice(rocky);
 let SarahRefill = findRefillPrice(sarah);
 let TimmyRefill = findRefillPrice(timmy);

//conditional statement to test for coupon and subscription 
function test4discounts(objectname, nameRefill){
 if (objectname.subscription && objectname.coupon){
    let price =  nameRefill * 0.25
    let currentTotal= nameRefill - price
    currentTotal -= 10
    console.log(`Your grand total is ${currentTotal}`)

 }else if (objectname.subscription && !objectname.coupon){
    let price = nameRefill * 0.25
    let currentTotal = nameRefill - price
    console.log(`Your grand total is ${currentTotal}`)

 }else if (!objectname.subscription && objectname.coupon){
    let currentTotal = nameRefill - 10
    console.log(`Your grand total is ${currentTotal}`)
}
}
//results as functions
 test4discounts(rocky, rockyRefilln)
 test4discounts(sarah, SarahRefill)
 test4discounts(timmy, TimmyRefill)

   
    