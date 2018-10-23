export const SORT_LIST = 'sortReducer/SORT_LIST'
export const SAVE_VIEW = 'sortReducer/SAVE_VIEW'

export const sortList = sortBy => ({
  type: SORT_LIST,
  payload: {
    sortBy
  }
})

export const saveView = currentView => ({
    type: SAVE_VIEW,
    payload: {
      currentView
    }
})

const reducer = (state = {}, action = {}) => {
  const { type, payload } = action
  switch(type) {
    case SORT_LIST:
      return { ...state, sortBy: payload.sortBy }
    case SAVE_VIEW:
      return { ...state, currentView: payload.currentView }
    default:
      return state
  }
}

export default reducer