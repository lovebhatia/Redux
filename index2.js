const redux = require("redux")

function increment() {
  return {
    type: "INCREMENT"
  }
}

function decrement() {
  return {
    type: "DECREMENT"
  }
}

console.log(increment())
console.log(decrement())

function reducer(state= {count = 0},action){
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
    case "INCREMENT":
    return {
       count : state.count + 1
     }
    case "DECREMENT":
    return {
       count : state.count - 1
     }
     default:
     return state
  }
}