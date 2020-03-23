import {connect} from "react-redux";
import MainPage from "./MainPage";
import {addNewFastOrder} from "../../../Redux/order-reducer";

const mapStateToProps = (state) => {
    return {
        bestsell: state.main.bestsell,
        newItems: state.main.newItems
    }
}

export default connect(mapStateToProps, {addNewFastOrder})(MainPage);