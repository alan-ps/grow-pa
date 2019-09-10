




export function getCode(str, count = 2) {
  let code = '';
  let res = str.split(" ");

  for (let i = 0; i < res.length; i++) {
    code += res[i].charAt(0);
    if (i === count) break;
  }

  return code;
}


export function PGASort(sortBy) {
  return function (a, b) {

    if (a['title'] == b['title']) return 0;


    if (sortBy === 'desc')  {
      return a['title'] < b['title'] ? -1 : 1;
    }
    return a['title'] < b['title'] ? 1 : -1;
  }
}

export function PGAFilter(filterPhrase/*, filterType*/) {
  return function (data) {
    //debugger;
    const type = 'title';
    // const type = (filterType == 'genre') ? 'genre' : 'name';
    return data[type].toLowerCase().startsWith(filterPhrase.toLowerCase());
    return filterPhrase.toLowerCase() === data[type].toLowerCase();
  }
}