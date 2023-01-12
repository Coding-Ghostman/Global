function greet(){
    console.log('Welcome to regular greet function')
}

greet()
var greetnew = function (){
    console.log('Welcome to nameless function greetnew')
}
greetnew()

var greetnewarrow=() =>console.log('welcome to arrow function') // ES6 arrow funcion (ES6 -> ECMASCRIPT 6)

greetnewarrow()


var addregular = function(n1,n2){
    return n1+n2
}
result = addregular(100,120)
console.log('result of addition regular nameless function ',result)

var addarrow =(n1,n2)=>n1+n2 // automatic return
result =addarrow(110,120)
console.log('add arrow ',result)

var sireg = function(p,r,t){
    return (p*r*t)/100
}

si= sireg(10000,4,1)
console.log('simple interest ',si)

document.getElementById('answer').value = si;

var siarrow = (p,r,t)=>(p*r*t)/100
si=siarrow(20000,4,2)
console.log('simple interest arrow ',si)

var n = prompt("Enter a number")
var prime = (n) => {
    var count = 0;
    for(i = 1; i <= n/2; i++)
        if(n % i == 0)
            count = count + 1;
    if(count == 1)
        alert("It is a prime number")
    else
        alert("It is not a prime number");
}

prime(n)


const marks = [50, 60, 90, 80, 45, 87]
var v = (prev, curr) => {  
    return prev + curr;
}

const sum = marks.reduce((prev, curr) => {  
    return prev + curr;
});

console.log(sum);

const marks_map = marks.map((increment) => {
    return increment + 1
});
console.log(marks_map);

const marks_avg = marks.filter((mark) => {
    return mark >= 80
});
console.log(marks_avg);
[a, ...b] = marks_avg;

console.log(...marks_avg, ...marks);
console.log(a, b)

var c = (n,m) => {
    return n + m;
}

console.log(c(4,6))