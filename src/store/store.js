import { createStore } from 'redux' /*create store*/
import DropShipping from '../reducers/index' /*import combine reducer to store*/


let store = createStore(DropShipping);

