let str = `On 15.09.2025 we will share a detailed report about the latest project results.
This report will include performance metrics, upcoming goals, and recommendations for the next development phase.
For additional information, you can always visit: https://google.com

The next milestone is scheduled for 01.10.2025, where we will present updated statistics and release notes.
Please make sure to follow the timeline carefully, since the final deadline is set for 20.12.2025.

#ProjectUpdate #Development #TechNews #Reports`;

let pattern1 = /#{1}\w{1,}/g;

let result1 = str.match(pattern1);

console.log(result1)//хештеги

let pattern2 = /\d{2}\.\d{2}\.\d{4}/g;

let result2 = str.match(pattern2);

console.log(result2)//дати

let pattern3 = /https:\/\/\S+/g;

let result3 = str.match(pattern3);

console.log(result3)//посилання

let userName = 'Loredjij562';

let patternUserName = /\b[A-Z][a-z]{3,15}\d*\_*/g;

let resultUserName = userName.match(patternUserName);

console.log(resultUserName)