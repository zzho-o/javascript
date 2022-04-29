const fs = require('fs');
const filepath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().trim().split('\n').map(item => item.trim());
solution(input);

function solution(input){
    let [num1,num2] = input.shift().split(' ').map(item => +item);
    let [i,j] = [num1,num2];
    while(num2 > 0){
        [num1,num2] = [num2,num1%num2];
    }
    console.log(num1)
    console.log((i*j)/num1)

}