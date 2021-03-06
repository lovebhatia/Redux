const redux = require("redux")
const {combineReducers, createStore} = redux
import countReducer from "./count"
import favoriteThingsReducer from "./favoriteThings"
import youTubeVideoReducer from "./youTubeVideos"
import userReducer from "./user"

//combine the reducers into a single state tree
const rootReducer = combineReducers({
  count : countReducer,
  favoriteThings : favoriteThingsReducer,
  youTubeVideo : youTubeVideoReducer,
  user : userReducer
})

//create the store
const store =createStore(rootReducer)
store.subscribe(() => {
    console.log(store.getState())
})
export default store