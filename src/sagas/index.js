import { delay, put, takeLatest, all } from 'redux-saga/effects';
import { PGAFilter, PGASort } from 'utils/helpers';

/**
 *
 * @param action
 */
function* fetchCategories(action) {
  //
  yield delay(500);

  const payload = action.payload;

  let categories = localStorage.getItem('directions');
  categories = categories ? JSON.parse(categories) : [];

  if (payload.category_search && categories) {
    categories = categories.filter(PGAFilter(payload.category_search));
  }

  if (categories) {
    categories.sort(PGASort(payload.category_sort));
  }

  yield put({
    type: 'FETCH',
    categories: categories,
    category_search: payload.category_search,
    category_sort: payload.category_sort
  });
}

/**
 *
 * @param action
 */
function* putCategory(action) {
  const payload = action.payload;

  let categories = localStorage.getItem('directions');
  categories = categories ? JSON.parse(categories) : [];

  const newItem = { title: payload.title };

  categories.push(newItem);

  localStorage.setItem('directions', JSON.stringify(categories));

  yield put({
    type: 'FETCH',
    categories: categories
  });
}

function* actionWatcher() {
  yield takeLatest('FETCH_CATEGORIES', fetchCategories)
  yield takeLatest('CREATE_CATEGORY', putCategory)
}

function* rootSaga() {
  yield all([
    actionWatcher()
  ])
}

export default rootSaga;
