import store from "./redux/index"
import {changeCount} from './redux/count';
 store.dispatch(changeCount(42))