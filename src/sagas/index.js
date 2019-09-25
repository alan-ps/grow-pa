import { all } from 'redux-saga/effects';
import { actionWatcher } from './category';
import { actionWatcherGoal } from './goal';



function* rootSaga() {
  yield all([
    actionWatcher(),
    actionWatcherGoal()
  ])
}

export default rootSaga;
