import store from "./redux/index"
import {changeCount} from './redux/count';
import {addFavoriteThing,removeFavoriteThing} from './redux/favoriteThings'
import {setYouTubeTitle,incrementViewCount,upvoteVideo,downvoteVideo} from './redux/youTubeVideos'

  store.dispatch(changeCount(42))
   store.dispatch(addFavoriteThing('Pen'))
  store.dispatch(addFavoriteThing('door bells'))
    store.dispatch(addFavoriteThing('door bells1'))
 store.dispatch(removeFavoriteThing("door bells"))
store.dispatch(setYouTubeTitle("Learning Redux is Fun!"))
store.dispatch(incrementViewCount())
store.dispatch(incrementViewCount())
store.dispatch(incrementViewCount())
store.dispatch(incrementViewCount())
store.dispatch(upvoteVideo())
store.dispatch(upvoteVideo())
store.dispatch(downvoteVideo())