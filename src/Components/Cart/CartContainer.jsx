import {connect} from "react-redux";
import Cart from "./Cart";
import {
    addItemOrder,
    changeAmountThunk,
    clearCart,
    deleteItemFromOrderThunk
} from "../../Redux/cart-reducer";
import {addNewFullOrder} from "../../Redux/order-reducer";
import {changeQuantity} from "../../Redux/data-reducer";

const mapStateToProps =(state)=>{
    return{
        items: state.cart.items,
        totalPurchasePrice: state.cart.totalPurchasePrice
    }
}

export default connect(mapStateToProps,{addItemOrder,deleteItemFromOrderThunk, addNewFullOrder, clearCart, changeQuantity, changeAmountThunk})(Cart);