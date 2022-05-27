/**
 * 배열의 불변(Immutable) 이슈로 인해 무조건 원본 배열을 복사해서 반환하는 유틸이 필요했다.
 */
const ArrayUtil = {};

/**
 * 배열 요소 거꾸로
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
 * @param {*} array 원본 배열
 * @returns Array
 */
ArrayUtil.reverse = (array) => {
  let _array_copy = Array.from(array);
  return _array_copy.reverse();
}



/**
 * start_idx 에서 부터 cut_cnt 개 만큼 잘라서 버리기
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
 * @param {*} array 원본 배열
 * @param {*} start_idx 자르기 시작할 요소 index
 * @param {*} cut_cnt 자를 요소 개수
 * @returns Array
 */
ArrayUtil.cutByIdxCnt = (array, start_idx, cut_cnt) => {
  let _array_copy = Array.from(array);
  _array_copy.splice(start_idx, cut_cnt);
  return _array_copy;
}

/**
 * start_idx 요소에서 end_idx 요소까지 추출
 * end_idx 없으면 끝까지 추출
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
 * @param {*} array 원본배열
 * @param {*} start_idx 시작 요소 index
 * @param {*} end_idx 끝 요소 inddex
 * @returns Array
 */
ArrayUtil.pickByIdxIdx = (array, start_idx, end_idx) => {
  const _result = array.slice(start_idx, end_idx + 1);
  return _result;
}

/**
 * start_idx 에서 pick_cnt 개 만큼 추출
 * splice() 메서드는 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경합니다.
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
 * @param {*} array 원본 배열
 * @param {*} start_idx 자르기 시작할 요소 index
 * @param {*} cut_cnt 자를 요소 개수
 * @returns Array
 */
ArrayUtil.pickByIdxCnt = (array, start_idx, pick_cnt) => {
  let _array_copy = Array.from(array);
  const _result = _array_copy.splice(start_idx, pick_cnt);
  return _result;
}

