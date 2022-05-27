
// Q1. 주어진 배열을 문자열로 변환해라
// Array.prototype.join()
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/join
{
  console.log('Q1');
  const fruits = ['apple', 'banana', 'orange'];
  const result = fruits.join('|');
  console.log(result);
}

// Q2. 주어진 문자열을 배열로 변환해라
// String.prototype.split()
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/split
{
  console.log('Q2');
  const fruits = '🍎,🥝,🍌,🍒';
  const result = fruits.split(',');
  console.log(result);
}

// Q3. 배열의 순서를 거꾸로
// Array.prototype.reverse()
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
{
  console.log('Q3');
  const array = [1, 2, 3, 4, 5];
  const result = ArrayUtil.reverse(array);
  console.log(array, result);
}

// Q4. 0번, 1번 요소를 제외한 나머지 요소를 포함한 배열추출
// Array.prototype.slice()
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
{
  console.log('Q4');
  const array = [1, 2, 3, 4, 5];
  const result = ArrayUtil.pickByIdxIdx(array, 2, 4);
  console.log(array, result);
}

const students = [
  { name: 'A', age: 29, enrolled: true, score: 45 },
  { name: 'B', age: 28, enrolled: false, score: 80 },
  { name: 'C', age: 30, enrolled: true, score: 90 },
  { name: 'D', age: 40, enrolled: false, score: 66 },
  { name: 'E', age: 18, enrolled: true, score: 88 },
];


// Q5. score 가 90 인 학생을 찾아라
// Array.prototype.find()
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/find
{
  console.log('Q5');
  const result = students.find((student, idx) => {
    if (student.score === 90) {
      return true;
    }
  });
  console.log(students, result);
}

// Q6. enrolled 가 true 인 학생들을 찾아라
// Array.prototype.filter()
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
{
  console.log('Q6');
  const result = students.filter((student, idx) => {
    if (student.enrolled === true) {
      return true;
    }
  });
  console.log(students, result);
}



// Q6.1. enrolled 가 true 인 학생들을 찾아서 score를 10점으로 치환해라.
// 원본인 students 배열은 유지한다.
// Array.prototype.filter()
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
{
  console.log('Q6.1.');
  const result = JsonUtil.replaceAll(students, "enrolled", true, "score", 10);
  console.log(students, result);
}



// Q7. students 배열에서 점수만 뽑아서 새로운 배열을 만들어라
// Array.prototype.map()
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map
{
  console.log('Q7');
  const result = students.map((student, idx) => {
    return student.score;
  });
  console.log(result);
}

// Q8. students 배열안에 50 점보다 낮은 학생이 있는지
// Array.prototype.some()
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/some
{
  console.log('Q8');
  const result = students.some((student, idx) => {
    if (student.score < 50) {
      return true;
    }
  });
  console.log(result);
}

// Q9. students 의 score 의 평균 점수는?
// Array.prototype.reduce()
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
{
  console.log('Q9');
  const result = students.reduce((prev, curr) => {
    console.log(curr.score);
    return prev + curr.score;
  }, 0);
  console.log(result / students.length);
}

// Q10. students 의 score가 80 이하인 점수를 문자열로 변환
// map + filter + join
{
  console.log('Q10');
  let result = students
    .map((student, idx) => {
      return student.score;
    })
    .filter((score) => {
      if (score <= 80) {
        return true;
      }
    })
    .join();
  console.log(result);
}

// Q11. 낮은 점수가 먼저 나오게 정렬
{
  console.log('Q11');
  const result = students
    .map((student, idx) => {
      return student.score;
    })
    .sort();
  console.log(result);
}


// Q12. score 가 90 점인 학생 삭제
{
  console.log('Q12');
  const result = JsonUtil.removeByKeyValue(students, "score", 90);
  console.log(result);
}


