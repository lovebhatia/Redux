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

function removeFavouriteThing(thing){
  return {
    type: "REMOVE_FAVORITE", //uppper snake case version of method name
    payload: thing
  }
}

function setYoutubeTitle(title){
return {
    type: "SET_YOUTUBE_TITLE", //uppper snake case version of method name
    payload: title
  }
}

function upvoteVideo() {
  return {
    type: "UPVOTE_VIDEO"
  }
  
}


const initialState = {
  count: 0,
  favoriteThings: [],
  youtubevideo : {
    title: "",
    viewCount:0,
    votes: {
      up: 0,
      down: 0
    }
  }
 
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
         case "REMOVE_FAVORITE":
          const updatearr= state.favoriteThings.filter(thing => thing.toLowerCase()!==action.payload)

          const updatedarr2=removeThings(state.favoriteThings,action.payload)
         
        
          case "SET_YOUTUBE_TITLE":
        return {
          ...state,
          youtubevideo: {
            ...state.youtubevideo,
            title: action.payload
          }
         //favoriteThings: state.favoriteThings.push(action.payload)
        }

        case "UPVOTE_VIDEO":
        return {
          ...state,
          youtubevideo: {
            ...state.youtubevideo,
            votes: {
              ...state.youtubevideo.votes,
              up: state.youtubevideo.votes.up+1

            }
          }
         //favoriteThings: state.favoriteThings.push(action.payload)
        }


        return {
          ...state,
          favoriteThings: updatearr,
          test: updatedarr2
         //favoriteThings: state.favoriteThings.push(action.payload)
        }
        default:
            return state
    }
}


function removeThings(arr,removeItem){
  return arr.filter(function(el){
    return el!==removeItem
  })
}


const store = redux.createStore(reducer)
store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(changeCount(2))
store.dispatch(addFavouriteThing("raindrop"))
store.dispatch(addFavouriteThing("kittens"))
store.dispatch(removeFavouriteThing("kittens"))
store.dispatch(setYoutubeTitle("Learn Redux"))
store.dispatch(upvoteVideo())