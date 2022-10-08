function solution(s) {
  const stack = [];
  let count = 0;
  for (let item of s) {
    if (item === ")") {
      if (stack[stack.length - 1] === "(") {
        stack.pop();
        count += stack.length;
      } else {
        stack.pop();
        count++;
      }
    } else {
      stack.push(item);
    }
  }
  return count;
}

let a = "()(((()())(())()))(())";
console.log(solution(a));

// Refer
// function solution(s) {
//   let answer = 0;
//   let stack = [];
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === "(") stack.push("(");
//     else {
//       stack.pop();
//       if (s[i - 1] === "(") answer += stack.length;
//       else answer++;
//       //stack.pop(); 이 위치에 하면 레이저까지 카운팅한다.
//     }
//   }
//   return answer;
// }

// let a = "()(((()())(())()))(())";
// console.log(solution(a));
