/*Write a JavaScript Program to display the current day and time in the following format.
Sample Output:
Today is: Tuesday. 
Current time is: 10 PM : 30 : 38 */

let today = new Date;
const dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let day = dayList[today.getDay()];
let hours = today.getHours();
let meridiem = "AM";
let min = today.getMinutes();
let sec = today.getSeconds();

if (hours > 12) {
    hours -= 12;
}else {
    meridiem = "PM";
}

console.log(`Today is: ${day}. \nCurrent time is: ${hours} ${meridiem} : ${min} : ${sec}`)