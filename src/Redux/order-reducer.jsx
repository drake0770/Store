const ADDNEWFULLOREDER = 'addNewFastOrder';
const CHANGEORDERSTATUS = 'changeOrderStatus';

const initionalState = {
    full: [{
        buyer: {fName: 'a', lName: 'a', number: 'a', email: 'a', address: 'a'},
        purchase: [{model: 'a', price: 2, amount: 1}]
    }],
    fast: [{number: 'formData.number', name: 'fast', order: 'model'}],
    inform: [{number: 'formData.number', name: 'inform', order: 'model'}]
};
let fullOrdersId = 0;
let fastOrdersId = 0;
let informOrdersId = 0;

export const orderReducer = (state = initionalState, action) => {
    switch (action.type) {
        case ADDNEWFULLOREDER: {

            return {
                ...state,
                full: [...state.full, {...action.order, completed: false, orderid: ++fullOrdersId}]
            }
        }
        case 'addFastOrder': {
            return {
                ...state,
                fast: [...state.fast, {...action.purshase, completed: false, orderid: ++fastOrdersId}]
            }
        }
        case 'addNewInform': {
            return {
                ...state,
                inform: [...state.inform, {...action.purshase, completed: false, orderid: ++informOrdersId}]
            }
        }
        case CHANGEORDERSTATUS:
            return {
                ...state,
                [action.request]: state[action.request].map(
                    (p) => {
                        if (action.orderid === p.orderid) {
                            return {...p, completed: true}
                        }
                        return p;
                    }
                )
            }
        default:
            return state;
    }
}

let date = new Date();
let filteredDate = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear();

export const addNewFullOrder = (formData, purchases, total) => {
    return {type: ADDNEWFULLOREDER, order: {buyer: formData, purchase: purchases, date: filteredDate, total: total}};
}
export const addNewFastOrder = (type, formData, model) => {
    return {type, purshase: {number: formData.number, name: formData.name, order: model, date: filteredDate}};
}
export const changeOrderStatus = (request, orderid) => {
    return {type: CHANGEORDERSTATUS, request, orderid};
}


