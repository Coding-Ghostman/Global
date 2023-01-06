// console.log("Working")
// var n = 10
// var c = 20
// console.log("Additon = ", n + c)
// const d = 20
// const e = 4
// var f = d**e
// console.log("Power of 20 to 400 = ", f)

// for (i =0; i<=n;i++) {
//     if(i %2 == 0)
//         console.log("Even Numbers: ", i)
// }

// var num = prompt("What your stupid number: ")
// for (i = 1; i <= 20; i++) {
//     console.log(num + " x " + i + " = " + (num*i))
// }

// var marks = prompt("Enter your marks: ")
// function grade(marks){
//     console.log('====================================');
//     if (marks >90 && marks <=100) {
//         console.log("Grade -- A+");
//     } else if (marks > 80 && marks <= 90){  
//         console.log("Grade -- A");  
//     } else if (marks > 70 && marks <= 80) {    
//         console.log("Grade -- B+");    
//     } else if (marks > 60 && marks <= 70) {
//         console.log("Grade -- B");
//     } else {
//         console.log("Grade-- Less than B");
//     }
//     console.log('====================================');
// }

// grade(marks)
// console.log();

var discount = function(cost) { 
    var discounted
    if (cost <= 10000){
        discounted = cost *(0.05)
    } else if (cost > 10000 && cost <= 20000){
        discounted = cost *(0.1)
    } else {
        discounted = cost *(0.2)
    }
    console.log("Discount given: " + discounted)
    var discountedPrice = cost - discounted
    return discountedPrice
}
var cost = prompt("Ente the price: ")
var price = discount(cost)
console.log("Original Cost: " + cost)
alert("Your discounted price: " + price)
console.log("Your discounted price: " + price)

array 