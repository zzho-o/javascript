const fs = require('fs');
const filepath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
let input = fs.readFileSync('./input.txt').toString().trim().split('\n').map(item => item.trim());
solution(input);
function solution(input){
    const num = input.shift().split('').map(item => +item);
    let result = 0;
    for(let i of num){
        i <= 1 || result <= 1 ? result += i : result *= i;
    }
    console.log(result)
}
// 02984