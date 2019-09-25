import { delay, put, takeLatest, all } from 'redux-saga/effects';
import { PGAFilter, PGASort, PGAGetKey } from 'utils/helpers';

/**
 *
 * @param action
 */
function* fetchCategories(action) {
    //
    yield delay(500);

    const payload = action.payload;

    let categories = localStorage.getItem('categories');
    categories = categories ? JSON.parse(categories) : [];

    if (payload.category_search && categories) {
        categories = categories.filter(PGAFilter(payload.category_search));
    }

    if (categories) {
        categories.sort(PGASort('title', payload.category_sort));
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

    let categories = localStorage.getItem('categories');
    categories = categories ? JSON.parse(categories) : [];

    const newItem = {
        key: PGAGetKey(categories),
        title: payload.title
    };

    categories.push(newItem);

    localStorage.setItem('categories', JSON.stringify(categories));

    yield put({
        type: 'FETCH',
        categories: categories
    });
}

export function* actionWatcher() {
    yield takeLatest('FETCH_CATEGORIES', fetchCategories);
    yield takeLatest('CREATE_CATEGORY', putCategory)
}