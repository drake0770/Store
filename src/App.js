import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import {Route, Switch, withRouter} from "react-router-dom";
import ProductContainer from './Components/Content/Product/ProductContainer';
import ItemContainer from "./Components/Content/Item/ItemContainer";
import {compose} from "redux";
import Cart from "./Components/Cart/CartContainer";
import OrdersPage from "./Components/Admin/ordersPageContainer";
import Bottom from "./Components/Bottom/Bottom";
import MainPage from "./Components/Content/MainPage/MainPageContainer";
import NotFoundPage from "./Components/Other/NotFoundPage";

function App() {

    return (<div className='app'>
            <Header/>
            <Navbar/>
            <Bottom/>
            <div>
                <Switch>
                    <Route path='/Store/admin' component={OrdersPage}/>
                    <Route path='/Store/cart' component={Cart}/>
                    <Route path='/Store/catalog/:section?' render={() => <ProductContainer/>}/>
                    <Route path='/Store/product/:section?/:model?' render={() => <ItemContainer/>}/>
                    <Route exact path='/Store/' render={() => <MainPage/>}/>
                    <Route path='*' render={() => <NotFoundPage/>}/>
                </Switch>
            </div>
        </div>
    );
}

export default compose(
    withRouter
)(App);
