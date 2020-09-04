const redux = require("redux")


function changeCount(amount =1) {
  
  return {
    type: "CHANGE_ACCOUNT",
    payload: amount
  }
}


function increment(amount) {
  
  return {
    type: "CHANGE_ACCOUNT",
    payload: amount
  }
}

function decrement() {
  return {
    type: "DECREMENT",
    payload: "amount"
  }
}

function double() {
  return {
    type: "DOUBLE",
    payload: "amount"
  }
}
function halve() {
  return {
    type: "HALVE",
    payload: "amount"
  }
}

//console.log(increment())
//console.log(decrement())
//console.log(double())
//console.log(halve())

function reducer(state= {count: 0},action){
   //return new state based on incoming action.type
   /*
   if(action.type==="INCREMENT"){
     return {
       count : state.count + 1
     }
    }
    else if(action.type==="DECREMENT"){
       return {
         count : state.count - 1
       }
   }
   */
  switch(action.type) {
     case "CHANGE_ACCOUNT":
    return {
       count : state.count + action.payload
     }
    case "INCREMENT":
    return {
       count : state.count + action.payload
     }
    case "DECREMENT":
    return {
       count : state.count - action.payload
     }
     case "Double":
     return {
       count: state.count * action.payload
     }
     case "HALVE":
     return {
       count: state.count / action.payload
     }
     default:
     return state
  }
}

const store = redux.createStore(reducer)
store.subscribe(() => {
  console.log(store.getState())
});
store.dispatch(changeCount(-3))










