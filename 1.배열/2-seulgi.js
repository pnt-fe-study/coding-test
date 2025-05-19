/*
⏱️ 소요 시간 : 5분
🔍 풀이 여부 : ✅
💡 의사 코드 (Pseudocode)
1. 배열 내 중복 요소를 제거한다.
2. 제거된 새 배열 요소를 작은 숫자가 먼저 가도록 나열한다.
3. 나열된 배열을 반환한다.
*/

// 실제 코드
function solution(input) {
  const arr = new Set(input);
  const newArr = [...arr].sort((a, b) => a - b);

  return newArr;
}

console.log(solution([[4, 2, 2, 1, 3, 4]])); // [4, 3, 2, 1]
console.log(solution([2, 1, 1, 3, 2, 5, 4])); // [5, 4, 3, 2, 1]
