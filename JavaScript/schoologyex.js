// numbers 0, 1, 2, 3, 4, 5, 6
// console.log("go to worK")
// console.log("sleep in")
//if the number is between 1 and 5 print go to work
//if the number is 0 or 6  print sleep in
// var number = 6;
// if (number == 0 || number == 6) {
//     console.log("sleep in");
// }
// else if (number != 0 || number != 6) {
//     console.log("go to worK") 
// }
// exercise #1
// function myFunc(number) {
//     if (number == 0 || number == 6) {
//         console.log("sleep in");
//     }
//     else if (number != 0 && number != 6  && number < 7) {
//         console.log("go to worK") 
//     } 
// } 
// myFunc(6)

//exercise #1 shorter version with an array
// var day = 100

//edge case handling

// if ( day > 6 ) {
    // alert("invalid day!")
// }
// var days = ["Sleep in", "Go to work", "Go to work", "Go to work", "Go to work", "Go to work", "Sleep in"]
// console.log(days[day])

//Exercise 2
//month number = 1 - 12
//year
//console.log("num of days in month")
//if year = 1992 and month = 1, print number of days in month
// var year = 1992;
// var month = 1;
// var numdays = 30
//  if (month == 1 && year == 1992) {
//      console.log(numdays)
//  }
// Adams Code
// function date(month, year){

//     var calendar = {
//         "January": 31,
//         "February": 28,
//         "March": 31,
//         "April": 30,
//         "May": 31,
//         "June": 30,
//         "July": 31,
//         "August": 31,
//         "September": 30,
//         "October": 31,
//         "November": 30,
//         "December": 31
//     };

//     if (month=="February"){ 
//         //There is a leap year every year whose number is perfectly divisible
//         //  by four - except for years which are both divisible by 100 and not 
//         // divisible by 400.
//         // if ( (year % 4 == 0) && ( year % 100 != 0  || year % 400 == 0 )) {
//         //     return calendar.February + 1
//         // } else {
//         //     return calendar.February
//         // }

//         if (year % 400 == 0){
//             return calendar["February"] + 1
//         } else if (year % 100 == 0 ) {
//             return calendar["February"];
//         } else if (year % 4 == 0) {
//             return calendar["February"] + 1
//         } else {
//             return calendar["February"]
//         }


//     }else{
//         return calendar[month]
//     } 

// }

// console.log(date("February", 2003));

// Exercise #3 
// Given the amount of a bill as a number, and a level of service - 
// which can be "good", "fair", or "bad", print the total bill with the tip 
// included. The amount of tip given for each level of service is defined by:
// "good" -> 20%
// "fail" -> 15%
// "bad"  -> 10%
// Extra: Add to "Tip Calculator"...you are also given the number of people 
// to divide the total into. Print the amount for each person to pay. Katie's
// code, then modified by Adam. Converted amount to cents.

function tipCalc(service, total) {
    // var tipAmount;
    // var newTotal;

    // if (service == "good") {
    //     tipAmount = total * 0.2;
    // } else if (service == "fair") {
    //     tipAmount = total * 0.15;
    // } else if (service == "poor") {
    //     tipAmount = total * 0.10;
    // }  else {
    //     console.log('wrong value')
    //     return;
    // }

    // newTotal = tipAmount + total;

    // newTotal = newTotal * 100;
    // newTotal = Math.ceil(newTotal);
    // newTotal = newTotal / 100;

    // console.log("$" + newTotal);

    var tipAmounts = {
        poor: 0.1,
        fair: 0.15,
        good: 0.2
    }
    console.log( (total  *  tipAmounts[service]) + total )
}

tipCalc("good", 175.98)