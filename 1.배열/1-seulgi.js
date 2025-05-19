/*
⏱️ 소요 시간 : 4분
🔍 풀이 여부 : ✅
💡 의사 코드 (Pseudocode)
1. 배열을 순회한다.
2. 배열을 작은 숫자부터 정렬한다.
3. 결과를 반환한다.
*/

// 실제 코드
function solution(input) {
  input.sort((a, b) => a - b);
  return input;
}

console.log(solution([1, -5, 2, 4, 3])); // [-5, 1, 2, 3, 4];
console.log(solution([2, 1, 1, 3, 2, 5, 4])); // [1, 1, 2, 2, 3, 4, 5];
console.log(solution([6, 1, 7])); // [1, 6, 7];
