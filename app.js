///////////////////////////////////////////////////////////////////////////////////////

// Chapter 21-25 PDF
// Question 1
// var firstName = "Ahmed";
// var lastName = "Raza";
// var fullName = firstName + " " + lastName;
// document.write(fullName.fontsize(4).bold());
// document.write("<br>");

// Question 2
// var mobile = window.prompt("Enter Your Favorite Mobile Phone Model ");
// var length = mobile.length;
// document.write("My Favorite Phone is : " + mobile);
// document.write("<br>");
// document.write("Length Of String : " + length);
// document.write("<br>");

// Question 3
// var pakistan = "Pakistani";
// var index = pakistan.indexOf('n');
// document.write("String: " + pakistan);
// document.write("<br>");
// document.write("Inddex of ' n ': " + index);
// document.write("<br>");

// Question 4
// var hello = "Hello World";
// var index = hello.lastIndexOf('l');
// document.write("String: " + hello);
// document.write("<br>");
// document.write("Index of ' l ': " + index);
// document.write("<br>");

// Question 5
// var pakistan = "Pakistani";
// var index = pakistan[3];
// document.write("String: " + pakistan);
// document.write("<br>");
// document.write("Character At Index 3: " + index);
// document.write("<br>");

// Question 6
// var string1 = "Ahmed ";
// var string2 = "Raza ";
// var fullString = string1.concat(string2);
// document.write(fullString);
// document.write("<br>");

// Question 7
// var hyderabad = "Hyderabad";
// var islamabad = hyderabad.replace("Hyderabad", "Islamabad");
// document.write("City: " + hyderabad);
// document.write("<br>");
// document.write("After Replacement: " + islamabad);
// document.write("<br>");

// Question 8
// var message =
//   "Ali and Sami are best friends. They play cricket and football together.";
// var replace = message.replace("and", "&");
// var replace1 = replace.replace("and", "&");
// document.write(message);
// document.write("<br>");
// document.write("<br>");
// document.write("After Replacement: <br>" + replace1);
// document.write("<br>");

// Question 9
// var value = "472";
// document.write("Value: " + value + "<br>");
// document.write("Type : " + typeof value + "<br>" + "<br>");
// document.write("Value: " + +value + "<br>");
// document.write("Type : " + typeof +value + "<br>");

// Question 10
// var input = window.prompt("User Input ");
// document.write("User Input: " + input + "<br>");
// document.write("UpeerCase Input: " + input.toUpperCase() + "<br>");

// Question 11
// var input1 = window.prompt("User Input ");
// document.write("User Input: " + input1 + "<br>");
// var sentence = input1.toLowerCase().split(" ");
// for (var i = 0; i < sentence.length; i++) {
//   sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
//   document.write("TitleCase Input: " + sentence.join(" ") + "<br>");
// }
// document.write("<br>");

// Question 12
// var number = 35.36;
// var result = number.toString();
// var result1 = result.replace(".", "");
// document.write("Number: " + number + "<br>");
// document.write("Result: " + result1 + "<br>");

// Question 13
// var input13 = window.prompt("Enter User Name ");
// var input12 = input13.charCodeAt();
// for (let i = 0; i < input13.length; i++) {
//   if (input12 >= 33 && input12 <= 47) {
//     alert("Please Enter a Valid Username" + " " + input13);
//     break;
//   } else if (input12 >= 58 && input12 <= 64) {
//     alert("Please Enter a Valid Username" + " " + input13);
//     break;
//   } else {
//     document.write("Your Username is : " + input13 + "<br>");
//     break;
//   }
// }

// Question 14
// var bakery = ["cake", "apple pie", "cookie", "chips", "patties"];
// var element = false;
// var searching = window.prompt(
//   "Welcome to ABC Bakery, What do you want to order sir/ma'am?".toLowerCase()
// );
// var indexOf = bakery.indexOf(searching);
// if (indexOf !== -1) {
//   document.write(
//     searching +
//       " is " +
//       "Avaliable".bold() +
//       " at index " +
//       indexOf +
//       " in our Bakery"
//   );
// } else {
//   document.write(
//     "We Are Sorry " +
//       searching +
//       " is " +
//       " Not Avaliable".bold() +
//       " in our Bakery"
//   );
// }
// document.write("<br>");

// Question 15
// var password = window.prompt("Enetr Password");
// var password1 = password.charCodeAt();
// var password2 = password1.toString();
// for (let j = 0; j < password.length; j++) {
//   if (
//     (password.length > 6 && password1 >= 97 && password1 <= 122) ||
//     (password1 >= 65 && password1 <= 90)
//   ) {
//     document.write("You enter Password: " + password + "<br>");
//     break;
//   } else {
//     alert("You Have to Enter At least 6 Characters");
//     alert("Password can not be start with number");
//     alert("Please Enter a Valid password");
//     break;
//   }
// }
// document.write("<br>");

// Question 16
// var university = "University of Karachi";
// var split = university.split("");
// for (let k = 0; k < university.length; k++) {
//   document.write(split[k] + "<br>");
// }
// document.write("<br>");

// Question 17
// var character = window.prompt("User Input");
// var characterLength = character.length;
// console.log(characterLength);
// var lastCharacter = character.charAt(characterLength - 1);
// document.write("User Input:" + character + "<br>");
// document.write("Last Character of Input:" + lastCharacter);
// document.write("<br>");

// Question 18
var temp = "The quick brown fox jumps over the lazy dog";
temp = temp.toLowerCase()
var count = (temp.match(/the/g) || []).length;
// The ‘g’ in the function specifies global which is used to search for an entire string rather than stop by finding the first occurrence.
if (count > 0) {
    document.write("There are " + count + " occurrence(s) of the word 'the'");
} else {
    document.write("No word found");
}

///////////////////////////////////////////////////////////////////////////////////////

// Chapter 26-30 PDF
// Question 1
// var positiveNumber = window.prompt("Enter Positive Float Value");
// document.write("Number: " + positiveNumber + "<br>");
// var roundoffValue = Math.round(positiveNumber);
// document.write("Round Off Value: " + roundoffValue + "<br>");
// var floorValue = Math.floor(positiveNumber);
// document.write("Floor Value: " + floorValue + "<br>");
// var ceilValue = Math.ceil(positiveNumber);
// document.write("Ceil Value: " + ceilValue + "<br>");

// Question 2
// var negativeNumber = window.prompt("Enter Positive Float Value");
// document.write("Number: " + negativeNumber + "<br>");
// var roundoffValue = Math.round(negativeNumber);
// document.write("Round Off Value: " + roundoffValue + "<br>");
// var floorValue = Math.floor(negativeNumber);
// document.write("Floor Value: " + floorValue + "<br>");
// var ceilValue = Math.ceil(negativeNumber);
// document.write("Ceil Value: " + ceilValue + "<br>");

// Question 3
// var absValue = window.prompt("Enter Negative Value");
// var absoluteValue = Math.abs(absValue);
// document.write(
//   "The Absolute Value of " + absValue + " is " + absoluteValue + "<br>"
// );

// Question 4
// var diceValue = Math.floor(Math.random() * 7);
// var diceValue1 = Math.floor(Math.random() * 7);
// document.write("Random Dice Value: " + diceValue + " <br> ");
// document.write("Random Dice Value: " + diceValue1 + " <br> ");

// Question 5
// var coinValue = Math.floor(Math.random() * 3);
// document.write(coinValue + " <br> ");
// if (coinValue == 2) {
//   document.write("Random Coin Value: " + " Head " + " <br> ");
// } else if (coinValue == 1) {
//   document.write("Random Coin Value: " + " Tail " + " <br> ");
// } else {
//   document.write("Try Again " + " <br> ");
// }

// Question 6
// var randomValue = Math.floor(Math.random() * 101);
// document.write("Random Value Between 1 & 100 is: " + randomValue + " <br> ");

// Question 7
// var weight = window.prompt("Enter Weight in Kilogram (Only Number)");
// document.write(
//   "This is the Example you Can enter Like That" +
//     "<br>" +
//     "<br>" +
//     "a. 50 " +
//     " <br> "
//   // + "b. 50kgs " +
//   // " <br> " +
//   // "c. 50.2kgs " +
//   // " <br> " +
//   // "d. 50.2kilograms "
// );
// if (isNaN(weight)) {
//   alert("You Enter Wrong Input");
// } else {
//   document.write(
//     "<br>" +
//       "<br>" +
//       "The Weight of User is " +
//       weight.fontcolor("red") +
//       " Kilograms" +
//       "<br>"
//   );
// }

// Question 8
// var secretNumber = Math.floor(Math.random() * 11);
// var userInput = window.prompt("Enter a Number Between 1 & 10");
// if (secretNumber === userInput) {
//   alert("Congratulations You Guess The Right Number");
// } else {
//   alert("Sorry...! Try Again");
// }

///////////////////////////////////////////////////////////////////////////////////////

// Chapter 31-34 PDF
// Question 1
// var curDate = new Date();
// document.write(curDate + "<br>");

// Question 2
// const monthNames = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];
// const curmonth = new Date();
// alert("Current Month:  " + monthNames[curmonth.getMonth()]);
// document.write("<br>");

// Question 3 & 4
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var now = new Date();
// var theDay = now.getDay();
// var nameOfToday = dayNames[theDay];

// if (nameOfToday == "Sat" || "Sun") {
//     alert("Today is " + nameOfToday);
//   alert("It’s Fun day");
// } else {
//     alert("Today is " + nameOfToday);
// }
// document.write("<br>");

// Question 5
// var count = [
//   1,
//   2,
//   3,
//   4,
//   5,
//   6,
//   7,
//   8,
//   9,
//   10,
//   11,
//   12,
//   13,
//   14,
//   15,
//   16,
//   17,
//   18,
//   19,
//   20,
//   21,
//   22,
//   23,
//   24,
//   25,
//   26,
//   27,
//   28,
//   29,
//   30,
//   31,
// ];
// const curmonth = new Date();
// var theDate = curmonth.setDate();
// var dateOfToday = count[theDate];
// if (dateOfToday > 16) {
//   document.write("First fifteen days of the month");
// } else {
//   document.write("Last days of the month");
// }
// document.write("<br>");

// Question 6
// var curDate = new Date();
// var currMills = curDate.getMilliseconds();
// var millsSince = curDate.getTime();
// var minutesSince = millsSince / (1000 * 60);
// document.write("Current Date: " + curDate + "<br>");
// document.write(
//   "Elasped milisecond since Junary 1, 1970: " + millsSince + "<br>"
// );
// document.write(
//   "Elasped minutes since Junary 1, 1970: " + minutesSince + "<br>"
// );

// Question 7
// function formatAMPM(date) {
//   var hours = date.getHours();
//   //   var minutes = date.getMinutes();
//   var ampm = hours >= 12 ? "PM" : "AM";
//   //   hours = hours % 12;
//   hours = hours ? hours : 12; // the hour '0' should be '12'
//   //   minutes = minutes < 10 ? "0" + minutes : minutes;
//   //   var strTime = hours + ":" + minutes + " " + ampm;
//   var onlyAmPm = ampm;
//   //   return strTime;
//   return onlyAmPm;
// }
// document.write(" Its " + formatAMPM(new Date()) + "<br>");

// Question 8
// let laterDate = new Date(2020, 11, 31);
// laterDate.setDate(laterDate.getDate());
// document.write(laterDate);
// document.write("<br>");

// Question 9
// var ramzanDate = new Date("June 18 , 2015 00:00:00");
// var diffinMillisec = Math.abs(new Date() - ramzanDate);
// var totalDays = Math.floor( diffinMillisec/(1000*3600*24))
// document.write(totalDays+"  days are passed since 1st ramadan 2015")
// document.write("<br>")

// Question 10 
// var referenceDate = new Date("Jan 01 2015 00:00:00");
// var diffinMillisec = Math.abs(new Date("Dec 05 2015 22:50:16") - referenceDate);
// document.write(diffinMillisec)
// var totalSecond = Math.floor((diffinMillisec/1000) / 60 );
// document.write("<br>"+ totalSecond +" seconds have passed since begiining of 2015 ")

// Question 11 
// var e = new Date()
// document.write(e);
// var d = new Date();
// d.setHours(d.getHours() - 1);
// document.write("<br>" +" 1 hour ago, it was "+d)

// Question 12 
// var c = new Date()
// var d = new Date();
// d.setFullYear(d.getFullYear() - 100);
// document.write("TODAY : " + c + "<br>" + "BEFORE 100 YEARS: " + d + "<br>")

// Question 13 
// var r = window.prompt("Enter Your Age")
// var d = new Date();
// var y=d.getFullYear()-r;
// document.write("your age is  "+ r+"<br>"+"your birth year is   "+ y)

// Question 14 
// var d = new Date();
// var month = new Array();
// month[0] = "January";
// month[1] = "February";
// month[2] = "March";
// month[3] = "April";
// month[4] = "May";
// month[5] = "June";
// month[6] = "July";
// month[7] = "August";
// month[8] = "September";
// month[9] = "October";
// month[10] = "November";
// month[11] = "December";
// var monthName = month[d.getMonth()];
// var unit= 410
// var p=16
// var netAmount = unit*p;
// var latecharges=350;
// var latePayment=netAmount+latecharges;
// document.write("Customer Name: ABC customer"+"<br>"+"Month: "+ monthName +"<br>"+"No. of Units: "
// +unit+"<br>"+"No. of charges per unit: "+p+"<br>"+"<br>"+"<br>"+"Net Amount Payable (within Due Date): "+netAmount
// +"<br>"+"Late Payment Surcharge: "+latecharges+"<br>"+"Gross Amount Payable (after Due Date): "+ latePayment);

///////////////////////////////////////////////////////////////////////////////////////

// Chapter 35-38 PDF
// Question 1
// function tellTime() {
//   var now = new Date();
//   var theHr = now.getHours();
//   var theMin = now.getMinutes();
//   document.write("Current time: " + now);
// }
// tellTime();
// document.write("<br>");

// Question 2
// function fullName() {
//   var firstName = "Ahmed";
//   var lastName = "Raza";
//   var name = firstName + " " + lastName;
//   document.write(name);
// }
// fullName();
// document.write("<br>");

// Question 3
// function addition() {
//   var input1 = window.prompt("Enter First Number");
//   var input2 = window.prompt("Enter Second Number");
//   var add = Number(input1) + Number(input2);
//   document.write("Addition of Your Input Values is: " + add);
// }
// addition();
// document.write("<br>");

// Question 4
// function calculator() {
//   var input1 = window.prompt("Enter First Number");
//   var input2 = window.prompt("Enter Second Number");
//   var input3 = window.prompt("Enter Operation");
//   var add = Number(input1) + Number(input2);
//   var sub = Number(input1) - Number(input2);
//   var mul = Number(input1) * Number(input2);
//   var div = Number(input1) / Number(input2);
//   if (input3 == "+") {
//     document.write(
//       "Addition of Your Input Values  " +
//         input1 +
//         " Plus " +
//         input2 +
//         " is: " +
//         add
//     );
//   } else if (input3 == "-") {
//     document.write(
//       "Subtraction of Your Input Values" +
//         input1 +
//         " Minus " +
//         input2 +
//         " is: " +
//         sub
//     );
//   } else if (input3 == "*") {
//     document.write(
//       "Multiplication of Your Input Values" +
//         input1 +
//         " Multiply by " +
//         input2 +
//         " is: " +
//         mul
//     );
//   } else if (input3 == "/") {
//     document.write(
//       "Division of Your Input Values" +
//         input1 +
//         " Divided by " +
//         input2 +
//         " is: " +
//         div
//     );
//   } else {
//     document.write("Wrong Input or Operation");
//   }
// }
// calculator();
// document.write("<br>");

// Question 5
// function sqrt() {
//   var value = window.prompt("Enter Value To Find The Square Of Them");
//   let value1 = Math.pow(value, 2);
//   document.write("Square of " + value + " is " + value1);
// }
// sqrt();
// document.write("<br>");

// Question 6
// function factorial(n) {
//   let answer = 1;
//   if (n == 0 || n == 1) {
//     return answer;
//   } else {
//     for (var i = n; i >= 1; i--) {
//       answer = answer * i;
//     }
//     return answer;
//   }
// }
// let n = window.prompt("Enter Nmber");
// answer = factorial(n);
// document.write("The factorial of " + n + " is " + answer);
// document.write("<br>");

// Question 7
// function counting() {
//   var startingNumber = window.prompt("Enter Starting Number");
//   var endingNumber = window.prompt("Enter Ending Number");
//   for (let i = startingNumber; i <= endingNumber; i++) {
//     document.write([i] + "<br>");
//   }
// }
// counting();
// document.write("<br>");

// Question 8
// function calculateHypotenuse(sideA, sideB) {
//   var side = Math.pow(sideA, 2) + Math.pow(sideB, 2);
//   document.write("The Hypotenuse: " + side + "<br>");
//   function calculateSquare(side) {
//     console.log(side);
//     var square = Math.sqrt(side);
//     document.write("After Square: " + square);
//     return square;
//   }
//   calculateSquare(side);
// }
// calculateHypotenuse(4, 3);
// document.write("<br>");

// Question 9
// function areaOfTriangle(width, height) {
//   var area = width * height;
//   document.write("Area is: " + area);
// }
// document.write("Arguments As Value" + "<br>");
// areaOfTriangle(4, 3);
// document.write("<br>");
// var wid = 5;
// var hei = 6;
// document.write("Arguments As Variable" + "<br>");
// areaOfTriangle(wid, hei);
// document.write("<br>");

// Question 10
// function isPalindrome(word) {
//   var wordRev = "";
//   for (var i = word.length; i > 0; i--) {
//     wordRev += word[i - 1];
//   }
//   if (wordRev === word) {
//     document.write("Given Word is Palindrom");
//   } else {
//     document.write("Given Word is Not a Palindrom");
//   }
//   return word == wordRev;
// }
// isPalindrome("eye");
// document.write("<br>");

// Question 11
// function titleCase(string) {
//   var splitString = string.toLowerCase().split(" ");
//   for (var i = 0; i < splitString.length; i++) {
//     splitString[i] =
//       splitString[i].charAt(0).toUpperCase() + splitString[i].substring(1);
//   }
//   return splitString.join(" ");
// }
// // function upper(str) {
// //   return str.replace(/(^| )./g, (x) => x.toUpperCase());
// // }
// document.write(titleCase("the quick brown fox" + "<br>"));

// Question 12
// function longestWord(string) {
//   var str = string.split(" ");
//   var longest = 0;
//   var word = null;
//   for (var i = 0; i <= str.length - 1; i++) {
//     if (longest < str[i].length) {
//       longest = str[i].length;
//       word = str[i];
//     }
//   }
//   return word;
// }
// var variable = "'Web Development Tutorial";
// document.write(longestWord(variable));

// Question 13
// function char_count(str, letter) {
//   var letter_Count = 0;
//   for (var position = 0; position < str.length; position++) {
//     if (str.charAt(position) == letter) {
//       letter_Count += 1;
//     }
//   }
//   return letter_Count;
// }
// let variable = "JSResourceS.com".toLowerCase();
// document.write(char_count(variable, "o"));
// document.write("<br>");

// Question 14
// function calcCircumference(radius) {
//   var circum = 2 * Math.PI * radius;
//   document.write("The circumference is  " + circum + "<br>");
//   return circum;
// }
// function calcArea(radius) {
//   var area = Math.PI * radius * radius;
//   document.write("The Area is  " + area + "<br>");
//   return area;
// }
// calcCircumference(4);
// calcArea(4);
// document.write("<br>");
