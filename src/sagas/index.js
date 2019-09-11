import { delay, put, takeLatest, all } from 'redux-saga/effects';
import { PGAFilter, PGASort } from 'utils/helpers';

/**
 *
 * @param action
 */
function* fetchCategories(action) {

  yield delay(500);

  let categories = localStorage.getItem('directions');
  categories = categories ? JSON.parse(categories) : [];

  if (action.category_search && categories) {
    categories = categories.filter(PGAFilter(action.category_search));
  }

  if (categories) {

    categories.sort(PGASort(action.category_sort));
  }

  yield put({
    type: 'FETCH',
    categories: categories,
    category_search: action.category_search,
    category_sort: action.category_sort
  });
}

function* actionWatcher() {
  yield takeLatest('FETCH_CATEGORIES', fetchCategories)
}

function* rootSaga() {
  yield all([
    actionWatcher()
  ]);
}

export default rootSaga;
