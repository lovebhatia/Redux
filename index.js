const redux = require("redux")

function changeCount(amount = 1) {
    return {
        type: "CHANGE_COUNT",
        payload: amount
    }
}

//action creaator
function addFavouriteThing(thing){
  return {
    type: "ADD_FAVORITE_THING", //uppper snake case version of method name
    payload: thing
  }
}

const initialState = {
  count: 0,
  favoriteThings: []
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case "CHANGE_COUNT":
            return {
              ...state,
                count: state.count + action.payload
            }
        case "ADD_FAVORITE_THING":
        return {
          ...state,
          favoriteThings: [...state.favoriteThings,action.payload]
         //favoriteThings: state.favoriteThings.push(action.payload)
        }
        default:
            return state
    }
}

const store = redux.createStore(reducer)
store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(changeCount(2))
store.dispatch(addFavouriteThing("raindrop"))
store.dispatch(addFavouriteThing("kittens"))