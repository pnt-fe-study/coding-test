/*
⏱️ 소요 시간 : 35분
🔍 풀이 여부 : ✅
💡 의사 코드 (Pseudocode)
0. 새 공간을 만든다.
1. 배열에 있는 요소 하나씩을 기준으로 둔다.
2. 해당 수에 다른 배열 요소들을 더한 수들을 넣는다. (마지막 요소 순회 제외)
3. 새 공간을 오름차순으로 정렬한다.
*/

function solution(numbers) {
  const newArr = numbers.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < newArr.length - 1; i++) {
    for (let j = i + 1; j < newArr.length; j++) {
      result.push(newArr[i] + newArr[j]);
    }
  }

  return [...new Set(result)];
}
