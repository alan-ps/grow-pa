/**
 *
 * @param str
 * @param count
 *
 * @returns {string}
 */
export function getCode(str, count = 2) {
  let code = '';
  let res = str.split(" ");

  for (let i = 0; i < res.length; i++) {
    code += res[i].charAt(0);
    if (i === count) break;
  }

  return code;
}

/**
 *
 * @param sortBy
 * @returns {Function}
 *
 * @constructor
 */
export function PGASort(sortBy, sortType) {
  return function (a, b) {

    if (a[sortBy] === b[sortBy]) return 0;

    if (sortType === 'desc')  {
      return a[sortBy] < b[sortBy] ? -1 : 1;
    }
    return a[sortBy] < b[sortBy] ? 1 : -1;
  }
}

/**
 *
 * @param filterPhrase
 * @returns {Function}
 *
 * @constructor
 */
export function PGAFilter(filterPhrase) {
  return function (data) {
    const type = 'title';
    return data[type].toLowerCase().startsWith(filterPhrase.toLowerCase());
  }
}

export function PGAGetKey(items, key='key') {
  if (!items.length) {
    return 1;
  }

  let sorted = Array.prototype.slice.call(items).sort(PGASort(key, 'asc'));
  return sorted[0][key] + 1;
}
