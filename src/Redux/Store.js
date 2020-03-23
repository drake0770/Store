import {applyMiddleware, combineReducers, createStore} from "redux";
import {dataReducer} from "./data-reducer";
import {cartReducer} from "./cart-reducer";
import {reducer as formReducer} from "redux-form";
import {orderReducer} from "./order-reducer";
import thunkMiddlewear from 'redux-thunk';
import {mainPageReducer} from "./mainpage-reducer";

let reducers = combineReducers({
    data: dataReducer,
    cart: cartReducer,
    form: formReducer,
    orderPage: orderReducer,
    main: mainPageReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddlewear));
export default store;