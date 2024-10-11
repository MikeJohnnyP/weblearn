function giveAname(name = "phuc"){
    console.log("Your name is: " + `${name}`);
}

function giveAnAge(age = "20"){
    console.log("Your age is: " + `${age}`);
}

function takeTimeOut(func1, func2, number){
    setTimeout(() => func1, number);
    setTimeout(() => func2, number + 2000);
}

function GakhoaThan(number) {
   if (number > 10) {
       console.log("hom nay the la du roi");
   } else {
       console.log("Hom nay chua xong");
   } 
}

takeTimeOut(giveAname(), giveAnAge(), 10000);

setTimeout(() => {
    console.log("Elapse 3 seconds");
}, 3000)

GakhoaThan(12);
