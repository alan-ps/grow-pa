import { delay, put, takeLatest, all } from 'redux-saga/effects';
import { PGAGetKey } from 'utils/helpers';

/**
 * Simulates a fetch operation for action items.
 */
function* actionItemFetchAsync(action) {
  //
  yield delay(500);

  let actionItems = localStorage.getItem('action_items');
  actionItems = actionItems ? JSON.parse(actionItems) : [];

  //
  if (actionItems[action.categoryId] == undefined) {
    // return empty array
  }

  yield put({
    type: 'ACTION_ITEM_FETCH',
    goals: actionItems[action.categoryId] || []
  });
}

/**
 * Simulates a put operation for action items.
 */
function* actionItemPutAsync(action) {
  // @TODO change action.category to categoryId.
  const categoryId = action.category;

  let actionItems = localStorage.getItem('action_items');
  actionItems = actionItems ? JSON.parse(actionItems) : [];

  actionItems[categoryId] = actionItems[categoryId] ? actionItems[categoryId] : []; 

  const newItem = {
    // @TODO change "tab" to something another.
    actionItemType: action.actionItemType,
    id: PGAGetKey(actionItems[categoryId], 'id'),
    value: action.value,
    settings: action.settings
  };

  actionItems[categoryId].push(newItem);
  localStorage.setItem('action_items', JSON.stringify(actionItems));
}

export function* actionWatcherGoal() {
  yield takeLatest('ACTION_ITEM_PUT_ASYNC', actionItemPutAsync);
  yield takeLatest('ACTION_ITEM_FETCH_ASYNC', actionItemFetchAsync);
}
