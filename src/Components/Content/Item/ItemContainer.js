import React from "react";
import {connect} from "react-redux";
import Item from "./Item";
import {setCurrentItem} from "../../../Redux/data-reducer";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {addItemOrderThunk} from "../../../Redux/cart-reducer";
import {addNewFastOrder} from "../../../Redux/order-reducer";


class ItemContainer extends React.Component {
    uploadItem() {
        let section = this.props.match.params.section;
        let model = this.props.match.params.model;
        this.props.setCurrentItem(section, model);
    }

    componentDidMount() {
        this.uploadItem();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.model !== prevProps.match.params.model) {
            this.uploadItem();
        }
    }

    render() {
        return (<div>
            <Item currentItem={this.props.currentItem} addItemOrderThunk={this.props.addItemOrderThunk}
                  addNewFastOrder={this.props.addNewFastOrder}/>
        </div>);
    }
}

const mapStateToProps = (state) => {
    return {
        currentItem: state.data.currentItem
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, {setCurrentItem, addItemOrderThunk, addNewFastOrder}))
(ItemContainer);