import { delay, put, takeLatest, takeEvery } from 'redux-saga/effects';
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
    yield put({
      type: 'ACTION_ITEM_FETCH',
      goals: [],
      // @TODO: Set default
      groups: []
    });
  }
  else {

    const groups = actionItems[action.categoryId].filter(item => (item.actionItemType === 'group' || false));
    const goals = actionItems[action.categoryId].filter(item => (item.actionItemType === 'goal' || false));
    groups.push({ id: 0, value: 'Default group' });
  
    // Assign the goals to the associated goals.
    // for (let index = 0; index < groups.length; index++) {
    //   let group = groups[index];
  
    //   group['items'] = actionItems[action.categoryId].filter(
    //     item => (
    //       (item.actionItemType === 'goal' && group.id === item.settings.group) || false
    //     )
    //   )
    // }
  
    yield put({
      type: 'ACTION_ITEM_FETCH',
      goals: goals,
      groups: groups
    });
  }
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
    settings: action.settings,
    // @TODO:
    weight: PGAGetKey(actionItems[categoryId], 'id')
  };

  actionItems[categoryId].push(newItem);
  localStorage.setItem('action_items', JSON.stringify(actionItems));
}

function* actionItemUpdateAsync(action) {
debugger
}

export function* actionWatcherGoal() {
  yield takeLatest('ACTION_ITEM_PUT_ASYNC', actionItemPutAsync);
  yield takeLatest('ACTION_ITEM_FETCH_ASYNC', actionItemFetchAsync);
  yield takeEvery('ACTION_ITEM_UPDATE_ASYNC', actionItemUpdateAsync);
}
