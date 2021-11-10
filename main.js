console.log('#####################################################');
console.log('Week 1 - Day 4')
console.log('Tuwaiq Academy   JS')
console.log('#####################################################');

//The Homework
function person(name_, age_) {
    return `My name is ${name_} and my age is ${age_}`;
}
console.log(person('Mohammad', 33));

function sub(num1, num2) {
    return 'Num1 - Num2 = '+(num1 - num2);
}
console.log(sub(25, 5));

function mul(num1, num2) {
    return 'Num1 * Num2 = '+(num1 * num2);
}
console.log(mul(5, 5));

function remind(num) {
    return 'Num % 3 = '+(num % 3);
}
console.log(remind(25));

function stringCount(string) {
    return 'string length: ' + (string.length);
}
console.log(stringCount('focus on your book'));

function indexReturn(indexNum) {
    return 'first index: ' + (indexNum[0])
}
console.log(indexReturn('A B C D'));