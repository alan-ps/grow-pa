import { updateObject, createReducer } from './api';

const initialState = {
  actionItemType: 'goal',
  value: '',
  group: '',
  goals: 0,
  closedGroups: []
};

// Handler for a specific case ("case reducer").
function switchForm(state, action) {
  return updateObject(state, {
    actionItemType: action.actionItemType,
    value: action.value
  });
}
function refreshForm(state, action) {
  return updateObject(state, {
    value: ''
  });
}
function actionItemFetch(state, action) {
  return updateObject(state, {
    goals: action.goals
  });
}

// Handler for an entire slice of state ("slice reducer").
const goalReducer = createReducer(initialState, {
  ACTION_ITEM_FETCH: actionItemFetch,
  SWITCH_FORM: switchForm,
  REFRESH_FORM: refreshForm
});

export default goalReducer;
