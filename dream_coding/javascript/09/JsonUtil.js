window.JsonUtil = {};

/**
 * 배열 깊은 복사
 * 2차원 배열의 경우 deep copy 를 완벽 하게 할 수 있는 방법을 아직 찾지 못했다.
 * @param {*} array 
 * @returns 
 */
JsonUtil.copy = (array) => {
  let _array_copy = JSON.parse(JSON.stringify(array));
  return _array_copy;
}

/**
 * Object 로 구성된 Array 를 순회하면서
 * key, value 로 object 를 찾아 
 * 해당 object key, value 를 치환한다.
 * @param {*} array 원본 배열
 * @param {*} find_key 배열 내에서 찾는 Object key
 * @param {*} find_value 배열 내에서 찾는 Object value
 * @param {*} replace_key 치환할 key
 * @param {*} replace_value 치환할 value
 * @returns 
 */
JsonUtil.replaceAll = (array, find_key, find_value, replace_key = null, replace_value = null) => {

  const _array_copy = JsonUtil.copy(array);

  if (replace_key !== null) {
    let i_len = _array_copy.length;
    for (let i = 0; i < i_len; i++) {
      let _obj = _array_copy[i];
      if (_obj[find_key] === find_value) {
        _obj[replace_key] = replace_value;
      }
    }
  }

  return _array_copy;
}

/**
 * index 를 받아서 배열 내부 Object 검사하여 삭제
 * @param {*} array 원본 배열
 * @param {*} remove_idx 지우고 싶은 Object 요소 index
 */
JsonUtil.removeByKeyValue = (array, remove_key, remove_value) => {
  const _array_copy = JsonUtil.copy(array);

  const _result = _array_copy.filter((item, idx) => {
    if (item[remove_key] !== remove_value) {
      return true;
    }
  });

  return _result;
}