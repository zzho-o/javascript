const fs = require('fs');
const filepath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().trim().split('\n').map(item => item.trim());
solution(input);
function solution(input){
    const num = +input.shift();
    const t = input.shift().split(' ').map(item => +item);
    const dish = [];
    const asw = [];
    s = t.reduce((pre,cur) => pre+cur,0)
    console.log(s)
    // for(let i = 0; i < solution;)
}