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
export function PGASort(sortBy) {
  return function (a, b) {

    if (a['title'] == b['title']) return 0;


    if (sortBy === 'desc')  {
      return a['title'] < b['title'] ? -1 : 1;
    }
    return a['title'] < b['title'] ? 1 : -1;
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
    return filterPhrase.toLowerCase() === data[type].toLowerCase();
  }
}