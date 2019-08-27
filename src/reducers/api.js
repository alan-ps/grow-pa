/**
 * Update an object.
 *
 * Encapsulate the idea of passing a new object as the first parameter to
 * Object.assign to ensure we correctly copy data instead of mutating.
 */
export function updateObject(oldObject, newValues) {
  return Object.assign({}, oldObject, newValues);
}

/**
 * Create a reducer.
 *
 * Use a function that creates a lookup table of action types to case functions
 * instead of switch statements.
 */
export function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    } else {
      return state;
    }
  }
}
