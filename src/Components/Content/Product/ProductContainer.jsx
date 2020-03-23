import {addNewFastOrder} from "../../../Redux/order-reducer";
import {connect} from "react-redux";
import React from "react";
import {setCurrentSection} from "../../../Redux/data-reducer";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import Product from "./Product";

class ProductContainer extends React.Component {
    uploadItem() {
        let section = this.props.match.params.section;
        this.props.setCurrentSection(section);
    }

    componentDidMount() {
        this.uploadItem();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.section !== prevProps.match.params.section) {
            this.uploadItem();
        }
    }

    render() {
        return <Product data={this.props.data} addNewFastOrder={this.props.addNewFastOrder}/>
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.data.currentSection
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, {addNewFastOrder, setCurrentSection}))
(ProductContainer);