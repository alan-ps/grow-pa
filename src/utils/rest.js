import { PGAFilter, PGASort } from './helpers';

/**
 * Helper function to fetch data from remote API endpoint and update a state.
 */
export function fetchData(props, phrase = '', sortBy='desc') {
  setTimeout(() => {

    // @TODO
    let directions = localStorage.getItem('directions');
    directions = directions ? JSON.parse(directions) : [];


    if (phrase && directions) {
      directions = directions.filter(PGAFilter(phrase));
    }

    if (directions) {

      directions.sort(PGASort(sortBy));
    }

    props.dispatch({ type: 'FETCH', categories: directions, category_search: phrase, category_sort: sortBy});

  }, 500)
}

export function putData(props, ho) {
  let directions = localStorage.getItem('directions');
  directions = directions ? JSON.parse(directions) : [];

  const newItem = { title: ho };

  directions.push(newItem);

  localStorage.setItem('directions', JSON.stringify(directions));
  props.dispatch({ type: 'FETCH', categories: directions });
}
